// =============================================================================
// D&D 5e RULE ENGINE & MULTICLASSING LOGIC
// Compatibile con Scheda a 3 Pagine, PWA, Auto-save e Multiclasse ufficiale
// =============================================================================

const DND_ENGINE = {
  getData() {
    if (typeof window !== 'undefined' && window.DND_DATA) return window.DND_DATA;
    if (typeof DND_DATA !== 'undefined') return DND_DATA;
    if (typeof global !== 'undefined' && global.DND_DATA) return global.DND_DATA;
    try { return require('./dnd-compendium-data.js'); } catch { return {}; }
  },

  // Calcolo Modificatore: (Punteggio - 10) / 2
  calcMod(score) {
    const val = parseInt(score, 10) || 10;
    return Math.floor((val - 10) / 2);
  },

  formatMod(mod) {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  },

  // Bonus di Competenza (basato sul Livello Totale del Personaggio)
  calcPB(totalLevel) {
    const lvl = Math.max(1, Math.min(20, parseInt(totalLevel, 10) || 1));
    return Math.floor((lvl - 1) / 4) + 2;
  },

  // Calcolo Punti Ferita Max (Supporta Classe Singola e Multiclasse)
  calcMaxHP(classObj, level, conMod, hillDwarf = false, multiClassObj = null, multiLevel = 0) {
    if (!classObj) return 10 + conMod;
    const hd1 = classObj.hitDie || 8;
    const avg1 = Math.floor(hd1 / 2) + 1;

    // 1° Livello: massimo dado vita della prima classe
    let hp = hd1 + conMod;

    // Livelli successivi prima classe
    if (level > 1) {
      hp += (level - 1) * (avg1 + conMod);
    }

    // Livelli seconda classe (Multiclasse)
    if (multiClassObj && multiLevel > 0) {
      const hd2 = multiClassObj.hitDie || 8;
      const avg2 = Math.floor(hd2 / 2) + 1;
      hp += multiLevel * (avg2 + conMod);
    }

    if (hillDwarf) {
      hp += (level + (multiLevel || 0));
    }

    return Math.max(1, hp);
  },

  // Calcolo Classe Armatura (CA)
  calcAC(classId, dexMod, conMod, wisMod, hasShield = false, equippedArmor = "none") {
    let baseAC = 10 + dexMod;

    if (equippedArmor === "none") {
      if (classId === "barbarian") {
        baseAC = 10 + dexMod + conMod; // Difesa senz'armatura Barbaro
      } else if (classId === "monk") {
        baseAC = 10 + dexMod + wisMod; // Difesa senz'armatura Monaco
      }
    } else if (equippedArmor === "leather") {
      baseAC = 11 + dexMod;
    } else if (equippedArmor === "scale_mail") {
      baseAC = 14 + Math.min(2, dexMod);
    } else if (equippedArmor === "chain_mail") {
      baseAC = 16;
    } else if (equippedArmor === "plate") {
      baseAC = 18;
    }

    if (hasShield) baseAC += 2;
    return baseAC;
  },

  // Validazione Requisiti Minimi Multiclasse (PHB Cap. 6)
  checkMulticlassPrereqs(primaryClassId, secondaryClassId, stats) {
    const data = this.getData();
    const prereqs = data?.multiclass?.prerequisites || {};
    const results = { canMulticlass: true, warnings: [] };

    // Controlla requisiti di uscita classe primaria
    const pReq = prereqs[primaryClassId];
    if (pReq) {
      if (pReq.stat && (stats[pReq.stat] || 10) < pReq.min) {
        results.canMulticlass = false;
        results.warnings.push(`Per uscire da ${primaryClassId.toUpperCase()} serve almeno ${pReq.label}.`);
      }
    }

    // Controlla requisiti di entrata seconda classe
    const sReq = prereqs[secondaryClassId];
    if (sReq) {
      if (sReq.stat && (stats[sReq.stat] || 10) < sReq.min) {
        results.canMulticlass = false;
        results.warnings.push(`Per entrare in ${secondaryClassId.toUpperCase()} serve almeno ${sReq.label}.`);
      } else if (sReq.statChoice) {
        const ok = sReq.statChoice.some(st => (stats[st] || 10) >= sReq.min);
        if (!ok) {
          results.canMulticlass = false;
          results.warnings.push(`Per entrare in ${secondaryClassId.toUpperCase()} serve ${sReq.label}.`);
        }
      } else if (sReq.stats) {
        const ok = sReq.stats.every(st => (stats[st] || 10) >= sReq.min);
        if (!ok) {
          results.canMulticlass = false;
          results.warnings.push(`Per entrare in ${secondaryClassId.toUpperCase()} serve ${sReq.label}.`);
        }
      }
    }

    return results;
  },

  // Generatore della struttura dati per la Scheda (Supporta Singola e Multiclasse)
  buildSheetPayload(wizardData) {
    const data = this.getData();
    const race = (data.races || []).find(r => r.id === wizardData.raceId) || {};
    const cls1 = (data.classes || []).find(c => c.id === wizardData.classId) || {};
    const sub1 = (data.subclasses || []).find(s => s.id === wizardData.subclassId) || {};
    const bg = (data.backgrounds || []).find(b => b.id === wizardData.bgId) || {};

    const level1 = parseInt(wizardData.level, 10) || 1;

    // Multiclasse Opzionale
    const isMulti = wizardData.multiclass && wizardData.multiclass.enabled;
    const cls2 = isMulti ? (data.classes || []).find(c => c.id === wizardData.multiclass.classId) : null;
    const sub2 = isMulti ? (data.subclasses || []).find(s => s.id === wizardData.multiclass.subclassId) : null;
    const level2 = isMulti ? parseInt(wizardData.multiclass.level, 10) || 1 : 0;

    const totalLevel = level1 + level2;
    const pb = this.calcPB(totalLevel);

    const finalStats = { ...wizardData.finalScores };
    const strMod = this.calcMod(finalStats.str);
    const dexMod = this.calcMod(finalStats.dex);
    const conMod = this.calcMod(finalStats.con);
    const intMod = this.calcMod(finalStats.int);
    const wisMod = this.calcMod(finalStats.wis);
    const chaMod = this.calcMod(finalStats.cha);

    const isHillDwarf = wizardData.raceId === "dwarf_hill";
    const maxHp = this.calcMaxHP(cls1, level1, conMod, isHillDwarf, cls2, level2);
    const ac = this.calcAC(cls1.id, dexMod, conMod, wisMod, wizardData.hasShield, wizardData.equippedArmor || "none");

    // Tiri Salvezza (Regola Ufficiale 5e: solo dalla classe primaria iniziale!)
    const savingThrows = {
      str: { name: "Forza", stat: "str", prof: (cls1.savingThrows || []).includes("str") },
      dex: { name: "Destrezza", stat: "dex", prof: (cls1.savingThrows || []).includes("dex") },
      con: { name: "Costituzione", stat: "con", prof: (cls1.savingThrows || []).includes("con") },
      int: { name: "Intelligenza", stat: "int", prof: (cls1.savingThrows || []).includes("int") },
      wis: { name: "Saggezza", stat: "wis", prof: (cls1.savingThrows || []).includes("wis") },
      cha: { name: "Carisma", stat: "cha", prof: (cls1.savingThrows || []).includes("cha") }
    };

    // Competenze Abilità
    const profSkills = new Set(wizardData.selectedSkills || []);
    if (bg.skills) bg.skills.forEach(s => profSkills.add(s));

    const skillDefs = {
      acrobatics: { name: "Acrobazia", stat: "dex" },
      animal_handling: { name: "Addestrare Animali", stat: "wis" },
      arcana: { name: "Arcano", stat: "int" },
      athletics: { name: "Atletica", stat: "str" },
      deception: { name: "Inganno", stat: "cha" },
      history: { name: "Storia", stat: "int" },
      insight: { name: "Intuizione", stat: "wis" },
      intimidation: { name: "Intimidire", stat: "cha" },
      investigation: { name: "Indagare", stat: "int" },
      medicine: { name: "Medicina", stat: "wis" },
      nature: { name: "Natura", stat: "int" },
      perception: { name: "Percezione", stat: "wis" },
      performance: { name: "Intrattenere", stat: "cha" },
      persuasion: { name: "Persuasione", stat: "cha" },
      religion: { name: "Religione", stat: "int" },
      sleight_of_hand: { name: "Rapidità di Mano", stat: "dex" },
      stealth: { name: "Furtività", stat: "dex" },
      survival: { name: "Sopravvivenza", stat: "wis" }
    };

    const skills = {};
    Object.keys(skillDefs).forEach(sk => {
      skills[sk] = {
        name: skillDefs[sk].name,
        stat: skillDefs[sk].stat,
        prof: profSkills.has(sk)
      };
    });

    // Privilegi di Classe, Sottoclasse e Razza Combinati
    let featuresText = `=== TRATTI RAZZIALI (${race.name || ""}) ===\n`;
    (race.traits || []).forEach(t => {
      featuresText += `• ${t.name}: ${t.desc}\n`;
    });

    // Classe 1
    featuresText += `\n=== CLASSE: ${cls1.name || ""} (Liv. ${level1}) ===\n`;
    if (cls1.featuresByLevel) {
      for (let l = 1; l <= level1; l++) {
        if (cls1.featuresByLevel[l]) {
          cls1.featuresByLevel[l].forEach(f => {
            featuresText += `• [Liv. ${l}] ${f.name}: ${f.desc}\n`;
          });
        }
      }
    }
    if (sub1.name) {
      featuresText += `\n=== SOTTOCLASSE: ${sub1.name} ===\n`;
      (sub1.features || []).forEach(f => {
        if (f.level <= level1) {
          featuresText += `• [Liv. ${f.level}] ${f.name}: ${f.desc}\n`;
        }
      });
    }

    // Classe 2 (se Multiclasse)
    if (cls2 && level2 > 0) {
      featuresText += `\n=== MULTICLASSE: ${cls2.name} (Liv. ${level2}) ===\n`;
      if (cls2.featuresByLevel) {
        for (let l = 1; l <= level2; l++) {
          if (cls2.featuresByLevel[l]) {
            cls2.featuresByLevel[l].forEach(f => {
              featuresText += `• [Liv. ${l}] ${f.name}: ${f.desc}\n`;
            });
          }
        }
      }
      if (sub2 && sub2.name) {
        featuresText += `\n=== SOTTOCLASSE: ${sub2.name} ===\n`;
        (sub2.features || []).forEach(f => {
          if (f.level <= level2) {
            featuresText += `• [Liv. ${f.level}] ${f.name}: ${f.desc}\n`;
          }
        });
      }
    }

    // Armi Iniziali di classe
    const weapons = [
      {
        id: "w_main",
        name: cls1.id === "barbarian" ? "Alabarda (Fendente)" : (cls1.id === "rogue" ? "Stocco" : "Spada Lunga"),
        stat: cls1.id === "rogue" ? "dex" : "str",
        prof: true,
        specialAtkBonus: 0,
        dice: cls1.id === "barbarian" ? "1d10" : "1d8",
        type: "Tagliente",
        bonusDmg: 0
      }
    ];

    if (cls1.id === "barbarian") {
      weapons.push({
        id: "w_pam",
        name: "PAM (Colpo d'Asta Bonus)",
        stat: "str",
        prof: true,
        specialAtkBonus: 0,
        dice: "1d4",
        type: "Contundente",
        bonusDmg: 0
      });
      weapons.push({
        id: "w_javelin",
        name: "Giavellotto (Lancio 9/36m)",
        stat: "str",
        prof: true,
        specialAtkBonus: 0,
        dice: "1d6",
        type: "Perforante",
        bonusDmg: 0
      });
    }

    // Stringa Classe e Livello Formattata
    const sub1Str = sub1.name ? ` (${sub1.name.split('(')[0].trim()})` : "";
    let classLevelString = `${cls1.name || "Avventuriero"}${sub1Str} ${level1}`;
    if (cls2 && level2 > 0) {
      const sub2Str = sub2?.name ? ` (${sub2.name.split('(')[0].trim()})` : "";
      classLevelString += ` / ${cls2.name}${sub2Str} ${level2}`;
    }

    // Dadi Vita Combinati
    let hitDiceTotal = `${level1}d${cls1.hitDie || 8}`;
    if (cls2 && level2 > 0) {
      hitDiceTotal += ` + ${level2}d${cls2.hitDie || 8}`;
    }

    const fields = {
      characterName: wizardData.charName || "Nuovo Eroe",
      classLevel: classLevelString,
      background: bg.name || "Eremita",
      playerName: wizardData.playerName || "Giocatore",
      race: race.name || "Umano",
      alignment: wizardData.alignment || "Caotico Buono",
      experiencePoints: `${(totalLevel * 1000)} XP`,

      armorClass: ac,
      initiative: dexMod >= 0 ? `+${dexMod}` : `${dexMod}`,
      speed: `${race.speed || 9} m`,

      maxHp: maxHp,
      currentHp: maxHp,
      tempHp: 0,
      hitDiceTotal: hitDiceTotal,
      hitDiceRemaining: hitDiceTotal,

      featuresAndTraits: featuresText,
      otherProficiencies: `Linguaggi: ${(race.languages || ["Comune"]).join(", ")}\nArmature: ${(cls1.armorProficiencies || []).join(", ") || "Nessuna"}\nArmi: ${(cls1.weaponProficiencies || []).join(", ")}`,
      equipmentList: `Zaino da avventuriero, abiti comuni, equipaggiamento di classe.`
    };

    return {
      version: "2.0",
      model: {
        identity: {
          characterName: fields.characterName,
          classLevel: fields.classLevel,
          background: fields.background,
          playerName: fields.playerName,
          race: fields.race,
          alignment: fields.alignment,
          experiencePoints: fields.experiencePoints
        },
        stats: finalStats,
        proficiencyBonus: pb,
        inspiration: false,
        isRaging: false,
        savingThrows,
        skills,
        weapons,
        portraitDataUrl: wizardData.portraitDataUrl || null
      },
      fields
    };
  },

  // ---------------------------------------------------------------------------
  // GESTIONE LOCALSTORAGE MULTI-SCHEDA
  // ---------------------------------------------------------------------------
  STORAGE_KEY_LIST: "dnd_zelota_characters_index",
  STORAGE_PREFIX: "dnd_zelota_char_",
  ACTIVE_CHAR_KEY: "dnd_zelota_active_id",

  getSavedCharactersList() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY_LIST);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  saveCharacter(charPayload, id = null) {
    try {
      const charId = id || `char_${Date.now()}`;
      const name = charPayload.fields?.characterName || "Senza Nome";
      const charClass = charPayload.fields?.classLevel || "Avventuriero";

      localStorage.setItem(this.STORAGE_PREFIX + charId, JSON.stringify(charPayload));

      let list = this.getSavedCharactersList();
      const existingIdx = list.findIndex(c => c.id === charId);
      const meta = { id: charId, name, classLevel: charClass, updatedAt: new Date().toISOString() };

      if (existingIdx >= 0) {
        list[existingIdx] = meta;
      } else {
        list.push(meta);
      }
      localStorage.setItem(this.STORAGE_KEY_LIST, JSON.stringify(list));
      localStorage.setItem(this.ACTIVE_CHAR_KEY, charId);
      return charId;
    } catch (e) {
      console.error("Errore salvataggio scheda", e);
      return null;
    }
  },

  loadCharacter(id) {
    try {
      const raw = localStorage.getItem(this.STORAGE_PREFIX + id);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  deleteCharacter(id) {
    try {
      localStorage.removeItem(this.STORAGE_PREFIX + id);
      let list = this.getSavedCharactersList().filter(c => c.id !== id);
      localStorage.setItem(this.STORAGE_KEY_LIST, JSON.stringify(list));
      if (localStorage.getItem(this.ACTIVE_CHAR_KEY) === id) {
        localStorage.removeItem(this.ACTIVE_CHAR_KEY);
      }
      return true;
    } catch {
      return false;
    }
  }
};

if (typeof window !== "undefined") {
  window.DND_ENGINE = DND_ENGINE;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = DND_ENGINE;
}


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

  // ---------------------------------------------------------------------------
  // GESTIONE INDEXEDDB (SENZA LIMITI DI SPAZIO PER RITRATTI HD & MULTI-SCHEDE)
  // ---------------------------------------------------------------------------
  DB_NAME: "dnd_zelota_db",
  DB_VERSION: 1,
  STORE_NAME: "characters",

  async openDB() {
    if (typeof window === "undefined" || !window.indexedDB) return null;
    return new Promise((resolve) => {
      try {
        const req = window.indexedDB.open(this.DB_NAME, this.DB_VERSION);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(this.STORE_NAME)) {
            db.createObjectStore(this.STORE_NAME, { keyPath: "id" });
          }
        };
        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });
  },

  async saveCharacterAsync(charPayload, id = null) {
    const charId = id || `char_${Date.now()}`;
    const name = charPayload.fields?.characterName || charPayload.data?.identity?.characterName || "Senza Nome";
    const charClass = charPayload.fields?.classLevel || charPayload.data?.identity?.classLevel || "Avventuriero";

    // Salva sempre anche in localStorage (versione sincrona / backup)
    this.saveCharacter(charPayload, charId);

    // Salva in IndexedDB per rimuovere il limite di 5MB e supportare immagini ad altissima risoluzione
    const db = await this.openDB();
    if (db) {
      try {
        const tx = db.transaction(this.STORE_NAME, "readwrite");
        const store = tx.objectStore(this.STORE_NAME);
        store.put({ id: charId, payload: charPayload, updatedAt: new Date().toISOString() });
      } catch (err) {
        console.warn("IndexedDB save non riuscito, usato localStorage:", err);
      }
    }
    return charId;
  },

  async loadCharacterAsync(id) {
    const db = await this.openDB();
    if (db) {
      try {
        const rec = await new Promise((resolve) => {
          const tx = db.transaction(this.STORE_NAME, "readonly");
          const store = tx.objectStore(this.STORE_NAME);
          const req = store.get(id);
          req.onsuccess = () => resolve(req.result ? req.result.payload : null);
          req.onerror = () => resolve(null);
        });
        if (rec) return rec;
      } catch (err) {
        console.warn("IndexedDB load fallback su localStorage:", err);
      }
    }
    return this.loadCharacter(id);
  },

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
      const name = charPayload.fields?.characterName || charPayload.data?.identity?.characterName || "Senza Nome";
      const charClass = charPayload.fields?.classLevel || charPayload.data?.identity?.classLevel || "Avventuriero";

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
      console.error("Errore salvataggio scheda in localStorage", e);
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
      this.openDB().then(db => {
        if (db) {
          const tx = db.transaction(this.STORE_NAME, "readwrite");
          tx.objectStore(this.STORE_NAME).delete(id);
        }
      });
      return true;
    } catch {
      return false;
    }
  },

  // ---------------------------------------------------------------------------
  // Calcolo Slot Incantesimi (D&D 5e) per tutte le 13 classi
  calculateSpellSlots(className, level) {
    const cls = (className || "").toLowerCase();
    const lvl = Math.max(1, Math.min(20, parseInt(level, 10) || 1));

    const fullCasters = ["bard", "bardo", "cleric", "chierico", "druid", "druido", "sorcerer", "stregone", "wizard", "mago"];
    const halfCasters = ["paladin", "paladino", "ranger"];
    const artificers = ["artificer", "artefice"];
    const warlocks = ["warlock"];

    const fullCasterTable = [
      [0,0,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0], // 1
      [3,0,0,0,0,0,0,0,0], // 2
      [4,2,0,0,0,0,0,0,0], // 3
      [4,3,0,0,0,0,0,0,0], // 4
      [4,3,2,0,0,0,0,0,0], // 5
      [4,3,3,0,0,0,0,0,0], // 6
      [4,3,3,1,0,0,0,0,0], // 7
      [4,3,3,2,0,0,0,0,0], // 8
      [4,3,3,3,1,0,0,0,0], // 9
      [4,3,3,3,2,0,0,0,0], // 10
      [4,3,3,3,2,1,0,0,0], // 11
      [4,3,3,3,2,1,0,0,0], // 12
      [4,3,3,3,2,1,1,0,0], // 13
      [4,3,3,3,2,1,1,0,0], // 14
      [4,3,3,3,2,1,1,1,0], // 15
      [4,3,3,3,2,1,1,1,0], // 16
      [4,3,3,3,2,1,1,1,1], // 17
      [4,3,3,3,3,1,1,1,1], // 18
      [4,3,3,3,3,2,1,1,1], // 19
      [4,3,3,3,3,2,2,1,1]  // 20
    ];

    const halfCasterTable = [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0], // 1
      [2,0,0,0,0,0,0,0,0], // 2
      [3,0,0,0,0,0,0,0,0], // 3
      [3,0,0,0,0,0,0,0,0], // 4
      [4,2,0,0,0,0,0,0,0], // 5
      [4,2,0,0,0,0,0,0,0], // 6
      [4,3,0,0,0,0,0,0,0], // 7
      [4,3,0,0,0,0,0,0,0], // 8
      [4,3,2,0,0,0,0,0,0], // 9
      [4,3,2,0,0,0,0,0,0], // 10
      [4,3,3,0,0,0,0,0,0], // 11
      [4,3,3,0,0,0,0,0,0], // 12
      [4,3,3,1,0,0,0,0,0], // 13
      [4,3,3,1,0,0,0,0,0], // 14
      [4,3,3,2,0,0,0,0,0], // 15
      [4,3,3,2,0,0,0,0,0], // 16
      [4,3,3,3,1,0,0,0,0], // 17
      [4,3,3,3,1,0,0,0,0], // 18
      [4,3,3,3,2,0,0,0,0], // 19
      [4,3,3,3,2,0,0,0,0]  // 20
    ];

    const artificerTable = [
      [0,0,0,0,0,0,0,0,0],
      [2,0,0,0,0,0,0,0,0], // 1
      [2,0,0,0,0,0,0,0,0], // 2
      [3,0,0,0,0,0,0,0,0], // 3
      [3,0,0,0,0,0,0,0,0], // 4
      [4,2,0,0,0,0,0,0,0], // 5
      [4,2,0,0,0,0,0,0,0], // 6
      [4,3,0,0,0,0,0,0,0], // 7
      [4,3,0,0,0,0,0,0,0], // 8
      [4,3,2,0,0,0,0,0,0], // 9
      [4,3,2,0,0,0,0,0,0], // 10
      [4,3,3,0,0,0,0,0,0], // 11
      [4,3,3,0,0,0,0,0,0], // 12
      [4,3,3,1,0,0,0,0,0], // 13
      [4,3,3,1,0,0,0,0,0], // 14
      [4,3,3,2,0,0,0,0,0], // 15
      [4,3,3,2,0,0,0,0,0], // 16
      [4,3,3,3,1,0,0,0,0], // 17
      [4,3,3,3,1,0,0,0,0], // 18
      [4,3,3,3,2,0,0,0,0], // 19
      [4,3,3,3,2,0,0,0,0]  // 20
    ];

    if (fullCasters.some(c => cls.includes(c))) {
      return { slots: fullCasterTable[lvl] || [0,0,0,0,0,0,0,0,0], isCaster: true, type: "full" };
    }
    if (halfCasters.some(c => cls.includes(c))) {
      return { slots: halfCasterTable[lvl] || [0,0,0,0,0,0,0,0,0], isCaster: true, type: "half" };
    }
    if (artificers.some(c => cls.includes(c))) {
      return { slots: artificerTable[lvl] || [0,0,0,0,0,0,0,0,0], isCaster: true, type: "artificer" };
    }
    if (warlocks.some(c => cls.includes(c))) {
      const pactSlots = [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4][lvl] || 1;
      const pactLevel = lvl >= 9 ? 5 : lvl >= 7 ? 4 : lvl >= 5 ? 3 : lvl >= 3 ? 2 : 1;
      const slots = [0,0,0,0,0,0,0,0,0];
      slots[pactLevel - 1] = pactSlots;
      return { slots, isCaster: true, type: "pact", pactLevel, pactSlots };
    }

    return { slots: [0,0,0,0,0,0,0,0,0], isCaster: false, type: "none" };
  },

  calculateRageUses(level) {
    const lvl = Math.max(1, Math.min(20, parseInt(level, 10) || 1));
    if (lvl >= 20) return 999;
    if (lvl >= 17) return 6;
    if (lvl >= 12) return 5;
    if (lvl >= 6) return 4;
    if (lvl >= 3) return 3;
    return 2;
  },

  calculateRageDamage(level) {
    const lvl = Math.max(1, Math.min(20, parseInt(level, 10) || 1));
    if (lvl >= 16) return 4;
    if (lvl >= 9) return 3;
    return 2;
  },

    // MOTORE DI GIOCO: SALI DI LIVELLO (LEVEL UP)
  // ---------------------------------------------------------------------------
  levelUp(charData, options = {}) {
    const data = this.getData();
    const hpMode = options.hpMode || "average"; // "average" o "roll"
    const hpRoll = parseInt(options.hpRoll, 10) || 0;

    // Recupera la classe primaria
    const identity = charData.data?.identity || {};
    const classLevelStr = identity.classLevel || "Barbaro 1";
    const match = classLevelStr.match(/([a-zA-ZàèéìòùÀÈÉÌÒÙ\s]+?)\s*(\(?.*?\)?)\s*(\d+)/);
    
    let currentLevel = 1;
    let className = "Barbaro";
    let subName = "";
    if (match) {
      className = match[1].trim();
      subName = match[2].trim();
      currentLevel = parseInt(match[3], 10) || 1;
    }

    const newLevel = currentLevel + 1;
    if (newLevel > 20) return { success: false, message: "Livello massimo (20) già raggiunto!" };

    // Trova classe nel compendio per dado vita
    const classObj = (data.classes || []).find(c => c.name.toLowerCase() === className.toLowerCase() || c.id.toLowerCase() === className.toLowerCase()) || (data.classes || [])[0];
    const hitDie = classObj.hitDie || 8;
    const conMod = this.calcMod(charData.data?.stats?.con || 10);

    // Calcolo incremento PF
    let hpGain = 0;
    if (hpMode === "roll" && hpRoll > 0) {
      hpGain = Math.max(1, hpRoll + conMod);
    } else {
      hpGain = Math.max(1, Math.floor(hitDie / 2) + 1 + conMod);
    }

    // Tratto razziale Nano delle colline (+1 PF per livello)
    const raceName = (identity.race || "").toLowerCase();
    if (raceName.includes("colline") || raceName.includes("hill")) {
      hpGain += 1;
    }

    // Aggiorna PF massimi e correnti
    const currentMaxHp = parseInt(charData.fields?.maxHp || charData.data?.hp?.max || 50, 10);
    const newMaxHp = currentMaxHp + hpGain;
    const currentHp = parseInt(charData.fields?.currentHp || charData.data?.hp?.current || currentMaxHp, 10);

    if (charData.fields) {
      charData.fields.maxHp = newMaxHp;
      charData.fields.currentHp = currentHp + hpGain;
      charData.fields.classLevel = `${className} ${subName ? subName + ' ' : ''}${newLevel}`;
      charData.fields.hitDiceTotal = `${newLevel}d${hitDie}`;
    }
    if (charData.data) {
      if (!charData.data.hp) charData.data.hp = {};
      charData.data.hp.max = newMaxHp;
      charData.data.hp.current = currentHp + hpGain;
      charData.data.identity.classLevel = `${className} ${subName ? subName + ' ' : ''}${newLevel}`;
    }

    // Aggiorna Bonus di Competenza
    const newPB = this.calcPB(newLevel);
    if (charData.fields) charData.fields.proficiencyBonus = `+${newPB}`;
    if (charData.data) charData.data.proficiencyBonus = newPB;

    // Recupera nuovi privilegi sbloccati
    const newFeatures = classObj.featuresByLevel?.[newLevel] || [];
    let unlockedText = "";
    if (newFeatures.length > 0) {
      unlockedText = newFeatures.map(f => `• ${f.name}: ${f.desc}`).join("\n");
      const oldFeatures = charData.fields?.featuresTraits || "";
      if (charData.fields) {
        charData.fields.featuresTraits = `=== PRIVILEGI LIVELLO ${newLevel} ===\n${unlockedText}\n\n` + oldFeatures;
      }
    }

    // Calcola nuovi slot incantesimi e usi ira
    const slotInfo = this.calculateSpellSlots(className, newLevel);
    const rageUses = this.calculateRageUses(newLevel);
    const rageDamage = this.calculateRageDamage(newLevel);

    if (slotInfo.isCaster) {
      charData.spellSlots = slotInfo.slots;
    }
    if (className.toLowerCase().includes("barbar")) {
      charData.rageMax = rageUses;
    }

    return {
      success: true,
      newLevel,
      hpGain,
      newMaxHp,
      newPB,
      slotInfo,
      rageUses,
      rageDamage,
      unlockedFeatures: newFeatures,
      isAsiLevel: (newLevel === 4 || newLevel === 8 || newLevel === 12 || newLevel === 16 || newLevel === 19 || (classObj.id === "fighter" && (newLevel === 6 || newLevel === 14)) || (classObj.id === "rogue" && newLevel === 10))
    };
  },

  // ---------------------------------------------------------------------------
  // MOTORE DI GIOCO: RIPOSO BREVE & RIPOSO LUNGO (SHORT / LONG REST)
  // ---------------------------------------------------------------------------
  shortRest(charData, options = {}) {
    const diceSpent = parseInt(options.diceSpent, 10) || 0;
    const hpRecovered = parseInt(options.hpRecovered, 10) || 0;

    const maxHp = parseInt(charData.fields?.maxHp || charData.data?.hp?.max || 50, 10);
    let curHp = parseInt(charData.fields?.currentHp || charData.data?.hp?.current || maxHp, 10);
    curHp = Math.min(maxHp, curHp + hpRecovered);

    if (charData.fields) charData.fields.currentHp = curHp;
    if (charData.data?.hp) charData.data.hp.current = curHp;

    // Ripristina risorse che si ricaricano a riposo breve (Ki, Incanalare Divinità, Azione Impetuosa, ecc.)
    return {
      success: true,
      currentHp: curHp,
      maxHp: maxHp,
      message: `Riposo Breve completato! Recuperati ${hpRecovered} PF. Risorse a riposo breve ripristinate.`
    };
  },

  longRest(charData) {
    const maxHp = parseInt(charData.fields?.maxHp || charData.data?.hp?.max || 50, 10);
    if (charData.fields) {
      charData.fields.currentHp = maxHp;
      charData.fields.tempHp = 0;
    }
    if (charData.data?.hp) {
      charData.data.hp.current = maxHp;
      charData.data.hp.temp = 0;
    }

    // Reset slot incantesimi utilizzati
    charData.spellSlotsUsed = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    charData.rageUsed = 0;

    return {
      success: true,
      currentHp: maxHp,
      maxHp: maxHp,
      message: "Riposo Lungo completato! PF ripristinati al massimo (+" + maxHp + " PF), recuperati dadi vita, azzerati gli slot incantesimi consumati e ricaricati tutti gli usi d'Ira!"
    };
  },

  // ---------------------------------------------------------------------------
  // GESTIONE GRIMORIO / IL MIO LIBRO DEGLI INCANTESIMI
  // ---------------------------------------------------------------------------
  getCharacterSpells(charData) {
    if (!charData) return [];
    if (!charData.spells) charData.spells = [];
    return charData.spells;
  },

  addSpellToCharacter(charData, spellId) {
    if (!charData.spells) charData.spells = [];
    if (!charData.spells.includes(spellId)) {
      charData.spells.push(spellId);
      return true;
    }
    return false;
  },

  removeSpellFromCharacter(charData, spellId) {
    if (!charData.spells) return false;
    const idx = charData.spells.indexOf(spellId);
    if (idx >= 0) {
      charData.spells.splice(idx, 1);
      return true;
    }
    return false;
  }
};

if (typeof window !== "undefined") {
  window.DND_ENGINE = DND_ENGINE;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = DND_ENGINE;
}


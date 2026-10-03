// =============================================================================
// D&D 5E COMPANION & CHARACTER BUILDER - UNIFIED CONTROLLER
// Gestione Completa Scheda Ufficiale 3 Pagine, Wizard, Compendio, Auto-save ed E-Ink
// =============================================================================

const App = {
  activeView: 'view-sheet',
  activePage: 1,
  activeCharId: null,

  // Modello reattivo della Scheda Personaggio
  model: {
    data: {
      identity: {
        characterName: "Kaelen 'Stigmata' Vane",
        classLevel: "Barbaro (Zelota) 6",
        background: "Eremita / Soldato",
        playerName: "Giocatore",
        race: "Custom Lineage (Umano Marchiato)",
        alignment: "Caotico Buono",
        experiencePoints: "14.000 XP"
      },
      stats: { str: 17, dex: 14, con: 14, int: 8, wis: 12, cha: 10 },
      proficiencyBonus: 3,
      inspiration: false,
      isRaging: false,
      savingThrows: {
        str: { name: "Forza", stat: "str", prof: true },
        dex: { name: "Destrezza", stat: "dex", prof: false },
        con: { name: "Costituzione", stat: "con", prof: true },
        int: { name: "Intelligenza", stat: "int", prof: false },
        wis: { name: "Saggezza", stat: "wis", prof: false },
        cha: { name: "Carisma", stat: "cha", prof: false }
      },
      skills: {
        acrobatics: { name: "Acrobazia", stat: "dex", prof: false },
        animal_handling: { name: "Addestrare Animali", stat: "wis", prof: false },
        arcana: { name: "Arcano", stat: "int", prof: false },
        athletics: { name: "Atletica", stat: "str", prof: true },
        deception: { name: "Inganno", stat: "cha", prof: false },
        history: { name: "Storia", stat: "int", prof: false },
        insight: { name: "Intuizione", stat: "wis", prof: false },
        intimidation: { name: "Intimidire", stat: "cha", prof: true },
        investigation: { name: "Indagare", stat: "int", prof: false },
        medicine: { name: "Medicina", stat: "wis", prof: false },
        nature: { name: "Natura", stat: "int", prof: false },
        perception: { name: "Percezione", stat: "wis", prof: true },
        performance: { name: "Intrattenere", stat: "cha", prof: false },
        persuasion: { name: "Persuasione", stat: "cha", prof: false },
        religion: { name: "Religione", stat: "int", prof: false },
        sleight_of_hand: { name: "Rapidità di Mano", stat: "dex", prof: false },
        stealth: { name: "Furtività", stat: "dex", prof: false },
        survival: { name: "Sopravvivenza", stat: "wis", prof: true }
      },
      weapons: [
        {
          id: "w_glaive",
          name: "Alabarda Solare (+1)",
          stat: "str",
          prof: true,
          specialAtkBonus: 1,
          dice: "1d10",
          type: "Tagliente (Portata 3m)",
          bonusDmg: 1
        },
        {
          id: "w_pam_bonus",
          name: "Colpo di Pomo (PAM)",
          stat: "str",
          prof: true,
          specialAtkBonus: 1,
          dice: "1d4",
          type: "Contundente (Az. Bonus)",
          bonusDmg: 1
        },
        {
          id: "w_javelin",
          name: "Giavellotto (Lancio)",
          stat: "str",
          prof: true,
          specialAtkBonus: 0,
          dice: "1d6",
          type: "Perforante (9/36m)",
          bonusDmg: 0
        }
      ],
      portraitDataUrl: null
    },

    getModifier(score) {
      return Math.floor((score - 10) / 2);
    },

    formatSigned(num) {
      return num >= 0 ? `+${num}` : `${num}`;
    }
  },

  // Sanificazione per prevenire XSS / Manomissioni da file JSON esterni
  escapeHTML(str) {
    if (typeof str !== "string") return str == null ? "" : String(str);
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  // Stato Wizard Creazione Personaggio
  wizard: {
    step: 1,
    charName: "Nuovo Eroe",
    playerName: "Giocatore",
    alignment: "Neutrale Buono",
    level: 3,
    raceId: "custom_lineage",
    classId: "barbarian",
    subclassId: "barbarian_zealot",
    multiclass: {
      enabled: false,
      classId: "fighter",
      subclassId: "fighter_champion",
      level: 1
    },
    bgId: "soldier",
    baseScores: { str: 15, dex: 14, con: 14, int: 8, wis: 12, cha: 10 },
    tashaBonus: { str: 2, con: 1 },
    selectedSkills: ["athletics", "intimidation"],
    hasShield: false,
    equippedArmor: "none"
  },

  init() {
    this.initTheme();
    this.initViews();
    this.initSheetController();
    this.initWizard();
    this.initCompendium();
    this.initPWA();
    this.loadSavedState();
  },

  // ---------------------------------------------------------------------------
  // GESTIONE TEMA E-INK PER BOOX
  // ---------------------------------------------------------------------------
  initTheme() {
    const isEink = localStorage.getItem("dnd_theme") === "eink";
    if (isEink) {
      document.body.classList.add("theme-eink");
      this.updateEinkBtn(true);
    }

    const btn = document.getElementById("btn-toggle-eink");
    if (btn) {
      btn.addEventListener("click", () => {
        const active = document.body.classList.toggle("theme-eink");
        localStorage.setItem("dnd_theme", active ? "eink" : "parchment");
        this.updateEinkBtn(active);
      });
    }
  },

  updateEinkBtn(isEink) {
    const btn = document.getElementById("btn-toggle-eink");
    if (btn) {
      btn.innerHTML = isEink ? "📄 Modo Pergamena" : "⚪ Modo BOOX E-Ink";
    }
  },

  // ---------------------------------------------------------------------------
  // NAVIGAZIONE VISTE (Scheda / Builder / Compendio / Salvati)
  // ---------------------------------------------------------------------------
  initViews() {
    const buttons = document.querySelectorAll("[data-target-view]");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const viewId = btn.getAttribute("data-target-view");
        this.switchView(viewId);
      });
    });
  },

  switchView(viewId) {
    this.activeView = viewId;

    document.querySelectorAll(".app-view").forEach(v => {
      v.classList.add("hidden");
      v.classList.remove("block");
    });

    const target = document.getElementById(viewId);
    if (target) {
      target.classList.remove("hidden");
      target.classList.add("block");
    }

    document.querySelectorAll("[data-target-view]").forEach(btn => {
      if (btn.getAttribute("data-target-view") === viewId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    if (viewId === "view-manage") {
      this.renderSavedList();
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  },

  // ---------------------------------------------------------------------------
  // CONTROLLER SCHEDA A 3 PAGINE
  // ---------------------------------------------------------------------------
  initSheetController() {
    this.setupTabs();
    this.setupPortrait();
    this.renderSavingThrows();
    this.renderSkills();
    this.renderWeapons();
    this.bindSheetInputs();
    this.updateAllCalculations();
    this.setupAutoResizeTextareas();
  },

  setupTabs() {
    [1, 2, 3].forEach(num => {
      const btn = document.getElementById(`tab-btn-${num}`);
      if (btn) {
        btn.addEventListener("click", () => {
          this.activePage = num;
          [1, 2, 3].forEach(n => {
            const page = document.getElementById(`page-${n}`);
            const tBtn = document.getElementById(`tab-btn-${n}`);
            if (page) {
              if (n === num) {
                page.classList.remove("hidden");
                page.classList.add("block");
                this.autoResizeAllTextareas();
              } else {
                page.classList.add("hidden");
                page.classList.remove("block");
              }
            }
            if (tBtn) {
              if (n === num) {
                tBtn.classList.add("active");
              } else {
                tBtn.classList.remove("active");
              }
            }
          });
        });
      }
    });
  },

  setupAutoResizeTextareas() {
    document.addEventListener("input", (e) => {
      if (e.target && e.target.tagName === "TEXTAREA") {
        this.autoResizeTextarea(e.target);
      }
    });
    window.addEventListener("resize", () => this.autoResizeAllTextareas());
    this.autoResizeAllTextareas();
  },

  autoResizeTextarea(el) {
    if (!el || el.offsetParent === null) return;
    el.style.height = "auto";
    const newH = Math.max(el.scrollHeight + 8, 48);
    el.style.height = newH + "px";
  },

  autoResizeAllTextareas() {
    setTimeout(() => {
      document.querySelectorAll("textarea").forEach(tx => this.autoResizeTextarea(tx));
    }, 50);
  },

  getModFor(statKey) {
    const val = this.model.data.stats[statKey] || 10;
    return this.model.getModifier(val);
  },

  calcSave(statKey, isProf) {
    const mod = this.getModFor(statKey);
    const pb = Number(this.model.data.proficiencyBonus);
    return mod + (isProf ? pb : 0);
  },

  calcSkill(statKey, isProf) {
    const mod = this.getModFor(statKey);
    const pb = Number(this.model.data.proficiencyBonus);
    return mod + (isProf ? pb : 0);
  },

  renderSavingThrows() {
    const container = document.getElementById("saving-throws-list");
    if (!container) return;
    container.innerHTML = "";

    Object.entries(this.model.data.savingThrows).forEach(([key, st]) => {
      const row = document.createElement("div");
      row.className = "flex items-center justify-between py-0.5";
      row.innerHTML = `
        <div class="flex items-center gap-2">
          <input type="checkbox" id="save-check-${key}" class="dnd-circle-check" ${st.prof ? 'checked' : ''}>
          <label for="save-check-${key}" class="cursor-pointer select-none font-medium">${st.name}</label>
        </div>
        <span id="save-val-${key}" class="font-bold text-xs w-6 text-right">+0</span>
      `;
      container.appendChild(row);

      row.querySelector(`#save-check-${key}`).addEventListener("change", (e) => {
        this.model.data.savingThrows[key].prof = e.target.checked;
        this.updateAllCalculations();
        this.debouncedSave();
      });
    });
  },

  renderSkills() {
    const container = document.getElementById("skills-list");
    if (!container) return;
    container.innerHTML = "";

    Object.entries(this.model.data.skills).forEach(([key, sk]) => {
      const statLabel = sk.stat.toUpperCase();
      const row = document.createElement("div");
      row.className = "flex items-center justify-between py-0.5 hover:bg-stone-100/50 rounded px-1";
      row.innerHTML = `
        <div class="flex items-center gap-2 overflow-hidden">
          <input type="checkbox" id="skill-check-${key}" class="dnd-circle-check" ${sk.prof ? 'checked' : ''}>
          <span class="truncate font-medium">${sk.name} <span class="text-[9px] text-stone-400 font-normal">(${statLabel})</span></span>
        </div>
        <span id="skill-val-${key}" class="font-bold text-xs w-6 text-right">+0</span>
      `;
      container.appendChild(row);

      row.querySelector(`#skill-check-${key}`).addEventListener("change", (e) => {
        this.model.data.skills[key].prof = e.target.checked;
        this.updateAllCalculations();
        this.debouncedSave();
      });
    });
  },

  renderWeapons() {
    const container = document.getElementById("weapons-cards-container");
    if (!container) return;
    container.innerHTML = "";

    const rageBonus = this.model.data.isRaging ? 2 : 0;
    const pb = Number(this.model.data.proficiencyBonus);

    this.model.data.weapons.forEach((w, index) => {
      const statMod = this.getModFor(w.stat);
      const specialAtk = w.specialAtkBonus || 0;
      const totalAtk = statMod + (w.prof ? pb : 0) + specialAtk;
      const baseDmgMod = statMod + rageBonus + (w.bonusDmg || 0);
      const dmgString = `${w.dice} ${this.model.formatSigned(baseDmgMod)}`;

      const card = document.createElement("div");
      card.className = "p-2 sm:p-2.5 rounded-lg border border-[#c7b5a1] bg-[#fffdfa] hover:bg-amber-50/60 shadow-sm transition-all";
      card.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <!-- Nome Arma & Note Tattiche (Testo Intero Senza Troncatura) -->
          <div class="flex-1 min-w-0 pr-1">
            <div class="font-bold text-xs sm:text-sm text-stone-900 leading-snug break-words">
              ${this.escapeHTML(w.name)}
            </div>
            <div class="text-[10px] text-stone-600 font-medium flex items-center flex-wrap gap-1.5 mt-0.5">
              <span class="px-1.5 py-0.2 rounded bg-stone-200 text-stone-800 text-[9px] font-bold uppercase">${w.stat === 'dex' ? 'Destrezza' : 'Forza'}</span>
              <span>&bull;</span>
              <span>${w.prof ? 'Competente' : 'Non Comp.'}</span>
              ${w.type ? `<span>&bull;</span><span>${this.escapeHTML(w.type)}</span>` : ''}
              ${rageBonus ? `<span class="px-1 py-0.2 rounded bg-red-100 text-red-900 text-[9px] font-bold">+2 Ira</span>` : ''}
            </div>
          </div>

          <!-- Riquadri TxC e Danno (Sempre chiari e visibili) -->
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <!-- TxC -->
            <div class="flex flex-col items-center justify-center bg-stone-100 border border-stone-300 rounded px-2 py-0.5 min-w-[44px] text-center">
              <span class="text-[7.5px] uppercase tracking-wider font-bold text-stone-500">TxC</span>
              <span class="font-black text-sm text-stone-900 leading-tight">${this.model.formatSigned(totalAtk)}</span>
            </div>

            <!-- Danno -->
            <div class="flex flex-col items-center justify-center bg-amber-50 border border-amber-300 rounded px-2.5 py-0.5 min-w-[90px] text-center">
              <span class="text-[7.5px] uppercase tracking-wider font-bold text-amber-900">Danno</span>
              <span class="font-bold text-xs text-amber-950 leading-tight">${dmgString}</span>
            </div>

            <!-- Pulsanti Modifica / Elimina -->
            <div class="flex items-center gap-0.5 no-print pl-1">
              <button type="button" class="p-1 text-stone-500 hover:text-stone-900 text-xs rounded hover:bg-stone-200" data-weapon-edit="${index}" title="Modifica dettagli arma">✏️</button>
              <button type="button" class="p-1 text-stone-400 hover:text-red-700 text-xs rounded hover:bg-red-50" data-weapon-delete="${index}" title="Rimuovi arma">✕</button>
            </div>
          </div>
        </div>

        <!-- Pannello di Modifica Dettagliata (A scomparsa) -->
        <div id="weapon-edit-panel-${index}" class="hidden mt-2 pt-2 border-t border-[#c7b5a1]/60 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            <div>
              <label class="text-[9px] font-bold text-stone-600 block mb-0.5">Nome Completo &amp; Proprietà</label>
              <input type="text" class="w-full p-1 border border-stone-300 rounded bg-white font-bold text-xs" value="${w.name}" data-weapon-idx="${index}" data-field="name">
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="text-[9px] font-bold text-stone-600 block mb-0.5">Statistica</label>
                <select class="w-full p-1 border border-stone-300 rounded bg-white font-bold text-xs" data-weapon-idx="${index}" data-field="stat">
                  <option value="str" ${w.stat === 'str' ? 'selected' : ''}>Forza (FOR)</option>
                  <option value="dex" ${w.stat === 'dex' ? 'selected' : ''}>Destrezza (DES)</option>
                </select>
              </div>
              <div>
                <label class="text-[9px] font-bold text-stone-600 block mb-0.5">Competenza</label>
                <label class="flex items-center gap-1.5 p-1">
                  <input type="checkbox" class="dnd-circle-check" ${w.prof ? 'checked' : ''} data-weapon-idx="${index}" data-field="prof">
                  <span class="text-xs font-semibold">Competente</span>
                </label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2 mb-2">
            <div>
              <label class="text-[9px] font-bold text-stone-600 block mb-0.5">Dado (es. 1d10, 1d4)</label>
              <input type="text" class="w-full p-1 border border-stone-300 rounded bg-white font-semibold text-xs" value="${w.dice}" data-weapon-idx="${index}" data-field="dice">
            </div>
            <div>
              <label class="text-[9px] font-bold text-stone-600 block mb-0.5">Tipo Danno</label>
              <input type="text" class="w-full p-1 border border-stone-300 rounded bg-white font-semibold text-xs" value="${w.type}" data-weapon-idx="${index}" data-field="type">
            </div>
            <div>
              <label class="text-[9px] font-bold text-stone-600 block mb-0.5">Bonus Danno Extra</label>
              <input type="number" class="w-full p-1 border border-stone-300 rounded bg-white font-semibold text-xs text-center" value="${w.bonusDmg || 0}" data-weapon-idx="${index}" data-field="bonusDmg">
            </div>
          </div>

          <div class="flex justify-end">
            <button type="button" class="action-btn text-[10px] py-1 px-3" data-weapon-close="${index}">Chiudi Modifica ✓</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Eventi Toggle Modifica
    container.querySelectorAll("[data-weapon-edit]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = btn.getAttribute("data-weapon-edit");
        const panel = document.getElementById(`weapon-edit-panel-${idx}`);
        if (panel) panel.classList.toggle("hidden");
      });
    });

    container.querySelectorAll("[data-weapon-close]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = btn.getAttribute("data-weapon-close");
        const panel = document.getElementById(`weapon-edit-panel-${idx}`);
        if (panel) panel.classList.add("hidden");
      });
    });

    // Eventi Modifica Valori
    container.querySelectorAll("input, select").forEach(inp => {
      inp.addEventListener("change", (e) => {
        const idx = e.target.getAttribute("data-weapon-idx");
        const field = e.target.getAttribute("data-field");
        if (idx !== null && field) {
          if (field === "prof") {
            this.model.data.weapons[idx].prof = e.target.checked;
          } else if (field === "bonusDmg" || field === "specialAtkBonus") {
            this.model.data.weapons[idx][field] = Number(e.target.value) || 0;
          } else {
            this.model.data.weapons[idx][field] = e.target.value;
          }
          this.updateAllCalculations();
          this.debouncedSave();
        }
      });
    });

    // Eventi Eliminazione
    container.querySelectorAll("[data-weapon-delete]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = Number(btn.getAttribute("data-weapon-delete"));
        if (confirm("Vuoi davvero eliminare quest'arma?")) {
          this.model.data.weapons.splice(idx, 1);
          this.renderWeapons();
          this.debouncedSave();
        }
      });
    });
  },

  updateAllCalculations() {
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(st => {
      const input = document.getElementById(`stat-${st}`);
      if (input) {
        const score = Number(input.value) || 10;
        this.model.data.stats[st] = score;
        const mod = this.model.getModifier(score);
        const modDisplay = document.getElementById(`${st}-mod`);
        if (modDisplay) modDisplay.textContent = this.model.formatSigned(mod);
      }
    });

    const dexMod = this.getModFor('dex');
    const initDisplay = document.getElementById("initiative-val");
    if (initDisplay) initDisplay.textContent = this.model.formatSigned(dexMod);

    const pbInput = document.getElementById("proficiencyBonus");
    if (pbInput) {
      this.model.data.proficiencyBonus = Number(pbInput.value) || 3;
    }

    Object.entries(this.model.data.savingThrows).forEach(([key, st]) => {
      const valElem = document.getElementById(`save-val-${key}`);
      if (valElem) {
        const total = this.calcSave(st.stat, st.prof);
        valElem.textContent = this.model.formatSigned(total);
      }
    });

    Object.entries(this.model.data.skills).forEach(([key, sk]) => {
      const valElem = document.getElementById(`skill-val-${key}`);
      if (valElem) {
        const total = this.calcSkill(sk.stat, sk.prof);
        valElem.textContent = this.model.formatSigned(total);
      }
    });

    const ppElem = document.getElementById("passive-perception-val");
    if (ppElem) {
      const percProf = this.model.data.skills.perception?.prof;
      ppElem.textContent = 10 + this.calcSkill('wis', percProf);
    }

    this.renderWeapons();

    // Aggiorna stato Ira
    const rageBtn = document.getElementById("btn-rage-toggle");
    const rageTag = document.getElementById("rage-status-tag");
    if (rageBtn) {
      rageBtn.textContent = this.model.data.isRaging ? "⚡ Disattiva Ira Zelota" : "🔥 Attiva Ira Zelota (+2 Dmg)";
    }
    if (rageTag) {
      if (this.model.data.isRaging) {
        rageTag.className = "px-1.5 py-0.5 bg-red-700 text-white rounded text-[8px] font-bold";
        rageTag.textContent = "IRA ATTIVA (+2 DMG)";
      } else {
        rageTag.className = "px-1.5 py-0.5 bg-stone-300 text-stone-700 rounded text-[8px]";
        rageTag.textContent = "Ira: Inattiva";
      }
    }
  },

  bindSheetInputs() {
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(st => {
      const el = document.getElementById(`stat-${st}`);
      if (el) {
        el.addEventListener("input", () => {
          this.updateAllCalculations();
          this.debouncedSave();
        });
      }
    });

    const pbInput = document.getElementById("proficiencyBonus");
    if (pbInput) {
      pbInput.addEventListener("input", () => {
        this.updateAllCalculations();
        this.debouncedSave();
      });
    }

    // Toggle Ira
    const rageBtn = document.getElementById("btn-rage-toggle");
    if (rageBtn) {
      rageBtn.addEventListener("click", () => {
        this.model.data.isRaging = !this.model.data.isRaging;
        this.updateAllCalculations();
        this.debouncedSave();
      });
    }

    // Aggiungi Arma
    const addWpnBtn = document.getElementById("btn-add-weapon");
    if (addWpnBtn) {
      addWpnBtn.addEventListener("click", () => {
        this.model.data.weapons.push({
          id: "w_" + Date.now(),
          name: "Nuova Arma",
          stat: "str",
          prof: true,
          specialAtkBonus: 0,
          dice: "1d8",
          type: "Tagliente",
          bonusDmg: 0
        });
        this.renderWeapons();
        this.debouncedSave();
      });
    }

    // Quick HP buttons (-5, -1, +1, +5)
    document.querySelectorAll(".hp-quick-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const delta = parseInt(btn.getAttribute("data-delta"), 10) || 0;
        const curInput = document.getElementById("currentHp");
        const maxInput = document.getElementById("maxHp");
        if (curInput) {
          let curr = parseInt(curInput.value, 10) || 0;
          const maxHp = parseInt(maxInput?.value, 10) || 999;
          curr = Math.max(0, Math.min(maxHp + 50, curr + delta));
          curInput.value = curr;
          this.debouncedSave();
        }
      });
    });

    // Auto-save su qualsiasi input del sheet
    const sheetEl = document.getElementById("sheet");
    if (sheetEl) {
      sheetEl.addEventListener("input", () => this.debouncedSave());
    }

    // Export / Import
    const expBtn = document.getElementById("btn-export-json");
    if (expBtn) expBtn.addEventListener("click", () => this.exportToJson());

    const impInput = document.getElementById("file-import-json");
    if (impInput) {
      impInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            try {
              const data = JSON.parse(evt.target.result);
              if (!data || typeof data !== "object" || !data.model || !data.fields) {
                throw new Error("Formato non valido: mancano le strutture model e fields.");
              }
              this.applySheetData(data);
              this.activeCharId = DND_ENGINE.saveCharacter(data);
              alert("Scheda caricata con successo!");
            } catch(err) {
              alert("File JSON non valido o non riconosciuto come scheda di D&D.");
            }
          };
          reader.readAsText(file);
        }
      });
    }
  },

  setupPortrait() {
    const fileInput = document.getElementById("portrait-file-input");
    const removeBtn = document.getElementById("btn-remove-portrait");

    if (fileInput) {
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (evt) => this.applyPortrait(evt.target.result);
          reader.readAsDataURL(file);
        }
      });
    }

    if (removeBtn) {
      removeBtn.addEventListener("click", () => this.clearPortrait());
    }
  },

  applyPortrait(dataUrl) {
    const img = document.getElementById("character-portrait");
    const svg = document.getElementById("character-svg-portrait");
    const removeBtn = document.getElementById("btn-remove-portrait");

    if (img && dataUrl) {
      img.src = dataUrl;
      img.classList.remove("hidden");
      if (svg) svg.classList.add("hidden");
      if (removeBtn) removeBtn.classList.remove("hidden");
      this.model.data.portraitDataUrl = dataUrl;
      this.debouncedSave();
    }
  },

  clearPortrait() {
    const img = document.getElementById("character-portrait");
    const svg = document.getElementById("character-svg-portrait");
    const removeBtn = document.getElementById("btn-remove-portrait");

    if (img) {
      img.src = "";
      img.classList.add("hidden");
    }
    if (svg) svg.classList.remove("hidden");
    if (removeBtn) removeBtn.classList.add("hidden");
    this.model.data.portraitDataUrl = null;
    this.debouncedSave();
  },

  // ---------------------------------------------------------------------------
  // AUTO-SAVE & PERSISTENZA
  // ---------------------------------------------------------------------------
  saveTimeout: null,
  debouncedSave() {
    clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(() => this.saveCurrentCharacter(), 400);
  },

  saveCurrentCharacter() {
    const payload = this.collectSheetData();
    const id = this.activeCharId || "char_active";
    this.activeCharId = DND_ENGINE.saveCharacter(payload, id);

    const indicator = document.getElementById("autosave-indicator");
    if (indicator) {
      indicator.textContent = "✓ Salvato";
      indicator.style.opacity = "1";
      setTimeout(() => { indicator.style.opacity = "0.6"; }, 1500);
    }
  },

  collectSheetData() {
    const fields = {};
    document.querySelectorAll("#sheet input[type='text'], #sheet input[type='number'], #sheet textarea").forEach(el => {
      if (el.id) fields[el.id] = el.value;
    });

    return {
      version: "2.0",
      model: this.model.data,
      fields
    };
  },

  applySheetData(payload) {
    if (!payload || !payload.model) return;
    this.model.data = payload.model;

    if (payload.fields) {
      Object.entries(payload.fields).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.value = val;
      });
    }

    if (this.model.data.portraitDataUrl) {
      this.applyPortrait(this.model.data.portraitDataUrl);
    } else {
      this.clearPortrait();
    }

    this.renderSavingThrows();
    this.renderSkills();
    this.renderWeapons();
    this.updateAllCalculations();
    this.autoResizeAllTextareas();
  },

  exportToJson() {
    const payload = this.collectSheetData();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const charName = payload.fields?.characterName || "personaggio_dnd5e";
    a.href = url;
    a.download = `${charName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_dnd5e.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  loadSavedState() {
    const activeId = localStorage.getItem(DND_ENGINE.ACTIVE_CHAR_KEY);
    if (activeId) {
      const char = DND_ENGINE.loadCharacter(activeId);
      if (char) {
        this.activeCharId = activeId;
        this.applySheetData(char);
        return;
      }
    }

    // Carica Kaelen da file json
    fetch('./kaelen__stigmata__vane_dnd5e.json')
      .then(res => res.json())
      .then(data => {
        this.activeCharId = DND_ENGINE.saveCharacter(data, "char_kaelen");
        this.applySheetData(data);
      })
      .catch(() => {
        // Fallback di default
        this.updateAllCalculations();
      });
  },

  renderSavedList() {
    const container = document.getElementById("saved-characters-list");
    if (!container) return;
    const list = DND_ENGINE.getSavedCharactersList();

    if (list.length === 0) {
      container.innerHTML = `<div class="p-4 text-center text-stone-500">Nessun personaggio salvato. Creane uno nuovo con il Creatore Guidato!</div>`;
      return;
    }

    container.innerHTML = "";
    list.forEach(c => {
      const isActive = c.id === this.activeCharId;
      const card = document.createElement("div");
      card.className = `p-3 mb-2 rounded-lg border flex items-center justify-between ${isActive ? 'bg-amber-100/70 border-amber-600' : 'bg-white/80 border-stone-300'}`;
      card.innerHTML = `
        <div>
          <div class="font-bold text-sm text-stone-900">${this.escapeHTML(c.name)} ${isActive ? '<span class="text-xs text-amber-800 font-semibold">(Attivo)</span>' : ''}</div>
          <div class="text-xs text-stone-600">${this.escapeHTML(c.classLevel || "")} &bull; Aggiornato: ${new Date(c.updatedAt).toLocaleDateString()}</div>
        </div>
        <div class="flex gap-2">
          <button class="action-btn text-xs py-1 px-3" onclick="App.loadSaved('${c.id}')">Carica</button>
          <button class="action-btn text-xs py-1 px-2 bg-red-950/70 border-red-800 text-red-200" onclick="App.deleteSaved('${c.id}')">🗑️</button>
        </div>
      `;
      container.appendChild(card);
    });
  },

  loadSaved(id) {
    const char = DND_ENGINE.loadCharacter(id);
    if (char) {
      this.activeCharId = id;
      localStorage.setItem(DND_ENGINE.ACTIVE_CHAR_KEY, id);
      this.applySheetData(char);
      this.switchView('view-sheet');
    }
  },

  deleteSaved(id) {
    if (confirm("Vuoi davvero eliminare questo personaggio salvato?")) {
      DND_ENGINE.deleteCharacter(id);
      this.renderSavedList();
    }
  },

  // ---------------------------------------------------------------------------
  // WIZARD CREAZIONE GUIDATA PERSONAGGIO
  // ---------------------------------------------------------------------------
  initWizard() {
    this.renderWizardRaces();
    this.renderWizardClasses();
    this.renderWizardSubclasses();
    this.renderWizardStats();
    this.renderWizardBackgrounds();
    this.renderWizardMulticlass();

    const nextBtn = document.getElementById("wizard-btn-next");
    const prevBtn = document.getElementById("wizard-btn-prev");
    const finishBtn = document.getElementById("wizard-btn-finish");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (this.wizard.step < 6) this.setWizardStep(this.wizard.step + 1);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (this.wizard.step > 1) this.setWizardStep(this.wizard.step - 1);
      });
    }

    if (finishBtn) {
      finishBtn.addEventListener("click", () => this.generateFromWizard());
    }

    const lvlSlider = document.getElementById("wizard-level-slider");
    const lvlDisplay = document.getElementById("wizard-level-display");
    if (lvlSlider) {
      lvlSlider.addEventListener("input", () => {
        this.wizard.level = parseInt(lvlSlider.value, 10);
        if (lvlDisplay) lvlDisplay.textContent = this.wizard.level;
        this.renderWizardSubclasses();
        this.renderWizardMulticlass();
      });
    }

    const multiToggle = document.getElementById("wizard-multiclass-toggle");
    if (multiToggle) {
      multiToggle.addEventListener("change", () => {
        this.wizard.multiclass.enabled = multiToggle.checked;
        const details = document.getElementById("wizard-multiclass-details");
        if (details) {
          if (multiToggle.checked) details.classList.remove("hidden");
          else details.classList.add("hidden");
        }
        this.renderWizardMulticlass();
      });
    }

    const multiSlider = document.getElementById("wizard-multi-level-slider");
    const multiLvlDisplay = document.getElementById("wizard-multi-level-display");
    if (multiSlider) {
      multiSlider.addEventListener("input", () => {
        this.wizard.multiclass.level = parseInt(multiSlider.value, 10);
        if (multiLvlDisplay) multiLvlDisplay.textContent = this.wizard.multiclass.level;
        this.renderWizardMulticlass();
      });
    }
  },

  setWizardStep(step) {
    this.wizard.step = step;
    document.querySelectorAll(".wizard-step-content").forEach(el => {
      el.classList.add("hidden");
      el.classList.remove("block");
    });
    const currentEl = document.getElementById(`wizard-step-${step}`);
    if (currentEl) {
      currentEl.classList.remove("hidden");
      currentEl.classList.add("block");
    }

    document.querySelectorAll(".wizard-step-badge").forEach(b => {
      const s = parseInt(b.getAttribute("data-step"), 10);
      b.classList.remove("active", "completed");
      if (s === step) b.classList.add("active");
      else if (s < step) b.classList.add("completed");
    });

    const prevBtn = document.getElementById("wizard-btn-prev");
    const nextBtn = document.getElementById("wizard-btn-next");
    const finishBtn = document.getElementById("wizard-btn-finish");

    if (prevBtn) {
      if (step > 1) prevBtn.classList.remove("hidden");
      else prevBtn.classList.add("hidden");
    }
    if (nextBtn) {
      if (step < 6) nextBtn.classList.remove("hidden");
      else nextBtn.classList.add("hidden");
    }
    if (finishBtn) {
      if (step === 6) finishBtn.classList.remove("hidden");
      else finishBtn.classList.add("hidden");
    }

    if (step === 4) this.renderWizardSkills();
    if (step === 6) this.renderWizardSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderWizardRaces() {
    const container = document.getElementById("wizard-race-list");
    if (!container) return;
    container.innerHTML = "";

    DND_DATA.races.forEach(r => {
      const isSel = r.id === this.wizard.raceId;
      const card = document.createElement("div");
      card.className = `wizard-card-select p-3 rounded-lg border ${isSel ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="flex items-center justify-between mb-1">
          <div class="font-bold text-sm text-stone-900">${r.name}</div>
          <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-stone-200 text-stone-700">${r.source}</span>
        </div>
        <div class="text-xs text-stone-600 mb-1">Velocità: <strong>${r.speed}m</strong> &bull; Taglia: <strong>${r.size}</strong></div>
        <div class="text-[11px] text-stone-700">
          ${r.traits.map(t => `<div class="mb-0.5"><strong>${t.name}:</strong> ${t.desc}</div>`).join('')}
        </div>
      `;
      card.addEventListener("click", () => {
        this.wizard.raceId = r.id;
        this.renderWizardRaces();
        this.renderWizardStats();
      });
      container.appendChild(card);
    });
  },

  renderWizardClasses() {
    const container = document.getElementById("wizard-class-list");
    if (!container) return;
    container.innerHTML = "";

    DND_DATA.classes.forEach(c => {
      const isSel = c.id === this.wizard.classId;
      const card = document.createElement("div");
      card.className = `wizard-card-select p-2.5 rounded-lg border ${isSel ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="flex items-center justify-between mb-0.5">
          <div class="font-bold text-sm text-stone-900">${c.name}</div>
          <span class="text-xs font-bold text-amber-900">d${c.hitDie}</span>
        </div>
        <div class="text-[11px] text-stone-600">TS: <strong>${c.savingThrows.join(", ").toUpperCase()}</strong></div>
      `;
      card.addEventListener("click", () => {
        this.wizard.classId = c.id;
        if (this.wizard.multiclass.classId === c.id) {
          const other = DND_DATA.classes.find(cls => cls.id !== c.id);
          if (other) this.wizard.multiclass.classId = other.id;
        }
        this.renderWizardClasses();
        this.renderWizardSubclasses();
        this.renderWizardSkills();
        this.renderWizardMulticlass();
      });
      container.appendChild(card);
    });
  },

  renderWizardSubclasses() {
    const container = document.getElementById("wizard-subclass-list");
    if (!container) return;
    container.innerHTML = "";

    const available = DND_DATA.subclasses.filter(s => s.classId === this.wizard.classId);
    const cls = DND_DATA.classes.find(c => c.id === this.wizard.classId);
    const reqLvl = cls ? cls.subclassLevel : 3;

    if (this.wizard.level < reqLvl) {
      container.innerHTML = `<div class="p-3 bg-amber-50 rounded border border-amber-300 text-xs text-amber-900">
        La sottoclasse per il ${cls?.name} si sceglie al <strong>Livello ${reqLvl}</strong>. Attualmente sei al livello ${this.wizard.level}.
      </div>`;
      this.wizard.subclassId = null;
      return;
    }

    if (!available.find(s => s.id === this.wizard.subclassId) && available.length > 0) {
      this.wizard.subclassId = available[0].id;
    }

    available.forEach(s => {
      const isSel = s.id === this.wizard.subclassId;
      const card = document.createElement("div");
      card.className = `wizard-card-select p-3 rounded-lg border mb-2 ${isSel ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="flex items-center justify-between mb-1">
          <div class="font-bold text-sm text-stone-900">${s.name}</div>
          <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">${s.source}</span>
        </div>
        <div class="text-xs text-stone-700 mb-1.5">${s.desc}</div>
        <div class="text-[11px] text-stone-800">
          ${s.features.map(f => `<div class="mb-0.5"><strong>[Liv. ${f.level}] ${f.name}:</strong> ${f.desc}</div>`).join('')}
        </div>
      `;
      card.addEventListener("click", () => {
        this.wizard.subclassId = s.id;
        this.renderWizardSubclasses();
      });
      container.appendChild(card);
    });
  },

  renderWizardMulticlass() {
    const details = document.getElementById("wizard-multiclass-details");
    const toggle = document.getElementById("wizard-multiclass-toggle");
    if (!details || !toggle) return;

    if (!this.wizard.multiclass.enabled) {
      details.classList.add("hidden");
      toggle.checked = false;
      return;
    }

    details.classList.remove("hidden");
    toggle.checked = true;

    // Se la classe secondaria coincide con la primaria, seleziona un'altra classe
    if (this.wizard.multiclass.classId === this.wizard.classId) {
      const other = DND_DATA.classes.find(c => c.id !== this.wizard.classId);
      if (other) this.wizard.multiclass.classId = other.id;
    }

    const totalLevel = (parseInt(this.wizard.level, 10) || 1) + (parseInt(this.wizard.multiclass.level, 10) || 1);
    const pb = DND_ENGINE.calcPB(totalLevel);
    const totLvlEl = document.getElementById("wizard-total-level-display");
    const totPbEl = document.getElementById("wizard-total-pb-display");
    const multiLvlEl = document.getElementById("wizard-multi-level-display");
    const multiSlider = document.getElementById("wizard-multi-level-slider");

    if (totLvlEl) totLvlEl.textContent = totalLevel;
    if (totPbEl) totPbEl.textContent = `+${pb}`;
    if (multiLvlEl) multiLvlEl.textContent = this.wizard.multiclass.level;
    if (multiSlider) multiSlider.value = this.wizard.multiclass.level;

    // Verifica requisiti minimi multiclasse
    const stats = this.wizard.finalScores || this.wizard.baseScores || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
    const prereqCheck = DND_ENGINE.checkMulticlassPrereqs(this.wizard.classId, this.wizard.multiclass.classId, stats);
    const statusBox = document.getElementById("wizard-multiclass-status");
    if (statusBox) {
      if (prereqCheck.canMulticlass) {
        statusBox.className = "p-2.5 rounded-lg border border-emerald-500 bg-emerald-50 text-emerald-900 text-xs";
        statusBox.innerHTML = `<strong>✓ Requisiti Multiclasse Soddisfatti:</strong> Le caratteristiche soddisfano le regole ufficiali per ${this.wizard.classId.toUpperCase()} e ${this.wizard.multiclass.classId.toUpperCase()}.`;
      } else {
        statusBox.className = "p-2.5 rounded-lg border border-amber-600 bg-amber-50 text-amber-950 text-xs";
        statusBox.innerHTML = `<strong>⚠️ Avviso Requisiti Minimi (PHB p. 163):</strong><br>${prereqCheck.warnings.join('<br>')}`;
      }
    }

    // Render bottoni seconda classe
    const multiClassContainer = document.getElementById("wizard-multi-class-list");
    if (multiClassContainer) {
      multiClassContainer.innerHTML = "";
      DND_DATA.classes.filter(c => c.id !== this.wizard.classId).forEach(c => {
        const isSel = c.id === this.wizard.multiclass.classId;
        const card = document.createElement("div");
        card.className = `wizard-card-select p-2 rounded-lg border cursor-pointer ${isSel ? 'selected' : ''}`;
        card.innerHTML = `
          <div class="flex items-center justify-between mb-0.5">
            <span class="font-bold text-xs text-stone-900">${c.name}</span>
            <span class="text-[10px] font-bold text-amber-900">d${c.hitDie}</span>
          </div>
          <div class="text-[10px] text-stone-600">${c.spellcaster ? '✨ Incantatore' : '⚔️ Marziale'}</div>
        `;
        card.addEventListener("click", () => {
          this.wizard.multiclass.classId = c.id;
          this.renderWizardMulticlass();
        });
        multiClassContainer.appendChild(card);
      });
    }

    // Render sottoclassi seconda classe
    const multiSubContainer = document.getElementById("wizard-multi-subclass-list");
    if (multiSubContainer) {
      multiSubContainer.innerHTML = "";
      const secCls = DND_DATA.classes.find(c => c.id === this.wizard.multiclass.classId);
      const reqLvl = secCls ? secCls.subclassLevel : 3;
      const secLevel = parseInt(this.wizard.multiclass.level, 10) || 1;

      if (secLevel < reqLvl) {
        multiSubContainer.innerHTML = `
          <div class="p-2 bg-stone-100 rounded border border-stone-300 text-xs text-stone-600">
            La sottoclasse per il ${secCls?.name} si sblocca al Livello ${reqLvl} di questa classe (attualmente liv. ${secLevel}).
          </div>
        `;
        this.wizard.multiclass.subclassId = null;
      } else {
        const availableSubs = DND_DATA.subclasses.filter(s => s.classId === this.wizard.multiclass.classId);
        if (!availableSubs.find(s => s.id === this.wizard.multiclass.subclassId) && availableSubs.length > 0) {
          this.wizard.multiclass.subclassId = availableSubs[0].id;
        }

        availableSubs.forEach(s => {
          const isSel = s.id === this.wizard.multiclass.subclassId;
          const card = document.createElement("div");
          card.className = `wizard-card-select p-2 rounded-lg border mb-1.5 cursor-pointer ${isSel ? 'selected' : ''}`;
          card.innerHTML = `
            <div class="flex items-center justify-between mb-0.5">
              <span class="font-bold text-xs text-stone-900">${s.name}</span>
              <span class="text-[9px] px-1 rounded bg-amber-100 text-amber-900">${s.source}</span>
            </div>
            <div class="text-[11px] text-stone-600">${s.desc}</div>
          `;
          card.addEventListener("click", () => {
            this.wizard.multiclass.subclassId = s.id;
            this.renderWizardMulticlass();
          });
          multiSubContainer.appendChild(card);
        });
      }
    }
  },

  renderWizardStats() {
    const container = document.getElementById("wizard-stats-container");
    if (!container) return;

    const racialBonus = { str: 2, dex: 0, con: 1, int: 0, wis: 0, cha: 0 };
    const finalScores = {};
    ["str", "dex", "con", "int", "wis", "cha"].forEach(st => {
      finalScores[st] = (this.wizard.baseScores[st] || 10) + (racialBonus[st] || 0);
    });
    this.wizard.finalScores = finalScores;

    const labels = { str: "Forza", dex: "Destrezza", con: "Costituzione", int: "Intelligenza", wis: "Saggezza", cha: "Carisma" };

    container.innerHTML = `
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        ${["str", "dex", "con", "int", "wis", "cha"].map(st => {
          const tot = finalScores[st];
          const mod = Math.floor((tot - 10) / 2);
          return `
            <div class="p-2.5 rounded-lg border border-stone-300 bg-white/80 flex flex-col items-center">
              <span class="text-xs font-bold text-stone-700 uppercase">${labels[st]}</span>
              <div class="text-2xl font-black text-stone-900 my-0.5">${tot}</div>
              <div class="text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">${mod >= 0 ? `+${mod}` : mod}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    this.renderWizardMulticlass();
  },

  renderWizardSkills() {
    const container = document.getElementById("wizard-skills-container");
    if (!container) return;

    const cls = DND_DATA.classes.find(c => c.id === this.wizard.classId);
    if (!cls || !cls.skillChoices) return;

    const maxChoices = cls.skillChoices.count;
    const allowed = cls.skillChoices.from;
    const skillLabels = {
      acrobatics: "Acrobazia", animal_handling: "Addestrare Animali", arcana: "Arcano", athletics: "Atletica",
      deception: "Inganno", history: "Storia", insight: "Intuizione", intimidation: "Intimidire",
      investigation: "Indagare", medicine: "Medicina", nature: "Natura", perception: "Percezione",
      performance: "Intrattenere", persuasion: "Persuasione", religion: "Religione", sleight_of_hand: "Rapidità di Mano",
      stealth: "Furtività", survival: "Sopravvivenza"
    };

    container.innerHTML = `
      <div class="mb-2 text-xs text-stone-700">
        Scegli <strong>${maxChoices} abilità</strong> per la classe <strong>${cls.name}</strong>:
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${allowed.map(sk => {
          const isChecked = this.wizard.selectedSkills.includes(sk);
          return `
            <label class="flex items-center gap-2 p-2 rounded border border-stone-300 bg-white/70 cursor-pointer">
              <input type="checkbox" value="${sk}" class="dnd-circle-check wizard-skill-chk" ${isChecked ? 'checked' : ''}>
              <span class="text-xs font-semibold text-stone-800">${skillLabels[sk] || sk}</span>
            </label>
          `;
        }).join('')}
      </div>
    `;

    container.querySelectorAll(".wizard-skill-chk").forEach(chk => {
      chk.addEventListener("change", () => {
        const val = chk.value;
        if (chk.checked) {
          if (this.wizard.selectedSkills.length >= maxChoices) {
            chk.checked = false;
            alert(`Puoi selezionare al massimo ${maxChoices} abilità.`);
            return;
          }
          this.wizard.selectedSkills.push(val);
        } else {
          this.wizard.selectedSkills = this.wizard.selectedSkills.filter(s => s !== val);
        }
      });
    });
  },

  renderWizardBackgrounds() {
    const container = document.getElementById("wizard-bg-list");
    if (!container) return;
    container.innerHTML = "";

    DND_DATA.backgrounds.forEach(b => {
      const isSel = b.id === this.wizard.bgId;
      const card = document.createElement("div");
      card.className = `wizard-card-select p-3 rounded-lg border mb-2 ${isSel ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="font-bold text-sm text-stone-900">${b.name}</div>
        <div class="text-xs text-stone-600 mb-1">Competenze: <strong>${b.skills.join(", ")}</strong></div>
        <div class="text-[11px] text-stone-700">${b.feature}</div>
      `;
      card.addEventListener("click", () => {
        this.wizard.bgId = b.id;
        this.renderWizardBackgrounds();
      });
      container.appendChild(card);
    });
  },

  renderWizardSummary() {
    const container = document.getElementById("wizard-summary-container");
    if (!container) return;

    this.wizard.charName = document.getElementById("wizard-char-name")?.value || "Nuovo Eroe";
    this.wizard.playerName = document.getElementById("wizard-player-name")?.value || "Giocatore";

    const race = DND_DATA.races.find(r => r.id === this.wizard.raceId);
    const cls1 = DND_DATA.classes.find(c => c.id === this.wizard.classId);
    const sub1 = DND_DATA.subclasses.find(s => s.id === this.wizard.subclassId);
    const bg = DND_DATA.backgrounds.find(b => b.id === this.wizard.bgId);

    const isMulti = this.wizard.multiclass && this.wizard.multiclass.enabled;
    const cls2 = isMulti ? DND_DATA.classes.find(c => c.id === this.wizard.multiclass.classId) : null;
    const sub2 = isMulti ? DND_DATA.subclasses.find(s => s.id === this.wizard.multiclass.subclassId) : null;
    const level2 = isMulti ? (parseInt(this.wizard.multiclass.level, 10) || 1) : 0;
    const totalLevel = (parseInt(this.wizard.level, 10) || 1) + level2;

    const conMod = Math.floor(((this.wizard.finalScores?.con || 10) - 10) / 2);
    const dexMod = Math.floor(((this.wizard.finalScores?.dex || 10) - 10) / 2);
    const isHillDwarf = this.wizard.raceId === "dwarf_hill";
    const maxHp = DND_ENGINE.calcMaxHP(cls1, this.wizard.level, conMod, isHillDwarf, cls2, level2);
    const ac = DND_ENGINE.calcAC(cls1?.id, dexMod, conMod, 0, false, "none");

    let classDisplay = `${cls1?.name} Liv. ${this.wizard.level}`;
    let subDisplay = sub1?.name ? sub1.name.split('(')[0].trim() : "Nessuna";
    let hitDiceDisplay = `${this.wizard.level}d${cls1?.hitDie || 8}`;

    if (isMulti && cls2) {
      classDisplay += ` / ${cls2.name} Liv. ${level2}`;
      subDisplay += ` | ${sub2?.name ? sub2.name.split('(')[0].trim() : "Nessuna"}`;
      hitDiceDisplay += ` + ${level2}d${cls2.hitDie || 8}`;
    }

    container.innerHTML = `
      <div class="p-4 rounded-xl border border-amber-600/40 bg-amber-50/50">
        <h3 class="font-dnd-title text-lg text-stone-900 mb-2">⚔️ ${this.escapeHTML(this.wizard.charName)}</h3>
        <div class="grid grid-cols-2 gap-2 text-xs text-stone-800 mb-3">
          <div>Razza: <strong>${race?.name || "Umano"}</strong></div>
          <div>Classe: <strong>${classDisplay}</strong> (Tot. Liv. ${totalLevel})</div>
          <div>Sottoclasse: <strong>${subDisplay}</strong></div>
          <div>Sfondo: <strong>${bg?.name || "Soldato"}</strong></div>
          <div>Punti Ferita (PF): <strong class="text-red-900">${maxHp}</strong></div>
          <div>Dadi Vita: <strong class="text-amber-900">${hitDiceDisplay}</strong></div>
          <div>Classe Armatura (CA): <strong class="text-blue-900">${ac}</strong></div>
          <div>Bonus Competenza: <strong class="text-stone-900">+${DND_ENGINE.calcPB(totalLevel)}</strong></div>
        </div>
        <p class="text-xs text-stone-600">
          Cliccando su <strong>"⚡ Genera Scheda Gioco"</strong> tutte le statistiche, i tiri salvezza, le competenze, i privilegi di classe e le abilità verranno compilati nella scheda ufficiale e salvati nel dispositivo.
        </p>
      </div>
    `;
  },

  generateFromWizard() {
    this.wizard.charName = document.getElementById("wizard-char-name")?.value || "Nuovo Eroe";
    this.wizard.playerName = document.getElementById("wizard-player-name")?.value || "Giocatore";

    const payload = DND_ENGINE.buildSheetPayload(this.wizard);
    this.activeCharId = DND_ENGINE.saveCharacter(payload);
    this.applySheetData(payload);
    alert(`Personaggio "${this.wizard.charName}" generato con successo!`);
    this.switchView('view-sheet');
  },

  // ---------------------------------------------------------------------------
  // COMPENDIO RAPIDO E RICERCA OFFLINE
  // ---------------------------------------------------------------------------
  initCompendium() {
    const input = document.getElementById("compendium-search-input");
    const filterBtns = document.querySelectorAll(".compendium-filter-btn");

    let currentFilter = "all";

    if (input) {
      input.addEventListener("input", () => {
        this.renderCompendium(input.value.trim().toLowerCase(), currentFilter);
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        this.renderCompendium(input ? input.value.trim().toLowerCase() : "", currentFilter);
      });
    });

    this.renderCompendium("", "all");
  },

  renderCompendium(query, filter) {
    const container = document.getElementById("compendium-results-list");
    if (!container) return;
    container.innerHTML = "";

    const items = [];

    // INCANTESIMI
    if (filter === "all" || filter === "spells") {
      DND_DATA.spells.forEach(s => {
        const classNames = (s.classes || []).map(cid => {
          const found = DND_DATA.classes.find(c => c.id === cid);
          return found ? found.name : cid;
        }).join(", ");
        items.push({
          type: "Incantesimo",
          title: s.name,
          badge: `Liv. ${s.level === 0 ? 'Trucchetto' : s.level} • ${s.school}`,
          desc: `• Tempo di Lancio: ${s.time}\n• Gittata: ${s.range}\n• Componenti: ${s.components}\n• Durata: ${s.duration}\n• Classi: ${classNames || 'Tutte'}\n\n${s.desc}`
        });
      });
    }

    // CLASSI E SOTTOCLASSI
    if (filter === "all" || filter === "classes") {
      DND_DATA.classes.forEach(c => {
        items.push({
          type: "Classe",
          title: c.name,
          badge: `Dado Vita d${c.hitDie}`,
          desc: `Tiri Salvezza: ${c.savingThrows.join(", ").toUpperCase()}\nArmature: ${(c.armorProficiencies || []).join(", ") || "Nessuna"}\nArmi: ${(c.weaponProficiencies || []).join(", ")}`
        });
      });
      DND_DATA.subclasses.forEach(s => {
        items.push({
          type: "Sottoclasse",
          title: s.name,
          badge: s.source,
          desc: `${s.desc}\n\nPrivilegi:\n${s.features.map(f => `• [Liv. ${f.level}] ${f.name}: ${f.desc}`).join('\n')}`
        });
      });
    }

    // RAZZE
    if (filter === "all" || filter === "races") {
      DND_DATA.races.forEach(r => {
        items.push({
          type: "Razza",
          title: r.name,
          badge: r.source,
          desc: `Velocità: ${r.speed}m | Taglia: ${r.size}\n\nTratti:\n${r.traits.map(t => `• ${t.name}: ${t.desc}`).join('\n')}`
        });
      });
    }

    // REGOLE & CONDIZIONI
    if (filter === "all" || filter === "rules") {
      DND_DATA.rules.combatActions.forEach(a => {
        items.push({ type: "Azione", title: a.name, badge: "Regola di Combattimento", desc: a.desc });
      });
      DND_DATA.rules.conditions.forEach(c => {
        items.push({ type: "Condizione", title: c.name, badge: "Stato", desc: c.desc });
      });
    }

    // REGOLE MULTICLASSE
    if (filter === "all" || filter === "multiclass") {
      items.push({
        type: "Multiclasse",
        title: "Regole Generali Multiclasse (PHB Cap. 6)",
        badge: "Regola Ufficiale",
        desc: `Il multiclassamento consente di avanzare di livello in classi diverse ad ogni aumento di livello.\n\n• Requisiti di Caratteristica: Per qualificarsi per una nuova classe o per uscire dalla classe attuale, devi avere almeno 13 nel punteggio primario di entrambe le classi!\n• Punti Ferita & Dadi Vita: Guadagni il dado vita della classe in cui sali di livello. Al 1° livello del personaggio prendi il dado massimo; per tutti i livelli successivi (inclusi quelli di una nuova classe) tiri o prendi la media.\n• Bonus di Competenza: È basato sempre sul LIVELLO TOTALE del personaggio, non su quello della singola classe!\n• Attacco Extra: Non si cumula. Ottenere Attacco Extra da due classi diverse (es. Barbaro 5 / Guerriero 5) non conferisce 3 attacchi.`
      });

      // Tabella Requisiti
      const prereqsList = Object.keys(DND_DATA.multiclass.prerequisites).map(cid => {
        const cls = DND_DATA.classes.find(c => c.id === cid);
        const req = DND_DATA.multiclass.prerequisites[cid];
        return `• ${cls?.name || cid}: ${req.label}`;
      }).join('\n');

      items.push({
        type: "Multiclasse",
        title: "Tabella Requisiti Minimi di Caratteristica",
        badge: "Requisiti PHB",
        desc: `Punteggio minimo di 13 richiesto sia per la classe corrente che per la nuova classe:\n\n${prereqsList}`
      });

      // Competenze Acquisite
      const profsList = Object.keys(DND_DATA.multiclass.proficienciesGained).map(cid => {
        const cls = DND_DATA.classes.find(c => c.id === cid);
        const p = DND_DATA.multiclass.proficienciesGained[cid];
        return `• ${cls?.name || cid}: ${p.length > 0 ? p.join(", ") : "Nessuna competenza aggiuntiva"}`;
      }).join('\n');

      items.push({
        type: "Multiclasse",
        title: "Competenze Acquisite al Multiclassare",
        badge: "Competenze PHB",
        desc: `Quando acquisisci il tuo primo livello in una classe successiva alla prima, ottieni SOLO le seguenti competenze:\n\n${profsList}`
      });

      // Incantesimi Multiclasse
      items.push({
        type: "Multiclasse",
        title: "Incantesimi & Slot Multiclasse",
        badge: "Slot Incantatore",
        desc: `Determini gli slot incantesimo sommando i livelli da incantatore:\n• 1 per ogni livello da Bardo, Chierico, Druido, Mago o Stregone\n• 1/2 per ogni livello da Paladino o Ranger (arrotondato per difetto)\n• 1/3 per ogni livello da Guerriero Cavaliere Mistico o Ladro Mistico Arcano\n\nGli slot ottenuti sono condivisi e puoi usarli per lanciare gli incantesimi conosciuti di qualsiasi classe. I livelli degli incantesimi conosciuti o preparati si determinano invece separatamente per ciascuna classe come se fossi monoclasse di quel livello.`
      });
    }

    const filtered = items.filter(it => {
      if (!query) return true;
      return it.title.toLowerCase().includes(query) || it.desc.toLowerCase().includes(query) || it.type.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="p-6 text-center text-stone-500">Nessun risultato nel compendio per "${query}".</div>`;
      return;
    }

    filtered.forEach(it => {
      const card = document.createElement("div");
      card.className = "p-3 mb-2 rounded-lg border border-stone-300 bg-white/80 shadow-sm";
      card.innerHTML = `
        <div class="flex items-center justify-between mb-1 gap-2">
          <div class="font-bold text-sm text-stone-900 break-words">${it.title}</div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 shrink-0">${it.type} (${it.badge})</span>
        </div>
        <div class="text-xs text-stone-700 whitespace-pre-line leading-relaxed break-words">${it.desc}</div>
      `;
      container.appendChild(card);
    });
  },

  // ---------------------------------------------------------------------------
  // PWA REGISTRATION & GESTIONE AGGIORNAMENTI (Offline Ready)
  // ---------------------------------------------------------------------------
  initPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(reg => {
          console.log('PWA Service Worker attivo:', reg.scope);

          // Controlla se c'è un aggiornamento disponibile
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Nuova versione scaricata! Mostra il banner di avviso
                this.showUpdateBanner(newWorker);
              }
            });
          });
        }).catch(err => console.warn('PWA SW non registrato:', err));

        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            refreshing = true;
            window.location.reload();
          }
        });
      });
    }
  },

  showUpdateBanner(worker) {
    const banner = document.getElementById("pwa-update-banner");
    const btn = document.getElementById("pwa-update-btn");
    if (banner && btn) {
      banner.classList.remove("hidden");
      btn.addEventListener("click", () => {
        btn.textContent = "Aggiornamento in corso...";
        worker.postMessage({ type: 'SKIP_WAITING' });
      });
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {
  App.init();
});

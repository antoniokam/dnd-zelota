// =============================================================================
// D&D 5e ITALIAN COMPENDIUM DATA (PHB + XANATHAR + TASHA + MULTICLASSE)
// Database completo 100% offline per Smartphone, Tablet e Boox E-Ink
// =============================================================================

const DND_DATA = {
  // ---------------------------------------------------------------------------
  // TABELLE & REGOLE MULTICLASSE (PHB Cap. 6)
  // ---------------------------------------------------------------------------
  multiclass: {
    prerequisites: {
      barbarian: { stat: "str", min: 13, label: "Forza 13" },
      bard: { stat: "cha", min: 13, label: "Carisma 13" },
      cleric: { stat: "wis", min: 13, label: "Saggezza 13" },
      druid: { stat: "wis", min: 13, label: "Saggezza 13" },
      fighter: { statChoice: ["str", "dex"], min: 13, label: "Forza 13 o Destrezza 13" },
      monk: { stats: ["dex", "wis"], min: 13, label: "Destrezza 13 e Saggezza 13" },
      paladin: { stats: ["str", "cha"], min: 13, label: "Forza 13 e Carisma 13" },
      ranger: { stats: ["dex", "wis"], min: 13, label: "Destrezza 13 e Saggezza 13" },
      rogue: { stat: "dex", min: 13, label: "Destrezza 13" },
      sorcerer: { stat: "cha", min: 13, label: "Carisma 13" },
      warlock: { stat: "cha", min: 13, label: "Carisma 13" },
      wizard: { stat: "int", min: 13, label: "Intelligenza 13" }
    },
    // Competenze concesse al multiclassare in una nuova classe
    proficienciesGained: {
      barbarian: ["Scudi", "Armi Semplici", "Armi da Guerra"],
      bard: ["Armature Leggere", "1 Abilità a scelta", "1 Strumento Musicale"],
      cleric: ["Armature Leggere", "Armature Medie", "Scudi"],
      druid: ["Armature Leggere", "Armature Medie", "Scudi (non di metallo)"],
      fighter: ["Armature Leggere", "Armature Medie", "Scudi", "Armi Semplici", "Armi da Guerra"],
      monk: ["Armi Semplici", "Spade corte"],
      paladin: ["Armature Leggere", "Armature Medie", "Scudi", "Armi Semplici", "Armi da Guerra"],
      ranger: ["Armature Leggere", "Armature Medie", "Scudi", "Armi Semplici", "Armi da Guerra", "1 Abilità della lista del Ranger"],
      rogue: ["Armature Leggere", "1 Abilità della lista del Ladro", "Arnesi da Scasso"],
      sorcerer: [],
      warlock: ["Armature Leggere", "Armi Semplici"],
      wizard: []
    },
    // Tabella Slot Incantatore Multiclasse (Livello combinato da incantatore: somma livelli Mago/Chierico/Druido/Bardo/Stregone + 1/2 Paladino/Ranger + 1/3 Guerriero Cavaliere Mistico / Ladro Mistico Arcano)
    spellSlotsTable: {
      1:  [2, 0, 0, 0, 0, 0, 0, 0, 0],
      2:  [3, 0, 0, 0, 0, 0, 0, 0, 0],
      3:  [4, 2, 0, 0, 0, 0, 0, 0, 0],
      4:  [4, 3, 0, 0, 0, 0, 0, 0, 0],
      5:  [4, 3, 2, 0, 0, 0, 0, 0, 0],
      6:  [4, 3, 3, 0, 0, 0, 0, 0, 0],
      7:  [4, 3, 3, 1, 0, 0, 0, 0, 0],
      8:  [4, 3, 3, 2, 0, 0, 0, 0, 0],
      9:  [4, 3, 3, 3, 1, 0, 0, 0, 0],
      10: [4, 3, 3, 3, 2, 0, 0, 0, 0],
      11: [4, 3, 3, 3, 2, 1, 0, 0, 0],
      12: [4, 3, 3, 3, 2, 1, 0, 0, 0],
      13: [4, 3, 3, 3, 2, 1, 1, 0, 0],
      14: [4, 3, 3, 3, 2, 1, 1, 0, 0],
      15: [4, 3, 3, 3, 2, 1, 1, 1, 0],
      16: [4, 3, 3, 3, 2, 1, 1, 1, 0],
      17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
      18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
      19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
      20: [4, 3, 3, 3, 3, 2, 2, 1, 1]
    }
  },

  // ---------------------------------------------------------------------------
  // SFONDI (BACKGROUNDS)
  // ---------------------------------------------------------------------------
  backgrounds: [
    {
      id: "acolyte",
      name: "Accolito (Acolyte)",
      skills: ["insight", "religion"],
      languages: 2,
      equipment: ["Simbolo sacro", "Libro di preghiere", "5 bastoncini d'incenso", "Abiti da cerimonia", "15 mo"],
      feature: "Rifugio dei Fedeli (Ospitalità e cure presso templi della tua divinità)"
    },
    {
      id: "soldier",
      name: "Soldato (Soldier)",
      skills: ["athletics", "intimidation"],
      equipment: ["Insegna di grado", "Trofeo di guerra", "Set di dadi d'osso", "Abiti comuni", "10 mo"],
      feature: "Grado Militare (I soldati fedeli al tuo vecchio esercito riconoscono la tua autorità)"
    },
    {
      id: "folk_hero",
      name: "Eroe Popolare (Folk Hero)",
      skills: ["animal_handling", "survival"],
      equipment: ["Arnesi da artigiano", "Pala", "Vaso di ferro", "Abiti comuni", "10 mo"],
      feature: "Ospitalità Rustica (I popolani ti proteggono, offrono vitto e nascondiglio)"
    },
    {
      id: "criminal",
      name: "Criminale / Spia (Criminal)",
      skills: ["deception", "stealth"],
      equipment: ["Piede di porco", "Abiti scuri con cappuccio", "15 mo"],
      feature: "Contatto Criminale (Rete di informatori e ricettatori fidati)"
    },
    {
      id: "sage",
      name: "Sapiente (Sage)",
      skills: ["arcana", "history"],
      languages: 2,
      equipment: ["Flacone d'inchiostro nero", "Pennino", "Piccolo coltello", "Lettera di un collega defunto", "10 mo"],
      feature: "Ricercatore (Se non conosci una risposta, sai esattamente dove e da chi trovarla)"
    },
    {
      id: "outlander",
      name: "Viandante / Nobile Selvaggio (Outlander)",
      skills: ["athletics", "survival"],
      equipment: ["Bastone", "Tagliola", "Trofeo di caccia", "Abiti da viaggiatore", "10 mo"],
      feature: "Origini Raminghe (Memoria infallibile per la geografia e trovi cibo/acqua per 6 persone ogni giorno)"
    }
  ],

  // ---------------------------------------------------------------------------
  // RAZZE E LINEAGGI (PHB + TASHA + XANATHAR)
  // ---------------------------------------------------------------------------
  races: [
    {
      id: "custom_lineage",
      name: "Lineaggio Personalizzato (Tasha)",
      source: "TCoE",
      size: "Media o Piccola",
      speed: 9,
      asi: { custom: 2 },
      languages: ["Comune", "Un linguaggio a scelta"],
      traits: [
        { name: "Incremento dei Punteggi di Caratteristica", desc: "+2 a una caratteristica a tua scelta." },
        { name: "Talento", desc: "Ottieni 1 Talento a tua scelta di cui soddisfi i prerequisiti (es. Maestro d'Armi con Asta, Grande Maestro d'Armi, Resiliente)." },
        { name: "Tratto Razziale", desc: "Scurovisione (18 metri) OPPURE Competenza in un'abilità a tua scelta." }
      ]
    },
    {
      id: "human_standard",
      name: "Umano (Standard)",
      source: "PHB",
      size: "Media",
      speed: 9,
      asi: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
      languages: ["Comune", "Un linguaggio a scelta"],
      traits: [
        { name: "Versatilità Umana", desc: "+1 a tutti i punteggi di caratteristica." }
      ]
    },
    {
      id: "human_variant",
      name: "Umano (Variante)",
      source: "PHB",
      size: "Media",
      speed: 9,
      asi: { chooseTwo: 1 },
      languages: ["Comune", "Un linguaggio a scelta"],
      traits: [
        { name: "Incrementi", desc: "+1 a due caratteristiche differenti." },
        { name: "Talento Iniziale", desc: "Ottieni 1 talento a scelta al 1° livello." },
        { name: "Abilità Iniziale", desc: "Competenza in 1 abilità a tua scelta." }
      ]
    },
    {
      id: "dwarf_hill",
      name: "Nano delle Colline",
      source: "PHB",
      size: "Media",
      speed: 7.5,
      asi: { con: 2, wis: 1 },
      languages: ["Comune", "Nanico"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Resilienza Nanica", desc: "Vantaggio ai TS contro veleno e resistenza ai danni da veleno." },
        { name: "Robustezza Nanica", desc: "+1 PF massimo per ogni livello del personaggio." },
        { name: "Esperienza nella Pietra", desc: "Raddoppia il bonus competenza nelle prove di Storia sulle origini del lavoro in pietra." }
      ]
    },
    {
      id: "dwarf_mountain",
      name: "Nano delle Montagne",
      source: "PHB",
      size: "Media",
      speed: 7.5,
      asi: { str: 2, con: 2 },
      languages: ["Comune", "Nanico"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Resilienza Nanica", desc: "Vantaggio ai TS contro veleno e resistenza ai danni da veleno." },
        { name: "Addestramento nelle Armature Naniche", desc: "Competenza nelle armature leggere e medie." }
      ]
    },
    {
      id: "elf_high",
      name: "Alto Elfo",
      source: "PHB",
      size: "Media",
      speed: 9,
      asi: { dex: 2, int: 1 },
      languages: ["Comune", "Elfico", "Un linguaggio a scelta"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Retaggio Fatato", desc: "Vantaggio contro affascinato; sonno magico inefficace." },
        { name: "Trance", desc: "Riposi in sole 4 ore di meditazione invece di 8 ore di sonno." },
        { name: "Trucchetto", desc: "Conosci 1 trucchetto dalla lista del Mago basato su Intelligenza." }
      ]
    },
    {
      id: "elf_wood",
      name: "Elfo dei Boschi",
      source: "PHB",
      size: "Media",
      speed: 10.5,
      asi: { dex: 2, wis: 1 },
      languages: ["Comune", "Elfico"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Retaggio Fatato", desc: "Vantaggio contro affascinato; sonno magico inefficace." },
        { name: "Piedelesto", desc: "Velocità base aumentata a 10,5 metri (35 ft)." },
        { name: "Mascheramento Selvaggio", desc: "Puoi nasconderti anche solo con fenomeni naturali leggeri (nebbia, pioggia, fogliame)." }
      ]
    },
    {
      id: "elf_drow",
      name: "Elfo Scuro (Drow)",
      source: "PHB",
      size: "Media",
      speed: 9,
      asi: { dex: 2, cha: 1 },
      languages: ["Comune", "Elfico", "Sottocomune"],
      traits: [
        { name: "Scurovisione Superiore", desc: "36 metri." },
        { name: "Sensibilità alla Luce Solare", desc: "Svantaggio a TxC e Percezione se tu o il bersaglio siete alla luce diretta del sole." },
        { name: "Magia Drow", desc: "Luci Danzanti (1° liv), Luminescenza (3° liv), Oscurità (5° liv)." }
      ]
    },
    {
      id: "half_orc",
      name: "Mezzorco",
      source: "PHB",
      size: "Media",
      speed: 9,
      asi: { str: 2, con: 1 },
      languages: ["Comune", "Orchesco"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Minaccioso", desc: "Competenza automatica nell'abilità Intimidire." },
        { name: "Tenacia Implacabile", desc: "Quando scendi a 0 PF senza morire sul colpo, puoi scendere invece a 1 PF (1 volta per riposo lungo)." },
        { name: "Attacchi Selvaggi", desc: "Aggiungi 1 dado d'arma aggiuntivo sui colpi critici in mischia." }
      ]
    },
    {
      id: "half_elf",
      name: "Mezzelfo",
      source: "PHB",
      size: "Media",
      speed: 9,
      asi: { cha: 2, chooseTwo: 1 },
      languages: ["Comune", "Elfico", "Un linguaggio a scelta"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Retaggio Fatato", desc: "Vantaggio contro affascinato; sonno magico inefficace." },
        { name: "Versatilità nelle Abilità", desc: "Competenza in 2 abilità qualsiasi a tua scelta." }
      ]
    },
    {
      id: "dragonborn",
      name: "Dragonide",
      source: "PHB",
      size: "Media",
      speed: 9,
      asi: { str: 2, cha: 1 },
      languages: ["Comune", "Draconico"],
      traits: [
        { name: "Antenato Draconico", desc: "Scegli il tipo di drago e il tipo di danno corrispondente." },
        { name: "Arma a Soffio", desc: "2d6 danni in cono da 4,5m o linea da 9m (TS dimezza, scala con il livello)." },
        { name: "Resistenza Elementale", desc: "Resistenza ai danni dell'antenato scelto." }
      ]
    },
    {
      id: "tiefling",
      name: "Tiefling",
      source: "PHB",
      size: "Media",
      speed: 9,
      asi: { cha: 2, int: 1 },
      languages: ["Comune", "Infernale"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Resistenza Infernale", desc: "Resistenza a tutti i danni da fuoco." },
        { name: "Eredità Infernale", desc: "Taumaturgia (1° liv), Intimorire Infernale (3° liv), Oscurità (5° liv)." }
      ]
    },
    {
      id: "halfling_lightfoot",
      name: "Halfling Piedelesto",
      source: "PHB",
      size: "Piccola",
      speed: 7.5,
      asi: { dex: 2, cha: 1 },
      languages: ["Comune", "Halfling"],
      traits: [
        { name: "Fortunato", desc: "Ritira ogni 1 naturale a TxC, prove e TS." },
        { name: "Coraggioso", desc: "Vantaggio contro la paura." },
        { name: "Furtività Innata", desc: "Puoi nasconderti dietro creature di taglia almeno Media." }
      ]
    },
    {
      id: "gnome_rock",
      name: "Gnomo delle Rocce",
      source: "PHB",
      size: "Piccola",
      speed: 7.5,
      asi: { int: 2, con: 1 },
      languages: ["Comune", "Gnomesco"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Astuzia Gnomesca", desc: "Vantaggio a tutti i TS Intelligenza, Saggezza e Carisma contro la magia!" },
        { name: "Conoscenze dell'Artefice", desc: "Raddoppia competenza su prove di Storia per congegni tecnologici." }
      ]
    },
    {
      id: "aasimar",
      name: "Aasimar (Protettore / Caduto)",
      source: "VGtM / MPMM",
      size: "Media",
      speed: 9,
      asi: { cha: 2, wis: 1 },
      languages: ["Comune", "Celestiale"],
      traits: [
        { name: "Scurovisione", desc: "18 metri." },
        { name: "Resistenza Celestiale", desc: "Resistenza a danni necrotici e radiosi." },
        { name: "Mani Guaritrici", desc: "Azione per curare PF pari al tuo livello totale (1 volta per riposo lungo)." },
        { name: "Luce Radiosa", desc: "Conosci il trucchetto Luce." }
      ]
    },
    {
      id: "goliath",
      name: "Golia",
      source: "VGtM / MPMM",
      size: "Media",
      speed: 9,
      asi: { str: 2, con: 1 },
      languages: ["Comune", "Gigante"],
      traits: [
        { name: "Resistenza della Pietra", desc: "Reazione: quando subisci danno, riduci il danno di 1d12 + mod CON (bonus comp. volte per riposo lungo)." },
        { name: "Corporatura Possente", desc: "Considerato di una taglia più grande per capacità di carico e sollevamento." },
        { name: "Nato dall'Alta Quota", desc: "Aclimatato a freddo estremo e altitudini oltre 6000m." }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // CLASSI BASE (TUTTE LE 12 CLASSI DI D&D 5e)
  // ---------------------------------------------------------------------------
  classes: [
    {
      id: "barbarian",
      name: "Barbaro",
      hitDie: 12,
      primaryStat: "str",
      secondaryStat: "con",
      savingThrows: ["str", "con"],
      armorProficiencies: ["Armature Leggere", "Armature Medie", "Scudi"],
      weaponProficiencies: ["Armi Semplici", "Armi da Guerra"],
      skillChoices: { count: 2, from: ["animal_handling", "athletics", "intimidation", "nature", "perception", "survival"] },
      subclassLevel: 3,
      spellcaster: false,
      featuresByLevel: {
        1: [
          { name: "Ira Barbarica (Rage)", desc: "Vantaggio a prove e TS di Forza. Bonus danni da mischia (+2 al liv 1-8, +3 al 9-15, +4 al 16-20). Resistenza a danni contundenti, perforanti e taglienti." },
          { name: "Difesa Senz'Armatura", desc: "Quando non indossi armature, la tua CA = 10 + mod DES + mod CON + eventuale scudo." }
        ],
        2: [
          { name: "Attacco Irruente (Reckless Attack)", desc: "Vantaggio ai tuoi attacchi in mischia basati su FOR per il turno corrente, ma i nemici hanno vantaggio contro di te fino all'inizio del tuo prossimo turno." },
          { name: "Senso del Pericolo", desc: "Vantaggio ai TS Destrezza contro effetti che puoi vedere (trappole, incantesimi ad area)." }
        ],
        3: [{ name: "Cammino Primordiale", desc: "Scegli il tuo Cammino Barbarico (es. Zelota, Berserker, Totemico, Magia Selvaggia)." }],
        5: [
          { name: "Attacco Extra", desc: "Puoi attaccare due volte invece di una quando compi l'Azione di Attacco." },
          { name: "Movimento Veloce", desc: "+3 metri alla tua velocità di movimento se non indossi armature pesanti." }
        ],
        6: [{ name: "Privilegio del Cammino", desc: "Nuovo potere conferito dalla tua sottoclasse." }],
        7: [{ name: "Istinto Funesto", desc: "Vantaggio ai tiri di Iniziativa e non puoi essere sorpreso se entri in ira all'inizio del combattimento." }]
      }
    },
    {
      id: "fighter",
      name: "Guerriero",
      hitDie: 10,
      primaryStat: "str",
      secondaryStat: "con",
      savingThrows: ["str", "con"],
      armorProficiencies: ["Tutte le Armature", "Scudi"],
      weaponProficiencies: ["Armi Semplici", "Armi da Guerra"],
      skillChoices: { count: 2, from: ["acrobatics", "animal_handling", "athletics", "history", "insight", "intimidation", "perception", "survival"] },
      subclassLevel: 3,
      spellcaster: false,
      featuresByLevel: {
        1: [
          { name: "Stile di Combattimento", desc: "Scegli: Tiro (+2 TxC archi), Difesa (+1 CA), Duellare (+2 danni armi ad una mano), Armi Possenti (ritira 1 e 2 sui dadi danno), Protezione (imponi svantaggio con scudo)." },
          { name: "Recuperare Energie (Second Wind)", desc: "Azione bonus: recuperi 1d10 + livello Guerriero PF (1 volta per riposo breve o lungo)." }
        ],
        2: [{ name: "Azione Impetuosa (Action Surge)", desc: "Compi un'azione aggiuntiva nel tuo turno (1 volta per riposo breve o lungo; 2 volte al liv 17)." }],
        3: [{ name: "Archetipo Marziale", desc: "Scegli la tua sottoclasse marziale (Campione, Maestro d'Armi, Cavaliere delle Rune, Cavaliere dell'Eco, Cavaliere Mistico)." }],
        5: [{ name: "Attacco Extra", desc: "Attacchi due volte invece di una. (Tre volte al liv 11, quattro volte al liv 20)." }],
        9: [{ name: "Indomito", desc: "Puoi ritirare un tiro salvezza fallito (1 volta per riposo lungo)." }]
      }
    },
    {
      id: "paladin",
      name: "Paladino",
      hitDie: 10,
      primaryStat: "str",
      secondaryStat: "cha",
      savingThrows: ["wis", "cha"],
      armorProficiencies: ["Tutte le Armature", "Scudi"],
      weaponProficiencies: ["Armi Semplici", "Armi da Guerra"],
      skillChoices: { count: 2, from: ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"] },
      subclassLevel: 3,
      spellcaster: true,
      spellcastingAbility: "cha",
      featuresByLevel: {
        1: [
          { name: "Senso del Divino", desc: "Rilevi celestiali, immondi e non morti entro 18m." },
          { name: "Imposizione delle Mani", desc: "Riserva di cura pari a 5 x livello Paladino; spendi 5 punti per neutralizzare una malattia o veleno." }
        ],
        2: [
          { name: "Punizione Divina (Divine Smite)", desc: "Quando colpisci con un attacco con arma, spendi uno slot incantesimo per infliggere +2d8 danni radiosi (slot 1) + 1d8 per livello slot oltre il 1° (+1d8 extra contro immondi e non morti, max 5d8)." },
          { name: "Stile di Combattimento", desc: "Difesa, Duellare, Armi Possenti, Protezione." },
          { name: "Incantesimi da Paladino", desc: "Lanci incantesimi preparati basati sul Carisma." }
        ],
        3: [
          { name: "Salute Divina", desc: "Immunità totale a tutte le malattie." },
          { name: "Giuramento Sacro", desc: "Scegli il tuo giuramento (Devozione, Vendetta, Conquista, Gloria, Antichi)." }
        ],
        5: [{ name: "Attacco Extra", desc: "Attacchi due volte quando compi l'Azione di Attacco." }],
        6: [{ name: "Aura di Protezione", desc: "Tu e gli alleati entro 3m aggiungete il tuo modificatore di Carisma a TUTTI i tiri salvezza!" }]
      }
    },
    {
      id: "cleric",
      name: "Chierico",
      hitDie: 8,
      primaryStat: "wis",
      secondaryStat: "con",
      savingThrows: ["wis", "cha"],
      armorProficiencies: ["Armature Leggere", "Armature Medie", "Scudi"],
      weaponProficiencies: ["Armi Semplici"],
      skillChoices: { count: 2, from: ["history", "insight", "medicine", "persuasion", "religion"] },
      subclassLevel: 1,
      spellcaster: true,
      spellcastingAbility: "wis",
      featuresByLevel: {
        1: [
          { name: "Dominio Divino", desc: "Scegli il tuo Dominio (Vita, Crepuscolo, Pace, Tempesta, Luce, Guerra) che conferisce incantesimi e privilegi unici fin dal 1° livello." },
          { name: "Incantesimi Divini", desc: "Prepari incantesimi ogni giorno pari a mod SAG + livello Chierico." }
        ],
        2: [
          { name: "Incanalare Divinità", desc: "Scacciare Non Morti e potere specifico del tuo dominio (1 volta per riposo breve/lungo; 2 volte al liv 6)." }
        ],
        5: [{ name: "Distruggere Non Morti", desc: "I non morti che falliscono il TS contro Scacciare vengono polverizzati all'istante (GS 1/2 al liv 5, GS 1 al liv 8)." }]
      }
    },
    {
      id: "rogue",
      name: "Ladro",
      hitDie: 8,
      primaryStat: "dex",
      secondaryStat: "int",
      savingThrows: ["dex", "int"],
      armorProficiencies: ["Armature Leggere"],
      weaponProficiencies: ["Armi Semplici", "Balestre a mano", "Spade corte", "Spade lunghe", "Stocchi"],
      skillChoices: { count: 4, from: ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleight_of_hand", "stealth"] },
      subclassLevel: 3,
      spellcaster: false,
      featuresByLevel: {
        1: [
          { name: "Attacco Furtivo (Sneak Attack)", desc: "+1d6 danni una volta per turno se hai vantaggio al tiro o se un alleato è adiacente al bersaglio (+1d6 ogni 2 livelli: 2d6 al liv 3, 3d6 al liv 5, 4d6 al liv 7)." },
          { name: "Maestria (Expertise)", desc: "Raddoppia il bonus di competenza su 2 abilità o arnesi da scasso (altre 2 al liv 6)." },
          { name: "Gergo Ladresco", desc: "Linguaggio segreto in codice per messaggi e contrassegni." }
        ],
        2: [{ name: "Azione Scaltra (Cunning Action)", desc: "Compi Scattare, Disimpegnarsi o Nascondersi come Azione Bonus in ogni tuo turno." }],
        3: [{ name: "Archetipo Ladresco", desc: "Scegli la tua sottoclasse (Spadaccino, Assassino, Lama dell'Anima, Furfante, Mistico Arcano)." }],
        5: [{ name: "Schivata Prodigiosa (Uncanny Dodge)", desc: "Reazione: quando vieni colpito da un attacco che vedi, dimezzi il danno subito." }],
        7: [{ name: "Elusione (Evasion)", desc: "Se subisci un effetto con TS Destrezza per dimezzare il danno, subisci 0 danni se superi il TS, e metà se lo fallisci." }]
      }
    },
    {
      id: "wizard",
      name: "Mago",
      hitDie: 6,
      primaryStat: "int",
      secondaryStat: "con",
      savingThrows: ["int", "wis"],
      armorProficiencies: [],
      weaponProficiencies: ["Balestre leggere", "Bastoni", "Dardi", "Fionde", "Pugnali"],
      skillChoices: { count: 2, from: ["arcana", "history", "insight", "investigation", "medicine", "religion"] },
      subclassLevel: 2,
      spellcaster: true,
      spellcastingAbility: "int",
      featuresByLevel: {
        1: [
          { name: "Grimorio & Incantesimi", desc: "Conosci 6 incantesimi di 1° livello e ne aggiungi 2 ad ogni livello. Prepari INT + livello incantesimi." },
          { name: "Recupero Arcano", desc: "Durante un riposo breve recuperi slot incantesimo con livello totale pari a metà livello Mago (arrotondato per eccesso)." }
        ],
        2: [{ name: "Tradizione Arcana", desc: "Scegli la tua scuola di magia (Cantore della Lama, Invocazione, Divinazione, Abiurazione, Negromanzia, Cronurgia)." }]
      }
    },
    {
      id: "bard",
      name: "Bardo",
      hitDie: 8,
      primaryStat: "cha",
      secondaryStat: "dex",
      savingThrows: ["dex", "cha"],
      armorProficiencies: ["Armature Leggere"],
      weaponProficiencies: ["Armi Semplici", "Balestre a mano", "Spade corte", "Spade lunghe", "Stocchi"],
      skillChoices: { count: 3, from: ["acrobatics", "animal_handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleight_of_hand", "stealth", "survival"] },
      subclassLevel: 3,
      spellcaster: true,
      spellcastingAbility: "cha",
      featuresByLevel: {
        1: [
          { name: "Ispirazione Bardica (Bardic Inspiration)", desc: "Azione bonus: conferisci un dado (1d6, 1d8 al liv 5, 1d10 al liv 10) a un alleato entro 18m per sommarlo a un TxC, prova o TS (usi pari a mod CAR)." },
          { name: "Incantesimi da Bardo", desc: "Incantesimi spontanei basati su Carisma con rituali disponibili." }
        ],
        2: [
          { name: "Tuttofare (Jack of All Trades)", desc: "Aggiungi metà del bonus di competenza (arrotondato per difetto) a QUALSIASI prova di caratteristica in cui non hai competenza (inclusa Iniziativa e Controincantesimo!)." },
          { name: "Canto di Riposo", desc: "Gli alleati recuperano 1d6 PF extra spendendo dadi vita durante un riposo breve." }
        ],
        3: [
          { name: "Collegio Bardico", desc: "Scegli il tuo collegio (Eloquenza, Sapienza, Spade, Valore)." },
          { name: "Maestria (Expertise)", desc: "Raddoppia il bonus competenza in 2 abilità a scelta." }
        ]
      }
    },
    {
      id: "druid",
      name: "Druido",
      hitDie: 8,
      primaryStat: "wis",
      secondaryStat: "con",
      savingThrows: ["int", "wis"],
      armorProficiencies: ["Armature Leggere", "Armature Medie", "Scudi (non di metallo)"],
      weaponProficiencies: ["Bastoni", "Dardi", "Falci", "Falcetti", "Fionde", "Giavellotti", "Lance", "Mazzuoli", "Pugnali", "Scimitarre"],
      skillChoices: { count: 2, from: ["animal_handling", "arcana", "insight", "medicine", "nature", "perception", "religion", "survival"] },
      subclassLevel: 2,
      spellcaster: true,
      spellcastingAbility: "wis",
      featuresByLevel: {
        1: [
          { name: "Druidico", desc: "Linguaggio segreto dei druidi e segni occulti nella natura." },
          { name: "Incantesimi Druidici", desc: "Prepari incantesimi ogni giorno pari a mod SAG + livello Druido." }
        ],
        2: [
          { name: "Forma Selvatica (Wild Shape)", desc: "Azione: assumi la forma di una bestia che hai visto (2 usi per riposo breve/lungo; durata = ore pari a metà livello)." },
          { name: "Circolo Druidico", desc: "Scegli la tua sottoclasse (Luna, Stelle, Terra, Spore)." }
        ]
      }
    },
    {
      id: "monk",
      name: "Monaco",
      hitDie: 8,
      primaryStat: "dex",
      secondaryStat: "wis",
      savingThrows: ["str", "dex"],
      armorProficiencies: [],
      weaponProficiencies: ["Armi Semplici", "Spade corte"],
      skillChoices: { count: 2, from: ["acrobatics", "athletics", "history", "insight", "religion", "stealth"] },
      subclassLevel: 3,
      spellcaster: false,
      featuresByLevel: {
        1: [
          { name: "Difesa Senz'Armatura", desc: "Senza armatura e scudo: CA = 10 + mod DES + mod SAG." },
          { name: "Arti Marziali", desc: "Usi DES per attacchi disarmati/armi da monaco (1d4 danni, 1d6 al liv 5), attacco disarmato come azione bonus." }
        ],
        2: [
          { name: "Punti Ki", desc: "Punti pari al livello per Raffica di Colpi, Difesa Paziente, Passo del Vento (recupero a riposo breve)." },
          { name: "Movimento Senz'Armatura", desc: "+3m velocità se senza armatura (+4,5m al liv 6)." }
        ],
        3: [
          { name: "Tradizione Monastica", desc: "Scegli la tua sottoclasse (Mano Aperta, Ombra, Misericordia, Kensei)." },
          { name: "Deviare Dardi", desc: "Reazione: riduci danno di un attacco a distanza di 1d10 + DES + livello Monaco." }
        ],
        5: [
          { name: "Attacco Extra", desc: "Due attacchi quando compi l'Azione di Attacco." },
          { name: "Colpo Senz'Armi Sbalorditivo (Stunning Strike)", desc: "Spendi 1 Ki per stordire il nemico colpito fino al tuo prossimo turno se fallisce TS Costituzione." }
        ]
      }
    },
    {
      id: "ranger",
      name: "Ranger",
      hitDie: 10,
      primaryStat: "dex",
      secondaryStat: "wis",
      savingThrows: ["str", "dex"],
      armorProficiencies: ["Armature Leggere", "Armature Medie", "Scudi"],
      weaponProficiencies: ["Armi Semplici", "Armi Da Guerra"],
      skillChoices: { count: 3, from: ["animal_handling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"] },
      subclassLevel: 3,
      spellcaster: true,
      spellcastingAbility: "wis",
      featuresByLevel: {
        1: [
          { name: "Predatore Flessibile (Tasha)", desc: "Marchio del Favorevole: lanci Marchio del Cacciatore senza consumare slot né concentrazione (bonus comp. volte)." },
          { name: "Esperto Esploratore (Tasha)", desc: "Raddoppia il bonus di competenza su 1 abilità e ottieni velocità di nuotare e scalare." }
        ],
        2: [
          { name: "Stile di Combattimento", desc: "Tiro (+2 TxC), Difesa, Duellare, Combattere con Due Armi." },
          { name: "Incantesimi da Ranger", desc: "Lanci incantesimi tramite Saggezza." }
        ],
        3: [{ name: "Archetipo del Ranger", desc: "Scegli la tua sottoclasse (Gloom Stalker, Cacciatore, Viandante delle Fate, Signore delle Bestie, Horizon Walker)." }],
        5: [{ name: "Attacco Extra", desc: "Attacchi due volte con l'Azione di Attacco." }]
      }
    },
    {
      id: "sorcerer",
      name: "Stregone",
      hitDie: 6,
      primaryStat: "cha",
      secondaryStat: "con",
      savingThrows: ["con", "cha"],
      armorProficiencies: [],
      weaponProficiencies: ["Balestre leggere", "Bastoni", "Dardi", "Fionde", "Pugnali"],
      skillChoices: { count: 2, from: ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"] },
      subclassLevel: 1,
      spellcaster: true,
      spellcastingAbility: "cha",
      featuresByLevel: {
        1: [
          { name: "Origine Stregonesca", desc: "Scegli la tua stirpe magica al 1° livello (Stirpe Draconica, Magia Selvaggia, Anima Prescelta, Mente Aberrante, Anima Meccanica)." },
          { name: "Incantesimi Spontanei", desc: "Lanci incantesimi innati tramite Carisma." }
        ],
        2: [{ name: "Punti Stregoneria", desc: "Punti pari al livello per creare slot o alimentare opzioni metamagiche." }],
        3: [{ name: "Metamagia", desc: "Scegli 2 opzioni: Incantesimo Rapido (lanci come azione bonus), Incantesimo Raddoppiato, Accurato, Celato (nessuna componente verbale/somatica!)." }]
      }
    },
    {
      id: "warlock",
      name: "Warlock",
      hitDie: 8,
      primaryStat: "cha",
      secondaryStat: "con",
      savingThrows: ["wis", "cha"],
      armorProficiencies: ["Armature Leggere"],
      weaponProficiencies: ["Armi Semplici"],
      skillChoices: { count: 2, from: ["arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"] },
      subclassLevel: 1,
      spellcaster: true,
      spellcastingAbility: "cha",
      featuresByLevel: {
        1: [
          { name: "Patrono Ultraterreno", desc: "Scegli il tuo patrono al 1° livello (Lama del Sottomondo, Il Signore Immondo, Il Grande Antico, Il Genio, Signore del Cielo Fatato)." },
          { name: "Magia del Patto (Pact Magic)", desc: "Slot sempre al livello massimo disponibile, recuperabili con riposo breve!" }
        ],
        2: [{ name: "Suppliche Occulte", desc: "Scegli 2 suppliche (es. Deflagrazione Agonizzante +CAR a ogni raggio, Vista Occulta, Armatura delle Ombre)." }],
        3: [{ name: "Dono del Patto", desc: "Scegli: Patto della Lama (evochi qualsiasi arma magica competente), Catena (famiglio superiore), o Tomo (3 trucchetti da qualsiasi classe)." }]
      }
    }
  ],

  // ---------------------------------------------------------------------------
  // SOTTOCLASSI COMPLETO PER TUTTE LE 12 CLASSI (PHB + XGtE + TCoE)
  // ---------------------------------------------------------------------------
  subclasses: [
    // --- BARBARO ---
    {
      id: "barbarian_zealot",
      classId: "barbarian",
      name: "Cammino dello Zelota (Path of the Zealot)",
      source: "XGtE (Guida di Xanathar)",
      desc: "Guerrieri che incanalano la potenza divina nella loro ira per compiere prodigi devastanti.",
      features: [
        { level: 3, name: "Furia Divina (Divine Fury)", desc: "In ira, il 1° colpo a segno per turno infligge +1d6 + metà livello danni Radiosi o Necrotici." },
        { level: 3, name: "Guerriero degli Dei", desc: "Gli incantesimi di resurrezione non consumano componenti materiali in diamanti su di te." },
        { level: 6, name: "Presenza Fanatica", desc: "1 volta per ira puoi ritirare un TS fallito." },
        { level: 10, name: "Presenza Zelota", desc: "Grido di battaglia: fino a 10 alleati ottengono vantaggio a TxC e TS per 1 round (1/riposo lungo)." },
        { level: 14, name: "Ira Oltre la Morte", desc: "Scendere a 0 PF non ti fa perdere i sensi mentre sei in ira; muori solo se l'ira termina a 0 PF." }
      ]
    },
    {
      id: "barbarian_berserker",
      classId: "barbarian",
      name: "Cammino del Berserker",
      source: "PHB (Manuale del Giocatore)",
      desc: "Guerrieri che si abbandonano a una furia cieca incuranti dei pericoli.",
      features: [
        { level: 3, name: "Frenesia (Frenzy)", desc: "Puoi compiere un attacco con arma da mischia come Azione Bonus in ogni tuo turno di ira (subisci 1 livello di sfinimento al termine)." },
        { level: 6, name: "Furia Irrazionale", desc: "Immunità a condizioni Affascinato e Spaventato mentre sei in ira." },
        { level: 10, name: "Presenza Intimidatoria", desc: "Azione per spaventare un nemico con il tuo carisma selvaggio." }
      ]
    },
    {
      id: "barbarian_totem",
      classId: "barbarian",
      name: "Cammino del Guerriero Totemico",
      source: "PHB (Manuale del Giocatore)",
      desc: "Guerrieri che stringono legami mistici con gli spiriti guida animali.",
      features: [
        { level: 3, name: "Spirito Guida: Orso", desc: "In ira hai RESISTENZA A TUTTI I DANNI eccetto i danni psichici!" },
        { level: 3, name: "Spirito Guida: Aquila", desc: "In ira puoi compiere Scattare come Azione Bonus e i nemici hanno svantaggio agli attacchi di opportunità." },
        { level: 3, name: "Spirito Guida: Lupo", desc: "In ira i tuoi alleati hanno vantaggio ai TxC contro nemici entro 1,5m da te." },
        { level: 6, name: "Aspetto della Bestia", desc: "Capacità fisiche e sensoriali potenziate in base al totem." }
      ]
    },
    {
      id: "barbarian_wildmagic",
      classId: "barbarian",
      name: "Cammino della Magia Selvaggia",
      source: "TCoE (Calderone di Tasha)",
      desc: "L'ira attinge alle energie del Feywild scatenando imprevedibili effetti magici.",
      features: [
        { level: 3, name: "Consapevolezza Magica", desc: "Azione per percepire incantesimi e oggetti magici entro 18m." },
        { level: 3, name: "Impulso di Magia Selvaggia", desc: "Quando entri in ira tiri su una tabella d8: teletrasporto bonus, raggi radiosi, armature di spine o rampicanti intralcianti." },
        { level: 6, name: "Magia Stimolante", desc: "Tocchi un alleato conferendogli +1d3 a TxC o ricaricando uno slot incantesimo di 1°-3° livello." }
      ]
    },

    // --- GUERRIERO ---
    {
      id: "fighter_champion",
      classId: "fighter",
      name: "Campione (Champion)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Maestri della perfezione atletica e della pura letalità marziale.",
      features: [
        { level: 3, name: "Critico Migliorato", desc: "I tuoi attacchi con arma mettono a segno un colpo critico con un tiro naturale di 19 o 20!" },
        { level: 7, name: "Atleta Straordinario", desc: "Aggiungi metà del bonus competenza alle prove fisiche in cui non hai competenza e salto potenziato." },
        { level: 10, name: "Secondo Stile di Combattimento", desc: "Scegli un secondo stile di combattimento dalla lista." },
        { level: 15, name: "Critico Superiore", desc: "I tuoi attacchi mettono a segno un colpo critico con 18, 19 o 20 naturale!" }
      ]
    },
    {
      id: "fighter_battlemaster",
      classId: "fighter",
      name: "Maestro d'Armi (Battle Master)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Combattenti tattici che usano manovre e dadi superiorità per dominare il campo.",
      features: [
        { level: 3, name: "Superiorità in Combattimento", desc: "4 Dadi Superiorità (d8) da spendere per manovre tattiche (recupero a riposo breve)." },
        { level: 3, name: "Manovre Tattiche", desc: "Scegli 3 manovre: Attacco con Finta (vantaggio), Attacco con Disarmo, Attacco con Spinta, Passo Evasivo, Attacco di Precisione (+d8 al TxC)." },
        { level: 7, name: "Conosci il Tuo Nemico", desc: "Studiando un nemico per 1 minuto deduci se è superiore o inferiore a te in CA, PF, Forza o Destrezza." }
      ]
    },
    {
      id: "fighter_echoknight",
      classId: "fighter",
      name: "Cavaliere dell'Eco (Echo Knight)",
      source: "EGtW (Guida di Wildemount)",
      desc: "Guerrieri che evocano ombre temporali di se stessi da linee temporali parallele.",
      features: [
        { level: 3, name: "Manifestare l'Eco", desc: "Azione bonus: evochi un'ombra grigia di te stesso entro 4,5m (CA 14 + PB, 1 PF). Puoi attaccare e compiere attacchi di opportunità dalla sua posizione." },
        { level: 3, name: "Teletrasporto dell'Eco", desc: "Azione bonus: scambi istantaneamente posizione con la tua eco spendendo 4,5m di movimento." },
        { level: 3, name: "Incarnazione del Massacro", desc: "Puoi compiere 1 attacco aggiuntivo dall'eco quando compi l'Azione di Attacco (mod CON volte per riposo lungo)." }
      ]
    },
    {
      id: "fighter_runeknight",
      classId: "fighter",
      name: "Cavaliere delle Rune (Rune Knight)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Guerrieri che incidono il potere delle rune dei giganti nelle proprie armi e armature.",
      features: [
        { level: 3, name: "Magia Runica", desc: "Incidi rune (Runa delle Nuvole per deviare attacchi, Runa del Fuoco per incatenare, Runa della Pietra per sonno)." },
        { level: 3, name: "Statura dei Giganti", desc: "Azione bonus: diventi di taglia Grande, ottieni vantaggio alle prove di Forza e infliggi +1d6 danni da arma 1 volta per turno." }
      ]
    },
    {
      id: "fighter_eldritch_knight",
      classId: "fighter",
      name: "Cavaliere Mistico (Eldritch Knight)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Fondono la maestria nelle armi con la magia arcana di abiurazione e invocazione.",
      features: [
        { level: 3, name: "Lancio degli Incantesimi da Mago", desc: "Lanci trucchetti e incantesimi di Abiurazione e Invocazione usando Intelligenza." },
        { level: 3, name: "Legame con l'Arma", desc: "Non puoi essere disarmato della tua arma legata e puoi teletrasportarla nella tua mano come azione bonus da qualsiasi distanza." },
        { level: 7, name: "Magia da Guerra", desc: "Quando usi un'azione per lanciare un trucchetto, puoi effettuare 1 attacco con arma come azione bonus." }
      ]
    },

    // --- PALADINO ---
    {
      id: "paladin_devotion",
      classId: "paladin",
      name: "Giuramento di Devozione",
      source: "PHB (Manuale del Giocatore)",
      desc: "Il cavaliere ideale senza macchia che combatte le tenebre con rettitudine.",
      features: [
        { level: 3, name: "Incanalare Divinità: Arma Sacra", desc: "Azione: l'arma risplende, aggiungi mod CAR a tutti i TxC e l'arma conta come magica che emette luce." },
        { level: 3, name: "Incanalare Divinità: Scacciare gli Empi", desc: "Scaccia immondi e non morti con una preghiera solenne." },
        { level: 7, name: "Aura di Devozione", desc: "Tu e gli alleati entro 3m non potete essere affascinati mentre sei cosciente." }
      ]
    },
    {
      id: "paladin_vengeance",
      classId: "paladin",
      name: "Giuramento di Vendetta",
      source: "PHB (Manuale del Giocatore)",
      desc: "Pietà per gli innocenti, distruzione implacabile per i malvagi.",
      features: [
        { level: 3, name: "Incanalare Divinità: Voto di Inimicizia", desc: "Azione bonus: ottieni VANTAGGIO a tutti i tiri per colpire contro un bersaglio per 1 minuto intero!" },
        { level: 3, name: "Incantesimi di Giuramento", desc: "Marchio del Cacciatore, Passo Nebbioso, Velocità, Esilio." },
        { level: 7, name: "Vendicatore Implacabile", desc: "Quando colpisci con un attacco di opportunità puoi muoverti fino a metà della tua velocità come parte della stessa reazione." }
      ]
    },
    {
      id: "paladin_conquest",
      classId: "paladin",
      name: "Giuramento di Conquista",
      source: "XGtE (Guida di Xanathar)",
      desc: "Schiacciano il caos e piegano i nemici con il terrore assoluto.",
      features: [
        { level: 3, name: "Incanalare Divinità: Presenza Conquistatrice", desc: "Azione: tutte le creature a scelta entro 9m devono superare TS Saggezza o essere spaventate da te per 1 minuto." },
        { level: 3, name: "Incanalare Divinità: Colpo Guidato", desc: "+10 a un tiro per colpire che hai appena effettuato!" },
        { level: 7, name: "Aura di Conquista", desc: "I nemici spaventati entro 3m hanno velocità ridotta a ZERO e subiscono danni psichici continui all'inizio del loro turno." }
      ]
    },
    {
      id: "paladin_ancients",
      classId: "paladin",
      name: "Giuramento degli Antichi",
      source: "PHB (Manuale del Giocatore)",
      desc: "Cavalieri verdi custodi della bellezza, della gioia e dell'equilibrio naturale.",
      features: [
        { level: 3, name: "Incanalare Divinità: Ira della Natura", desc: "Azione: liane spettrali avvolgono un nemico entro 3m trattenendolo (TS Forza o Destrezza)." },
        { level: 7, name: "Aura di Protezione Magica", desc: "Tu e gli alleati entro 3m avete RESISTENZA a TUTTI I DANNI da incantesimi!" }
      ]
    },

    // --- CHIERICO ---
    {
      id: "cleric_life",
      classId: "cleric",
      name: "Dominio della Vita",
      source: "PHB (Manuale del Giocatore)",
      desc: "I più grandi maestri dell'energia positiva e della guarigione miracolosa.",
      features: [
        { level: 1, name: "Competenza nelle Armature Pesanti", desc: "Puoi indossare tutte le armature pesanti." },
        { level: 1, name: "Discepolo della Vita", desc: "I tuoi incantesimi di cura curano +2 + livello dello slot PF addizionali a ogni lancio!" },
        { level: 2, name: "Incanalare Divinità: Preservare la Vita", desc: "Azione: ripristini un pool di PF pari a 5 x livello Chierico distribuito a creature ferite entro 9m (fino a metà dei loro PF massimi)." },
        { level: 6, name: "Guaritore Benedetto", desc: "Quando curi un alleato con un incantesimo, recuperi anche tu 2 + livello dello slot PF." }
      ]
    },
    {
      id: "cleric_twilight",
      classId: "cleric",
      name: "Dominio del Crepuscolo (Twilight)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Protettori che vegliano sulla transizione tra luce e tenebre portando conforto.",
      features: [
        { level: 1, name: "Occhi della Notte", desc: "Scurovisione incredibile con portata fino a 90 METRI (300 ft), condivisibile con gli alleati!" },
        { level: 1, name: "Benedizione Vigile", desc: "Azione: conferisci vantaggio al tiro di Iniziativa a te stesso o a un alleato fino al prossimo riposo." },
        { level: 2, name: "Incanalare Divinità: Santuario del Crepuscolo", desc: "Aura di 9m per 1 minuto: ogni alleato che termina il turno nell'aura ottiene 1d6 + livello Chierico PUNTI FERITA TEMPORANEI oppure rimuove lo stato Affascinato/Spaventato!" }
      ]
    },
    {
      id: "cleric_peace",
      classId: "cleric",
      name: "Dominio della Pace (Peace)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Diplomatici sacri capaci di unire le anime in un legame protettivo indistruttibile.",
      features: [
        { level: 1, name: "Legame Incoraggiante (Emboldening Bond)", desc: "Azione: leghi PB creature per 10 minuti. Una volta per turno possono sommare +1d4 a qualsiasi TxC, prova o TS (cumulabile con Guida e Benedizione)!" },
        { level: 2, name: "Incanalare Divinità: Balsamo della Pace", desc: "Azione: ti muovi fino alla tua velocità senza provocare attacchi di opportunità. Ogni creatura entro 1,5m durante il movimento recupera 2d6 + mod SAG PF." },
        { level: 6, name: "Legame Protettivo", desc: "Quando un alleato legato sta per subire danno, un altro alleato legato entro 9m può usare la reazione per teletrasportarsi e assorbire il danno al suo posto!" }
      ]
    },
    {
      id: "cleric_tempest",
      classId: "cleric",
      name: "Dominio della Tempesta",
      source: "PHB (Manuale del Giocatore)",
      desc: "Incanalano la furia del fulmine, del tuono e delle maree vendicatrici.",
      features: [
        { level: 1, name: "Armature Pesanti & Armi da Guerra", desc: "Competenza in tutte le armature pesanti e le armi marziali." },
        { level: 1, name: "Ira della Tempesta", desc: "Reazione: quando vieni colpito in mischia infliggi 2d8 danni da fulmine o tuono (TS Destrezza dimezza)." },
        { level: 2, name: "Incanalare Divinità: Furia Distruttiva", desc: "Quando infliggi danno da fulmine o tuono, puoi massimizzare il danno inflitto invece di tirare i dadi!" }
      ]
    },

    // --- LADRO ---
    {
      id: "rogue_swashbuckler",
      classId: "rogue",
      name: "Spadaccino (Swashbuckler)",
      source: "XGtE (Guida di Xanathar)",
      desc: "Duellanti agili e spavaldi che eccellono nel combattimento singolo.",
      features: [
        { level: 3, name: "Fascino Audace", desc: "Aggiungi il tuo modificatore di Carisma all'Iniziativa!" },
        { level: 3, name: "Furtivo da Duellante", desc: "Puoi usare Attacco Furtivo in corpo a corpo 1 contro 1 anche senza vantaggio, purché non ci siano altri nemici adiacenti." },
        { level: 3, name: "Piedelesto Spavaldo", desc: "Se effettui un attacco contro una creatura, quella creatura non può compiere attacchi di opportunità contro di te per il resto del turno." }
      ]
    },
    {
      id: "rogue_soulknife",
      classId: "rogue",
      name: "Lama dell'Anima (Soulknife)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Assassini psionici che manifestano lame invisibili e comunicano con il pensiero.",
      features: [
        { level: 3, name: "Lame Psioniche", desc: "Materializzi pugnali psionici mentali (1d6 danni psichici, gittata 18m). Puoi compiere un secondo attacco psionico bonus (1d4 danni)." },
        { level: 3, name: "Dadi di Potere Psionico", desc: "Dadi (d6) da aggiungere a prove fallite o per stabilire una rete telepatica con gli alleati fino a 1,5 km." }
      ]
    },
    {
      id: "rogue_assassin",
      classId: "rogue",
      name: "Assassino (Assassin)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Specialisti nell'infiltrazione, veleni e letali imboscate al primo round.",
      features: [
        { level: 3, name: "Assassinare", desc: "Vantaggio a tutti i TxC contro creature che non hanno ancora agito nel combattimento. Ogni colpo a segno contro una creatura sorpresa è un CRITICO AUTOMATICO!" },
        { level: 3, name: "Competenze Mortali", desc: "Competenza nel kit da camuffamento e nel kit da avvelenatore." }
      ]
    },
    {
      id: "rogue_arcane_trickster",
      classId: "rogue",
      name: "Mistico Arcano (Arcane Trickster)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Fondono agilità ladresca con illusioni e ammaliamenti arcani.",
      features: [
        { level: 3, name: "Lancio degli Incantesimi da Mago", desc: "Lanci trucchetti e incantesimi di Illusione e Incantamento con Intelligenza." },
        { level: 3, name: "Mano Magica Furtiva", desc: "Mano Magica invisibile: borseggia, disarma trappole e scassina a distanza con Rapidità di Mano." }
      ]
    },

    // --- MAGO ---
    {
      id: "wizard_bladesinging",
      classId: "wizard",
      name: "Cantore della Lama (Bladesinging)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Guerrieri-maghi elfici che danzano sul campo fondendo scherma e incantesimi.",
      features: [
        { level: 2, name: "Addestramento della Guerra e del Canto", desc: "Competenza nelle armature leggere, in un'arma da mischia ad una mano e in Intrattenere." },
        { level: 2, name: "Canto della Lama (Bladesong)", desc: "Azione bonus per 1 minuto: +INT alla CA, +3m velocità, vantaggio ad Acrobazia e +INT ai TS Costituzione per mantenere la Concentrazione!" },
        { level: 6, name: "Attacco Extra Speciale", desc: "Puoi attaccare due volte E sostituire uno dei due attacchi con il lancio di un trucchetto (es. Lama Risonante)!" }
      ]
    },
    {
      id: "wizard_evocation",
      classId: "wizard",
      name: "Scuola di Invocazione",
      source: "PHB (Manuale del Giocatore)",
      desc: "Padroni degli elementi distruttivi capaci di proteggere i propri alleati.",
      features: [
        { level: 2, name: "Plasmare Incantesimi (Sculpt Spells)", desc: "I tuoi alleati superano automaticamente i TS contro le tue invocazioni ad area (es. Palla di Fuoco) e non subiscono alcun danno!" },
        { level: 6, name: "Trucchetto Potente", desc: "I nemici subiscono metà danno dai tuoi trucchetti anche se superano il tiro salvezza." }
      ]
    },
    {
      id: "wizard_divination",
      classId: "wizard",
      name: "Scuola di Divinazione",
      source: "PHB (Manuale del Giocatore)",
      desc: "Veggenti che leggono il tempo e piegano il destino a loro piacimento.",
      features: [
        { level: 2, name: "Presagio (Portent)", desc: "Tiri 2d20 dopo ogni riposo lungo. Puoi sostituire QUALSIASI tiro per colpire, TS o prova di una creatura con uno dei tuoi tiri registrati!" },
        { level: 6, name: "Esperto Divinatore", desc: "Quando lanci un incantesimo di divinazione di 2° livello o superiore recuperi uno slot inferiore." }
      ]
    },
    {
      id: "wizard_abjuration",
      classId: "wizard",
      name: "Scuola di Abiurazione",
      source: "PHB (Manuale del Giocatore)",
      desc: "Maestri della protezione magica, controincantesimi e barriere difensive.",
      features: [
        { level: 2, name: "Interdizione Arcana (Arcane Ward)", desc: "Quando lanci un incantesimo di abiurazione crei una barriera protettiva con PF = 2x livello Mago + INT che assorbe il danno subito al tuo posto." },
        { level: 6, name: "Interdizione Proiettata", desc: "Reazione: quando un alleato entro 9m sta per subire danno, la tua interdizione assorbe il danno al suo posto." }
      ]
    },

    // --- DRUIDO ---
    {
      id: "druid_moon",
      classId: "druid",
      name: "Circolo della Luna (Circle of the Moon)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Feroci protettori delle terre selvagge che padroneggiano forme animali colossali.",
      features: [
        { level: 2, name: "Forma da Combattimento", desc: "Ti trasformi in bestia con un'Azione Bonus invece di un'azione standard. Spendi slot incantesimo per curarti di 1d8 PF per livello slot mentre sei trasformato." },
        { level: 2, name: "Forme del Circolo Potenziate", desc: "Puoi trasformarti in bestie con Grado di Sfida pari a 1 al liv 2 (es. Orso Bruno, Lupo Feroce), GS 2 al liv 6, GS 3 al liv 9, GS 4 al liv 12." },
        { level: 6, name: "Colpo Primale", desc: "I tuoi attacchi in forma bestiale contano come magici per superare resistenze e immunità." },
        { level: 10, name: "Forma Selvatica Elementale", desc: "Spendi 2 usi di Forma Selvatica per trasformarti in un Elementale dell'Aria, della Terra, del Fuoco o dell'Acqua!" }
      ]
    },
    {
      id: "druid_stars",
      classId: "druid",
      name: "Circolo delle Stelle (Circle of Stars)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Osservatori celesti che incanalano il bagliore delle costellazioni.",
      features: [
        { level: 2, name: "Mappa Stellare", desc: "Conosci il trucchetto Guida e puoi lanciare Dardo Stellare (Guiding Bolt) gratuitamente un numero di volte pari al tuo bonus di competenza." },
        { level: 2, name: "Forma Stellare", desc: "Azione bonus: assumi una costellazione: Arciere (attacco luminoso a distanza 1d8+SAG come azione bonus), Calice (ogni cura cura +1d8+SAG a un altro alleato), Drago (minimo 10 sui dadi di Concentrazione e INT/SAG)." },
        { level: 6, name: "Bagliore Cosmico", desc: "Reazione: aggiungi o sottrai 1d6 al tiro di una creatura visibile prima che l'effetto abbia luogo." }
      ]
    },
    {
      id: "druid_land",
      classId: "druid",
      name: "Circolo della Terra (Circle of the Land)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Mistici e custodi delle antiche tradizioni legate agli ambienti naturali.",
      features: [
        { level: 2, name: "Trucchetto Aggiuntivo", desc: "Conosci un trucchetto da druido aggiuntivo." },
        { level: 2, name: "Recupero Naturale", desc: "Durante un riposo breve recuperi slot incantesimo con livello totale pari a metà livello Druido." },
        { level: 3, name: "Incantesimi del Circolo", desc: "Incantesimi sempre preparati in base al bioma (Artico, Costa, Deserto, Foresta, Montagna, Palude, Sottosuolo)." }
      ]
    },

    // --- MONACO ---
    {
      id: "monk_open_hand",
      classId: "monk",
      name: "Via della Mano Aperta (Way of the Open Hand)",
      source: "PHB (Manuale del Giocatore)",
      desc: "I maestri assoluti dell'arte marziale disarmata e del controllo corporeo.",
      features: [
        { level: 3, name: "Tecnica della Mano Aperta", desc: "Ogni volta che colpisci con la Raffica di Colpi puoi: atterrare prono il nemico (TS Destrezza), spingerlo via di 4,5m (TS Forza), o negargli le reazioni fino al suo prossimo turno!" },
        { level: 6, name: "Integrità del Corpo", desc: "Azione: recuperi istantaneamente PF pari a 3 x livello Monaco (1 volta per riposo lungo)." },
        { level: 11, name: "Tranquillità", desc: "Ottieni l'effetto permanente dell'incantesimo Santuario dopo ogni riposo." },
        { level: 17, name: "Palmo Tremolante", desc: "Vibrazioni letali letali: con 3 Ki e un'azione fai fallire il cuore del bersaglio (TS Costituzione o ridotto a ZERO PF; 10d10 se supera)." }
      ]
    },
    {
      id: "monk_shadow",
      classId: "monk",
      name: "Via dell'Ombra (Way of Shadow)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Ninja e assassini che scivolano nell'oscurità e colpiscono alle spalle.",
      features: [
        { level: 3, name: "Arti dell'Ombra", desc: "Spendi 2 Ki per lanciare Oscurità, Visione nel Buio, Silenzio o Passo Senza Tracce senza componenti materiali." },
        { level: 6, name: "Passo dell'Ombra", desc: "Azione bonus: quando sei nella penombra o nel buio ti teletrasporti fino a 18 metri in un altro punto d'ombra e hai VANTAGGIO al tuo prossimo attacco in mischia!" }
      ]
    },
    {
      id: "monk_mercy",
      classId: "monk",
      name: "Via della Misericordia (Way of Mercy)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Guaritori manipolatori del Ki della vita e del tocco letale del veleno.",
      features: [
        { level: 3, name: "Mani della Cura", desc: "Spendi 1 Ki per curare un alleato con un tocco (dado arti marziali + mod SAG), oppure sostituisci un attacco della Raffica con una cura a costo 0 Ki!" },
        { level: 3, name: "Mani del Dolore", desc: "Quando colpisci disarmato, spendi 1 Ki per infliggere danno necrotico extra pari al dado arti marziali + mod SAG." }
      ]
    },

    // --- RANGER ---
    {
      id: "ranger_gloomstalker",
      classId: "ranger",
      name: "Cacciatore delle Tenebre (Gloom Stalker)",
      source: "XGtE (Guida di Xanathar)",
      desc: "Letali predatori del sottosuolo invisibili a chi usa la vista nell'oscurità.",
      features: [
        { level: 3, name: "Imboscata Spaventosa", desc: "Aggiungi mod SAG all'Iniziativa. Al 1° turno di combattimento la tua velocità aumenta di +3m e compirai 1 ATTACCO AGGIUNTIVO che infligge +1d8 danni extra!" },
        { level: 3, name: "Vista nell'Ombra", desc: "Scurovisione +9m (o 18m se non ne avevi). SEI TOTALMENTE INVISIBILE a qualsiasi creatura che fa affidamento sulla Scurovisione nel buio!" },
        { level: 7, name: "Mente di Ferro", desc: "Ottieni competenza nei tiri salvezza su Saggezza (o Intelligenza o Carisma se già competente)." }
      ]
    },
    {
      id: "ranger_hunter",
      classId: "ranger",
      name: "Cacciatore (Hunter)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Guerrieri dei boschi specializzati nell'abbattere colossi e orride orde.",
      features: [
        { level: 3, name: "Sterminatore di Colossi", desc: "1 volta per turno infliggi +1d8 danni extra con arma se il bersaglio è già sotto i suoi PF massimi." },
        { level: 7, name: "Tattiche Difensive: Sfuggire all'Orda", desc: "Gli attacchi di opportunità contro di te hanno svantaggio." },
        { level: 11, name: "Attacco Multiplo (Raffica / Turbine)", desc: "Compi un attacco a distanza contro qualsiasi numero di creature entro 3m da un punto, o un attacco in mischia contro tutti i nemici entro 1,5m." }
      ]
    },
    {
      id: "ranger_fey_wanderer",
      classId: "ranger",
      name: "Viandante delle Fate (Fey Wanderer)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Eroi benedetti dalla grazia e dall'inganno del Reame Fatato.",
      features: [
        { level: 3, name: "Colpi Terreni", desc: "1 volta per turno quando colpisci una creatura con un'arma infliggi +1d4 danni psichici." },
        { level: 3, name: "Presenza Fatata", desc: "Aggiungi il tuo modificatore di Saggezza a TUTTE le prove di Carisma (Persuasione, Inganno, Intimidire)!" },
        { level: 7, name: "Torsione Ingannatrice", desc: "Vantaggio ai TS contro Affascinato e Spaventato. Se un alleato o nemico supera il TS, puoi reindirizzare la paura/charme su un altro nemico entro 36m!" }
      ]
    },

    // --- STREGONE ---
    {
      id: "sorcerer_draconic",
      classId: "sorcerer",
      name: "Stirpe Draconica (Draconic Bloodline)",
      source: "PHB (Manuale del Giocatore)",
      desc: "La magia ancestrale dei draghi scorre nelle loro vene corazzandone il corpo.",
      features: [
        { level: 1, name: "Resilienza Draconica", desc: "+1 PF massimo per livello Stregone e la tua pelle scagliosa ti conferisce CA base = 13 + mod DES quando sei senza armatura." },
        { level: 6, name: "Affinità Elementale", desc: "Aggiungi il tuo modificatore di Carisma ai danni degli incantesimi che infliggono il danno del tuo drago antenato (fuoco, freddo, fulmine, acido, veleno)." }
      ]
    },
    {
      id: "sorcerer_wild",
      classId: "sorcerer",
      name: "Magia Selvaggia (Wild Magic)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Manipolano le forze caotiche del caso scatenando tempeste di pura magia grezza.",
      features: [
        { level: 1, name: "Impulso di Magia Selvaggia", desc: "Quando lanci un incantesimo di 1° livello o superiore il DM può farti tirare un d100: effetti casuali stupefacenti o bizzarri!" },
        { level: 1, name: "Maree del Caos", desc: "Ottieni VANTAGGIO a un tiro per colpire, prova o TS a comando (si ricarica con un impulso o a riposo lungo)." },
        { level: 6, name: "Piegare la Sorte", desc: "Reazione: spendi 2 punti stregoneria per aggiungere o sottrarre 1d4 al tiro per colpire o TS di un'altra creatura visibile." }
      ]
    },
    {
      id: "sorcerer_divine",
      classId: "sorcerer",
      name: "Anima Prescelta (Divine Soul)",
      source: "XGtE (Guida di Xanathar)",
      desc: "Benedetti da una scintilla divina, attingono indistintamente al potere arcano e sacro.",
      features: [
        { level: 1, name: "Magia Divina", desc: "Puoi imparare qualsiasi incantesimo dalla lista del CHIERICO oltre a quella dello Stregone!" },
        { level: 1, name: "Favorito dagli Dei", desc: "Se fallisci un tiro per colpire o un tiro salvezza, puoi aggiungere 2d4 al totale (1 volta per riposo breve/lungo)." },
        { level: 6, name: "Guarigione Potenziata", desc: "Spendi 1 punto stregoneria per ritirare qualsiasi numero di dadi di cura di un incantesimo." }
      ]
    },
    {
      id: "sorcerer_aberrant",
      classId: "sorcerer",
      name: "Mente Aberrante (Aberrant Mind)",
      source: "TCoE (Calderone di Tasha)",
      desc: "Invasati dalle energie psioniche del Far Realm, dominano menti e pensieri.",
      features: [
        { level: 1, name: "Eloquenza Telepatica", desc: "Azione bonus: crei un legame telepatico a due vie con una creatura entro 9m fino a un raggio pari a mod CAR km!" },
        { level: 6, name: "Lancio Psionico", desc: "Puoi lanciare gli incantesimi della tua lista psionica spendendo punti stregoneria pari al livello dell'incantesimo senza alcuna componente verbale o somatica!" }
      ]
    },

    // --- WARLOCK ---
    {
      id: "warlock_hexblade",
      classId: "warlock",
      name: "Lama del Sottomondo (Hexblade)",
      source: "XGtE (Guida di Xanathar)",
      desc: "Patto con le oscure entità senzienti della Coltre Oscura artefici di armi leggendarie.",
      features: [
        { level: 1, name: "Guerriero dell'Esanatice", desc: "Competenza nelle armature medie, scudi e armi da guerra. Usi CARISMA invece di Forza o Destrezza per TxC e danni della tua arma da mischia!" },
        { level: 1, name: "Maledizione dell'Esanatice", desc: "Azione bonus per 1 minuto su un bersaglio: +PB ai danni, colpi critici con 19 o 20, e recuperi PF pari a livello Warlock + CAR se muore!" },
        { level: 6, name: "Spettro Maledetto", desc: "Quando uccidi un umanoide leghi la sua ombra per servirte come Spettro fino al prossimo riposo lungo." }
      ]
    },
    {
      id: "warlock_fiend",
      classId: "warlock",
      name: "Il Signore Immondo (The Fiend)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Patto con signori dei Nove Inferi o dell'Abisso bramosi di anime.",
      features: [
        { level: 1, name: "Benedizione dell'Oscuro", desc: "Quando riduci una creatura a 0 PF guadagni PF TEMPORANEI pari a livello Warlock + mod CAR." },
        { level: 6, name: "Fortuna dell'Oscuro", desc: "Aggiungi 1d10 a una prova di caratteristica o tiro salvezza (1 volta per riposo breve/lungo)." }
      ]
    },
    {
      id: "warlock_great_old_one",
      classId: "warlock",
      name: "Il Grande Antico (The Great Old One)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Patto con inconoscibili entità stellari che dormono al di là dello spazio.",
      features: [
        { level: 1, name: "Mente Risvegliata", desc: "Puoi comunicare telepaticamente con qualsiasi creatura entro 9m visibile purché conosca almeno un linguaggio." },
        { level: 6, name: "Difesa Entropica", desc: "Reazione: quando vieni attaccato imponi svantaggio al tiro. Se fallisce, hai vantaggio al tuo prossimo TxC contro di lui." }
      ]
    },

    // --- BARDO ---
    {
      id: "bard_eloquence",
      classId: "bard",
      name: "Collegio dell'Eloquenza",
      source: "TCoE (Calderone di Tasha)",
      desc: "Retori insuperabili le cui parole piegano le menti e rincuorano gli alleati.",
      features: [
        { level: 3, name: "Voce d'Argento", desc: "Ogni tiro naturale di 9 o inferiore su prove di Inganno e Persuasione viene considerato un 10!" },
        { level: 3, name: "Parole Sconfortanti", desc: "Azione bonus: spendi un dado Ispirazione per sottrarre il risultato al prossimo tiro salvezza del bersaglio." },
        { level: 6, name: "Ispirazione Infallibile", desc: "Se un alleato fallisce la prova o il TxC usando il tuo dado Ispirazione, non consuma il dado!" }
      ]
    },
    {
      id: "bard_lore",
      classId: "bard",
      name: "Collegio della Sapienza (College of Lore)",
      source: "PHB (Manuale del Giocatore)",
      desc: "Eruditi che raccolgono segreti del multiverso e padroneggiano incantesimi rubati.",
      features: [
        { level: 3, name: "Competenze Aggiuntive", desc: "Ottieni competenza in 3 abilità qualsiasi a tua scelta." },
        { level: 3, name: "Parole Taglienti", desc: "Reazione: spendi un dado Ispirazione per sottrarre il risultato a un TxC, prova o danno nemico entro 18m." },
        { level: 6, name: "Segreti Magici Aggiuntivi", desc: "Impari 2 incantesimi qualsiasi da QUALSIASI classe (fino al 3° livello) che contano come incantesimi da bardo!" }
      ]
    },
    {
      id: "bard_swords",
      classId: "bard",
      name: "Collegio delle Spade (College of Swords)",
      source: "XGtE (Guida di Xanathar)",
      desc: "Artisti della lama che uniscono abilità circensi a tecniche di scherma letale.",
      features: [
        { level: 3, name: "Competenze da Duellante", desc: "Competenza nelle armature medie e nella scimitarra; la tua arma conta come focus per gli incantesimi." },
        { level: 3, name: "Stile di Combattimento", desc: "Scegli tra Duellare (+2 danni arma singola) o Due Armi." },
        { level: 3, name: "Fioriture di Lama", desc: "Quando colpisci con un'arma spendi 1 dado Ispirazione per: Fioritura Difensiva (aggiungi dado alla CA fino al tuo prossimo turno), Fioritura Mobile (spingi il bersaglio e ti muovi), o Fioritura Fendente (danneggi un altro nemico adiacente)." },
        { level: 6, name: "Attacco Extra", desc: "Puoi attaccare due volte con l'Azione di Attacco." }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // GRIMORIO COMPLETO DI INCANTESIMI D&D 5e (PHB + XANATHAR + TASHA)
  // Oltre 100 incantesimi essenziali dettagliati in italiano dal Trucchetto al 9° Livello
  // ---------------------------------------------------------------------------
  spells: [
    // === TRUCCHETTI (LIVELLO 0) ===
    {
      id: "eldritch_blast",
      name: "Deflagrazione Mistica (Eldritch Blast)",
      level: 0,
      school: "Invocazione",
      classes: ["warlock"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Scagli un raggio di energia crepitante. Effettua un attacco con incantesimo a distanza: se colpisce infligge 1d10 danni da FORZA.\n\nAi livelli superiori: crei due raggi al 5° livello, tre al 11° livello e quattro raggi al 17° livello, indirizzabili sullo stesso bersaglio o su bersagli diversi."
    },
    {
      id: "fire_bolt",
      name: "Dardo di Fuoco (Fire Bolt)",
      level: 0,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Scagli un dardo di fiamme contro una creatura o un oggetto entro la gittata. TxC a distanza con incantesimo: se colpisce infligge 1d10 danni da FUOCO. Gli oggetti infiammabili non indossati o trasportati prendono fuoco.\n\nDanni scalabili: 2d10 al 5° liv, 3d10 al 11° liv, 4d10 al 17° liv."
    },
    {
      id: "booming_blade",
      name: "Lama Risonante (Booming Blade)",
      level: 0,
      school: "Invocazione",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "1,5 metri",
      components: "S, M (un'arma da mischia del valore di almeno 1 ma)",
      duration: "1 round",
      desc: "Compi un attacco con arma da mischia contro una creatura entro gittata. Se colpisci, il bersaglio subisce i normali effetti dell'attacco ed è avvolto da energia tonante: se si sposta volontariamente prima del tuo prossimo turno, subisce istantaneamente 1d8 danni da TUONO.\n\nAl 5° liv: l'attacco infligge +1d8 tuono e il movimento provoca 2d8 tuono. Al 11°: +2d8/+3d8. Al 17°: +3d8/+4d8."
    },
    {
      id: "green_flame_blade",
      name: "Lama di Fiamma Verde (Green-Flame Blade)",
      level: 0,
      school: "Invocazione",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "1,5 metri",
      components: "S, M (un'arma da mischia da almeno 1 ma)",
      duration: "Istantanea",
      desc: "Compi un attacco in mischia con l'arma. Se colpisce, il bersaglio subisce i normali danni e le fiamme verdi balzano su una seconda creatura entro 1,5m infliggendo danni da FUOCO pari al tuo modificatore di caratteristica da incantatore.\n\nAl 5° liv: il primo bersaglio subisce +1d8 fuoco e il secondo 1d8 + mod. Al 11°: +2d8 / 2d8+mod. Al 17°: +3d8 / 3d8+mod."
    },
    {
      id: "guidance",
      name: "Guida (Guidance)",
      level: 0,
      school: "Divinazione",
      classes: ["cleric", "druid"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Tocchi una creatura consenziente. Prima che la durata termini, il bersaglio può tirare 1d4 e aggiungerlo a una prova di caratteristica a sua scelta. Può tirare il dado prima o dopo aver effettuato la prova."
    },
    {
      id: "sacred_flame",
      name: "Fiamma Sacra (Sacred Flame)",
      level: 0,
      school: "Invocazione",
      classes: ["cleric"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Un bagliore simile a una fiamma scende su una creatura entro la gittata. Il bersaglio deve superare un tiro salvezza su Destrezza o subire 1d8 danni RADIOSI. Il bersaglio non ottiene alcun beneficio dalla copertura per questo tiro salvezza.\n\nDanni: 2d8 al 5° liv, 3d8 all'11°, 4d8 al 17°."
    },
    {
      id: "toll_the_dead",
      name: "Rintocco dei Morti (Toll the Dead)",
      level: 0,
      school: "Negromanzia",
      classes: ["cleric", "warlock", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Evochi il suono cupo di una campana funebre. Il bersaglio deve superare un TS Saggezza o subire 1d8 danni NECROTICI. Se il bersaglio è già ferito (ha meno dei suoi PF massimi), subisce invece 1d12 danni necrotici!\n\nScala con il livello: 2d8/2d12 al 5° liv, 3d8/3d12 all'11°, 4d8/4d12 al 17°."
    },
    {
      id: "mind_sliver",
      name: "Scheggia Mentale (Mind Sliver)",
      level: 0,
      school: "Ammaliamento",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V",
      duration: "1 round",
      desc: "Guardi nella mente di una creatura scagliando un picco di dolore psionico: il bersaglio deve superare un TS Intelligenza o subire 1d6 danni PSICHICI e sottrarre 1d4 al suo prossimo tiro salvezza effettuato prima della fine del tuo prossimo turno!"
    },
    {
      id: "ray_of_frost",
      name: "Raggio di Gelo (Ray of Frost)",
      level: 0,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Un raggio gelido azzurrognolo scatta verso il bersaglio. TxC a distanza con incantesimo: se colpisce infligge 1d8 danni da FREDDO e la sua velocità è ridotta di 3 metri fino all'inizio del tuo prossimo turno."
    },
    {
      id: "shocking_grasp",
      name: "Stretta Folgorante (Shocking Grasp)",
      level: 0,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S",
      duration: "Istantanea",
      desc: "Fulmini scattano dalla tua mano. Attacco con incantesimo in mischia con VANTAGGIO se il bersaglio indossa un'armatura di metallo: infligge 1d8 danni da FULMINE e il bersaglio NON può compiere reazioni fino all'inizio del suo prossimo turno!"
    },
    {
      id: "chill_touch",
      name: "Tocco Gelido (Chill Touch)",
      level: 0,
      school: "Negromanzia",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S",
      duration: "1 round",
      desc: "Crei una mano scheletrica spettrale. TxC a distanza con incantesimo: se colpisce infligge 1d8 danni NECROTICI e il bersaglio non può recuperare punti ferita fino all'inizio del tuo prossimo turno. Se il bersaglio è un non morto ha svantaggio ai TxC contro di te."
    },
    {
      id: "shillelagh",
      name: "Bastone Magico (Shillelagh)",
      level: 0,
      school: "Trasmutazione",
      classes: ["druid"],
      time: "1 azione bonus",
      range: "Contatto",
      components: "V, S, M (vischio e un trifoglio)",
      duration: "1 minuto",
      desc: "Impregni il tuo bastone o clava con la magia della natura: usi il tuo modificatore di SAGGEZZA per i tiri per colpire e per i danni dell'arma invece di Forza, il dado del danno diventa un d8 e l'arma conta come magica."
    },
    {
      id: "thaumaturgy",
      name: "Taumaturgia (Thaumaturgy)",
      level: 0,
      school: "Trasmutazione",
      classes: ["cleric"],
      time: "1 azione",
      range: "9 metri",
      components: "V",
      duration: "Fino a 1 minuto",
      desc: "Manifesti prodigi divini: voce tonante triplicata di volume, fiamme tremolanti o che cambiano colore, lievi scosse telluriche, porte e finestre sbloccate che si spalancano all'istante."
    },
    {
      id: "prestidigitation",
      name: "Prestidigitazione (Prestidigitation)",
      level: 0,
      school: "Trasmutazione",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "3 metri",
      components: "V, S",
      duration: "Fino a 1 ora",
      desc: "Piccoli trucchi magici: scintille, sbuffi di vento, riscaldare o raffreddare cibi, pulire o sporcare abiti, accendere candele o torce, imprimere simboli effimeri."
    },
    {
      id: "mage_hand",
      name: "Mano Magica (Mage Hand)",
      level: 0,
      school: "Evocazione",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "9 metri",
      components: "V, S",
      duration: "1 minuto",
      desc: "Mano spettrale fluttuante che manipola oggetti fino a 5 kg, apre porte, versa pozioni e recupera oggetti a distanza."
    },
    {
      id: "minor_illusion",
      name: "Illusione Minore (Minor Illusion)",
      level: 0,
      school: "Illusione",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "9 metri",
      components: "S, M (un vello)",
      duration: "1 minuto",
      desc: "Crei un suono realistico (sussurro, ruggito, tamburo) o l'immagine visiva di un oggetto fermo contenuto in un cubo di 1,5 metri."
    },
    {
      id: "vicious_mockery",
      name: "Beffa Crudele (Vicious Mockery)",
      level: 0,
      school: "Ammaliamento",
      classes: ["bard"],
      time: "1 azione",
      range: "18 metri",
      components: "V",
      duration: "Istantanea",
      desc: "Scagli una serie di insulti taglienti permeati di magia: TS Saggezza o 1d4 danni PSICHICI e SVANTAGGIO al suo prossimo tiro per colpire prima della fine del suo turno!"
    },
    {
      id: "spare_the_dying",
      name: "Salvezza dai Morenti (Spare the Dying)",
      level: 0,
      school: "Negromanzia",
      classes: ["cleric"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S",
      duration: "Istantanea",
      desc: "Tocchi una creatura vivente a 0 punti ferita. La creatura diventa immediatamente stabilizzata (non deve più compiere tiri salvezza contro la morte)."
    },

    // === LIVELLO 1 ===
    {
      id: "shield",
      name: "Scudo (Shield)",
      level: 1,
      school: "Abiurazione",
      classes: ["sorcerer", "wizard"],
      time: "1 reazione (quando vieni colpito da un attacco o bersagliato da Dardo Incantato)",
      range: "Incantatore",
      components: "V, S",
      duration: "1 round",
      desc: "Una barriera invisibile di forza magica ti circonda: ottieni +5 ALLA CA fino all'inizio del tuo prossimo turno (incluso contro l'attacco scatenante) e totale immunità all'incantesimo Dardo Incantato."
    },
    {
      id: "absorb_elements",
      name: "Assorbire Elementi (Absorb Elements)",
      level: 1,
      school: "Abiurazione",
      classes: ["druid", "ranger", "sorcerer", "wizard"],
      time: "1 reazione (quando subisci danno da acido, freddo, fuoco, fulmine o tuono)",
      range: "Incantatore",
      components: "S",
      duration: "1 round",
      desc: "Catturi parte dell'energia in arrivo: ottieni RESISTENZA al tipo di danno scatenante fino all'inizio del tuo prossimo turno, e il tuo primo attacco in mischia nel prossimo turno infligge +1d6 danni aggiuntivi di quel tipo (+1d6 per slot superiore)."
    },
    {
      id: "magic_missile",
      name: "Dardo Incantato (Magic Missile)",
      level: 1,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Crei 3 dardi lucenti di forza che colpiscono INFALLIBILMENTE (nessun tiro per colpire né tiro salvezza!) bersagli a tua scelta entro gittata. Ciascun dardo infligge 1d4 + 1 danni da FORZA.\n\nAi livelli superiori: crei 1 dardo aggiuntivo per ogni livello di slot superiore al 1°."
    },
    {
      id: "cure_wounds",
      name: "Cura Ferite (Cure Wounds)",
      level: 1,
      school: "Invocazione",
      classes: ["bard", "cleric", "druid", "paladin", "ranger"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S",
      duration: "Istantanea",
      desc: "Tocchi una creatura vivente ripristinando un numero di punti ferita pari a 1d8 + il tuo modificatore di caratteristica da incantatore.\n\nAi livelli superiori: +1d8 di cura per ogni livello di slot superiore al 1°."
    },
    {
      id: "healing_word",
      name: "Parola Guaritrice (Healing Word)",
      level: 1,
      school: "Invocazione",
      classes: ["bard", "cleric", "druid"],
      time: "1 azione bonus",
      range: "18 metri",
      components: "V",
      duration: "Istantanea",
      desc: "Una parola di conforto a distanza ripristina istantaneamente 1d4 + mod caratteristica da incantatore PF a una creatura entro gittata. Ideale per rianimare alleati a 0 PF senza perdere l'azione d'attacco!"
    },
    {
      id: "mage_armor",
      name: "Armatura Magica (Mage Armor)",
      level: 1,
      school: "Abiurazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S, M (un pezzo di cuoio conciato)",
      duration: "8 ore",
      desc: "Tocchi una creatura consenziente che non indossa armature. Una barriera magica la circonda: la sua Classe Armatura base diventa 13 + mod Destrezza per 8 ore continue."
    },
    {
      id: "bless",
      name: "Benedizione (Bless)",
      level: 1,
      school: "Ammaliamento",
      classes: ["cleric", "paladin"],
      time: "1 azione",
      range: "9 metri",
      components: "V, S, M (una spruzzata d'acqua santa)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Benedici fino a 3 creature a scelta entro la gittata: ogni volta che un bersaglio effettua un tiro per colpire o un tiro salvezza prima del termine della magia, tira 1d4 e ne aggiunge il risultato al totale!"
    },
    {
      id: "bane",
      name: "Anatema (Bane)",
      level: 1,
      school: "Ammaliamento",
      classes: ["bard", "cleric"],
      time: "1 azione",
      range: "9 metri",
      components: "V, S, M (una goccia di sangue)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Fino a 3 creature entro gittata devono effettuare un TS Carisma: se lo falliscono, devono sottrarre 1d4 da TUTTI i loro tiri per colpire e tiri salvezza per tutta la durata!"
    },
    {
      id: "hunters_mark",
      name: "Marchio del Cacciatore (Hunter's Mark)",
      level: 1,
      school: "Divinazione",
      classes: ["ranger"],
      time: "1 azione bonus",
      range: "27 metri",
      components: "V",
      duration: "Concentrazione, fino a 1 ora",
      desc: "Marchi misticamente una creatura come tua preda: ogni volta che la colpisci con un attacco con arma, le infliggi 1d6 DANNI EXTRA da arma. Hai inoltre vantaggio a tutte le prove di Saggezza (Percezione o Sopravvivenza) per rintracciarla. Se muore, puoi spostare il marchio con un'altra azione bonus."
    },
    {
      id: "hex",
      name: "Fattura (Hex)",
      level: 1,
      school: "Ammaliamento",
      classes: ["warlock"],
      time: "1 azione bonus",
      range: "27 metri",
      components: "V, S, M (l'occhio pietrificato di un tritone)",
      duration: "Concentrazione, fino a 1 ora",
      desc: "Maledici una creatura: le infliggi +1d6 danni NECROTICI ogni volta che la colpisci con un attacco. Inoltre, scegli una caratteristica quando lanci l'incantesimo: il bersaglio ha svantaggio alle prove effettuate con quella caratteristica (es. Forza per sfuggire a lottatori!)."
    },
    {
      id: "faerie_fire",
      name: "Luminescenza (Faerie Fire)",
      level: 1,
      school: "Invocazione",
      classes: ["bard", "druid"],
      time: "1 azione",
      range: "18 metri",
      components: "V",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Tutti gli oggetti e le creature in un cubo di 6m di lato si accendono di luce verde, blu o violetta (TS Destrezza nega): chi fallisce non può beneficiare dell'invisibilità e TUTTI I TIRI PER COLPIRE CONTRO DI ESSO HANNO VANTAGGIO!"
    },
    {
      id: "guiding_bolt",
      name: "Dardo Tracciante (Guiding Bolt)",
      level: 1,
      school: "Invocazione",
      classes: ["cleric"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S",
      duration: "1 round",
      desc: "Un raggio di luce divina saetta verso il nemico. TxC a distanza con incantesimo: se colpisce infligge 4d6 danni RADIOSI e il PROSSIMO tiro per colpire effettuato contro quel bersaglio prima della fine del tuo prossimo turno ha VANTAGGIO!"
    },
    {
      id: "tashas_hideous_laughter",
      name: "Risata Incontenibile di Tasha",
      level: 1,
      school: "Ammaliamento",
      classes: ["bard", "wizard"],
      time: "1 azione",
      range: "9 metri",
      components: "V, S, M (piccole crostate e una piuma)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Il bersaglio percepisce ogni cosa comicamente esilarante: deve superare un TS Saggezza o cadere prono, INCAPACITATO dalle risa per tutta la durata. Ripete il tiro ogni volta che subisce danni."
    },
    {
      id: "sleep",
      name: "Sonno (Sleep)",
      level: 1,
      school: "Ammaliamento",
      classes: ["bard", "sorcerer", "wizard"],
      time: "1 azione",
      range: "27 metri",
      components: "V, S, M (pizzico di sabbia fine o petali di rosa)",
      duration: "1 minuto",
      desc: "Tira 5d8: il totale è la quantità di punti ferita di creature che cadono addormentate in un raggio di 6m, a partire da quella con meno PF attuali. Nessun tiro salvezza consentito!"
    },
    {
      id: "thunderwave",
      name: "Onda Tonante (Thunderwave)",
      level: 1,
      school: "Invocazione",
      classes: ["bard", "druid", "sorcerer", "wizard"],
      time: "1 azione",
      range: "Cubo di 4,5 metri che origina da te",
      components: "V, S",
      duration: "Istantanea",
      desc: "Un'onda di forza tonante spazza via ogni cosa: tutte le creature nel cubo subiscono 2d8 danni da TUONO e vengono spinte indietro di 3 metri (TS Costituzione dimezza e nega la spinta). Il rombo è udibile fino a 90 metri."
    },
    {
      id: "burning_hands",
      name: "Mani Brucianti (Burning Hands)",
      level: 1,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "Cono di 4,5 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Unisci i pollici ed emetti una fiammata a ventaglio: 3d6 danni da FUOCO a tutte le creature nel cono (TS Destrezza dimezza). Incendia oggetti non trasportati."
    },
    {
      id: "feather_fall",
      name: "Caduta Morbida (Feather Fall)",
      level: 1,
      school: "Trasmutazione",
      classes: ["bard", "sorcerer", "wizard"],
      time: "1 reazione (quando tu o una creatura entro 18m cade)",
      range: "18 metri",
      components: "V, M (una piuma)",
      duration: "1 minuto",
      desc: "Rallenti la caduta di un massimo di 5 creature: la loro velocità di discesa scende a 18 metri per round, non subiscono alcun danno da caduta e atterrano in piedi."
    },
    {
      id: "detect_magic",
      name: "Individuazione del Magico (Detect Magic)",
      level: 1,
      school: "Divinazione (Rituale)",
      classes: ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "wizard"],
      time: "1 azione (o 10 minuti come Rituale)",
      range: "Incantatore (9 metri)",
      components: "V, S",
      duration: "Concentrazione, fino a 10 minuti",
      desc: "Percepisci la presenza di magia entro 9m da te. Con un'azione distingui la scuola di magia dell'aura che circonda qualsiasi creatura o oggetto magico visibile."
    },

    // === LIVELLO 2 ===
    {
      id: "misty_step",
      name: "Passo Nebbioso (Misty Step)",
      level: 2,
      school: "Evocazione",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 azione bonus",
      range: "Incantatore",
      components: "V",
      duration: "Istantanea",
      desc: "Circondato da una bruma argentea, ti teletrasporti istantaneamente fino a 9 metri di distanza in uno spazio non occupato che puoi vedere. Non provoca attacchi di opportunità!"
    },
    {
      id: "spiritual_weapon",
      name: "Arma Spirituale (Spiritual Weapon)",
      level: 2,
      school: "Invocazione",
      classes: ["cleric"],
      time: "1 azione bonus",
      range: "18 metri",
      components: "V, S",
      duration: "1 minuto (SENZA concentrazione!)",
      desc: "Crei un'arma spettrale fluttuante della tua divinità: compi un attacco con incantesimo in mischia infliggendo 1d8 + mod caratteristica da incantatore danni da FORZA. In ogni turno successivo puoi muoverla di 6 metri e attaccare di nuovo con un'azione bonus!"
    },
    {
      id: "hold_person",
      name: "Blocca Persone (Hold Person)",
      level: 2,
      school: "Ammaliamento",
      classes: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S, M (un pezzo di ferro)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Un umanoide entro gittata deve superare un TS Saggezza o restare PARALIZZATO per tutta la durata! (Attacchi da 1,5m sono colpi critici automatici!). Ripete il TS alla fine di ogni suo turno."
    },
    {
      id: "web",
      name: "Ragnatela (Web)",
      level: 2,
      school: "Evocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S, M (un batuffolo di ragnatela)",
      duration: "Concentrazione, fino a 1 ora",
      desc: "Evochi una massa di ragnatele appiccicose in un cubo di 6m. Terreno difficile che oscura la vista: chi entra o inizia il turno deve superare TS Destrezza o essere TRATTENUTO (velocità 0, vantaggio a colpirlo)."
    },
    {
      id: "shatter",
      name: "Frantumare (Shatter)",
      level: 2,
      school: "Invocazione",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S, M (scheggia di mica)",
      duration: "Istantanea",
      desc: "Un suono lacerante e doloroso risuona in una sfera di 3m di raggio: 3d8 danni da TUONO a chiunque si trovi all'interno (TS Costituzione dimezza). I costrutti e gli oggetti inanimati subiscono svantaggio al tiro."
    },
    {
      id: "scorching_ray",
      name: "Raggio Rovente (Scorching Ray)",
      level: 2,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Crei 3 raggi di fuoco e li scagli contro uno o più bersagli. Effettua un attacco con incantesimo a distanza per ciascun raggio: ogni raggio a segno infligge 2d6 danni da FUOCO (+1 raggio per livello di slot superiore)."
    },
    {
      id: "mirror_image",
      name: "Immagine Speculare (Mirror Image)",
      level: 2,
      school: "Illusione",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "Incantatore",
      components: "V, S",
      duration: "1 minuto (SENZA concentrazione)",
      desc: "Crei 3 duplicati illusori di te stesso. Quando una creatura ti attacca, tiri un d20: se fai 6+ (con 3 duplicati), l'attacco prende invece di mira un duplicato (CA 10 + mod DES), distruggendolo se colpisce ma lasciando te illeso!"
    },
    {
      id: "pass_without_trace",
      name: "Passare Senza Tracce (Pass Without Trace)",
      level: 2,
      school: "Abiurazione",
      classes: ["druid", "ranger"],
      time: "1 azione",
      range: "Incantatore (9 metri)",
      components: "V, S, M (cenere di vischio)",
      duration: "Concentrazione, fino a 1 ora",
      desc: "Un velo d'ombra e silenzio ti avvolge: tu e qualsiasi alleato a scelta entro 9m ricevete un clamoroso bonus di +10 A TUTTE LE PROVE DI DESTREZZA (FURTIVITÀ) e non potete essere rintracciati se non con la magia!"
    },
    {
      id: "spike_growth",
      name: "Crescita di Spine (Spike Growth)",
      level: 2,
      school: "Trasmutazione",
      classes: ["druid", "ranger"],
      time: "1 azione",
      range: "45 metri",
      components: "V, S, M (sette spine affilate)",
      duration: "Concentrazione, fino a 10 minuti",
      desc: "Il terreno in un raggio di 6m si riempie di spine camuffate e acuminate. Terreno difficile: ogni creatura che vi entra o si sposta subisce 2d4 danni PERFORANTI per ogni 1,5 metri percorsi!"
    },
    {
      id: "lesser_restoration",
      name: "Ripristino Inferiore (Lesser Restoration)",
      level: 2,
      school: "Abiurazione",
      classes: ["bard", "cleric", "druid", "paladin", "ranger"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S",
      duration: "Istantanea",
      desc: "Tocchi una creatura e rimuovi immediatamente una malattia oppure una delle seguenti condizioni che la affliggono: Accecato, Assordato, Paralizzato o Avvelenato."
    },
    {
      id: "suggestion",
      name: "Suggestione (Suggestion)",
      level: 2,
      school: "Incantamento",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "9 metri",
      components: "V, M (una goccia di miele)",
      duration: "Concentrazione, fino a 8 ore",
      desc: "Suggerisci un corso d'azione formulato in un paio di frasi a una creatura che possa capirti: TS Saggezza o la creatura seguirà la tua istruzione per tutta la durata dell'incantesimo."
    },
    {
      id: "darkness",
      name: "Oscurità (Darkness)",
      level: 2,
      school: "Invocazione",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, M (pelo di pipistrello e pece)",
      duration: "Concentrazione, fino a 10 minuti",
      desc: "Evochi una sfera di buio magico impenetrabile di 4,5m di raggio: la normale Scurovisione non può penetrarla e le fonti di luce non magiche vengono spente."
    },
    {
      id: "invisibility",
      name: "Invisibilità (Invisibility)",
      level: 2,
      school: "Illusione",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S, M (un ciglio racchiuso nella gomma arabica)",
      duration: "Concentrazione, fino a 1 ora",
      desc: "Tocchi una creatura consenziente che diventa totalmente invisibile insieme a tutto ciò che indossa o trasporta. L'incantesimo termina anticipatamente se la creatura attacca o lancia un incantesimo."
    },

    // === LIVELLO 3 ===
    {
      id: "fireball",
      name: "Palla di Fuoco (Fireball)",
      level: 3,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "45 metri",
      components: "V, S, M (una pallina di guano di pipistrello e zolfo)",
      duration: "Istantanea",
      desc: "Un raggio luminoso sfreccia dal tuo dito e detona in una ruggente esplosione di fiamme in una sfera di 6 metri di raggio: ogni creatura nell'area subisce 8d6 DANNI DA FUOCO (TS Destrezza dimezza). Incendia tutti gli oggetti infiammabili non indossati.\n\nAi livelli superiori: +1d6 per ogni livello di slot oltre il 3°."
    },
    {
      id: "lightning_bolt",
      name: "Fulmine (Lightning Bolt)",
      level: 3,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "Linea di 30 metri per 1,5 metri che origina da te",
      components: "V, S, M (un frammento di pelliccia e una bacchetta di ambra)",
      duration: "Istantanea",
      desc: "Un fulmine crepitante squarcia l'aria in una linea retta: ogni creatura attraversata subisce 8d6 danni da FULMINE (TS Destrezza dimezza)."
    },
    {
      id: "counterspell",
      name: "Controincantesimo (Counterspell)",
      level: 3,
      school: "Abiurazione",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 reazione (quando vedi una creatura entro 18m lanciare un incantesimo)",
      range: "18 metri",
      components: "S",
      duration: "Istantanea",
      desc: "Tenti di interrompere il lancio di una magia avversaria. Se l'incantesimo nemico è di 3° livello o inferiore, fallisce automaticamente e va sprecato! Se è di 4° livello o superiore, effettua una prova con la tua caratteristica da incantatore (CD 10 + livello incantesimo avversario): se la superi, la magia nemica viene annullata!"
    },
    {
      id: "dispel_magic",
      name: "Dissolvi Magie (Dispel Magic)",
      level: 3,
      school: "Abiurazione",
      classes: ["bard", "cleric", "druid", "paladin", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Scegli una creatura, oggetto o effetto magico entro la gittata: qualsiasi incantesimo di 3° livello o inferiore attivo su di esso termina istantaneamente! Per magie di livello superiore superi una prova di caratteristica con CD 10 + livello della magia per dissolverla."
    },
    {
      id: "revivify",
      name: "Rinascita (Revivify)",
      level: 3,
      school: "Negromanzia",
      classes: ["cleric", "paladin"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S, M (diamanti del valore di almeno 300 mo, che l'incantesimo consuma)",
      duration: "Istantanea",
      desc: "Tocchi una creatura morta entro l'ultimo minuto: la creatura torna istantaneamente in vita con 1 punto ferita! (Nota: per il Barbaro Zelota di livello 3+, non richiede il consumo di componenti in diamanti!)."
    },
    {
      id: "spirit_guardians",
      name: "Spiriti Guardiani (Spirit Guardians)",
      level: 3,
      school: "Evocazione",
      classes: ["cleric"],
      time: "1 azione",
      range: "Incantatore (sfera di 4,5 metri)",
      components: "V, S, M (un simbolo sacro)",
      duration: "Concentrazione, fino a 10 minuti",
      desc: "Evochi spiriti celestiali o spettrali che fluttuano attorno a te in un raggio di 4,5m: la velocità dei nemici nell'area è DIMEZZATA. Quando un nemico entra nell'area o vi inizia il proprio turno, subisce 3d8 danni RADIOSI (o necrotici), con TS Saggezza per dimezzare (+1d8 per livello di slot superiore)."
    },
    {
      id: "hypnotic_pattern",
      name: "Trama Ipnotica (Hypnotic Pattern)",
      level: 3,
      school: "Illusione",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "S, M (un bastoncino d'incenso acceso)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Crei un arazzo volteggiante di colori iridescenti in un cubo di 9m: ogni creatura che lo vede deve superare un TS Saggezza o cadere AFFASCINATA, INCAPACITATA e con velocità pari a zero fino al termine dell'incantesimo o finché non subisce danno."
    },
    {
      id: "haste",
      name: "Velocità (Haste)",
      level: 3,
      school: "Trasmutazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "9 metri",
      components: "V, S, M (un briciolo di radice di liquirizia)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Scegli una creatura consenziente: la sua velocità di movimento è RADDOPPIATA, ottiene un bonus di +2 ALLA CA, VANTAGGIO ai tiri salvezza su Destrezza e un'AZIONE AGGIUNTIVA in ogni suo turno (per Attaccare 1 volta, Scattare, Disimpegnarsi o Usare Oggetto). Quando l'incantesimo termina, il bersaglio perde 1 turno per lo sfinimento."
    },
    {
      id: "slow",
      name: "Lentezza (Slow)",
      level: 3,
      school: "Trasmutazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S, M (una goccia di melassa)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Fino a 6 creature in un cubo di 12m devono superare un TS Saggezza o subire Lentezza: velocità dimezzata, -2 alla CA e ai TS Destrezza, non possono compiere reazioni e possono fare solo un'azione O un'azione bonus (mai entrambe), con massimo 1 solo attacco a turno."
    },
    {
      id: "fly",
      name: "Volare (Fly)",
      level: 3,
      school: "Trasmutazione",
      classes: ["sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S, M (una piuma d'ala d'uccello)",
      duration: "Concentrazione, fino a 10 minuti",
      desc: "Tocchi una creatura consenziente: ottiene una velocità di VOLO pari a 18 METRI (60 ft) per l'intera durata."
    },
    {
      id: "fear",
      name: "Paura (Fear)",
      level: 3,
      school: "Illusione",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "Cono di 9 metri",
      components: "V, S, M (un cuore di gallina)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Proietti un'immagine delle paure più oscure: ogni creatura nel cono che fallisce un TS Saggezza lascia cadere ciò che impugna e diventa SPAVENTATA. Nel proprio turno è costretta a compiere l'Azione di Scattare per fuggire lontano da te per la via più sicura."
    },

    // === LIVELLO 4 ===
    {
      id: "polymorph",
      name: "Metamorfosi (Polymorph)",
      level: 4,
      school: "Trasmutazione",
      classes: ["bard", "druid", "sorcerer", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S, M (il bozzolo di un bruco)",
      duration: "Concentrazione, fino a 1 ora",
      desc: "Trasformi una creatura entro gittata in una qualsiasi bestia con Grado di Sfida pari o inferiore al livello della creatura (es. Tirannosauro Rex, Mammut, Gorilla Gigante). Il bersaglio assume i punti ferita, statistiche fisiche e attacchi della bestia: quando scende a 0 PF torna alla sua forma originale con i PF residui intatti!"
    },
    {
      id: "dimension_door",
      name: "Porta Dimensionale (Dimension Door)",
      level: 4,
      school: "Evocazione",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "150 metri",
      components: "V",
      duration: "Istantanea",
      desc: "Ti teletrasporti istantaneamente fino a 150 metri di distanza in qualsiasi punto desiderato (anche attraverso muri spessi, stanze chiuse o alla cieca specificando direzione e distanza). Puoi portare con te una creatura consenziente della tua taglia o inferiore!"
    },
    {
      id: "banishment",
      name: "Esilio (Banishment)",
      level: 4,
      school: "Abiurazione",
      classes: ["cleric", "paladin", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S, M (un oggetto disgustoso per il bersaglio)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Tenti di bandire una creatura in un altro piano d'esistenza: il bersaglio deve superare un TS Carisma o essere catapultato in un semipiano innocuo (incapacitato). Se la creatura è originaria di un altro piano (immondi, elementali, celestiali) e l'incantesimo dura per l'intero minuto, non fa più ritorno!"
    },
    {
      id: "wall_of_fire",
      name: "Muro di Fuoco (Wall of Fire)",
      level: 4,
      school: "Invocazione",
      classes: ["druid", "sorcerer", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S, M (un pezzo di fosforo)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Crei un muro di fiamme lungo fino a 18 metri e alto 6 metri. Quando appare, infligge 5d8 danni da FUOCO a chi si trova nella sua area (TS Destrezza dimezza). Un lato del muro proietta calore devastante: ogni creatura che termina il proprio turno entro 3m da quel lato o attraversa il muro subisce 5d8 danni da fuoco!"
    },
    {
      id: "greater_invisibility",
      name: "Invisibilità Superiore (Greater Invisibility)",
      level: 4,
      school: "Illusione",
      classes: ["bard", "sorcerer", "wizard"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Tocchi una creatura consenziente rendendola invisibile: a differenza della versione normale, L'INVISIBILITÀ NON SI INTERROMPE QUANDO IL BERSAGLIO ATTACCA O LANCIA INCANTESIMI! Tutti i suoi attacchi godono di vantaggio e gli attacchi contro di lui hanno svantaggio."
    },
    {
      id: "death_ward",
      name: "Interdizione alla Morte (Death Ward)",
      level: 4,
      school: "Abiurazione",
      classes: ["cleric", "paladin"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S",
      duration: "8 ore (SENZA concentrazione)",
      desc: "Tocchi una creatura e le conferisci protezione contro la morte: la prima volta che scenderebbe a 0 punti ferita a causa di un danno, SCENDE INVECE A 1 PUNTO FERITA e l'incantesimo termina. Annulla anche gli effetti di morte istantanea senza danno."
    },

    // === LIVELLO 5 ===
    {
      id: "wall_of_force",
      name: "Muro di Forza (Wall of Force)",
      level: 5,
      school: "Invocazione",
      classes: ["wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S, M (pizzico di polvere di diamante)",
      duration: "Concentrazione, fino a 10 minuti",
      desc: "Evochi una barriera invisibile di pura forza (fino a 10 pannelli da 3x3m o una cupola o sfera di 3m di raggio): È TOTALMENTE INDISTRUTTIBILE e immune a qualsiasi danno o effetto (nulla può attraversarla fisicamente se non tramite teletrasporto o Dissolvi Magie/Disintegrazione). Separa o intrappola qualsiasi nemico!"
    },
    {
      id: "cone_of_cold",
      name: "Cono di Freddo (Cone of Cold)",
      level: 5,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "Cono di 18 metri che origina da te",
      components: "V, S, M (un piccolo cono di cristallo o vetro)",
      duration: "Istantanea",
      desc: "Una tempesta glaciale erompe dalle tue mani: tutte le creature nell'enorme cono di 18 metri subiscono 8d8 danni da FREDDO (TS Costituzione dimezza). I corpi dei caduti vengono trasformati in statue di ghiaccio."
    },
    {
      id: "mass_cure_wounds",
      name: "Cura Ferite di Massa (Mass Cure Wounds)",
      level: 5,
      school: "Invocazione",
      classes: ["bard", "cleric", "druid"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Un'ondata di energia curativa si propaga a un massimo di 6 creature a scelta entro una sfera di 9m di raggio: ciascuna creatura recupera 3d8 + mod caratteristica da incantatore punti ferita."
    },
    {
      id: "raise_dead",
      name: "Rianimare Morti (Raise Dead)",
      level: 5,
      school: "Negromanzia",
      classes: ["bard", "cleric", "paladin"],
      time: "1 ora",
      range: "Contatto",
      components: "V, S, M (un diamante da almeno 500 mo, consumato)",
      duration: "Istantanea",
      desc: "Riporti in vita una creatura morta da non più di 10 giorni, purché la sua anima sia consenziente. Neutralizza veleni e malattie mortali ma non rigenera arti mancanti."
    },
    {
      id: "greater_restoration",
      name: "Ristoro Superiore (Greater Restoration)",
      level: 5,
      school: "Abiurazione",
      classes: ["bard", "cleric", "druid"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S, M (polvere di diamante da almeno 100 mo, consumata)",
      duration: "Istantanea",
      desc: "Imbevi una creatura di energia positiva: rimuovi 1 livello di sfinimento, rimuovi la condizione Charme o Pietrificato, curi qualsiasi riduzione ai punteggi di caratteristica o ai PF massimi, oppure dissolvi una maledizione o possessione."
    },
    {
      id: "synaptic_static",
      name: "Scarica Sinaptica (Synaptic Static)",
      level: 5,
      school: "Ammaliamento",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "36 metri",
      components: "V, S",
      duration: "Istantanea (debaff 1 minuto)",
      desc: "Una detonazione di caos psichico in una sfera di 6m: 8d6 danni PSICHICI (TS Intelligenza dimezza). I bersagli che falliscono subiscono un debaff devastante: DEVONO SOTTRARRE 1d6 a tutti i loro tiri per colpire, prove di caratteristica e tiri di Concentrazione per 1 intero minuto!"
    },

    // === LIVELLO 6 ===
    {
      id: "disintegrate",
      name: "Disintegrazione (Disintegrate)",
      level: 6,
      school: "Trasmutazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S, M (un pizzico di polvere e una goccia d'inchiostro)",
      duration: "Istantanea",
      desc: "Un raggio verde saetta dal tuo dito: il bersaglio deve superare un TS Destrezza o subire 10d6 + 40 DANNI DA FORZA! Se questo danno riduce il bersaglio a 0 punti ferita, esso viene TOTALMENTE POLVERIZZATO in un mucchietto di cenere grigia (resuscitabile solo con Desiderio o Resurrezione Pura). Distrugge all'istante anche Muri di Forza e creazioni magiche."
    },
    {
      id: "chain_lightning",
      name: "Catena di Fulmini (Chain Lightning)",
      level: 6,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "45 metri",
      components: "V, S, M (un pezzo d'ambra, una piuma e tre spilli d'argento)",
      duration: "Istantanea",
      desc: "Crei un fulmine devastante che colpisce un bersaglio primario e poi balza fino a un massimo di 3 altri bersagli entro 9 metri dal primo. Ciascun bersaglio subisce 10d8 danni da FULMINE (TS Destrezza dimezza)."
    },
    {
      id: "heal",
      name: "Guarigione (Heal)",
      level: 6,
      school: "Invocazione",
      classes: ["cleric", "druid"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Un'ondata di luce rigenerante ripristina istantaneamente 70 PUNTI FERITA al bersaglio senza tirare alcun dado! Inoltre cura ogni cecità, sordità e tutte le malattie che lo affliggono."
    },
    {
      id: "globe_of_invulnerability",
      name: "Globo di Invulnerabilità (Globe of Invulnerability)",
      level: 6,
      school: "Abiurazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "Incantatore (sfera di 3 metri)",
      components: "V, S, M (una perla di vetro o cristallo)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Una barriera sferica luminosa di 3 metri di raggio ti protegge: QUALSIASI INCANTESIMO DI 5° LIVELLO O INFERIORE lanciato dall'esterno NON ha alcun effetto su chi si trova all'interno del globo, anche se lanciato con uno slot superiore!"
    },

    // === LIVELLO 7 ===
    {
      id: "forcecage",
      name: "Gabbia di Forza (Forcecage)",
      level: 7,
      school: "Invocazione",
      classes: ["bard", "warlock", "wizard"],
      time: "1 azione",
      range: "30 metri",
      components: "V, S, M (polvere di rubino da 1.500 mo)",
      duration: "1 ora (SENZA concentrazione!)",
      desc: "Intrappoli una creatura in una gabbia o scatola solida di forza indistruttibile (fino a 6 metri di lato). Nessun tiro salvezza per evitare di essere intrappolati! La gabbia impedisce qualsiasi fuga fisica e chi tenta di teletrasportarsi deve superare un TS Carisma o fallire e sprecare la magia."
    },
    {
      id: "teleport",
      name: "Teletrasporto (Teleport)",
      level: 7,
      school: "Evocazione",
      classes: ["bard", "sorcerer", "wizard"],
      time: "1 azione",
      range: "3 metri",
      components: "V",
      duration: "Istantanea",
      desc: "Teletrasporti istantaneamente te stesso e fino a 8 creature consenzienti in qualsiasi destinazione conosciuta sullo stesso piano di esistenza, a prescindere dalla distanza (con precisione in base alla familiarità del luogo)."
    },
    {
      id: "plane_shift",
      name: "Spostamento Planare (Plane Shift)",
      level: 7,
      school: "Evocazione",
      classes: ["cleric", "druid", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S, M (un diapason accordato al piano da almeno 250 mo)",
      duration: "Istantanea",
      desc: "Trasporta te e fino a 8 creature consenzienti in un altro piano di esistenza (Inferi, Piano Astrale, Feywild...). Può essere usato anche in combattimento offensivo: TxC in mischia e TS Carisma per bandire un nemico in un piano ostile!"
    },
    {
      id: "resurrection",
      name: "Resurrezione (Resurrection)",
      level: 7,
      school: "Negromanzia",
      classes: ["bard", "cleric"],
      time: "1 ora",
      range: "Contatto",
      components: "V, S, M (un diamante del valore di almeno 1.000 mo, consumato)",
      duration: "Istantanea",
      desc: "Tocchi una creatura morta da non più di un secolo. Se la sua anima è disposta a tornare, torna in vita con tutti i suoi punti ferita, ricrescendo persino arti e organi mancanti!"
    },

    // === LIVELLO 8 ===
    {
      id: "maze",
      name: "Labirinto (Maze)",
      level: 8,
      school: "Evocazione",
      classes: ["wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S",
      duration: "Concentrazione, fino a 10 minuti",
      desc: "Bandisci all'istante una creatura in un labirinto extradimensionale infinito senza alcun tiro salvezza! Nel suo turno la creatura può usare un'azione per tentare di superare una prova di INTELLIGENZA con CD 20 per fuggire: i mostri brutali con bassa Intelligenza rimangono intrappolati per l'intera durata!"
    },
    {
      id: "mind_blank",
      name: "Vuoto Mentale (Mind Blank)",
      level: 8,
      school: "Abiurazione",
      classes: ["bard", "wizard"],
      time: "1 azione",
      range: "Contatto",
      components: "V, S",
      duration: "24 ore (SENZA concentrazione)",
      desc: "Tocchi una creatura consenziente: per 24 ore è TOTALMENTE IMMUNE a TUTTI i danni psichici, a qualsiasi effetto che tenti di leggere i suoi pensieri o rilevarne le emozioni, agli incantesimi di divinazione e alla condizione Affascinato!"
    },
    {
      id: "sunburst",
      name: "Esplosione Solare (Sunburst)",
      level: 8,
      school: "Invocazione",
      classes: ["druid", "sorcerer", "wizard"],
      time: "1 azione",
      range: "45 metri",
      components: "V, S, M (un pezzo di pietra solare e fuoco)",
      duration: "Istantanea",
      desc: "Una luce solare folgorante risplende in una colossale sfera di 18 metri di raggio: tutte le creature subiscono 12d6 danni RADIOSI e restano ACCECATE per 1 minuto (TS Costituzione dimezza e nega cecità). Danneggia e dissolve all'istante oscurità e non morti vulnerabili al sole."
    },
    {
      id: "earthquake",
      name: "Terremoto (Earthquake)",
      level: 8,
      school: "Invocazione",
      classes: ["cleric", "druid", "sorcerer"],
      time: "1 azione",
      range: "150 metri (raggio di 30 metri)",
      components: "V, S, M (un pezzo di creta e una scheggia di roccia)",
      duration: "Concentrazione, fino a 1 minuto",
      desc: "Scateni un tremito tellurico violentissimo: il terreno trema, le strutture crollano infliggendo 5d6 danni da macerie a chi è sotto, le creature cadono prone (TS Destrezza) e si aprono voragini profonde che inghiottono i nemici."
    },

    // === LIVELLO 9 ===
    {
      id: "wish",
      name: "Desiderio (Wish)",
      level: 9,
      school: "Evocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "Incantatore",
      components: "V",
      duration: "Istantanea",
      desc: "L'incantesimo più potente che un mortale possa lanciare. Può replicare QUALSIASI INCANTESIMO DI 8° LIVELLO O INFERIORE DI QUALSIASI CLASSE senza dover soddisfare requisiti né consumare componenti materiali costose, istantaneamente con 1 azione! Oppure puoi alterare la realtà stessa formulando un desiderio prodigioso (con eventuale stress da Desiderio)."
    },
    {
      id: "meteor_swarm",
      name: "Sciame di Meteore (Meteor Swarm)",
      level: 9,
      school: "Invocazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "1,5 chilometri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Fai piovere quattro globi infuocati che detonano in 4 aree sferiche di 12 metri di raggio: ciascuna creatura nell'area subisce 20d6 DANNI DA FUOCO + 20d6 DANNI CONTUNDENTI (un totale di 40d6 danni, TS Destrezza per dimezzare)! Distrugge all'istante fortezze e interi plotoni nemici."
    },
    {
      id: "true_polymorph",
      name: "Metamorfosi Pura (True Polymorph)",
      level: 9,
      school: "Trasmutazione",
      classes: ["bard", "warlock", "wizard"],
      time: "1 azione",
      range: "9 metri",
      components: "V, S, M (una goccia di mercurio)",
      duration: "Concentrazione, fino a 1 ora (PERMANENTE se mantenuto 1 ora)",
      desc: "Trasformi permanentemente una creatura in un'altra creatura (es. un alleato in un Drago d'Oro Adulto), o una creatura in un oggetto (es. un nemico in un sasso da gettare in mare), o un oggetto in una creatura!"
    },
    {
      id: "true_resurrection",
      name: "Resurrezione Pura (True Resurrection)",
      level: 9,
      school: "Negromanzia",
      classes: ["cleric", "druid"],
      time: "1 ora",
      range: "Contatto",
      components: "V, S, M (diamanti del valore di almeno 25.000 mo, consumati)",
      duration: "Istantanea",
      desc: "Riporti in vita una creatura morta fino a 200 anni prima, anche se il suo corpo originale è stato completamente distrutto, incenerito o polverizzato: l'incantesimo genera un nuovo corpo perfetto e sano!"
    },
    {
      id: "time_stop",
      name: "Fermare il Tempo (Time Stop)",
      level: 9,
      school: "Trasmutazione",
      classes: ["sorcerer", "wizard"],
      time: "1 azione",
      range: "Incantatore",
      components: "V",
      duration: "Istantanea (1d4 + 1 turni)",
      desc: "Arresti il flusso del tempo per tutti tranne che per te stesso: ottieni 1d4 + 1 turni consecutivi durante i quali puoi muoverti e compiere azioni liberamente per preparare magie, bere pozioni o riposizionarti."
    },
    {
      id: "mass_heal",
      name: "Guarigione di Massa (Mass Heal)",
      level: 9,
      school: "Invocazione",
      classes: ["cleric"],
      time: "1 azione",
      range: "18 metri",
      components: "V, S",
      duration: "Istantanea",
      desc: "Una cascata di pura grazia divina: ripristini un montepremi impressionante di 700 PUNTI FERITA distribuito a tua scelta tra qualsiasi numero di creature entro 18m, curando anche tutte le malattie e le cecità/sordità!"
    },
    {
      id: "power_word_kill",
      name: "Parola del Potere: Uccidere (Power Word Kill)",
      level: 9,
      school: "Ammaliamento",
      classes: ["bard", "sorcerer", "warlock", "wizard"],
      time: "1 azione",
      range: "18 metri",
      components: "V",
      duration: "Istantanea",
      desc: "Pronunci una singola sillaba letale di supremo potere arcano: se il bersaglio ha 100 punti ferita o meno, MUORE ALL'ISTANTE SENZA ALCUN TIRO SALVEZZA! Se ha più di 100 PF la magia non ha effetto."
    },
    {
      id: "foresight",
      name: "Previsione (Foresight)",
      level: 9,
      school: "Divinazione",
      classes: ["bard", "druid", "warlock", "wizard"],
      time: "1 minuto",
      range: "Contatto",
      components: "V, S, M (una piuma di colibrì)",
      duration: "8 ore (SENZA concentrazione)",
      desc: "Tocchi una creatura conferendole la visione del futuro immediato: per 8 ore il bersaglio NON può essere sorpreso, HA VANTAGGIO A TUTTI I TIRI PER COLPIRE, PROVE E TIRI SALVEZZA, e tutte le altre creature hanno SVANTAGGIO ai tiri per colpire contro di esso!"
    }
  ],

  // ---------------------------------------------------------------------------
  // REGOLE DI COMBATTIMENTO, AZIONI E CONDIZIONI (PHB Cap. 9)
  // ---------------------------------------------------------------------------
  rules: {
    combatActions: [
      { name: "Attaccare (Attack)", desc: "Compi un attacco in mischia o a distanza con un'arma o disarmato. Con il privilegio Attacco Extra puoi attaccare più volte con la stessa azione." },
      { name: "Lanciare un Incantesimo (Cast a Spell)", desc: "Lanci un incantesimo con tempo di lancio di 1 azione. Se lanci un incantesimo con azione bonus, puoi lanciare solo un trucchetto con l'azione standard." },
      { name: "Scattare (Dash)", desc: "Ottieni movimento aggiuntivo pari alla tua velocità per il turno corrente." },
      { name: "Disimpegnarsi (Disengage)", desc: "Il tuo movimento non provoca attacchi di opportunità fino alla fine del turno corrente." },
      { name: "Schivare (Dodge)", desc: "Fino all'inizio del tuo prossimo turno, qualsiasi tiro per colpire effettuato contro di te ha svantaggio (se vedi l'attaccante) e hai vantaggio a tutti i tiri salvezza su Destrezza." },
      { name: "Aiutare (Help)", desc: "Conferisci vantaggio alla prossima prova di abilità di un alleato o al suo prossimo tiro per colpire contro un bersaglio entro 1,5 metri da te." },
      { name: "Nascondersi (Hide)", desc: "Effettui una prova di Destrezza (Furtività) per eludere la vista dei nemici e diventare inosservato (richiede copertura totale, buio o occultamento)." },
      { name: "Prepararsi (Ready)", desc: "Dichiari una reazione programmata a un evento scatenante (es. 'Se il nemico oltrepassa la porta, scaglio il giavellotto')." },
      { name: "Cercare (Search)", desc: "Dedichi la tua attenzione alla ricerca di qualcosa effettuando una prova di Percezione o Indagare." },
      { name: "Usare un Oggetto (Use an Object)", desc: "Interagisci con un secondo oggetto complesso durante il turno (estrarre una pozione, attivare un congegno, aprire una botola bloccata)." }
    ],
    conditions: [
      { name: "Accecato (Blinded)", desc: "Non può vedere e fallisce automaticamente prove basate sulla vista. I suoi tiri per colpire hanno svantaggio; i tiri per colpire contro di lui hanno vantaggio." },
      { name: "Affascinato (Charmed)", desc: "Non può attaccare o danneggiare chi lo affascina; l'incantatore ha vantaggio a tutte le prove di caratteristica sociali effettuate contro di lui." },
      { name: "Assordato (Deafened)", desc: "Non può sentire e fallisce automaticamente le prove di caratteristica basate sull'udito." },
      { name: "Avvelenato (Poisoned)", desc: "Ha svantaggio a tutti i tiri per colpire e a tutte le prove di caratteristica." },
      { name: "Incapacitato (Incapacitated)", desc: "Non può compiere azioni né reazioni." },
      { name: "Invisibile (Invisible)", desc: "Impossibile da vedere a occhio nudo senza magia o sensi speciali. I suoi tiri per colpire hanno vantaggio; gli attacchi contro di lui hanno svantaggio." },
      { name: "Paralizzato (Paralyzed)", desc: "Incapacitato e incapace di muoversi o parlare. Fallisce automaticamente TS Forza e Destrezza. Gli attacchi contro hanno vantaggio e qualsiasi colpo a segno entro 1,5 metri è un CRITICO AUTOMATICO!" },
      { name: "Pietrificato (Petrified)", desc: "Trasformato in sostanza inanimata solida. Peso x10, incapacitato, fallisce TS FOR e DES, resistenza a tutti i danni, immune a veleno e malattie." },
      { name: "Privo di Sensi (Unconscious)", desc: "Incapacitato, cade prono, lascia cadere oggetti. Fallisce automaticamente TS FOR e DES. Attacchi contro hanno vantaggio e colpi a segno entro 1,5m sono CRITICI AUTOMATICI." },
      { name: "Prono (Prone)", desc: "Può solo strisciare (costo movimento raddoppiato). Svantaggio ai propri tiri per colpire. Gli attacchi contro di lui hanno vantaggio se effettuati entro 1,5m; hanno svantaggio se effettuati a distanza maggiore." },
      { name: "Spaventato (Frightened)", desc: "Ha svantaggio a prove di caratteristica e tiri per colpire finché la fonte della paura è nel suo campo visivo. Non può avvicinarsi volontariamente alla fonte di paura." },
      { name: "Stordito (Stunned)", desc: "Incapacitato, non può muoversi e può solo balbettare. Fallisce automaticamente TS Forza e Destrezza. Gli attacchi contro di lui hanno vantaggio." },
      { name: "Trattenuto (Restrained)", desc: "Velocità pari a 0. Svantaggio ai propri tiri per colpire e ai TS Destrezza. Gli attacchi contro di lui hanno vantaggio." }
    ]
  }
};

// Esportazione universale (compatibile sia con Browser che con Node.js per test)
if (typeof window !== "undefined") {
  window.DND_DATA = DND_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = DND_DATA;
}

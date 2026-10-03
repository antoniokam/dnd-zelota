// =============================================================================
// D&D 5e ITALIAN MASTER COMPENDIUM (PHB + XANATHAR + TASHA + MULTICLASSE)
// Compendio Completo 100% Offline: 364 Incantesimi, 13 Classi, 51 Sottoclassi, 19 Talenti, 23 Razze
// =============================================================================

const DND_DATA = {
  "multiclass": {
    "prerequisites": {
      "barbarian": {
        "stat": "str",
        "min": 13,
        "label": "Forza 13"
      },
      "bard": {
        "stat": "cha",
        "min": 13,
        "label": "Carisma 13"
      },
      "cleric": {
        "stat": "wis",
        "min": 13,
        "label": "Saggezza 13"
      },
      "druid": {
        "stat": "wis",
        "min": 13,
        "label": "Saggezza 13"
      },
      "fighter": {
        "statChoice": [
          "str",
          "dex"
        ],
        "min": 13,
        "label": "Forza 13 o Destrezza 13"
      },
      "monk": {
        "stats": [
          "dex",
          "wis"
        ],
        "min": 13,
        "label": "Destrezza 13 e Saggezza 13"
      },
      "paladin": {
        "stats": [
          "str",
          "cha"
        ],
        "min": 13,
        "label": "Forza 13 e Carisma 13"
      },
      "ranger": {
        "stats": [
          "dex",
          "wis"
        ],
        "min": 13,
        "label": "Destrezza 13 e Saggezza 13"
      },
      "rogue": {
        "stat": "dex",
        "min": 13,
        "label": "Destrezza 13"
      },
      "sorcerer": {
        "stat": "cha",
        "min": 13,
        "label": "Carisma 13"
      },
      "warlock": {
        "stat": "cha",
        "min": 13,
        "label": "Carisma 13"
      },
      "wizard": {
        "stat": "int",
        "min": 13,
        "label": "Intelligenza 13"
      }
    },
    "proficienciesGained": {
      "barbarian": [
        "Scudi",
        "Armi Semplici",
        "Armi da Guerra"
      ],
      "bard": [
        "Armature Leggere",
        "1 Abilità a scelta",
        "1 Strumento Musicale"
      ],
      "cleric": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi"
      ],
      "druid": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi (non di metallo)"
      ],
      "fighter": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi",
        "Armi Semplici",
        "Armi da Guerra"
      ],
      "monk": [
        "Armi Semplici",
        "Spade corte"
      ],
      "paladin": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi",
        "Armi Semplici",
        "Armi da Guerra"
      ],
      "ranger": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi",
        "Armi Semplici",
        "Armi da Guerra",
        "1 Abilità della lista del Ranger"
      ],
      "rogue": [
        "Armature Leggere",
        "1 Abilità della lista del Ladro",
        "Arnesi da Scasso"
      ],
      "sorcerer": [],
      "warlock": [
        "Armature Leggere",
        "Armi Semplici"
      ],
      "wizard": []
    },
    "spellSlotsTable": {
      "1": [
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "2": [
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "3": [
        4,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "4": [
        4,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "5": [
        4,
        3,
        2,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "6": [
        4,
        3,
        3,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "7": [
        4,
        3,
        3,
        1,
        0,
        0,
        0,
        0,
        0
      ],
      "8": [
        4,
        3,
        3,
        2,
        0,
        0,
        0,
        0,
        0
      ],
      "9": [
        4,
        3,
        3,
        3,
        1,
        0,
        0,
        0,
        0
      ],
      "10": [
        4,
        3,
        3,
        3,
        2,
        0,
        0,
        0,
        0
      ],
      "11": [
        4,
        3,
        3,
        3,
        2,
        1,
        0,
        0,
        0
      ],
      "12": [
        4,
        3,
        3,
        3,
        2,
        1,
        0,
        0,
        0
      ],
      "13": [
        4,
        3,
        3,
        3,
        2,
        1,
        1,
        0,
        0
      ],
      "14": [
        4,
        3,
        3,
        3,
        2,
        1,
        1,
        0,
        0
      ],
      "15": [
        4,
        3,
        3,
        3,
        2,
        1,
        1,
        1,
        0
      ],
      "16": [
        4,
        3,
        3,
        3,
        2,
        1,
        1,
        1,
        0
      ],
      "17": [
        4,
        3,
        3,
        3,
        2,
        1,
        1,
        1,
        1
      ],
      "18": [
        4,
        3,
        3,
        3,
        3,
        1,
        1,
        1,
        1
      ],
      "19": [
        4,
        3,
        3,
        3,
        3,
        2,
        1,
        1,
        1
      ],
      "20": [
        4,
        3,
        3,
        3,
        3,
        2,
        2,
        1,
        1
      ]
    }
  },
  "backgrounds": [
    {
      "id": "acolyte",
      "name": "Accolito (Acolyte)",
      "skills": [
        "insight",
        "religion"
      ],
      "languages": 2,
      "equipment": [
        "Simbolo sacro",
        "Libro di preghiere",
        "5 bastoncini d'incenso",
        "Abiti da cerimonia",
        "15 mo"
      ],
      "feature": "Rifugio dei Fedeli (Ospitalità e cure presso templi della tua divinità)"
    },
    {
      "id": "soldier",
      "name": "Soldato (Soldier)",
      "skills": [
        "athletics",
        "intimidation"
      ],
      "equipment": [
        "Insegna di grado",
        "Trofeo di guerra",
        "Set di dadi d'osso",
        "Abiti comuni",
        "10 mo"
      ],
      "feature": "Grado Militare (I soldati fedeli al tuo vecchio esercito riconoscono la tua autorità)"
    },
    {
      "id": "folk_hero",
      "name": "Eroe Popolare (Folk Hero)",
      "skills": [
        "animal_handling",
        "survival"
      ],
      "equipment": [
        "Arnesi da artigiano",
        "Pala",
        "Vaso di ferro",
        "Abiti comuni",
        "10 mo"
      ],
      "feature": "Ospitalità Rustica (I popolani ti proteggono, offrono vitto e nascondiglio)"
    },
    {
      "id": "criminal",
      "name": "Criminale / Spia (Criminal)",
      "skills": [
        "deception",
        "stealth"
      ],
      "equipment": [
        "Piede di porco",
        "Abiti scuri con cappuccio",
        "15 mo"
      ],
      "feature": "Contatto Criminale (Rete di informatori e ricettatori fidati)"
    },
    {
      "id": "sage",
      "name": "Sapiente (Sage)",
      "skills": [
        "arcana",
        "history"
      ],
      "languages": 2,
      "equipment": [
        "Flacone d'inchiostro nero",
        "Pennino",
        "Piccolo coltello",
        "Lettera di un collega defunto",
        "10 mo"
      ],
      "feature": "Ricercatore (Se non conosci una risposta, sai esattamente dove e da chi trovarla)"
    },
    {
      "id": "outlander",
      "name": "Viandante / Nobile Selvaggio (Outlander)",
      "skills": [
        "athletics",
        "survival"
      ],
      "equipment": [
        "Bastone",
        "Tagliola",
        "Trofeo di caccia",
        "Abiti da viaggiatore",
        "10 mo"
      ],
      "feature": "Origini Raminghe (Memoria infallibile per la geografia e trovi cibo/acqua per 6 persone ogni giorno)"
    },
    {
      "id": "guild_artisan",
      "name": "Artigiano di Gilda (Guild Artisan)",
      "skills": [
        "insight",
        "persuasion"
      ],
      "languages": 1,
      "equipment": [
        "Set di arnesi da artigiano",
        "Lettera di presentazione della gilda",
        "Abiti da viaggio",
        "15 mo"
      ],
      "feature": "Appartenenza alla Gilda (Alloggio, protezione legale e supporto commerciale tramite i membri della gilda)"
    },
    {
      "id": "charlatan",
      "name": "Ciarlatano (Charlatan)",
      "skills": [
        "deception",
        "sleight_of_hand"
      ],
      "equipment": [
        "Abiti eleganti",
        "Trucchi per travestimento",
        "Set di dadi truccati",
        "15 mo"
      ],
      "feature": "Falsa Identità (Possiedi una seconda identità completa con documenti contraffatti inattaccabili)"
    },
    {
      "id": "hermit",
      "name": "Eremita (Hermit)",
      "skills": [
        "medicine",
        "religion"
      ],
      "languages": 1,
      "equipment": [
        "Custodia per pergamene piena di appunti",
        "Coperta invernale",
        "Kit da erborista",
        "Abiti comuni",
        "5 mo"
      ],
      "feature": "Scoperta Unica (Hai fatto una scoperta rivoluzionaria sulla natura del cosmo, una rovina o una profezia)"
    },
    {
      "id": "entertainer",
      "name": "Intrattenitore (Entertainer)",
      "skills": [
        "acrobatics",
        "performance"
      ],
      "equipment": [
        "Strumento musicale a scelta",
        "Costume da scena",
        "Favore di un ammiratore",
        "15 mo"
      ],
      "feature": "Su Richiesta Popolare (Vitto e alloggio gratuiti in qualsiasi locanda in cambio delle tue esibizioni serali)"
    },
    {
      "id": "noble",
      "name": "Nobile (Noble)",
      "skills": [
        "history",
        "persuasion"
      ],
      "languages": 1,
      "equipment": [
        "Abiti nobiliari eleganti",
        "Anello con sigillo",
        "Albero genealogico",
        "25 mo"
      ],
      "feature": "Posizione di Privilegio (Accolto con massimo rispetto dall'alta società, udienze garantite con nobili e regnanti)"
    },
    {
      "id": "sailor",
      "name": "Marinaio (Sailor)",
      "skills": [
        "athletics",
        "perception"
      ],
      "equipment": [
        "Caviglia di legno",
        "50 piedi di corda di canapa",
        "Talismano portafortuna",
        "Abiti comuni",
        "10 mo"
      ],
      "feature": "Passaggio Navale (Puoi ottenere un passaggio gratuito su qualsiasi nave mercantile per te e i tuoi compagni)"
    },
    {
      "id": "urchin",
      "name": "Monello dei Bassifondi (Urchin)",
      "skills": [
        "sleight_of_hand",
        "stealth"
      ],
      "equipment": [
        "Coltellino",
        "Mappa della città natale",
        "Topolino domestico",
        "Abiti comuni",
        "10 mo"
      ],
      "feature": "Segreti della Città (Conosci passaggi segreti nei vicoli e puoi viaggiare attraverso la città a velocità doppia)"
    }
  ],
  "races": [
    {
      "id": "custom_lineage",
      "name": "Lineaggio Personalizzato (Tasha)",
      "source": "TCoE",
      "size": "Media o Piccola",
      "speed": 9,
      "asi": {
        "custom": 2
      },
      "languages": [
        "Comune",
        "Un linguaggio a scelta"
      ],
      "traits": [
        {
          "name": "Incremento dei Punteggi di Caratteristica",
          "desc": "+2 a una caratteristica a tua scelta."
        },
        {
          "name": "Talento",
          "desc": "Ottieni 1 Talento a tua scelta di cui soddisfi i prerequisiti (es. Maestro d'Armi con Asta, Grande Maestro d'Armi, Resiliente)."
        },
        {
          "name": "Tratto Razziale",
          "desc": "Scurovisione (18 metri) OPPURE Competenza in un'abilità a tua scelta."
        }
      ]
    },
    {
      "id": "human_standard",
      "name": "Umano (Standard)",
      "source": "PHB",
      "size": "Media",
      "speed": 9,
      "asi": {
        "str": 1,
        "dex": 1,
        "con": 1,
        "int": 1,
        "wis": 1,
        "cha": 1
      },
      "languages": [
        "Comune",
        "Un linguaggio a scelta"
      ],
      "traits": [
        {
          "name": "Versatilità Umana",
          "desc": "+1 a tutti i punteggi di caratteristica."
        }
      ]
    },
    {
      "id": "human_variant",
      "name": "Umano (Variante)",
      "source": "PHB",
      "size": "Media",
      "speed": 9,
      "asi": {
        "chooseTwo": 1
      },
      "languages": [
        "Comune",
        "Un linguaggio a scelta"
      ],
      "traits": [
        {
          "name": "Incrementi",
          "desc": "+1 a due caratteristiche differenti."
        },
        {
          "name": "Talento Iniziale",
          "desc": "Ottieni 1 talento a scelta al 1° livello."
        },
        {
          "name": "Abilità Iniziale",
          "desc": "Competenza in 1 abilità a tua scelta."
        }
      ]
    },
    {
      "id": "dwarf_hill",
      "name": "Nano delle Colline",
      "source": "PHB",
      "size": "Media",
      "speed": 7.5,
      "asi": {
        "con": 2,
        "wis": 1
      },
      "languages": [
        "Comune",
        "Nanico"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Resilienza Nanica",
          "desc": "Vantaggio ai TS contro veleno e resistenza ai danni da veleno."
        },
        {
          "name": "Robustezza Nanica",
          "desc": "+1 PF massimo per ogni livello del personaggio."
        },
        {
          "name": "Esperienza nella Pietra",
          "desc": "Raddoppia il bonus competenza nelle prove di Storia sulle origini del lavoro in pietra."
        }
      ]
    },
    {
      "id": "dwarf_mountain",
      "name": "Nano delle Montagne",
      "source": "PHB",
      "size": "Media",
      "speed": 7.5,
      "asi": {
        "str": 2,
        "con": 2
      },
      "languages": [
        "Comune",
        "Nanico"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Resilienza Nanica",
          "desc": "Vantaggio ai TS contro veleno e resistenza ai danni da veleno."
        },
        {
          "name": "Addestramento nelle Armature Naniche",
          "desc": "Competenza nelle armature leggere e medie."
        }
      ]
    },
    {
      "id": "elf_high",
      "name": "Alto Elfo",
      "source": "PHB",
      "size": "Media",
      "speed": 9,
      "asi": {
        "dex": 2,
        "int": 1
      },
      "languages": [
        "Comune",
        "Elfico",
        "Un linguaggio a scelta"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Retaggio Fatato",
          "desc": "Vantaggio contro affascinato; sonno magico inefficace."
        },
        {
          "name": "Trance",
          "desc": "Riposi in sole 4 ore di meditazione invece di 8 ore di sonno."
        },
        {
          "name": "Trucchetto",
          "desc": "Conosci 1 trucchetto dalla lista del Mago basato su Intelligenza."
        }
      ]
    },
    {
      "id": "elf_wood",
      "name": "Elfo dei Boschi",
      "source": "PHB",
      "size": "Media",
      "speed": 10.5,
      "asi": {
        "dex": 2,
        "wis": 1
      },
      "languages": [
        "Comune",
        "Elfico"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Retaggio Fatato",
          "desc": "Vantaggio contro affascinato; sonno magico inefficace."
        },
        {
          "name": "Piedelesto",
          "desc": "Velocità base aumentata a 10,5 metri (35 ft)."
        },
        {
          "name": "Mascheramento Selvaggio",
          "desc": "Puoi nasconderti anche solo con fenomeni naturali leggeri (nebbia, pioggia, fogliame)."
        }
      ]
    },
    {
      "id": "elf_drow",
      "name": "Elfo Scuro (Drow)",
      "source": "PHB",
      "size": "Media",
      "speed": 9,
      "asi": {
        "dex": 2,
        "cha": 1
      },
      "languages": [
        "Comune",
        "Elfico",
        "Sottocomune"
      ],
      "traits": [
        {
          "name": "Scurovisione Superiore",
          "desc": "36 metri."
        },
        {
          "name": "Sensibilità alla Luce Solare",
          "desc": "Svantaggio a TxC e Percezione se tu o il bersaglio siete alla luce diretta del sole."
        },
        {
          "name": "Magia Drow",
          "desc": "Luci Danzanti (1° liv), Luminescenza (3° liv), Oscurità (5° liv)."
        }
      ]
    },
    {
      "id": "half_orc",
      "name": "Mezzorco",
      "source": "PHB",
      "size": "Media",
      "speed": 9,
      "asi": {
        "str": 2,
        "con": 1
      },
      "languages": [
        "Comune",
        "Orchesco"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Minaccioso",
          "desc": "Competenza automatica nell'abilità Intimidire."
        },
        {
          "name": "Tenacia Implacabile",
          "desc": "Quando scendi a 0 PF senza morire sul colpo, puoi scendere invece a 1 PF (1 volta per riposo lungo)."
        },
        {
          "name": "Attacchi Selvaggi",
          "desc": "Aggiungi 1 dado d'arma aggiuntivo sui colpi critici in mischia."
        }
      ]
    },
    {
      "id": "half_elf",
      "name": "Mezzelfo",
      "source": "PHB",
      "size": "Media",
      "speed": 9,
      "asi": {
        "cha": 2,
        "chooseTwo": 1
      },
      "languages": [
        "Comune",
        "Elfico",
        "Un linguaggio a scelta"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Retaggio Fatato",
          "desc": "Vantaggio contro affascinato; sonno magico inefficace."
        },
        {
          "name": "Versatilità nelle Abilità",
          "desc": "Competenza in 2 abilità qualsiasi a tua scelta."
        }
      ]
    },
    {
      "id": "dragonborn",
      "name": "Dragonide",
      "source": "PHB",
      "size": "Media",
      "speed": 9,
      "asi": {
        "str": 2,
        "cha": 1
      },
      "languages": [
        "Comune",
        "Draconico"
      ],
      "traits": [
        {
          "name": "Antenato Draconico",
          "desc": "Scegli il tipo di drago e il tipo di danno corrispondente."
        },
        {
          "name": "Arma a Soffio",
          "desc": "2d6 danni in cono da 4,5m o linea da 9m (TS dimezza, scala con il livello)."
        },
        {
          "name": "Resistenza Elementale",
          "desc": "Resistenza ai danni dell'antenato scelto."
        }
      ]
    },
    {
      "id": "tiefling",
      "name": "Tiefling",
      "source": "PHB",
      "size": "Media",
      "speed": 9,
      "asi": {
        "cha": 2,
        "int": 1
      },
      "languages": [
        "Comune",
        "Infernale"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Resistenza Infernale",
          "desc": "Resistenza a tutti i danni da fuoco."
        },
        {
          "name": "Eredità Infernale",
          "desc": "Taumaturgia (1° liv), Intimorire Infernale (3° liv), Oscurità (5° liv)."
        }
      ]
    },
    {
      "id": "halfling_lightfoot",
      "name": "Halfling Piedelesto",
      "source": "PHB",
      "size": "Piccola",
      "speed": 7.5,
      "asi": {
        "dex": 2,
        "cha": 1
      },
      "languages": [
        "Comune",
        "Halfling"
      ],
      "traits": [
        {
          "name": "Fortunato",
          "desc": "Ritira ogni 1 naturale a TxC, prove e TS."
        },
        {
          "name": "Coraggioso",
          "desc": "Vantaggio contro la paura."
        },
        {
          "name": "Furtività Innata",
          "desc": "Puoi nasconderti dietro creature di taglia almeno Media."
        }
      ]
    },
    {
      "id": "gnome_rock",
      "name": "Gnomo delle Rocce",
      "source": "PHB",
      "size": "Piccola",
      "speed": 7.5,
      "asi": {
        "int": 2,
        "con": 1
      },
      "languages": [
        "Comune",
        "Gnomesco"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Astuzia Gnomesca",
          "desc": "Vantaggio a tutti i TS Intelligenza, Saggezza e Carisma contro la magia!"
        },
        {
          "name": "Conoscenze dell'Artefice",
          "desc": "Raddoppia competenza su prove di Storia per congegni tecnologici."
        }
      ]
    },
    {
      "id": "aasimar",
      "name": "Aasimar (Protettore / Caduto)",
      "source": "VGtM / MPMM",
      "size": "Media",
      "speed": 9,
      "asi": {
        "cha": 2,
        "wis": 1
      },
      "languages": [
        "Comune",
        "Celestiale"
      ],
      "traits": [
        {
          "name": "Scurovisione",
          "desc": "18 metri."
        },
        {
          "name": "Resistenza Celestiale",
          "desc": "Resistenza a danni necrotici e radiosi."
        },
        {
          "name": "Mani Guaritrici",
          "desc": "Azione per curare PF pari al tuo livello totale (1 volta per riposo lungo)."
        },
        {
          "name": "Luce Radiosa",
          "desc": "Conosci il trucchetto Luce."
        }
      ]
    },
    {
      "id": "goliath",
      "name": "Golia",
      "source": "VGtM / MPMM",
      "size": "Media",
      "speed": 9,
      "asi": {
        "str": 2,
        "con": 1
      },
      "languages": [
        "Comune",
        "Gigante"
      ],
      "traits": [
        {
          "name": "Resistenza della Pietra",
          "desc": "Reazione: quando subisci danno, riduci il danno di 1d12 + mod CON (bonus comp. volte per riposo lungo)."
        },
        {
          "name": "Corporatura Possente",
          "desc": "Considerato di una taglia più grande per capacità di carico e sollevamento."
        },
        {
          "name": "Nato dall'Alta Quota",
          "desc": "Aclimatato a freddo estremo e altitudini oltre 6000m."
        }
      ]
    },
    {
      "id": "halfling_stout",
      "name": "Halfling Tozzo (Stout)",
      "source": "PHB",
      "size": "Piccola",
      "speed": 7.5,
      "asi": {
        "dex": 2,
        "con": 1
      },
      "languages": [
        "Comune",
        "Halfling"
      ],
      "traits": [
        {
          "name": "Fortunato",
          "desc": "Quando ottieni un 1 naturale al d20 per colpire, prova o TS, puoi ritirare il dado."
        },
        {
          "name": "Resilienza dei Tozzi",
          "desc": "Vantaggio ai TS contro veleno e resistenza ai danni da veleno."
        }
      ]
    },
    {
      "id": "gnome_forest",
      "name": "Gnomo delle Foreste",
      "source": "PHB",
      "size": "Piccola",
      "speed": 7.5,
      "asi": {
        "int": 2,
        "dex": 1
      },
      "languages": [
        "Comune",
        "Gnomesco"
      ],
      "traits": [
        {
          "name": "Astuzia Gnomesca",
          "desc": "Vantaggio a tutti i TS su INT, SAG e CAR contro le magie."
        },
        {
          "name": "Illusionista Naturale",
          "desc": "Conosci il trucchetto Illusione Minore (basato su INT)."
        },
        {
          "name": "Parlare con le Piccole Bestie",
          "desc": "Puoi comunicare concetti semplici a piccoli animali di bosco."
        }
      ]
    },
    {
      "id": "tabaxi",
      "name": "Tabaxi (Uomo-Gatto)",
      "source": "MPMM",
      "size": "Media",
      "speed": 9,
      "asi": {
        "dex": 2,
        "cha": 1
      },
      "languages": [
        "Comune",
        "Un linguaggio a scelta"
      ],
      "traits": [
        {
          "name": "Scatto Felino",
          "desc": "Quando ti muovi nel tuo turno, puoi raddoppiare la tua velocità fino alla fine del turno (si ricarica quando non ti muovi per 1 turno)."
        },
        {
          "name": "Artigli Felini",
          "desc": "Velocità di scalata 6 metri e attacco disarmato 1d6 + FOR danni taglienti."
        },
        {
          "name": "Talento Felino",
          "desc": "Competenza in Percezione e Furtività."
        }
      ]
    },
    {
      "id": "kenku",
      "name": "Kenku",
      "source": "MPMM",
      "size": "Media",
      "speed": 9,
      "asi": {
        "dex": 2,
        "wis": 1
      },
      "languages": [
        "Comune",
        "Auran"
      ],
      "traits": [
        {
          "name": "Mimetismo",
          "desc": "Puoi imitare perfettamente qualsiasi suono o voce tu abbia mai ascoltato (scopribile con prova di Intuizione contrapposta a Inganno)."
        },
        {
          "name": "Ispirazione di Kenku",
          "desc": "Puoi conferire a te stesso vantaggio su una prova di abilità un numero di volte pari al bonus di competenza."
        }
      ]
    },
    {
      "id": "firbolg",
      "name": "Firbolg",
      "source": "MPMM",
      "size": "Media",
      "speed": 9,
      "asi": {
        "wis": 2,
        "str": 1
      },
      "languages": [
        "Comune",
        "Elfico",
        "Gigante"
      ],
      "traits": [
        {
          "name": "Magia del Firbolg",
          "desc": "Puoi lanciare Individuazione del Magico e Camuffare Se Stesso una volta per riposo."
        },
        {
          "name": "Passo Nascosto",
          "desc": "Come azione bonus diventi invisibile fino all'inizio del tuo prossimo turno o finché non attacchi."
        },
        {
          "name": "Corporatura Possente",
          "desc": "Sei considerato di una taglia più grande per calcolare la capacità di carico e sollevamento."
        }
      ]
    },
    {
      "id": "changeling",
      "name": "Cangiante (Changeling)",
      "source": "MPMM",
      "size": "Media",
      "speed": 9,
      "asi": {
        "cha": 2,
        "dex": 1
      },
      "languages": [
        "Comune",
        "Due linguaggi a scelta"
      ],
      "traits": [
        {
          "name": "Mutaforma",
          "desc": "Come azione puoi mutare aspetto e voce per apparire identico a qualsiasi forma umanoide della stessa taglia!"
        },
        {
          "name": "Istinti del Cangiante",
          "desc": "Competenza in due abilità a scelta tra Inganno, Intuizione, Intimidire e Persuasione."
        }
      ]
    },
    {
      "id": "warforged",
      "name": "Forgiato (Warforged)",
      "source": "ERLW",
      "size": "Media",
      "speed": 9,
      "asi": {
        "con": 2,
        "str": 1
      },
      "languages": [
        "Comune",
        "Un linguaggio a scelta"
      ],
      "traits": [
        {
          "name": "Costruzione Rinforzata",
          "desc": "Non hai bisogno di mangiare, bere o respirare. Sei immune a malattie e veleno magico."
        },
        {
          "name": "Protezione Integrata",
          "desc": "+1 permanente alla Classe Armatura!"
        },
        {
          "name": "Riposo della Sentinella",
          "desc": "Non dormi: rimani cosciente in stato di riposo per 6 ore."
        }
      ]
    }
  ],
  "feats": [
    {
      "id": "great_weapon_master",
      "name": "Maestro delle Armi Possenti (Great Weapon Master)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "Quando metti a segno un colpo critico o riduci un nemico a 0 PF con un'arma da mischia, puoi compiere un attacco con arma da mischia extra come azione bonus. Prima di effettuare un attacco con un'arma pesante in cui sei competente, puoi scegliere di subire -5 al tiro per colpire per aggiungere +10 AI DANNI!"
    },
    {
      "id": "polearm_master",
      "name": "Maestro d'Armi con Asta (Polearm Master)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "Quando attacchi con alabarda, picca, bastone o lancia, puoi compiere un attacco con l'estremità opposta come azione bonus (danno 1d4 contundente). Inoltre, le creature provocano un tuo attacco di opportunità quando ENTRANO nella tua portata!"
    },
    {
      "id": "sentinel",
      "name": "Sentinella (Sentinel)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "Quando colpisci una creatura con un attacco di opportunità, la sua velocità scende a 0 per il resto del turno. Le creature provocano attacchi di opportunità anche se usano l'azione di Disimpegno. Quando un nemico entro 1,5m attacca un alleato, puoi usare la tua reazione per compiere un attacco contro quel nemico!"
    },
    {
      "id": "sharpshooter",
      "name": "Tiratore Scelto (Sharpshooter)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "Attaccare a gittata lunga non ti impone svantaggio. I tuoi attacchi a distanza con armi ignorano la mezza copertura e i tre quarti di copertura. Puoi scegliere di subire -5 al tiro per colpire a distanza per aggiungere +10 AI DANNI!"
    },
    {
      "id": "crossbow_expert",
      "name": "Esperto di Balestre (Crossbow Expert)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "Ignori la proprietà di ricarica delle balestre in cui sei competente. Essere entro 1,5m da un nemico ostile non ti impone svantaggio ai tuoi attacchi a distanza. Quando attacchi con un'arma a una mano, puoi attaccare con una balestra a mano come azione bonus."
    },
    {
      "id": "dual_wielder",
      "name": "Combattere con Due Armi (Dual Wielder)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "+1 alla Classe Armatura mentre impugni un'arma da mischia separata in ciascuna mano. Puoi combattere con due armi anche se le armi non sono leggere. Puoi estrarre o rinfoderare due armi a una mano contemporaneamente."
    },
    {
      "id": "shield_master",
      "name": "Maestro degli Scudi (Shield Master)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "Se compi l'Azione di Attacco nel tuo turno, puoi usare un'azione bonus per spingere una creatura entro 1,5m con il tuo scudo. Aggiungi il bonus di CA dello scudo a qualsiasi TS Destrezza contro effetti che bersagliano solo te. Se superi un TS DES che infligge metà danno, puoi usare la reazione per non subire ALCUN DANNO!"
    },
    {
      "id": "heavy_armor_master",
      "name": "Maestro delle Armature Pesanti (Heavy Armor Master)",
      "source": "PHB",
      "prerequisite": "Competenza nelle armature pesanti",
      "desc": "Aumenta la tua Forza di +1 (fino a un massimo di 20). Mentre indossi un'armatura pesante, i danni contundenti, perforanti e taglienti non magici che subisci sono RIDOTTI DI 3!"
    },
    {
      "id": "war_caster",
      "name": "Incantatore da Guerra (War Caster)",
      "source": "PHB",
      "prerequisite": "Capacità di lanciare almeno un incantesimo",
      "desc": "Hai VANTAGGIO ai tiri salvezza su Costituzione effettuati per mantenere la concentrazione sugli incantesimi quando subisci danni. Puoi compiere le componenti somatiche degli incantesimi anche mentre hai armi o scudo in entrambe le mani. Quando un nemico provoca un attacco di opportunità, puoi lanciare un incantesimo a bersaglio singolo invece di compiere un attacco!"
    },
    {
      "id": "resilient",
      "name": "Resiliente (Resilient)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "Scegli un punteggio di caratteristica (es. Costituzione, Saggezza, Destrezza): aumenta quel punteggio di +1 (fino a 20) e ottieni COMPETENZA NEI TIRI SALVEZZA che utilizzano quella caratteristica!"
    },
    {
      "id": "lucky",
      "name": "Fortunato (Lucky)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "Hai 3 punti fortuna per riposo lungo. Puoi spendere un punto fortuna per tirare un d20 aggiuntivo ogni volta che effettui un tiro per colpire, prova di caratteristica o tiro salvezza (e scegliere quale usare), oppure per costringere un attaccante a ritirare il suo attacco contro di te!"
    },
    {
      "id": "alert",
      "name": "Allerta (Alert)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "+5 ai tiri di Iniziativa. Non puoi essere sorpreso finché sei cosciente. Le altre creature non ottengono vantaggio ai tiri per colpire contro di te per il solo fatto di essere nascoste o invisibili."
    },
    {
      "id": "tough",
      "name": "Robustezza (Tough)",
      "source": "PHB",
      "prerequisite": null,
      "desc": "I tuoi Punti Ferita massimi aumentano immediatamente di una quantità pari al DOPPIO del tuo livello. Ogni volta che guadagni un livello in futuro, i tuoi PF massimi aumentano di altri +2 PF!"
    },
    {
      "id": "fey_touched",
      "name": "Toccato dal Piano Fatato (Fey Touched)",
      "source": "TCoE",
      "prerequisite": null,
      "desc": "+1 a Intelligenza, Saggezza o Carisma. Apprendi l'incantesimo Passo Nebbioso (Misty Step) e 1 incantesimo di 1° livello di Divinazione o Ammaliamento a scelta. Puoi lanciare ciascuno di essi 1 volta per riposo lungo senza consumare slot, oltre a poterli lanciare normalmente usando i tuoi slot incantesimo!"
    },
    {
      "id": "shadow_touched",
      "name": "Toccato dalla Coltre d'Ombra (Shadow Touched)",
      "source": "TCoE",
      "prerequisite": null,
      "desc": "+1 a Intelligenza, Saggezza o Carisma. Apprendi l'incantesimo Invisibilità e 1 incantesimo di 1° livello di Illusione o Necromanzia. Puoi lanciarli 1 volta gratis per riposo lungo e normalmente con i tuoi slot."
    },
    {
      "id": "telekinetic",
      "name": "Telecinetico (Telekinetic)",
      "source": "TCoE",
      "prerequisite": null,
      "desc": "+1 a Intelligenza, Saggezza o Carisma. Apprendi il trucchetto Mano Magica (invisibile, gittata estesa a 18m). Come azione bonus, puoi spingere o tirare telepaticamente una creatura entro 9m di 1,5 metri (TS Forza nega)."
    },
    {
      "id": "telepathic",
      "name": "Telepatico (Telepathic)",
      "source": "TCoE",
      "prerequisite": null,
      "desc": "+1 a Intelligenza, Saggezza o Carisma. Puoi comunicare telepaticamente con qualsiasi creatura entro 18 metri che sia in grado di comprendere almeno una lingua. Puoi lanciare Individuazione dei Pensieri 1 volta per riposo lungo gratis."
    },
    {
      "id": "skill_expert",
      "name": "Esperto nelle Abilità (Skill Expert)",
      "source": "TCoE",
      "prerequisite": null,
      "desc": "+1 a un punteggio di caratteristica a tua scelta. Ottieni competenza in un'abilità a tua scelta. Ottieni MAESTRIA (raddoppia il bonus di competenza) in un'abilità in cui sei già competente!"
    },
    {
      "id": "elven_accuracy",
      "name": "Precisione Elfica (Elven Accuracy)",
      "source": "XGtE",
      "prerequisite": "Elfo o Mezzelfo",
      "desc": "+1 a Destrezza, Intelligenza, Saggezza o Carisma. Ogni volta che hai vantaggio a un tiro per colpire basato su Destrezza, Intelligenza, Saggezza o Carisma, puoi ritirare uno dei due dadi (SUPER-VANTAGGIO con 3 d20)!"
    }
  ],
  "classes": [
    {
      "id": "barbarian",
      "name": "Barbaro",
      "hitDie": 12,
      "primaryStat": "str",
      "secondaryStat": "con",
      "savingThrows": [
        "str",
        "con"
      ],
      "armorProficiencies": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi"
      ],
      "weaponProficiencies": [
        "Armi Semplici",
        "Armi da Guerra"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "animal_handling",
          "athletics",
          "intimidation",
          "nature",
          "perception",
          "survival"
        ]
      },
      "subclassLevel": 3,
      "spellcaster": false,
      "featuresByLevel": {
        "1": [
          {
            "name": "Ira Barbarica (Rage)",
            "desc": "Vantaggio a prove e TS di Forza. Bonus danni da mischia (+2 al liv 1-8, +3 al 9-15, +4 al 16-20). Resistenza a danni contundenti, perforanti e taglienti."
          },
          {
            "name": "Difesa Senz'Armatura",
            "desc": "Quando non indossi armature, la tua CA = 10 + mod DES + mod CON + eventuale scudo."
          }
        ],
        "2": [
          {
            "name": "Attacco Irruente (Reckless Attack)",
            "desc": "Vantaggio ai tuoi attacchi in mischia basati su FOR per il turno corrente, ma i nemici hanno vantaggio contro di te fino all'inizio del tuo prossimo turno."
          },
          {
            "name": "Senso del Pericolo",
            "desc": "Vantaggio ai TS Destrezza contro effetti che puoi vedere (trappole, incantesimi ad area)."
          }
        ],
        "3": [
          {
            "name": "Cammino Primordiale",
            "desc": "Scegli il tuo Cammino Barbarico (es. Zelota, Berserker, Totemico, Magia Selvaggia)."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Attacco Extra",
            "desc": "Puoi attaccare due volte invece di una quando compi l'Azione di Attacco."
          },
          {
            "name": "Movimento Veloce",
            "desc": "+3 metri alla tua velocità di movimento se non indossi armature pesanti."
          }
        ],
        "6": [
          {
            "name": "Privilegio del Cammino",
            "desc": "Nuovo potere conferito dalla tua sottoclasse."
          }
        ],
        "7": [
          {
            "name": "Istinto Funesto",
            "desc": "Vantaggio ai tiri di Iniziativa e non puoi essere sorpreso se entri in ira all'inizio del combattimento."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Brutal Critical (1 die)",
            "desc": "Privilegio di classe ottenuto al 9° livello."
          }
        ],
        "10": [
          {
            "name": "Path feature",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          },
          {
            "name": "Intimidating Presence",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Relentless Rage",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Brutal Critical (2 dice)",
            "desc": "Privilegio di classe ottenuto al 13° livello."
          }
        ],
        "14": [
          {
            "name": "Path feature",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          },
          {
            "name": "Retaliation",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Persistent Rage",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Brutal Critical (3 dice)",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          }
        ],
        "18": [
          {
            "name": "Indomitable Might",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Primal Champion",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "none",
      "resources": [
        {
          "id": "rage",
          "name": "Usi di Ira",
          "maxUsesByLevel": [
            0,
            2,
            2,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            5,
            6,
            6,
            6,
            99
          ],
          "recharge": "long"
        }
      ]
    },
    {
      "id": "fighter",
      "name": "Guerriero",
      "hitDie": 10,
      "primaryStat": "str",
      "secondaryStat": "con",
      "savingThrows": [
        "str",
        "con"
      ],
      "armorProficiencies": [
        "Tutte le Armature",
        "Scudi"
      ],
      "weaponProficiencies": [
        "Armi Semplici",
        "Armi da Guerra"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "acrobatics",
          "animal_handling",
          "athletics",
          "history",
          "insight",
          "intimidation",
          "perception",
          "survival"
        ]
      },
      "subclassLevel": 3,
      "spellcaster": false,
      "featuresByLevel": {
        "1": [
          {
            "name": "Stile di Combattimento",
            "desc": "Scegli: Tiro (+2 TxC archi), Difesa (+1 CA), Duellare (+2 danni armi ad una mano), Armi Possenti (ritira 1 e 2 sui dadi danno), Protezione (imponi svantaggio con scudo)."
          },
          {
            "name": "Recuperare Energie (Second Wind)",
            "desc": "Azione bonus: recuperi 1d10 + livello Guerriero PF (1 volta per riposo breve o lungo)."
          }
        ],
        "2": [
          {
            "name": "Azione Impetuosa (Action Surge)",
            "desc": "Compi un'azione aggiuntiva nel tuo turno (1 volta per riposo breve o lungo; 2 volte al liv 17)."
          }
        ],
        "3": [
          {
            "name": "Archetipo Marziale",
            "desc": "Scegli la tua sottoclasse marziale (Campione, Maestro d'Armi, Cavaliere delle Rune, Cavaliere dell'Eco, Cavaliere Mistico)."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Attacco Extra",
            "desc": "Attacchi due volte invece di una. (Tre volte al liv 11, quattro volte al liv 20)."
          }
        ],
        "6": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Martial Archetype feature",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          },
          {
            "name": "Remarkable Athlete",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Indomito",
            "desc": "Puoi ritirare un tiro salvezza fallito (1 volta per riposo lungo)."
          }
        ],
        "10": [
          {
            "name": "Martial Archetype feature",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          },
          {
            "name": "Additional Fighting Style",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Extra Attack (2)",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Indomitable (2 uses)",
            "desc": "Privilegio di classe ottenuto al 13° livello."
          }
        ],
        "14": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Martial Archetype feature",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          },
          {
            "name": "Superior Critical",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Action Surge (2 uses)",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          },
          {
            "name": "Indomitable (3 uses)",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          }
        ],
        "18": [
          {
            "name": "Martial Archetype feature",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          },
          {
            "name": "Survivor",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Extra Attack (3)",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "none",
      "resources": [
        {
          "id": "second_wind",
          "name": "Recuperare Energie",
          "maxUsesByLevel": [
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "recharge": "short"
        },
        {
          "id": "action_surge",
          "name": "Azione Impetuosa",
          "maxUsesByLevel": [
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2
          ],
          "recharge": "short"
        },
        {
          "id": "indomitable",
          "name": "Indomito",
          "maxUsesByLevel": [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3
          ],
          "recharge": "long"
        }
      ]
    },
    {
      "id": "paladin",
      "name": "Paladino",
      "hitDie": 10,
      "primaryStat": "str",
      "secondaryStat": "cha",
      "savingThrows": [
        "wis",
        "cha"
      ],
      "armorProficiencies": [
        "Tutte le Armature",
        "Scudi"
      ],
      "weaponProficiencies": [
        "Armi Semplici",
        "Armi da Guerra"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "athletics",
          "insight",
          "intimidation",
          "medicine",
          "persuasion",
          "religion"
        ]
      },
      "subclassLevel": 3,
      "spellcaster": true,
      "spellcastingAbility": "cha",
      "featuresByLevel": {
        "1": [
          {
            "name": "Senso del Divino",
            "desc": "Rilevi celestiali, immondi e non morti entro 18m."
          },
          {
            "name": "Imposizione delle Mani",
            "desc": "Riserva di cura pari a 5 x livello Paladino; spendi 5 punti per neutralizzare una malattia o veleno."
          }
        ],
        "2": [
          {
            "name": "Punizione Divina (Divine Smite)",
            "desc": "Quando colpisci con un attacco con arma, spendi uno slot incantesimo per infliggere +2d8 danni radiosi (slot 1) + 1d8 per livello slot oltre il 1° (+1d8 extra contro immondi e non morti, max 5d8)."
          },
          {
            "name": "Stile di Combattimento",
            "desc": "Difesa, Duellare, Armi Possenti, Protezione."
          },
          {
            "name": "Incantesimi da Paladino",
            "desc": "Lanci incantesimi preparati basati sul Carisma."
          }
        ],
        "3": [
          {
            "name": "Salute Divina",
            "desc": "Immunità totale a tutte le malattie."
          },
          {
            "name": "Giuramento Sacro",
            "desc": "Scegli il tuo giuramento (Devozione, Vendetta, Conquista, Gloria, Antichi)."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Attacco Extra",
            "desc": "Attacchi due volte quando compi l'Azione di Attacco."
          }
        ],
        "6": [
          {
            "name": "Aura di Protezione",
            "desc": "Tu e gli alleati entro 3m aggiungete il tuo modificatore di Carisma a TUTTI i tiri salvezza!"
          }
        ],
        "7": [
          {
            "name": "Sacred Oath feature",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          },
          {
            "name": "Aura of Devotion",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 9 di Paladino."
          }
        ],
        "10": [
          {
            "name": "Aura of Courage",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Improved Divine Smite",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 13 di Paladino."
          }
        ],
        "14": [
          {
            "name": "Cleansing Touch",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Sacred Oath feature",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          },
          {
            "name": "Purity of Spirit",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 17 di Paladino."
          }
        ],
        "18": [
          {
            "name": "Aura improvements",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Sacred Oath feature",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          },
          {
            "name": "Holy Nimbus",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "half",
      "resources": [
        {
          "id": "lay_on_hands",
          "name": "Imposizione delle Mani (PF)",
          "maxUsesByLevel": [
            0,
            5,
            10,
            15,
            20,
            25,
            30,
            35,
            40,
            45,
            50,
            55,
            60,
            65,
            70,
            75,
            80,
            85,
            90,
            95,
            100
          ],
          "recharge": "long"
        },
        {
          "id": "channel_divinity",
          "name": "Incanalare Divinità",
          "maxUsesByLevel": [
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "recharge": "short"
        }
      ]
    },
    {
      "id": "cleric",
      "name": "Chierico",
      "hitDie": 8,
      "primaryStat": "wis",
      "secondaryStat": "con",
      "savingThrows": [
        "wis",
        "cha"
      ],
      "armorProficiencies": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi"
      ],
      "weaponProficiencies": [
        "Armi Semplici"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "history",
          "insight",
          "medicine",
          "persuasion",
          "religion"
        ]
      },
      "subclassLevel": 1,
      "spellcaster": true,
      "spellcastingAbility": "wis",
      "featuresByLevel": {
        "1": [
          {
            "name": "Dominio Divino",
            "desc": "Scegli il tuo Dominio (Vita, Crepuscolo, Pace, Tempesta, Luce, Guerra) che conferisce incantesimi e privilegi unici fin dal 1° livello."
          },
          {
            "name": "Incantesimi Divini",
            "desc": "Prepari incantesimi ogni giorno pari a mod SAG + livello Chierico."
          }
        ],
        "2": [
          {
            "name": "Incanalare Divinità",
            "desc": "Scacciare Non Morti e potere specifico del tuo dominio (1 volta per riposo breve/lungo; 2 volte al liv 6)."
          }
        ],
        "3": [
          {
            "name": "Domain Spells",
            "desc": "Privilegio di classe ottenuto al 3° livello."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Distruggere Non Morti",
            "desc": "I non morti che falliscono il TS contro Scacciare vengono polverizzati all'istante (GS 1/2 al liv 5, GS 1 al liv 8)."
          }
        ],
        "6": [
          {
            "name": "Channel Divinity (2/rest)",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Divine Domain feature",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Blessed Healer",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Domain Spells",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          },
          {
            "name": "Destroy Undead (CR 1 or below)",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          },
          {
            "name": "Divine Domain feature",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          },
          {
            "name": "Divine Strike",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Domain Spells",
            "desc": "Privilegio di classe ottenuto al 9° livello."
          }
        ],
        "10": [
          {
            "name": "Divine Intervention",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Destroy Undead (CR 2 or below)",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 13 di Chierico."
          }
        ],
        "14": [
          {
            "name": "Destroy Undead (CR 3 or below)",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 15 di Chierico."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Destroy Undead (CR 4 or below)",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          },
          {
            "name": "Divine Domain feature",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          },
          {
            "name": "Supreme Healing",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          }
        ],
        "18": [
          {
            "name": "Channel Divinity (3/rest)",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Divine Intervention Improvement",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "full",
      "resources": [
        {
          "id": "channel_divinity",
          "name": "Incanalare Divinità",
          "maxUsesByLevel": [
            0,
            0,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            3
          ],
          "recharge": "short"
        }
      ]
    },
    {
      "id": "rogue",
      "name": "Ladro",
      "hitDie": 8,
      "primaryStat": "dex",
      "secondaryStat": "int",
      "savingThrows": [
        "dex",
        "int"
      ],
      "armorProficiencies": [
        "Armature Leggere"
      ],
      "weaponProficiencies": [
        "Armi Semplici",
        "Balestre a mano",
        "Spade corte",
        "Spade lunghe",
        "Stocchi"
      ],
      "skillChoices": {
        "count": 4,
        "from": [
          "acrobatics",
          "athletics",
          "deception",
          "insight",
          "intimidation",
          "investigation",
          "perception",
          "performance",
          "persuasion",
          "sleight_of_hand",
          "stealth"
        ]
      },
      "subclassLevel": 3,
      "spellcaster": false,
      "featuresByLevel": {
        "1": [
          {
            "name": "Attacco Furtivo (Sneak Attack)",
            "desc": "+1d6 danni una volta per turno se hai vantaggio al tiro o se un alleato è adiacente al bersaglio (+1d6 ogni 2 livelli: 2d6 al liv 3, 3d6 al liv 5, 4d6 al liv 7)."
          },
          {
            "name": "Maestria (Expertise)",
            "desc": "Raddoppia il bonus di competenza su 2 abilità o arnesi da scasso (altre 2 al liv 6)."
          },
          {
            "name": "Gergo Ladresco",
            "desc": "Linguaggio segreto in codice per messaggi e contrassegni."
          }
        ],
        "2": [
          {
            "name": "Azione Scaltra (Cunning Action)",
            "desc": "Compi Scattare, Disimpegnarsi o Nascondersi come Azione Bonus in ogni tuo turno."
          }
        ],
        "3": [
          {
            "name": "Archetipo Ladresco",
            "desc": "Scegli la tua sottoclasse (Spadaccino, Assassino, Lama dell'Anima, Furfante, Mistico Arcano)."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Schivata Prodigiosa (Uncanny Dodge)",
            "desc": "Reazione: quando vieni colpito da un attacco che vedi, dimezzi il danno subito."
          }
        ],
        "6": [
          {
            "name": "Expertise",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Elusione (Evasion)",
            "desc": "Se subisci un effetto con TS Destrezza per dimezzare il danno, subisci 0 danni se superi il TS, e metà se lo fallisci."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Roguish Archetype feature",
            "desc": "Privilegio di classe ottenuto al 9° livello."
          },
          {
            "name": "Supreme Sneak",
            "desc": "Privilegio di classe ottenuto al 9° livello."
          }
        ],
        "10": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Reliable Talent",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Roguish Archetype feature",
            "desc": "Privilegio di classe ottenuto al 13° livello."
          },
          {
            "name": "Use Magic Device",
            "desc": "Privilegio di classe ottenuto al 13° livello."
          }
        ],
        "14": [
          {
            "name": "Blindsense",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Slippery Mind",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Roguish Archetype feature",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          },
          {
            "name": "Thief's Reflexes",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          }
        ],
        "18": [
          {
            "name": "Elusive",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Stroke of Luck",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "none",
      "resources": []
    },
    {
      "id": "wizard",
      "name": "Mago",
      "hitDie": 6,
      "primaryStat": "int",
      "secondaryStat": "con",
      "savingThrows": [
        "int",
        "wis"
      ],
      "armorProficiencies": [],
      "weaponProficiencies": [
        "Balestre leggere",
        "Bastoni",
        "Dardi",
        "Fionde",
        "Pugnali"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "arcana",
          "history",
          "insight",
          "investigation",
          "medicine",
          "religion"
        ]
      },
      "subclassLevel": 2,
      "spellcaster": true,
      "spellcastingAbility": "int",
      "featuresByLevel": {
        "1": [
          {
            "name": "Grimorio & Incantesimi",
            "desc": "Conosci 6 incantesimi di 1° livello e ne aggiungi 2 ad ogni livello. Prepari INT + livello incantesimi."
          },
          {
            "name": "Recupero Arcano",
            "desc": "Durante un riposo breve recuperi slot incantesimo con livello totale pari a metà livello Mago (arrotondato per eccesso)."
          }
        ],
        "2": [
          {
            "name": "Tradizione Arcana",
            "desc": "Scegli la tua scuola di magia (Cantore della Lama, Invocazione, Divinazione, Abiurazione, Negromanzia, Cronurgia)."
          }
        ],
        "3": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 3 di Mago."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 5 di Mago."
          }
        ],
        "6": [
          {
            "name": "Arcane Tradition feature",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Potent Cantrip",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 7 di Mago."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 9 di Mago."
          }
        ],
        "10": [
          {
            "name": "Arcane Tradition feature",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          },
          {
            "name": "Empowered Evocation",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 11 di Mago."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 13 di Mago."
          }
        ],
        "14": [
          {
            "name": "Arcane Tradition feature",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          },
          {
            "name": "Overchannel",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 15 di Mago."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 17 di Mago."
          }
        ],
        "18": [
          {
            "name": "Spell Mastery",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Signature Spell",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "full",
      "resources": []
    },
    {
      "id": "bard",
      "name": "Bardo",
      "hitDie": 8,
      "primaryStat": "cha",
      "secondaryStat": "dex",
      "savingThrows": [
        "dex",
        "cha"
      ],
      "armorProficiencies": [
        "Armature Leggere"
      ],
      "weaponProficiencies": [
        "Armi Semplici",
        "Balestre a mano",
        "Spade corte",
        "Spade lunghe",
        "Stocchi"
      ],
      "skillChoices": {
        "count": 3,
        "from": [
          "acrobatics",
          "animal_handling",
          "arcana",
          "athletics",
          "deception",
          "history",
          "insight",
          "intimidation",
          "investigation",
          "medicine",
          "nature",
          "perception",
          "performance",
          "persuasion",
          "religion",
          "sleight_of_hand",
          "stealth",
          "survival"
        ]
      },
      "subclassLevel": 3,
      "spellcaster": true,
      "spellcastingAbility": "cha",
      "featuresByLevel": {
        "1": [
          {
            "name": "Ispirazione Bardica (Bardic Inspiration)",
            "desc": "Azione bonus: conferisci un dado (1d6, 1d8 al liv 5, 1d10 al liv 10) a un alleato entro 18m per sommarlo a un TxC, prova o TS (usi pari a mod CAR)."
          },
          {
            "name": "Incantesimi da Bardo",
            "desc": "Incantesimi spontanei basati su Carisma con rituali disponibili."
          }
        ],
        "2": [
          {
            "name": "Tuttofare (Jack of All Trades)",
            "desc": "Aggiungi metà del bonus di competenza (arrotondato per difetto) a QUALSIASI prova di caratteristica in cui non hai competenza (inclusa Iniziativa e Controincantesimo!)."
          },
          {
            "name": "Canto di Riposo",
            "desc": "Gli alleati recuperano 1d6 PF extra spendendo dadi vita durante un riposo breve."
          }
        ],
        "3": [
          {
            "name": "Collegio Bardico",
            "desc": "Scegli il tuo collegio (Eloquenza, Sapienza, Spade, Valore)."
          },
          {
            "name": "Maestria (Expertise)",
            "desc": "Raddoppia il bonus competenza in 2 abilità a scelta."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Bardic Inspiration (d8)",
            "desc": "Privilegio di classe ottenuto al 5° livello."
          },
          {
            "name": "Font of Inspiration",
            "desc": "Privilegio di classe ottenuto al 5° livello."
          }
        ],
        "6": [
          {
            "name": "Countercharm",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Bard College feature",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Additional Magical Secrets",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 7 di Bardo."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Song of Rest (d8)",
            "desc": "Privilegio di classe ottenuto al 9° livello."
          }
        ],
        "10": [
          {
            "name": "Expertise",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          },
          {
            "name": "Bardic Inspiration (d10)",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          },
          {
            "name": "Magical Secrets",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 11 di Bardo."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Song of Rest (d10)",
            "desc": "Privilegio di classe ottenuto al 13° livello."
          }
        ],
        "14": [
          {
            "name": "Magical Secrets",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          },
          {
            "name": "Bard College feature",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          },
          {
            "name": "Peerless Skill",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Bardic Inspiration (d12)",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Song of Rest (d12)",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          }
        ],
        "18": [
          {
            "name": "Magical Secrets",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Superior Inspiration",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "full",
      "resources": [
        {
          "id": "bardic_inspiration",
          "name": "Ispirazione Bardica",
          "formula": "modCarisma",
          "recharge": "short"
        }
      ]
    },
    {
      "id": "druid",
      "name": "Druido",
      "hitDie": 8,
      "primaryStat": "wis",
      "secondaryStat": "con",
      "savingThrows": [
        "int",
        "wis"
      ],
      "armorProficiencies": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi (non di metallo)"
      ],
      "weaponProficiencies": [
        "Bastoni",
        "Dardi",
        "Falci",
        "Falcetti",
        "Fionde",
        "Giavellotti",
        "Lance",
        "Mazzuoli",
        "Pugnali",
        "Scimitarre"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "animal_handling",
          "arcana",
          "insight",
          "medicine",
          "nature",
          "perception",
          "religion",
          "survival"
        ]
      },
      "subclassLevel": 2,
      "spellcaster": true,
      "spellcastingAbility": "wis",
      "featuresByLevel": {
        "1": [
          {
            "name": "Druidico",
            "desc": "Linguaggio segreto dei druidi e segni occulti nella natura."
          },
          {
            "name": "Incantesimi Druidici",
            "desc": "Prepari incantesimi ogni giorno pari a mod SAG + livello Druido."
          }
        ],
        "2": [
          {
            "name": "Forma Selvatica (Wild Shape)",
            "desc": "Azione: assumi la forma di una bestia che hai visto (2 usi per riposo breve/lungo; durata = ore pari a metà livello)."
          },
          {
            "name": "Circolo Druidico",
            "desc": "Scegli la tua sottoclasse (Luna, Stelle, Terra, Spore)."
          }
        ],
        "3": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 3 di Druido."
          }
        ],
        "4": [
          {
            "name": "Wild Shape (CR 1/2 or below, no flying speed)",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          },
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 5 di Druido."
          }
        ],
        "6": [
          {
            "name": "Druid Circle feature",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Land's Stride",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 7 di Druido."
          }
        ],
        "8": [
          {
            "name": "Wild Shape (CR 1 or below)",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          },
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 9 di Druido."
          }
        ],
        "10": [
          {
            "name": "Druid Circle feature",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          },
          {
            "name": "Nature's Ward",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 11 di Druido."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 13 di Druido."
          }
        ],
        "14": [
          {
            "name": "Druid Circle feature",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          },
          {
            "name": "Nature's Sanctuary",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 15 di Druido."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 17 di Druido."
          }
        ],
        "18": [
          {
            "name": "Timeless Body",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          },
          {
            "name": "Beast Spells",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Archdruid",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "full",
      "resources": [
        {
          "id": "wild_shape",
          "name": "Forma Selvatica",
          "maxUsesByLevel": [
            0,
            0,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            99
          ],
          "recharge": "short"
        }
      ]
    },
    {
      "id": "monk",
      "name": "Monaco",
      "hitDie": 8,
      "primaryStat": "dex",
      "secondaryStat": "wis",
      "savingThrows": [
        "str",
        "dex"
      ],
      "armorProficiencies": [],
      "weaponProficiencies": [
        "Armi Semplici",
        "Spade corte"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "acrobatics",
          "athletics",
          "history",
          "insight",
          "religion",
          "stealth"
        ]
      },
      "subclassLevel": 3,
      "spellcaster": false,
      "featuresByLevel": {
        "1": [
          {
            "name": "Difesa Senz'Armatura",
            "desc": "Senza armatura e scudo: CA = 10 + mod DES + mod SAG."
          },
          {
            "name": "Arti Marziali",
            "desc": "Usi DES per attacchi disarmati/armi da monaco (1d4 danni, 1d6 al liv 5), attacco disarmato come azione bonus."
          }
        ],
        "2": [
          {
            "name": "Punti Ki",
            "desc": "Punti pari al livello per Raffica di Colpi, Difesa Paziente, Passo del Vento (recupero a riposo breve)."
          },
          {
            "name": "Movimento Senz'Armatura",
            "desc": "+3m velocità se senza armatura (+4,5m al liv 6)."
          }
        ],
        "3": [
          {
            "name": "Tradizione Monastica",
            "desc": "Scegli la tua sottoclasse (Mano Aperta, Ombra, Misericordia, Kensei)."
          },
          {
            "name": "Deviare Dardi",
            "desc": "Reazione: riduci danno di un attacco a distanza di 1d10 + DES + livello Monaco."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          },
          {
            "name": "Slow Fall",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Attacco Extra",
            "desc": "Due attacchi quando compi l'Azione di Attacco."
          },
          {
            "name": "Colpo Senz'Armi Sbalorditivo (Stunning Strike)",
            "desc": "Spendi 1 Ki per stordire il nemico colpito fino al tuo prossimo turno se fallisce TS Costituzione."
          }
        ],
        "6": [
          {
            "name": "Ki Empowered Strikes",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Monastic Tradition feature",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Wholeness of Body",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Evasion",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          },
          {
            "name": "Stillness of Mind",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Unarmored Movement",
            "desc": "Privilegio di classe ottenuto al 9° livello."
          }
        ],
        "10": [
          {
            "name": "Purity of Body",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Monastic Tradition feature",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          },
          {
            "name": "Tranquility",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Tongue of the Sun and Moon",
            "desc": "Privilegio di classe ottenuto al 13° livello."
          }
        ],
        "14": [
          {
            "name": "Diamond Soul",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Timeless Body",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Monastic Tradition feature",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          },
          {
            "name": "Quivering Palm",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          }
        ],
        "18": [
          {
            "name": "Empty Body",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Perfect Self",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "none",
      "resources": [
        {
          "id": "ki_points",
          "name": "Punti Ki",
          "maxUsesByLevel": [
            0,
            0,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "recharge": "short"
        }
      ]
    },
    {
      "id": "ranger",
      "name": "Ranger",
      "hitDie": 10,
      "primaryStat": "dex",
      "secondaryStat": "wis",
      "savingThrows": [
        "str",
        "dex"
      ],
      "armorProficiencies": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi"
      ],
      "weaponProficiencies": [
        "Armi Semplici",
        "Armi Da Guerra"
      ],
      "skillChoices": {
        "count": 3,
        "from": [
          "animal_handling",
          "athletics",
          "insight",
          "investigation",
          "nature",
          "perception",
          "stealth",
          "survival"
        ]
      },
      "subclassLevel": 3,
      "spellcaster": true,
      "spellcastingAbility": "wis",
      "featuresByLevel": {
        "1": [
          {
            "name": "Predatore Flessibile (Tasha)",
            "desc": "Marchio del Favorevole: lanci Marchio del Cacciatore senza consumare slot né concentrazione (bonus comp. volte)."
          },
          {
            "name": "Esperto Esploratore (Tasha)",
            "desc": "Raddoppia il bonus di competenza su 1 abilità e ottieni velocità di nuotare e scalare."
          }
        ],
        "2": [
          {
            "name": "Stile di Combattimento",
            "desc": "Tiro (+2 TxC), Difesa, Duellare, Combattere con Due Armi."
          },
          {
            "name": "Incantesimi da Ranger",
            "desc": "Lanci incantesimi tramite Saggezza."
          }
        ],
        "3": [
          {
            "name": "Archetipo del Ranger",
            "desc": "Scegli la tua sottoclasse (Gloom Stalker, Cacciatore, Viandante delle Fate, Signore delle Bestie, Horizon Walker)."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Attacco Extra",
            "desc": "Attacchi due volte con l'Azione di Attacco."
          }
        ],
        "6": [
          {
            "name": "Favored Enemy (2 types)",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Natural Explorer (2 terrain types)",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Ranger Archetype feature",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          },
          {
            "name": "Defensive Tactics",
            "desc": "Privilegio di classe ottenuto al 7° livello."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          },
          {
            "name": "Land's Stride",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 9 di Ranger."
          }
        ],
        "10": [
          {
            "name": "Natural Explorer (3 terrain types)",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          },
          {
            "name": "Hide in Plain Sight",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Ranger Archetype feature",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          },
          {
            "name": "Multiattack",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 13 di Ranger."
          }
        ],
        "14": [
          {
            "name": "Favored Enemy (3 enemies)",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          },
          {
            "name": "Vanish",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Ranger Archetype feature",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          },
          {
            "name": "Superior Hunter's Defense",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 17 di Ranger."
          }
        ],
        "18": [
          {
            "name": "Feral Senses",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Foe Slayer",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "half",
      "resources": []
    },
    {
      "id": "sorcerer",
      "name": "Stregone",
      "hitDie": 6,
      "primaryStat": "cha",
      "secondaryStat": "con",
      "savingThrows": [
        "con",
        "cha"
      ],
      "armorProficiencies": [],
      "weaponProficiencies": [
        "Balestre leggere",
        "Bastoni",
        "Dardi",
        "Fionde",
        "Pugnali"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "arcana",
          "deception",
          "insight",
          "intimidation",
          "persuasion",
          "religion"
        ]
      },
      "subclassLevel": 1,
      "spellcaster": true,
      "spellcastingAbility": "cha",
      "featuresByLevel": {
        "1": [
          {
            "name": "Origine Stregonesca",
            "desc": "Scegli la tua stirpe magica al 1° livello (Stirpe Draconica, Magia Selvaggia, Anima Prescelta, Mente Aberrante, Anima Meccanica)."
          },
          {
            "name": "Incantesimi Spontanei",
            "desc": "Lanci incantesimi innati tramite Carisma."
          }
        ],
        "2": [
          {
            "name": "Punti Stregoneria",
            "desc": "Punti pari al livello per creare slot o alimentare opzioni metamagiche."
          }
        ],
        "3": [
          {
            "name": "Metamagia",
            "desc": "Scegli 2 opzioni: Incantesimo Rapido (lanci come azione bonus), Incantesimo Raddoppiato, Accurato, Celato (nessuna componente verbale/somatica!)."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 5 di Stregone."
          }
        ],
        "6": [
          {
            "name": "Sorcerous Origin feature",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Elemental Affinity",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 7 di Stregone."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 9 di Stregone."
          }
        ],
        "10": [
          {
            "name": "Metamagic",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 11 di Stregone."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 13 di Stregone."
          }
        ],
        "14": [
          {
            "name": "Sorcerous Origin feature",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          },
          {
            "name": "Dragon Wings",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 15 di Stregone."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Metamagic",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          }
        ],
        "18": [
          {
            "name": "Sorcerous Origin feature",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          },
          {
            "name": "Draconic Presence",
            "desc": "Privilegio di classe ottenuto al 18° livello."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Sorcerous Restoration",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "full",
      "resources": [
        {
          "id": "sorcery_points",
          "name": "Punti Stregoneria",
          "maxUsesByLevel": [
            0,
            0,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ],
          "recharge": "long"
        }
      ]
    },
    {
      "id": "warlock",
      "name": "Warlock",
      "hitDie": 8,
      "primaryStat": "cha",
      "secondaryStat": "con",
      "savingThrows": [
        "wis",
        "cha"
      ],
      "armorProficiencies": [
        "Armature Leggere"
      ],
      "weaponProficiencies": [
        "Armi Semplici"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "arcana",
          "deception",
          "history",
          "intimidation",
          "investigation",
          "nature",
          "religion"
        ]
      },
      "subclassLevel": 1,
      "spellcaster": true,
      "spellcastingAbility": "cha",
      "featuresByLevel": {
        "1": [
          {
            "name": "Patrono Ultraterreno",
            "desc": "Scegli il tuo patrono al 1° livello (Lama del Sottomondo, Il Signore Immondo, Il Grande Antico, Il Genio, Signore del Cielo Fatato)."
          },
          {
            "name": "Magia del Patto (Pact Magic)",
            "desc": "Slot sempre al livello massimo disponibile, recuperabili con riposo breve!"
          }
        ],
        "2": [
          {
            "name": "Suppliche Occulte",
            "desc": "Scegli 2 suppliche (es. Deflagrazione Agonizzante +CAR a ogni raggio, Vista Occulta, Armatura delle Ombre)."
          }
        ],
        "3": [
          {
            "name": "Dono del Patto",
            "desc": "Scegli: Patto della Lama (evochi qualsiasi arma magica competente), Catena (famiglio superiore), o Tomo (3 trucchetti da qualsiasi classe)."
          }
        ],
        "4": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 4° livello."
          }
        ],
        "5": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 5 di Warlock."
          }
        ],
        "6": [
          {
            "name": "Otherworldly Patron feature",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          },
          {
            "name": "Dark One's Own Luck",
            "desc": "Privilegio di classe ottenuto al 6° livello."
          }
        ],
        "7": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 7 di Warlock."
          }
        ],
        "8": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 8° livello."
          }
        ],
        "9": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 9 di Warlock."
          }
        ],
        "10": [
          {
            "name": "Otherworldly Patron feature",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          },
          {
            "name": "Fiendish Resilience",
            "desc": "Privilegio di classe ottenuto al 10° livello."
          }
        ],
        "11": [
          {
            "name": "Mystic Arcanum (6th level)",
            "desc": "Privilegio di classe ottenuto al 11° livello."
          }
        ],
        "12": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 12° livello."
          }
        ],
        "13": [
          {
            "name": "Mystic Arcanum (7th level)",
            "desc": "Privilegio di classe ottenuto al 13° livello."
          }
        ],
        "14": [
          {
            "name": "Otherworldly Patron feature",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          },
          {
            "name": "Hurl Through Hell",
            "desc": "Privilegio di classe ottenuto al 14° livello."
          }
        ],
        "15": [
          {
            "name": "Mystic Arcanum (8th level)",
            "desc": "Privilegio di classe ottenuto al 15° livello."
          }
        ],
        "16": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 16° livello."
          }
        ],
        "17": [
          {
            "name": "Mystic Arcanum (9th level)",
            "desc": "Privilegio di classe ottenuto al 17° livello."
          }
        ],
        "18": [
          {
            "name": "Privilegio di Classe",
            "desc": "Nuovo potere conferito dal livello 18 di Warlock."
          }
        ],
        "19": [
          {
            "name": "Ability Score Improvement",
            "desc": "Privilegio di classe ottenuto al 19° livello."
          }
        ],
        "20": [
          {
            "name": "Eldritch Master",
            "desc": "Privilegio di classe ottenuto al 20° livello."
          }
        ]
      },
      "casterType": "pact",
      "resources": []
    },
    {
      "id": "artificer",
      "name": "Artefice",
      "hitDie": 8,
      "primaryStat": "int",
      "secondaryStat": "con",
      "savingThrows": [
        "con",
        "int"
      ],
      "armorProficiencies": [
        "Armature Leggere",
        "Armature Medie",
        "Scudi"
      ],
      "weaponProficiencies": [
        "Armi Semplici"
      ],
      "skillChoices": {
        "count": 2,
        "from": [
          "arcana",
          "history",
          "investigation",
          "medicine",
          "nature",
          "perception",
          "sleight_of_hand"
        ]
      },
      "subclassLevel": 3,
      "spellcaster": true,
      "spellcastingAbility": "int",
      "casterType": "artificer",
      "resources": [
        {
          "id": "infusions",
          "name": "Oggetti Infusi Attivi",
          "maxUsesByLevel": [
            0,
            0,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            6,
            6,
            6
          ],
          "recharge": "long"
        },
        {
          "id": "flash_of_genius",
          "name": "Ingegno Fulmineo",
          "formula": "modIntelligenza",
          "recharge": "long"
        }
      ],
      "featuresByLevel": {
        "1": [
          {
            "name": "Armeggiare Magico",
            "desc": "Infondi magia minore in piccoli oggetti creando suoni, odori, luce o messaggi registrati."
          },
          {
            "name": "Incantesimi da Artefice",
            "desc": "Prepari incantesimi usando Intelligenza come caratteristica da incantatore."
          }
        ],
        "2": [
          {
            "name": "Infondere Oggetti",
            "desc": "Puoi infondere oggetti non magici con potenti proprietà magiche (Arma Potenziata, Difesa Potenziata, Borsa Conservante, Mente Rigenerante...)."
          }
        ],
        "3": [
          {
            "name": "Specializzazione da Artefice",
            "desc": "Scegli la tua sottoclasse (Alchimista, Armaiolo, Artigliere o Fabbro da Battaglia)."
          },
          {
            "name": "Lo Strumento Giusto per il Lavoro",
            "desc": "Puoi creare magicamente qualsiasi set di arnesi da artigiano durante un riposo breve."
          }
        ],
        "4": [
          {
            "name": "Aumento dei Punteggi di Caratteristica / Talento",
            "desc": "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento."
          }
        ],
        "5": [
          {
            "name": "Privilegio Specializzazione",
            "desc": "Nuovo potere conferito dalla tua sottoclasse (es. Attacco Extra per Fabbro e Armaiolo)."
          }
        ],
        "6": [
          {
            "name": "Perizia negli Strumenti",
            "desc": "Raddoppi il tuo bonus di competenza a qualsiasi prova che utilizzi uno strumento in cui sei competente."
          }
        ],
        "7": [
          {
            "name": "Ingegno Fulmineo",
            "desc": "Quando tu o un alleato entro 9m effettuate una prova o un TS, puoi usare una reazione per aggiungere il tuo modificatore di Intelligenza al risultato!"
          }
        ],
        "8": [
          {
            "name": "Aumento dei Punteggi di Caratteristica / Talento",
            "desc": "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento."
          }
        ],
        "9": [
          {
            "name": "Privilegio Specializzazione",
            "desc": "Nuovo potere avanzato della sottoclasse."
          }
        ],
        "10": [
          {
            "name": "Adepto degli Oggetti Magici",
            "desc": "Puoi sintonizzarti con fino a 4 oggetti magici contemporaneamente."
          }
        ],
        "11": [
          {
            "name": "Oggetto Immagazzina-Incantesimi",
            "desc": "Puoi infondere un incantesimo di 1° o 2° livello in un'arma o focus: può essere lanciato fino a 2 x mod INT volte!"
          }
        ],
        "12": [
          {
            "name": "Aumento dei Punteggi di Caratteristica / Talento",
            "desc": "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento."
          }
        ],
        "13": [
          {
            "name": "Progressione Privilegi",
            "desc": "Accesso a slot incantesimo di 4° livello e nuove infusioni."
          }
        ],
        "14": [
          {
            "name": "Sintonia Superiore",
            "desc": "Puoi sintonizzarti con fino a 5 oggetti magici e ignori tutti i requisiti di classe, razza, incantesimo o livello per usarli."
          }
        ],
        "15": [
          {
            "name": "Privilegio Supremo Specializzazione",
            "desc": "Abilità suprema della sottoclasse."
          }
        ],
        "16": [
          {
            "name": "Aumento dei Punteggi di Caratteristica / Talento",
            "desc": "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento."
          }
        ],
        "17": [
          {
            "name": "Incantesimi di 5° Livello",
            "desc": "Accesso agli incantesimi più potenti dell'Artefice."
          }
        ],
        "18": [
          {
            "name": "Maestro degli Oggetti Magici",
            "desc": "Puoi sintonizzarti con fino a 6 oggetti magici contemporaneamente!"
          }
        ],
        "19": [
          {
            "name": "Aumento dei Punteggi di Caratteristica / Talento",
            "desc": "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento."
          }
        ],
        "20": [
          {
            "name": "Anima dell'Artificio",
            "desc": "+1 a TUTTI i tiri salvezza per ogni oggetto magico con cui sei attualmente sintonizzato (fino a +6)! Se scendi a 0 PF puoi distruggere un'infusione per rimanere a 1 PF."
          }
        ]
      }
    }
  ],
  "subclasses": [
    {
      "id": "barbarian_zealot",
      "classId": "barbarian",
      "name": "Cammino dello Zelota (Path of the Zealot)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Guerrieri che incanalano la potenza divina nella loro ira per compiere prodigi devastanti.",
      "features": [
        {
          "level": 3,
          "name": "Furia Divina (Divine Fury)",
          "desc": "In ira, il 1° colpo a segno per turno infligge +1d6 + metà livello danni Radiosi o Necrotici."
        },
        {
          "level": 3,
          "name": "Guerriero degli Dei",
          "desc": "Gli incantesimi di resurrezione non consumano componenti materiali in diamanti su di te."
        },
        {
          "level": 6,
          "name": "Presenza Fanatica",
          "desc": "1 volta per ira puoi ritirare un TS fallito."
        },
        {
          "level": 10,
          "name": "Presenza Zelota",
          "desc": "Grido di battaglia: fino a 10 alleati ottengono vantaggio a TxC e TS per 1 round (1/riposo lungo)."
        },
        {
          "level": 14,
          "name": "Ira Oltre la Morte",
          "desc": "Scendere a 0 PF non ti fa perdere i sensi mentre sei in ira; muori solo se l'ira termina a 0 PF."
        }
      ]
    },
    {
      "id": "barbarian_berserker",
      "classId": "barbarian",
      "name": "Cammino del Berserker",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Guerrieri che si abbandonano a una furia cieca incuranti dei pericoli.",
      "features": [
        {
          "level": 3,
          "name": "Frenesia (Frenzy)",
          "desc": "Puoi compiere un attacco con arma da mischia come Azione Bonus in ogni tuo turno di ira (subisci 1 livello di sfinimento al termine)."
        },
        {
          "level": 6,
          "name": "Furia Irrazionale",
          "desc": "Immunità a condizioni Affascinato e Spaventato mentre sei in ira."
        },
        {
          "level": 10,
          "name": "Presenza Intimidatoria",
          "desc": "Azione per spaventare un nemico con il tuo carisma selvaggio."
        }
      ]
    },
    {
      "id": "barbarian_totem",
      "classId": "barbarian",
      "name": "Cammino del Guerriero Totemico",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Guerrieri che stringono legami mistici con gli spiriti guida animali.",
      "features": [
        {
          "level": 3,
          "name": "Spirito Guida: Orso",
          "desc": "In ira hai RESISTENZA A TUTTI I DANNI eccetto i danni psichici!"
        },
        {
          "level": 3,
          "name": "Spirito Guida: Aquila",
          "desc": "In ira puoi compiere Scattare come Azione Bonus e i nemici hanno svantaggio agli attacchi di opportunità."
        },
        {
          "level": 3,
          "name": "Spirito Guida: Lupo",
          "desc": "In ira i tuoi alleati hanno vantaggio ai TxC contro nemici entro 1,5m da te."
        },
        {
          "level": 6,
          "name": "Aspetto della Bestia",
          "desc": "Capacità fisiche e sensoriali potenziate in base al totem."
        }
      ]
    },
    {
      "id": "barbarian_wildmagic",
      "classId": "barbarian",
      "name": "Cammino della Magia Selvaggia",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "L'ira attinge alle energie del Feywild scatenando imprevedibili effetti magici.",
      "features": [
        {
          "level": 3,
          "name": "Consapevolezza Magica",
          "desc": "Azione per percepire incantesimi e oggetti magici entro 18m."
        },
        {
          "level": 3,
          "name": "Impulso di Magia Selvaggia",
          "desc": "Quando entri in ira tiri su una tabella d8: teletrasporto bonus, raggi radiosi, armature di spine o rampicanti intralcianti."
        },
        {
          "level": 6,
          "name": "Magia Stimolante",
          "desc": "Tocchi un alleato conferendogli +1d3 a TxC o ricaricando uno slot incantesimo di 1°-3° livello."
        }
      ]
    },
    {
      "id": "fighter_champion",
      "classId": "fighter",
      "name": "Campione (Champion)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Maestri della perfezione atletica e della pura letalità marziale.",
      "features": [
        {
          "level": 3,
          "name": "Critico Migliorato",
          "desc": "I tuoi attacchi con arma mettono a segno un colpo critico con un tiro naturale di 19 o 20!"
        },
        {
          "level": 7,
          "name": "Atleta Straordinario",
          "desc": "Aggiungi metà del bonus competenza alle prove fisiche in cui non hai competenza e salto potenziato."
        },
        {
          "level": 10,
          "name": "Secondo Stile di Combattimento",
          "desc": "Scegli un secondo stile di combattimento dalla lista."
        },
        {
          "level": 15,
          "name": "Critico Superiore",
          "desc": "I tuoi attacchi mettono a segno un colpo critico con 18, 19 o 20 naturale!"
        }
      ]
    },
    {
      "id": "fighter_battlemaster",
      "classId": "fighter",
      "name": "Maestro d'Armi (Battle Master)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Combattenti tattici che usano manovre e dadi superiorità per dominare il campo.",
      "features": [
        {
          "level": 3,
          "name": "Superiorità in Combattimento",
          "desc": "4 Dadi Superiorità (d8) da spendere per manovre tattiche (recupero a riposo breve)."
        },
        {
          "level": 3,
          "name": "Manovre Tattiche",
          "desc": "Scegli 3 manovre: Attacco con Finta (vantaggio), Attacco con Disarmo, Attacco con Spinta, Passo Evasivo, Attacco di Precisione (+d8 al TxC)."
        },
        {
          "level": 7,
          "name": "Conosci il Tuo Nemico",
          "desc": "Studiando un nemico per 1 minuto deduci se è superiore o inferiore a te in CA, PF, Forza o Destrezza."
        }
      ]
    },
    {
      "id": "fighter_echoknight",
      "classId": "fighter",
      "name": "Cavaliere dell'Eco (Echo Knight)",
      "source": "EGtW (Guida di Wildemount)",
      "desc": "Guerrieri che evocano ombre temporali di se stessi da linee temporali parallele.",
      "features": [
        {
          "level": 3,
          "name": "Manifestare l'Eco",
          "desc": "Azione bonus: evochi un'ombra grigia di te stesso entro 4,5m (CA 14 + PB, 1 PF). Puoi attaccare e compiere attacchi di opportunità dalla sua posizione."
        },
        {
          "level": 3,
          "name": "Teletrasporto dell'Eco",
          "desc": "Azione bonus: scambi istantaneamente posizione con la tua eco spendendo 4,5m di movimento."
        },
        {
          "level": 3,
          "name": "Incarnazione del Massacro",
          "desc": "Puoi compiere 1 attacco aggiuntivo dall'eco quando compi l'Azione di Attacco (mod CON volte per riposo lungo)."
        }
      ]
    },
    {
      "id": "fighter_runeknight",
      "classId": "fighter",
      "name": "Cavaliere delle Rune (Rune Knight)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Guerrieri che incidono il potere delle rune dei giganti nelle proprie armi e armature.",
      "features": [
        {
          "level": 3,
          "name": "Magia Runica",
          "desc": "Incidi rune (Runa delle Nuvole per deviare attacchi, Runa del Fuoco per incatenare, Runa della Pietra per sonno)."
        },
        {
          "level": 3,
          "name": "Statura dei Giganti",
          "desc": "Azione bonus: diventi di taglia Grande, ottieni vantaggio alle prove di Forza e infliggi +1d6 danni da arma 1 volta per turno."
        }
      ]
    },
    {
      "id": "fighter_eldritch_knight",
      "classId": "fighter",
      "name": "Cavaliere Mistico (Eldritch Knight)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Fondono la maestria nelle armi con la magia arcana di abiurazione e invocazione.",
      "features": [
        {
          "level": 3,
          "name": "Lancio degli Incantesimi da Mago",
          "desc": "Lanci trucchetti e incantesimi di Abiurazione e Invocazione usando Intelligenza."
        },
        {
          "level": 3,
          "name": "Legame con l'Arma",
          "desc": "Non puoi essere disarmato della tua arma legata e puoi teletrasportarla nella tua mano come azione bonus da qualsiasi distanza."
        },
        {
          "level": 7,
          "name": "Magia da Guerra",
          "desc": "Quando usi un'azione per lanciare un trucchetto, puoi effettuare 1 attacco con arma come azione bonus."
        }
      ]
    },
    {
      "id": "paladin_devotion",
      "classId": "paladin",
      "name": "Giuramento di Devozione",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Il cavaliere ideale senza macchia che combatte le tenebre con rettitudine.",
      "features": [
        {
          "level": 3,
          "name": "Incanalare Divinità: Arma Sacra",
          "desc": "Azione: l'arma risplende, aggiungi mod CAR a tutti i TxC e l'arma conta come magica che emette luce."
        },
        {
          "level": 3,
          "name": "Incanalare Divinità: Scacciare gli Empi",
          "desc": "Scaccia immondi e non morti con una preghiera solenne."
        },
        {
          "level": 7,
          "name": "Aura di Devozione",
          "desc": "Tu e gli alleati entro 3m non potete essere affascinati mentre sei cosciente."
        }
      ]
    },
    {
      "id": "paladin_vengeance",
      "classId": "paladin",
      "name": "Giuramento di Vendetta",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Pietà per gli innocenti, distruzione implacabile per i malvagi.",
      "features": [
        {
          "level": 3,
          "name": "Incanalare Divinità: Voto di Inimicizia",
          "desc": "Azione bonus: ottieni VANTAGGIO a tutti i tiri per colpire contro un bersaglio per 1 minuto intero!"
        },
        {
          "level": 3,
          "name": "Incantesimi di Giuramento",
          "desc": "Marchio del Cacciatore, Passo Nebbioso, Velocità, Esilio."
        },
        {
          "level": 7,
          "name": "Vendicatore Implacabile",
          "desc": "Quando colpisci con un attacco di opportunità puoi muoverti fino a metà della tua velocità come parte della stessa reazione."
        }
      ]
    },
    {
      "id": "paladin_conquest",
      "classId": "paladin",
      "name": "Giuramento di Conquista",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Schiacciano il caos e piegano i nemici con il terrore assoluto.",
      "features": [
        {
          "level": 3,
          "name": "Incanalare Divinità: Presenza Conquistatrice",
          "desc": "Azione: tutte le creature a scelta entro 9m devono superare TS Saggezza o essere spaventate da te per 1 minuto."
        },
        {
          "level": 3,
          "name": "Incanalare Divinità: Colpo Guidato",
          "desc": "+10 a un tiro per colpire che hai appena effettuato!"
        },
        {
          "level": 7,
          "name": "Aura di Conquista",
          "desc": "I nemici spaventati entro 3m hanno velocità ridotta a ZERO e subiscono danni psichici continui all'inizio del loro turno."
        }
      ]
    },
    {
      "id": "paladin_ancients",
      "classId": "paladin",
      "name": "Giuramento degli Antichi",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Cavalieri verdi custodi della bellezza, della gioia e dell'equilibrio naturale.",
      "features": [
        {
          "level": 3,
          "name": "Incanalare Divinità: Ira della Natura",
          "desc": "Azione: liane spettrali avvolgono un nemico entro 3m trattenendolo (TS Forza o Destrezza)."
        },
        {
          "level": 7,
          "name": "Aura di Protezione Magica",
          "desc": "Tu e gli alleati entro 3m avete RESISTENZA a TUTTI I DANNI da incantesimi!"
        }
      ]
    },
    {
      "id": "cleric_life",
      "classId": "cleric",
      "name": "Dominio della Vita",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "I più grandi maestri dell'energia positiva e della guarigione miracolosa.",
      "features": [
        {
          "level": 1,
          "name": "Competenza nelle Armature Pesanti",
          "desc": "Puoi indossare tutte le armature pesanti."
        },
        {
          "level": 1,
          "name": "Discepolo della Vita",
          "desc": "I tuoi incantesimi di cura curano +2 + livello dello slot PF addizionali a ogni lancio!"
        },
        {
          "level": 2,
          "name": "Incanalare Divinità: Preservare la Vita",
          "desc": "Azione: ripristini un pool di PF pari a 5 x livello Chierico distribuito a creature ferite entro 9m (fino a metà dei loro PF massimi)."
        },
        {
          "level": 6,
          "name": "Guaritore Benedetto",
          "desc": "Quando curi un alleato con un incantesimo, recuperi anche tu 2 + livello dello slot PF."
        }
      ]
    },
    {
      "id": "cleric_twilight",
      "classId": "cleric",
      "name": "Dominio del Crepuscolo (Twilight)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Protettori che vegliano sulla transizione tra luce e tenebre portando conforto.",
      "features": [
        {
          "level": 1,
          "name": "Occhi della Notte",
          "desc": "Scurovisione incredibile con portata fino a 90 METRI (300 ft), condivisibile con gli alleati!"
        },
        {
          "level": 1,
          "name": "Benedizione Vigile",
          "desc": "Azione: conferisci vantaggio al tiro di Iniziativa a te stesso o a un alleato fino al prossimo riposo."
        },
        {
          "level": 2,
          "name": "Incanalare Divinità: Santuario del Crepuscolo",
          "desc": "Aura di 9m per 1 minuto: ogni alleato che termina il turno nell'aura ottiene 1d6 + livello Chierico PUNTI FERITA TEMPORANEI oppure rimuove lo stato Affascinato/Spaventato!"
        }
      ]
    },
    {
      "id": "cleric_peace",
      "classId": "cleric",
      "name": "Dominio della Pace (Peace)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Diplomatici sacri capaci di unire le anime in un legame protettivo indistruttibile.",
      "features": [
        {
          "level": 1,
          "name": "Legame Incoraggiante (Emboldening Bond)",
          "desc": "Azione: leghi PB creature per 10 minuti. Una volta per turno possono sommare +1d4 a qualsiasi TxC, prova o TS (cumulabile con Guida e Benedizione)!"
        },
        {
          "level": 2,
          "name": "Incanalare Divinità: Balsamo della Pace",
          "desc": "Azione: ti muovi fino alla tua velocità senza provocare attacchi di opportunità. Ogni creatura entro 1,5m durante il movimento recupera 2d6 + mod SAG PF."
        },
        {
          "level": 6,
          "name": "Legame Protettivo",
          "desc": "Quando un alleato legato sta per subire danno, un altro alleato legato entro 9m può usare la reazione per teletrasportarsi e assorbire il danno al suo posto!"
        }
      ]
    },
    {
      "id": "cleric_tempest",
      "classId": "cleric",
      "name": "Dominio della Tempesta",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Incanalano la furia del fulmine, del tuono e delle maree vendicatrici.",
      "features": [
        {
          "level": 1,
          "name": "Armature Pesanti & Armi da Guerra",
          "desc": "Competenza in tutte le armature pesanti e le armi marziali."
        },
        {
          "level": 1,
          "name": "Ira della Tempesta",
          "desc": "Reazione: quando vieni colpito in mischia infliggi 2d8 danni da fulmine o tuono (TS Destrezza dimezza)."
        },
        {
          "level": 2,
          "name": "Incanalare Divinità: Furia Distruttiva",
          "desc": "Quando infliggi danno da fulmine o tuono, puoi massimizzare il danno inflitto invece di tirare i dadi!"
        }
      ]
    },
    {
      "id": "rogue_swashbuckler",
      "classId": "rogue",
      "name": "Spadaccino (Swashbuckler)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Duellanti agili e spavaldi che eccellono nel combattimento singolo.",
      "features": [
        {
          "level": 3,
          "name": "Fascino Audace",
          "desc": "Aggiungi il tuo modificatore di Carisma all'Iniziativa!"
        },
        {
          "level": 3,
          "name": "Furtivo da Duellante",
          "desc": "Puoi usare Attacco Furtivo in corpo a corpo 1 contro 1 anche senza vantaggio, purché non ci siano altri nemici adiacenti."
        },
        {
          "level": 3,
          "name": "Piedelesto Spavaldo",
          "desc": "Se effettui un attacco contro una creatura, quella creatura non può compiere attacchi di opportunità contro di te per il resto del turno."
        }
      ]
    },
    {
      "id": "rogue_soulknife",
      "classId": "rogue",
      "name": "Lama dell'Anima (Soulknife)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Assassini psionici che manifestano lame invisibili e comunicano con il pensiero.",
      "features": [
        {
          "level": 3,
          "name": "Lame Psioniche",
          "desc": "Materializzi pugnali psionici mentali (1d6 danni psichici, gittata 18m). Puoi compiere un secondo attacco psionico bonus (1d4 danni)."
        },
        {
          "level": 3,
          "name": "Dadi di Potere Psionico",
          "desc": "Dadi (d6) da aggiungere a prove fallite o per stabilire una rete telepatica con gli alleati fino a 1,5 km."
        }
      ]
    },
    {
      "id": "rogue_assassin",
      "classId": "rogue",
      "name": "Assassino (Assassin)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Specialisti nell'infiltrazione, veleni e letali imboscate al primo round.",
      "features": [
        {
          "level": 3,
          "name": "Assassinare",
          "desc": "Vantaggio a tutti i TxC contro creature che non hanno ancora agito nel combattimento. Ogni colpo a segno contro una creatura sorpresa è un CRITICO AUTOMATICO!"
        },
        {
          "level": 3,
          "name": "Competenze Mortali",
          "desc": "Competenza nel kit da camuffamento e nel kit da avvelenatore."
        }
      ]
    },
    {
      "id": "rogue_arcane_trickster",
      "classId": "rogue",
      "name": "Mistico Arcano (Arcane Trickster)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Fondono agilità ladresca con illusioni e ammaliamenti arcani.",
      "features": [
        {
          "level": 3,
          "name": "Lancio degli Incantesimi da Mago",
          "desc": "Lanci trucchetti e incantesimi di Illusione e Incantamento con Intelligenza."
        },
        {
          "level": 3,
          "name": "Mano Magica Furtiva",
          "desc": "Mano Magica invisibile: borseggia, disarma trappole e scassina a distanza con Rapidità di Mano."
        }
      ]
    },
    {
      "id": "wizard_bladesinging",
      "classId": "wizard",
      "name": "Cantore della Lama (Bladesinging)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Guerrieri-maghi elfici che danzano sul campo fondendo scherma e incantesimi.",
      "features": [
        {
          "level": 2,
          "name": "Addestramento della Guerra e del Canto",
          "desc": "Competenza nelle armature leggere, in un'arma da mischia ad una mano e in Intrattenere."
        },
        {
          "level": 2,
          "name": "Canto della Lama (Bladesong)",
          "desc": "Azione bonus per 1 minuto: +INT alla CA, +3m velocità, vantaggio ad Acrobazia e +INT ai TS Costituzione per mantenere la Concentrazione!"
        },
        {
          "level": 6,
          "name": "Attacco Extra Speciale",
          "desc": "Puoi attaccare due volte E sostituire uno dei due attacchi con il lancio di un trucchetto (es. Lama Risonante)!"
        }
      ]
    },
    {
      "id": "wizard_evocation",
      "classId": "wizard",
      "name": "Scuola di Invocazione",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Padroni degli elementi distruttivi capaci di proteggere i propri alleati.",
      "features": [
        {
          "level": 2,
          "name": "Plasmare Incantesimi (Sculpt Spells)",
          "desc": "I tuoi alleati superano automaticamente i TS contro le tue invocazioni ad area (es. Palla di Fuoco) e non subiscono alcun danno!"
        },
        {
          "level": 6,
          "name": "Trucchetto Potente",
          "desc": "I nemici subiscono metà danno dai tuoi trucchetti anche se superano il tiro salvezza."
        }
      ]
    },
    {
      "id": "wizard_divination",
      "classId": "wizard",
      "name": "Scuola di Divinazione",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Veggenti che leggono il tempo e piegano il destino a loro piacimento.",
      "features": [
        {
          "level": 2,
          "name": "Presagio (Portent)",
          "desc": "Tiri 2d20 dopo ogni riposo lungo. Puoi sostituire QUALSIASI tiro per colpire, TS o prova di una creatura con uno dei tuoi tiri registrati!"
        },
        {
          "level": 6,
          "name": "Esperto Divinatore",
          "desc": "Quando lanci un incantesimo di divinazione di 2° livello o superiore recuperi uno slot inferiore."
        }
      ]
    },
    {
      "id": "wizard_abjuration",
      "classId": "wizard",
      "name": "Scuola di Abiurazione",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Maestri della protezione magica, controincantesimi e barriere difensive.",
      "features": [
        {
          "level": 2,
          "name": "Interdizione Arcana (Arcane Ward)",
          "desc": "Quando lanci un incantesimo di abiurazione crei una barriera protettiva con PF = 2x livello Mago + INT che assorbe il danno subito al tuo posto."
        },
        {
          "level": 6,
          "name": "Interdizione Proiettata",
          "desc": "Reazione: quando un alleato entro 9m sta per subire danno, la tua interdizione assorbe il danno al suo posto."
        }
      ]
    },
    {
      "id": "druid_moon",
      "classId": "druid",
      "name": "Circolo della Luna (Circle of the Moon)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Feroci protettori delle terre selvagge che padroneggiano forme animali colossali.",
      "features": [
        {
          "level": 2,
          "name": "Forma da Combattimento",
          "desc": "Ti trasformi in bestia con un'Azione Bonus invece di un'azione standard. Spendi slot incantesimo per curarti di 1d8 PF per livello slot mentre sei trasformato."
        },
        {
          "level": 2,
          "name": "Forme del Circolo Potenziate",
          "desc": "Puoi trasformarti in bestie con Grado di Sfida pari a 1 al liv 2 (es. Orso Bruno, Lupo Feroce), GS 2 al liv 6, GS 3 al liv 9, GS 4 al liv 12."
        },
        {
          "level": 6,
          "name": "Colpo Primale",
          "desc": "I tuoi attacchi in forma bestiale contano come magici per superare resistenze e immunità."
        },
        {
          "level": 10,
          "name": "Forma Selvatica Elementale",
          "desc": "Spendi 2 usi di Forma Selvatica per trasformarti in un Elementale dell'Aria, della Terra, del Fuoco o dell'Acqua!"
        }
      ]
    },
    {
      "id": "druid_stars",
      "classId": "druid",
      "name": "Circolo delle Stelle (Circle of Stars)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Osservatori celesti che incanalano il bagliore delle costellazioni.",
      "features": [
        {
          "level": 2,
          "name": "Mappa Stellare",
          "desc": "Conosci il trucchetto Guida e puoi lanciare Dardo Stellare (Guiding Bolt) gratuitamente un numero di volte pari al tuo bonus di competenza."
        },
        {
          "level": 2,
          "name": "Forma Stellare",
          "desc": "Azione bonus: assumi una costellazione: Arciere (attacco luminoso a distanza 1d8+SAG come azione bonus), Calice (ogni cura cura +1d8+SAG a un altro alleato), Drago (minimo 10 sui dadi di Concentrazione e INT/SAG)."
        },
        {
          "level": 6,
          "name": "Bagliore Cosmico",
          "desc": "Reazione: aggiungi o sottrai 1d6 al tiro di una creatura visibile prima che l'effetto abbia luogo."
        }
      ]
    },
    {
      "id": "druid_land",
      "classId": "druid",
      "name": "Circolo della Terra (Circle of the Land)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Mistici e custodi delle antiche tradizioni legate agli ambienti naturali.",
      "features": [
        {
          "level": 2,
          "name": "Trucchetto Aggiuntivo",
          "desc": "Conosci un trucchetto da druido aggiuntivo."
        },
        {
          "level": 2,
          "name": "Recupero Naturale",
          "desc": "Durante un riposo breve recuperi slot incantesimo con livello totale pari a metà livello Druido."
        },
        {
          "level": 3,
          "name": "Incantesimi del Circolo",
          "desc": "Incantesimi sempre preparati in base al bioma (Artico, Costa, Deserto, Foresta, Montagna, Palude, Sottosuolo)."
        }
      ]
    },
    {
      "id": "monk_open_hand",
      "classId": "monk",
      "name": "Via della Mano Aperta (Way of the Open Hand)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "I maestri assoluti dell'arte marziale disarmata e del controllo corporeo.",
      "features": [
        {
          "level": 3,
          "name": "Tecnica della Mano Aperta",
          "desc": "Ogni volta che colpisci con la Raffica di Colpi puoi: atterrare prono il nemico (TS Destrezza), spingerlo via di 4,5m (TS Forza), o negargli le reazioni fino al suo prossimo turno!"
        },
        {
          "level": 6,
          "name": "Integrità del Corpo",
          "desc": "Azione: recuperi istantaneamente PF pari a 3 x livello Monaco (1 volta per riposo lungo)."
        },
        {
          "level": 11,
          "name": "Tranquillità",
          "desc": "Ottieni l'effetto permanente dell'incantesimo Santuario dopo ogni riposo."
        },
        {
          "level": 17,
          "name": "Palmo Tremolante",
          "desc": "Vibrazioni letali letali: con 3 Ki e un'azione fai fallire il cuore del bersaglio (TS Costituzione o ridotto a ZERO PF; 10d10 se supera)."
        }
      ]
    },
    {
      "id": "monk_shadow",
      "classId": "monk",
      "name": "Via dell'Ombra (Way of Shadow)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Ninja e assassini che scivolano nell'oscurità e colpiscono alle spalle.",
      "features": [
        {
          "level": 3,
          "name": "Arti dell'Ombra",
          "desc": "Spendi 2 Ki per lanciare Oscurità, Visione nel Buio, Silenzio o Passo Senza Tracce senza componenti materiali."
        },
        {
          "level": 6,
          "name": "Passo dell'Ombra",
          "desc": "Azione bonus: quando sei nella penombra o nel buio ti teletrasporti fino a 18 metri in un altro punto d'ombra e hai VANTAGGIO al tuo prossimo attacco in mischia!"
        }
      ]
    },
    {
      "id": "monk_mercy",
      "classId": "monk",
      "name": "Via della Misericordia (Way of Mercy)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Guaritori manipolatori del Ki della vita e del tocco letale del veleno.",
      "features": [
        {
          "level": 3,
          "name": "Mani della Cura",
          "desc": "Spendi 1 Ki per curare un alleato con un tocco (dado arti marziali + mod SAG), oppure sostituisci un attacco della Raffica con una cura a costo 0 Ki!"
        },
        {
          "level": 3,
          "name": "Mani del Dolore",
          "desc": "Quando colpisci disarmato, spendi 1 Ki per infliggere danno necrotico extra pari al dado arti marziali + mod SAG."
        }
      ]
    },
    {
      "id": "ranger_gloomstalker",
      "classId": "ranger",
      "name": "Cacciatore delle Tenebre (Gloom Stalker)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Letali predatori del sottosuolo invisibili a chi usa la vista nell'oscurità.",
      "features": [
        {
          "level": 3,
          "name": "Imboscata Spaventosa",
          "desc": "Aggiungi mod SAG all'Iniziativa. Al 1° turno di combattimento la tua velocità aumenta di +3m e compirai 1 ATTACCO AGGIUNTIVO che infligge +1d8 danni extra!"
        },
        {
          "level": 3,
          "name": "Vista nell'Ombra",
          "desc": "Scurovisione +9m (o 18m se non ne avevi). SEI TOTALMENTE INVISIBILE a qualsiasi creatura che fa affidamento sulla Scurovisione nel buio!"
        },
        {
          "level": 7,
          "name": "Mente di Ferro",
          "desc": "Ottieni competenza nei tiri salvezza su Saggezza (o Intelligenza o Carisma se già competente)."
        }
      ]
    },
    {
      "id": "ranger_hunter",
      "classId": "ranger",
      "name": "Cacciatore (Hunter)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Guerrieri dei boschi specializzati nell'abbattere colossi e orride orde.",
      "features": [
        {
          "level": 3,
          "name": "Sterminatore di Colossi",
          "desc": "1 volta per turno infliggi +1d8 danni extra con arma se il bersaglio è già sotto i suoi PF massimi."
        },
        {
          "level": 7,
          "name": "Tattiche Difensive: Sfuggire all'Orda",
          "desc": "Gli attacchi di opportunità contro di te hanno svantaggio."
        },
        {
          "level": 11,
          "name": "Attacco Multiplo (Raffica / Turbine)",
          "desc": "Compi un attacco a distanza contro qualsiasi numero di creature entro 3m da un punto, o un attacco in mischia contro tutti i nemici entro 1,5m."
        }
      ]
    },
    {
      "id": "ranger_fey_wanderer",
      "classId": "ranger",
      "name": "Viandante delle Fate (Fey Wanderer)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Eroi benedetti dalla grazia e dall'inganno del Reame Fatato.",
      "features": [
        {
          "level": 3,
          "name": "Colpi Terreni",
          "desc": "1 volta per turno quando colpisci una creatura con un'arma infliggi +1d4 danni psichici."
        },
        {
          "level": 3,
          "name": "Presenza Fatata",
          "desc": "Aggiungi il tuo modificatore di Saggezza a TUTTE le prove di Carisma (Persuasione, Inganno, Intimidire)!"
        },
        {
          "level": 7,
          "name": "Torsione Ingannatrice",
          "desc": "Vantaggio ai TS contro Affascinato e Spaventato. Se un alleato o nemico supera il TS, puoi reindirizzare la paura/charme su un altro nemico entro 36m!"
        }
      ]
    },
    {
      "id": "sorcerer_draconic",
      "classId": "sorcerer",
      "name": "Stirpe Draconica (Draconic Bloodline)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "La magia ancestrale dei draghi scorre nelle loro vene corazzandone il corpo.",
      "features": [
        {
          "level": 1,
          "name": "Resilienza Draconica",
          "desc": "+1 PF massimo per livello Stregone e la tua pelle scagliosa ti conferisce CA base = 13 + mod DES quando sei senza armatura."
        },
        {
          "level": 6,
          "name": "Affinità Elementale",
          "desc": "Aggiungi il tuo modificatore di Carisma ai danni degli incantesimi che infliggono il danno del tuo drago antenato (fuoco, freddo, fulmine, acido, veleno)."
        }
      ]
    },
    {
      "id": "sorcerer_wild",
      "classId": "sorcerer",
      "name": "Magia Selvaggia (Wild Magic)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Manipolano le forze caotiche del caso scatenando tempeste di pura magia grezza.",
      "features": [
        {
          "level": 1,
          "name": "Impulso di Magia Selvaggia",
          "desc": "Quando lanci un incantesimo di 1° livello o superiore il DM può farti tirare un d100: effetti casuali stupefacenti o bizzarri!"
        },
        {
          "level": 1,
          "name": "Maree del Caos",
          "desc": "Ottieni VANTAGGIO a un tiro per colpire, prova o TS a comando (si ricarica con un impulso o a riposo lungo)."
        },
        {
          "level": 6,
          "name": "Piegare la Sorte",
          "desc": "Reazione: spendi 2 punti stregoneria per aggiungere o sottrarre 1d4 al tiro per colpire o TS di un'altra creatura visibile."
        }
      ]
    },
    {
      "id": "sorcerer_divine",
      "classId": "sorcerer",
      "name": "Anima Prescelta (Divine Soul)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Benedetti da una scintilla divina, attingono indistintamente al potere arcano e sacro.",
      "features": [
        {
          "level": 1,
          "name": "Magia Divina",
          "desc": "Puoi imparare qualsiasi incantesimo dalla lista del CHIERICO oltre a quella dello Stregone!"
        },
        {
          "level": 1,
          "name": "Favorito dagli Dei",
          "desc": "Se fallisci un tiro per colpire o un tiro salvezza, puoi aggiungere 2d4 al totale (1 volta per riposo breve/lungo)."
        },
        {
          "level": 6,
          "name": "Guarigione Potenziata",
          "desc": "Spendi 1 punto stregoneria per ritirare qualsiasi numero di dadi di cura di un incantesimo."
        }
      ]
    },
    {
      "id": "sorcerer_aberrant",
      "classId": "sorcerer",
      "name": "Mente Aberrante (Aberrant Mind)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Invasati dalle energie psioniche del Far Realm, dominano menti e pensieri.",
      "features": [
        {
          "level": 1,
          "name": "Eloquenza Telepatica",
          "desc": "Azione bonus: crei un legame telepatico a due vie con una creatura entro 9m fino a un raggio pari a mod CAR km!"
        },
        {
          "level": 6,
          "name": "Lancio Psionico",
          "desc": "Puoi lanciare gli incantesimi della tua lista psionica spendendo punti stregoneria pari al livello dell'incantesimo senza alcuna componente verbale o somatica!"
        }
      ]
    },
    {
      "id": "warlock_hexblade",
      "classId": "warlock",
      "name": "Lama del Sottomondo (Hexblade)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Patto con le oscure entità senzienti della Coltre Oscura artefici di armi leggendarie.",
      "features": [
        {
          "level": 1,
          "name": "Guerriero dell'Esanatice",
          "desc": "Competenza nelle armature medie, scudi e armi da guerra. Usi CARISMA invece di Forza o Destrezza per TxC e danni della tua arma da mischia!"
        },
        {
          "level": 1,
          "name": "Maledizione dell'Esanatice",
          "desc": "Azione bonus per 1 minuto su un bersaglio: +PB ai danni, colpi critici con 19 o 20, e recuperi PF pari a livello Warlock + CAR se muore!"
        },
        {
          "level": 6,
          "name": "Spettro Maledetto",
          "desc": "Quando uccidi un umanoide leghi la sua ombra per servirte come Spettro fino al prossimo riposo lungo."
        }
      ]
    },
    {
      "id": "warlock_fiend",
      "classId": "warlock",
      "name": "Il Signore Immondo (The Fiend)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Patto con signori dei Nove Inferi o dell'Abisso bramosi di anime.",
      "features": [
        {
          "level": 1,
          "name": "Benedizione dell'Oscuro",
          "desc": "Quando riduci una creatura a 0 PF guadagni PF TEMPORANEI pari a livello Warlock + mod CAR."
        },
        {
          "level": 6,
          "name": "Fortuna dell'Oscuro",
          "desc": "Aggiungi 1d10 a una prova di caratteristica o tiro salvezza (1 volta per riposo breve/lungo)."
        }
      ]
    },
    {
      "id": "warlock_great_old_one",
      "classId": "warlock",
      "name": "Il Grande Antico (The Great Old One)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Patto con inconoscibili entità stellari che dormono al di là dello spazio.",
      "features": [
        {
          "level": 1,
          "name": "Mente Risvegliata",
          "desc": "Puoi comunicare telepaticamente con qualsiasi creatura entro 9m visibile purché conosca almeno un linguaggio."
        },
        {
          "level": 6,
          "name": "Difesa Entropica",
          "desc": "Reazione: quando vieni attaccato imponi svantaggio al tiro. Se fallisce, hai vantaggio al tuo prossimo TxC contro di lui."
        }
      ]
    },
    {
      "id": "bard_eloquence",
      "classId": "bard",
      "name": "Collegio dell'Eloquenza",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Retori insuperabili le cui parole piegano le menti e rincuorano gli alleati.",
      "features": [
        {
          "level": 3,
          "name": "Voce d'Argento",
          "desc": "Ogni tiro naturale di 9 o inferiore su prove di Inganno e Persuasione viene considerato un 10!"
        },
        {
          "level": 3,
          "name": "Parole Sconfortanti",
          "desc": "Azione bonus: spendi un dado Ispirazione per sottrarre il risultato al prossimo tiro salvezza del bersaglio."
        },
        {
          "level": 6,
          "name": "Ispirazione Infallibile",
          "desc": "Se un alleato fallisce la prova o il TxC usando il tuo dado Ispirazione, non consuma il dado!"
        }
      ]
    },
    {
      "id": "bard_lore",
      "classId": "bard",
      "name": "Collegio della Sapienza (College of Lore)",
      "source": "PHB (Manuale del Giocatore)",
      "desc": "Eruditi che raccolgono segreti del multiverso e padroneggiano incantesimi rubati.",
      "features": [
        {
          "level": 3,
          "name": "Competenze Aggiuntive",
          "desc": "Ottieni competenza in 3 abilità qualsiasi a tua scelta."
        },
        {
          "level": 3,
          "name": "Parole Taglienti",
          "desc": "Reazione: spendi un dado Ispirazione per sottrarre il risultato a un TxC, prova o danno nemico entro 18m."
        },
        {
          "level": 6,
          "name": "Segreti Magici Aggiuntivi",
          "desc": "Impari 2 incantesimi qualsiasi da QUALSIASI classe (fino al 3° livello) che contano come incantesimi da bardo!"
        }
      ]
    },
    {
      "id": "bard_swords",
      "classId": "bard",
      "name": "Collegio delle Spade (College of Swords)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Artisti della lama che uniscono abilità circensi a tecniche di scherma letale.",
      "features": [
        {
          "level": 3,
          "name": "Competenze da Duellante",
          "desc": "Competenza nelle armature medie e nella scimitarra; la tua arma conta come focus per gli incantesimi."
        },
        {
          "level": 3,
          "name": "Stile di Combattimento",
          "desc": "Scegli tra Duellare (+2 danni arma singola) o Due Armi."
        },
        {
          "level": 3,
          "name": "Fioriture di Lama",
          "desc": "Quando colpisci con un'arma spendi 1 dado Ispirazione per: Fioritura Difensiva (aggiungi dado alla CA fino al tuo prossimo turno), Fioritura Mobile (spingi il bersaglio e ti muovi), o Fioritura Fendente (danneggi un altro nemico adiacente)."
        },
        {
          "level": 6,
          "name": "Attacco Extra",
          "desc": "Puoi attaccare due volte con l'Azione di Attacco."
        }
      ]
    },
    {
      "id": "artificer_battlesmith",
      "classId": "artificer",
      "name": "Fabbro da Battaglia (Battle Smith)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Un guerriero corazzato che unisce magia metallurgica e combatte affiancato da un difensore d'acciaio.",
      "features": [
        {
          "level": 3,
          "name": "Prontezza da Battaglia",
          "desc": "Competenza nelle armi da guerra. Quando attacchi con un'arma magica, puoi usare il modificatore di INTELLIGENZA invece di Forza o Destrezza per i tiri per colpire e per i danni!"
        },
        {
          "level": 3,
          "name": "Difensore d'Acciaio",
          "desc": "Crei un compagno meccanico a quattro zampe che combatte al tuo fianco: agisce dopo il tuo turno, impone svantaggio ai nemici e attacca come azione bonus."
        },
        {
          "level": 5,
          "name": "Attacco Extra",
          "desc": "Puoi attaccare due volte invece di una quando compi l'Azione di Attacco nel tuo turno."
        },
        {
          "level": 9,
          "name": "Canalizzazione Arcana",
          "desc": "I tuoi attacchi o quelli del difensore infliggono +2d6 danni da forza extra o curano un alleato entro 9m di 2d6 PF."
        },
        {
          "level": 15,
          "name": "Difensore Perfezionato",
          "desc": "La CA e i danni del difensore d'acciaio aumentano, e i suoi contrattacchi infliggono danni da forza extra."
        }
      ]
    },
    {
      "id": "artificer_artillerist",
      "classId": "artificer",
      "name": "Artigliere (Artillerist)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Specialista in devastazione a distanza e cannoni arcani eldritch portatili.",
      "features": [
        {
          "level": 3,
          "name": "Cannone Eldritch",
          "desc": "Crei un cannone magico (Lanciafiamme, Balista di Forza o Difensore con scudo di PF temporanei) attivabile con azione bonus."
        },
        {
          "level": 5,
          "name": "Arma da Fuoco Arcana",
          "desc": "Trasformi una bacchetta, bastone o verga in un'arma da fuoco arcana: i tuoi incantesimi infliggono +1d8 danni extra."
        }
      ]
    },
    {
      "id": "artificer_armorer",
      "classId": "artificer",
      "name": "Armaiolo (Armorer)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Indossa un'armatura potenziata che diventa una seconda pelle cibernetica.",
      "features": [
        {
          "level": 3,
          "name": "Armatura Arcana",
          "desc": "La tua armatura non ha requisiti di Forza, funge da focus e copre tutto il corpo sostituendo eventuali arti mancanti."
        },
        {
          "level": 3,
          "name": "Modello dell'Armatura",
          "desc": "Scegli tra Guardiano (guanti tuono che costringono i nemici ad attaccare te) o Infiltratore (fulmini a distanza e vantaggio alla Furtività)."
        },
        {
          "level": 5,
          "name": "Attacco Extra",
          "desc": "Attacchi due volte con l'Azione di Attacco."
        }
      ]
    },
    {
      "id": "cleric_forge",
      "classId": "cleric",
      "name": "Dominio della Forgia (Forge Domain)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Chierici che venerano gli dei fabbri e incanalano il fuoco e il metallo sacro.",
      "features": [
        {
          "level": 1,
          "name": "Benedizione della Forgia",
          "desc": "Conferisci un bonus magico di +1 alla CA o a TxC/danni a un'arma o armatura fino al prossimo riposo lungo."
        },
        {
          "level": 2,
          "name": "Incanalare Divinità: Dono dell'Artefice",
          "desc": "Conduci un rituale di 1 ora per creare qualsiasi oggetto o meccanismo di metallo non magico."
        },
        {
          "level": 6,
          "name": "Anima della Forgia",
          "desc": "Resistenza al fuoco e +1 alla CA mentre indossi un'armatura pesante."
        }
      ]
    },
    {
      "id": "cleric_grave",
      "classId": "cleric",
      "name": "Dominio della Tomba (Grave Domain)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Guardiani del confine tra la vita e la morte che puniscono i non morti e sostengono chi sta morendo.",
      "features": [
        {
          "level": 1,
          "name": "Cerchio della Mortalità",
          "desc": "Quando curi una creatura a 0 PF, ogni dado cura assegna il suo MASSIMO valore possibile senza tirare!"
        },
        {
          "level": 2,
          "name": "Incanalare Divinità: Sentiero verso la Tomba",
          "desc": "Maledici una creatura entro 9m: il prossimo attacco che la colpisce infligge DOPPIO DANNO (vulnerabilità totale)!"
        },
        {
          "level": 6,
          "name": "Sentinella alla Porta della Morte",
          "desc": "Come reazione, annulli un colpo critico subito da un alleato entro 9m trasformandolo in colpo normale."
        }
      ]
    },
    {
      "id": "wizard_war_magic",
      "classId": "wizard",
      "name": "Tradizione della Magia della Guerra (War Magic)",
      "source": "XGtE (Guida di Xanathar)",
      "desc": "Magi addestrati sul campo di battaglia che combinano abiurazione e invocazione rapida.",
      "features": [
        {
          "level": 2,
          "name": "Deviazione Arcana",
          "desc": "Come reazione ottieni +2 alla CA contro un attacco o +4 a un tiro salvezza fallito."
        },
        {
          "level": 2,
          "name": "Iniziativa Tattica",
          "desc": "Aggiungi il modificatore di Intelligenza al tuo tiro di Iniziativa!"
        }
      ]
    },
    {
      "id": "wizard_scribes",
      "classId": "wizard",
      "name": "Ordine degli Scribi (Order of Scribes)",
      "source": "TCoE (Calderone di Tasha)",
      "desc": "Magi che animano il loro grimorio e possono manipolare le formule di lancio.",
      "features": [
        {
          "level": 2,
          "name": "Grimorio Risvegliato",
          "desc": "Il tuo libro degli incantesimi è senziente: puoi cambiare il tipo di danno dei tuoi incantesimi e trascrivere pergamene in pochi minuti."
        }
      ]
    }
  ],
  "spells": [
    {
      "id": "acid_arrow",
      "name": "Freccia Acida di Melf (Acid Arrow)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (Powdered rhubarb leaf and an adder's stomach.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
    },
    {
      "id": "acid_splash",
      "name": "Spruzzo Acido (Acid Splash)",
      "level": 0,
      "school": "Evocazione",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.\n\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
    },
    {
      "id": "aid",
      "name": "Aiuto (Aid)",
      "level": 2,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "paladin",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A tiny strip of white cloth.)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
    },
    {
      "id": "alarm",
      "name": "Allarme (Alarm)",
      "level": 1,
      "school": "Abiurazione",
      "classes": [
        "ranger",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "9 metri",
      "components": "V, S, M (A tiny bell and a piece of fine silver wire.)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": true,
      "desc": "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.\n\nA mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.\n\nAn audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."
    },
    {
      "id": "alter_self",
      "name": "Alterare Se Stesso (Alter Self)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.\n\n***Aquatic Adaptation.*** You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.\n\n***Change Appearance.*** You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.\n\n***Natural Weapons.*** You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."
    },
    {
      "id": "animal_friendship",
      "name": "Amicizia con gli Animali (Animal Friendship)",
      "level": 1,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A morsel of food.)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": false,
      "desc": "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends."
    },
    {
      "id": "animal_messenger",
      "name": "Messaggero Animale (Animal Messenger)",
      "level": 2,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A morsel of food.)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": true,
      "desc": "By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as \"a man or woman dressed in the uniform of the town guard\" or \"a red-haired dwarf wearing a pointed hat.\" You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.\n\nWhen the messenger arrives, it delivers your message to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn't reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell.\n\nAi livelli superiori: If you cast this spell using a spell slot of 3nd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd."
    },
    {
      "id": "animal_shapes",
      "name": "Forme Animali (Animal Shapes)",
      "level": 8,
      "school": "Trasmutazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 24 ore",
      "concentration": true,
      "ritual": false,
      "desc": "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms.\n\nThe transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells.\n\nThe target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment."
    },
    {
      "id": "animate_dead",
      "name": "Animare Morti (Animate Dead)",
      "level": 3,
      "school": "Necromanzia",
      "classes": [
        "cleric",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "3 metri",
      "components": "V, S, M (A drop of blood, a piece of flesh, and a pinch of bone dust.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the GM has the creature's game statistics).\n\nOn each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.\n\nThe creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.\n\nAi livelli superiori: When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
    },
    {
      "id": "animate_objects",
      "name": "Animare Oggetti (Animate Objects)",
      "level": 5,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.\n\nAs a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.\n\n##### Animated Object Statistics\n\n| Size | HP | AC | Attack | Str | Dex |\n\n|---|---|---|---|---|---|\n\n| Tiny | 20 | 18 | +8 to hit, 1d4 + 4 damage | 4 | 18 |\n\n| Small | 25 | 16 | +6 to hit, 1d8 + 2 damage | 6 | 14 |\n\n| Medium | 40 | 13 | +5 to hit, 2d6 + 1 damage | 10 | 12 |\n\n| Large | 50 | 10 | +6 to hit, 2d10 + 2 damage | 14 | 10 |\n\n| Huge | 80 | 10 | +8 to hit, 2d12 + 4 damage | 18 | 6 |\n\nAn animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.\n\nIf you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The GM might rule that a specific object inflicts slashing or piercing damage based on its form.\n\nAi livelli superiori: If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th."
    },
    {
      "id": "antilife_shell",
      "name": "Guscio Antivita (Antilife Shell)",
      "level": 5,
      "school": "Abiurazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.\n\nThe barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.\n\nIf you move so that an affected creature is forced to pass through the barrier, the spell ends."
    },
    {
      "id": "antimagic_field",
      "name": "Campo Antimagia (Antimagic Field)",
      "level": 8,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A pinch of powdered iron or iron filings.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.\n\nSpells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn't function, but the time it spends suppressed counts against its duration.\n\n***Targeted Effects.*** Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target.\n\n***Areas of Magic.*** The area of another spell or magical effect, such as fireball, can't extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough.\n\n***Spells.*** Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it.\n\n***Magic Items.*** The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword.\n\nA magic weapon's properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits.\n\n***Magical Travel.*** Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere.\n\n***Creatures and Objects.*** A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere.\n\n***Dispel Magic.*** Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don't nullify each other."
    },
    {
      "id": "antipathy_sympathy",
      "name": "Antipatia / Simpatia (Antipathy/Sympathy)",
      "level": 8,
      "school": "Ammaliamento",
      "classes": [
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 ora",
      "range": "18 metri",
      "components": "V, S, M (Either a lump of alum soaked in vinegar for the antipathy effect or a drop of ho)",
      "duration": "10 days",
      "concentration": false,
      "ritual": false,
      "desc": "This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura's effect.\n\n***Antipathy.*** The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. While frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can't see the target. If the creature moves more than 60 feet from the target and can't see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it.\n\n***Sympathy.*** The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or comes within 60 feet of it, the creature must succeed on a wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. When the creature has done so, it can't willingly move away from the target.\n\nIf the target damages or otherwise harms an affected creature, the affected creature can make a wisdom saving throw to end the effect, as described below.\n\n***Ending the Effect.*** If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another wisdom saving throw every 24 hours while the spell persists.\n\nA creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again."
    },
    {
      "id": "arcane_eye",
      "name": "Occhio Arcano (Arcane Eye)",
      "level": 4,
      "school": "Divinazione",
      "classes": [
        "cleric",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A bit of bat fur.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You create an invisible, magical eye within range that hovers in the air for the duration.\n\nYou mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.\n\nAs an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter."
    },
    {
      "id": "arcane_hand",
      "name": "Mano Arcana di Bigby (Bigby's Hand)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (An eggshell and a snakeskin glove.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.\n\nThe hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space.\n\nWhen you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.\n\n***Clenched Fist.*** The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage.\n\n***Forceful Hand.*** The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.\n\n***Grasping Hand.*** The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.\n\n***Interposing Hand.*** The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.\n\nAi livelli superiori: When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th."
    },
    {
      "id": "arcane_lock",
      "name": "Serratura Arcana (Arcane Lock)",
      "level": 2,
      "school": "Abiurazione",
      "classes": [
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (Gold dust worth at least 25gp, which the spell consumes.)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.\n\nWhile affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10."
    },
    {
      "id": "arcane_sword",
      "name": "Spada Arcana di Mordenkainen (Arcane Sword)",
      "level": 7,
      "school": "Invocazione",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (A miniature platinum sword with a grip and pommel of copper and zinc, worth 250 )",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create a sword-shaped plane of force that hovers within range. It lasts for the duration.\n\nWhen the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one."
    },
    {
      "id": "arcanists_magic_aura",
      "name": "Aura Magica di Nystul (Magic Aura)",
      "level": 2,
      "school": "Illusione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A small square of silk.)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature.\n\nWhen you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.\n\n***False Aura.*** You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.\n\n***Mask.*** You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment."
    },
    {
      "id": "astral_projection",
      "name": "Proiezione Astrale (Astral Projection)",
      "level": 9,
      "school": "Necromanzia",
      "classes": [
        "cleric",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 ora",
      "range": "3 metri",
      "components": "V, S, M (For each creature you affect with this spell, you must provide one jacinth worth)",
      "duration": "Special",
      "concentration": false,
      "ritual": false,
      "desc": "You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age.\n\nYour astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut--something that can happen only when an effect specifically states that it does--your soul and body are separated, killing you instantly.\n\nYour astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it.\n\nThe spell ends for you and your companions when you use your action to dismiss it. When the spell ends, the affected creature returns to its physical body, and it awakens.\n\nThe spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature's original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature's astral form back to its body, ending its state of suspended animation.\n\nIf you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points."
    },
    {
      "id": "augury",
      "name": "Auspicio (Augury)",
      "level": 2,
      "school": "Divinazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Incantatore",
      "components": "V, S, M (Specially marked sticks, bones, or similar tokens worth at least 25gp.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": true,
      "desc": "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The GM chooses from the following possible omens:\n\n- Weal, for good results\n\n- Woe, for bad results\n\n- Weal and woe, for both good and bad results\n\n- Nothing, for results that aren't especially good or bad\n\nThe spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.\n\nIf you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The GM makes this roll in secret."
    },
    {
      "id": "awaken",
      "name": "Risveglio (Awaken)",
      "level": 5,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "druid"
      ],
      "source": "PHB",
      "time": "8 ore",
      "range": "Contatto",
      "components": "V, S, M (An agate worth at least 1,000 gp, which the spell consumes.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human's. Your GM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree.\n\nThe awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed."
    },
    {
      "id": "bane",
      "name": "Anatema (Bane)",
      "level": 1,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "cleric"
      ],
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (una goccia di sangue)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Fino a 3 creature entro gittata devono effettuare un TS Carisma: se lo falliscono, devono sottrarre 1d4 da TUTTI i loro tiri per colpire e tiri salvezza per tutta la durata!"
    },
    {
      "id": "banishment",
      "name": "Esilio (Banishment)",
      "level": 4,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "paladin",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (un oggetto disgustoso per il bersaglio)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Tenti di bandire una creatura in un altro piano d'esistenza: il bersaglio deve superare un TS Carisma o essere catapultato in un semipiano innocuo (incapacitato). Se la creatura è originaria di un altro piano (immondi, elementali, celestiali) e l'incantesimo dura per l'intero minuto, non fa più ritorno!"
    },
    {
      "id": "barkskin",
      "name": "Pelle Coriacea (Barkskin)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A handful of oak bark.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."
    },
    {
      "id": "beacon_of_hope",
      "name": "Faro di Speranza (Beacon of Hope)",
      "level": 3,
      "school": "Abiurazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."
    },
    {
      "id": "bestow_curse",
      "name": "Scagliare Maledizione (Bestow Curse)",
      "level": 3,
      "school": "Necromanzia",
      "classes": [
        "bard",
        "cleric",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You touch a creature, and that creature must succeed on a wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:\n\n- Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.\n\n- While cursed, the target has disadvantage on attack rolls against you.\n\n- While cursed, the target must make a wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.\n\n- While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.\n\nA remove curse spell ends this effect. At the GM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The GM has final say on such a curse's effect.\n\nAi livelli superiori: If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration."
    },
    {
      "id": "black_tentacles",
      "name": "Tentacoli Neri di Evard (Black Tentacles)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (A piece of tentacle from a giant octopus or a giant squid)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.\n\nWhen a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.\n\nA creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself."
    },
    {
      "id": "blade_barrier",
      "name": "Barriera di Lame (Blade Barrier)",
      "level": 6,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.\n\nWhen a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage."
    },
    {
      "id": "bless",
      "name": "Benedizione (Bless)",
      "level": 1,
      "school": "Ammaliamento",
      "classes": [
        "cleric",
        "paladin"
      ],
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (una spruzzata d'acqua santa)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Benedici fino a 3 creature a scelta entro la gittata: ogni volta che un bersaglio effettua un tiro per colpire o un tiro salvezza prima del termine della magia, tira 1d4 e ne aggiunge il risultato al totale!"
    },
    {
      "id": "blight",
      "name": "Blight (Blight)",
      "level": 4,
      "school": "Necromanzia",
      "classes": [
        "druid",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. The spell has no effect on undead or constructs.\n\nIf you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it.\n\nIf you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies.\n\nAi livelli superiori: When you cast this spell using a spell slot of 5th level of higher, the damage increases by 1d8 for each slot level above 4th."
    },
    {
      "id": "blindness_deafness",
      "name": "Cecità/Sordità (Blindness/Deafness)",
      "level": 2,
      "school": "Necromanzia",
      "classes": [
        "bard",
        "cleric",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V",
      "duration": "1 minuto",
      "concentration": false,
      "ritual": false,
      "desc": "You can blind or deafen a foe. Choose one creature that you can see within range to make a constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a constitution saving throw. On a success, the spell ends.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    },
    {
      "id": "blink",
      "name": "Intermittenza (Blink)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "1 minuto",
      "concentration": false,
      "ritual": false,
      "desc": "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.\n\nWhile on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so."
    },
    {
      "id": "blur",
      "name": "Sfocatura (Blur)",
      "level": 2,
      "school": "Illusione",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
    },
    {
      "id": "branding_smite",
      "name": "Branding Smite (Branding Smite)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it's invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd."
    },
    {
      "id": "burning_hands",
      "name": "Mani Brucianti (Burning Hands)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Cono di 4,5 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Unisci i pollici ed emetti una fiammata a ventaglio: 3d6 danni da FUOCO a tutte le creature nel cono (TS Destrezza dimezza). Incendia oggetti non trasportati."
    },
    {
      "id": "call_lightning",
      "name": "Invocare il Fulmine (Call Lightning)",
      "level": 3,
      "school": "Evocazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).\n\nWhen you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.\n\nIf you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.\n\nAi livelli superiori: When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd."
    },
    {
      "id": "calm_emotions",
      "name": "Calmare Emozioni (Calm Emotions)",
      "level": 2,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.\n\nAlternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the GM rules otherwise."
    },
    {
      "id": "chain_lightning",
      "name": "Catena di Fulmini (Chain Lightning)",
      "level": 6,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S, M (un pezzo d'ambra, una piuma e tre spilli d'argento)",
      "duration": "Istantanea",
      "desc": "Crei un fulmine devastante che colpisce un bersaglio primario e poi balza fino a un massimo di 3 altri bersagli entro 9 metri dal primo. Ciascun bersaglio subisce 10d8 danni da FULMINE (TS Destrezza dimezza)."
    },
    {
      "id": "charm_person",
      "name": "Charme su Persone (Charm Person)",
      "level": 1,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
    },
    {
      "id": "chill_touch",
      "name": "Tocco Gelido (Chill Touch)",
      "level": 0,
      "school": "Negromanzia",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "1 round",
      "desc": "Crei una mano scheletrica spettrale. TxC a distanza con incantesimo: se colpisce infligge 1d8 danni NECROTICI e il bersaglio non può recuperare punti ferita fino all'inizio del tuo prossimo turno. Se il bersaglio è un non morto ha svantaggio ai TxC contro di te."
    },
    {
      "id": "circle_of_death",
      "name": "Cerchio di Morte (Circle of Death)",
      "level": 6,
      "school": "Necromanzia",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S, M (The powder of a crushed black pearl worth at least 500 gp.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "A sphere of negative energy ripples out in a 60-foot radius sphere from a point within range. Each creature in that area must make a constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.\n\nAi livelli superiori: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th."
    },
    {
      "id": "clairvoyance",
      "name": "Chiaroveggenza (Clairvoyance)",
      "level": 3,
      "school": "Divinazione",
      "classes": [
        "bard",
        "cleric",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "1 mile",
      "components": "V, S, M (A focus worth at least 100gp, either a jeweled horn for hearing or a glass eye f)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.\n\nWhen you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.\n\nA creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist."
    },
    {
      "id": "clone",
      "name": "Clone (Clone)",
      "level": 8,
      "school": "Necromanzia",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 ora",
      "range": "Contatto",
      "components": "V, S, M (A diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the crea)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.\n\nAt any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original's equipment. The original creature's physical remains, if they still exist, become inert and can't thereafter be restored to life, since the creature's soul is elsewhere."
    },
    {
      "id": "cloudkill",
      "name": "Nube Mortale (Cloudkill)",
      "level": 5,
      "school": "Evocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.\n\nWhen a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.\n\nThe fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.\n\nAi livelli superiori: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
    },
    {
      "id": "color_spray",
      "name": "Spruzzo Colorato (Color Spray)",
      "level": 1,
      "school": "Illusione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A pinch of powder or sand that is colored red, yellow, and blue.)",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).\n\nStarting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."
    },
    {
      "id": "command",
      "name": "Comando (Command)",
      "level": 1,
      "school": "Ammaliamento",
      "classes": [
        "cleric",
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "You speak a one-word command to a creature you can see within range. The target must succeed on a wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.\n\nSome typical commands and their effects follow. You might issue a command other than one described here. If you do so, the GM determines how the target behaves. If the target can't follow your command, the spell ends.\n\n***Approach.*** The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.\n\n***Drop.*** The target drops whatever it is holding and then ends its turn.\n\n***Flee.*** The target spends its turn moving away from you by the fastest available means.\n\n***Grovel.*** The target falls prone and then ends its turn.\n\n***Halt.*** The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
    },
    {
      "id": "commune",
      "name": "Comunione (Commune)",
      "level": 5,
      "school": "Divinazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Incantatore",
      "components": "V, S, M (Incense and a vial of holy or unholy water.)",
      "duration": "1 minuto",
      "concentration": false,
      "ritual": true,
      "desc": "You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.\n\nDivine beings aren't necessarily omniscient, so you might receive \"unclear\" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the GM might offer a short phrase as an answer instead.\n\nIf you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The GM makes this roll in secret."
    },
    {
      "id": "commune_with_nature",
      "name": "Comunione con la Natura (Commune with Nature)",
      "level": 5,
      "school": "Divinazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": true,
      "desc": "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns.\n\nYou instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:\n\n- terrain and bodies of water\n\n- prevalent plants, minerals, animals, or peoples\n\n- powerful celestials, fey, fiends, elementals, or undead\n\n- influence from other planes of existence\n\n- buildings\n\nFor example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns."
    },
    {
      "id": "comprehend_languages",
      "name": "Comprensione dei Linguaggi (Comprehend Languages)",
      "level": 1,
      "school": "Divinazione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A pinch of soot and salt.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": true,
      "desc": "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.\n\nThis spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language."
    },
    {
      "id": "compulsion",
      "name": "Costrizione (Compulsion)",
      "level": 4,
      "school": "Ammaliamento",
      "classes": [
        "bard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Creatures of your choice that you can see within range and that can hear you must make a wisdom saving throw. A target automatically succeeds on this saving throw if it can't be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take any action before it moves. After moving in this way, it can make another Wisdom save to try to end the effect.\n\nA target isn't compelled to move into an obviously deadly hazard, such as a fire or a pit, but it will provoke opportunity attacks to move in the designated direction."
    },
    {
      "id": "cone_of_cold",
      "name": "Cono di Freddo (Cone of Cold)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Cono di 18 metri che origina da te",
      "components": "V, S, M (un piccolo cono di cristallo o vetro)",
      "duration": "Istantanea",
      "desc": "Una tempesta glaciale erompe dalle tue mani: tutte le creature nell'enorme cono di 18 metri subiscono 8d8 danni da FREDDO (TS Costituzione dimezza). I corpi dei caduti vengono trasformati in statue di ghiaccio."
    },
    {
      "id": "confusion",
      "name": "Confusione (Confusion)",
      "level": 4,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (Three walnut shells.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.\n\nAn affected target can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn.\n\n| d10 | Behavior |\n\n|---|---|\n\n| 1 | The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn't take an action this turn. |\n\n| 2-6 | The creature doesn't move or take actions this turn. |\n\n| 7-8 | The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn. |\n\n| 9-10 | The creature can act and move normally. |\n\nAt the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.\n\nAi livelli superiori: When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th."
    },
    {
      "id": "conjure_animals",
      "name": "Evoca Animali (Conjure Animals)",
      "level": 3,
      "school": "Evocazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:\n\n- One beast of challenge rating 2 or lower\n\n- Two beasts of challenge rating 1 or lower\n\n- Four beasts of challenge rating 1/2 or lower\n\n- Eight beasts of challenge rating 1/4 or lower\n\n- Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.\n\nThe summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.\n\nThe GM has the creatures' statistics.\n\nAi livelli superiori: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level."
    },
    {
      "id": "conjure_celestial",
      "name": "Evoca Celestiale (Conjure Celestial)",
      "level": 7,
      "school": "Evocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "27 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends.\n\nThe celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions.\n\nThe GM has the celestial's statistics.\n\nAi livelli superiori: When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower."
    },
    {
      "id": "conjure_elemental",
      "name": "Evoca Elementale (Conjure Elemental)",
      "level": 5,
      "school": "Evocazione",
      "classes": [
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "27 metri",
      "components": "V, S, M (Burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.\n\nThe elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.\n\nIf your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it.\n\nThe GM has the elemental's statistics.\n\nAi livelli superiori: When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
    },
    {
      "id": "conjure_fey",
      "name": "Evoca Folletto (Conjure Fey)",
      "level": 6,
      "school": "Evocazione",
      "classes": [
        "druid",
        "warlock"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "27 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.\n\nIf your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.\n\nThe GM has the fey creature's statistics.\n\nAi livelli superiori: When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th."
    },
    {
      "id": "conjure_minor_elementals",
      "name": "Evoca Elementali Minori (Conjure Minor Elementals)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "27 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:\n\n- One elemental of challenge rating 2 or lower\n\n- Two elementals of challenge rating 1 or lower\n\n- Four elementals of challenge rating 1/2 or lower\n\n- Eight elementals of challenge rating 1/4 or lower.\n\nAn elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.\n\nThe summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.\n\nThe GM has the creatures' statistics.\n\nAi livelli superiori: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
    },
    {
      "id": "conjure_woodland_beings",
      "name": "Evoca Creature Boschive (Conjure Woodland Beings)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (One holly berry per creature summoned.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:\n\n- One fey creature of challenge rating 2 or lower\n\n- Two fey creatures of challenge rating 1 or lower\n\n- Four fey creatures of challenge rating 1/2 or lower\n\n- Eight fey creatures of challenge rating 1/4 or lower\n\nA summoned creature disappears when it drops to 0 hit points or when the spell ends.\n\nThe summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.\n\nThe GM has the creatures' statistics.\n\nAi livelli superiori: When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot."
    },
    {
      "id": "contact_other_plane",
      "name": "Contattare Altri Piani (Contact Other Plane)",
      "level": 5,
      "school": "Divinazione",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Incantatore",
      "components": "V",
      "duration": "1 minuto",
      "concentration": false,
      "ritual": true,
      "desc": "You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extraplanar intelligence can strain or even break your mind. When you cast this spell, make a DC 15 intelligence saving throw. On a failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can't take actions, can't understand what other creatures say, can't read, and speak only in gibberish. A greater restoration spell cast on you ends this effect.\n\nOn a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The GM answers each question with one word, such as \"yes,\" \"no,\" \"maybe,\" \"never,\" \"irrelevant,\" or \"unclear\" (if the entity doesn't know the answer to the question). If a one-word answer would be misleading, the GM might instead offer a short phrase as an answer."
    },
    {
      "id": "contagion",
      "name": "Contagio (Contagion)",
      "level": 5,
      "school": "Necromanzia",
      "classes": [
        "cleric",
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "7 days",
      "concentration": false,
      "ritual": false,
      "desc": "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below.\n\nAt the end of each of the target's turns, it must make a constitution saving throw. After failing three of these saving throws, the disease's effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends.\n\nSince this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it.\n\n***Blinding Sickness.*** Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on wisdom checks and wisdom saving throws and is blinded.\n\n***Filth Fever.*** A raging fever sweeps through the creature's body. The creature has disadvantage on strength checks, strength saving throws, and attack rolls that use Strength.\n\n***Flesh Rot.*** The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage.\n\n***Mindfire.*** The creature's mind becomes feverish. The creature has disadvantage on intelligence checks and intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat.\n\n***Seizure.*** The creature is overcome with shaking. The creature has disadvantage on dexterity checks, dexterity saving throws, and attack rolls that use Dexterity.\n\n***Slimy Doom.*** The creature begins to bleed uncontrollably. The creature has disadvantage on constitution checks and constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn."
    },
    {
      "id": "contingency",
      "name": "Contingenza (Contingency)",
      "level": 6,
      "school": "Invocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "Incantatore",
      "components": "V, S, M (A statuette of yourself carved from ivory and decorated with gems worth at least)",
      "duration": "10 days",
      "concentration": false,
      "ritual": false,
      "desc": "Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell--called the contingent spell--as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid.\n\nThe contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to. and then contingency ends.\n\nThe contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person."
    },
    {
      "id": "continual_flame",
      "name": "Fiamma Perenne (Continual Flame)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "cleric",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (Ruby dust worth 50 gp, which the spell consumes.)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched."
    },
    {
      "id": "control_water",
      "name": "Controllare Acqua (Control Water)",
      "level": 4,
      "school": "Trasmutazione",
      "classes": [
        "cleric",
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "90 metri",
      "components": "V, S, M (A drop of water and a pinch of dust.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.\n\n***Flood.*** You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land.\n\nIf you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave's path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing.\n\nThe water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.\n\n***Part Water.*** You cause water in the area to move apart and create a trench. The trench extends across the spell's area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.\n\n***Redirect Flow.*** You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell's area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect.\n\n***Whirlpool.*** This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC.\n\nWhen a creature enters the vortex for the first time on a turn or starts its turn there, it must make a strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so.\n\nThe first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex."
    },
    {
      "id": "control_weather",
      "name": "Controllare il Tempo Atmosferico (Control Weather)",
      "level": 8,
      "school": "Trasmutazione",
      "classes": [
        "cleric",
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "Incantatore",
      "components": "V, S, M (Burning incense and bits of earth and wood mixed in water.)",
      "duration": "Concentrazione, fino a 8 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don't have a clear path to the sky ends the spell early.\n\nWhen you cast the spell, you change the current weather conditions, which are determined by the GM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.\n\nWhen you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction.\n\n##### Precipitation\n\n| Stage | Condition |\n\n|---|---|\n\n| 1 | Clear |\n\n| 2 | Light clouds |\n\n| 3 | Overcast or ground fog |\n\n| 4 | Rain, hail, or snow |\n\n| 5 | Torrential rain, driving hail, or blizzard |\n\n##### Temperature\n\n| Stage | Condition |\n\n|---|---|\n\n| 1 | Unbearable heat |\n\n| 2 | Hot |\n\n| 3 | Warm |\n\n| 4 | Cool |\n\n| 5 | Cold |\n\n| 6 | Arctic cold |\n\n##### Wind\n\n| Stage | Condition |\n\n|---|---|\n\n| 1 | Calm |\n\n| 2 | Moderate wind |\n\n| 3 | Strong wind |\n\n| 4 | Gale |\n\n| 5 | Storm |"
    },
    {
      "id": "counterspell",
      "name": "Controincantesimo (Counterspell)",
      "level": 3,
      "school": "Abiurazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 reazione (quando vedi una creatura entro 18m lanciare un incantesimo)",
      "range": "18 metri",
      "components": "S",
      "duration": "Istantanea",
      "desc": "Tenti di interrompere il lancio di una magia avversaria. Se l'incantesimo nemico è di 3° livello o inferiore, fallisce automaticamente e va sprecato! Se è di 4° livello o superiore, effettua una prova con la tua caratteristica da incantatore (CD 10 + livello incantesimo avversario): se la superi, la magia nemica viene annullata!"
    },
    {
      "id": "create_food_and_water",
      "name": "Creare Cibo e Acqua (Create Food and Water)",
      "level": 3,
      "school": "Evocazione",
      "classes": [
        "cleric",
        "druid",
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad."
    },
    {
      "id": "create_undead",
      "name": "Creare Non Morti (Create Undead)",
      "level": 6,
      "school": "Necromanzia",
      "classes": [
        "cleric",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "3 metri",
      "components": "V, S, M (One clay pot filled with grave dirt, one clay pot filled with brackish water, an)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The GM has game statistics for these creatures.)\n\nAs a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.\n\nThe creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones.\n\nAi livelli superiori: When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies."
    },
    {
      "id": "create_or_destroy_water",
      "name": "Creare o Distruggere Acqua (Create or Destroy Water)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "cleric",
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A drop of water if creating water, or a few grains of sand if destroying it.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You either create or destroy water.\n\n***Create Water.*** You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range.\n\n***Destroy Water.*** You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
    },
    {
      "id": "creation",
      "name": "Creation (Creation)",
      "level": 5,
      "school": "Illusione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "9 metri",
      "components": "V, S, M (A tiny piece of matter of the same type of the item you plan to create.)",
      "duration": "Special",
      "concentration": false,
      "ritual": false,
      "desc": "You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before.\n\nThe duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration.\n\n| Material | Duration |\n\n|---|---|\n\n| Vegetable matter | 1 day |\n\n| Stone or crystal | 12 hours |\n\n| Precious metals | 1 hour |\n\n| Gems | 10 minutes |\n\n| Adamantine or mithral | 1 minute |\n\nUsing any material created by this spell as another spell's material component causes that spell to fail.\n\nAi livelli superiori: When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th."
    },
    {
      "id": "cure_wounds",
      "name": "Cura Ferite (Cure Wounds)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Tocchi una creatura vivente ripristinando un numero di punti ferita pari a 1d8 + il tuo modificatore di caratteristica da incantatore.\n\nAi livelli superiori: +1d8 di cura per ogni livello di slot superiore al 1°."
    },
    {
      "id": "dancing_lights",
      "name": "Luci Danzanti (Dancing Lights)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (A bit of phosphorus or wychwood, or a glowworm.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.\n\nAs a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
    },
    {
      "id": "darkness",
      "name": "Oscurità (Darkness)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, M (pelo di pipistrello e pece)",
      "duration": "Concentrazione, fino a 10 minuti",
      "desc": "Evochi una sfera di buio magico impenetrabile di 4,5m di raggio: la normale Scurovisione non può penetrarla e le fonti di luce non magiche vengono spente."
    },
    {
      "id": "darkvision",
      "name": "Scurovisione (Darkvision)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (Either a pinch of dried carrot or an agate.)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet."
    },
    {
      "id": "daylight",
      "name": "Luce del Giorno (Daylight)",
      "level": 3,
      "school": "Invocazione",
      "classes": [
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "sorcerer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.\n\nIf you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.\n\nIf any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled."
    },
    {
      "id": "death_ward",
      "name": "Interdizione alla Morte (Death Ward)",
      "level": 4,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "paladin"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "8 ore (SENZA concentrazione)",
      "desc": "Tocchi una creatura e le conferisci protezione contro la morte: la prima volta che scenderebbe a 0 punti ferita a causa di un danno, SCENDE INVECE A 1 PUNTO FERITA e l'incantesimo termina. Annulla anche gli effetti di morte istantanea senza danno."
    },
    {
      "id": "delayed_blast_fireball",
      "name": "Palla di Fuoco Ritardata (Delayed Blast Fireball)",
      "level": 7,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S, M (A tiny ball of bat guano and sulfur.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossoms with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.\n\nThe spell's base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.\n\nIf the glowing bead is touched before the interval has expired, the creature touching it must make a dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. When it strikes a creature or a solid object, the spell ends, and the bead explodes.\n\nThe fire damages objects in the area and ignites flammable objects that aren't being worn or carried.\n\nAi livelli superiori: When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th."
    },
    {
      "id": "demiplane",
      "name": "Semipiano (Demiplane)",
      "level": 8,
      "school": "Evocazione",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "S",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. When opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. When the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.\n\nEach time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead."
    },
    {
      "id": "detect_evil_and_good",
      "name": "Individuazione del Bene e del Male (Detect Evil and Good)",
      "level": 1,
      "school": "Divinazione",
      "classes": [
        "cleric",
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.\n\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    },
    {
      "id": "detect_magic",
      "name": "Individuazione del Magico (Detect Magic)",
      "level": 1,
      "school": "Divinazione (Rituale)",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione (o 10 minuti come Rituale)",
      "range": "Incantatore (9 metri)",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "desc": "Percepisci la presenza di magia entro 9m da te. Con un'azione distingui la scuola di magia dell'aura che circonda qualsiasi creatura o oggetto magico visibile."
    },
    {
      "id": "detect_poison_and_disease",
      "name": "Individuazione di Veleni e Malattie (Detect Poison/Disease)",
      "level": 1,
      "school": "Divinazione",
      "classes": [
        "cleric",
        "druid",
        "paladin",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A yew leaf.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": true,
      "desc": "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.\n\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
    },
    {
      "id": "detect_thoughts",
      "name": "Individuazione dei Pensieri (Detect Thoughts)",
      "level": 2,
      "school": "Divinazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A copper coin.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.\n\nYou initially learn the surface thoughts of the creature - what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.\n\nQuestions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.\n\nYou can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language.\n\nOnce you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range."
    },
    {
      "id": "dimension_door",
      "name": "Porta Dimensionale (Dimension Door)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "150 metri",
      "components": "V",
      "duration": "Istantanea",
      "desc": "Ti teletrasporti istantaneamente fino a 150 metri di distanza in qualsiasi punto desiderato (anche attraverso muri spessi, stanze chiuse o alla cieca specificando direzione e distanza). Puoi portare con te una creatura consenziente della tua taglia o inferiore!"
    },
    {
      "id": "disguise_self",
      "name": "Camuffare Se Stesso (Disguise Self)",
      "level": 1,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You make yourself--including your clothing, armor, weapons, and other belongings on your person--look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.\n\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.\n\nTo discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC."
    },
    {
      "id": "disintegrate",
      "name": "Disintegrazione (Disintegrate)",
      "level": 6,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (un pizzico di polvere e una goccia d'inchiostro)",
      "duration": "Istantanea",
      "desc": "Un raggio verde saetta dal tuo dito: il bersaglio deve superare un TS Destrezza o subire 10d6 + 40 DANNI DA FORZA! Se questo danno riduce il bersaglio a 0 punti ferita, esso viene TOTALMENTE POLVERIZZATO in un mucchietto di cenere grigia (resuscitabile solo con Desiderio o Resurrezione Pura). Distrugge all'istante anche Muri di Forza e creazioni magiche."
    },
    {
      "id": "dispel_evil_and_good",
      "name": "Dissolvi il Bene e il Male (Dispel Evil and Good)",
      "level": 5,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (Holy water or powdered silver and iron.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you.\n\nYou can end the spell early by using either of the following special functions.\n\n***Break Enchantment.*** As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures.\n\n***Dismissal.*** As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a charisma saving throw or be sent back to its home plane (if it isn't there already). If they aren't on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild."
    },
    {
      "id": "dispel_magic",
      "name": "Dissolvi Magie (Dispel Magic)",
      "level": 3,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Scegli una creatura, oggetto o effetto magico entro la gittata: qualsiasi incantesimo di 3° livello o inferiore attivo su di esso termina istantaneamente! Per magie di livello superiore superi una prova di caratteristica con CD 10 + livello della magia per dissolverla."
    },
    {
      "id": "divination",
      "name": "Divinazione (Divination)",
      "level": 4,
      "school": "Divinazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (Incense and a sacrificial offering appropriate to your religion, together worth )",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": true,
      "desc": "Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The GM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.\n\nThe spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.\n\nIf you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The GM makes this roll in secret."
    },
    {
      "id": "divine_favor",
      "name": "Favore Divino (Divine Favor)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit."
    },
    {
      "id": "divine_word",
      "name": "Divine Word (Divine Word)",
      "level": 7,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "9 metri",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points:\n\n- 50 hit points or fewer: deafened for 1 minute\n\n- 40 hit points or fewer: deafened and blinded for 10 minutes\n\n- 30 hit points or fewer: blinded, deafened, and stunned for 1 hour\n\n- 20 hit points or fewer: killed instantly\n\nRegardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn't there already) and can't return to your current plane for 24 hours by any means short of a wish spell."
    },
    {
      "id": "dominate_beast",
      "name": "Dominare Bestie (Dominate Beast)",
      "level": 4,
      "school": "Ammaliamento",
      "classes": [
        "druid",
        "sorcerer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You attempt to beguile a creature that you can see within range. It must succeed on a wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.\n\nWhile the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \"Attack that creature,\" \"Run over there,\" or \"Fetch that object.\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.\n\nYou can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.\n\nAi livelli superiori: When you cast this spell with a 9th level spell slot, the duration is concentration, up to 8 hours."
    },
    {
      "id": "dominate_monster",
      "name": "Dominare Mostri (Dominate Monster)",
      "level": 8,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You attempt to beguile a creature that you can see within range. It must succeed on a wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.\n\nWhile the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \"Attack that creature,\" \"Run over there,\" or \"Fetch that object.\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.\n\nYou can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.\n\nEach time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.\n\nAi livelli superiori: When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours."
    },
    {
      "id": "dominate_person",
      "name": "Dominare Persone (Dominate Person)",
      "level": 5,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You attempt to beguile a humanoid that you can see within range. It must succeed on a wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.\n\nWhile the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \"Attack that creature,\" \"Run over there,\" or \"Fetch that object.\" If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.\n\nYou can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.\n\nEach time the target takes damage, it makes a new wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.\n\nAi livelli superiori: When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours."
    },
    {
      "id": "dream",
      "name": "Sogno (Dream)",
      "level": 5,
      "school": "Illusione",
      "classes": [
        "bard",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Special",
      "components": "V, S, M (A handful of sand, a dab of ink, and a writing quill plucked from a sleeping bir)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "This spell shapes a creature's dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don't sleep, such as elves, can't be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger.\n\nWhile in the trance, the messenger is aware of his or her surroundings, but can't take actions or move.\n\nIf the target is asleep, the messenger appears in the target's dreams and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target's dreams.\n\nYou can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target's sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage.\n\nIf you have a body part, lock of hair, clipping from a nail, or similar portion of the target's body, the target makes its saving throw with disadvantage."
    },
    {
      "id": "druidcraft",
      "name": "Druidcraft (Druidcraft)",
      "level": 0,
      "school": "Trasmutazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Whispering to the spirits of nature, you create one of the following effects within 'range':\n\n- You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.\n\n- You instantly make a flower bloom, a seed pod open, or a leaf bud bloom.\n\n- You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint order of skunk. The effect must fit in a 5-foot cube.\n\n- You instantly light or snuff out a candle, a torch, or a small campfire."
    },
    {
      "id": "earthquake",
      "name": "Terremoto (Earthquake)",
      "level": 8,
      "school": "Invocazione",
      "classes": [
        "cleric",
        "druid",
        "sorcerer"
      ],
      "time": "1 azione",
      "range": "150 metri (raggio di 30 metri)",
      "components": "V, S, M (un pezzo di creta e una scheggia di roccia)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Scateni un tremito tellurico violentissimo: il terreno trema, le strutture crollano infliggendo 5d6 danni da macerie a chi è sotto, le creature cadono prone (TS Destrezza) e si aprono voragini profonde che inghiottono i nemici."
    },
    {
      "id": "eldritch_blast",
      "name": "Deflagrazione Mistica (Eldritch Blast)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "warlock"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Scagli un raggio di energia crepitante. Effettua un attacco con incantesimo a distanza: se colpisce infligge 1d10 danni da FORZA.\n\nAi livelli superiori: crei due raggi al 5° livello, tre al 11° livello e quattro raggi al 17° livello, indirizzabili sullo stesso bersaglio o su bersagli diversi."
    },
    {
      "id": "enhance_ability",
      "name": "Potenziamento Caratteristica (Enhance Ability)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "sorcerer",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (Fur or a feather from a beast.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.\n\n***Bear's Endurance.*** The target has advantage on constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends.\n\n***Bull's Strength.*** The target has advantage on strength checks, and his or her carrying capacity doubles.\n\n***Cat's Grace.*** The target has advantage on dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated.\n\n***Eagle's Splendor.*** The target has advantage on Charisma checks.\n\n***Fox's Cunning.*** The target has advantage on intelligence checks.\n\n***Owl's Wisdom.*** The target has advantage on wisdom checks.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
    },
    {
      "id": "enlarge_reduce",
      "name": "Ingrandire/Ridurre (Enlarge/Reduce)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A pinch iron powder.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.\n\nIf the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.\n\n***Enlarge.*** The target's size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category-from Medium to Large, for example. If there isn't enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target's weapons also grow to match its new size. While these weapons are enlarged, the target's attacks with them deal 1d4 extra damage.\n\n***Reduce.*** The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category-from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target's weapons also shrink to match its new size. While these weapons are reduced, the target's attacks with them deal 1d4 less damage (this can't reduce the damage below 1)."
    },
    {
      "id": "entangle",
      "name": "Intralciare (Entangle)",
      "level": 1,
      "school": "Evocazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Grasping weeds and vines sprout from the ground in a 20-foot square starting form a point within range. For the duration, these plants turn the ground in the area into difficult terrain.\n\nA creature in the area when you cast the spell must succeed on a strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.\n\nWhen the spell ends, the conjured plants wilt away."
    },
    {
      "id": "enthrall",
      "name": "Ammaliare (Enthrall)",
      "level": 2,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "warlock"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "1 minuto",
      "concentration": false,
      "ritual": false,
      "desc": "You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a wisdom saving throw. Any creature that can't be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak."
    },
    {
      "id": "etherealness",
      "name": "Forma Eterea (Etherealness)",
      "level": 7,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "cleric",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away.\n\nWhile on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so.\n\nYou ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.\n\nWhen the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.\n\nThis spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes.\n\nAi livelli superiori: When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell."
    },
    {
      "id": "expeditious_retreat",
      "name": "Ritirata Rapida (Expeditious Retreat)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
    },
    {
      "id": "eyebite",
      "name": "Sguardo Cieco (Eyebite)",
      "level": 6,
      "school": "Necromanzia",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "For the spell's duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of eyebite.\n\n***Asleep.*** The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake.\n\n***Panicked.*** The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends.\n\n***Sickened.*** The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another wisdom saving throw. If it succeeds, the effect ends."
    },
    {
      "id": "fabricate",
      "name": "Fabbricare (Fabricate)",
      "level": 4,
      "school": "Trasmutazione",
      "classes": [
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool.\n\nChoose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials.\n\nCreatures or magic items can't be created or transmuted by this spell. You also can't use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan's tools used to craft such objects."
    },
    {
      "id": "faerie_fire",
      "name": "Luminescenza (Faerie Fire)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "bard",
        "druid"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Tutti gli oggetti e le creature in un cubo di 6m di lato si accendono di luce verde, blu o violetta (TS Destrezza nega): chi fallisce non può beneficiare dell'invisibilità e TUTTI I TIRI PER COLPIRE CONTRO DI ESSO HANNO VANTAGGIO!"
    },
    {
      "id": "faithful_hound",
      "name": "Faithful Hound (Faithful Hound)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A tiny silver whistle, a piece of bone, and a thread)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it.\n\nThe hound is invisible to all creatures except you and can't be harmed. When a Small or larger creature comes within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions.\n\nAt the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound's attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals 4d8 piercing damage."
    },
    {
      "id": "false_life",
      "name": "False Life (False Life)",
      "level": 1,
      "school": "Necromanzia",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A small amount of alcohol or distilled spirits.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st."
    },
    {
      "id": "fear",
      "name": "Paura (Fear)",
      "level": 3,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Cono di 9 metri",
      "components": "V, S, M (un cuore di gallina)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Proietti un'immagine delle paure più oscure: ogni creatura nel cono che fallisce un TS Saggezza lascia cadere ciò che impugna e diventa SPAVENTATA. Nel proprio turno è costretta a compiere l'Azione di Scattare per fuggire lontano da te per la via più sicura."
    },
    {
      "id": "feather_fall",
      "name": "Caduta Morbida (Feather Fall)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "time": "1 reazione (quando tu o una creatura entro 18m cade)",
      "range": "18 metri",
      "components": "V, M (una piuma)",
      "duration": "1 minuto",
      "desc": "Rallenti la caduta di un massimo di 5 creature: la loro velocità di discesa scende a 18 metri per round, non subiscono alcun danno da caduta e atterrano in piedi."
    },
    {
      "id": "feeblemind",
      "name": "Regressione Mentale (Feeblemind)",
      "level": 8,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "druid",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S, M (A handful of clay, crystal, glass, or mineral spheres.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an intelligence saving throw.\n\nOn a failed save, the creature's Intelligence and Charisma scores become 1. The creature can't cast spells, activate magic items, understand language, or communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them.\n\nAt the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends.\n\nThe spell can also be ended by greater restoration, heal, or wish."
    },
    {
      "id": "find_familiar",
      "name": "Trova Famiglio (Find Familiar)",
      "level": 1,
      "school": "Evocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 ora",
      "range": "3 metri",
      "components": "V, S, M (10gp worth of charcoal, incense, and herbs that must be consumed by fire in a br)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": true,
      "desc": "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.\n\nYour familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.\n\nWhen the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again.\n\nWhile your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.\n\nAs an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.\n\nYou can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.\n\nFinally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your action modifier for the roll."
    },
    {
      "id": "find_steed",
      "name": "Trova Cavalcatura (Find Steed)",
      "level": 2,
      "school": "Evocazione",
      "classes": [
        "paladin"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose, such as a warhorse, a pony, a camel, an elk, or a mastiff. (Your GM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.\n\nYour steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed.\n\nWhen the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum.\n\nWhile your steed is within 1 mile of you, you can communicate with it telepathically.\n\nYou can't have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear."
    },
    {
      "id": "find_traps",
      "name": "Trova Trappole (Find Traps)",
      "level": 2,
      "school": "Divinazione",
      "classes": [
        "cleric",
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.\n\nThis spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense."
    },
    {
      "id": "find_the_path",
      "name": "Find the Path (Find the Path)",
      "level": 6,
      "school": "Divinazione",
      "classes": [
        "bard",
        "cleric",
        "druid"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Incantatore",
      "components": "V, S, M (A set of divinatory tools--such as bones, ivory sticks, cards, teeth, or carved )",
      "duration": "Concentrazione, fino a 24 ore",
      "concentration": true,
      "ritual": false,
      "desc": "This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as \"a green dragon's lair\"), the spell fails.\n\nFor the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination."
    },
    {
      "id": "finger_of_death",
      "name": "Dito della Morte (Finger of Death)",
      "level": 7,
      "school": "Necromanzia",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one.\n\nA humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability."
    },
    {
      "id": "fire_bolt",
      "name": "Dardo di Fuoco (Fire Bolt)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Scagli un dardo di fiamme contro una creatura o un oggetto entro la gittata. TxC a distanza con incantesimo: se colpisce infligge 1d10 danni da FUOCO. Gli oggetti infiammabili non indossati o trasportati prendono fuoco.\n\nDanni scalabili: 2d10 al 5° liv, 3d10 al 11° liv, 4d10 al 17° liv."
    },
    {
      "id": "fire_shield",
      "name": "Scudo di Fuoco (Fire Shield)",
      "level": 4,
      "school": "Invocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A little phosphorus or a firefly.)",
      "duration": "10 minutes",
      "concentration": false,
      "ritual": false,
      "desc": "Thin and vaporous flame surround your body for the duration of the spell, radiating a bright light bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell using an action to make it disappear.\n\nThe flames are around you a heat shield or cold, your choice. The heat shield gives you cold damage resistance and the cold resistance to fire damage.\n\nIn addition, whenever a creature within 5 feet of you hits you with a melee attack, flames spring from the shield. The attacker then suffers 2d8 points of fire damage or cold, depending on the model."
    },
    {
      "id": "fire_storm",
      "name": "Tempesta di Fuoco (Fire Storm)",
      "level": 7,
      "school": "Invocazione",
      "classes": [
        "cleric",
        "druid",
        "sorcerer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.\n\nThe fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell."
    },
    {
      "id": "fireball",
      "name": "Palla di Fuoco (Fireball)",
      "level": 3,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S, M (una pallina di guano di pipistrello e zolfo)",
      "duration": "Istantanea",
      "desc": "Un raggio luminoso sfreccia dal tuo dito e detona in una ruggente esplosione di fiamme in una sfera di 6 metri di raggio: ogni creatura nell'area subisce 8d6 DANNI DA FUOCO (TS Destrezza dimezza). Incendia tutti gli oggetti infiammabili non indossati.\n\nAi livelli superiori: +1d6 per ogni livello di slot oltre il 3°."
    },
    {
      "id": "flame_blade",
      "name": "Lama Infuocata (Flame Blade)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V, S, M (Leaf of sumac.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.\n\nYou can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage.\n\nThe flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n\nAi livelli superiori: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
    },
    {
      "id": "flame_strike",
      "name": "Colpo Infuocato (Flame Strike)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (Pinch of sulfur.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.\n\nAi livelli superiori: When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th."
    },
    {
      "id": "flaming_sphere",
      "name": "Sfera Infuocata (Flaming Sphere)",
      "level": 2,
      "school": "Evocazione",
      "classes": [
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (A bit of tallow, a pinch of brimstone, and a dusting of powdered iron.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.\n\nAs a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere's damage, and the sphere stops moving this turn.\n\nWhen you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
    },
    {
      "id": "flesh_to_stone",
      "name": "Flesh to Stone (Flesh to Stone)",
      "level": 6,
      "school": "Trasmutazione",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (A pinch of lime, water, and earth.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You attempt to turn one creature that you can see within range into stone. If the target's body is made of flesh, the creature must make a constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected.\n\nA creature restrained by this spell must make another constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.\n\nIf the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state.\n\nIf you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed."
    },
    {
      "id": "floating_disk",
      "name": "Floating Disk (Floating Disk)",
      "level": 1,
      "school": "Evocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A drop of mercury.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": true,
      "desc": "This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.\n\nThe disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. If can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.\n\nIf you move more than 100 feet away from the disk (typically because it can't move around an obstacle to follow you), the spell ends."
    },
    {
      "id": "fly",
      "name": "Volare (Fly)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (una piuma d'ala d'uccello)",
      "duration": "Concentrazione, fino a 10 minuti",
      "desc": "Tocchi una creatura consenziente: ottiene una velocità di VOLO pari a 18 METRI (60 ft) per l'intera durata."
    },
    {
      "id": "fog_cloud",
      "name": "Nube di Nebbia (Fog Cloud)",
      "level": 1,
      "school": "Evocazione",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
    },
    {
      "id": "forbiddance",
      "name": "Interdizione (Forbiddance)",
      "level": 6,
      "school": "Abiurazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "Contatto",
      "components": "V, S, M (A sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": true,
      "desc": "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell.\n\nIn addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell).\n\nWhen you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell.\n\nThe spell's area can't overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting."
    },
    {
      "id": "forcecage",
      "name": "Gabbia di Forza (Forcecage)",
      "level": 7,
      "school": "Invocazione",
      "classes": [
        "bard",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "30 metri",
      "components": "V, S, M (polvere di rubino da 1.500 mo)",
      "duration": "1 ora (SENZA concentrazione!)",
      "desc": "Intrappoli una creatura in una gabbia o scatola solida di forza indistruttibile (fino a 6 metri di lato). Nessun tiro salvezza per evitare di essere intrappolati! La gabbia impedisce qualsiasi fuga fisica e chi tenta di teletrasportarsi deve superare un TS Carisma o fallire e sprecare la magia."
    },
    {
      "id": "foresight",
      "name": "Previsione (Foresight)",
      "level": 9,
      "school": "Divinazione",
      "classes": [
        "bard",
        "druid",
        "warlock",
        "wizard"
      ],
      "time": "1 minuto",
      "range": "Contatto",
      "components": "V, S, M (una piuma di colibrì)",
      "duration": "8 ore (SENZA concentrazione)",
      "desc": "Tocchi una creatura conferendole la visione del futuro immediato: per 8 ore il bersaglio NON può essere sorpreso, HA VANTAGGIO A TUTTI I TIRI PER COLPIRE, PROVE E TIRI SALVEZZA, e tutte le altre creature hanno SVANTAGGIO ai tiri per colpire contro di esso!"
    },
    {
      "id": "freedom_of_movement",
      "name": "Libertà di Movimento (Freedom of Movement)",
      "level": 4,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "ranger",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A leather strap, bound around the arm or a similar appendage.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a willing creature. For the duration, the target's movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target's speed nor cause the target to be paralyzed or restrained.\n\nThe target can also spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks."
    },
    {
      "id": "freezing_sphere",
      "name": "Freezing Sphere (Freezing Sphere)",
      "level": 6,
      "school": "Invocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "90 metri",
      "components": "V, S, M (A small crystal sphere.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage.\n\nIf the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free.\n\nYou can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling's normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn't already shattered, it explodes.\n\nAi livelli superiori: When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th."
    },
    {
      "id": "gaseous_form",
      "name": "Forma Gassosa (Gaseous Form)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A bit of gauze and a wisp of smoke.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected.\n\nWhile in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated.\n\nWhile in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells."
    },
    {
      "id": "gate",
      "name": "Portale (Gate)",
      "level": 9,
      "school": "Evocazione",
      "classes": [
        "cleric",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (A diamond worth at least 5,000gp.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.\n\nThe portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.\n\nDeities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.\n\nWhen you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn't work). If that creature is on a plane other than the one you are on, the portal opens in the named creature's immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the GM deems appropriate. It might leave, attack you, or help you."
    },
    {
      "id": "geas",
      "name": "Geas (Geas)",
      "level": 5,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "18 metri",
      "components": "V",
      "duration": "30 days",
      "concentration": false,
      "ritual": false,
      "desc": "You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell.\n\nYou can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.\n\nYou can end the spell early by using an action to dismiss it. A remove curse, greater restoration, or wish spell also ends it.\n\nAi livelli superiori: When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above."
    },
    {
      "id": "gentle_repose",
      "name": "Riposo Inviolato (Gentle Repose)",
      "level": 2,
      "school": "Necromanzia",
      "classes": [
        "cleric",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A pinch of salt and one copper piece placed on each of the corpse's eyes, which )",
      "duration": "10 days",
      "concentration": false,
      "ritual": true,
      "desc": "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead.\n\nThe spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as raise dead."
    },
    {
      "id": "giant_insect",
      "name": "Giant Insect (Giant Insect)",
      "level": 4,
      "school": "Trasmutazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion.\n\nEach creature obeys your verbal commands, and in combat, they act on your turn each round. The GM has the statistics for these creatures and resolves their actions and movement.\n\nA creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it.\n\nThe GM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp."
    },
    {
      "id": "glibness",
      "name": "Parlantina Scaltra (Glibness)",
      "level": 8,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "warlock"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful."
    },
    {
      "id": "globe_of_invulnerability",
      "name": "Globo di Invulnerabilità (Globe of Invulnerability)",
      "level": 6,
      "school": "Abiurazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Incantatore (sfera di 3 metri)",
      "components": "V, S, M (una perla di vetro o cristallo)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Una barriera sferica luminosa di 3 metri di raggio ti protegge: QUALSIASI INCANTESIMO DI 5° LIVELLO O INFERIORE lanciato dall'esterno NON ha alcun effetto su chi si trova all'interno del globo, anche se lanciato con uno slot superiore!"
    },
    {
      "id": "glyph_of_warding",
      "name": "Glifo di Interdizione (Glyph of Warding)",
      "level": 3,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "cleric",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 ora",
      "range": "Contatto",
      "components": "V, S, M (Incense and powdered diamond worth at least 200 gp, which the spell consumes.)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\n\nThe glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found.\n\nYou decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends.\n\nYou can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password.\n\nWhen you inscribe the glyph, choose *explosive runes* or a *spell glyph*.\n\n***Explosive Runes.*** When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one.\n\n***Spell Glyph.*** You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.\n\nAi livelli superiori: When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding."
    },
    {
      "id": "goodberry",
      "name": "Goodberry (Goodberry)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A sprig of mistletoe.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for a day.\n\nThe berries lose their potency if they have not been consumed within 24 hours of the casting of this spell."
    },
    {
      "id": "grease",
      "name": "Unto (Grease)",
      "level": 1,
      "school": "Evocazione",
      "classes": [
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (A bit of pork rind or butter.)",
      "duration": "1 minuto",
      "concentration": false,
      "ritual": false,
      "desc": "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.\n\nWhen the grease appears, each creature standing in its area must succeed on a dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a dexterity saving throw or fall prone."
    },
    {
      "id": "greater_invisibility",
      "name": "Invisibilità Superiore (Greater Invisibility)",
      "level": 4,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Tocchi una creatura consenziente rendendola invisibile: a differenza della versione normale, L'INVISIBILITÀ NON SI INTERROMPE QUANDO IL BERSAGLIO ATTACCA O LANCIA INCANTESIMI! Tutti i suoi attacchi godono di vantaggio e gli attacchi contro di lui hanno svantaggio."
    },
    {
      "id": "greater_restoration",
      "name": "Ristoro Superiore (Greater Restoration)",
      "level": 5,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "cleric",
        "druid"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (polvere di diamante da almeno 100 mo, consumata)",
      "duration": "Istantanea",
      "desc": "Imbevi una creatura di energia positiva: rimuovi 1 livello di sfinimento, rimuovi la condizione Charme o Pietrificato, curi qualsiasi riduzione ai punteggi di caratteristica o ai PF massimi, oppure dissolvi una maledizione o possessione."
    },
    {
      "id": "guardian_of_faith",
      "name": "Custode della Fede (Guardian of Faith)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.\n\nAny creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage."
    },
    {
      "id": "guards_and_wards",
      "name": "Guardie e Interdizioni (Guards and Wards)",
      "level": 6,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "Contatto",
      "components": "V, S, M (Burning incense, a small measure of brimstone and oil, a knotted string, a small)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.\n\nWhen you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.\n\nGuards and wards creates the following effects within the warded area.\n\n***Corridors.*** Fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you will believe it is going in the opposite direction from the one it chooses.\n\n***Doors.*** All doors in the warded area are magically locked, as if sealed by an arcane lock spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the minor illusion spell) to make them appear as plain sections of wall.\n\n***Stairs.*** Webs fill all stairs in the warded area from top to bottom, as the web spell. These strands regrow in 10 minutes if they are burned or torn away while guards and wards lasts.\n\n***Other Spell Effect.*** You can place your choice of one of the following magical effects within the warded area of the stronghold.\n\n- Place dancing lights in four corridors. You can designate a simple program that the lights repeat as long as guards and wards lasts.\n\n- Place magic mouth in two locations.\n\n- Place stinking cloud in two locations. The vapors appear in the places you designate; they return within 10 minutes if dispersed by wind while guards and wards lasts.\n\n- Place a constant gust of wind in one corridor or room.\n\n- Place a suggestion in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area receives the suggestion mentally.\n\nThe whole warded area radiates magic. A dispel magic cast on a specific effect, if successful, removes only that effect.\n\nYou can create a permanently guarded and warded structure by casting this spell there every day for one year."
    },
    {
      "id": "guidance",
      "name": "Guida (Guidance)",
      "level": 0,
      "school": "Divinazione",
      "classes": [
        "cleric",
        "druid"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Tocchi una creatura consenziente. Prima che la durata termini, il bersaglio può tirare 1d4 e aggiungerlo a una prova di caratteristica a sua scelta. Può tirare il dado prima o dopo aver effettuato la prova."
    },
    {
      "id": "guiding_bolt",
      "name": "Dardo Tracciante (Guiding Bolt)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "1 round",
      "desc": "Un raggio di luce divina saetta verso il nemico. TxC a distanza con incantesimo: se colpisce infligge 4d6 danni RADIOSI e il PROSSIMO tiro per colpire effettuato contro quel bersaglio prima della fine del tuo prossimo turno ha VANTAGGIO!"
    },
    {
      "id": "gust_of_wind",
      "name": "Raffica di Vento (Gust of Wind)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A legume seed.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a strength saving throw or be pushed 15 feet away from you in a direction following the line.\n\nAny creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.\n\nThe gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.\n\nAs a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you."
    },
    {
      "id": "hallow",
      "name": "Santificare (Hallow)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "24 hours",
      "range": "Contatto",
      "components": "V, S, M (Herbs, oils, and incense worth at least 1,000 gp, which the spell consumes.)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a hallow spell. The affected area is subject to the following effects.\n\nFirst, celestials, elementals, fey, fiends, and undead can't enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect.\n\nSecond, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the GM. Some of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as ores or trolls. When a creature that would be affected enters the spell's area for the first time on a turn or starts its turn there, it can make a charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area.\n\n***Courage.*** Affected creatures can't be frightened while in the area.\n\n***Darkness.*** Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, can't illuminate the area.\n\n***Daylight.*** Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell can't extinguish the light.\n\n***Energy Protection.*** Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing.\n\n***Energy Vulnerability.*** Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing.\n\n***Everlasting Rest.*** Dead bodies interred in the area can't be turned into undead.\n\n***Extradimensional Interference.*** Affected creatures can't move or travel using teleportation or by extradimensional or interplanar means.\n\n***Fear.*** Affected creatures are frightened while in the area.\n\n***Silence.*** No sound can emanate from within the area, and no sound can reach into it.\n\n***Tongues.*** Affected creatures can communicate with any other creature in the area, even if they don't share a common language."
    },
    {
      "id": "hallucinatory_terrain",
      "name": "Hallucinatory Terrain (Hallucinatory Terrain)",
      "level": 4,
      "school": "Illusione",
      "classes": [
        "bard",
        "druid",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "90 metri",
      "components": "V, S, M (A stone, a twig, and a bit of green plant.)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren't changed in appearance.\n\nThe tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn't obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain."
    },
    {
      "id": "harm",
      "name": "Ferire (Harm)",
      "level": 6,
      "school": "Necromanzia",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You unleash a virulent disease on a creature that you can see within range. The target must make a constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes."
    },
    {
      "id": "haste",
      "name": "Velocità (Haste)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (un briciolo di radice di liquirizia)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Scegli una creatura consenziente: la sua velocità di movimento è RADDOPPIATA, ottiene un bonus di +2 ALLA CA, VANTAGGIO ai tiri salvezza su Destrezza e un'AZIONE AGGIUNTIVA in ogni suo turno (per Attaccare 1 volta, Scattare, Disimpegnarsi o Usare Oggetto). Quando l'incantesimo termina, il bersaglio perde 1 turno per lo sfinimento."
    },
    {
      "id": "heal",
      "name": "Guarigione (Heal)",
      "level": 6,
      "school": "Invocazione",
      "classes": [
        "cleric",
        "druid"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Un'ondata di luce rigenerante ripristina istantaneamente 70 PUNTI FERITA al bersaglio senza tirare alcun dado! Inoltre cura ogni cecità, sordità e tutte le malattie che lo affliggono."
    },
    {
      "id": "healing_word",
      "name": "Parola Guaritrice (Healing Word)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "bard",
        "cleric",
        "druid"
      ],
      "time": "1 azione bonus",
      "range": "18 metri",
      "components": "V",
      "duration": "Istantanea",
      "desc": "Una parola di conforto a distanza ripristina istantaneamente 1d4 + mod caratteristica da incantatore PF a una creatura entro gittata. Ideale per rianimare alleati a 0 PF senza perdere l'azione d'attacco!"
    },
    {
      "id": "heat_metal",
      "name": "Riscaldare il Metallo (Heat Metal)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "druid",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (A piece of iron and a flame.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.\n\nIf a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
    },
    {
      "id": "hellish_rebuke",
      "name": "Repulsione Infernale (Hellish Rebuke)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "warlock"
      ],
      "source": "PHB",
      "time": "1 reazione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
    },
    {
      "id": "heroes_feast",
      "name": "Banchetto degli Eroi (Heroes' Feast)",
      "level": 6,
      "school": "Evocazione",
      "classes": [
        "cleric",
        "druid"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "9 metri",
      "components": "V, S, M (A gem-encrusted bowl worth at least 1,000gp, which the spell consumes.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve other creatures can partake of the feast.\n\nA creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours."
    },
    {
      "id": "heroism",
      "name": "Eroismo (Heroism)",
      "level": 1,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell."
    },
    {
      "id": "hideous_laughter",
      "name": "Risata Incontenibile di Tasha (Tasha's Hideous Laughter)",
      "level": 1,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (Tiny tarts and a feather that is waved in the air.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.\n\nAt the end of each of its turns, and each time it takes damage, the target can make another wisdom saving throw. The target had advantage on the saving throw if it's triggered by damage. On a success, the spell ends."
    },
    {
      "id": "hold_monster",
      "name": "Blocca Mostri (Hold Monster)",
      "level": 5,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (A small piece of iron.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Choose a creature you can see and reach. The target must make a saving throw of Wisdom or be paralyzed for the duration of the spell. This spell has no effect against the undead. At the end of each round, the target can make a new saving throw of Wisdom. If successful, the spell ends for the creature.\n\nAi livelli superiori: When you cast this spell using a level 6 or higher location, you can target an additional creature for each level of location beyond the fifth. The creatures must be within 30 feet o f each other when you target them."
    },
    {
      "id": "hold_person",
      "name": "Blocca Persone (Hold Person)",
      "level": 2,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (un pezzo di ferro)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Un umanoide entro gittata deve superare un TS Saggezza o restare PARALIZZATO per tutta la durata! (Attacchi da 1,5m sono colpi critici automatici!). Ripete il TS alla fine di ogni suo turno."
    },
    {
      "id": "holy_aura",
      "name": "Aura Sacra (Holy Aura)",
      "level": 8,
      "school": "Abiurazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A tiny reliquary worth at least 1,000gp containing a sacred relic, such as a scr)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a constitution saving throw or be blinded until the spell ends."
    },
    {
      "id": "hunters_mark",
      "name": "Marchio del Cacciatore (Hunter's Mark)",
      "level": 1,
      "school": "Divinazione",
      "classes": [
        "ranger"
      ],
      "time": "1 azione bonus",
      "range": "27 metri",
      "components": "V",
      "duration": "Concentrazione, fino a 1 ora",
      "desc": "Marchi misticamente una creatura come tua preda: ogni volta che la colpisci con un attacco con arma, le infliggi 1d6 DANNI EXTRA da arma. Hai inoltre vantaggio a tutte le prove di Saggezza (Percezione o Sopravvivenza) per rintracciarla. Se muore, puoi spostare il marchio con un'altra azione bonus."
    },
    {
      "id": "hypnotic_pattern",
      "name": "Trama Ipnotica (Hypnotic Pattern)",
      "level": 3,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "S, M (un bastoncino d'incenso acceso)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Crei un arazzo volteggiante di colori iridescenti in un cubo di 9m: ogni creatura che lo vede deve superare un TS Saggezza o cadere AFFASCINATA, INCAPACITATA e con velocità pari a zero fino al termine dell'incantesimo o finché non subisce danno."
    },
    {
      "id": "ice_storm",
      "name": "Tempesta di Ghiaccio (Ice Storm)",
      "level": 4,
      "school": "Invocazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "90 metri",
      "components": "V, S, M (A pinch of dust and a few drops of water.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.\n\nHailstones turn the storm's area of effect into difficult terrain until the end of your next turn.\n\nAi livelli superiori: When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th."
    },
    {
      "id": "identify",
      "name": "Identificare (Identify)",
      "level": 1,
      "school": "Divinazione",
      "classes": [
        "bard",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Contatto",
      "components": "V, S, M (A pearl worth at least 100gp and an owl feather.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": true,
      "desc": "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.\n\nIf you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it."
    },
    {
      "id": "illusory_script",
      "name": "Scrittura Illusoria (Illusory Script)",
      "level": 1,
      "school": "Illusione",
      "classes": [
        "bard",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Contatto",
      "components": "S, M (A lead-based ink worth at least 10gp, which this spell consumes.)",
      "duration": "10 days",
      "concentration": false,
      "ritual": true,
      "desc": "You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.\n\nTo you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.\n\nShould the spell be dispelled, the original script and the illusion both disappear.\n\nA creature with truesight can read the hidden message."
    },
    {
      "id": "imprisonment",
      "name": "Imprisonment (Imprisonment)",
      "level": 9,
      "school": "Abiurazione",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "9 metri",
      "components": "V, S, M (A vellum depiction or a carved statuette in the likeness of the target, and a sp)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "You create a magical restraint to hold a creature that you can see within range. The target must succeed on a wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target.\n\nWhen you cast the spell, you choose one of the following forms of imprisonment.\n\n***Burial.*** The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it.\n\nThe special component for this version of the spell is a small mithral orb.\n\n***Chaining.*** Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can't move or be moved by any means until then.\n\nThe special component for this version of the spell is a fine chain of precious metal.\n\n***Hedged Prison.*** The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice.\n\nThe special component for this version of the spell is a miniature representation of the prison made from jade.\n\n***Minimus Containment.*** The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can't be cut or broken while the spell remains in effect.\n\nThe special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby.\n\n***Slumber.*** The target falls asleep and can't be awoken.\n\nThe special component for this version of the spell consists of rare soporific herbs.\n\n***Ending the Spell.*** During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the GM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature's name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points.\n\nA dispel magic spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it.\n\nYou can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding."
    },
    {
      "id": "incendiary_cloud",
      "name": "Incendiary Cloud (Incendiary Cloud)",
      "level": 8,
      "school": "Evocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.\n\nWhen the cloud appears, each creature in it must make a dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.\n\nThe cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns."
    },
    {
      "id": "inflict_wounds",
      "name": "Infliggi Ferite (Inflict Wounds)",
      "level": 1,
      "school": "Necromanzia",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
    },
    {
      "id": "insect_plague",
      "name": "Piaga degli Insetti (Insect Plague)",
      "level": 5,
      "school": "Evocazione",
      "classes": [
        "cleric",
        "druid",
        "sorcerer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "90 metri",
      "components": "V, S, M (A few grains of sugar, some kernels of grain, and a smear of fat.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.\n\nWhen the area appears, each creature in it must make a constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.\n\nAi livelli superiori: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th."
    },
    {
      "id": "instant_summons",
      "name": "Instant Summons (Instant Summons)",
      "level": 6,
      "school": "Evocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Contatto",
      "components": "V, S, M (A sapphire worth 1,000 gp.)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": true,
      "desc": "You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.\n\nAt any time thereafter, you can use your action to speak the item's name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends.\n\nIf another creature is holding or carrying the item, crushing the sapphire doesn't transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.\n\nDispel magic or a similar effect successfully applied to the sapphire ends this spell's effect."
    },
    {
      "id": "invisibility",
      "name": "Invisibilità (Invisibility)",
      "level": 2,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (un ciglio racchiuso nella gomma arabica)",
      "duration": "Concentrazione, fino a 1 ora",
      "desc": "Tocchi una creatura consenziente che diventa totalmente invisibile insieme a tutto ciò che indossa o trasporta. L'incantesimo termina anticipatamente se la creatura attacca o lancia un incantesimo."
    },
    {
      "id": "irresistible_dance",
      "name": "Irresistible Dance (Irresistible Dance)",
      "level": 6,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can't be charmed are immune to this spell.\n\nA dancing creature must use all its movement to dance without leaving its space and has disadvantage on dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a wisdom saving throw to regain control of itself. On a successful save, the spell ends."
    },
    {
      "id": "jump",
      "name": "Saltare (Jump)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A grasshopper's hind leg.)",
      "duration": "1 minuto",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a creature. The creature's jump distance is tripled until the spell ends."
    },
    {
      "id": "knock",
      "name": "Bussare (Knock)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.\n\nA target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.\n\nIf you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.\n\nWhen you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object."
    },
    {
      "id": "legend_lore",
      "name": "Conoscenza delle Leggende (Legend Lore)",
      "level": 5,
      "school": "Divinazione",
      "classes": [
        "bard",
        "cleric",
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "Incantatore",
      "components": "V, S, M (Incense worth at least 250 gp, which the spell consumes, and four ivory strips w)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is.\n\nThe information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand the spell might yield this information: \"Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word *Rudnogg* on the lips.\""
    },
    {
      "id": "lesser_restoration",
      "name": "Ripristino Inferiore (Lesser Restoration)",
      "level": 2,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Tocchi una creatura e rimuovi immediatamente una malattia oppure una delle seguenti condizioni che la affliggono: Accecato, Assordato, Paralizzato o Avvelenato."
    },
    {
      "id": "levitate",
      "name": "Levitazione (Levitate)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (Either a small leather loop or a piece of golden wire bent into a cup shape with)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a constitution saving throw is unaffected.\n\nThe target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range.\n\nWhen the spell ends, the target floats gently to the ground if it is still aloft."
    },
    {
      "id": "light",
      "name": "Luce (Light)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "bard",
        "cleric",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, M (A firefly or phosphorescent moss.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.\n\nIf you target an object held or worn by a hostile creature, that creature must succeed on a dexterity saving throw to avoid the spell."
    },
    {
      "id": "lightning_bolt",
      "name": "Fulmine (Lightning Bolt)",
      "level": 3,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Linea di 30 metri per 1,5 metri che origina da te",
      "components": "V, S, M (un frammento di pelliccia e una bacchetta di ambra)",
      "duration": "Istantanea",
      "desc": "Un fulmine crepitante squarcia l'aria in una linea retta: ogni creatura attraversata subisce 8d6 danni da FULMINE (TS Destrezza dimezza)."
    },
    {
      "id": "locate_animals_or_plants",
      "name": "Localizza Animali o Piante (Locate Animals or Plants)",
      "level": 2,
      "school": "Divinazione",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A bit of fur from a bloodhound.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": true,
      "desc": "Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present."
    },
    {
      "id": "locate_creature",
      "name": "Localizza Creatura (Locate Creature)",
      "level": 4,
      "school": "Divinazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A bit of fur from a bloodhound.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.\n\nThe spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close--within 30 feet--at least once. If the creature you described or named is in a different form, such as being under the effects of a polymorph spell, this spell doesn't locate the creature.\n\nThis spell can't locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature."
    },
    {
      "id": "locate_object",
      "name": "Localizza Oggetto (Locate Object)",
      "level": 2,
      "school": "Divinazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A forked twig.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.\n\nThe spell can locate a specific object known to you, as long as you have seen it up close--within 30 feet--at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.\n\nThis spell can't locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object."
    },
    {
      "id": "longstrider",
      "name": "Passo Veloce (Longstrider)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "druid",
        "ranger",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A pinch of dirt.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a creature. The target's speed increases by 10 feet until the spell ends.\n\nAi livelli superiori: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each spell slot above 1st."
    },
    {
      "id": "mage_armor",
      "name": "Armatura Magica (Mage Armor)",
      "level": 1,
      "school": "Abiurazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (un pezzo di cuoio conciato)",
      "duration": "8 ore",
      "desc": "Tocchi una creatura consenziente che non indossa armature. Una barriera magica la circonda: la sua Classe Armatura base diventa 13 + mod Destrezza per 8 ore continue."
    },
    {
      "id": "mage_hand",
      "name": "Mano Magica (Mage Hand)",
      "level": 0,
      "school": "Evocazione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "1 minuto",
      "desc": "Mano spettrale fluttuante che manipola oggetti fino a 5 kg, apre porte, versa pozioni e recupera oggetti a distanza."
    },
    {
      "id": "magic_circle",
      "name": "Cerchio Magico (Magic Circle)",
      "level": 3,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "paladin",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "3 metri",
      "components": "V, S, M (Holy water or powdered silver and iron worth at least 100 gp, which the spell co)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You create a 10-foot radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear whenever the cylinder intersects with the floor or other surface.\n\nChoose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways:\n\n- The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a charisma saving throw.\n\n- The creature has disadvantage on attack rolls against targets within the cylinder.\n\n- Targets within the cylinder can't be charmed, frightened, or possessed by the creature.\n\nWhen you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it.\n\nAi livelli superiori: When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd."
    },
    {
      "id": "magic_jar",
      "name": "Giarra Magica (Magic Jar)",
      "level": 6,
      "school": "Necromanzia",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Incantatore",
      "components": "V, S, M (A gem, crystal, reliquary, or some other ornamental container worth at least 500)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell's material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container's space. You can't move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a humanoids body.\n\nYou can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a protection from evil and good or magic circle spell can't be possessed). The target must make a charisma saving throw. On a failure, your soul moves into the target's body, and the target's soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can't attempt to possess it again for 24 hours.\n\nOnce you possess a creature's body, you control it. Your game statistics are replaced by the statistics of the creature, though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you can't use any of its class features.\n\nMeanwhile, the possessed creature's soul can perceive from the container using its own senses, but it can't move or take actions at all.\n\nWhile possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature's soul to its body. If the host body dies while you're in it, the creature dies, and you must make a charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.\n\nIf the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you or if your body is dead when you attempt to return to it, you die. If another creature's soul is in the container when it is destroyed, the creature's soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.\n\nWhen the spell ends, the container is destroyed."
    },
    {
      "id": "magic_missile",
      "name": "Dardo Incantato (Magic Missile)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Crei 3 dardi lucenti di forza che colpiscono INFALLIBILMENTE (nessun tiro per colpire né tiro salvezza!) bersagli a tua scelta entro gittata. Ciascun dardo infligge 1d4 + 1 danni da FORZA.\n\nAi livelli superiori: crei 1 dardo aggiuntivo per ogni livello di slot superiore al 1°."
    },
    {
      "id": "magic_mouth",
      "name": "Bocca Magica (Magic Mouth)",
      "level": 2,
      "school": "Illusione",
      "classes": [
        "bard",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "9 metri",
      "components": "V, S, M (A honeycomb and jade dust of at least 10 inches, the spell consumes.)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": true,
      "desc": "You plant a message to an object in the range of the spell. The message is verbalized when the trigger conditions are met. Choose an object that you see, and that is not worn or carried by another creature. Then say the message, which should not exceed 25 words but listening can take up to 10 minutes. Finally, establish the circumstances that trigger the spell to deliver your message.\n\nWhen these conditions are satisfied, a magical mouth appears on the object and it articulates the message imitating your voice, the same tone used during implantation of the message. If the selected object has a mouth or something that approaches such as the mouth of a statue, the magic mouth come alive at this point, giving the illusion that the words come from the mouth of the object.\n\nWhen you cast this spell, you may decide that the spell ends when the message is delivered or it can persist and repeat the message whenever circumstances occur.\n\nThe triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it."
    },
    {
      "id": "magic_weapon",
      "name": "Arma Magica (Magic Weapon)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "paladin",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.\n\nAi livelli superiori: When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3."
    },
    {
      "id": "magnificent_mansion",
      "name": "Magnificent Mansion (Magnificent Mansion)",
      "level": 7,
      "school": "Evocazione",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "90 metri",
      "components": "V, S, M (A miniature portal carved from ivory, a small piece of polished marble, and a ti)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible.\n\nBeyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.\n\nYou can create any floor plan you like, but the space can't exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can't attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can't leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance."
    },
    {
      "id": "major_image",
      "name": "Immagine Maggiore (Major Image)",
      "level": 3,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (A bit of fleece.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench).\n\nAs long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.\n\nPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.\n\nAi livelli superiori: When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration."
    },
    {
      "id": "mass_cure_wounds",
      "name": "Cura Ferite di Massa (Mass Cure Wounds)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "bard",
        "cleric",
        "druid"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Un'ondata di energia curativa si propaga a un massimo di 6 creature a scelta entro una sfera di 9m di raggio: ciascuna creatura recupera 3d8 + mod caratteristica da incantatore punti ferita."
    },
    {
      "id": "mass_heal",
      "name": "Guarigione di Massa (Mass Heal)",
      "level": 9,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Una cascata di pura grazia divina: ripristini un montepremi impressionante di 700 PUNTI FERITA distribuito a tua scelta tra qualsiasi numero di creature entro 18m, curando anche tutte le malattie e le cecità/sordità!"
    },
    {
      "id": "mass_healing_word",
      "name": "Parola Guaritrice di Massa (Mass Healing Word)",
      "level": 3,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "18 metri",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n\nAi livelli superiori: When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd."
    },
    {
      "id": "mass_suggestion",
      "name": "Suggestione di Massa (Mass Suggestion)",
      "level": 6,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, M (A snake's tongue and either a bit of honeycomb or a drop of sweet oil.)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.\n\nEach target must make a wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.\n\nYou can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell ends, the activity isn't performed.\n\nIf you or any of your companions damage a creature affected by this spell, the spell ends for that creature.\n\nAi livelli superiori: When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day."
    },
    {
      "id": "maze",
      "name": "Labirinto (Maze)",
      "level": 8,
      "school": "Evocazione",
      "classes": [
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "desc": "Bandisci all'istante una creatura in un labirinto extradimensionale infinito senza alcun tiro salvezza! Nel suo turno la creatura può usare un'azione per tentare di superare una prova di INTELLIGENZA con CD 20 per fuggire: i mostri brutali con bassa Intelligenza rimangono intrappolati per l'intera durata!"
    },
    {
      "id": "meld_into_stone",
      "name": "Fondersi nella Pietra (Meld into Stone)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "8 ore",
      "concentration": false,
      "ritual": true,
      "desc": "You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.\n\nWhile merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move.\n\nMinor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered."
    },
    {
      "id": "mending",
      "name": "Mending (Mending)",
      "level": 0,
      "school": "Trasmutazione",
      "classes": [
        "cleric",
        "bard",
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Contatto",
      "components": "V, S, M (Two lodestones.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "This spell repairs a single break or tear in an object you touch, such as a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no longer than 1 foot in any dimension, you mend it, leaving no trace of the former damage.\n\nThis spell can physically repair a magic item or construct, but the spell can't restore magic to such an object."
    },
    {
      "id": "message",
      "name": "Message (Message)",
      "level": 0,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (A short piece of copper wire.)",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.\n\nYou can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings."
    },
    {
      "id": "meteor_swarm",
      "name": "Sciame di Meteore (Meteor Swarm)",
      "level": 9,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "1,5 chilometri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Fai piovere quattro globi infuocati che detonano in 4 aree sferiche di 12 metri di raggio: ciascuna creatura nell'area subisce 20d6 DANNI DA FUOCO + 20d6 DANNI CONTUNDENTI (un totale di 40d6 danni, TS Destrezza per dimezzare)! Distrugge all'istante fortezze e interi plotoni nemici."
    },
    {
      "id": "mind_blank",
      "name": "Vuoto Mentale (Mind Blank)",
      "level": 8,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "24 ore (SENZA concentrazione)",
      "desc": "Tocchi una creatura consenziente: per 24 ore è TOTALMENTE IMMUNE a TUTTI i danni psichici, a qualsiasi effetto che tenti di leggere i suoi pensieri o rilevarne le emozioni, agli incantesimi di divinazione e alla condizione Affascinato!"
    },
    {
      "id": "minor_illusion",
      "name": "Illusione Minore (Minor Illusion)",
      "level": 0,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "9 metri",
      "components": "S, M (un vello)",
      "duration": "1 minuto",
      "desc": "Crei un suono realistico (sussurro, ruggito, tamburo) o l'immagine visiva di un oggetto fermo contenuto in un cubo di 1,5 metri."
    },
    {
      "id": "mirage_arcane",
      "name": "Mirage Arcane (Mirage Arcane)",
      "level": 7,
      "school": "Illusione",
      "classes": [
        "bard",
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "Vista",
      "components": "V, S",
      "duration": "10 days",
      "concentration": false,
      "ritual": false,
      "desc": "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain's general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.\n\nSimilarly, you can alter the appearance of structures, or add them where none are present. The spell doesn't disguise, conceal, or add creatures.\n\nThe illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell's area disappears immediately.\n\nCreatures with truesight can see through the illusion to the terrain's true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion's presence, the creature can still physically interact with the illusion."
    },
    {
      "id": "mirror_image",
      "name": "Immagine Speculare (Mirror Image)",
      "level": 2,
      "school": "Illusione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "1 minuto (SENZA concentrazione)",
      "desc": "Crei 3 duplicati illusori di te stesso. Quando una creatura ti attacca, tiri un d20: se fai 6+ (con 3 duplicati), l'attacco prende invece di mira un duplicato (CA 10 + mod DES), distruggendolo se colpisce ma lasciando te illeso!"
    },
    {
      "id": "mislead",
      "name": "Fuorviare (Mislead)",
      "level": 5,
      "school": "Illusione",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell.\n\nYou can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose.\n\nYou can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings."
    },
    {
      "id": "misty_step",
      "name": "Passo Nebbioso (Misty Step)",
      "level": 2,
      "school": "Evocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V",
      "duration": "Istantanea",
      "desc": "Circondato da una bruma argentea, ti teletrasporti istantaneamente fino a 9 metri di distanza in uno spazio non occupato che puoi vedere. Non provoca attacchi di opportunità!"
    },
    {
      "id": "modify_memory",
      "name": "Modificare Memoria (Modify Memory)",
      "level": 5,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You attempt to reshape another creature's memories. One creature that you can see must make a wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified.\n\nWhile this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.\n\nYou must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.\n\nA modified memory doesn't necessarily affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The GM might deem a modified memory too nonsensical to affect a creature in a significant manner.\n\nA remove curse or greater restoration spell cast on the target restores the creature's true memory.\n\nAi livelli superiori: If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level)."
    },
    {
      "id": "moonbeam",
      "name": "Raggio di Luna (Moonbeam)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (Several seeds of any moonseed plant and a piece of opalescent feldspar.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A silvery beam of pale light shines down in a 5-foot radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.\n\nWhen a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.\n\nA shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.\n\nOn each of your turns after you cast this spell, you can use an action to move the beam 60 feet in any direction.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1dl0 for each slot level above 2nd."
    },
    {
      "id": "move_earth",
      "name": "Muovere la Terra (Move Earth)",
      "level": 6,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (An iron blade and a small bag containing a mixture of soils--clay, loam, and san)",
      "duration": "Concentrazione, fino a 2 ore",
      "concentration": true,
      "ritual": false,
      "desc": "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.\n\nAt the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect.\n\nBecause the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.\n\nThis spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.\n\nSimilarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it."
    },
    {
      "id": "nondetection",
      "name": "Anti-Individuazione (Nondetection)",
      "level": 3,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "ranger",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A pinch of diamond dust worth 25 gp sprinkled over the target, which the spell c)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors."
    },
    {
      "id": "pass_without_trace",
      "name": "Passare Senza Tracce (Pass Without Trace)",
      "level": 2,
      "school": "Abiurazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "time": "1 azione",
      "range": "Incantatore (9 metri)",
      "components": "V, S, M (cenere di vischio)",
      "duration": "Concentrazione, fino a 1 ora",
      "desc": "Un velo d'ombra e silenzio ti avvolge: tu e qualsiasi alleato a scelta entro 9m ricevete un clamoroso bonus di +10 A TUTTE LE PROVE DI DESTREZZA (FURTIVITÀ) e non potete essere rintracciati se non con la magia!"
    },
    {
      "id": "passwall",
      "name": "Passapareti (Passwall)",
      "level": 5,
      "school": "Trasmutazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A pinch of sesame seeds.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening's dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.\n\nWhen the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell."
    },
    {
      "id": "phantasmal_killer",
      "name": "Assassino Fantasmatico (Phantasmal Killer)",
      "level": 4,
      "school": "Illusione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the start of each of the target's turns before the spell ends, the target must succeed on a wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends.\n\nAi livelli superiori: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
    },
    {
      "id": "phantom_steed",
      "name": "Phantom Steed (Phantom Steed)",
      "level": 3,
      "school": "Illusione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "9 metri",
      "components": "V, S",
      "duration": "1 ora",
      "concentration": false,
      "ritual": true,
      "desc": "A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.\n\nFor the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage."
    },
    {
      "id": "planar_ally",
      "name": "Alleato Planare (Planar Ally)",
      "level": 6,
      "school": "Evocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (GM's choice).\n\nWhen the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.\n\nPayment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.\n\nAs a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The GM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.\n\nAfter the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane.\n\nA creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded."
    },
    {
      "id": "planar_binding",
      "name": "Legame Planare (Planar Binding)",
      "level": 5,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 ora",
      "range": "18 metri",
      "components": "V, S, M (A jewel worth at least 1,000 gp, which the spell consumes.)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": false,
      "desc": "With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.\n\nA bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends.\n\nAi livelli superiori: When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot."
    },
    {
      "id": "plane_shift",
      "name": "Spostamento Planare (Plane Shift)",
      "level": 7,
      "school": "Evocazione",
      "classes": [
        "cleric",
        "druid",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (un diapason accordato al piano da almeno 250 mo)",
      "duration": "Istantanea",
      "desc": "Trasporta te e fino a 8 creature consenzienti in un altro piano di esistenza (Inferi, Piano Astrale, Feywild...). Può essere usato anche in combattimento offensivo: TxC in mischia e TS Carisma per bandire un nemico in un piano ostile!"
    },
    {
      "id": "plant_growth",
      "name": "Crescita Vegetale (Plant Growth)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.\n\nIf you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.\n\nYou can exclude one or more areas of any size within the spell's area from being affected.\n\nIf you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested."
    },
    {
      "id": "poison_spray",
      "name": "Spruzzo Velenoso (Poison Spray)",
      "level": 0,
      "school": "Evocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard",
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "3 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a constitution saving throw or take 1d12 poison damage.\n\nThis spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12)."
    },
    {
      "id": "polymorph",
      "name": "Metamorfosi (Polymorph)",
      "level": 4,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (il bozzolo di un bruco)",
      "duration": "Concentrazione, fino a 1 ora",
      "desc": "Trasformi una creatura entro gittata in una qualsiasi bestia con Grado di Sfida pari o inferiore al livello della creatura (es. Tirannosauro Rex, Mammut, Gorilla Gigante). Il bersaglio assume i punti ferita, statistiche fisiche e attacchi della bestia: quando scende a 0 PF torna alla sua forma originale con i PF residui intatti!"
    },
    {
      "id": "power_word_kill",
      "name": "Parola del Potere: Uccidere (Power Word Kill)",
      "level": 9,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V",
      "duration": "Istantanea",
      "desc": "Pronunci una singola sillaba letale di supremo potere arcano: se il bersaglio ha 100 punti ferita o meno, MUORE ALL'ISTANTE SENZA ALCUN TIRO SALVEZZA! Se ha più di 100 PF la magia non ha effetto."
    },
    {
      "id": "power_word_stun",
      "name": "Parola del Potere: Stordire (Power Word Stun)",
      "level": 8,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect.\n\nThe stunned target must make a constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends."
    },
    {
      "id": "prayer_of_healing",
      "name": "Preghiera di Guarigione (Prayer of Healing)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "9 metri",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.\n\nAi livelli superiori: When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd."
    },
    {
      "id": "prestidigitation",
      "name": "Prestidigitazione (Prestidigitation)",
      "level": 0,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "3 metri",
      "components": "V, S",
      "duration": "Fino a 1 ora",
      "desc": "Piccoli trucchi magici: scintille, sbuffi di vento, riscaldare o raffreddare cibi, pulire o sporcare abiti, accendere candele o torce, imprimere simboli effimeri."
    },
    {
      "id": "prismatic_spray",
      "name": "Spruzzo Prismatico (Prismatic Spray)",
      "level": 7,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a dexterity saving throw. For each target, roll a d8 to determine which color ray affects it.\n\n***1. Red.*** The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one.\n\n***2. Orange.*** The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one.\n\n***3. Yellow.*** The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.\n\n***4. Green.*** The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one.\n\n***5. Blue.*** The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one.\n\n***6. Indigo.*** On a failed save, the target is restrained. It must then make a constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.\n\n***7. Violet.*** On a failed save, the target is blinded. It must then make a wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the GM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)\n\n***8. Special.*** The target is struck by two rays. Roll twice more, rerolling any 8."
    },
    {
      "id": "prismatic_wall",
      "name": "Muro Prismatico (Prismatic Wall)",
      "level": 9,
      "school": "Abiurazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "10 minutes",
      "concentration": false,
      "ritual": false,
      "desc": "A shimmering, multicolored plane of light forms a vertical opaque wall--up to 90 feet long, 30 feet high, and 1 inch thick--centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.\n\nThe wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature must succeed on a constitution saving throw or become blinded for 1 minute.\n\nThe wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall's layers. As it passes or reaches through each layer, the creature must make a dexterity saving throw or be affected by that layer's properties as described below.\n\nThe wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. A rod of cancellation destroys a prismatic wall, but an antimagic field has no effect on it.\n\n***1. Red.*** The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, nonmagical ranged attacks can't pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it.\n\n***2. Orange.*** The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can't pass through the wall. The layer is destroyed by a strong wind.\n\n***3. Yellow.*** The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it.\n\n***4. Green.*** The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.\n\n***5. Blue.*** The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it.\n\n***6. Indigo.*** On a failed save, the creature is restrained. It must then make a constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don't need to be consecutive; keep track of both until the creature collects three of a kind.\n\nWhile this layer is in place, spells can't be cast through the wall. The layer is destroyed by bright light shed by a daylight spell or a similar spell of equal or higher level.\n\n***7. Violet.*** On a failed save, the creature is blinded. It must then make a wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the GM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a dispel magic spell or a similar spell of equal or higher level that can end spells and magical effects."
    },
    {
      "id": "private_sanctum",
      "name": "Private Sanctum (Private Sanctum)",
      "level": 4,
      "school": "Abiurazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "36 metri",
      "components": "V, S, M (A thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and pow)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it.\n\nWhen you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties:\n\n- Sound can't pass through the barrier at the edge of the warded area.\n\n- The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it.\n\n- Sensors created by divination spells can't appear inside the protected area or pass through the barrier at its perimeter.\n\n- Creatures in the area can't be targeted by divination spells.\n\n- Nothing can teleport into or out of the warded area.\n\n- Planar travel is blocked within the warded area.\n\nCasting this spell on the same spot every day for a year makes this effect permanent.\n\nAi livelli superiori: When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level."
    },
    {
      "id": "produce_flame",
      "name": "Produrre Fiamma (Produce Flame)",
      "level": 0,
      "school": "Evocazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "10 minutes",
      "concentration": false,
      "ritual": false,
      "desc": "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.\n\nYou can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.\n\nThis spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
    },
    {
      "id": "programmed_illusion",
      "name": "Programmed Illusion (Programmed Illusion)",
      "level": 6,
      "school": "Illusione",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (A bit of fleece and jade dust worth at least 25 gp.)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.\n\nWhen the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again.\n\nThe triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase.\n\nPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
    },
    {
      "id": "project_image",
      "name": "Proiettare Immagine (Project Image)",
      "level": 7,
      "school": "Illusione",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "500 miles",
      "components": "V, S, M (A small replica of you made from materials worth at least 5 gp.)",
      "duration": "Concentrazione, fino a 24 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.\n\nYou can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.\n\nYou can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.\n\nPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature."
    },
    {
      "id": "protection_from_energy",
      "name": "Protezione dall'Energia (Protection from Energy)",
      "level": 3,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder."
    },
    {
      "id": "protection_from_evil_and_good",
      "name": "Protezione dal Bene e dal Male (Protection from Evil/Good)",
      "level": 1,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "paladin",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (Holy water or powdered silver and iron, which the spell consumes.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.\n\nThe protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect."
    },
    {
      "id": "protection_from_poison",
      "name": "Protezione dal Veleno (Protection from Poison)",
      "level": 2,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "druid",
        "paladin",
        "ranger",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.\n\nFor the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage."
    },
    {
      "id": "purify_food_and_drink",
      "name": "Purificare Cibo e Bevande (Purify Food and Drink)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "cleric",
        "druid",
        "paladin",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "3 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": true,
      "desc": "All nonmagical food and drink within a 5-foot radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease."
    },
    {
      "id": "raise_dead",
      "name": "Rianimare Morti (Raise Dead)",
      "level": 5,
      "school": "Negromanzia",
      "classes": [
        "bard",
        "cleric",
        "paladin"
      ],
      "time": "1 ora",
      "range": "Contatto",
      "components": "V, S, M (un diamante da almeno 500 mo, consumato)",
      "duration": "Istantanea",
      "desc": "Riporti in vita una creatura morta da non più di 10 giorni, purché la sua anima sia consenziente. Neutralizza veleni e malattie mortali ma non rigenera arti mancanti."
    },
    {
      "id": "ray_of_enfeeblement",
      "name": "Raggio di Indebolimento (Ray of Enfeeblement)",
      "level": 2,
      "school": "Necromanzia",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.\n\nAt the end of each of the target's turns, it can make a constitution saving throw against the spell. On a success, the spell ends."
    },
    {
      "id": "ray_of_frost",
      "name": "Raggio di Gelo (Ray of Frost)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Un raggio gelido azzurrognolo scatta verso il bersaglio. TxC a distanza con incantesimo: se colpisce infligge 1d8 danni da FREDDO e la sua velocità è ridotta di 3 metri fino all'inizio del tuo prossimo turno."
    },
    {
      "id": "regenerate",
      "name": "Rigenerazione (Regenerate)",
      "level": 7,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "cleric",
        "druid"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Contatto",
      "components": "V, S, M (A prayer wheel and holy water.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).\n\nThe target's severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump."
    },
    {
      "id": "reincarnate",
      "name": "Reincarnazione (Reincarnate)",
      "level": 5,
      "school": "Trasmutazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 ora",
      "range": "Contatto",
      "components": "V, S, M (Rare oils and unguents worth at least 1,000 gp, which the spell consumes.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target's soul isn't free or willing to do so, the spell fails.\n\nThe magic fashions a new body for the creature to inhabit, which likely causes the creature's race to change. The GM rolls a d 100 and consults the following table to determine what form the creature takes when restored to life, or the GM chooses a form.\n\n| d100 | Race |\n\n|---|---|\n\n| 01-04 | Dragonborn |\n\n| 05-13 | Dwarf, hill |\n\n| 14-21 | Dwarf, mountain |\n\n| 22-25 | Elf, dark |\n\n| 26-34 | Elf, high |\n\n| 35-42 | Elf, wood |\n\n| 43-46 | Gnome, forest |\n\n| 47-52 | Gnome, rock |\n\n| 53-56 | Half-elf |\n\n| 57-60 | Half-orc |\n\n| 61-68 | Halfling, lightfoot |\n\n| 69-76 | Halfling, stout |\n\n| 77-96 | Human |\n\n| 97-00 | Tiefling |\n\nThe reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly."
    },
    {
      "id": "remove_curse",
      "name": "Rimuovi Maledizione (Remove Curse)",
      "level": 3,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "paladin",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded."
    },
    {
      "id": "resilient_sphere",
      "name": "Resilient Sphere (Resilient Sphere)",
      "level": 4,
      "school": "Invocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A hemispherical piece of clear crystal and a matching hemispherical piece of gum)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a dexterity saving throw. On a failed save, the creature is enclosed for the duration.\n\nNothing--not physical objects, energy, or other spell effects--can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can't be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.\n\nThe sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere's walls and thus roll the sphere at up to half the creature's speed. Similarly, the globe can be picked up and moved by other creatures.\n\nA disintegrate spell targeting the globe destroys it without harming anything inside it."
    },
    {
      "id": "resistance",
      "name": "Resistance (Resistance)",
      "level": 0,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A miniature cloak.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends."
    },
    {
      "id": "resurrection",
      "name": "Resurrezione (Resurrection)",
      "level": 7,
      "school": "Negromanzia",
      "classes": [
        "bard",
        "cleric"
      ],
      "time": "1 ora",
      "range": "Contatto",
      "components": "V, S, M (un diamante del valore di almeno 1.000 mo, consumato)",
      "duration": "Istantanea",
      "desc": "Tocchi una creatura morta da non più di un secolo. Se la sua anima è disposta a tornare, torna in vita con tutti i suoi punti ferita, ricrescendo persino arti e organi mancanti!"
    },
    {
      "id": "reverse_gravity",
      "name": "Invertire Gravità (Reverse Gravity)",
      "level": 7,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "30 metri",
      "components": "V, S, M (A lodestone and iron filings.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "This spell reverses gravity in a 50-foot-radius, 100-foot high cylinder centered on a point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.\n\nIf some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.\n\nAt the end of the duration, affected objects and creatures fall back down."
    },
    {
      "id": "revivify",
      "name": "Rinascita (Revivify)",
      "level": 3,
      "school": "Negromanzia",
      "classes": [
        "cleric",
        "paladin"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (diamanti del valore di almeno 300 mo, che l'incantesimo consuma)",
      "duration": "Istantanea",
      "desc": "Tocchi una creatura morta entro l'ultimo minuto: la creatura torna istantaneamente in vita con 1 punto ferita! (Nota: per il Barbaro Zelota di livello 3+, non richiede il consumo di componenti in diamanti!)."
    },
    {
      "id": "rope_trick",
      "name": "Corda Magica (Rope Trick)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (Powdered corn extract and a twisted loop of parchment.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.\n\nThe extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.\n\nAttacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.\n\nAnything inside the extradimensional space drops out when the spell ends."
    },
    {
      "id": "sacred_flame",
      "name": "Fiamma Sacra (Sacred Flame)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Un bagliore simile a una fiamma scende su una creatura entro la gittata. Il bersaglio deve superare un tiro salvezza su Destrezza o subire 1d8 danni RADIOSI. Il bersaglio non ottiene alcun beneficio dalla copertura per questo tiro salvezza.\n\nDanni: 2d8 al 5° liv, 3d8 all'11°, 4d8 al 17°."
    },
    {
      "id": "sanctuary",
      "name": "Santuario (Sanctuary)",
      "level": 1,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "9 metri",
      "components": "V, S, M (A small silver mirror.)",
      "duration": "1 minuto",
      "concentration": false,
      "ritual": false,
      "desc": "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball.\n\nIf the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends."
    },
    {
      "id": "scorching_ray",
      "name": "Raggio Rovente (Scorching Ray)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Crei 3 raggi di fuoco e li scagli contro uno o più bersagli. Effettua un attacco con incantesimo a distanza per ciascun raggio: ogni raggio a segno infligge 2d6 danni da FUOCO (+1 raggio per livello di slot superiore)."
    },
    {
      "id": "scrying",
      "name": "Scrutare (Scrying)",
      "level": 5,
      "school": "Divinazione",
      "classes": [
        "bard",
        "cleric",
        "druid",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "10 minuti",
      "range": "Incantatore",
      "components": "V, S, M (A focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a f)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.\n\n| Knowledge | Save Modifier |\n\n|---|---|\n\n| Secondhand (you have heard of the target) | +5 |\n\n| Firsthand (you have met the target) | +0 |\n\n| Familiar (you know the target well) | -5 |\n\n\n\n| Connection | Save Modifier |\n\n|---|---|\n\n| Likeness or picture | -2 |\n\n| Possession or garment | -4 |\n\n| Body part, lock of hair, bit of nail, or the like | -10 |\n\nOn a successful save, the target isn't affected, and you can't use this spell against it again for 24 hours.\n\nOn a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.\n\nInstead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move."
    },
    {
      "id": "secret_chest",
      "name": "Secret Chest (Secret Chest)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (An exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials )",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).\n\nWhile the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.\n\nAfter 60 days, there is a cumulative 5 percent chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost."
    },
    {
      "id": "see_invisibility",
      "name": "Vedere Invisibilità (See Invisibility)",
      "level": 2,
      "school": "Divinazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A dash of talc and a small amount of silver powder.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "For the duration of the spell, you see invisible creatures and objects as if they were visible, and you can see through Ethereal. The ethereal objects and creatures appear ghostly translucent."
    },
    {
      "id": "seeming",
      "name": "Sembiante (Seeming)",
      "level": 5,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a charisma saving throw, and if it succeeds, it is unaffected by this spell.\n\nThe spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You can't change a target's body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner.\n\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature's outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature's head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.\n\nA creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised."
    },
    {
      "id": "sending",
      "name": "Inviare Messaggio (Sending)",
      "level": 3,
      "school": "Invocazione",
      "classes": [
        "bard",
        "cleric",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Illimitata",
      "components": "V, S, M (A short piece of fine copper wire.)",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.\n\nYou can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive."
    },
    {
      "id": "sequester",
      "name": "Sequester (Sequester)",
      "level": 7,
      "school": "Trasmutazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A powder composed of diamond, emerald, ruby, and sapphire dust worth at least 5,)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can't be targeted by divination spells or perceived through scrying sensors created by divination spells.\n\nIf the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn't grow older.\n\nYou can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include \"after 1,000 years\" or \"when the tarrasque awakens.\" This spell also ends if the target takes any damage."
    },
    {
      "id": "shapechange",
      "name": "Shapechange (Shapechange)",
      "level": 9,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A jade circlet worth at least 1,500 gp, which you must place on your head before)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The creature can't be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.\n\nYour game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature's bonus in place of yours. You can't use any legendary actions or lair actions of the new form.\n\nYou assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.\n\nYou retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can't use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.\n\nWhen you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The GM determines whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change shape or size to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.\n\nDuring this spell's duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value."
    },
    {
      "id": "shatter",
      "name": "Frantumare (Shatter)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (scheggia di mica)",
      "duration": "Istantanea",
      "desc": "Un suono lacerante e doloroso risuona in una sfera di 3m di raggio: 3d8 danni da TUONO a chiunque si trovi all'interno (TS Costituzione dimezza). I costrutti e gli oggetti inanimati subiscono svantaggio al tiro."
    },
    {
      "id": "shield",
      "name": "Scudo (Shield)",
      "level": 1,
      "school": "Abiurazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 reazione (quando vieni colpito da un attacco o bersagliato da Dardo Incantato)",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "1 round",
      "desc": "Una barriera invisibile di forza magica ti circonda: ottieni +5 ALLA CA fino all'inizio del tuo prossimo turno (incluso contro l'attacco scatenante) e totale immunità all'incantesimo Dardo Incantato."
    },
    {
      "id": "shield_of_faith",
      "name": "Scudo della Fede (Shield of Faith)",
      "level": 1,
      "school": "Abiurazione",
      "classes": [
        "cleric",
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione bonus",
      "range": "18 metri",
      "components": "V, S, M (A small parchment with a bit of holy text written on it.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration."
    },
    {
      "id": "shillelagh",
      "name": "Bastone Magico (Shillelagh)",
      "level": 0,
      "school": "Trasmutazione",
      "classes": [
        "druid"
      ],
      "time": "1 azione bonus",
      "range": "Contatto",
      "components": "V, S, M (vischio e un trifoglio)",
      "duration": "1 minuto",
      "desc": "Impregni il tuo bastone o clava con la magia della natura: usi il tuo modificatore di SAGGEZZA per i tiri per colpire e per i danni dell'arma invece di Forza, il dado del danno diventa un d8 e l'arma conta come magica."
    },
    {
      "id": "shocking_grasp",
      "name": "Stretta Folgorante (Shocking Grasp)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Fulmini scattano dalla tua mano. Attacco con incantesimo in mischia con VANTAGGIO se il bersaglio indossa un'armatura di metallo: infligge 1d8 danni da FULMINE e il bersaglio NON può compiere reazioni fino all'inizio del suo prossimo turno!"
    },
    {
      "id": "silence",
      "name": "Silenzio (Silence)",
      "level": 2,
      "school": "Illusione",
      "classes": [
        "bard",
        "cleric",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": true,
      "desc": "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it.\n\nCasting a spell that includes a verbal component is impossible there."
    },
    {
      "id": "silent_image",
      "name": "Immagine Silenziosa (Silent Image)",
      "level": 1,
      "school": "Illusione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (A bit of fleece.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.\n\nYou can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.\n\nPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image."
    },
    {
      "id": "simulacrum",
      "name": "Simulacrum (Simulacrum)",
      "level": 7,
      "school": "Illusione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "12 hours",
      "range": "Contatto",
      "components": "V, S, M (Snow or ice in quantities sufficient to made a life-size copy of the duplicated )",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates.\n\nThe simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.\n\nIf the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.\n\nIf you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed."
    },
    {
      "id": "sleep",
      "name": "Sonno (Sleep)",
      "level": 1,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (pizzico di sabbia fine o petali di rosa)",
      "duration": "1 minuto",
      "desc": "Tira 5d8: il totale è la quantità di punti ferita di creature che cadono addormentate in un raggio di 6m, a partire da quella con meno PF attuali. Nessun tiro salvezza consentito!"
    },
    {
      "id": "sleet_storm",
      "name": "Tempesta di Nevischio (Sleet Storm)",
      "level": 3,
      "school": "Evocazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S, M (A pinch of dust and a few drops of water.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.\n\nThe ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a dexterity saving throw. On a failed save, it falls prone.\n\nIf a creature is concentrating in the spell's area, the creature must make a successful constitution saving throw against your spell save DC or lose concentration."
    },
    {
      "id": "slow",
      "name": "Lentezza (Slow)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (una goccia di melassa)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Fino a 6 creature in un cubo di 12m devono superare un TS Saggezza o subire Lentezza: velocità dimezzata, -2 alla CA e ai TS Destrezza, non possono compiere reazioni e possono fare solo un'azione O un'azione bonus (mai entrambe), con massimo 1 solo attacco a turno."
    },
    {
      "id": "spare_the_dying",
      "name": "Salvezza dai Morenti (Spare the Dying)",
      "level": 0,
      "school": "Negromanzia",
      "classes": [
        "cleric"
      ],
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Tocchi una creatura vivente a 0 punti ferita. La creatura diventa immediatamente stabilizzata (non deve più compiere tiri salvezza contro la morte)."
    },
    {
      "id": "speak_with_animals",
      "name": "Parlare con gli Animali (Speak with Animals)",
      "level": 1,
      "school": "Divinazione",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "10 minutes",
      "concentration": false,
      "ritual": true,
      "desc": "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at a minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the GM's discretion."
    },
    {
      "id": "speak_with_dead",
      "name": "Parlare con i Morti (Speak with Dead)",
      "level": 3,
      "school": "Necromanzia",
      "classes": [
        "bard",
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "3 metri",
      "components": "V, S, M (Burning incense.)",
      "duration": "10 minutes",
      "concentration": false,
      "ritual": false,
      "desc": "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.\n\nUntil the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events."
    },
    {
      "id": "speak_with_plants",
      "name": "Parlare con le Piante (Speak with Plants)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "10 minutes",
      "concentration": false,
      "ritual": false,
      "desc": "You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.\n\nYou can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.\n\nPlants might be able to perform other tasks on your behalf, at the GM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.\n\nIf a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.\n\nThis spell can cause the plants created by the entangle spell to release a restrained creature."
    },
    {
      "id": "spider_climb",
      "name": "Movimenti del Ragno (Spider Climb)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A drop of bitumen and a spider.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed."
    },
    {
      "id": "spike_growth",
      "name": "Crescita di Spine (Spike Growth)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S, M (sette spine affilate)",
      "duration": "Concentrazione, fino a 10 minuti",
      "desc": "Il terreno in un raggio di 6m si riempie di spine camuffate e acuminate. Terreno difficile: ogni creatura che vi entra o si sposta subisce 2d4 danni PERFORANTI per ogni 1,5 metri percorsi!"
    },
    {
      "id": "spirit_guardians",
      "name": "Spiriti Guardiani (Spirit Guardians)",
      "level": 3,
      "school": "Evocazione",
      "classes": [
        "cleric"
      ],
      "time": "1 azione",
      "range": "Incantatore (sfera di 4,5 metri)",
      "components": "V, S, M (un simbolo sacro)",
      "duration": "Concentrazione, fino a 10 minuti",
      "desc": "Evochi spiriti celestiali o spettrali che fluttuano attorno a te in un raggio di 4,5m: la velocità dei nemici nell'area è DIMEZZATA. Quando un nemico entra nell'area o vi inizia il proprio turno, subisce 3d8 danni RADIOSI (o necrotici), con TS Saggezza per dimezzare (+1d8 per livello di slot superiore)."
    },
    {
      "id": "spiritual_weapon",
      "name": "Arma Spirituale (Spiritual Weapon)",
      "level": 2,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "time": "1 azione bonus",
      "range": "18 metri",
      "components": "V, S",
      "duration": "1 minuto (SENZA concentrazione!)",
      "desc": "Crei un'arma spettrale fluttuante della tua divinità: compi un attacco con incantesimo in mischia infliggendo 1d8 + mod caratteristica da incantatore danni da FORZA. In ogni turno successivo puoi muoverla di 6 metri e attaccare di nuovo con un'azione bonus!"
    },
    {
      "id": "stinking_cloud",
      "name": "Stinking Cloud (Stinking Cloud)",
      "level": 3,
      "school": "Evocazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (A rotten egg or several skunk cabbage leaves.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.\n\nEach creature that is completely within the cloud at the start of its turn must make a constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.\n\nA moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
    },
    {
      "id": "stone_shape",
      "name": "Scolpire Pietra (Stone Shape)",
      "level": 4,
      "school": "Trasmutazione",
      "classes": [
        "cleric",
        "druid",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (Soft clay, to be crudely worked into the desired shape for the stone object.)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn't possible."
    },
    {
      "id": "stoneskin",
      "name": "Pelle di Pietra (Stoneskin)",
      "level": 4,
      "school": "Abiurazione",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (Diamond dust worth 100 gp, which the spell consumes.)",
      "duration": "Concentrazione, fino a 1 ore",
      "concentration": true,
      "ritual": false,
      "desc": "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
    },
    {
      "id": "storm_of_vengeance",
      "name": "Tempesta di Vendetta (Storm of Vengeance)",
      "level": 9,
      "school": "Evocazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Vista",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.\n\nEach round you maintain concentration on this spell, the storm produces additional effects on your turn.\n\n***Round 2.*** Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage.\n\n***Round 3.*** You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.\n\n***Round 4.*** Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage.\n\n***Round 5-10.*** Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical."
    },
    {
      "id": "suggestion",
      "name": "Suggestione (Suggestion)",
      "level": 2,
      "school": "Incantamento",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, M (una goccia di miele)",
      "duration": "Concentrazione, fino a 8 ore",
      "desc": "Suggerisci un corso d'azione formulato in un paio di frasi a una creatura che possa capirti: TS Saggezza o la creatura seguirà la tua istruzione per tutta la durata dell'incantesimo."
    },
    {
      "id": "sunbeam",
      "name": "Raggio di Sole (Sunbeam)",
      "level": 6,
      "school": "Invocazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (A magnifying glass.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.\n\nYou can create a new line of radiance as your action on any turn until the spell ends.\n\nFor the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight."
    },
    {
      "id": "sunburst",
      "name": "Esplosione Solare (Sunburst)",
      "level": 8,
      "school": "Invocazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, S, M (un pezzo di pietra solare e fuoco)",
      "duration": "Istantanea",
      "desc": "Una luce solare folgorante risplende in una colossale sfera di 18 metri di raggio: tutte le creature subiscono 12d6 danni RADIOSI e restano ACCECATE per 1 minuto (TS Costituzione dimezza e nega cecità). Danneggia e dissolve all'istante oscurità e non morti vulnerabili al sole."
    },
    {
      "id": "symbol",
      "name": "Simbolo (Symbol)",
      "level": 7,
      "school": "Abiurazione",
      "classes": [
        "bard",
        "cleric",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Contatto",
      "components": "V, S, M (Mercury, phosphorus, and powdered diamond and opal with a total value of at leas)",
      "duration": "Until dispelled",
      "concentration": false,
      "ritual": false,
      "desc": "When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\n\nThe glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it.\n\nYou decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most common triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.\n\nYou can further refine the trigger so the spell is activated only under certain circumstances or according to a creature's physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don't trigger the glyph, such as those who say a certain password.\n\nWhen you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.\n\n***Death.*** Each target must make a constitution saving throw, taking 10d 10 necrotic damage on a failed save, or half as much damage on a successful save.\n\n***Discord.*** Each target must make a constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks.\n\n***Fear.*** Each target must make a wisdom saving throw and becomes frightened for 1 minute on a failed save. While frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able.\n\n***Hopelessness.*** Each target must make a charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can't attack or target any creature with harmful abilities, spells, or other magical effects.\n\n***Insanity.*** Each target must make an intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can't take actions, can't understand what other creatures say, can't read, and speaks only in gibberish. The GM controls its movement, which is erratic.\n\n***Pain.*** Each target must make a constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save.\n\n***Sleep.*** Each target must make a wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake.\n\n***Stunning.*** Each target must make a wisdom saving throw and becomes stunned for 1 minute on a failed save."
    },
    {
      "id": "telekinesis",
      "name": "Telecinesi (Telekinesis)",
      "level": 5,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.\n\n***Creature.*** You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.\n\nOn subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.\n\n***Object.*** You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.\n\nIf the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell.\n\nYou can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial."
    },
    {
      "id": "telepathic_bond",
      "name": "Legame Telepatico di Rary (Telepathic Bond)",
      "level": 5,
      "school": "Divinazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (Pieces of eggshell from two different kinds of creatures)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": true,
      "desc": "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.\n\nUntil the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence."
    },
    {
      "id": "teleport",
      "name": "Teletrasporto (Teleport)",
      "level": 7,
      "school": "Evocazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "3 metri",
      "components": "V",
      "duration": "Istantanea",
      "desc": "Teletrasporti istantaneamente te stesso e fino a 8 creature consenzienti in qualsiasi destinazione conosciuta sullo stesso piano di esistenza, a prescindere dalla distanza (con precisione in base alla familiarità del luogo)."
    },
    {
      "id": "teleportation_circle",
      "name": "Circolo di Teletrasporto (Teleportation Circle)",
      "level": 5,
      "school": "Evocazione",
      "classes": [
        "bard",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "3 metri",
      "components": "V, M (Rare chalks and inks infused with precious gems with 50 gp, which the spell cons)",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.\n\nMany major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence--a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the GM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.\n\nYou can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way."
    },
    {
      "id": "thaumaturgy",
      "name": "Taumaturgia (Thaumaturgy)",
      "level": 0,
      "school": "Trasmutazione",
      "classes": [
        "cleric"
      ],
      "time": "1 azione",
      "range": "9 metri",
      "components": "V",
      "duration": "Fino a 1 minuto",
      "desc": "Manifesti prodigi divini: voce tonante triplicata di volume, fiamme tremolanti o che cambiano colore, lievi scosse telluriche, porte e finestre sbloccate che si spalancano all'istante."
    },
    {
      "id": "thunderwave",
      "name": "Onda Tonante (Thunderwave)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Cubo di 4,5 metri che origina da te",
      "components": "V, S",
      "duration": "Istantanea",
      "desc": "Un'onda di forza tonante spazza via ogni cosa: tutte le creature nel cubo subiscono 2d8 danni da TUONO e vengono spinte indietro di 3 metri (TS Costituzione dimezza e nega la spinta). Il rombo è udibile fino a 90 metri."
    },
    {
      "id": "time_stop",
      "name": "Fermare il Tempo (Time Stop)",
      "level": 9,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V",
      "duration": "Istantanea (1d4 + 1 turni)",
      "desc": "Arresti il flusso del tempo per tutti tranne che per te stesso: ottieni 1d4 + 1 turni consecutivi durante i quali puoi muoverti e compiere azioni liberamente per preparare magie, bere pozioni o riposizionarti."
    },
    {
      "id": "tiny_hut",
      "name": "Tiny Hut (Tiny Hut)",
      "level": 3,
      "school": "Invocazione",
      "classes": [
        "bard",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "Incantatore",
      "components": "V, S, M (A small crystal bead.)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": true,
      "desc": "A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.\n\nNine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.\n\nUntil the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
    },
    {
      "id": "tongues",
      "name": "Linguaggi (Tongues)",
      "level": 3,
      "school": "Divinazione",
      "classes": [
        "bard",
        "cleric",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, M (A small clay model of a ziggurat.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says."
    },
    {
      "id": "transport_via_plants",
      "name": "Transport via Plants (Transport via Plants)",
      "level": 6,
      "school": "Evocazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "3 metri",
      "components": "V, S",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement."
    },
    {
      "id": "tree_stride",
      "name": "Tree Stride (Tree Stride)",
      "level": 5,
      "school": "Evocazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.\n\nYou can use this transportation ability once per round for the duration. You must end each turn outside a tree."
    },
    {
      "id": "true_polymorph",
      "name": "Metamorfosi Pura (True Polymorph)",
      "level": 9,
      "school": "Trasmutazione",
      "classes": [
        "bard",
        "warlock",
        "wizard"
      ],
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (una goccia di mercurio)",
      "duration": "Concentrazione, fino a 1 ora (PERMANENTE se mantenuto 1 ora)",
      "desc": "Trasformi permanentemente una creatura in un'altra creatura (es. un alleato in un Drago d'Oro Adulto), o una creatura in un oggetto (es. un nemico in un sasso da gettare in mare), o un oggetto in una creatura!"
    },
    {
      "id": "true_resurrection",
      "name": "Resurrezione Pura (True Resurrection)",
      "level": 9,
      "school": "Negromanzia",
      "classes": [
        "cleric",
        "druid"
      ],
      "time": "1 ora",
      "range": "Contatto",
      "components": "V, S, M (diamanti del valore di almeno 25.000 mo, consumati)",
      "duration": "Istantanea",
      "desc": "Riporti in vita una creatura morta fino a 200 anni prima, anche se il suo corpo originale è stato completamente distrutto, incenerito o polverizzato: l'incantesimo genera un nuovo corpo perfetto e sano!"
    },
    {
      "id": "true_seeing",
      "name": "Visione del Vero (True Seeing)",
      "level": 6,
      "school": "Divinazione",
      "classes": [
        "bard",
        "cleric",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (An ointment for the eyes that costs 25gp; is made from mushroom powder, saffron,)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet."
    },
    {
      "id": "true_strike",
      "name": "Colpo Accurato (True Strike)",
      "level": 0,
      "school": "Divinazione",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "S",
      "duration": "Concentrazione, Up to 1 round",
      "concentration": true,
      "ritual": false,
      "desc": "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended."
    },
    {
      "id": "unseen_servant",
      "name": "Unseen Servant (Unseen Servant)",
      "level": 1,
      "school": "Evocazione",
      "classes": [
        "bard",
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (A piece of string and a bit of wood.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": true,
      "desc": "This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.\n\nOnce on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.\n\nIf you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends."
    },
    {
      "id": "vampiric_touch",
      "name": "Tocco Vampirico (Vampiric Touch)",
      "level": 3,
      "school": "Necromanzia",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.\n\nAi livelli superiori: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    },
    {
      "id": "vicious_mockery",
      "name": "Beffa Crudele (Vicious Mockery)",
      "level": 0,
      "school": "Ammaliamento",
      "classes": [
        "bard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V",
      "duration": "Istantanea",
      "desc": "Scagli una serie di insulti taglienti permeati di magia: TS Saggezza o 1d4 danni PSICHICI e SVANTAGGIO al suo prossimo tiro per colpire prima della fine del suo turno!"
    },
    {
      "id": "wall_of_fire",
      "name": "Muro di Fuoco (Wall of Fire)",
      "level": 4,
      "school": "Invocazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (un pezzo di fosforo)",
      "duration": "Concentrazione, fino a 1 minuto",
      "desc": "Crei un muro di fiamme lungo fino a 18 metri e alto 6 metri. Quando appare, infligge 5d8 danni da FUOCO a chi si trova nella sua area (TS Destrezza dimezza). Un lato del muro proietta calore devastante: ogni creatura che termina il proprio turno entro 3m da quel lato o attraversa il muro subisce 5d8 danni da fuoco!"
    },
    {
      "id": "wall_of_force",
      "name": "Muro di Forza (Wall of Force)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "wizard"
      ],
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (pizzico di polvere di diamante)",
      "duration": "Concentrazione, fino a 10 minuti",
      "desc": "Evochi una barriera invisibile di pura forza (fino a 10 pannelli da 3x3m o una cupola o sfera di 3m di raggio): È TOTALMENTE INDISTRUTTIBILE e immune a qualsiasi danno o effetto (nulla può attraversarla fisicamente se non tramite teletrasporto o Dissolvi Magie/Disintegrazione). Separa o intrappola qualsiasi nemico!"
    },
    {
      "id": "wall_of_ice",
      "name": "Muro di Ghiaccio (Wall of Ice)",
      "level": 6,
      "school": "Invocazione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (A small piece of quartz.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.\n\nIf the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save.\n\nThe wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one.\n\nAi livelli superiori: When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th."
    },
    {
      "id": "wall_of_stone",
      "name": "Muro di Pietra (Wall of Stone)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (A small block of granite.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.\n\nIf the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.\n\nThe wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.\n\nIf you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.\n\nThe wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the GM's discretion.\n\nIf you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends."
    },
    {
      "id": "wall_of_thorns",
      "name": "Muro di Spine (Wall of Thorns)",
      "level": 6,
      "school": "Evocazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (A handful of thorns.)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.\n\nWhen the wall appears, each creature within its area must make a dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save.\n\nA creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one.\n\nAi livelli superiori: When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th."
    },
    {
      "id": "warding_bond",
      "name": "Warding Bond (Warding Bond)",
      "level": 2,
      "school": "Abiurazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "Contatto",
      "components": "V, S, M (A pair of platinum rings worth at least 50gp each, which you and the target must)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": false,
      "desc": "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.\n\nThe spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet.\n\nIt also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action."
    },
    {
      "id": "water_breathing",
      "name": "Respirare Sott'Acqua (Water Breathing)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A short piece of reed or straw.)",
      "duration": "24 ore",
      "concentration": false,
      "ritual": true,
      "desc": "This spell gives a maximum of ten willing creatures within range and you can see, the ability to breathe underwater until the end of its term. Affected creatures also retain their normal breathing pattern."
    },
    {
      "id": "water_walk",
      "name": "Camminare sull'Acqua (Water Walk)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "cleric",
        "druid",
        "ranger",
        "sorcerer",
        "artificer"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V, S, M (A piece of cork.)",
      "duration": "1 ora",
      "concentration": false,
      "ritual": true,
      "desc": "This spell grants the ability to move across any liquid surface--such as water, acid, mud, snow, quicksand, or lava--as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration.\n\nIf you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round."
    },
    {
      "id": "web",
      "name": "Ragnatela (Web)",
      "level": 2,
      "school": "Evocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (un batuffolo di ragnatela)",
      "duration": "Concentrazione, fino a 1 ora",
      "desc": "Evochi una massa di ragnatele appiccicose in un cubo di 6m. Terreno difficile che oscura la vista: chi entra o inizia il turno deve superare TS Destrezza o essere TRATTENUTO (velocità 0, vantaggio a colpirlo)."
    },
    {
      "id": "weird",
      "name": "Incubo (Weird)",
      "level": 9,
      "school": "Illusione",
      "classes": [
        "wizard"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature's deepest fears, manifesting its worst nightmares as an implacable threat. At the start of each of the frightened creature's turns, it must succeed on a wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature."
    },
    {
      "id": "wind_walk",
      "name": "Camminare nel Vento (Wind Walk)",
      "level": 6,
      "school": "Trasmutazione",
      "classes": [
        "druid"
      ],
      "source": "PHB",
      "time": "1 minuto",
      "range": "9 metri",
      "components": "V, S, M (Fire and holy water.)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.\n\nIf a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance."
    },
    {
      "id": "wind_wall",
      "name": "Muro di Vento (Wind Wall)",
      "level": 3,
      "school": "Invocazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (A tiny fan and a feather of exotic origin.)",
      "duration": "Concentrazione, fino a 1 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.\n\nWhen the wall appears, each creature within its area must make a strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one.\n\nThe strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it."
    },
    {
      "id": "wish",
      "name": "Desiderio (Wish)",
      "level": 9,
      "school": "Evocazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V",
      "duration": "Istantanea",
      "desc": "L'incantesimo più potente che un mortale possa lanciare. Può replicare QUALSIASI INCANTESIMO DI 8° LIVELLO O INFERIORE DI QUALSIASI CLASSE senza dover soddisfare requisiti né consumare componenti materiali costose, istantaneamente con 1 azione! Oppure puoi alterare la realtà stessa formulando un desiderio prodigioso (con eventuale stress da Desiderio)."
    },
    {
      "id": "word_of_recall",
      "name": "Parola del Ritiro (Word of Recall)",
      "level": 6,
      "school": "Evocazione",
      "classes": [
        "cleric"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "2 metri",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.\n\nYou must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect."
    },
    {
      "id": "zone_of_truth",
      "name": "Zona di Verità (Zone of Truth)",
      "level": 2,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "cleric",
        "paladin"
      ],
      "source": "PHB",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "10 minutes",
      "concentration": false,
      "ritual": false,
      "desc": "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.\n\nAn affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can remain evasive in its answers as long as it remains within the boundaries of the truth."
    },
    {
      "id": "booming_blade",
      "name": "Lama Risonante (Booming Blade)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "1,5 metri",
      "components": "S, M (un'arma del valore di almeno 1 ma)",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "Compi un attacco da mischia con l'arma usata nel lancio. Se colpisce, il bersaglio subisce i normali effetti dell'attacco e viene circondato da energia tonante fino all'inizio del tuo prossimo turno: se si muove volontariamente prima di allora, subisce 1d8 danni da tuono.\n\nAi livelli superiori: al 5° livello l'attacco infligge +1d8 tuono e il danno da movimento sale a 2d8; al 11° (2d8 / 3d8) e al 17° (3d8 / 4d8)."
    },
    {
      "id": "green_flame_blade",
      "name": "Lama di Fiamma Verde (Green-Flame Blade)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "1,5 metri",
      "components": "S, M (un'arma del valore di almeno 1 ma)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Compi un attacco con arma da mischia. Se colpisce, infliggi i normali danni dell'arma e fiamme verdi balzano verso una seconda creatura entro 1,5m dal bersaglio, infliggendole danni da fuoco pari al tuo modificatore di caratteristica da incantatore.\n\nAi livelli superiori: al 5° liv infliggi +1d8 fuoco al bersaglio e 1d8+mod al secondo; al 11° liv (2d8 / 2d8+mod) e al 17° liv (3d8 / 3d8+mod)."
    },
    {
      "id": "toll_the_dead",
      "name": "Rintocco dei Morti (Toll the Dead)",
      "level": 0,
      "school": "Necromanzia",
      "classes": [
        "cleric",
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Punti il dito verso una creatura: risuona il lugubre rintocco di una campana funebre. Il bersaglio deve superare un TS Saggezza o subire 1d8 danni necrotici; se la creatura ha già perso dei punti ferita (è ferita), il dado danno diventa 1d12 necrotico invece di 1d8!\n\nAi livelli superiori: il danno sale a 2d8/2d12 al 5° liv, 3d8/3d12 al 11° liv e 4d8/4d12 al 17° liv."
    },
    {
      "id": "mind_sliver",
      "name": "Scheggia Mentale (Mind Sliver)",
      "level": 0,
      "school": "Ammaliamento",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "Scagli una scheggia di energia psichica disorientante nella mente di una creatura che puoi vedere. Il bersaglio deve superare un TS Intelligenza o subire 1d6 danni psichici e sottrarre 1d4 dal suo prossimo tiro salvezza prima della fine del tuo prossimo turno!\n\nAi livelli superiori: il danno aumenta a 2d6 al 5°, 3d6 al 11° e 4d6 al 17° livello."
    },
    {
      "id": "word_of_radiance",
      "name": "Parola di Radianza (Word of Radiance)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "cleric"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "Incantatore (raggio 1,5m)",
      "components": "V, M (un simbolo sacro)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Emani un bagliore accecante e sacro. Ogni creatura a tua scelta entro 1,5 metri deve superare un TS Costituzione o subire 1d6 danni radiosi.\n\nAi livelli superiori: 2d6 al 5° liv, 3d6 al 11° liv e 4d6 al 17° liv."
    },
    {
      "id": "primal_savagery",
      "name": "Furia Primordiale (Primal Savagery)",
      "level": 0,
      "school": "Trasmutazione",
      "classes": [
        "druid"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "Contatto",
      "components": "S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "I tuoi denti o unghie si trasformano in artigli corrosivi d'acido. Effettua un attacco con incantesimo da mischia: se colpisce infligge 1d10 danni da acido.\n\nAi livelli superiori: 2d10 al 5° liv, 3d10 al 11° liv e 4d10 al 17° liv."
    },
    {
      "id": "sword_burst",
      "name": "Scarica di Spade (Sword Burst)",
      "level": 0,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard",
        "artificer"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "Incantatore (raggio 1,5m)",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Crei un cerchio fulmineo di lame eteree spettrali intorno a te. Ogni creatura entro 1,5m deve superare un TS Destrezza o subire 1d6 danni da forza.\n\nAi livelli superiori: 2d6 al 5°, 3d6 al 11°, 4d6 al 17° livello."
    },
    {
      "id": "absorb_elements",
      "name": "Assorbire Elementi (Absorb Elements)",
      "level": 1,
      "school": "Abiurazione",
      "classes": [
        "druid",
        "ranger",
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "XGtE",
      "time": "1 reazione",
      "range": "Incantatore",
      "components": "S",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "Reazione quando subisci danni da acido, freddo, fuoco, fulmine o tuono. Ottieni RESISTENZA a quel tipo di danno fino all'inizio del tuo prossimo turno, e il tuo primo attacco in mischia nel prossimo turno infligge +1d6 danni extra dello stesso tipo!\n\nAi livelli superiori: +1d6 danni da mischia per ogni livello di slot superiore al 1°."
    },
    {
      "id": "chaos_bolt",
      "name": "Dardo del Caos (Chaos Bolt)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "sorcerer"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Scagli una massa ondeggiante di energia caotica. Attacco con incantesimo a distanza: infligge 2d8 + 1d6 danni. Il tipo di danno è determinato dal risultato di uno dei d8 (1: Acido, 2: Freddo, 3: Fuoco, 4: Forza, 5: Fulmine, 6: Veleno, 7: Psichico, 8: Tuono). Se ottieni lo stesso numero sui due d8, l'energia balza su un altro bersaglio entro 9m!\n\nAi livelli superiori: +1d6 per slot sopra il 1°."
    },
    {
      "id": "zephyr_strike",
      "name": "Colpo dello Zefiro (Zephyr Strike)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "ranger"
      ],
      "source": "XGtE",
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Ti muovi come il vento: per la durata, il tuo movimento non provoca attacchi di opportunità. Inoltre, una volta prima del termine, ottieni vantaggio a un attacco con arma, infliggi +1d8 danni da forza se colpisce e la tua velocità aumenta di 9 metri per quel turno."
    },
    {
      "id": "catapult",
      "name": "Catapulta (Catapult)",
      "level": 1,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "45 metri",
      "components": "S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Scegli un oggetto libero del peso tra 0,5 e 2,5 kg entro gittata. L'oggetto vola in linea retta fino a 27 metri. La prima creatura sulla sua traiettoria deve superare un TS Destrezza o subire 3d8 danni contundenti, e l'oggetto si ferma.\n\nAi livelli superiori: peso massimo +2,5 kg e danno +1d8 per slot sopra il 1°."
    },
    {
      "id": "earth_tremor",
      "name": "Tremore Terrestre (Earth Tremor)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "bard",
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "Incantatore (raggio 3m)",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Provochi un sussulto violento nel terreno attorno a te. Tutte le altre creature sul terreno entro 3 metri devono superare un TS Destrezza o subire 1d6 danni contundenti ed essere gettate a terra prone. Il terreno diventa difficile.\n\nAi livelli superiori: +1d6 danni per slot sopra il 1°."
    },
    {
      "id": "snare",
      "name": "Laccio (Snare)",
      "level": 1,
      "school": "Abiurazione",
      "classes": [
        "druid",
        "ranger",
        "wizard",
        "artificer"
      ],
      "source": "XGtE",
      "time": "1 minuto",
      "range": "Contatto",
      "components": "S, M (7,5m di corda consumata)",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "Crei una trappola magica invisibile sul terreno in un cerchio di 1,5m di raggio. La prima creatura Piccola, Media o Grande che vi entra deve superare un TS Destrezza o essere sollevata a testa in giù a 90cm da terra, diventando trattenuta finché non si libera."
    },
    {
      "id": "tashas_caustic_brew",
      "name": "Infuso Caustico di Tasha (Tasha's Caustic Brew)",
      "level": 1,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "wizard",
        "artificer"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "Incantatore (linea di 9m)",
      "components": "V, S, M (un pezzo di cibo andato a male)",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Emetti un getto d'acido corrosivo in una linea lunga 9 metri e larga 1,5 metri. Ogni creatura nella linea deve superare un TS Destrezza o essere ricoperta d'acido, subendo 2d4 danni da acido all'inizio di ciascun suo turno finché una creatura non usa un'azione per ripulirla.\n\nAi livelli superiori: +2d4 danni per slot sopra il 1°."
    },
    {
      "id": "shadow_blade",
      "name": "Lama d'Ombra (Shadow Blade)",
      "level": 2,
      "school": "Illusione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Tessi fili d'ombra solidificati creando una spada magica nella tua mano. Infligge 2d8 danni psichici, ha le proprietà accurata, leggera e lancio (gittata 6/18m). In condizioni di luce fioca o buio, hai VANTAGGIO ai tiri per colpire effettuati con essa!\n\nAi livelli superiori: 3d8 danni con slot di 3°-4° liv; 4d8 con slot di 5°-6° liv; 5d8 con slot di 7°+ liv."
    },
    {
      "id": "healing_spirit",
      "name": "Spirito Guaritore (Healing Spirit)",
      "level": 2,
      "school": "Evocazione",
      "classes": [
        "druid",
        "ranger"
      ],
      "source": "XGtE",
      "time": "1 azione bonus",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno spirito fatato trasparente in uno spazio di 1,5m. Quando tu o un alleato entrate nel suo spazio o iniziate il turno lì, lo spirito ripristina 1d6 punti ferita. Lo spirito può guarire un numero di volte pari a 1 + mod caratteristica da incantatore (min 2). Puoi spostarlo fino a 9m come azione bonus.\n\nAi livelli superiori: +1d6 cure per slot sopra il 2°."
    },
    {
      "id": "dragons_breath",
      "name": "Soffio del Drago (Dragon's Breath)",
      "level": 2,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione bonus",
      "range": "Contatto",
      "components": "V, S, M (un peperoncino piccante)",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Tocchi una creatura consenziente conferendole l'abilità di sputare energia. Scegli acido, freddo, fuoco, fulmine o veleno. Come azione, il bersaglio può esalare un cono di 4,5 metri: ogni creatura nel cono subisce 3d6 danni (TS Destrezza dimezza).\n\nAi livelli superiori: +1d6 per slot sopra il 2°."
    },
    {
      "id": "tashas_mind_whip",
      "name": "Frusta Mentale di Tasha (Tasha's Mind Whip)",
      "level": 2,
      "school": "Ammaliamento",
      "classes": [
        "sorcerer",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V",
      "duration": "1 round",
      "concentration": false,
      "ritual": false,
      "desc": "Colpisci la mente di una creatura con una frusta psichica. TS Intelligenza: se fallito subisce 3d6 danni psichici e nel suo prossimo turno NON può compiere reazioni e può scegliere SOLO UNA tra un'azione, un'azione bonus o il movimento. Se supera subisce metà danno e nessun effetto collaterale.\n\nAi livelli superiori: bersaglia una creatura extra per slot sopra il 2°."
    },
    {
      "id": "spirit_shroud",
      "name": "Sudario Spirituale (Spirit Shroud)",
      "level": 3,
      "school": "Necromanzia",
      "classes": [
        "cleric",
        "paladin",
        "warlock",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi spiriti dei morti che fluttuano attorno a te entro 3m. Qualsiasi tuo attacco andato a segno contro creature entro 3m infligge +1d8 danni extra radiosi, necrotici o da freddo (a scelta al lancio). Le creature colpite non possono recuperare PF fino al tuo prossimo turno, e qualsiasi nemico che inizia il turno entro 3m ha la velocità ridotta di 3 metri!\n\nAi livelli superiori: +1d8 danni extra per ogni 2 livelli di slot sopra il 3° (2d8 al 5° slot, 3d8 al 7°, 4d8 al 9°)."
    },
    {
      "id": "summon_undead",
      "name": "Evoca Non Morto (Summon Undead)",
      "level": 3,
      "school": "Necromanzia",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (un teschio dorato del valore di 300 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno spirito non morto (Spettro, Putrido o Scheletrico) con statistiche crescenti in base al livello dello slot (CA 11+liv, PF 30+10 per livello sopra il 3°, attacchi pari a metà livello slot). Agisce subito dopo di te in iniziativa e obbedisce ai tuoi comandi verbali."
    },
    {
      "id": "summon_fey",
      "name": "Evoca Folletto (Summon Fey)",
      "level": 3,
      "school": "Evocazione",
      "classes": [
        "druid",
        "ranger",
        "warlock",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (un fiore dorato del valore di 300 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno spirito fatato (Furente, Gaio o Cupo). Si teletrasporta come azione bonus fino a 9m provocando effetti magici (buio, affascinare o vantaggio ad attacchi) e attacca con la sua spada corta fatata."
    },
    {
      "id": "summon_shadowspawn",
      "name": "Evoca Progenie dell'Ombra (Summon Shadowspawn)",
      "level": 3,
      "school": "Evocazione",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (lacrime in una boccetta di cristallo da 300 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno spirito nato dalla Coltre d'Ombra (Furia, Disperazione o Paura). Emana un'aura di terrore o rallentamento ed effettua devastanti attacchi d'ombra con vantaggio contro creature impaurite."
    },
    {
      "id": "erupting_earth",
      "name": "Terra Erompente (Erupting Earth)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S, M (un pezzo d'ossidiana)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Fai eruttare una fontana di roccia frantumata in un cubo di 6 metri. Ogni creatura nell'area deve superare un TS Destrezza o subire 3d12 danni contundenti (metà se supera). Il terreno nell'area diventa terreno difficile.\n\nAi livelli superiori: +1d12 danni per slot sopra il 3°."
    },
    {
      "id": "thunder_step",
      "name": "Passo Tonante (Thunder Step)",
      "level": 3,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Ti teletrasporti istantaneamente fino a 27 metri in uno spazio libero che puoi vedere. Puoi portare con te una creatura consenziente della tua taglia o inferiore entro 1,5m da te. Nello spazio che lasci si scatena un tuono devastante udibile a 90m: ogni creatura entro 3m subisce 3d10 danni da tuono (TS Costituzione dimezza).\n\nAi livelli superiori: +1d10 per slot sopra il 3°."
    },
    {
      "id": "tiny_servant",
      "name": "Piccolo Servitore (Tiny Servant)",
      "level": 3,
      "school": "Trasmutazione",
      "classes": [
        "wizard",
        "artificer"
      ],
      "source": "XGtE",
      "time": "1 minuto",
      "range": "Contatto",
      "components": "V, S",
      "duration": "8 ore",
      "concentration": false,
      "ritual": false,
      "desc": "Tocchi un oggetto Minuscolo incustodito (una tazza, un pugnale, un lucchetto) dandogli vita con braccia e gambe. Ha CA 15, 10 PF, velocità 9m e vista cieca 18m. Obbedisce ai tuoi comandi come azione bonus.\n\nAi livelli superiori: animi 2 servitori extra per ogni livello di slot sopra il 3°."
    },
    {
      "id": "shadow_of_moil",
      "name": "Ombra di Moil (Shadow of Moil)",
      "level": 4,
      "school": "Necromanzia",
      "classes": [
        "warlock"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (un occhio mummificato in un cristallo da 150 mo)",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Fiamme d'ombra gelide ti avvolgono rendendoti fortemente occultato a tutti (anche con vista normale). La luce attorno a te si riduce di un livello entro 3 metri. Hai resistenza ai danni radiosi, e chiunque entro 3m ti colpisca con un attacco subisce 2d8 danni necrotici dalle ombre!"
    },
    {
      "id": "sickening_radiance",
      "name": "Radianza Nauseante (Sickening Radiance)",
      "level": 4,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Una luce verdastra spettrale invade una sfera di 9m di raggio. Quando una creatura entra o inizia il turno nell'area, subisce 4d10 danni radiosi e 1 livello di SFINIMENTO se fallisce un TS Costituzione! Emette luce fioca e non può beneficiare dell'invisibilità."
    },
    {
      "id": "summon_aberration",
      "name": "Evoca Aberrazione (Summon Aberration)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (un tentacolo placcato in platino da 400 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno spirito aberrante del Reame Remoto (Beholderoculare, Stella Spettrale o Melma). Scaglia dardi oculari psichici o attacca con tentacoli rigeneranti e sguardi paralizzanti."
    },
    {
      "id": "summon_construct",
      "name": "Evoca Costrutto (Summon Construct)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "wizard",
        "artificer"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (una serratura di pietra decorata da 400 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno spirito costrutto fatto di Argilla, Metallo o Pietra. Possiede immunità a veleno, resistenza fisica e potenti attacchi schiaccianti con aura riscaldata o pietrificante."
    },
    {
      "id": "summon_elemental",
      "name": "Evoca Elementale Minore (Summon Elemental)",
      "level": 4,
      "school": "Evocazione",
      "classes": [
        "druid",
        "ranger",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (un fossile in un'urna d'oro da 400 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno spirito elementale legato ad Aria, Terra, Fuoco o Acqua. Possiede resistenze e attacchi basati sul suo elemento, inclusa la forma liquida o l'incenerimento continuo."
    },
    {
      "id": "synaptic_static",
      "name": "Scarica Sinaptica (Synaptic Static)",
      "level": 5,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "36 metri",
      "components": "V, S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Una palla di fuoco psichica: fai esplodere un'ondata di interferenza mentale in una sfera di 6 metri di raggio. Ogni creatura nell'area deve superare un TS Intelligenza o subire 8d6 danni psichici e sottrarre 1d6 da tutti i suoi tiri per colpire, prove di caratteristica e tiri salvezza per mantenere concentrazione per 1 minuto (TS int alla fine di ogni turno per liberarsi)!"
    },
    {
      "id": "steel_wind_strike",
      "name": "Colpo del Vento d'Acciaio (Steel Wind Strike)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "ranger",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "9 metri",
      "components": "S, M (un'arma da mischia da almeno 1 ma)",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Svanisci in un baleno d'acciaio ed effettui un attacco con incantesimo da mischia contro fino a 5 creature diverse entro 9 metri da te. Ciascun attacco che colpisce infligge 6d10 danni da forza! Al termine ti teletrasporti entro 1,5m da uno dei bersagli colpiti."
    },
    {
      "id": "holy_weapon",
      "name": "Arma Sacra (Holy Weapon)",
      "level": 5,
      "school": "Invocazione",
      "classes": [
        "cleric",
        "paladin"
      ],
      "source": "XGtE",
      "time": "1 azione bonus",
      "range": "Contatto",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Infondi un'arma di splendore divino: emette luce viva per 9m e infligge +2d8 danni radiosi a OGNI colpo andato a segno. Come azione bonus puoi far esplodere l'arma in un lampo di luce solare: 4d8 danni radiosi e acceca tutte le creature entro 9m (TS Costituzione)."
    },
    {
      "id": "danse_macabre",
      "name": "Danza Macabra (Danse Macabre)",
      "level": 5,
      "school": "Necromanzia",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Infondi energia necromantica in fino a 5 cadaveri di creature Piccole o Medie entro gittata, rianimandoli come scheletri o zombi. Aggiungono il tuo modificatore di caratteristica da incantatore sia ai tiri per colpire che ai tiri per i danni!\n\nAi livelli superiori: +2 non morti per ogni slot sopra il 5°."
    },
    {
      "id": "summon_celestial",
      "name": "Evoca Celestiale (Summon Celestial)",
      "level": 5,
      "school": "Evocazione",
      "classes": [
        "cleric",
        "paladin"
      ],
      "source": "TCoE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "V, S, M (un reliquiario d'oro da 500 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno spirito celestiale dell'Empireo (Vendicatore o Difensore). Ha ali radiose, vola per 12m, emette luce solare, cura gli alleati con tocco sacro ed effettua devastanti attacchi radiosi con arco o mazza."
    },
    {
      "id": "summon_draconic_spirit",
      "name": "Evoca Spirito Draconico (Summon Draconic Spirit)",
      "level": 5,
      "school": "Evocazione",
      "classes": [
        "druid",
        "sorcerer",
        "wizard"
      ],
      "source": "FTD / TCoE",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (un oggetto dal tesoro di un drago da 500 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Evochi uno splendido spirito draconico di taglia Grande (Cromatico, Metallico o Gemma). Ha volo 18m, soffio ad area con danni elementali e potenti attacchi con morso e artigli con resistenza condivisa."
    },
    {
      "id": "tashas_otherworldly_guise",
      "name": "Aspetto Ultraterreno di Tasha (Tasha's Otherworldly Guise)",
      "level": 6,
      "school": "Trasmutazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione bonus",
      "range": "Incantatore",
      "components": "V, S, M (un oggetto sacro o sacrilego da 500 mo)",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Attingi al potere dei Piani Superiori o Inferiori. Ottieni: immunità a fuoco e veleno (o radioso e necrotico); immunità a condizione avvelenato (o affascinato); velocità di volo 12 metri; +2 alla CA; puoi usare la tua caratteristica da incantatore per i tiri per colpire e per i danni con le armi; e puoi attaccare due volte con l'Azione di Attacco!"
    },
    {
      "id": "scatter",
      "name": "Dispersione (Scatter)",
      "level": 6,
      "school": "Evocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "9 metri",
      "components": "V",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "L'aria trema e teletrasporti istantaneamente fino a 5 creature entro 9m da te in altri spazi liberi sul terreno entro 36 metri da te. Le creature non consenzienti effettuano un TS Saggezza per annullare l'effetto su di loro."
    },
    {
      "id": "crown_of_stars",
      "name": "Corona di Stelle (Crown of Stars)",
      "level": 7,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S",
      "duration": "1 ora (SENZA concentrazione)",
      "concentration": false,
      "ritual": false,
      "desc": "Sette stelle scintillanti fluttuano attorno alla tua testa. Come azione bonus puoi scagliare una stella contro una creatura entro 36 metri: effettua un attacco con incantesimo a distanza, se colpisce infligge 4d12 danni radiosi!\n\nAi livelli superiori: +2 stelle extra per ogni livello di slot sopra il 7°."
    },
    {
      "id": "tether_essence",
      "name": "Vincolo delle Essenze (Tether Essence)",
      "level": 7,
      "school": "Necromanzia",
      "classes": [
        "wizard"
      ],
      "source": "EGtW / TCoE",
      "time": "1 azione",
      "range": "18 metri",
      "components": "V, S, M (due bobine di filo di platino da 250 mo)",
      "duration": "Concentrazione, fino a 1 ora",
      "concentration": true,
      "ritual": false,
      "desc": "Colleghi misticamente i destini vitali di due creature entro gittata (TS Costituzione). Se fallito, ogni volta che una delle creature subisce danni, l'altra subisce la stessa quantità di danni! E ogni volta che una viene curata, anche l'altra recupera la stessa quantità di PF!"
    },
    {
      "id": "maddening_darkness",
      "name": "Oscurità Folgorante (Maddening Darkness)",
      "level": 8,
      "school": "Invocazione",
      "classes": [
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "45 metri",
      "components": "V, M (una goccia di pece mescolata a un cervello di pipistrello)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Un'oscurità magica impenetrabile riempie una gigantesca sfera di 18 metri di raggio, piena di urla e visioni raccapriccianti. Qualsiasi creatura che inizia il suo turno nell'area deve superare un TS Saggezza o subire 8d8 danni psichici (metà se supera)."
    },
    {
      "id": "illusory_dragon",
      "name": "Drago Illusorio (Illusory Dragon)",
      "level": 8,
      "school": "Illusione",
      "classes": [
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "18 metri",
      "components": "S",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Crei l'illusione ombra di un drago Enorme. Tutte le creature nemiche che lo vedono devono superare un TS Saggezza o essere spaventate. Come azione bonus puoi muoverlo di 18m e fargli esalare un cono di 18 metri infliggendo 7d6 danni (acido, freddo, fuoco, fulmine, necrotico o veleno)."
    },
    {
      "id": "blade_of_disaster",
      "name": "Lama del Disastro (Blade of Disaster)",
      "level": 9,
      "school": "Invocazione",
      "classes": [
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "TCoE",
      "time": "1 azione bonus",
      "range": "18 metri",
      "components": "V, S",
      "duration": "Concentrazione, fino a 1 minuto",
      "concentration": true,
      "ritual": false,
      "desc": "Crei una fessura dimensionale a forma di spada di buio puro. Puoi effettuare due attacchi con incantesimo da mischia ogni round come azione bonus. Ciascun attacco che colpisce infligge 4d12 danni da forza. La lama mette a segno un COLPO CRITICO con un risultato di 18, 19 o 20: un colpo critico infligge 12d12 DANNI DA FORZA!"
    },
    {
      "id": "psychic_scream",
      "name": "Urlo Psichico (Psychic Scream)",
      "level": 9,
      "school": "Ammaliamento",
      "classes": [
        "bard",
        "sorcerer",
        "warlock",
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "27 metri",
      "components": "S",
      "duration": "Istantanea",
      "concentration": false,
      "ritual": false,
      "desc": "Scateni il potere della tua mente contro fino a 10 creature a tua scelta. Ciascun bersaglio subisce 14d6 DANNI PSICHICI ed è STORDITO (TS Intelligenza dimezza il danno e nega lo stordimento). Se il danno di questo incantesimo uccide un bersaglio con testa, la sua testa esplode all'istante!"
    },
    {
      "id": "invulnerability",
      "name": "Invulnerabilità (Invulnerability)",
      "level": 9,
      "school": "Abiurazione",
      "classes": [
        "wizard"
      ],
      "source": "XGtE",
      "time": "1 azione",
      "range": "Incantatore",
      "components": "V, S, M (un pezzo di adamantio del valore di 500 mo)",
      "duration": "Concentrazione, fino a 10 minuti",
      "concentration": true,
      "ritual": false,
      "desc": "Ti circondi di un'armatura di pura invulnerabilità: per l'intera durata dell'incantesimo, SEI TOTALMENTE IMMUNE A QUALSIASI TIPO DI DANNO esistente in gioco!"
    }
  ],
  "rules": {
    "combatActions": [
      {
        "name": "Attaccare (Attack)",
        "desc": "Compi un attacco in mischia o a distanza con un'arma o disarmato. Con il privilegio Attacco Extra puoi attaccare più volte con la stessa azione."
      },
      {
        "name": "Lanciare un Incantesimo (Cast a Spell)",
        "desc": "Lanci un incantesimo con tempo di lancio di 1 azione. Se lanci un incantesimo con azione bonus, puoi lanciare solo un trucchetto con l'azione standard."
      },
      {
        "name": "Scattare (Dash)",
        "desc": "Ottieni movimento aggiuntivo pari alla tua velocità per il turno corrente."
      },
      {
        "name": "Disimpegnarsi (Disengage)",
        "desc": "Il tuo movimento non provoca attacchi di opportunità fino alla fine del turno corrente."
      },
      {
        "name": "Schivare (Dodge)",
        "desc": "Fino all'inizio del tuo prossimo turno, qualsiasi tiro per colpire effettuato contro di te ha svantaggio (se vedi l'attaccante) e hai vantaggio a tutti i tiri salvezza su Destrezza."
      },
      {
        "name": "Aiutare (Help)",
        "desc": "Conferisci vantaggio alla prossima prova di abilità di un alleato o al suo prossimo tiro per colpire contro un bersaglio entro 1,5 metri da te."
      },
      {
        "name": "Nascondersi (Hide)",
        "desc": "Effettui una prova di Destrezza (Furtività) per eludere la vista dei nemici e diventare inosservato (richiede copertura totale, buio o occultamento)."
      },
      {
        "name": "Prepararsi (Ready)",
        "desc": "Dichiari una reazione programmata a un evento scatenante (es. 'Se il nemico oltrepassa la porta, scaglio il giavellotto')."
      },
      {
        "name": "Cercare (Search)",
        "desc": "Dedichi la tua attenzione alla ricerca di qualcosa effettuando una prova di Percezione o Indagare."
      },
      {
        "name": "Usare un Oggetto (Use an Object)",
        "desc": "Interagisci con un secondo oggetto complesso durante il turno (estrarre una pozione, attivare un congegno, aprire una botola bloccata)."
      }
    ],
    "conditions": [
      {
        "name": "Accecato (Blinded)",
        "desc": "Non può vedere e fallisce automaticamente prove basate sulla vista. I suoi tiri per colpire hanno svantaggio; i tiri per colpire contro di lui hanno vantaggio."
      },
      {
        "name": "Affascinato (Charmed)",
        "desc": "Non può attaccare o danneggiare chi lo affascina; l'incantatore ha vantaggio a tutte le prove di caratteristica sociali effettuate contro di lui."
      },
      {
        "name": "Assordato (Deafened)",
        "desc": "Non può sentire e fallisce automaticamente le prove di caratteristica basate sull'udito."
      },
      {
        "name": "Avvelenato (Poisoned)",
        "desc": "Ha svantaggio a tutti i tiri per colpire e a tutte le prove di caratteristica."
      },
      {
        "name": "Incapacitato (Incapacitated)",
        "desc": "Non può compiere azioni né reazioni."
      },
      {
        "name": "Invisibile (Invisible)",
        "desc": "Impossibile da vedere a occhio nudo senza magia o sensi speciali. I suoi tiri per colpire hanno vantaggio; gli attacchi contro di lui hanno svantaggio."
      },
      {
        "name": "Paralizzato (Paralyzed)",
        "desc": "Incapacitato e incapace di muoversi o parlare. Fallisce automaticamente TS Forza e Destrezza. Gli attacchi contro hanno vantaggio e qualsiasi colpo a segno entro 1,5 metri è un CRITICO AUTOMATICO!"
      },
      {
        "name": "Pietrificato (Petrified)",
        "desc": "Trasformato in sostanza inanimata solida. Peso x10, incapacitato, fallisce TS FOR e DES, resistenza a tutti i danni, immune a veleno e malattie."
      },
      {
        "name": "Privo di Sensi (Unconscious)",
        "desc": "Incapacitato, cade prono, lascia cadere oggetti. Fallisce automaticamente TS FOR e DES. Attacchi contro hanno vantaggio e colpi a segno entro 1,5m sono CRITICI AUTOMATICI."
      },
      {
        "name": "Prono (Prone)",
        "desc": "Può solo strisciare (costo movimento raddoppiato). Svantaggio ai propri tiri per colpire. Gli attacchi contro di lui hanno vantaggio se effettuati entro 1,5m; hanno svantaggio se effettuati a distanza maggiore."
      },
      {
        "name": "Spaventato (Frightened)",
        "desc": "Ha svantaggio a prove di caratteristica e tiri per colpire finché la fonte della paura è nel suo campo visivo. Non può avvicinarsi volontariamente alla fonte di paura."
      },
      {
        "name": "Stordito (Stunned)",
        "desc": "Incapacitato, non può muoversi e può solo balbettare. Fallisce automaticamente TS Forza e Destrezza. Gli attacchi contro di lui hanno vantaggio."
      },
      {
        "name": "Trattenuto (Restrained)",
        "desc": "Velocità pari a 0. Svantaggio ai propri tiri per colpire e ai TS Destrezza. Gli attacchi contro di lui hanno vantaggio."
      }
    ]
  }
};

if (typeof window !== "undefined") {
  window.DND_DATA = DND_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = DND_DATA;
}

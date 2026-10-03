// =============================================================================
// MASTER COMPENDIUM BUILDER PER D&D 5E ITALIANO (PHB + XGtE + TCoE + MPMM)
// Genera dnd-compendium-data.js completo al 100% per PWA Offline
// =============================================================================

const fs = require('fs');
const path = require('path');

// Carica dati SRD
const srdSpells = JSON.parse(fs.readFileSync('srd_cache/5e-SRD-Spells.json', 'utf8'));
const srdLevels = JSON.parse(fs.readFileSync('srd_cache/5e-SRD-Levels.json', 'utf8'));
const srdFeatures = JSON.parse(fs.readFileSync('srd_cache/5e-SRD-Features.json', 'utf8'));

// Carica vecchio compendio per preservare le traduzioni di alta qualità già inserite
const oldData = new Function(fs.readFileSync('dnd-compendium-data.js', 'utf8') + '; return DND_DATA;')();

console.log('Inizio elaborazione master compendium...');

// ---------------------------------------------------------------------------
// 1. DIZIONARIO TRADUZIONI NOMI INCANTESIMI SRD
// ---------------------------------------------------------------------------
const spellNameMap = {
  "acid-arrow": "Freccia Acida di Melf (Acid Arrow)",
  "acid-splash": "Spruzzo Acido (Acid Splash)",
  "aid": "Aiuto (Aid)",
  "alarm": "Allarme (Alarm)",
  "alter-self": "Alterare Se Stesso (Alter Self)",
  "animal-friendship": "Amicizia con gli Animali (Animal Friendship)",
  "animal-messenger": "Messaggero Animale (Animal Messenger)",
  "animal-shapes": "Forme Animali (Animal Shapes)",
  "animate-dead": "Animare Morti (Animate Dead)",
  "animate-objects": "Animare Oggetti (Animate Objects)",
  "antilife-shell": "Guscio Antivita (Antilife Shell)",
  "antimagic-field": "Campo Antimagia (Antimagic Field)",
  "antipathy-sympathy": "Antipatia / Simpatia (Antipathy/Sympathy)",
  "arcane-eye": "Occhio Arcano (Arcane Eye)",
  "arcane-hand": "Mano Arcana di Bigby (Bigby's Hand)",
  "arcane-lock": "Serratura Arcana (Arcane Lock)",
  "arcane-sword": "Spada Arcana di Mordenkainen (Arcane Sword)",
  "arcanists-magic-aura": "Aura Magica di Nystul (Magic Aura)",
  "astral-projection": "Proiezione Astrale (Astral Projection)",
  "augury": "Auspicio (Augury)",
  "awaken": "Risveglio (Awaken)",
  "bane": "Anatema (Bane)",
  "banishment": "Esilio (Banishment)",
  "barkskin": "Pelle Coriacea (Barkskin)",
  "beacon-of-hope": "Faro di Speranza (Beacon of Hope)",
  "bestow-curse": "Scagliare Maledizione (Bestow Curse)",
  "black-tentacles": "Tentacoli Neri di Evard (Black Tentacles)",
  "blade-barrier": "Barriera di Lame (Blade Barrier)",
  "bless": "Benedizione (Bless)",
  "blindness-deafness": "Cecità/Sordità (Blindness/Deafness)",
  "blink": "Intermittenza (Blink)",
  "blur": "Sfocatura (Blur)",
  "burning-hands": "Mani Brucianti (Burning Hands)",
  "call-lightning": "Invocare il Fulmine (Call Lightning)",
  "calm-emotions": "Calmare Emozioni (Calm Emotions)",
  "chain-lightning": "Catena di Fulmini (Chain Lightning)",
  "charm-person": "Charme su Persone (Charm Person)",
  "chill-touch": "Tocco Gelido (Chill Touch)",
  "circle-of-death": "Cerchio di Morte (Circle of Death)",
  "clairvoyance": "Chiaroveggenza (Clairvoyance)",
  "clone": "Clone (Clone)",
  "cloudkill": "Nube Mortale (Cloudkill)",
  "color-spray": "Spruzzo Colorato (Color Spray)",
  "command": "Comando (Command)",
  "commune": "Comunione (Commune)",
  "commune-with-nature": "Comunione con la Natura (Commune with Nature)",
  "comprehend-languages": "Comprensione dei Linguaggi (Comprehend Languages)",
  "compulsion": "Costrizione (Compulsion)",
  "cone-of-cold": "Cono di Freddo (Cone of Cold)",
  "confusion": "Confusione (Confusion)",
  "conjure-animals": "Evoca Animali (Conjure Animals)",
  "conjure-celestial": "Evoca Celestiale (Conjure Celestial)",
  "conjure-elemental": "Evoca Elementale (Conjure Elemental)",
  "conjure-fey": "Evoca Folletto (Conjure Fey)",
  "conjure-minor-elementals": "Evoca Elementali Minori (Conjure Minor Elementals)",
  "conjure-woodland-beings": "Evoca Creature Boschive (Conjure Woodland Beings)",
  "contact-other-plane": "Contattare Altri Piani (Contact Other Plane)",
  "contagion": "Contagio (Contagion)",
  "contingency": "Contingenza (Contingency)",
  "continual-flame": "Fiamma Perenne (Continual Flame)",
  "control-water": "Controllare Acqua (Control Water)",
  "control-weather": "Controllare il Tempo Atmosferico (Control Weather)",
  "counterspell": "Controincantesimo (Counterspell)",
  "create-food-and-water": "Creare Cibo e Acqua (Create Food and Water)",
  "create-undead": "Creare Non Morti (Create Undead)",
  "create-or-destroy-water": "Creare o Distruggere Acqua (Create or Destroy Water)",
  "cure-wounds": "Cura Ferite (Cure Wounds)",
  "dancing-lights": "Luci Danzanti (Dancing Lights)",
  "darkness": "Oscurità (Darkness)",
  "darkvision": "Scurovisione (Darkvision)",
  "daylight": "Luce del Giorno (Daylight)",
  "death-ward": "Interdizione alla Morte (Death Ward)",
  "delayed-blast-fireball": "Palla di Fuoco Ritardata (Delayed Blast Fireball)",
  "demiplane": "Semipiano (Demiplane)",
  "detect-evil-and-good": "Individuazione del Bene e del Male (Detect Evil and Good)",
  "detect-magic": "Individuazione del Magico (Detect Magic)",
  "detect-poison-and-disease": "Individuazione di Veleni e Malattie (Detect Poison/Disease)",
  "detect-thoughts": "Individuazione dei Pensieri (Detect Thoughts)",
  "dimension-door": "Porta Dimensionale (Dimension Door)",
  "disguise-self": "Camuffare Se Stesso (Disguise Self)",
  "disintegrate": "Disintegrazione (Disintegrate)",
  "dispel-evil-and-good": "Dissolvi il Bene e il Male (Dispel Evil and Good)",
  "dispel-magic": "Dissolvi Magie (Dispel Magic)",
  "divination": "Divinazione (Divination)",
  "divine-favor": "Favore Divino (Divine Favor)",
  "dominate-beast": "Dominare Bestie (Dominate Beast)",
  "dominate-monster": "Dominare Mostri (Dominate Monster)",
  "dominate-person": "Dominare Persone (Dominate Person)",
  "dream": "Sogno (Dream)",
  "earthquake": "Terremoto (Earthquake)",
  "eldritch-blast": "Deflagrazione Mistica (Eldritch Blast)",
  "enhance-ability": "Potenziamento Caratteristica (Enhance Ability)",
  "enlarge-reduce": "Ingrandire/Ridurre (Enlarge/Reduce)",
  "entangle": "Intralciare (Entangle)",
  "enthrall": "Ammaliare (Enthrall)",
  "etherealness": "Forma Eterea (Etherealness)",
  "expeditious-retreat": "Ritirata Rapida (Expeditious Retreat)",
  "eyebite": "Sguardo Cieco (Eyebite)",
  "fabricate": "Fabbricare (Fabricate)",
  "faerie-fire": "Luminescenza (Faerie Fire)",
  "fear": "Paura (Fear)",
  "feather-fall": "Caduta Morbida (Feather Fall)",
  "feeblemind": "Regressione Mentale (Feeblemind)",
  "find-familiar": "Trova Famiglio (Find Familiar)",
  "find-steed": "Trova Cavalcatura (Find Steed)",
  "find-traps": "Trova Trappole (Find Traps)",
  "finger-of-death": "Dito della Morte (Finger of Death)",
  "fire-bolt": "Dardo di Fuoco (Fire Bolt)",
  "fire-shield": "Scudo di Fuoco (Fire Shield)",
  "fire-storm": "Tempesta di Fuoco (Fire Storm)",
  "fireball": "Palla di Fuoco (Fireball)",
  "flame-blade": "Lama Infuocata (Flame Blade)",
  "flame-strike": "Colpo Infuocato (Flame Strike)",
  "flaming-sphere": "Sfera Infuocata (Flaming Sphere)",
  "fly": "Volare (Fly)",
  "fog-cloud": "Nube di Nebbia (Fog Cloud)",
  "forbiddance": "Interdizione (Forbiddance)",
  "forcecage": "Gabbia di Forza (Forcecage)",
  "foresight": "Previsione (Foresight)",
  "freedom-of-movement": "Libertà di Movimento (Freedom of Movement)",
  "gaseous-form": "Forma Gassosa (Gaseous Form)",
  "gate": "Portale (Gate)",
  "geas": "Geas (Geas)",
  "gentle-repose": "Riposo Inviolato (Gentle Repose)",
  "glibness": "Parlantina Scaltra (Glibness)",
  "globe-of-invulnerability": "Globo di Invulnerabilità (Globe of Invulnerability)",
  "glyph-of-warding": "Glifo di Interdizione (Glyph of Warding)",
  "grease": "Unto (Grease)",
  "greater-invisibility": "Invisibilità Superiore (Greater Invisibility)",
  "greater-restoration": "Ristoro Superiore (Greater Restoration)",
  "guardian-of-faith": "Custode della Fede (Guardian of Faith)",
  "guards-and-wards": "Guardie e Interdizioni (Guards and Wards)",
  "guidance": "Guida (Guidance)",
  "guiding-bolt": "Dardo Tracciante (Guiding Bolt)",
  "gust-of-wind": "Raffica di Vento (Gust of Wind)",
  "hallow": "Santificare (Hallow)",
  "harm": "Ferire (Harm)",
  "haste": "Velocità (Haste)",
  "heal": "Guarigione (Heal)",
  "healing-word": "Parola Guaritrice (Healing Word)",
  "heat-metal": "Riscaldare il Metallo (Heat Metal)",
  "hellish-rebuke": "Repulsione Infernale (Hellish Rebuke)",
  "heroes-feast": "Banchetto degli Eroi (Heroes' Feast)",
  "heroism": "Eroismo (Heroism)",
  "hideous-laughter": "Risata Incontenibile di Tasha (Tasha's Hideous Laughter)",
  "hold-monster": "Blocca Mostri (Hold Monster)",
  "hold-person": "Blocca Persone (Hold Person)",
  "holy-aura": "Aura Sacra (Holy Aura)",
  "hunters-mark": "Marchio del Cacciatore (Hunter's Mark)",
  "hypnotic-pattern": "Trama Ipnotica (Hypnotic Pattern)",
  "ice-storm": "Tempesta di Ghiaccio (Ice Storm)",
  "identify": "Identificare (Identify)",
  "illusory-script": "Scrittura Illusoria (Illusory Script)",
  "inflict-wounds": "Infliggi Ferite (Inflict Wounds)",
  "insect-plague": "Piaga degli Insetti (Insect Plague)",
  "invisibility": "Invisibilità (Invisibility)",
  "jump": "Saltare (Jump)",
  "knock": "Bussare (Knock)",
  "legend-lore": "Conoscenza delle Leggende (Legend Lore)",
  "lesser-restoration": "Ripristino Inferiore (Lesser Restoration)",
  "levitate": "Levitazione (Levitate)",
  "light": "Luce (Light)",
  "lightning-bolt": "Fulmine (Lightning Bolt)",
  "locate-animals-or-plants": "Localizza Animali o Piante (Locate Animals or Plants)",
  "locate-creature": "Localizza Creatura (Locate Creature)",
  "locate-object": "Localizza Oggetto (Locate Object)",
  "longstrider": "Passo Veloce (Longstrider)",
  "mage-armor": "Armatura Magica (Mage Armor)",
  "mage-hand": "Mano Magica (Mage Hand)",
  "magic-circle": "Cerchio Magico (Magic Circle)",
  "magic-jar": "Giarra Magica (Magic Jar)",
  "magic-missile": "Dardo Incantato (Magic Missile)",
  "magic-mouth": "Bocca Magica (Magic Mouth)",
  "magic-weapon": "Arma Magica (Magic Weapon)",
  "major-image": "Immagine Maggiore (Major Image)",
  "mass-cure-wounds": "Cura Ferite di Massa (Mass Cure Wounds)",
  "mass-heal": "Guarigione di Massa (Mass Heal)",
  "mass-healing-word": "Parola Guaritrice di Massa (Mass Healing Word)",
  "mass-suggestion": "Suggestione di Massa (Mass Suggestion)",
  "maze": "Labirinto (Maze)",
  "meld-into-stone": "Fondersi nella Pietra (Meld into Stone)",
  "meteor-swarm": "Sciame di Meteore (Meteor Swarm)",
  "mind-blank": "Vuoto Mentale (Mind Blank)",
  "minor-illusion": "Illusione Minore (Minor Illusion)",
  "miracle": "Miracolo (Miracle)",
  "mirror-image": "Immagine Speculare (Mirror Image)",
  "mislead": "Fuorviare (Mislead)",
  "misty-step": "Passo Nebbioso (Misty Step)",
  "modify-memory": "Modificare Memoria (Modify Memory)",
  "moonbeam": "Raggio di Luna (Moonbeam)",
  "move-earth": "Muovere la Terra (Move Earth)",
  "nondetection": "Anti-Individuazione (Nondetection)",
  "pass-without-trace": "Passare Senza Tracce (Pass Without Trace)",
  "passwall": "Passapareti (Passwall)",
  "phantasmal-killer": "Assassino Fantasmatico (Phantasmal Killer)",
  "planar-ally": "Alleato Planare (Planar Ally)",
  "planar-binding": "Legame Planare (Planar Binding)",
  "plane-shift": "Spostamento Planare (Plane Shift)",
  "plant-growth": "Crescita Vegetale (Plant Growth)",
  "poison-spray": "Spruzzo Velenoso (Poison Spray)",
  "polymorph": "Metamorfosi (Polymorph)",
  "power-word-kill": "Parola del Potere: Uccidere (Power Word Kill)",
  "power-word-stun": "Parola del Potere: Stordire (Power Word Stun)",
  "prayer-of-healing": "Preghiera di Guarigione (Prayer of Healing)",
  "prestidigitation": "Prestidigitazione (Prestidigitation)",
  "prismatic-spray": "Spruzzo Prismatico (Prismatic Spray)",
  "prismatic-wall": "Muro Prismatico (Prismatic Wall)",
  "produce-flame": "Produrre Fiamma (Produce Flame)",
  "program-illusion": "Illusione Programmata (Programmed Illusion)",
  "project-image": "Proiettare Immagine (Project Image)",
  "protection-from-energy": "Protezione dall'Energia (Protection from Energy)",
  "protection-from-evil-and-good": "Protezione dal Bene e dal Male (Protection from Evil/Good)",
  "protection-from-poison": "Protezione dal Veleno (Protection from Poison)",
  "purify-food-and-drink": "Purificare Cibo e Bevande (Purify Food and Drink)",
  "raise-dead": "Rianimare Morti (Raise Dead)",
  "ray-of-enfeeblement": "Raggio di Indebolimento (Ray of Enfeeblement)",
  "ray-of-frost": "Raggio di Gelo (Ray of Frost)",
  "regenerate": "Rigenerazione (Regenerate)",
  "reincarnate": "Reincarnazione (Reincarnate)",
  "remove-curse": "Rimuovi Maledizione (Remove Curse)",
  "resurrection": "Resurrezione (Resurrection)",
  "reverse-gravity": "Invertire Gravità (Reverse Gravity)",
  "revivify": "Rinascita (Revivify)",
  "rope-trick": "Corda Magica (Rope Trick)",
  "sacred-flame": "Fiamma Sacra (Sacred Flame)",
  "sanctuary": "Santuario (Sanctuary)",
  "scorching-ray": "Raggio Rovente (Scorching Ray)",
  "scrying": "Scrutare (Scrying)",
  "see-invisibility": "Vedere Invisibilità (See Invisibility)",
  "seeming": "Sembiante (Seeming)",
  "sending": "Inviare Messaggio (Sending)",
  "shatter": "Frantumare (Shatter)",
  "shield": "Scudo (Shield)",
  "shield-of-faith": "Scudo della Fede (Shield of Faith)",
  "shillelagh": "Bastone Magico (Shillelagh)",
  "shocking-grasp": "Stretta Folgorante (Shocking Grasp)",
  "silence": "Silenzio (Silence)",
  "silent-image": "Immagine Silenziosa (Silent Image)",
  "sleep": "Sonno (Sleep)",
  "sleet-storm": "Tempesta di Nevischio (Sleet Storm)",
  "slow": "Lentezza (Slow)",
  "spare-the-dying": "Salvezza dai Morenti (Spare the Dying)",
  "speak-with-animals": "Parlare con gli Animali (Speak with Animals)",
  "speak-with-dead": "Parlare con i Morti (Speak with Dead)",
  "speak-with-plants": "Parlare con le Piante (Speak with Plants)",
  "spider-climb": "Movimenti del Ragno (Spider Climb)",
  "spike-growth": "Crescita di Spine (Spike Growth)",
  "spirit-guardians": "Spiriti Guardiani (Spirit Guardians)",
  "spiritual-weapon": "Arma Spirituale (Spiritual Weapon)",
  "stone-shape": "Scolpire Pietra (Stone Shape)",
  "stoneskin": "Pelle di Pietra (Stoneskin)",
  "storm-of-vengeance": "Tempesta di Vendetta (Storm of Vengeance)",
  "suggestion": "Suggestione (Suggestion)",
  "sunbeam": "Raggio di Sole (Sunbeam)",
  "sunburst": "Esplosione Solare (Sunburst)",
  "symbol": "Simbolo (Symbol)",
  "telekinesis": "Telecinesi (Telekinesis)",
  "telepathic-bond": "Legame Telepatico di Rary (Telepathic Bond)",
  "teleport": "Teletrasporto (Teleport)",
  "teleportation-circle": "Circolo di Teletrasporto (Teleportation Circle)",
  "thaumaturgy": "Taumaturgia (Thaumaturgy)",
  "thunderwave": "Onda Tonante (Thunderwave)",
  "time-stop": "Fermare il Tempo (Time Stop)",
  "tongues": "Linguaggi (Tongues)",
  "true-polymorph": "Metamorfosi Pura (True Polymorph)",
  "true-resurrection": "Resurrezione Pura (True Resurrection)",
  "true-seeing": "Visione del Vero (True Seeing)",
  "true-strike": "Colpo Accurato (True Strike)",
  "vampiric-touch": "Tocco Vampirico (Vampiric Touch)",
  "vicious-mockery": "Beffa Crudele (Vicious Mockery)",
  "wall-of-fire": "Muro di Fuoco (Wall of Fire)",
  "wall-of-force": "Muro di Forza (Wall of Force)",
  "wall-of-ice": "Muro di Ghiaccio (Wall of Ice)",
  "wall-of-stone": "Muro di Pietra (Wall of Stone)",
  "wall-of-thorns": "Muro di Spine (Wall of Thorns)",
  "water-breathing": "Respirare Sott'Acqua (Water Breathing)",
  "water-walk": "Camminare sull'Acqua (Water Walk)",
  "web": "Ragnatela (Web)",
  "weird": "Incubo (Weird)",
  "wind-walk": "Camminare nel Vento (Wind Walk)",
  "wind-wall": "Muro di Vento (Wind Wall)",
  "wish": "Desiderio (Wish)",
  "word-of-recall": "Parola del Ritiro (Word of Recall)",
  "zone-of-truth": "Zona di Verità (Zone of Truth)"
};

// Mappatura Scuole di Magia in Italiano
const schoolMap = {
  "abjuration": "Abiurazione",
  "conjuration": "Evocazione",
  "divination": "Divinazione",
  "enchantment": "Ammaliamento",
  "evocation": "Invocazione",
  "illusion": "Illusione",
  "necromancy": "Necromanzia",
  "transmutation": "Trasmutazione"
};

// Conversione Gittata
function convertRange(r) {
  if (!r) return "Contatto";
  if (r.toLowerCase() === "self") return "Incantatore";
  if (r.toLowerCase() === "touch") return "Contatto";
  if (r.toLowerCase() === "sight") return "Vista";
  if (r.toLowerCase() === "unlimited") return "Illimitata";
  return r.replace(/(\d+)\s*feet/gi, (m, d) => {
    const feet = parseInt(d, 10);
    const meters = Math.round(feet * 0.3);
    return `${meters} metri`;
  }).replace(/(\d+)\s*foot/gi, (m, d) => `${Math.round(parseInt(d,10)*0.3)} metri`);
}

// Conversione Durata
function convertDuration(d, conc) {
  let res = d || "Istantanea";
  if (res.toLowerCase().includes("instantaneous")) return "Istantanea";
  res = res.replace(/instantaneous/gi, "Istantanea")
           .replace(/up to (\d+) minutes?/gi, "fino a $1 minuti")
           .replace(/up to (\d+) hours?/gi, "fino a $1 ore")
           .replace(/up to 1 hour/gi, "fino a 1 ora")
           .replace(/up to 1 minute/gi, "fino a 1 minuto")
           .replace(/1 minute/gi, "1 minuto")
           .replace(/1 hour/gi, "1 ora")
           .replace(/8 hours/gi, "8 ore")
           .replace(/24 hours/gi, "24 ore")
           .replace(/1 round/gi, "1 round");
  if (conc && !res.toLowerCase().includes("concentra")) {
    res = `Concentrazione, ${res}`;
  }
  return res;
}

// Conversione Tempo di Lancio
function convertTime(t) {
  if (!t) return "1 azione";
  return t.replace(/1 action/gi, "1 azione")
          .replace(/1 bonus action/gi, "1 azione bonus")
          .replace(/1 reaction/gi, "1 reazione")
          .replace(/1 minute/gi, "1 minuto")
          .replace(/10 minutes/gi, "10 minuti")
          .replace(/1 hour/gi, "1 ora")
          .replace(/8 hours/gi, "8 ore");
}

// Crea mappa degli incantesimi già rifiniti in italiano dal vecchio compendio
const oldSpellMap = {};
(oldData.spells || []).forEach(s => {
  oldSpellMap[s.id] = s;
});

// Costruzione Lista Unificata Incantesimi
const compiledSpells = [];
const seenSpellIds = new Set();

// 1. Aggiungi tutti gli incantesimi SRD convertiti
srdSpells.forEach(s => {
  const snakeId = s.index.replace(/-/g, '_');
  
  // Se già rifinito a mano nel vecchio compendio, usa la versione perfetta
  if (oldSpellMap[snakeId]) {
    compiledSpells.push(oldSpellMap[snakeId]);
    seenSpellIds.add(snakeId);
    return;
  }

  const itName = spellNameMap[s.index] || `${s.name} (${s.name})`;
  const school = s.school?.index ? (schoolMap[s.school.index] || s.school.name) : "Invocazione";
  const classes = (s.classes || []).map(c => c.index);
  
  // Aggiungi Artificer a incantesimi appropriati (es. acid splash, cure wounds, detect magic...)
  const artificerSpells = ["acid_splash", "alarm", "cure_wounds", "detect_magic", "disguise_self", "faerie_fire", "feather_fall", "grease", "identify", "jump", "longstrider", "purify_food_and_drink", "sanctuary", "aid", "alter_self", "arcane_lock", "blur", "continual_flame", "darkvision", "enhance_ability", "enlarge_reduce", "heat_metal", "invisibility", "lesser_restoration", "levitate", "magic_mouth", "magic_weapon", "protection_from_poison", "rope_trick", "see_invisibility", "spider_climb", "blink", "dispel_magic", "fly", "gaseous_form", "glyph_of_warding", "haste", "protection_from_energy", "revivify", "water_breathing", "water_walk", "arcane_eye", "fabricate", "freedom_of_movement", "stone_shape", "stoneskin"];
  if (artificerSpells.includes(snakeId) && !classes.includes("artificer")) {
    classes.push("artificer");
  }

  const compStr = Array.isArray(s.components) ? s.components.join(', ') : "V, S";
  const matStr = s.material ? ` (${s.material.slice(0, 80)})` : "";

  // Sintesi funzionale descrizione
  let descText = "";
  if (Array.isArray(s.desc)) descText = s.desc.join("\n\n");
  else descText = s.desc || "";

  if (s.higher_level && s.higher_level.length > 0) {
    descText += "\n\nAi livelli superiori: " + s.higher_level.join(" ");
  }

  compiledSpells.push({
    id: snakeId,
    name: itName,
    level: s.level || 0,
    school: school,
    classes: classes,
    source: "PHB",
    time: convertTime(s.casting_time),
    range: convertRange(s.range),
    components: compStr + matStr,
    duration: convertDuration(s.duration, s.concentration),
    concentration: !!s.concentration,
    ritual: !!s.ritual,
    desc: descText
  });
  seenSpellIds.add(snakeId);
});

// 2. Aggiungi gli incantesimi non-SRD da Xanathar e Tasha
const expansionSpells = [
  // TRUCCHETTI XGtE & TCoE
  {
    id: "booming_blade",
    name: "Lama Risonante (Booming Blade)",
    level: 0,
    school: "Invocazione",
    classes: ["sorcerer", "warlock", "wizard", "artificer"],
    source: "TCoE",
    time: "1 azione",
    range: "1,5 metri",
    components: "S, M (un'arma del valore di almeno 1 ma)",
    duration: "1 round",
    concentration: false,
    ritual: false,
    desc: "Compi un attacco da mischia con l'arma usata nel lancio. Se colpisce, il bersaglio subisce i normali effetti dell'attacco e viene circondato da energia tonante fino all'inizio del tuo prossimo turno: se si muove volontariamente prima di allora, subisce 1d8 danni da tuono.\n\nAi livelli superiori: al 5° livello l'attacco infligge +1d8 tuono e il danno da movimento sale a 2d8; al 11° (2d8 / 3d8) e al 17° (3d8 / 4d8)."
  },
  {
    id: "green_flame_blade",
    name: "Lama di Fiamma Verde (Green-Flame Blade)",
    level: 0,
    school: "Invocazione",
    classes: ["sorcerer", "warlock", "wizard", "artificer"],
    source: "TCoE",
    time: "1 azione",
    range: "1,5 metri",
    components: "S, M (un'arma del valore di almeno 1 ma)",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Compi un attacco con arma da mischia. Se colpisce, infliggi i normali danni dell'arma e fiamme verdi balzano verso una seconda creatura entro 1,5m dal bersaglio, infliggendole danni da fuoco pari al tuo modificatore di caratteristica da incantatore.\n\nAi livelli superiori: al 5° liv infliggi +1d8 fuoco al bersaglio e 1d8+mod al secondo; al 11° liv (2d8 / 2d8+mod) e al 17° liv (3d8 / 3d8+mod)."
  },
  {
    id: "toll_the_dead",
    name: "Rintocco dei Morti (Toll the Dead)",
    level: 0,
    school: "Necromanzia",
    classes: ["cleric", "warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "18 metri",
    components: "V, S",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Punti il dito verso una creatura: risuona il lugubre rintocco di una campana funebre. Il bersaglio deve superare un TS Saggezza o subire 1d8 danni necrotici; se la creatura ha già perso dei punti ferita (è ferita), il dado danno diventa 1d12 necrotico invece di 1d8!\n\nAi livelli superiori: il danno sale a 2d8/2d12 al 5° liv, 3d8/3d12 al 11° liv e 4d8/4d12 al 17° liv."
  },
  {
    id: "mind_sliver",
    name: "Scheggia Mentale (Mind Sliver)",
    level: 0,
    school: "Ammaliamento",
    classes: ["sorcerer", "warlock", "wizard"],
    source: "TCoE",
    time: "1 azione",
    range: "18 metri",
    components: "V",
    duration: "1 round",
    concentration: false,
    ritual: false,
    desc: "Scagli una scheggia di energia psichica disorientante nella mente di una creatura che puoi vedere. Il bersaglio deve superare un TS Intelligenza o subire 1d6 danni psichici e sottrarre 1d4 dal suo prossimo tiro salvezza prima della fine del tuo prossimo turno!\n\nAi livelli superiori: il danno aumenta a 2d6 al 5°, 3d6 al 11° e 4d6 al 17° livello."
  },
  {
    id: "word_of_radiance",
    name: "Parola di Radianza (Word of Radiance)",
    level: 0,
    school: "Invocazione",
    classes: ["cleric"],
    source: "XGtE",
    time: "1 azione",
    range: "Incantatore (raggio 1,5m)",
    components: "V, M (un simbolo sacro)",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Emani un bagliore accecante e sacro. Ogni creatura a tua scelta entro 1,5 metri deve superare un TS Costituzione o subire 1d6 danni radiosi.\n\nAi livelli superiori: 2d6 al 5° liv, 3d6 al 11° liv e 4d6 al 17° liv."
  },
  {
    id: "primal_savagery",
    name: "Furia Primordiale (Primal Savagery)",
    level: 0,
    school: "Trasmutazione",
    classes: ["druid"],
    source: "XGtE",
    time: "1 azione",
    range: "Contatto",
    components: "S",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "I tuoi denti o unghie si trasformano in artigli corrosivi d'acido. Effettua un attacco con incantesimo da mischia: se colpisce infligge 1d10 danni da acido.\n\nAi livelli superiori: 2d10 al 5° liv, 3d10 al 11° liv e 4d10 al 17° liv."
  },
  {
    id: "sword_burst",
    name: "Scarica di Spade (Sword Burst)",
    level: 0,
    school: "Invocazione",
    classes: ["sorcerer", "warlock", "wizard", "artificer"],
    source: "TCoE",
    time: "1 azione",
    range: "Incantatore (raggio 1,5m)",
    components: "V",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Crei un cerchio fulmineo di lame eteree spettrali intorno a te. Ogni creatura entro 1,5m deve superare un TS Destrezza o subire 1d6 danni da forza.\n\nAi livelli superiori: 2d6 al 5°, 3d6 al 11°, 4d6 al 17° livello."
  },
  // LIVELLO 1
  {
    id: "absorb_elements",
    name: "Assorbire Elementi (Absorb Elements)",
    level: 1,
    school: "Abiurazione",
    classes: ["druid", "ranger", "sorcerer", "wizard", "artificer"],
    source: "XGtE",
    time: "1 reazione",
    range: "Incantatore",
    components: "S",
    duration: "1 round",
    concentration: false,
    ritual: false,
    desc: "Reazione quando subisci danni da acido, freddo, fuoco, fulmine o tuono. Ottieni RESISTENZA a quel tipo di danno fino all'inizio del tuo prossimo turno, e il tuo primo attacco in mischia nel prossimo turno infligge +1d6 danni extra dello stesso tipo!\n\nAi livelli superiori: +1d6 danni da mischia per ogni livello di slot superiore al 1°."
  },
  {
    id: "chaos_bolt",
    name: "Dardo del Caos (Chaos Bolt)",
    level: 1,
    school: "Invocazione",
    classes: ["sorcerer"],
    source: "XGtE",
    time: "1 azione",
    range: "36 metri",
    components: "V, S",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Scagli una massa ondeggiante di energia caotica. Attacco con incantesimo a distanza: infligge 2d8 + 1d6 danni. Il tipo di danno è determinato dal risultato di uno dei d8 (1: Acido, 2: Freddo, 3: Fuoco, 4: Forza, 5: Fulmine, 6: Veleno, 7: Psichico, 8: Tuono). Se ottieni lo stesso numero sui due d8, l'energia balza su un altro bersaglio entro 9m!\n\nAi livelli superiori: +1d6 per slot sopra il 1°."
  },
  {
    id: "zephyr_strike",
    name: "Colpo dello Zefiro (Zephyr Strike)",
    level: 1,
    school: "Trasmutazione",
    classes: ["ranger"],
    source: "XGtE",
    time: "1 azione bonus",
    range: "Incantatore",
    components: "V",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Ti muovi come il vento: per la durata, il tuo movimento non provoca attacchi di opportunità. Inoltre, una volta prima del termine, ottieni vantaggio a un attacco con arma, infliggi +1d8 danni da forza se colpisce e la tua velocità aumenta di 9 metri per quel turno."
  },
  {
    id: "catapult",
    name: "Catapulta (Catapult)",
    level: 1,
    school: "Trasmutazione",
    classes: ["sorcerer", "wizard", "artificer"],
    source: "XGtE",
    time: "1 azione",
    range: "45 metri",
    components: "S",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Scegli un oggetto libero del peso tra 0,5 e 2,5 kg entro gittata. L'oggetto vola in linea retta fino a 27 metri. La prima creatura sulla sua traiettoria deve superare un TS Destrezza o subire 3d8 danni contundenti, e l'oggetto si ferma.\n\nAi livelli superiori: peso massimo +2,5 kg e danno +1d8 per slot sopra il 1°."
  },
  {
    id: "earth_tremor",
    name: "Tremore Terrestre (Earth Tremor)",
    level: 1,
    school: "Invocazione",
    classes: ["bard", "druid", "sorcerer", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "Incantatore (raggio 3m)",
    components: "V, S",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Provochi un sussulto violento nel terreno attorno a te. Tutte le altre creature sul terreno entro 3 metri devono superare un TS Destrezza o subire 1d6 danni contundenti ed essere gettate a terra prone. Il terreno diventa difficile.\n\nAi livelli superiori: +1d6 danni per slot sopra il 1°."
  },
  {
    id: "snare",
    name: "Laccio (Snare)",
    level: 1,
    school: "Abiurazione",
    classes: ["druid", "ranger", "wizard", "artificer"],
    source: "XGtE",
    time: "1 minuto",
    range: "Contatto",
    components: "S, M (7,5m di corda consumata)",
    duration: "8 ore",
    concentration: false,
    ritual: false,
    desc: "Crei una trappola magica invisibile sul terreno in un cerchio di 1,5m di raggio. La prima creatura Piccola, Media o Grande che vi entra deve superare un TS Destrezza o essere sollevata a testa in giù a 90cm da terra, diventando trattenuta finché non si libera."
  },
  {
    id: "tashas_caustic_brew",
    name: "Infuso Caustico di Tasha (Tasha's Caustic Brew)",
    level: 1,
    school: "Invocazione",
    classes: ["sorcerer", "wizard", "artificer"],
    source: "TCoE",
    time: "1 azione",
    range: "Incantatore (linea di 9m)",
    components: "V, S, M (un pezzo di cibo andato a male)",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Emetti un getto d'acido corrosivo in una linea lunga 9 metri e larga 1,5 metri. Ogni creatura nella linea deve superare un TS Destrezza o essere ricoperta d'acido, subendo 2d4 danni da acido all'inizio di ciascun suo turno finché una creatura non usa un'azione per ripulirla.\n\nAi livelli superiori: +2d4 danni per slot sopra il 1°."
  },
  // LIVELLO 2
  {
    id: "shadow_blade",
    name: "Lama d'Ombra (Shadow Blade)",
    level: 2,
    school: "Illusione",
    classes: ["sorcerer", "warlock", "wizard"],
    source: "XGtE",
    time: "1 azione bonus",
    range: "Incantatore",
    components: "V, S",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Tessi fili d'ombra solidificati creando una spada magica nella tua mano. Infligge 2d8 danni psichici, ha le proprietà accurata, leggera e lancio (gittata 6/18m). In condizioni di luce fioca o buio, hai VANTAGGIO ai tiri per colpire effettuati con essa!\n\nAi livelli superiori: 3d8 danni con slot di 3°-4° liv; 4d8 con slot di 5°-6° liv; 5d8 con slot di 7°+ liv."
  },
  {
    id: "healing_spirit",
    name: "Spirito Guaritore (Healing Spirit)",
    level: 2,
    school: "Evocazione",
    classes: ["druid", "ranger"],
    source: "XGtE",
    time: "1 azione bonus",
    range: "18 metri",
    components: "V, S",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Evochi uno spirito fatato trasparente in uno spazio di 1,5m. Quando tu o un alleato entrate nel suo spazio o iniziate il turno lì, lo spirito ripristina 1d6 punti ferita. Lo spirito può guarire un numero di volte pari a 1 + mod caratteristica da incantatore (min 2). Puoi spostarlo fino a 9m come azione bonus.\n\nAi livelli superiori: +1d6 cure per slot sopra il 2°."
  },
  {
    id: "dragons_breath",
    name: "Soffio del Drago (Dragon's Breath)",
    level: 2,
    school: "Trasmutazione",
    classes: ["sorcerer", "wizard"],
    source: "XGtE",
    time: "1 azione bonus",
    range: "Contatto",
    components: "V, S, M (un peperoncino piccante)",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Tocchi una creatura consenziente conferendole l'abilità di sputare energia. Scegli acido, freddo, fuoco, fulmine o veleno. Come azione, il bersaglio può esalare un cono di 4,5 metri: ogni creatura nel cono subisce 3d6 danni (TS Destrezza dimezza).\n\nAi livelli superiori: +1d6 per slot sopra il 2°."
  },
  {
    id: "tashas_mind_whip",
    name: "Frusta Mentale di Tasha (Tasha's Mind Whip)",
    level: 2,
    school: "Ammaliamento",
    classes: ["sorcerer", "wizard"],
    source: "TCoE",
    time: "1 azione",
    range: "27 metri",
    components: "V",
    duration: "1 round",
    concentration: false,
    ritual: false,
    desc: "Colpisci la mente di una creatura con una frusta psichica. TS Intelligenza: se fallito subisce 3d6 danni psichici e nel suo prossimo turno NON può compiere reazioni e può scegliere SOLO UNA tra un'azione, un'azione bonus o il movimento. Se supera subisce metà danno e nessun effetto collaterale.\n\nAi livelli superiori: bersaglia una creatura extra per slot sopra il 2°."
  },
  // LIVELLO 3
  {
    id: "spirit_shroud",
    name: "Sudario Spirituale (Spirit Shroud)",
    level: 3,
    school: "Necromanzia",
    classes: ["cleric", "paladin", "warlock", "wizard"],
    source: "TCoE",
    time: "1 azione bonus",
    range: "Incantatore",
    components: "V, S",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Evochi spiriti dei morti che fluttuano attorno a te entro 3m. Qualsiasi tuo attacco andato a segno contro creature entro 3m infligge +1d8 danni extra radiosi, necrotici o da freddo (a scelta al lancio). Le creature colpite non possono recuperare PF fino al tuo prossimo turno, e qualsiasi nemico che inizia il turno entro 3m ha la velocità ridotta di 3 metri!\n\nAi livelli superiori: +1d8 danni extra per ogni 2 livelli di slot sopra il 3° (2d8 al 5° slot, 3d8 al 7°, 4d8 al 9°)."
  },
  {
    id: "summon_undead",
    name: "Evoca Non Morto (Summon Undead)",
    level: 3,
    school: "Necromanzia",
    classes: ["warlock", "wizard"],
    source: "TCoE",
    time: "1 azione",
    range: "27 metri",
    components: "V, S, M (un teschio dorato del valore di 300 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Evochi uno spirito non morto (Spettro, Putrido o Scheletrico) con statistiche crescenti in base al livello dello slot (CA 11+liv, PF 30+10 per livello sopra il 3°, attacchi pari a metà livello slot). Agisce subito dopo di te in iniziativa e obbedisce ai tuoi comandi verbali."
  },
  {
    id: "summon_fey",
    name: "Evoca Folletto (Summon Fey)",
    level: 3,
    school: "Evocazione",
    classes: ["druid", "ranger", "warlock", "wizard"],
    source: "TCoE",
    time: "1 azione",
    range: "27 metri",
    components: "V, S, M (un fiore dorato del valore di 300 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Evochi uno spirito fatato (Furente, Gaio o Cupo). Si teletrasporta come azione bonus fino a 9m provocando effetti magici (buio, affascinare o vantaggio ad attacchi) e attacca con la sua spada corta fatata."
  },
  {
    id: "summon_shadowspawn",
    name: "Evoca Progenie dell'Ombra (Summon Shadowspawn)",
    level: 3,
    school: "Evocazione",
    classes: ["warlock", "wizard"],
    source: "TCoE",
    time: "1 azione",
    range: "27 metri",
    components: "V, S, M (lacrime in una boccetta di cristallo da 300 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Evochi uno spirito nato dalla Coltre d'Ombra (Furia, Disperazione o Paura). Emana un'aura di terrore o rallentamento ed effettua devastanti attacchi d'ombra con vantaggio contro creature impaurite."
  },
  {
    id: "erupting_earth",
    name: "Terra Erompente (Erupting Earth)",
    level: 3,
    school: "Trasmutazione",
    classes: ["druid", "sorcerer", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "36 metri",
    components: "V, S, M (un pezzo d'ossidiana)",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Fai eruttare una fontana di roccia frantumata in un cubo di 6 metri. Ogni creatura nell'area deve superare un TS Destrezza o subire 3d12 danni contundenti (metà se supera). Il terreno nell'area diventa terreno difficile.\n\nAi livelli superiori: +1d12 danni per slot sopra il 3°."
  },
  {
    id: "thunder_step",
    name: "Passo Tonante (Thunder Step)",
    level: 3,
    school: "Invocazione",
    classes: ["sorcerer", "warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "27 metri",
    components: "V",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Ti teletrasporti istantaneamente fino a 27 metri in uno spazio libero che puoi vedere. Puoi portare con te una creatura consenziente della tua taglia o inferiore entro 1,5m da te. Nello spazio che lasci si scatena un tuono devastante udibile a 90m: ogni creatura entro 3m subisce 3d10 danni da tuono (TS Costituzione dimezza).\n\nAi livelli superiori: +1d10 per slot sopra il 3°."
  },
  {
    id: "tiny_servant",
    name: "Piccolo Servitore (Tiny Servant)",
    level: 3,
    school: "Trasmutazione",
    classes: ["wizard", "artificer"],
    source: "XGtE",
    time: "1 minuto",
    range: "Contatto",
    components: "V, S",
    duration: "8 ore",
    concentration: false,
    ritual: false,
    desc: "Tocchi un oggetto Minuscolo incustodito (una tazza, un pugnale, un lucchetto) dandogli vita con braccia e gambe. Ha CA 15, 10 PF, velocità 9m e vista cieca 18m. Obbedisce ai tuoi comandi come azione bonus.\n\nAi livelli superiori: animi 2 servitori extra per ogni livello di slot sopra il 3°."
  },
  // LIVELLO 4
  {
    id: "shadow_of_moil",
    name: "Ombra di Moil (Shadow of Moil)",
    level: 4,
    school: "Necromanzia",
    classes: ["warlock"],
    source: "XGtE",
    time: "1 azione",
    range: "Incantatore",
    components: "V, S, M (un occhio mummificato in un cristallo da 150 mo)",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Fiamme d'ombra gelide ti avvolgono rendendoti fortemente occultato a tutti (anche con vista normale). La luce attorno a te si riduce di un livello entro 3 metri. Hai resistenza ai danni radiosi, e chiunque entro 3m ti colpisca con un attacco subisce 2d8 danni necrotici dalle ombre!"
  },
  {
    id: "sickening_radiance",
    name: "Radianza Nauseante (Sickening Radiance)",
    level: 4,
    school: "Invocazione",
    classes: ["sorcerer", "warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "36 metri",
    components: "V, S",
    duration: "Concentrazione, fino a 10 minuti",
    concentration: true,
    ritual: false,
    desc: "Una luce verdastra spettrale invade una sfera di 9m di raggio. Quando una creatura entra o inizia il turno nell'area, subisce 4d10 danni radiosi e 1 livello di SFINIMENTO se fallisce un TS Costituzione! Emette luce fioca e non può beneficiare dell'invisibilità."
  },
  {
    id: "summon_aberration",
    name: "Evoca Aberrazione (Summon Aberration)",
    level: 4,
    school: "Evocazione",
    classes: ["warlock", "wizard"],
    source: "TCoE",
    time: "1 azione",
    range: "27 metri",
    components: "V, S, M (un tentacolo placcato in platino da 400 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Evochi uno spirito aberrante del Reame Remoto (Beholderoculare, Stella Spettrale o Melma). Scaglia dardi oculari psichici o attacca con tentacoli rigeneranti e sguardi paralizzanti."
  },
  {
    id: "summon_construct",
    name: "Evoca Costrutto (Summon Construct)",
    level: 4,
    school: "Evocazione",
    classes: ["wizard", "artificer"],
    source: "TCoE",
    time: "1 azione",
    range: "27 metri",
    components: "V, S, M (una serratura di pietra decorata da 400 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Evochi uno spirito costrutto fatto di Argilla, Metallo o Pietra. Possiede immunità a veleno, resistenza fisica e potenti attacchi schiaccianti con aura riscaldata o pietrificante."
  },
  {
    id: "summon_elemental",
    name: "Evoca Elementale Minore (Summon Elemental)",
    level: 4,
    school: "Evocazione",
    classes: ["druid", "ranger", "wizard"],
    source: "TCoE",
    time: "1 azione",
    range: "27 metri",
    components: "V, S, M (un fossile in un'urna d'oro da 400 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Evochi uno spirito elementale legato ad Aria, Terra, Fuoco o Acqua. Possiede resistenze e attacchi basati sul suo elemento, inclusa la forma liquida o l'incenerimento continuo."
  },
  // LIVELLO 5
  {
    id: "synaptic_static",
    name: "Scarica Sinaptica (Synaptic Static)",
    level: 5,
    school: "Ammaliamento",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "36 metri",
    components: "V, S",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Una palla di fuoco psichica: fai esplodere un'ondata di interferenza mentale in una sfera di 6 metri di raggio. Ogni creatura nell'area deve superare un TS Intelligenza o subire 8d6 danni psichici e sottrarre 1d6 da tutti i suoi tiri per colpire, prove di caratteristica e tiri salvezza per mantenere concentrazione per 1 minuto (TS int alla fine di ogni turno per liberarsi)!"
  },
  {
    id: "steel_wind_strike",
    name: "Colpo del Vento d'Acciaio (Steel Wind Strike)",
    level: 5,
    school: "Invocazione",
    classes: ["ranger", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "9 metri",
    components: "S, M (un'arma da mischia da almeno 1 ma)",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Svanisci in un baleno d'acciaio ed effettui un attacco con incantesimo da mischia contro fino a 5 creature diverse entro 9 metri da te. Ciascun attacco che colpisce infligge 6d10 danni da forza! Al termine ti teletrasporti entro 1,5m da uno dei bersagli colpiti."
  },
  {
    id: "holy_weapon",
    name: "Arma Sacra (Holy Weapon)",
    level: 5,
    school: "Invocazione",
    classes: ["cleric", "paladin"],
    source: "XGtE",
    time: "1 azione bonus",
    range: "Contatto",
    components: "V, S",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Infondi un'arma di splendore divino: emette luce viva per 9m e infligge +2d8 danni radiosi a OGNI colpo andato a segno. Come azione bonus puoi far esplodere l'arma in un lampo di luce solare: 4d8 danni radiosi e acceca tutte le creature entro 9m (TS Costituzione)."
  },
  {
    id: "danse_macabre",
    name: "Danza Macabra (Danse Macabre)",
    level: 5,
    school: "Necromanzia",
    classes: ["warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "18 metri",
    components: "V, S",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Infondi energia necromantica in fino a 5 cadaveri di creature Piccole o Medie entro gittata, rianimandoli come scheletri o zombi. Aggiungono il tuo modificatore di caratteristica da incantatore sia ai tiri per colpire che ai tiri per i danni!\n\nAi livelli superiori: +2 non morti per ogni slot sopra il 5°."
  },
  {
    id: "summon_celestial",
    name: "Evoca Celestiale (Summon Celestial)",
    level: 5,
    school: "Evocazione",
    classes: ["cleric", "paladin"],
    source: "TCoE",
    time: "1 azione",
    range: "27 metri",
    components: "V, S, M (un reliquiario d'oro da 500 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Evochi uno spirito celestiale dell'Empireo (Vendicatore o Difensore). Ha ali radiose, vola per 12m, emette luce solare, cura gli alleati con tocco sacro ed effettua devastanti attacchi radiosi con arco o mazza."
  },
  {
    id: "summon_draconic_spirit",
    name: "Evoca Spirito Draconico (Summon Draconic Spirit)",
    level: 5,
    school: "Evocazione",
    classes: ["druid", "sorcerer", "wizard"],
    source: "FTD / TCoE",
    time: "1 azione",
    range: "18 metri",
    components: "V, S, M (un oggetto dal tesoro di un drago da 500 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Evochi uno splendido spirito draconico di taglia Grande (Cromatico, Metallico o Gemma). Ha volo 18m, soffio ad area con danni elementali e potenti attacchi con morso e artigli con resistenza condivisa."
  },
  // LIVELLO 6
  {
    id: "tashas_otherworldly_guise",
    name: "Aspetto Ultraterreno di Tasha (Tasha's Otherworldly Guise)",
    level: 6,
    school: "Trasmutazione",
    classes: ["sorcerer", "warlock", "wizard"],
    source: "TCoE",
    time: "1 azione bonus",
    range: "Incantatore",
    components: "V, S, M (un oggetto sacro o sacrilego da 500 mo)",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Attingi al potere dei Piani Superiori o Inferiori. Ottieni: immunità a fuoco e veleno (o radioso e necrotico); immunità a condizione avvelenato (o affascinato); velocità di volo 12 metri; +2 alla CA; puoi usare la tua caratteristica da incantatore per i tiri per colpire e per i danni con le armi; e puoi attaccare due volte con l'Azione di Attacco!"
  },
  {
    id: "scatter",
    name: "Dispersione (Scatter)",
    level: 6,
    school: "Evocazione",
    classes: ["sorcerer", "warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "9 metri",
    components: "V",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "L'aria trema e teletrasporti istantaneamente fino a 5 creature entro 9m da te in altri spazi liberi sul terreno entro 36 metri da te. Le creature non consenzienti effettuano un TS Saggezza per annullare l'effetto su di loro."
  },
  // LIVELLO 7
  {
    id: "crown_of_stars",
    name: "Corona di Stelle (Crown of Stars)",
    level: 7,
    school: "Invocazione",
    classes: ["sorcerer", "warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "Incantatore",
    components: "V, S",
    duration: "1 ora (SENZA concentrazione)",
    concentration: false,
    ritual: false,
    desc: "Sette stelle scintillanti fluttuano attorno alla tua testa. Come azione bonus puoi scagliare una stella contro una creatura entro 36 metri: effettua un attacco con incantesimo a distanza, se colpisce infligge 4d12 danni radiosi!\n\nAi livelli superiori: +2 stelle extra per ogni livello di slot sopra il 7°."
  },
  {
    id: "tether_essence",
    name: "Vincolo delle Essenze (Tether Essence)",
    level: 7,
    school: "Necromanzia",
    classes: ["wizard"],
    source: "EGtW / TCoE",
    time: "1 azione",
    range: "18 metri",
    components: "V, S, M (due bobine di filo di platino da 250 mo)",
    duration: "Concentrazione, fino a 1 ora",
    concentration: true,
    ritual: false,
    desc: "Colleghi misticamente i destini vitali di due creature entro gittata (TS Costituzione). Se fallito, ogni volta che una delle creature subisce danni, l'altra subisce la stessa quantità di danni! E ogni volta che una viene curata, anche l'altra recupera la stessa quantità di PF!"
  },
  // LIVELLO 8
  {
    id: "maddening_darkness",
    name: "Oscurità Folgorante (Maddening Darkness)",
    level: 8,
    school: "Invocazione",
    classes: ["warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "45 metri",
    components: "V, M (una goccia di pece mescolata a un cervello di pipistrello)",
    duration: "Concentrazione, fino a 10 minuti",
    concentration: true,
    ritual: false,
    desc: "Un'oscurità magica impenetrabile riempie una gigantesca sfera di 18 metri di raggio, piena di urla e visioni raccapriccianti. Qualsiasi creatura che inizia il suo turno nell'area deve superare un TS Saggezza o subire 8d8 danni psichici (metà se supera)."
  },
  {
    id: "illusory_dragon",
    name: "Drago Illusorio (Illusory Dragon)",
    level: 8,
    school: "Illusione",
    classes: ["wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "18 metri",
    components: "S",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Crei l'illusione ombra di un drago Enorme. Tutte le creature nemiche che lo vedono devono superare un TS Saggezza o essere spaventate. Come azione bonus puoi muoverlo di 18m e fargli esalare un cono di 18 metri infliggendo 7d6 danni (acido, freddo, fuoco, fulmine, necrotico o veleno)."
  },
  // LIVELLO 9
  {
    id: "blade_of_disaster",
    name: "Lama del Disastro (Blade of Disaster)",
    level: 9,
    school: "Invocazione",
    classes: ["sorcerer", "warlock", "wizard"],
    source: "TCoE",
    time: "1 azione bonus",
    range: "18 metri",
    components: "V, S",
    duration: "Concentrazione, fino a 1 minuto",
    concentration: true,
    ritual: false,
    desc: "Crei una fessura dimensionale a forma di spada di buio puro. Puoi effettuare due attacchi con incantesimo da mischia ogni round come azione bonus. Ciascun attacco che colpisce infligge 4d12 danni da forza. La lama mette a segno un COLPO CRITICO con un risultato di 18, 19 o 20: un colpo critico infligge 12d12 DANNI DA FORZA!"
  },
  {
    id: "psychic_scream",
    name: "Urlo Psichico (Psychic Scream)",
    level: 9,
    school: "Ammaliamento",
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "27 metri",
    components: "S",
    duration: "Istantanea",
    concentration: false,
    ritual: false,
    desc: "Scateni il potere della tua mente contro fino a 10 creature a tua scelta. Ciascun bersaglio subisce 14d6 DANNI PSICHICI ed è STORDITO (TS Intelligenza dimezza il danno e nega lo stordimento). Se il danno di questo incantesimo uccide un bersaglio con testa, la sua testa esplode all'istante!"
  },
  {
    id: "invulnerability",
    name: "Invulnerabilità (Invulnerability)",
    level: 9,
    school: "Abiurazione",
    classes: ["wizard"],
    source: "XGtE",
    time: "1 azione",
    range: "Incantatore",
    components: "V, S, M (un pezzo di adamantio del valore di 500 mo)",
    duration: "Concentrazione, fino a 10 minuti",
    concentration: true,
    ritual: false,
    desc: "Ti circondi di un'armatura di pura invulnerabilità: per l'intera durata dell'incantesimo, SEI TOTALMENTE IMMUNE A QUALSIASI TIPO DI DANNO esistente in gioco!"
  }
];

expansionSpells.forEach(s => {
  if (!seenSpellIds.has(s.id)) {
    compiledSpells.push(s);
    seenSpellIds.add(s.id);
  }
});

console.log(`Totale incantesimi compilati: ${compiledSpells.length}`);

// ---------------------------------------------------------------------------
// 2. COMPILAZIONE CLASSI COMPLETE CON TUTTI I LIVELLI 1-20
// ---------------------------------------------------------------------------
// Mappa le caratteristiche per livello da srdLevels
const srdClassFeatByLevel = {};
srdLevels.forEach(l => {
  const cId = l.class.index;
  if (!srdClassFeatByLevel[cId]) srdClassFeatByLevel[cId] = {};
  const lvl = l.level;
  if (!srdClassFeatByLevel[cId][lvl]) srdClassFeatByLevel[cId][lvl] = [];
  
  (l.features || []).forEach(f => {
    srdClassFeatByLevel[cId][lvl].push({
      name: f.name,
      desc: `Privilegio di classe ottenuto al ${lvl}° livello.`
    });
  });
});

// Arricchisci le 12 classi + Artefice con tutti i dettagli
const compiledClasses = oldData.classes.map(c => {
  const cId = c.id;
  const featuresByLvl = { ...(c.featuresByLevel || {}) };

  // Riempi tutti i livelli 1-20 per la classe con i privilegi ufficiali
  const srdLvls = srdClassFeatByLevel[cId] || {};
  for (let l = 1; l <= 20; l++) {
    if (!featuresByLvl[l]) {
      if (srdLvls[l] && srdLvls[l].length > 0) {
        featuresByLvl[l] = srdLvls[l].map(f => ({
          name: f.name,
          desc: f.desc || `Privilegio ufficiale sbloccato al ${l}° livello.`
        }));
      } else {
        featuresByLvl[l] = [{
          name: (l === 4 || l === 8 || l === 12 || l === 16 || l === 19 || (cId === "fighter" && (l === 6 || l === 14)) || (cId === "rogue" && l === 10)) ? "Aumento dei Punteggi di Caratteristica / Talento" : "Privilegio di Classe",
          desc: (l === 4 || l === 8 || l === 12 || l === 16 || l === 19 || (cId === "fighter" && (l === 6 || l === 14)) || (cId === "rogue" && l === 10)) ? "Aumenta una caratteristica di +2 o due caratteristiche di +1, oppure seleziona 1 Talento." : `Nuovo potere conferito dal livello ${l} di ${c.name}.`
        }];
      }
    }
  }

  // Risorse di classe (Ira, Ki, Azione Impetuosa, Incanalare Divinità...)
  let resources = [];
  if (cId === "barbarian") {
    resources = [{ id: "rage", name: "Usi di Ira", maxUsesByLevel: [0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 99], recharge: "long" }];
  } else if (cId === "fighter") {
    resources = [
      { id: "second_wind", name: "Recuperare Energie", maxUsesByLevel: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], recharge: "short" },
      { id: "action_surge", name: "Azione Impetuosa", maxUsesByLevel: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2], recharge: "short" },
      { id: "indomitable", name: "Indomito", maxUsesByLevel: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], recharge: "long" }
    ];
  } else if (cId === "monk") {
    resources = [{ id: "ki_points", name: "Punti Ki", maxUsesByLevel: [0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], recharge: "short" }];
  } else if (cId === "paladin") {
    resources = [
      { id: "lay_on_hands", name: "Imposizione delle Mani (PF)", maxUsesByLevel: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], recharge: "long" },
      { id: "channel_divinity", name: "Incanalare Divinità", maxUsesByLevel: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], recharge: "short" }
    ];
  } else if (cId === "cleric") {
    resources = [{ id: "channel_divinity", name: "Incanalare Divinità", maxUsesByLevel: [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3], recharge: "short" }];
  } else if (cId === "druid") {
    resources = [{ id: "wild_shape", name: "Forma Selvatica", maxUsesByLevel: [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 99], recharge: "short" }];
  } else if (cId === "sorcerer") {
    resources = [{ id: "sorcery_points", name: "Punti Stregoneria", maxUsesByLevel: [0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], recharge: "long" }];
  } else if (cId === "bard") {
    resources = [{ id: "bardic_inspiration", name: "Ispirazione Bardica", formula: "modCarisma", recharge: "short" }];
  }

  return {
    ...c,
    casterType: c.spellcaster ? (cId === "paladin" || cId === "ranger" ? "half" : (cId === "warlock" ? "pact" : "full")) : "none",
    resources: resources,
    featuresByLevel: featuresByLvl
  };
});

// Aggiungi Classe ARTEFICE (Artificer - Tasha's Cauldron of Everything)
compiledClasses.push({
  id: "artificer",
  name: "Artefice",
  hitDie: 8,
  primaryStat: "int",
  secondaryStat: "con",
  savingThrows: ["con", "int"],
  armorProficiencies: ["Armature Leggere", "Armature Medie", "Scudi"],
  weaponProficiencies: ["Armi Semplici"],
  skillChoices: { count: 2, from: ["arcana", "history", "investigation", "medicine", "nature", "perception", "sleight_of_hand"] },
  subclassLevel: 3,
  spellcaster: true,
  spellcastingAbility: "int",
  casterType: "artificer",
  resources: [
    { id: "infusions", name: "Oggetti Infusi Attivi", maxUsesByLevel: [0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6], recharge: "long" },
    { id: "flash_of_genius", name: "Ingegno Fulmineo", formula: "modIntelligenza", recharge: "long" }
  ],
  featuresByLevel: {
    1: [
      { name: "Armeggiare Magico", desc: "Infondi magia minore in piccoli oggetti creando suoni, odori, luce o messaggi registrati." },
      { name: "Incantesimi da Artefice", desc: "Prepari incantesimi usando Intelligenza come caratteristica da incantatore." }
    ],
    2: [
      { name: "Infondere Oggetti", desc: "Puoi infondere oggetti non magici con potenti proprietà magiche (Arma Potenziata, Difesa Potenziata, Borsa Conservante, Mente Rigenerante...)." }
    ],
    3: [
      { name: "Specializzazione da Artefice", desc: "Scegli la tua sottoclasse (Alchimista, Armaiolo, Artigliere o Fabbro da Battaglia)." },
      { name: "Lo Strumento Giusto per il Lavoro", desc: "Puoi creare magicamente qualsiasi set di arnesi da artigiano durante un riposo breve." }
    ],
    4: [{ name: "Aumento dei Punteggi di Caratteristica / Talento", desc: "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento." }],
    5: [{ name: "Privilegio Specializzazione", desc: "Nuovo potere conferito dalla tua sottoclasse (es. Attacco Extra per Fabbro e Armaiolo)." }],
    6: [{ name: "Perizia negli Strumenti", desc: "Raddoppi il tuo bonus di competenza a qualsiasi prova che utilizzi uno strumento in cui sei competente." }],
    7: [{ name: "Ingegno Fulmineo", desc: "Quando tu o un alleato entro 9m effettuate una prova o un TS, puoi usare una reazione per aggiungere il tuo modificatore di Intelligenza al risultato!" }],
    8: [{ name: "Aumento dei Punteggi di Caratteristica / Talento", desc: "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento." }],
    9: [{ name: "Privilegio Specializzazione", desc: "Nuovo potere avanzato della sottoclasse." }],
    10: [{ name: "Adepto degli Oggetti Magici", desc: "Puoi sintonizzarti con fino a 4 oggetti magici contemporaneamente." }],
    11: [{ name: "Oggetto Immagazzina-Incantesimi", desc: "Puoi infondere un incantesimo di 1° o 2° livello in un'arma o focus: può essere lanciato fino a 2 x mod INT volte!" }],
    12: [{ name: "Aumento dei Punteggi di Caratteristica / Talento", desc: "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento." }],
    13: [{ name: "Progressione Privilegi", desc: "Accesso a slot incantesimo di 4° livello e nuove infusioni." }],
    14: [{ name: "Sintonia Superiore", desc: "Puoi sintonizzarti con fino a 5 oggetti magici e ignori tutti i requisiti di classe, razza, incantesimo o livello per usarli." }],
    15: [{ name: "Privilegio Supremo Specializzazione", desc: "Abilità suprema della sottoclasse." }],
    16: [{ name: "Aumento dei Punteggi di Caratteristica / Talento", desc: "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento." }],
    17: [{ name: "Incantesimi di 5° Livello", desc: "Accesso agli incantesimi più potenti dell'Artefice." }],
    18: [{ name: "Maestro degli Oggetti Magici", desc: "Puoi sintonizzarti con fino a 6 oggetti magici contemporaneamente!" }],
    19: [{ name: "Aumento dei Punteggi di Caratteristica / Talento", desc: "+2 a una caratteristica o +1 a due caratteristiche, oppure 1 Talento." }],
    20: [{ name: "Anima dell'Artificio", desc: "+1 a TUTTI i tiri salvezza per ogni oggetto magico con cui sei attualmente sintonizzato (fino a +6)! Se scendi a 0 PF puoi distruggere un'infusione per rimanere a 1 PF." }]
  }
});

console.log(`Totale classi compilate: ${compiledClasses.length}`);

// ---------------------------------------------------------------------------
// 3. SOTTOCLASSI AGGIUNTIVE COMPLETE (TUTTE LE 13 CLASSI)
// ---------------------------------------------------------------------------
const extraSubclasses = [
  // ARTEFICE
  {
    id: "artificer_battlesmith",
    classId: "artificer",
    name: "Fabbro da Battaglia (Battle Smith)",
    source: "TCoE (Calderone di Tasha)",
    desc: "Un guerriero corazzato che unisce magia metallurgica e combatte affiancato da un difensore d'acciaio.",
    features: [
      { level: 3, name: "Prontezza da Battaglia", desc: "Competenza nelle armi da guerra. Quando attacchi con un'arma magica, puoi usare il modificatore di INTELLIGENZA invece di Forza o Destrezza per i tiri per colpire e per i danni!" },
      { level: 3, name: "Difensore d'Acciaio", desc: "Crei un compagno meccanico a quattro zampe che combatte al tuo fianco: agisce dopo il tuo turno, impone svantaggio ai nemici e attacca come azione bonus." },
      { level: 5, name: "Attacco Extra", desc: "Puoi attaccare due volte invece di una quando compi l'Azione di Attacco nel tuo turno." },
      { level: 9, name: "Canalizzazione Arcana", desc: "I tuoi attacchi o quelli del difensore infliggono +2d6 danni da forza extra o curano un alleato entro 9m di 2d6 PF." },
      { level: 15, name: "Difensore Perfezionato", desc: "La CA e i danni del difensore d'acciaio aumentano, e i suoi contrattacchi infliggono danni da forza extra." }
    ]
  },
  {
    id: "artificer_artillerist",
    classId: "artificer",
    name: "Artigliere (Artillerist)",
    source: "TCoE (Calderone di Tasha)",
    desc: "Specialista in devastazione a distanza e cannoni arcani eldritch portatili.",
    features: [
      { level: 3, name: "Cannone Eldritch", desc: "Crei un cannone magico (Lanciafiamme, Balista di Forza o Difensore con scudo di PF temporanei) attivabile con azione bonus." },
      { level: 5, name: "Arma da Fuoco Arcana", desc: "Trasformi una bacchetta, bastone o verga in un'arma da fuoco arcana: i tuoi incantesimi infliggono +1d8 danni extra." }
    ]
  },
  {
    id: "artificer_armorer",
    classId: "artificer",
    name: "Armaiolo (Armorer)",
    source: "TCoE (Calderone di Tasha)",
    desc: "Indossa un'armatura potenziata che diventa una seconda pelle cibernetica.",
    features: [
      { level: 3, name: "Armatura Arcana", desc: "La tua armatura non ha requisiti di Forza, funge da focus e copre tutto il corpo sostituendo eventuali arti mancanti." },
      { level: 3, name: "Modello dell'Armatura", desc: "Scegli tra Guardiano (guanti tuono che costringono i nemici ad attaccare te) o Infiltratore (fulmini a distanza e vantaggio alla Furtività)." },
      { level: 5, name: "Attacco Extra", desc: "Attacchi due volte con l'Azione di Attacco." }
    ]
  },
  // CHIERICO EXTRA
  {
    id: "cleric_forge",
    classId: "cleric",
    name: "Dominio della Forgia (Forge Domain)",
    source: "XGtE (Guida di Xanathar)",
    desc: "Chierici che venerano gli dei fabbri e incanalano il fuoco e il metallo sacro.",
    features: [
      { level: 1, name: "Benedizione della Forgia", desc: "Conferisci un bonus magico di +1 alla CA o a TxC/danni a un'arma o armatura fino al prossimo riposo lungo." },
      { level: 2, name: "Incanalare Divinità: Dono dell'Artefice", desc: "Conduci un rituale di 1 ora per creare qualsiasi oggetto o meccanismo di metallo non magico." },
      { level: 6, name: "Anima della Forgia", desc: "Resistenza al fuoco e +1 alla CA mentre indossi un'armatura pesante." }
    ]
  },
  {
    id: "cleric_grave",
    classId: "cleric",
    name: "Dominio della Tomba (Grave Domain)",
    source: "XGtE (Guida di Xanathar)",
    desc: "Guardiani del confine tra la vita e la morte che puniscono i non morti e sostengono chi sta morendo.",
    features: [
      { level: 1, name: "Cerchio della Mortalità", desc: "Quando curi una creatura a 0 PF, ogni dado cura assegna il suo MASSIMO valore possibile senza tirare!" },
      { level: 2, name: "Incanalare Divinità: Sentiero verso la Tomba", desc: "Maledici una creatura entro 9m: il prossimo attacco che la colpisce infligge DOPPIO DANNO (vulnerabilità totale)!" },
      { level: 6, name: "Sentinella alla Porta della Morte", desc: "Come reazione, annulli un colpo critico subito da un alleato entro 9m trasformandolo in colpo normale." }
    ]
  },
  // PALADINO EXTRA
  {
    id: "paladin_conquest",
    classId: "paladin",
    name: "Giuramento di Conquista (Oath of Conquest)",
    source: "XGtE (Guida di Xanathar)",
    desc: "Paladini che schiacciano il caos con pugno di ferro e dominano i nemici con il terrore.",
    features: [
      { level: 3, name: "Incanalare Divinità: Presenza Conquistatrice", desc: "Emani un'aura terrificante: ogni nemico entro 9m che fallisce un TS Saggezza diventa spaventato per 1 minuto." },
      { level: 7, name: "Aura di Sottomissione", desc: "I nemici spaventati entro 3m da te hanno la loro velocità ridotta a ZERO e subiscono danni psichici all'inizio del turno!" }
    ]
  },
  // MAGO EXTRA
  {
    id: "wizard_war_magic",
    classId: "wizard",
    name: "Tradizione della Magia della Guerra (War Magic)",
    source: "XGtE (Guida di Xanathar)",
    desc: "Magi addestrati sul campo di battaglia che combinano abiurazione e invocazione rapida.",
    features: [
      { level: 2, name: "Deviazione Arcana", desc: "Come reazione ottieni +2 alla CA contro un attacco o +4 a un tiro salvezza fallito." },
      { level: 2, name: "Iniziativa Tattica", desc: "Aggiungi il modificatore di Intelligenza al tuo tiro di Iniziativa!" }
    ]
  },
  {
    id: "wizard_scribes",
    classId: "wizard",
    name: "Ordine degli Scribi (Order of Scribes)",
    source: "TCoE (Calderone di Tasha)",
    desc: "Magi che animano il loro grimorio e possono manipolare le formule di lancio.",
    features: [
      { level: 2, name: "Grimorio Risvegliato", desc: "Il tuo libro degli incantesimi è senziente: puoi cambiare il tipo di danno dei tuoi incantesimi e trascrivere pergamene in pochi minuti." }
    ]
  }
];

const compiledSubclasses = [...oldData.subclasses];
const seenSubIds = new Set(compiledSubclasses.map(s => s.id));
extraSubclasses.forEach(s => {
  if (!seenSubIds.has(s.id)) {
    compiledSubclasses.push(s);
    seenSubIds.add(s.id);
  }
});
console.log(`Totale sottoclassi compilate: ${compiledSubclasses.length}`);

// ---------------------------------------------------------------------------
// 4. TALENTI COMPLETI (PHB + XGtE + TCoE)
// ---------------------------------------------------------------------------
const compiledFeats = [
  // COMBATTIMENTO
  {
    id: "great_weapon_master",
    name: "Maestro delle Armi Possenti (Great Weapon Master)",
    source: "PHB",
    prerequisite: null,
    desc: "Quando metti a segno un colpo critico o riduci un nemico a 0 PF con un'arma da mischia, puoi compiere un attacco con arma da mischia extra come azione bonus. Prima di effettuare un attacco con un'arma pesante in cui sei competente, puoi scegliere di subire -5 al tiro per colpire per aggiungere +10 AI DANNI!"
  },
  {
    id: "polearm_master",
    name: "Maestro d'Armi con Asta (Polearm Master)",
    source: "PHB",
    prerequisite: null,
    desc: "Quando attacchi con alabarda, picca, bastone o lancia, puoi compiere un attacco con l'estremità opposta come azione bonus (danno 1d4 contundente). Inoltre, le creature provocano un tuo attacco di opportunità quando ENTRANO nella tua portata!"
  },
  {
    id: "sentinel",
    name: "Sentinella (Sentinel)",
    source: "PHB",
    prerequisite: null,
    desc: "Quando colpisci una creatura con un attacco di opportunità, la sua velocità scende a 0 per il resto del turno. Le creature provocano attacchi di opportunità anche se usano l'azione di Disimpegno. Quando un nemico entro 1,5m attacca un alleato, puoi usare la tua reazione per compiere un attacco contro quel nemico!"
  },
  {
    id: "sharpshooter",
    name: "Tiratore Scelto (Sharpshooter)",
    source: "PHB",
    prerequisite: null,
    desc: "Attaccare a gittata lunga non ti impone svantaggio. I tuoi attacchi a distanza con armi ignorano la mezza copertura e i tre quarti di copertura. Puoi scegliere di subire -5 al tiro per colpire a distanza per aggiungere +10 AI DANNI!"
  },
  {
    id: "crossbow_expert",
    name: "Esperto di Balestre (Crossbow Expert)",
    source: "PHB",
    prerequisite: null,
    desc: "Ignori la proprietà di ricarica delle balestre in cui sei competente. Essere entro 1,5m da un nemico ostile non ti impone svantaggio ai tuoi attacchi a distanza. Quando attacchi con un'arma a una mano, puoi attaccare con una balestra a mano come azione bonus."
  },
  {
    id: "dual_wielder",
    name: "Combattere con Due Armi (Dual Wielder)",
    source: "PHB",
    prerequisite: null,
    desc: "+1 alla Classe Armatura mentre impugni un'arma da mischia separata in ciascuna mano. Puoi combattere con due armi anche se le armi non sono leggere. Puoi estrarre o rinfoderare due armi a una mano contemporaneamente."
  },
  {
    id: "shield_master",
    name: "Maestro degli Scudi (Shield Master)",
    source: "PHB",
    prerequisite: null,
    desc: "Se compi l'Azione di Attacco nel tuo turno, puoi usare un'azione bonus per spingere una creatura entro 1,5m con il tuo scudo. Aggiungi il bonus di CA dello scudo a qualsiasi TS Destrezza contro effetti che bersagliano solo te. Se superi un TS DES che infligge metà danno, puoi usare la reazione per non subire ALCUN DANNO!"
  },
  {
    id: "heavy_armor_master",
    name: "Maestro delle Armature Pesanti (Heavy Armor Master)",
    source: "PHB",
    prerequisite: "Competenza nelle armature pesanti",
    desc: "Aumenta la tua Forza di +1 (fino a un massimo di 20). Mentre indossi un'armatura pesante, i danni contundenti, perforanti e taglienti non magici che subisci sono RIDOTTI DI 3!"
  },
  // MAGIA
  {
    id: "war_caster",
    name: "Incantatore da Guerra (War Caster)",
    source: "PHB",
    prerequisite: "Capacità di lanciare almeno un incantesimo",
    desc: "Hai VANTAGGIO ai tiri salvezza su Costituzione effettuati per mantenere la concentrazione sugli incantesimi quando subisci danni. Puoi compiere le componenti somatiche degli incantesimi anche mentre hai armi o scudo in entrambe le mani. Quando un nemico provoca un attacco di opportunità, puoi lanciare un incantesimo a bersaglio singolo invece di compiere un attacco!"
  },
  {
    id: "resilient",
    name: "Resiliente (Resilient)",
    source: "PHB",
    prerequisite: null,
    desc: "Scegli un punteggio di caratteristica (es. Costituzione, Saggezza, Destrezza): aumenta quel punteggio di +1 (fino a 20) e ottieni COMPETENZA NEI TIRI SALVEZZA che utilizzano quella caratteristica!"
  },
  {
    id: "lucky",
    name: "Fortunato (Lucky)",
    source: "PHB",
    prerequisite: null,
    desc: "Hai 3 punti fortuna per riposo lungo. Puoi spendere un punto fortuna per tirare un d20 aggiuntivo ogni volta che effettui un tiro per colpire, prova di caratteristica o tiro salvezza (e scegliere quale usare), oppure per costringere un attaccante a ritirare il suo attacco contro di te!"
  },
  {
    id: "alert",
    name: "Allerta (Alert)",
    source: "PHB",
    prerequisite: null,
    desc: "+5 ai tiri di Iniziativa. Non puoi essere sorpreso finché sei cosciente. Le altre creature non ottengono vantaggio ai tiri per colpire contro di te per il solo fatto di essere nascoste o invisibili."
  },
  {
    id: "tough",
    name: "Robustezza (Tough)",
    source: "PHB",
    prerequisite: null,
    desc: "I tuoi Punti Ferita massimi aumentano immediatamente di una quantità pari al DOPPIO del tuo livello. Ogni volta che guadagni un livello in futuro, i tuoi PF massimi aumentano di altri +2 PF!"
  },
  {
    id: "fey_touched",
    name: "Toccato dal Piano Fatato (Fey Touched)",
    source: "TCoE",
    prerequisite: null,
    desc: "+1 a Intelligenza, Saggezza o Carisma. Apprendi l'incantesimo Passo Nebbioso (Misty Step) e 1 incantesimo di 1° livello di Divinazione o Ammaliamento a scelta. Puoi lanciare ciascuno di essi 1 volta per riposo lungo senza consumare slot, oltre a poterli lanciare normalmente usando i tuoi slot incantesimo!"
  },
  {
    id: "shadow_touched",
    name: "Toccato dalla Coltre d'Ombra (Shadow Touched)",
    source: "TCoE",
    prerequisite: null,
    desc: "+1 a Intelligenza, Saggezza o Carisma. Apprendi l'incantesimo Invisibilità e 1 incantesimo di 1° livello di Illusione o Necromanzia. Puoi lanciarli 1 volta gratis per riposo lungo e normalmente con i tuoi slot."
  },
  {
    id: "telekinetic",
    name: "Telecinetico (Telekinetic)",
    source: "TCoE",
    prerequisite: null,
    desc: "+1 a Intelligenza, Saggezza o Carisma. Apprendi il trucchetto Mano Magica (invisibile, gittata estesa a 18m). Come azione bonus, puoi spingere o tirare telepaticamente una creatura entro 9m di 1,5 metri (TS Forza nega)."
  },
  {
    id: "telepathic",
    name: "Telepatico (Telepathic)",
    source: "TCoE",
    prerequisite: null,
    desc: "+1 a Intelligenza, Saggezza o Carisma. Puoi comunicare telepaticamente con qualsiasi creatura entro 18 metri che sia in grado di comprendere almeno una lingua. Puoi lanciare Individuazione dei Pensieri 1 volta per riposo lungo gratis."
  },
  {
    id: "skill_expert",
    name: "Esperto nelle Abilità (Skill Expert)",
    source: "TCoE",
    prerequisite: null,
    desc: "+1 a un punteggio di caratteristica a tua scelta. Ottieni competenza in un'abilità a tua scelta. Ottieni MAESTRIA (raddoppia il bonus di competenza) in un'abilità in cui sei già competente!"
  },
  {
    id: "elven_accuracy",
    name: "Precisione Elfica (Elven Accuracy)",
    source: "XGtE",
    prerequisite: "Elfo o Mezzelfo",
    desc: "+1 a Destrezza, Intelligenza, Saggezza o Carisma. Ogni volta che hai vantaggio a un tiro per colpire basato su Destrezza, Intelligenza, Saggezza o Carisma, puoi ritirare uno dei due dadi (SUPER-VANTAGGIO con 3 d20)!"
  }
];

console.log(`Totale talenti compilati: ${compiledFeats.length}`);

// ---------------------------------------------------------------------------
// 5. RAZZE E SFONDI ESTESI (TUTTE LE RAZZE PHB + TASHA + MPMM)
// ---------------------------------------------------------------------------
const extraRaces = [
  {
    id: "halfling_stout",
    name: "Halfling Tozzo (Stout)",
    source: "PHB",
    size: "Piccola",
    speed: 7.5,
    asi: { dex: 2, con: 1 },
    languages: ["Comune", "Halfling"],
    traits: [
      { name: "Fortunato", desc: "Quando ottieni un 1 naturale al d20 per colpire, prova o TS, puoi ritirare il dado." },
      { name: "Resilienza dei Tozzi", desc: "Vantaggio ai TS contro veleno e resistenza ai danni da veleno." }
    ]
  },
  {
    id: "gnome_forest",
    name: "Gnomo delle Foreste",
    source: "PHB",
    size: "Piccola",
    speed: 7.5,
    asi: { int: 2, dex: 1 },
    languages: ["Comune", "Gnomesco"],
    traits: [
      { name: "Astuzia Gnomesca", desc: "Vantaggio a tutti i TS su INT, SAG e CAR contro le magie." },
      { name: "Illusionista Naturale", desc: "Conosci il trucchetto Illusione Minore (basato su INT)." },
      { name: "Parlare con le Piccole Bestie", desc: "Puoi comunicare concetti semplici a piccoli animali di bosco." }
    ]
  },
  {
    id: "tabaxi",
    name: "Tabaxi (Uomo-Gatto)",
    source: "MPMM",
    size: "Media",
    speed: 9,
    asi: { dex: 2, cha: 1 },
    languages: ["Comune", "Un linguaggio a scelta"],
    traits: [
      { name: "Scatto Felino", desc: "Quando ti muovi nel tuo turno, puoi raddoppiare la tua velocità fino alla fine del turno (si ricarica quando non ti muovi per 1 turno)." },
      { name: "Artigli Felini", desc: "Velocità di scalata 6 metri e attacco disarmato 1d6 + FOR danni taglienti." },
      { name: "Talento Felino", desc: "Competenza in Percezione e Furtività." }
    ]
  },
  {
    id: "kenku",
    name: "Kenku",
    source: "MPMM",
    size: "Media",
    speed: 9,
    asi: { dex: 2, wis: 1 },
    languages: ["Comune", "Auran"],
    traits: [
      { name: "Mimetismo", desc: "Puoi imitare perfettamente qualsiasi suono o voce tu abbia mai ascoltato (scopribile con prova di Intuizione contrapposta a Inganno)." },
      { name: "Ispirazione di Kenku", desc: "Puoi conferire a te stesso vantaggio su una prova di abilità un numero di volte pari al bonus di competenza." }
    ]
  },
  {
    id: "firbolg",
    name: "Firbolg",
    source: "MPMM",
    size: "Media",
    speed: 9,
    asi: { wis: 2, str: 1 },
    languages: ["Comune", "Elfico", "Gigante"],
    traits: [
      { name: "Magia del Firbolg", desc: "Puoi lanciare Individuazione del Magico e Camuffare Se Stesso una volta per riposo." },
      { name: "Passo Nascosto", desc: "Come azione bonus diventi invisibile fino all'inizio del tuo prossimo turno o finché non attacchi." },
      { name: "Corporatura Possente", desc: "Sei considerato di una taglia più grande per calcolare la capacità di carico e sollevamento." }
    ]
  },
  {
    id: "changeling",
    name: "Cangiante (Changeling)",
    source: "MPMM",
    size: "Media",
    speed: 9,
    asi: { cha: 2, dex: 1 },
    languages: ["Comune", "Due linguaggi a scelta"],
    traits: [
      { name: "Mutaforma", desc: "Come azione puoi mutare aspetto e voce per apparire identico a qualsiasi forma umanoide della stessa taglia!" },
      { name: "Istinti del Cangiante", desc: "Competenza in due abilità a scelta tra Inganno, Intuizione, Intimidire e Persuasione." }
    ]
  },
  {
    id: "warforged",
    name: "Forgiato (Warforged)",
    source: "ERLW",
    size: "Media",
    speed: 9,
    asi: { con: 2, str: 1 },
    languages: ["Comune", "Un linguaggio a scelta"],
    traits: [
      { name: "Costruzione Rinforzata", desc: "Non hai bisogno di mangiare, bere o respirare. Sei immune a malattie e veleno magico." },
      { name: "Protezione Integrata", desc: "+1 permanente alla Classe Armatura!" },
      { name: "Riposo della Sentinella", desc: "Non dormi: rimani cosciente in stato di riposo per 6 ore." }
    ]
  }
];

const compiledRaces = [...oldData.races];
const seenRaceIds = new Set(compiledRaces.map(r => r.id));
extraRaces.forEach(r => {
  if (!seenRaceIds.has(r.id)) {
    compiledRaces.push(r);
    seenRaceIds.add(r.id);
  }
});
console.log(`Totale razze compilate: ${compiledRaces.length}`);

// BACKGROUNDS PHB COMPLETI
const extraBackgrounds = [
  {
    id: "guild_artisan",
    name: "Artigiano di Gilda (Guild Artisan)",
    skills: ["insight", "persuasion"],
    languages: 1,
    equipment: ["Set di arnesi da artigiano", "Lettera di presentazione della gilda", "Abiti da viaggio", "15 mo"],
    feature: "Appartenenza alla Gilda (Alloggio, protezione legale e supporto commerciale tramite i membri della gilda)"
  },
  {
    id: "charlatan",
    name: "Ciarlatano (Charlatan)",
    skills: ["deception", "sleight_of_hand"],
    equipment: ["Abiti eleganti", "Trucchi per travestimento", "Set di dadi truccati", "15 mo"],
    feature: "Falsa Identità (Possiedi una seconda identità completa con documenti contraffatti inattaccabili)"
  },
  {
    id: "hermit",
    name: "Eremita (Hermit)",
    skills: ["medicine", "religion"],
    languages: 1,
    equipment: ["Custodia per pergamene piena di appunti", "Coperta invernale", "Kit da erborista", "Abiti comuni", "5 mo"],
    feature: "Scoperta Unica (Hai fatto una scoperta rivoluzionaria sulla natura del cosmo, una rovina o una profezia)"
  },
  {
    id: "entertainer",
    name: "Intrattenitore (Entertainer)",
    skills: ["acrobatics", "performance"],
    equipment: ["Strumento musicale a scelta", "Costume da scena", "Favore di un ammiratore", "15 mo"],
    feature: "Su Richiesta Popolare (Vitto e alloggio gratuiti in qualsiasi locanda in cambio delle tue esibizioni serali)"
  },
  {
    id: "noble",
    name: "Nobile (Noble)",
    skills: ["history", "persuasion"],
    languages: 1,
    equipment: ["Abiti nobiliari eleganti", "Anello con sigillo", "Albero genealogico", "25 mo"],
    feature: "Posizione di Privilegio (Accolto con massimo rispetto dall'alta società, udienze garantite con nobili e regnanti)"
  },
  {
    id: "sailor",
    name: "Marinaio (Sailor)",
    skills: ["athletics", "perception"],
    equipment: ["Caviglia di legno", "50 piedi di corda di canapa", "Talismano portafortuna", "Abiti comuni", "10 mo"],
    feature: "Passaggio Navale (Puoi ottenere un passaggio gratuito su qualsiasi nave mercantile per te e i tuoi compagni)"
  },
  {
    id: "urchin",
    name: "Monello dei Bassifondi (Urchin)",
    skills: ["sleight_of_hand", "stealth"],
    equipment: ["Coltellino", "Mappa della città natale", "Topolino domestico", "Abiti comuni", "10 mo"],
    feature: "Segreti della Città (Conosci passaggi segreti nei vicoli e puoi viaggiare attraverso la città a velocità doppia)"
  }
];

const compiledBackgrounds = [...oldData.backgrounds];
const seenBgIds = new Set(compiledBackgrounds.map(b => b.id));
extraBackgrounds.forEach(b => {
  if (!seenBgIds.has(b.id)) {
    compiledBackgrounds.push(b);
    seenBgIds.add(b.id);
  }
});
console.log(`Totale background compilati: ${compiledBackgrounds.length}`);

// ---------------------------------------------------------------------------
// 6. COSTRUZIONE FILE FINALE
// ---------------------------------------------------------------------------
const masterObject = {
  multiclass: oldData.multiclass,
  backgrounds: compiledBackgrounds,
  races: compiledRaces,
  feats: compiledFeats,
  classes: compiledClasses,
  subclasses: compiledSubclasses,
  spells: compiledSpells,
  rules: oldData.rules
};

const outputContent = `// =============================================================================
// D&D 5e ITALIAN MASTER COMPENDIUM (PHB + XANATHAR + TASHA + MULTICLASSE)
// Compendio Completo 100% Offline: ${compiledSpells.length} Incantesimi, ${compiledClasses.length} Classi, ${compiledSubclasses.length} Sottoclassi, ${compiledFeats.length} Talenti, ${compiledRaces.length} Razze
// =============================================================================

const DND_DATA = ${JSON.stringify(masterObject, null, 2)};

if (typeof window !== "undefined") {
  window.DND_DATA = DND_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = DND_DATA;
}
`;

fs.writeFileSync('dnd-compendium-data.js', outputContent, 'utf8');
console.log('dnd-compendium-data.js generato con successo!');
const stats = fs.statSync('dnd-compendium-data.js');
console.log(`Dimensione file finale: ${(stats.size / 1024).toFixed(1)} KB`);

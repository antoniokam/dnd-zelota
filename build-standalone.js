const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
let html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(baseDir, 'app.css'), 'utf8');
const tailwind = fs.readFileSync(path.join(baseDir, 'tailwind.cdn.js'), 'utf8');
const compData = fs.readFileSync(path.join(baseDir, 'dnd-compendium-data.js'), 'utf8');
const engine = fs.readFileSync(path.join(baseDir, 'dnd-engine.js'), 'utf8');
let appJs = fs.readFileSync(path.join(baseDir, 'app.js'), 'utf8');
const kaelenJson = fs.readFileSync(path.join(baseDir, 'kaelen__stigmata__vane_dnd5e.json'), 'utf8');

// Replace external script/css links with inline scripts/styles
html = html.replace('<script src="./tailwind.cdn.js"></script>', '<script>\n' + tailwind + '\n</script>');
html = html.replace('<link rel="stylesheet" href="./app.css">', '<style>\n' + css + '\n</style>');
html = html.replace('<script src="./dnd-compendium-data.js"></script>', '<script>\n' + compData + '\n</script>');
html = html.replace('<script src="./dnd-engine.js"></script>', '<script>\n' + engine + '\n</script>');

// Make loadSavedState in appJs fallback directly to inlined Kaelen JSON without fetch()
const inlinedFallback = `
    const defaultKaelen = ${kaelenJson.trim()};
    this.activeCharId = DND_ENGINE.saveCharacter(defaultKaelen, "char_kaelen");
    this.applySheetData(defaultKaelen);
`;

appJs = appJs.replace(
  /fetch\('\.\/kaelen__stigmata__vane_dnd5e\.json'\)[\s\S]*?this\.updateAllCalculations\(\);\s*\}\);/,
  inlinedFallback
);

html = html.replace('<script src="./app.js"></script>', '<script>\n' + appJs + '\n</script>');

fs.writeFileSync(path.join(baseDir, 'ZELOTA_APP_OFFLINE.html'), html, 'utf8');
console.log('Successfully generated ZELOTA_APP_OFFLINE.html! Size:', (fs.statSync(path.join(baseDir, 'ZELOTA_APP_OFFLINE.html')).size / 1024).toFixed(1), 'KB');

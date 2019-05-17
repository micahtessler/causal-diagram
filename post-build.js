const fs = require('fs');
const path = require('path');

const docsFolder = path.join(__dirname, 'docs');

const index_html = path.join(docsFolder, 'index.html');
const four04_html = path.join(docsFolder, '404.html');

const data = fs.readFileSync(index_html);
fs.writeFileSync(four04_html, data);
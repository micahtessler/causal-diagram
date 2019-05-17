const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'dist', 'causal-diagram');
const docsFolder = path.join(__dirname, 'docs');

function handleErr(desc, err) {
    if (err) {
        console.err(desc, err);
        throw err;
    }
}

//Delete existing docs
const docsExists = fs.existsSync(docsFolder);
if (docsExists) {
    const docFiles = fs.readdirSync(docsFolder);
    docFiles.forEach((file) => {
        const filePath = path.join(docsFolder, file);
        fs.unlinkSync(filePath);
    });
    fs.rmdirSync(docsFolder);
}


fs.mkdirSync(docsFolder);

const distFiles = fs.readdirSync(directoryPath);
distFiles.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const data = fs.readFileSync(filePath);
    const outputPath = path.join(docsFolder, file);
    fs.writeFileSync(outputPath, data);
});

// @ts-check
const fs = require('fs');
const path = require('path');
const { embedded_languages } = require('./languages');

const generateSnippets = () => {
    return embedded_languages.reduce((out, embedded_languages) => {
        out[`Highlight ${embedded_languages.language}`] = {
            "prefix": [
                `h${embedded_languages.attr}`,
                `highlight-${embedded_languages.language}`
            ],
            "body": [
                embedded_languages.block_begin,
                "$0",
                embedded_languages.block_end
            ],
            "description": `Sign pair for highlighting ${embedded_languages.language} code.`
        }        
        return out;
    }, {});
};

exports.updateSnippets = () => {
    const packageJsonPath = path.join(__dirname, '..', 'snippets', 'highlight-blocks.code-snippets');
    const json = generateSnippets();
    fs.writeFileSync(packageJsonPath, JSON.stringify(json, null, 4));
};

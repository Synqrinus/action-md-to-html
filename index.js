const core = require('@actions/core');
const showdown = require('showdown');
const fs = require('fs');

try {
    const markdownText = fs.readFileSync(core.getInput('text'), 'utf8').toString().trim()
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdownText);
    fs.writeFileSync(core.getInput('html'), html, {encoding: "utf8", flag: "w"})
} catch (error) {
    core.setFailed(error.message);
}

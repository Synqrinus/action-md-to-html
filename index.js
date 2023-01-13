const core = require('@actions/core');
const showdown = require('showdown');
const cleanCSS = require('@node-minify/clean-css');
const minify = require('@node-minify/core');
const fs = require('fs');

try {
    const markdownText = fs.readFileSync(core.getInput('text'), 'utf8').toString().trim()
    const converter = new showdown.Converter();
    const htmlTitle = core.getInput('title');
    const htmlBody = converter.makeHtml(markdownText);
    const htmlStyle = core.getInput('style') ? await minify({
        compressor: cleanCSS,
        content: core.getInput('style')
    }) : ''
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${htmlTitle}</title><meta name="viewport" content="width=device-width, initial-scale=1"><style>${htmlStyle}</style></head><body>${htmlBody}</body></html>`
    fs.writeFileSync(core.getInput('html'), html, {encoding: "utf8", flag: "w"})
} catch (error) {
    core.setFailed(error.message);
}

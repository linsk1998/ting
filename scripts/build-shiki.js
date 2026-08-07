const fs = require("fs/promises");
const path = require("path");
const { createHighlighter } = require("shiki");
const cssVarTheme = require('github-vscode-themes/dist/light.json');

function kabaCase(str) {
	return str.replace(/\W/g, '-');
}

(async function() {
	let hl = await createHighlighter({
		themes: [cssVarTheme, 'github-light', 'github-dark'],
		langs: ['html', 'css', 'javascript', 'scss']
	});
	const lightCSSVars = hl.getTheme('github-light');
	const darkCSSVars = hl.getTheme('github-dark');
	const cssContents = [];
	lightCSSVars.settings.forEach(({ scope, settings }) => {
		if(!scope) {
			cssContents.push(`.shiki {`);
		} else if(Array.isArray(scope)) {
			cssContents.push(`${scope.map(s => `.shiki-${kabaCase(s)}`).join(',')} {`);
		} else {
			cssContents.push(`.shiki-${kabaCase(scope)} {`);
		}
		if(settings.foreground) cssContents.push(`color: ${settings.foreground}; `);
		if(settings.background) cssContents.push(`background: ${settings.background}; `);
		if(settings.fontStyle) {
			const arr = settings.fontStyle.split(' ');
			if(arr.includes('bold')) cssContents.push(`font-weight: bold; `);
			if(arr.includes('italic')) cssContents.push(`font-style: italic; `);
			if(arr.includes('underline')) cssContents.push(`text-decoration: underline; `);
			if(arr.includes('strikethrough')) cssContents.push(`text-decoration: line-through; `);
		}
		cssContents.push(`}\n`);
	});
	darkCSSVars.settings.forEach(({ scope, settings }) => {
		if(!scope) {
			cssContents.push(`.dark .shiki {`);
		} else if(Array.isArray(scope)) {
			cssContents.push(`${scope.map(s => `.dark .shiki-${kabaCase(s)}`).join(',')} {`);
		} else {
			cssContents.push(`.dark .shiki-${kabaCase(scope)} { `);
		}
		if(settings.foreground) cssContents.push(`color: ${settings.foreground}; `);
		if(settings.background) cssContents.push(`background: ${settings.background}; `);
		if(settings.fontStyle) {
			const arr = settings.fontStyle.split(' ');
			if(arr.includes('bold')) cssContents.push(`font-weight: bold; `);
			if(arr.includes('italic')) cssContents.push(`font-style: italic; `);
			if(arr.includes('underline')) cssContents.push(`text-decoration: underline; `);
			if(arr.includes('strikethrough')) cssContents.push(`text-decoration: line-through; `);
		}
		cssContents.push(`}\n`);
	});
	cssContents.push(`
.shiki { counter-reset: line; position: relative;}
.shiki-line::before {
    counter-increment: line;
    content: counter(line);
    display: block;
    text-align: right;
    color: #94a3b8;
    user-select: none;
    white-space: nowrap;
    position: absolute;
    left: 0;
    width: 21px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
@supports selector(:has(*)) {
	.shiki:has(>.shiki-line:nth-child(100)) {
		padding-left: 37px;
	}
	.shiki:has(>.shiki-line:nth-child(100))>.shiki-line::before {
		width: 28px;
	}
	.shiki:has(>.shiki-line:nth-child(1000)) {
		padding-left: 43;
	}
	.shiki:has(>.shiki-line:nth-child(1000))>.shiki-line::before {
		width: 34px;
	}
}`);
	await fs.writeFile(path.resolve(__dirname, '../docs/ting/shiki.css'), cssContents.join(''));
})();

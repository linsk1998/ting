const fs = require("fs/promises");
const path = require("path");
const { createHighlighter } = require("shiki")

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
		if(settings.foreground) cssContents.push(`color: ${settings.foreground};`);
		if(settings.background) cssContents.push(`background: ${settings.background};`);
		if(settings.fontStyle) {
			const arr = settings.fontStyle.split(' ');
			if(arr.includes('bold')) cssContents.push(`font-weight: bold;`);
			if(arr.includes('italic')) cssContents.push(`font-style: italic;`);
			if(arr.includes('underline')) cssContents.push(`text-decoration: underline;`);
			if(arr.includes('strikethrough')) cssContents.push(`text-decoration: line-through;`);
		}
		cssContents.push(`}\n`);
	});
	darkCSSVars.settings.forEach(({ scope, settings }) => {
		if(!scope) {
			cssContents.push(`.dark .shiki {`);
		} else if(Array.isArray(scope)) {
			cssContents.push(`${scope.map(s => `.dark .shiki-${kabaCase(s)}`).join(',')} {`);
		} else {
			cssContents.push(`.dark .shiki-${kabaCase(scope)} {`);
		}
		if(settings.foreground) cssContents.push(`color: ${settings.foreground};`);
		if(settings.background) cssContents.push(`background: ${settings.background};`);
		if(settings.fontStyle) {
			const arr = settings.fontStyle.split(' ');
			if(arr.includes('bold')) cssContents.push(`font-weight: bold;`);
			if(arr.includes('italic')) cssContents.push(`font-style: italic;`);
			if(arr.includes('underline')) cssContents.push(`text-decoration: underline;`);
			if(arr.includes('strikethrough')) cssContents.push(`text-decoration: line-through;`);
		}
		cssContents.push(`}\n`);
	});
	await fs.writeFile(path.resolve(__dirname, '../www/ting/shiki.css'), cssContents.join(''));
})();

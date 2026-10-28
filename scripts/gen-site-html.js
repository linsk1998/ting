const fs = require('fs/promises');
const path = require('path');
const header = require('./gen-site-header');
const footer = require('./gen-site-footer');

/**
 * 处理没有对应 .md 的 .html 文件，替换 <header> 和 <footer>
 * @param {string} sectionDir - section 目录路径
 * @param {string} name - 文件名（不含扩展名）
 * @param {string} [section] - section 名称，空字符串表示首页
 */
async function genSiteHtml(sectionDir, name, section) {
	if (section === undefined) {
		section = path.basename(sectionDir);
	}
	const htmlPath = path.join(sectionDir, `${name}.html`);
	let html = await fs.readFile(htmlPath, 'utf-8');

	const headerHtml = header(section);
	const footerHtml = footer();

	// 替换 <header>...</header>
	html = html.replace(/<header>[\s\S]*?<\/header>/, headerHtml);

	// 替换 <footer[^>]*>...</footer>
	html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/, footerHtml);

	await fs.writeFile(htmlPath, html, 'utf-8');
	const displayPath = section ? `docs/${section}/${name}.html` : `docs/${name}.html`;
	console.log(`Updated: ${displayPath}`);
}

module.exports = genSiteHtml;

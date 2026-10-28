const path = require('path');
const fs = require('fs/promises');
const { initRenderer } = require('./gen-site-renderer');
const genSiteView = require('./gen-site-view');
const genSiteList = require('./gen-site-list');
const genSiteHtml = require('./gen-site-html');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');

/**
 * 根据单个 markdown 文件重新生成对应 html 页面
 * - docs/{section}/{page}.md   → 只重建 docs/{section}/{page}.html
 * - docs/{section}/index.md    → 重建该栏目（index.html + 各详情页），保持栏目导航一致
 * - docs/index.html 为手工维护页面，仅当传入 docs/index.md 时替换其导航头尾
 * @param {string} mdFile - markdown 文件的绝对或相对路径
 */
async function genFromMarkdown(mdFile) {
	mdFile = path.resolve(mdFile);
	const rel = path.relative(DOCS_DIR, mdFile);

	if (rel.startsWith('..') || path.isAbsolute(rel) || !rel.endsWith('.md')) {
		throw new Error(`文件不在 docs 目录下或不是 markdown：${mdFile}`);
	}

	const stat = await fs.stat(mdFile);
	if (!stat.isFile()) {
		throw new Error(`不是文件：${mdFile}`);
	}

	const sectionDir = path.dirname(mdFile);
	const name = path.basename(mdFile, '.md');

	await initRenderer();

	// docs/index.md → 首页 index.html 为手工维护，只同步导航头尾
	if (rel === 'index.md') {
		await fs.access(path.join(DOCS_DIR, 'index.html'));
		await genSiteHtml(DOCS_DIR, 'index', '');
		return;
	}

	// docs/{section}/index.md → 重建整个栏目
	if (name === 'index') {
		const section = path.relative(DOCS_DIR, sectionDir);
		const entries = await fs.readdir(sectionDir, { withFileTypes: true });
		const names = entries
			.filter(e => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
			.map(e => e.name.replace(/\.md$/, ''));
		await genSiteList(section, names);
		return;
	}

	// docs/{section}/{page}.md → 只重建当前页面
	await genSiteView(sectionDir, name);
}

module.exports = genFromMarkdown;

(async function () {
	const target = process.argv[2];
	if (!target) {
		console.error('用法: node scripts/gen-page.js <docs 下的 markdown 文件>');
		console.error('示例: node scripts/gen-page.js docs/components/tree.md');
		process.exit(1);
	}
	try {
		await genFromMarkdown(target);
		console.log('Done.');
	} catch (error) {
		console.error(error.message || error);
		process.exit(1);
	}
})();

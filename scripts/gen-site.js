const path = require('path');
const fs = require('fs/promises');
const { initRenderer } = require('./gen-site-renderer');
const genSiteList = require('./gen-site-list');
const genSiteHtml = require('./gen-site-html');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');

(async function() {
	await initRenderer();

	// 处理首页 docs/index.html
	try {
		await fs.access(path.join(DOCS_DIR, 'index.html'));
		await genSiteHtml(DOCS_DIR, 'index', '');
	} catch {
		// 首页不存在，跳过
	}

	// 扫描 docs/ 下所有包含 index.md 的子目录作为 section
	const entries = await fs.readdir(DOCS_DIR, { withFileTypes: true });
	for (const entry of entries) {
		if (!entry.isDirectory()) continue;
		const sectionDir = path.join(DOCS_DIR, entry.name);
		try {
			await fs.access(path.join(sectionDir, 'index.md'));
		} catch {
			continue;
		}
		// 扫描该 section 下所有 *.md（排除 index.md）作为详情页
		const sectionEntries = await fs.readdir(sectionDir, { withFileTypes: true });
		const names = sectionEntries
			.filter(e => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
			.map(e => e.name.replace(/\.md$/, ''));

		await genSiteList(entry.name, names);

		// 处理没有对应 .md 的遗留 .html 文件
		const mdSet = new Set([...names, 'index']);
		const htmlFiles = sectionEntries.filter(e => e.isFile() && e.name.endsWith('.html'));
		for (const hf of htmlFiles) {
			const name = hf.name.replace(/\.html$/, '');
			if (!mdSet.has(name)) {
				await genSiteHtml(sectionDir, name);
			}
		}
	}
})();

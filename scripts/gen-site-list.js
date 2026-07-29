const fs = require('fs/promises');
const path = require('path');
const escapeHtml = require('escape-html');
const marked = require('marked');
const SECTION_MAP = require('./SECTION_MAP.json');
const header = require('./gen-site-header');
const footer = require('./gen-site-footer');
const genSiteView = require('./gen-site-view');
const { createRenderer } = require('./gen-site-renderer');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const WWW_DIR = path.join(ROOT, 'www');

/**
 * 生成栏目页面，输出到 www/{section}/index.html
 * @param {string} section - 栏目名（如 "getting-started"、"components" 等）
 * @param {string[]} names - 子页面名列表（如 ["template", "advanced"]）
 */
async function genSiteList(section, names) {
	const sectionDir = path.join(DOCS_DIR, section);
	const sectionTitle = SECTION_MAP[section] || section;
	const renderer = createRenderer();

	// 读取栏目总介绍 docs/{section}/index.md
	const overviewMd = await fs.readFile(path.join(sectionDir, 'index.md'), 'utf-8');
	const overviewHtml = marked.parse(overviewMd, { renderer });

	// 读取各子页面 docs/{section}/{name}-list.md
	const partsHtml = await Promise.all(names.map(async (name) => {
		const listPath = path.join(sectionDir, `${name}-list.md`);
		const viewPath = path.join(sectionDir, `${name}-view.md`);
		const listSource = await fs.readFile(listPath, 'utf-8');
		const listHtml = marked.parse(listSource, { renderer });
		try {
			await fs.access(viewPath);
			await genSiteView(viewPath, name);
			return `${listHtml}<p><a href="./${escapeHtml(name)}.html">使用方法</a></p>`;
		} catch {
			return listHtml;
		}
	}));

	// 组装完整 HTML 页面
	const html = `<!--BORDERBOX-->
<!DOCTYPE html>
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta name="renderer" content="webkit"/>
	<title>${escapeHtml(sectionTitle)} - Ting UI</title>
	<link href="../ting/ting.css" rel="stylesheet"/>
	<link rel="stylesheet" type="text/css" href="../ting/font-awesome.css"/>
	<script src="../ting/html5.js"></script>
	<script src="../ting/jquery.js"></script>
	<script src="../ting/ting.js"></script>
	</head>
	<body>
		${header(section)}
		<div class="container">
${overviewHtml}
${partsHtml.join('\n')}
		</div>
		${footer()}
	</body>
</html>`;

	// 写入 www/{section}/index.html
	const outputDir = path.join(WWW_DIR, section);
	await fs.mkdir(outputDir, { recursive: true });
	await fs.writeFile(path.join(outputDir, 'index.html'), html, 'utf-8');

	console.log(`Generated: www/${section}/index.html`);
}

module.exports = genSiteList;

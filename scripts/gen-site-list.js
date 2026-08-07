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

/**
 * 生成栏目页面，输出到 docs/{section}/index.html
 * @param {string} section - 栏目名（如 "getting-started"、"components" 等）
 * @param {string[]} names - 子页面名列表（如 ["template", "advanced"]）
 */
async function genSiteList(section, names) {
	const sectionDir = path.join(DOCS_DIR, section);
	const sectionTitle = SECTION_MAP[section] || section;
	const renderer = createRenderer();

	// 读取栏目总介绍 docs/{section}/index.md（已包含所有组件文档）
	const overviewMd = await fs.readFile(path.join(sectionDir, 'index.md'), 'utf-8');
	const overviewHtml = marked.parse(overviewMd, { renderer });

	// 生成各个组件的详情页
	for (const name of names) {
		await genSiteView(sectionDir, name);
	}

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
	<link href="../ting/shiki.css" rel="stylesheet"/>
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
		</div>
		${footer()}
	</body>
</html>`;

	// 写入 docs/{section}/index.html
	await fs.writeFile(path.join(sectionDir, 'index.html'), html, 'utf-8');

	console.log(`Generated: docs/${section}/index.html`);
}

module.exports = genSiteList;

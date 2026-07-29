const fs = require('fs/promises');
const path = require('path');
const escapeHtml = require('escape-html');
const marked = require('marked');
const SECTION_MAP = require('./SECTION_MAP.json');
const header = require('./gen-site-header');
const footer = require('./gen-site-footer');
const { createRenderer } = require('./gen-site-renderer');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const WWW_DIR = path.join(ROOT, 'www');

/**
 * 生成详情页，输出到 www/{section}/{name}.html
 * @param {string} viewPath - view.md 文件的绝对路径（如 docs/helpers/float-view.md）
 * @param {string} name - 子页面名（如 "float"）
 */
async function genSiteView(viewPath, name) {
	const relativePath = path.relative(DOCS_DIR, viewPath);
	const section = relativePath.split(path.sep)[0];
	const sectionTitle = SECTION_MAP[section] || section;
	const renderer = createRenderer({
        htmlPreview: true
    });

	const viewSource = await fs.readFile(viewPath, 'utf-8');
	const viewHtml = marked.parse(viewSource, { renderer });

	// 从 view.md 第一个 # 标题提取页面标题
	const titleMatch = viewSource.match(/^#\s+(.+)/m);
	const pageTitle = titleMatch ? titleMatch[1].trim() : name;

	const html = `<!--BORDERBOX-->
<!DOCTYPE html>
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta name="renderer" content="webkit"/>
	<title>${escapeHtml(pageTitle)} - ${escapeHtml(sectionTitle)} - Ting UI</title>
	<link href="../ting/ting.css" rel="stylesheet"/>
	<link rel="stylesheet" type="text/css" href="../ting/font-awesome.css"/>
	<script src="../ting/html5.js"></script>
	<script src="../ting/jquery.js"></script>
	<script src="../ting/ting.js"></script>
	</head>
	<body>
		${header(section)}
		<div class="container">
${viewHtml}
		</div>
		${footer()}
	</body>
</html>`;

	const outputDir = path.join(WWW_DIR, section);
	await fs.mkdir(outputDir, { recursive: true });
	await fs.writeFile(path.join(outputDir, `${name}.html`), html, 'utf-8');

	console.log(`Generated: www/${section}/${name}.html`);
}

module.exports = genSiteView;

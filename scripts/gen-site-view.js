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

/**
 * 生成详情页，输出到 docs/{section}/{name}.html
 * @param {string} sectionDir - section 目录的绝对路径（如 docs/components）
 * @param {string} name - 子页面名（如 "float"）
 */
async function genSiteView(sectionDir, name) {
	const section = path.relative(DOCS_DIR, sectionDir);
	const sectionTitle = SECTION_MAP[section] || section;
	const renderer = createRenderer({
        htmlPreview: true
    });

	const viewPath = path.join(sectionDir, `${name}.md`);
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
${viewHtml}
		</div>
		${footer()}
	</body>
</html>
`;

	await fs.writeFile(path.join(sectionDir, `${name}.html`), html, 'utf-8');

	console.log(`Generated: docs/${section}/${name}.html`);
}

module.exports = genSiteView;

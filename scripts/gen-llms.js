/**
 * 生成 docs/llms.txt（LLM 友好的文档导航索引）
 *
 * 所有板块、页面列表、顺序、描述均从各模块的 docs/<module>/index.md 动态解析生成，
 * 不在此处写死。板块顺序 = docs 下的模块目录顺序：
 *   getting-started → layout → content → form → helpers → components → utilities
 *
 * 解析规则（针对每个模块的 index.md）：
 *   - `## 章节标题` 视为一个页面条目
 *   - 章节内的 `[文字](./xxx.md|html)` 链接决定条目指向的文件
 *     （优先使用同名的 .md；无 .md 时保留链接原扩展名）
 *   - 无子页面链接的章节（如页头、巨幕、面板等）指向本模块 index.md
 *   - 描述从章节的类速查表中提取类名自动生成，不手写
 *   - 一个章节含多个子页面链接时（如 layout 宽度高度适应），每个链接生成一条
 *
 * 运行: npm run gen:llms
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const OUTPUT = path.join(DOCS_DIR, 'llms.txt');

// 板块顺序（与 docs 下的模块目录一致）
const MODULES = [
	'getting-started',
	'layout',
	'content',
	'form',
	'helpers',
	'components',
	'utilities',
];

// ---- 项目概述（头部） ----
const OVERVIEW = `# Ting CSS 文档

> Ting 是一个公共 CSS 样式库 (Common Style Lib)，设计理念是统一命名方式、屏蔽实现细节、提供实用工具。支持响应式布局、按需打包 (PurgeCSS)、作为 Sass mixin 库使用。与 Bootstrap 命名风格兼容，学习成本低。
>
> 在线演示: https://linsk1998.github.io/ting/
>
> npm 安装: \`npm i @ting-ui/css\`

## 设计理念

- **类名语义化**: 所有组件均为成品语义化封装，底层样式逻辑完全隐藏，开发者直接调用成品组件。
- **命名风格**: \`.{组件}-{状态}\`、\`.{组件}-{子元素}\` 风格（如 \`.btn\`、\`.btn-primary\`），非组合式。
- **渐进增强 & 优雅降级**: 低版本浏览器中样式降级为最基本样式。
- **优先展示**: 默认展开（如 \`.collapsible\` 默认展开，加 \`.hide\` 隐藏），与 Bootstrap 相反。
- **动画尊重用户偏好**: 所有动画由 \`prefers-reduced-motion\` 包裹，用户可关闭。
- **暗黑模式**: 支持局部暗黑模式（容器加 \`.dark\`）和全局暗黑模式（html 加 \`.dark\`）。
`;

// ---- 解析工具 ----

const readMd = (p) => fs.readFileSync(p, 'utf-8').replace(/\r\n/g, '\n');

// 泛化的链接文字（不能作为条目标题）
const GENERIC_LINK_TEXT = /^(使用方法|效果演示|例子|示例|查看|效果|更多)$/;

// 从章节正文提取类名（.xxx 形式），排除代码块与 markdown 链接
function extractClasses(body) {
	const text = body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/\[[^\]]*\]\([^)]*\)/g, ' ');
	const re = /\.([a-zA-Z][\w-]*(?:\{[^}]*\})?(?:~[\w-]+)?)/g;
	const SKIP_EXT = /^(md|html?|css|js|png|jpe?g|gif|svg|woff2?|ttf|eot)$/i;
	const out = [];
	for (const m of text.matchAll(re)) {
		if (SKIP_EXT.test(m[1])) continue;
		const cls = '.' + m[1];
		if (!out.includes(cls)) out.push(cls);
	}
	return out;
}

// 取章节正文第一句（无类速查表时的降级描述）
function firstSentence(body) {
	const clean = body
		.replace(/^\s*\|.*$/gm, ' ')
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	const m = clean.match(/^([^。\n]+。)/);
	return m ? m[1].trim() : '';
}

// 链接指向的文件：优先同名 .md，否则保留原扩展名
function childFile(module, link) {
	const dir = path.join(DOCS_DIR, module);
	const base = path.basename(link, path.extname(link));
	if (fs.existsSync(path.join(dir, base + '.md'))) {
		return `${module}/${base}.md`;
	}
	return `${module}/${link}`;
}

// 章节内所有子页面链接（xxx.md / xxx.html，支持 ./ 前缀，排除外部链接）
function collectLinks(body) {
	const links = [];
	for (const m of body.matchAll(/\[([^\]]*)\]\(([^)]+)\)/g)) {
		const text = m[1].trim();
		let href = m[2].trim().replace(/^\.\//, '');
		if (/\.(md|html)$/i.test(href) && !/^(?:https?:|mailto:|#)/i.test(href) && !href.startsWith('../')) {
			if (!links.some((l) => l.href === href)) links.push({ text, href });
		}
	}
	return links;
}

// 解析一个模块的 index.md，返回页面条目数组
function parseModule(module) {
	const idxPath = path.join(DOCS_DIR, module, 'index.md');
	const raw = readMd(idxPath);
	const lines = raw.split('\n');

	const pages = [];
	let childTotal = 0;
	let cur = null;

	const flush = () => {
		if (!cur) return;
		const body = cur.lines.join('\n');
		const links = collectLinks(body);
		const classes = extractClasses(body);
		const desc = classes.length ? classes.join('、') + '。' : firstSentence(body);

		if (links.length === 0) {
			// 无子页面：指向本模块 index.md
			if (desc) pages.push({ title: cur.title, file: `${module}/index.md`, desc });
		} else {
			childTotal += links.length;
			links.forEach((link, i) => {
				const title =
					links.length === 1 || GENERIC_LINK_TEXT.test(link.text)
						? cur.title
						: link.text;
				pages.push({ title, file: childFile(module, link.href), desc });
			});
		}
		cur = null;
	};

	for (const line of lines) {
		const m = line.match(/^##\s+(.+)$/);
		if (m) {
			flush();
			cur = { title: m[1].trim(), lines: [] };
		} else if (cur) {
			cur.lines.push(line);
		}
	}
	flush();

	// 模块没有任何子页面（如 getting-started）：折叠为单条 index.md 条目
	if (childTotal === 0) {
		const title = (raw.match(/^#\s+(.+)$/m) || [])[1] || module;
		const para = firstSentence(lines.slice(1).join('\n'));
		return [{ title, file: `${module}/index.md`, desc: para || title }];
	}
	return pages;
}

// ---- 生成 ----
const lines = [];
lines.push(OVERVIEW);

let pageCount = 0;
const missing = [];

for (const module of MODULES) {
	const sectionTitle = (readMd(path.join(DOCS_DIR, module, 'index.md')).match(/^#\s+(.+)$/m) || [])[1] || module;
	lines.push(`## ${sectionTitle}`);
	lines.push('');
	for (const page of parseModule(module)) {
		const abs = path.join(DOCS_DIR, page.file);
		if (!fs.existsSync(abs)) {
			missing.push(`${module}/${page.file}`);
			continue;
		}
		lines.push(`- [${page.title}](${page.file}): ${page.desc}`);
		pageCount++;
	}
	lines.push('');
}

fs.writeFileSync(OUTPUT, lines.join('\n'), 'utf-8');
console.log(`完成! 已生成 docs/llms.txt`);
console.log(`条目数: ${pageCount} | 大小: ${(Buffer.byteLength(lines.join('\n')) / 1024).toFixed(1)} KB | 行数: ${lines.length}`);
if (missing.length) {
	console.warn(`WARNING: 以下文件不存在, 已跳过:`);
	missing.forEach((f) => console.warn(`  - ${f}`));
}

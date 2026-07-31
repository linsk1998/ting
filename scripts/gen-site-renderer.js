const marked = require("marked");
const { createHighlighter } = require("shiki")
const escapeHtml = require('escape-html');

let hl;

async function initRenderer(text, lang) {
	// 【只启动阶段执行一次 await】
	hl = await createHighlighter({
		themes: ['github-light'],
		langs: ['html', 'css', 'javascript', 'scss']
	});
}

function createRenderer(options = {}) {
	const { htmlPreview = false } = options;
	const renderer = new marked.Renderer();
	renderer.heading = function ({ text, depth, raw }) {
		const classAttr = depth <= 2 ? ` class="page-header"` : '';

		// 生成 id（用于锚点跳转）
		const id = raw.toLowerCase().replace(/^[#]+/, '').trim().replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '').replace(/\s+/g, '-');

		return `<h${depth}${classAttr} id="${escapeHtml(id)}">${escapeHtml(text)}</h${depth}>\n`;
	};
	renderer.table = function ({ header, rows }) {
		const genCell = (cell) => {
			const tag = cell.header ? 'th' : 'td';
			const classList = [];
			if (cell.align) {
				classList.push("text-" + cell.align);
			}
			const innerHTML = this.parser.parseInline(cell.tokens);
			return `<${tag}${classList.length ? ` class="${classList.join(' ')}"` : ''}>${innerHTML}</${tag}>`;
		}
		let html = '<div class="table-responsive">\n<table class="table table-sm table-bordered table-striped">\n';
		if (header && header.length) {
			html += '<thead class="thead-subtle"><tr>\n';
			header.forEach((cell, i) => {
				html += genCell(cell);
			});
			html += '</tr></thead>\n';
		}
		if (rows && rows.length) {
			html += '<tbody>\n';
			rows.forEach(row => {
				html += '<tr>\n';
				row.forEach((cell, i) => {
					html += genCell(cell);
				});
				html += '\n</tr>\n';
			});
			html += '</tbody>';
		}
		html += '</table></div>\n';
		return html;
	};
	renderer.code = function ({ text, lang }) {
		try {
			// 获取 Tokens 数据，而不是 HTML 字符串
			const tokens = hl.codeToTokens(text, {
				lang: lang,
				theme: 'github-light'
			});

			// 手动构建 HTML，完全由你控制结构
			let html = '';

			tokens.tokens.forEach((line) => {
				html += '<span class="line">';
				line.forEach((token) => {
					// token.color 是颜色值，token.content 是文字
					html += `<font color="${token.color}">${escapeHtml(token.content)}</font>`;
				})
				html += '</span>\r\n';
			});
			if(lang === 'html' && htmlPreview) {
				return `
<div class="tabs" role="tabbable">
  <ul class="nav nav-indicator">
    <li class="nav-item active"><a class="nav-link" href="javascript:void(0)">演示</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void(0)">代码</a></li>
  </ul>
  <div class="tabs-content">
    <div class="tabs-pane ting-example tabs-active">${text}</div>
    <div class="tabs-pane"><pre class="code m-0">${html}</pre></div>
  </div>
</div>`;
			}
			return `<pre class="code">${html}</pre>`;
		} catch (error) {
			console.error(`Shiki highlight error for ${lang}:`, error);
			// 降级处理：直接返回转义后的代码
			return `<pre class="code">${escapeHtml(text)}</pre>`;
		}
	};
	return renderer;
};
module.exports = { initRenderer, createRenderer };

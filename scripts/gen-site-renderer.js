const marked = require("marked");
const { createHighlighter } = require("shiki");
const escapeHtml = require('escape-html');

const lightTheme = require('github-vscode-themes/dist/light.json');
const darkTheme = require('github-vscode-themes/dist/dark.json');
lightTheme.name = 'github-light';
darkTheme.name = 'github-dark';

let hl;
const cssVarTheme = structuredClone(lightTheme);
function kabaCase(str) {
	return str.replace(/\W/g, '-');
}
function variable(scope) {
	return `var(--${kabaCase(scope)})`;
}
cssVarTheme.name = 'css-variables';
cssVarTheme.tokenColors = cssVarTheme.tokenColors.reduce((arr, cur) => {
	var scope = cur.scope;
	if(!scope) {
		arr.push({
			...cur,
			settings: {
				...cur.settings,
				foreground: variable(scope),
			}
		});
	} else if(Array.isArray(scope)) {
		scope.forEach(s => {
			arr.push({
				...cur,
				scope: s,
				settings: {
					...cur.settings,
					foreground: variable(`token-${s}`),
				}
			});
		});
	} else {
		arr.push({
			...cur,
			settings : {
				...cur.settings,
				foreground: variable(`token-${scope}`),
			}
		});
	}
	return arr;
}, []);
async function initRenderer(text, lang) {
	hl = await createHighlighter({
		themes: [cssVarTheme, lightTheme, darkTheme],
		langs: ['html', 'css', 'javascript', 'scss']
	});
}

function createRenderer(options = {}) {
	const { htmlPreview = false } = options;
	const renderer = new marked.Renderer();
	renderer.link = function ({ href, title, text }) {
		if((/\.md$/).test(href)) {
			return `<a href="${escapeHtml(href.replace(/\.md$/, '.html'))}">${escapeHtml(text)}</a>`;
		}
		if (href.startsWith('http')) {
			return `<a href="${escapeHtml(href)}" target="_blank">${escapeHtml(text)}</a>`;
		}
		return `<a href="${escapeHtml(href)}">${escapeHtml(text)}</a>`;
	};
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
				theme: 'css-variables',
  				wrap: true
			});

			// 手动构建 HTML，完全由你控制结构
			let html = '';

			tokens.tokens.forEach((line) => {
				html += '<span class="shiki-line">';
				line.forEach((t) => {
					// html += `<font color="${t.color}">${escapeHtml(t.content)}</font>`;
					if(t.color.startsWith('var(--')) {
						let color = t.color.slice(5, -1);
						if(color.startsWith('-token-')) {
							html += `<span class="shiki${color.substring(6)}">${escapeHtml(t.content)}</span>`;
							return;
						}
					}
					html += escapeHtml(t.content);
				})
				html += '</span>\r\n';
			});
			if(lang === 'html' && htmlPreview) {
				return `
<div class="tabs">
  <ul class="nav nav-underline">
    <li class="nav-item active"><a class="nav-link" href="javascript:void(0)">演示</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void(0)">代码</a></li>
  </ul>
  <div class="tabs-content">
    <div class="tabs-pane ting-example">${text}</div>
    <div class="tabs-pane hide"><pre class="code shiki m-0">${html}</pre></div>
  </div>
</div>`;
			}
			return `<pre class="code shiki">${html}</pre>`;
		} catch (error) {
			console.error(`Shiki highlight error for ${lang}:`, error);
			// 降级处理：直接返回转义后的代码
			return `<pre class="code shiki">${escapeHtml(text)}</pre>`;
		}
	};
	return renderer;
};
module.exports = { initRenderer, createRenderer };

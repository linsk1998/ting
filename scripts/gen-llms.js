/**
 * 生成 docs/llms.txt（LLM 友好的文档导航索引）
 * 板块顺序与 llms-full.txt 一致: 起步 → 布局 → 页面内容 → 表单 → 助手 → 组件 → 工具类
 * 运行: npm run gen:llms
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const OUTPUT = path.join(DOCS_DIR, 'llms.txt');

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

// ---- 板块与页面配置（file: 相对 docs/ 的路径; title: 展示名; desc: 一句话描述） ----
const SECTIONS = [
	{
		title: '起步',
		pages: [
			{ file: 'getting-started/index.md', title: '起步指南', desc: '快速入门指南，包括通过 `<link>` 标签引入 ting.css、基本 HTML 模板、npm 安装方式 (`npm i @ting-ui/css`)、暗黑模式配置（局部 `.dark` / 全局 `.dark`）、以及配合 postcss-purgecss 按需打包。' },
		],
	},
	{
		title: '布局',
		pages: [
			{ file: 'layout/index.md', title: '布局概述', desc: '响应式栅格系统（12 列，5 个断点 xs/sm/md/lg/xl）、布局容器（`.container`/`.container-fluid`/`.container-{size}`）、栅格系统（`.row`/`.col-{size}-{width}` 含 offset/push/pull 和间隙支持）、弹性布局（`.flex`/`.row-flex`/`.col-flex`/`.col-left`/`.col-right`/`.col-center`）、固定比例容器（`.ratio-16x9` 等）、对齐工具（`.center-block`/`.valign`/`.valign-middle`/`.valign-bottom`/`.valign-sibling`）。' },
			{ file: 'layout/container.html', title: '布局容器演示', desc: '布局容器交互式 Demo。' },
			{ file: 'layout/grid.html', title: '栅格系统演示', desc: '栅格系统交互式 Demo。' },
			{ file: 'layout/layout-vbox.html', title: '高度适应示例', desc: '弹性高度适应布局 Demo。' },
			{ file: 'layout/layout-border.html', title: '综合布局示例', desc: '综合弹性布局 Demo。' },
			{ file: 'layout/ratio.md', title: '固定比例容器', desc: '`.ratio-21x9`、`.ratio-16x9`、`.ratio-4x3`、`.ratio-1x1` 等固定比例容器的使用方法。' },
			{ file: 'layout/align.md', title: '对齐', desc: '`.center-block` 块级居中、`.valign`/`.valign-middle`/`.valign-bottom`/`.valign-sibling`/`.valign-top` 垂直对齐工具类的详细使用方法。' },
		],
	},
	{
		title: '页面内容',
		pages: [
			{ file: 'content/index.md', title: '页面内容概述', desc: '排版、页头、链接、按钮、表格、图片、媒体对象、列表、卡片、well 凹陷、callout 标志、badge 徽章、tag 标签、alert 警告框、jumbotron 巨幕、footer 网站底部等全部内容样式类速查表。' },
			{ file: 'content/type.md', title: '排版', desc: '`.h1`~`.h6`、`.text-body`、`.text-muted`、`.list-unstyled`、`.list-inline`、`.small`、`.mark`、`.pre`、`.nobr`、`.u`、`.s`、`.i`、`.b` 等排版相关 CSS 类。' },
			{ file: 'content/link.md', title: '链接', desc: '`.link-primary`、`.link-secondary`、`.link-disabled`、`.link-offset-*`、`.link-stretched` 等链接样式类。' },
			{ file: 'content/button.md', title: '按钮', desc: '`.btn`、`.btn-default`、`.btn-{context}`、`.btn-outline`、`.btn-{size}`、`.btn-block`、`.btn-round`、`.btn-square`、`.btn-label`、`.btn-icon-left`/`.btn-icon-right`、`.btn-loading`、`.btn-disabled` 等按钮样式类。' },
			{ file: 'content/button-group.md', title: '按钮组', desc: '`.btn-toolbar`、`.btn-group`、`.btn-group-justified`、`.btn-group-vertical` 等按钮布局类。' },
			{ file: 'content/table.md', title: '表格', desc: '`.table`、`.table-striped`、`.table-bordered`、`.table-hover`、`.table-sm`、`.table-subtle`/`.table-inverse`、`.table-{context}`、`.table-active`、`.table-responsive`、`.table-fixed` 等表格样式类。' },
			{ file: 'content/img.md', title: '图片', desc: '`.img-rounded`、`.img-circle`、`.img-thumbnail`、`.img-fluid`、`.img-responsive` 等图片样式类。' },
			{ file: 'content/media.md', title: '媒体对象', desc: '`.media`、`.media-left`、`.media-right`、`.media-body`、`.media-object`、`.media-heading`、`.media-middle`/`.media-bottom`、`.media-list` 等图文混排组件使用方法。' },
			{ file: 'content/list.html', title: '列表', desc: '`.list`、`.list-dashed`、`.list-flush`、`.list-bordered`、`.list-striped`、`.list-hover`、`.list-item-{context}`、`.active` 等列表样式 Demo。' },
			{ file: 'content/card.html', title: '卡片', desc: '`.card`、`.card-body`、`.card-header`、`.card-footer`、`.card-title`、`.card-subtitle`、`.card-text`、`.card-link`、`.card-img-top`/`.card-img-bottom`、`.card-img-overlay`、`.card-header-tabs`/`.card-header-pills`/`.card-header-underline` 等卡片组件 Demo。' },
			{ file: 'content/well.md', title: '凹陷容器', desc: '`.well`、`.well-lg`、`.well-sm` 凹陷容器样式。' },
			{ file: 'content/callout.md', title: '标志', desc: '`.callout`、`.callout-{context}` 标志容器。' },
			{ file: 'content/badge.md', title: '徽章', desc: '`.badge` 徽章样式（圆角红色背景，最小宽度 18px）。' },
			{ file: 'content/tag.md', title: '标签', desc: '`.tag`、`.tag-{context}`、`.tag-{size}` 标签样式。' },
			{ file: 'content/alert.md', title: '警告框', desc: '`.alert`、`.alert-{context}`、`.alert-dismissible`、`.alert-link`、`.alert-heading` 警告框样式。' },
			{ file: 'content/index.md', title: '巨幕', desc: '`.jumbotron` 巨幕组件，延伸至整个浏览器视口展示关键内容。' },
			{ file: 'content/index.md', title: '网站底部', desc: '`.footer` 网站底部样式。' },
		],
	},
	{
		title: '表单',
		pages: [
			{ file: 'form/index.md', title: '表单概述', desc: '基础控件、布局、尺寸、校验、静态控件、输入框组的 CSS 类速查表，以及前后缀输入框、标签输入框、下拉按钮、文本域、单选/多选框、开关、开关按钮等表单组件速查表。' },
			{ file: 'form/control.md', title: '基础控件', desc: '`.form-control`、`.form-check`、`.form-check-inline`、`.form-text` 等基础表单控件使用方法。' },
			{ file: 'form/form.md', title: '表单布局', desc: '`.form`、`.form-inline`、`.form-horizontal`、`.form-group`、`.form-label` 等表单布局类。' },
			{ file: 'form/sizing.md', title: '控件大小', desc: '`.form-group-lg`/`.form-group-sm`、`.form-control-lg`/`.form-control-sm` 等控件尺寸类。' },
			{ file: 'form/validation.md', title: '字段校验', desc: '`.has-valid`、`.has-invalid`、`.has-feedback-icon`、`.feedback-icon`、`.feedback-text`、`.feedback-tooltip` 等字段校验样式。' },
			{ file: 'form/static.md', title: '静态控件', desc: '`.form-control-static` 静态控件使用方法。' },
			{ file: 'form/input-group.md', title: '输入框组', desc: '`.input-group`、`.input-group-prepend`、`.input-group-append`、`.input-group-body`、`.input-group-text`、`.input-group-lg`/`.input-group-sm` 等输入框组。' },
			{ file: 'form/input.md', title: '前后缀输入框', desc: '`.input`、`.input-prefix`、`.input-suffix`、`.input-body`、`.control-clear`、`.input-counter`、`.input-lg`/`.input-sm`、`.input-disabled` 等前后缀输入框使用方法（含校验、内联表单、组件尺寸等完整用法）。' },
			{ file: 'form/tags-input.md', title: '标签输入框', desc: '`.tags-input`、`.tags-input-placeholder`、`.tags-input-nowrap`/`.tags-input-wrap`、`.tags-input-lg`/`.tags-input-sm`、`.tags-input-disabled` 等标签输入框。' },
			{ file: 'form/select.md', title: '下拉按钮', desc: '`.select`、`.select-label`、`.select-placeholder`、`.select-icon`、`.select-disabled`、`.select-loading`、`.select-lg`/`.select-sm` 等下拉按钮。' },
			{ file: 'form/textarea.md', title: '文本域', desc: '`.textarea`、`.textarea-counter`、`.textarea-lg`/`.textarea-sm` 等文本域。' },
			{ file: 'form/checkbox.md', title: '单选/多选框', desc: '`.checkbox-group`/`.radio-group`、`.checkbox-group-horizontal`/`.radio-group-horizontal`、`.checkbox`/`.radio`、`.checkbox-checked`/`.radio-checked`、`.checkbox-disabled`/`.radio-disabled`、`.checkbox-indeterminate` 等单选和多选框。' },
			{ file: 'form/switch.md', title: '开关', desc: '`.switch`、`.switch-checked`、`.switch-disabled`、`.switch-loading` 等开关按钮。' },
			{ file: 'form/toggle-button.md', title: '开关按钮', desc: '`.btn-toggle`、`.btn-toggle-checked` 开关按钮使用方法。' },
		],
	},
	{
		title: '助手',
		pages: [
			{ file: 'helpers/index.md', title: '助手概述', desc: '浮动清除、视觉隐藏、显示/隐藏、文本截断、三角标识、关闭按钮、加载指示、图标、动画等助手类速查表。' },
			{ file: 'helpers/float.md', title: '浮动清除', desc: '`.pull-left`、`.pull-right`、`.clearfix` 浮动相关类。' },
			{ file: 'helpers/loading.md', title: '加载指示', desc: '`.loading-spin`（环形加载）、`.loading-grow`（闪烁加载）使用方法。' },
			{ file: 'helpers/icon.md', title: '图标', desc: '`.icon`、`.icon-fw`、`.icon-left`/`.icon-right`、`.icon-lg`~`.icon-5x`、`.icon-rotate-*`、`.icon-flip-*` 等 FontAwesome 图标封装类。' },
			{ file: 'helpers/animation.html', title: '动画', desc: '`.animated`、`.animated.infinite`、`.animated.forwards`、`.animated.fast`/`.faster`/`.slower` 等动画类 Demo。' },
		],
	},
	{
		title: '组件',
		pages: [
			{ file: 'components/index.md', title: '组件概述', desc: '全部 UI 组件的 CSS 类速查表，包括路径导航、导航、标签页、导航条、分页、列表组、进度条、轮播图、下拉菜单、工具提示、弹出框、可折叠块、手风琴、树、侧栏导航、模态对话框、提示信息、对话框、消息框、窗口、可选列表、面板等 23 个组件。' },
			{ file: 'components/breadcrumb.md', title: '路径导航', desc: '`.breadcrumb` 路径导航组件，浅灰色背景，斜杠分隔。' },
			{ file: 'components/nav.md', title: '导航', desc: '`.nav`、`.nav-pills`、`.nav-tabs`、`.nav-underline`、`.nav-justified`、`.nav-tabs-left`/`.nav-tabs-right` 等导航组件。' },
			{ file: 'components/tabs.md', title: '标签页', desc: '`.tabs`、`.tabs-content`、`.tabs-pane`、`.tabs-left`/`.tabs-right`/`.tabs-below` 等标签页组件。' },
			{ file: 'components/navbar.md', title: '导航条', desc: '`.navbar`、`.navbar-flush`、`.navbar-brand`、`.navbar-nav`、`.navbar-collapse`、`.navbar-toggler`、`.navbar-header`、`.navbar-right`、`.navbar-form`、`.navbar-btn`、`.navbar-text`、`.navbar-link` 等导航条组件。' },
			{ file: 'components/pagination.md', title: '分页', desc: '`.pagination`、`.pagination-lg`/`.pagination-sm`、`.pagination-gutter`、`.active`、`.disabled` 等分页组件。' },
			{ file: 'components/list-group.html', title: '列表组', desc: '`.list-group`、`.list-group-item`、`.list-group-flush`、`.list-group-item-{context}`、`.active` 等列表组 Demo。' },
			{ file: 'components/progress.md', title: '进度条', desc: '`.progress`、`.progress-bar`、`.progress-bar-{context}`、`.progress-sm`/`.progress-xs` 等进度条组件。' },
			{ file: 'components/carousel.md', title: '轮播图', desc: '`.carousel`、`.carousel-indicators`、`.carousel-inner`、`.carousel-item`、`.carousel-control-prev`/`.carousel-control-next`、`.carousel-caption` 等轮播图组件。' },
			{ file: 'components/dropdown.md', title: '下拉菜单', desc: '`.dropdown`、`.dropdown-menu`、`.dropdown-menu-right`、`.dropdown-item`、`.dropdown-list`、`.dropup`/`.dropleft`/`.dropright`、`.dropdown-toggle-split`、`.dropright-submenu`、`.dropdown-header`、`.dropdown-divider` 等下拉菜单组件。' },
			{ file: 'components/tooltip.md', title: '工具提示', desc: '`.tooltip`、`.tooltip-inner`、`.tooltip-arrow`、`.tooltip-top`/`.tooltip-right`/`.tooltip-bottom`/`.tooltip-left` 等工具提示组件。' },
			{ file: 'components/popover.md', title: '弹出框', desc: '`.popover`、`.popover-arrow`、`.popover-header`、`.popover-body`、`.popover-top`/`.popover-right`/`.popover-bottom`/`.popover-left` 等弹出框组件。' },
			{ file: 'components/collapsible.md', title: '可折叠块', desc: '`.collapsible` 可折叠容器，默认展开，`.collapsible.hide` 折叠隐藏。' },
			{ file: 'components/accordion.md', title: '手风琴', desc: '`.accordion`、`.accordion-flush`、`.accordion-dark`、`.accordion-fill`、`.accordion-item`、`.collapsed`、`.accordion-header`、`.accordion-button`、`.accordion-indicator`、`.accordion-collapsible`、`.accordion-body` 等手风琴组件，兼容 Bootstrap `.collapse` 写法。' },
			{ file: 'components/tree.md', title: '树', desc: '`.tree`、`.tree-icon`、`.tree-toggler`、`.collapsed`、`.active` 等树组件。' },
			{ file: 'components/sidebar.md', title: '侧栏导航', desc: '`.sidebar`、`.sidebar-dark`、`.sidebar-collapsed`、`.sidebar-menu`、`.sidebar-item`、`.collapsed`、`.sidebar-indicator`、`.sidebar-icon`、`.sidebar-link`、`.sidebar-collapsible`、`.sidebar-submenu` 等侧栏导航组件（亮色/暗色主题，支持多级菜单折叠/展开）。' },
			{ file: 'components/overlay.md', title: '覆盖层', desc: '`.overlay` 覆盖层容器（覆盖所属容器，半透明黑色背景）、`.overlay-viewport` 覆盖层容器（覆盖整个视口）、`.overlay-blocker` 事件捕获层（拦截用户点击）等覆盖层组件。' },
			{ file: 'components/msg.md', title: '提示信息', desc: '`.msg-toast`（半透明黑色背景提示框）、`.msg`（白色背景消息提示）使用方法。' },
			{ file: 'components/dialog.md', title: '对话框', desc: '`.dialog`、`.dialog-header`、`.dialog-title`、`.dialog-body`、`.dialog-footer`、`.dialog-close`、`.dialog-rim`、`.dialog-{context}` 等对话框组件。' },
			{ file: 'components/msgbox.md', title: '消息框', desc: '`.msgbox`、`.msgbox-lg`/`.msgbox-md`/`.msgbox-sm`、`.msgbox-header`、`.msgbox-title`、`.msgbox-body`、`.msgbox-footer`、`.msgbox-{context}` 等消息框组件。' },
			{ file: 'components/select-list.md', title: '可选列表', desc: '`.select-list`、`.select-list-drag`、`.select-list-tools` 等可选列表组件。' },
			{ file: 'components/index.md', title: '面板', desc: '`.panel`、`.panel-heading`、`.panel-title`、`.panel-body`、`.panel-default`、`.panel-primary`、`.panel-success`、`.panel-info`、`.panel-warning`、`.panel-danger` 等面板组件。' },
		],
	},
	{
		title: '工具类',
		pages: [
			{ file: 'utilities/index.md', title: '工具类概述', desc: '语境颜色（primary/success/info/warning/danger）、文本对齐与转换、字体族（sans/serif/cursive/monospace）、间距（margin/padding）等工具类速查表。' },
			{ file: 'utilities/color.md', title: '颜色', desc: '`.text-{context}`、`.bg-{context}`、`.border-{context}` 语境颜色的详细使用方法。' },
			{ file: 'utilities/font.md', title: '字体', desc: '`.font-sans`、`.font-serif`、`.font-cursive`、`.font-monospace` 字体族类的使用方法。' },
		],
	},
];

// ---- 生成 ----
let lines = [];
lines.push(OVERVIEW);

let pageCount = 0;
const missing = [];

for (const section of SECTIONS) {
	lines.push(`## ${section.title}`);
	lines.push('');
	for (const page of section.pages) {
		const abs = page.file.startsWith('README.md')
			? path.join(ROOT, page.file)
			: path.join(DOCS_DIR, page.file);
		if (!fs.existsSync(abs)) {
			missing.push(`${section.title}/${page.file}`);
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

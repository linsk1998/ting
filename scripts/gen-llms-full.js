/**
 * 全量生成 docs/llms-full.txt
 * 板块顺序: README → getting-started → layout → content → form → helpers → components → utilities
 * 覆盖写入，可重复执行（与 gen-llms-full-append.js 不同，不会重复追加）
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const OUTPUT_FILE = path.join(DOCS_DIR, 'llms-full.txt');

const SEP = '\n---\n';
const srcHeader = (p) => `# 源文件: ${p}`;
const SECTION = (title) =>
  `\n# =============================================================================\n# ${title}\n# =============================================================================\n\n`;

// 板块顺序定义（index 置首，其余按文档展示顺序）
const sections = [
  { title: '项目概述 (README.md)', files: ['README.md'] },
  { title: '一、起步 (getting-started)', files: ['getting-started/index.md'] },
  {
    title: '二、布局 (layout)',
    files: ['layout/index.md', 'layout/align.md', 'layout/ratio.md'],
  },
  {
    title: '三、页面内容 (content)',
    files: [
      'content/index.md', 'content/type.md', 'content/link.md', 'content/button.md',
      'content/button-group.md', 'content/table.md', 'content/img.md', 'content/media.md',
      'content/well.md', 'content/callout.md', 'content/badge.md', 'content/tag.md',
      'content/alert.md',
    ],
  },
  {
    title: '四、表单 (form)',
    files: [
      'form/index.md', 'form/checkbox.md', 'form/control.md', 'form/form.md',
      'form/input-group.md', 'form/input.md', 'form/select.md', 'form/sizing.md',
      'form/static.md', 'form/switch.md', 'form/tags-input.md', 'form/textarea.md',
      'form/toggle-button.md', 'form/validation.md',
    ],
  },
  {
    title: '五、助手 (helpers)',
    files: ['helpers/index.md', 'helpers/float.md', 'helpers/icon.md', 'helpers/loading.md'],
  },
  {
    title: '六、组件 (components)',
    files: [
      'components/index.md', 'components/accordion.md', 'components/breadcrumb.md',
      'components/carousel.md', 'components/collapse.md', 'components/collapsible.md',
      'components/dialog.md', 'components/dropdown.md', 'components/modal-loading.md',
      'components/modal.md', 'components/msgbox.md', 'components/nav.md',
      'components/navbar.md', 'components/pagination.md', 'components/popover.md',
      'components/progress.md', 'components/select-list.md', 'components/sidebar.md',
      'components/tabs.md', 'components/toast.md', 'components/tooltip.md',
      'components/tree.md', 'components/window.md',
    ],
  },
  {
    title: '七、工具类 (utilities)',
    files: ['utilities/index.md', 'utilities/color.md', 'utilities/font.md'],
  },
];

const resolveFile = (rel) =>
  rel === 'README.md' ? path.join(ROOT_DIR, rel) : path.join(DOCS_DIR, rel);

// 头部
const today = new Date().toISOString().slice(0, 10);
let content = `# Ting CSS 完整文档 (Full Documentation)\n`;
content += `# 项目: ting-ui/css (Common Style Lib)\n`;
content += `# 在线演示: https://linsk1998.github.io/ting/\n`;
content += `# 文件数量: 61 个 .md 文档\n`;
content += `# 生成时间: ${today}\n`;
content += `# =============================================================================\n`;

// 拼接各板块
let fileCount = 0;
for (const section of sections) {
  content += SECTION(section.title);
  for (const rel of section.files) {
    const filePath = resolveFile(rel);
    if (!fs.existsSync(filePath)) {
      console.warn(`WARNING: 文件不存在, 跳过: ${rel}`);
      continue;
    }
    const raw = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
    content += SEP;
    content += srcHeader(rel);
    content += SEP;
    content += raw + '\n';
    fileCount++;
  }
}

fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');
console.log(`完成! 已生成 docs/llms-full.txt`);
console.log(`源文件数: ${fileCount} | 大小: ${(content.length / 1024).toFixed(1)} KB | 行数: ${content.split('\n').length}`);

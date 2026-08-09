/**
 * 将剩余板块的 .md 文件追加到 docs/llms-full.txt
 * 当前 llms-full.txt 已包含：README + getting-started + layout + content + components/index
 * 需要追加：components 具体页面 + form + helpers + utilities
 */
const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.resolve(__dirname, '..', 'docs');
const OUTPUT_FILE = path.join(DOCS_DIR, 'llms-full.txt');

// 竖线分隔符和源文件标记格式（与前文一致）
const SEP = '\n---\n';
const srcHeader = (p) => `# 源文件: ${p}`;

// 按顺序组织剩余文件
const remainingFiles = [
  // components 具体页面（index 已写入）
  'components/accordion.md',
  'components/breadcrumb.md',
  'components/carousel.md',
  'components/collapse.md',
  'components/collapsible.md',
  'components/dialog.md',
  'components/dropdown.md',
  'components/modal-loading.md',
  'components/modal.md',
  'components/msgbox.md',
  'components/nav.md',
  'components/navbar.md',
  'components/pagination.md',
  'components/popover.md',
  'components/progress.md',
  'components/select-list.md',
  'components/sidebar.md',
  'components/tabs.md',
  'components/toast.md',
  'components/tooltip.md',
  'components/tree.md',
  'components/window.md',

  // ==== form 板块 ====
  '# 板块: form',
  'form/index.md',
  'form/checkbox.md',
  'form/control.md',
  'form/form.md',
  'form/input-group.md',
  'form/input.md',
  'form/select.md',
  'form/sizing.md',
  'form/static.md',
  'form/switch.md',
  'form/tags-input.md',
  'form/textarea.md',
  'form/toggle-button.md',
  'form/validation.md',

  // ==== helpers 板块 ====
  '# 板块: helpers',
  'helpers/index.md',
  'helpers/float.md',
  'helpers/icon.md',
  'helpers/loading.md',

  // ==== utilities 板块 ====
  '# 板块: utilities',
  'utilities/index.md',
  'utilities/color.md',
  'utilities/font.md',
];

// 读取当前文件确认结尾
const currentContent = fs.readFileSync(OUTPUT_FILE, 'utf-8');
const lastLine = currentContent.trimEnd().split('\n').pop();
console.log(`当前文件最后一行: "${lastLine}"`);
console.log(`当前文件大小: ${(currentContent.length / 1024).toFixed(1)} KB`);

// 构建追加内容
let appendContent = '';

for (const entry of remainingFiles) {
  if (entry.startsWith('# 板块:')) {
    // 板块标题
    const sectionName = entry.replace('# 板块:', '').trim();
    appendContent += `\n\n# ========================================\n`;
    appendContent += `# ==== 板块: ${sectionName} ====\n`;
    appendContent += `# ========================================\n\n`;
    continue;
  }

  const filePath = path.join(DOCS_DIR, entry);
  if (!fs.existsSync(filePath)) {
    console.warn(`WARNING: 文件不存在, 跳过: ${entry}`);
    continue;
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8');
  appendContent += SEP;
  appendContent += srcHeader(entry);
  appendContent += SEP;
  appendContent += rawContent + '\n';
  console.log(`  已读取: ${entry} (${rawContent.length} chars)`);
}

// 追加到目标文件
fs.appendFileSync(OUTPUT_FILE, appendContent, 'utf-8');

const finalContent = fs.readFileSync(OUTPUT_FILE, 'utf-8');
console.log(`\n完成! 最终文件大小: ${(finalContent.length / 1024).toFixed(1)} KB`);
console.log(`最终文件行数: ${finalContent.split('\n').length}`);

/**
 * CSS 构建脚本
 * 先编译 SCSS，再运行 PostCSS（Autoprefixer）
 */

const sass = require('sass');
const postcss = require('postcss');
const { writeFile, copyFile, mkdir } = require('fs/promises');
const { resolve, dirname } = require('path');

const root = resolve(__dirname, '..');

const postcssConfig = {
    plugins: []
};

const builds = [
  { src: 'scss/all.scss',           dest: 'dist/ting.all.css' },
  { src: 'scss/no-component.scss',   dest: 'dist/ting.no-component.css' },
];

async function run({ src, dest }) {
  const srcPath = resolve(root, src);
  const destPath = resolve(root, dest);

  // 确保输出目录存在
  await mkdir(dirname(destPath), { recursive: true });

  const { css } = sass.compile(srcPath, { sourceMap: false });

  const result = await postcss(postcssConfig.plugins).process(css, { from: src, to: dest });

  await writeFile(destPath, result.css);
  console.log(`✓  ${src}  →  ${dest}`);
}

(async () => {
  for (const cfg of builds) {
    await run(cfg);
  }

  // 复制 dist/ting.all.css 到 docs/ting/ting.css
  const srcPath = resolve(root, 'dist/ting.all.css');
  const destPath = resolve(root, 'docs/ting/ting.css');
  await mkdir(dirname(destPath), { recursive: true });
  await copyFile(srcPath, destPath);
  console.log(`✓  dist/ting.all.css  →  docs/ting/ting.css`);
})().catch(err => {
  console.error(err);
  process.exit(1);
});

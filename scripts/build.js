/**
 * CSS 构建脚本
 * 先编译 SCSS，再运行 PostCSS（Autoprefixer）
 */

const sass = require('sass');
const postcss = require('postcss');
const { writeFile, mkdir } = require('fs/promises');
const { resolve, dirname } = require('path');

const root = resolve(__dirname, '..');

const postcssConfig = {
    plugins: []
};

const builds = [
  { src: 'scss/all.scss',           dest: 'all.css' },
  { src: 'scss/no-component.scss',   dest: 'no-component.css' },
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
})().catch(err => {
  console.error(err);
  process.exit(1);
});

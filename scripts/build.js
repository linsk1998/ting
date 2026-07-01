/**
 * CSS 构建脚本
 * 先编译 SCSS，再运行 PostCSS（postcss-functions + Autoprefixer）
 */

const sass = require('sass');
const postcss = require('postcss');
const postcssFunctions = require('postcss-functions');
const { writeFile, copyFile, mkdir } = require('fs/promises');
const { resolve, dirname } = require('path');

const root = resolve(__dirname, '..');

// ============================================================
// 颜色转换：使用 color-convert 将 rgb/hsl 转为 hex
// ============================================================

const colorConvert = require('color-convert');

function parseRgbArg(s) {
    s = s.trim();
    if (s.endsWith('%')) return Math.round((parseFloat(s) / 100) * 255);
    return Math.round(parseFloat(s));
}

// postcss-functions 自定义函数：劫持 rgb() 和 hsl()，输出 hex
const customFunctions = {
    rgb(...args) {
        if (args.length < 3) return;
        const r = parseRgbArg(args[0]);
        const g = parseRgbArg(args[1]);
        const b = parseRgbArg(args[2]);
        return '#' + colorConvert.rgb.hex(r, g, b);
    },
    hsl(...args) {
        if (args.length < 3) return;
        const h = parseFloat(args[0]);
        const s = parseFloat(args[1]);
        const l = parseFloat(args[2]);
        const [r, g, b] = colorConvert.hsl.rgb(h, s, l);
        return '#' + colorConvert.rgb.hex(r, g, b);
    },
};

// ============================================================

const postcssConfig = {
    plugins: [
        postcssFunctions({ functions: customFunctions }),
    ]
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

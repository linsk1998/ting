/**
 * BackstopJS onBefore 脚本
 * 冻结页面所有 CSS 动画和过渡效果，避免 loading 等动态内容导致截图不一致
 */
module.exports = async (page, scenario, vp) => {
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.id = 'backstop-freeze';
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `;
    document.head.appendChild(style);
  });
};

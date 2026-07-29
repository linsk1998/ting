## 高级使用方式

### 结合purgecss，通过使用情况自动化按需打包

webpack插件例子

```javascript
const PurgecssPlugin = require('purgecss-webpack-plugin');
new PurgecssPlugin({
	paths:["public/index.html"],
	safelist:[略],
	keyframes:true,
	fontFace:true
})
```

postcss插件例子

```javascript
const purgecss = require('postcss-purgecss');
purgecss({
	content: ["index.html"],
	whitelist: [略],
	keyframes: true,
	fontFace:true
});
```

### 作为mixin库使用

vue-cli例子

```javascript
{
	css: {
		loaderOptions: {
			sass: {
				implementation: require('sass'),
				prependData: `
@import '~@ting-ui/css/scss/variables.scss';
@import '~@ting-ui/css/scss/mixin.scss';`
			}
		}
	}
}
```

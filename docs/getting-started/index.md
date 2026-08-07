# 起步

ting.css，有多种使用方式，最简单的方式就是直接引入全量。

首先下载[ting.css](../ting/ting.css)，然后在你的页面上用link标签引入。

## 基本的HTML模版

新版本只支持border-box盒模型，如果您想要兼容IE6、IE7需要在doctype之前打一行注释。

```html
<!--BORDERBOX-->
<!DOCTYPE html>
<html>
    <head>
        <title>Ting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="css/ting.css" rel="stylesheet"/>
    </head>
    <body>
        <h1>Hello, world!</h1>
    </body>
</html>
```

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

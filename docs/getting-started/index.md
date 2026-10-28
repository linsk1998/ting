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

## 工程化项目使用

可以通过 `npm i @ting-ui/css` 安装，然后在你的项目中的html模板中插入标签。

```html
<link href="node_modules/@ting-ui/css/ting.css" rel="stylesheet"/>
```

如果你的构建工具支持的话，会自动生成到dist目录下。


## 暗黑模式使用

本项目支持部分暗黑模式和全局暗黑模式。假如你把左侧栏设为暗黑模式，在左侧栏的容器上加入`.dark`样式类，左侧栏就会是黑色的。如果要全局使用暗黑模式，在html上加入`.dark`样式类。

## 高级使用方式

### postcss插件实现按需构建例子

```javascript
const purgecss = require('postcss-purgecss');
purgecss({
    content: ["index.html"],
    whitelist: [略],
    keyframes: true,
    fontFace:true
});
```

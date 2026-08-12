# 警告框

警告框用于向用户显示重要信息、警告、错误或成功提示。

## 基础用法

通过 `.alert` 和语境色类（如 `.alert-success`、`.alert-info`、`.alert-warning`、`.alert-danger`）可以创建不同颜色的警告框。

```html
<div class="alert alert-success" role="alert">
    <strong>Well done!</strong> 这是一行文字。这是<a href="#" class="alert-link">链接</a>。
</div>
<div class="alert alert-info" role="alert">
    <strong>Heads up!</strong> 这是一行文字。这是<a href="#" class="alert-link">链接</a>。
</div>
<div class="alert alert-warning" role="alert">
    <strong>Warning!</strong> 这是一行文字。这是<a href="#" class="alert-link">链接</a>。
</div>
<div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> 这是一行文字。这是<a href="#" class="alert-link">链接</a>。
</div>
```

## 可关闭的警告框

添加 `.alert-dismissible` 类并加入关闭按钮，可以创建可关闭的警告框。

```html
<div class="alert alert-warning alert-dismissible">
    <button type="button" class="close"></button>
    <strong>Warning!</strong> 本项目是一个CSS库，js效果仅为文档演示。
</div>
```

## 带标题和内容的警告框

```html
<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr>
    <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```

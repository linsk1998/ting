# 对齐

多种对齐方式，包括块级居中、垂直对齐等。

## 块级居中

使用 `.center-block` 将任意元素设置为 `display: block` 并通过 `margin` 居中显示。

```html
<div style="height:80px; background:#eee; margin-bottom:20px; padding:0 200px;">
    <div class="center-block" style="width:150px; background-color:#ccc;">
        center-block<br/>该 div 显示在中间
    </div>
</div>
```

## 垂直对齐

使用 `.vertical-align` 容器配合 `.vertical-align-middle` 或 `.vertical-align-bottom` 实现垂直居中或底部对齐。

### 垂直居中

```html
<div class="vertical-align" style="height:80px; background:#eee; margin-bottom:20px;">
    <div class="vertical-align-middle">vertical-align-middle</div>
</div>
```

### 底部对齐

```html
<div class="vertical-align" style="height:80px; background:#eee; margin-bottom:20px;">
    <div class="vertical-align-bottom">vertical-align-bottom</div>
</div>
```

## 混合使用

可同时使用图片和文字的垂直居中：

```html
<div class="vertical-align" style="height:100px; background:#eee;">
    <img class="vertical-align-middle" src="../images/logo.png" width="48" height="48"/>
    <span class="vertical-align-middle">多行文字<br/>垂直<br/>居中</span>
</div>
```

## 兄弟节点垂直对齐

使用 `.vertical-align-sibling` 可以使其兄弟节点垂对齐。然后兄弟就可以使用 `.vertical-align-middle` 或 `.vertical-align-bottom` 实现垂直居中或底部对齐。

### 垂直居中

```html
<div style="height:80px; background:#eee; margin-bottom:20px;">
    <div class="vertical-align-sibling"></div>
    <div class="vertical-align-middle">vertical-align-middle</div>
</div>
```

### 底部对齐

```html
<div style="height:80px; background:#eee; margin-bottom:20px;">
    <div class="vertical-align-sibling"></div>
    <div class="vertical-align-bottom">vertical-align-bottom</div>
</div>
```

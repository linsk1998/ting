# 颜色

语境颜色类和主题颜色类，可用于文字、背景、边框以及图标等场景。

## 文字颜色

```html
<p class="text-primary">本行内容带有一个 primary class <a class="text-primary" href="#">该链接使用了类</a></p>
<p class="text-success">本行内容带有一个 success class <a class="text-success" href="#">该链接使用了类</a></p>
<p class="text-info">本行内容带有一个 info class <a class="text-info" href="#">该链接使用了类</a></p>
<p class="text-warning">本行内容带有一个 warning class <a class="text-warning" href="#">该链接使用了类</a></p>
<p class="text-danger">本行内容带有一个 danger class <a class="text-danger" href="#">该链接使用了类</a></p>
```

## 背景颜色

```html
<p class="bg-primary">该段落使用了类 "bg-primary"。</p>
<p class="bg-success">该段落使用了类 "bg-success"。</p>
<p class="bg-info">该段落使用了类 "bg-info"。</p>
<p class="bg-warning">该段落使用了类 "bg-warning"。</p>
<p class="bg-danger">该段落使用了类 "bg-danger"。</p>
```

## 浅色背景

浅色背景类直接使用语境名称，不带 `bg-` 前缀，适用于需要淡色背景的场景。

```html
<p class="primary">该段落使用了类 "primary"。</p>
<p class="success">该段落使用了类 "success"。</p>
<p class="info">该段落使用了类 "info"。</p>
<p class="warning">该段落使用了类 "warning"。</p>
<p class="danger">该段落使用了类 "danger"。</p>
```

## 图标颜色

语境色类同样适用于 FontAwesome 图标等元素。

```html
<div class="dialog dialog-primary">
    <div class="dialog-header">
        <span class="dialog-title">primary对话框</span>
        <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
    </div>
    <div class="dialog-body">
        <i class="fa icon-3x text-success">&#xf058;</i>
        <i class="fa icon-3x text-success">&#xf05d;</i>
        <i class="fa icon-3x text-danger">&#xf057;</i>
        <i class="fa icon-3x text-danger">&#xf05c;</i>
        <i class="fa icon-3x text-info">&#xf059;</i>
        <i class="fa icon-3x text-info">&#xf05a;</i>
        <i class="fa icon-3x text-warning">&#xf06a;</i>
        <i class="fa icon-3x text-warning">&#xf005;</i>
    </div>
</div>
```

## 边框颜色

使用 `.border` 配合 `.border-{context}` 可以为元素添加不同颜色的边框。

```html
<div class="row row-gx-3 row-gy-3">
    <div class="col-1/5 col-gx-3 col-gy-3">
        <div class="border border-primary">border-primary</div>
    </div>
    <div class="col-1/5 col-gx-3 col-gy-3">
        <div class="border border-success">border-success</div>
    </div>
    <div class="col-1/5 col-gx-3 col-gy-3">
        <div class="border border-info">border-info</div>
    </div>
    <div class="col-1/5 col-gx-3 col-gy-3">
        <div class="border border-warning">border-warning</div>
    </div>
    <div class="col-1/5 col-gx-3 col-gy-3">
        <div class="border border-danger">border-danger</div>
    </div>
</div>
```

# 链接

提供多种链接样式，包括语义色、下划线控制、偏移量调整以及拉伸链接。

## 语义色链接

使用 `.link` 作为基础类，配合 `.link-{context}` 设置链接颜色。

```html
<a class="link link-primary" href="#">主要链接</a>
<a class="link link-secondary" href="#">次级链接</a>
<a class="link link-success" href="#">成功链接</a>
<a class="link link-info" href="#">信息链接</a>
<a class="link link-warning" href="#">警告链接</a>
<a class="link link-danger" href="#">危险链接</a>
```

## 禁用链接

使用 `.link-disabled` 禁用链接交互。

```html
<a class="link link-disabled" href="javascript:void 0">禁用链接</a>
```

## 下划线控制

使用 `.u` 强制显示下划线。

```html
<a class="link u" href="#">始终显示下划线</a>
```

## 下划线偏移量

使用 `.link-offset-{n}` 调整下划线偏移距离（`n` 为 1 或 2）。

```html
<a class="link u link-offset-1" href="#">偏移量 1</a>
<a class="link u link-offset-2" href="#">偏移量 2</a>
```

## 拉伸链接

使用 `.link-stretched` 将链接点击区域拉伸至整个父容器，父容器需设置 `position: relative`。

```html
<div class="card" style="position:relative">
    <div class="card-body">
        <h3>卡片标题</h3>
        <p>卡片的描述文字...</p>
        <a class="link link-stretched" href="#">拉伸链接</a>
    </div>
</div>
```

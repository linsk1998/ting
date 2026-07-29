# 静态控件

如果需要将一行纯文本和 `label` 元素放置于同一行，为 `<p>` 元素添加 `.form-control-static` 类即可。

```html
<form class="form-horizontal">
  <div class="form-group">
    <label class="form-label">Text</label>
    <p class="form-control-static">email@example.com</p>
  </div>
</form>
```

## 静态控件尺寸

`.form-control-static` 会随 `.form-group-lg` / `.form-group-sm` 自动适配字号和间距。

```html
<form class="form-horizontal">
  <div class="form-group form-group-lg">
    <label class="form-label">Text</label>
    <p class="form-control-static">email@example.com</p>
  </div>
  <div class="form-group form-group-sm">
    <label class="form-label">Text</label>
    <p class="form-control-static">email@example.com</p>
  </div>
</form>
```

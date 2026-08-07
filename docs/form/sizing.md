# 表单尺寸

通过 `.form-group-lg` / `.form-group-sm` 设置表单项级别尺寸，或 `.form-control-lg` / `.form-control-sm` 控制单个控件尺寸。

## 表单项尺寸

在表单组 `.form-group` 上添加 `.form-group-lg` 或 `.form-group-sm`，标签和控件会同步调整字号与高度。

```html
<form class="form">
  <div class="form-group form-group-lg">
    <label class="form-label">form-group-lg</label>
    <input class="form-control" type="text">
  </div>
  <div class="form-group form-group-sm">
    <label class="form-label">form-group-sm</label>
    <input class="form-control" type="text">
  </div>
</form>
```

## 水平表单

表单项尺寸在水平表单 `.form-horizontal` 中同样有效，标签还会自动调整垂直对齐。

```html
<form class="form-horizontal">
  <div class="form-group form-group-lg">
    <label class="form-label">form-group-lg</label>
    <input class="form-control" type="text">
  </div>
  <div class="form-group form-group-sm">
    <label class="form-label">form-group-sm</label>
    <input class="form-control" type="text">
  </div>
</form>
```

## 内联表单

在内联表单 `.form-inline` 中也可正常使用。

```html
<form class="form-inline">
  <div class="form-group form-group-lg">
    <label class="form-label">form-group-lg</label>
    <input class="form-control" type="text">
  </div>
  <div class="form-group form-group-sm">
    <label class="form-label">form-group-sm</label>
    <input class="form-control" type="text">
  </div>
</form>
```

## 控件尺寸

在控件本身添加 `.form-control-lg` / `.form-control-sm`，只影响控件大小，不影响标签。

```html
<form class="form-horizontal">
  <div class="form-group">
    <label class="form-label">form-control-lg</label>
    <input class="form-control form-control-lg" type="text">
  </div>
  <div class="form-group">
    <label class="form-label">form-control-sm</label>
    <input class="form-control form-control-sm" type="text">
  </div>
</form>
```

# 按钮组

按钮组用于将多个按钮合并为一组，支持横向排列、两端对齐和纵向排列。

## 基本用法

使用 `.btn-group` 将按钮包裹在一起，形成按钮组。

```html
<div class="btn-group">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
```

## 按钮工具栏

使用 `.btn-toolbar` 将多个 `.btn-group` 组合在一起。

```html
<div class="btn-toolbar">
  <div class="btn-group">
    <button type="button" class="btn btn-default">1</button>
    <button type="button" class="btn btn-default">2</button>
    <button type="button" class="btn btn-default">3</button>
    <button type="button" class="btn btn-default">4</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-default">5</button>
    <button type="button" class="btn btn-default">6</button>
    <button type="button" class="btn btn-default">7</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-default">8</button>
  </div>
</div>
```

## 尺寸

### 大号

```html
<div class="btn-group">
  <button type="button" class="btn btn-default btn-lg">Left</button>
  <button type="button" class="btn btn-default btn-lg">Middle</button>
  <button type="button" class="btn btn-default btn-lg">Right</button>
</div>
```

### 小号

```html
<div class="btn-group">
  <button type="button" class="btn btn-default btn-sm">Left</button>
  <button type="button" class="btn btn-default btn-sm">Middle</button>
  <button type="button" class="btn btn-default btn-sm">Right</button>
</div>
```

### 超小号

```html
<div class="btn-group">
  <button type="button" class="btn btn-default btn-xs">Left</button>
  <button type="button" class="btn btn-default btn-xs">Middle</button>
  <button type="button" class="btn btn-default btn-xs">Right</button>
</div>
```

## 两端对齐

使用 `.btn-group-justified` 让按钮平均分配宽度。

```html
<div class="btn-group btn-group-justified">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
```

## 垂直排列

使用 `.btn-group-vertical` 让按钮纵向排列。

```html
<div class="btn-group-vertical">
  <button type="button" class="btn btn-default">Top</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Bottom</button>
</div>
```

## 下拉按钮组

按钮组中可以嵌套下拉菜单。

```html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Action</button>
  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split">
    <i class="fa">&#xf0d7;</i>
  </button>
</div>
```

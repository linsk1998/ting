# 单选和多选

美化的单选（`.radio`）和多选（`.checkbox`）控件，支持默认、选中、部分选中、禁用和校验状态，以及垂直和水平两种布局。

## 多选

使用 `.checkbox-group` 垂直布局，`.checkbox-group-horizontal` 水平布局。`.checkbox` + `.checkbox-checked` / `.checkbox-indeterminate` 控制状态。

### 垂直布局

```html
<div class="checkbox-group">
    <label><div class="checkbox"><input type="checkbox"></div>默认状态</label>
    <label><div class="checkbox checkbox-checked"><input type="checkbox"></div>选中</label>
    <label><div class="checkbox checkbox-indeterminate"><input type="checkbox"></div>部分选中</label>
</div>
```

### 水平布局

```html
<div class="checkbox-group-horizontal">
    <label><div class="checkbox"><input type="checkbox"></div>默认状态</label>
    <label><div class="checkbox checkbox-checked"><input type="checkbox"></div>选中</label>
    <label><div class="checkbox checkbox-indeterminate"><input type="checkbox"></div>部分选中</label>
</div>
```

### 置灰

添加 `.checkbox-disabled`，`<input>` 设置 `disabled`。

```html
<div class="checkbox-group-horizontal">
    <label><div class="checkbox checkbox-disabled"><input type="checkbox" disabled></div>默认状态</label>
    <label><div class="checkbox checkbox-checked checkbox-disabled"><input type="checkbox" disabled></div>选中</label>
    <label><div class="checkbox checkbox-indeterminate checkbox-disabled"><input type="checkbox" disabled></div>部分选中</label>
</div>
```

### 校验

在容器上添加 `.has-invalid`。

```html
<div class="checkbox-group-horizontal has-invalid">
    <label><div class="checkbox"><input type="checkbox"></div>默认状态</label>
    <label><div class="checkbox checkbox-checked"><input type="checkbox"></div>选中</label>
    <label><div class="checkbox checkbox-indeterminate"><input type="checkbox"></div>部分选中</label>
    <label><div class="checkbox checkbox-disabled"><input type="checkbox" disabled></div>默认状态</label>
    <label><div class="checkbox checkbox-checked checkbox-disabled"><input type="checkbox" disabled></div>选中</label>
</div>
```

## 单选

使用 `.radio-group` 垂直布局，`.radio-group-horizontal` 水平布局。`.radio` + `.radio-checked` 控制状态。

### 垂直布局

```html
<div class="radio-group">
    <label><div class="radio"><input type="radio" name="demo"></div>默认状态</label>
    <label><div class="radio radio-checked"><input type="radio" name="demo"></div>选中</label>
</div>
```

### 水平布局

```html
<div class="radio-group-horizontal">
    <label><div class="radio"><input type="radio" name="demo2"></div>默认状态</label>
    <label><div class="radio radio-checked"><input type="radio" name="demo2"></div>选中</label>
</div>
```

### 置灰

```html
<div class="radio-group-horizontal">
    <label><div class="radio radio-disabled"><input type="radio" name="demo3" disabled></div>默认状态</label>
    <label><div class="radio radio-checked radio-disabled"><input type="radio" name="demo3" disabled></div>选中</label>
</div>
```

### 校验

```html
<div class="radio-group-horizontal has-invalid">
    <label><div class="radio"><input type="radio" name="demo4"></div>默认状态</label>
    <label><div class="radio radio-checked"><input type="radio" name="demo4"></div>选中</label>
    <label><div class="radio radio-disabled"><input type="radio" name="demo4" disabled></div>默认状态</label>
    <label><div class="radio radio-checked radio-disabled"><input type="radio" name="demo4" disabled></div>选中</label>
</div>
```

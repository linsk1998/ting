# 表单校验状态

表单校验的视觉反馈，包括 `.has-valid` 成功和 `.has-invalid` 错误状态，支持图标、文字提示和飘浮气泡。

## 表单组验证

在 `.form-group` 上添加 `.has-valid` 或 `.has-invalid`，控件边框和反馈文字会自动变色。

```html
<form class="form-horizontal">
  <div class="form-group has-valid">
    <label class="form-label">Valid</label>
    <input type="text" class="form-control"/>
    <div class="feedback-text">校验通过</div>
  </div>
  <div class="form-group has-invalid">
    <label class="form-label">Invalid</label>
    <input type="text" class="form-control"/>
    <p class="feedback-text">Example block-level help text here.</p>
  </div>
</form>
```

## 添加额外的图标

使用 `.has-feedback-icon` 开启图标反馈，放入 `.feedback-icon` 图标元素。成功和错误状态分别控制图标颜色。

```html
<form class="form">
  <div class="form-group has-feedback-icon has-valid">
    <label class="form-label">Valid</label>
    <input type="text" class="form-control"/>
    <i class="feedback-icon fa">&#xf00c;</i>
  </div>
  <div class="form-group has-feedback-icon has-invalid">
    <label class="form-label">Invalid</label>
    <textarea class="form-control"></textarea>
    <i class="feedback-icon fa">&#xf00d;</i>
    <p class="feedback-text">Example block-level help text here.</p>
  </div>
</form>
```

## 飘浮气泡文字

使用 `.feedback-tooltip` 替代 `.feedback-text`，提示文字将以半透明背景气泡形式飘浮在控件上方。

```html
<form class="form">
  <div class="form-group has-valid">
    <label class="form-label">is-valid</label>
    <input type="text" class="form-control"/>
    <div class="feedback-tooltip">
      校验通过
    </div>
  </div>
  <div class="form-group has-invalid">
    <label class="form-label">is-invalid</label>
    <input type="text" class="form-control"/>
    <div class="feedback-tooltip">请输入活动名称</div>
  </div>
</form>
```

## 水平表单

校验状态在 `.form-horizontal` 中同样可用。

```html
<form class="form-horizontal">
  <div class="form-group has-feedback-icon has-valid">
    <label class="form-label">Valid</label>
    <input type="text" class="form-control"/>
    <i class="feedback-icon fa">&#xf00c;</i>
  </div>
  <div class="form-group has-feedback-icon has-invalid">
    <label class="form-label">Invalid</label>
    <input type="text" class="form-control"/>
    <i class="feedback-icon fa">&#xf00d;</i>
    <p class="feedback-text">Example block-level help text here.</p>
  </div>
</form>
```

## 内联表单

`.form-inline` 内联表单也可结合校验状态。

```html
<form class="form-inline">
  <div class="form-group has-feedback-icon has-valid">
    <label class="form-label">Valid</label>
    <input type="text" class="form-control"/>
    <i class="feedback-icon fa">&#xf00c;</i>
  </div>
  <div class="form-group has-feedback-icon has-invalid">
    <label class="form-label">Invalid</label>
    <input type="text" class="form-control"/>
    <i class="feedback-icon fa">&#xf00d;</i>
  </div>
</form>
```

## 表单项尺寸

校验状态可与 `.form-group-lg` / `.form-group-sm` 结合使用。

```html
<form class="form">
  <div class="form-group form-group-lg has-feedback-icon has-valid">
    <label class="form-label">form-group-lg</label>
    <input class="form-control" type="text">
    <i class="feedback-icon fa">&#xf00c;</i>
  </div>
  <div class="form-group form-group-sm has-feedback-icon has-invalid">
    <label class="form-label">form-group-sm</label>
    <input class="form-control" type="text">
    <i class="feedback-icon fa">&#xf00d;</i>
  </div>
</form>
```

### 水平表单

```html
<form class="form-horizontal">
  <div class="form-group form-group-lg has-feedback-icon has-valid">
    <label class="form-label">form-group-lg</label>
    <input class="form-control" type="text">
    <i class="feedback-icon fa">&#xf00c;</i>
  </div>
  <div class="form-group form-group-sm has-feedback-icon has-invalid">
    <label class="form-label">form-group-sm</label>
    <input class="form-control" type="text">
    <i class="feedback-icon fa">&#xf00d;</i>
  </div>
</form>
```

### 内联表单

```html
<form class="form-inline">
  <div class="form-group form-group-lg has-feedback-icon has-valid">
    <label class="form-label">form-group-lg</label>
    <input class="form-control" type="text">
    <i class="feedback-icon fa">&#xf00c;</i>
  </div>
  <div class="form-group form-group-sm has-feedback-icon has-invalid">
    <label class="form-label">form-group-sm</label>
    <input class="form-control" type="text">
    <i class="feedback-icon fa">&#xf00d;</i>
  </div>
</form>
```

## 控件尺寸

校验图标也可配合 `.form-control-lg` / `.form-control-sm` 使用。

```html
<form class="form-inline">
  <div class="form-group has-feedback-icon has-valid">
    <label class="form-label">form-control-lg</label>
    <input class="form-control form-control-lg" type="text">
    <i class="feedback-icon fa">&#xf00c;</i>
  </div>
  <div class="form-group form-group-sm has-feedback-icon has-invalid">
    <label class="form-label">form-group-sm</label>
    <input class="form-control form-control-sm" type="text">
    <i class="feedback-icon fa">&#xf00d;</i>
  </div>
</form>
```

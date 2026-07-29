# 文本域

文本域（`.textarea`）封装了多行文本输入控件，支持字数计数、清空按钮、置灰、大小控制和校验反馈。

## 基本用法

```html
<form class="form">
  <div class="form-group">
    <label class="form-label">基本用法</label>
    <div class="textarea"
      ><textarea placeholder="请输入XXX"></textarea
    ></div>
  </div>
</form>
```

## 字数与清空

使用 `.textarea-counter` 显示字数，`.control-clear` 清空按钮。

```html
<form class="form">
  <div class="form-group">
    <label class="form-label">显示字数、清空按钮</label>
    <div class="textarea"
      ><textarea placeholder="请输入XXX"></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
    ></div>
  </div>
</form>
```

## 置灰

添加 `.textarea-disabled`，`<textarea>` 设置 `disabled`。

```html
<form class="form">
  <div class="form-group">
    <label class="form-label">置灰</label>
    <div class="textarea textarea-disabled"
      ><textarea placeholder="请输入XXX" disabled></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
    ></div>
  </div>
</form>
```

## 内联表单

`.textarea` 可在 `.form-inline` 中使用。

```html
<form class="form-inline"
  ><div class="form-group">
    <label class="form-label" for="exampleInputName2">Name</label>
    <input style="width:160px;" type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  </div
  ><div class="form-group">
    <label class="form-label" for="exampleInputEmail2">文本域</label>
    <div class="textarea"
      ><textarea placeholder="请输入XXX"></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
    ></div>
  </div
></form>
```

## 组件大小

`.textarea-lg` / `.textarea-sm` 控制文本域大小，可配合 `.form-group-lg` / `.form-group-sm`（此时 `.textarea` 无需额外尺寸类）。

```html
<form class="form-horizontal">
  <div class="form-group">
    <label class="form-label">textarea-lg</label>
    <div class="textarea textarea-lg"
      ><textarea placeholder="请输入XXX"></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
    ></div>
  </div>
  <div class="form-group">
    <label class="form-label">textarea-sm</label>
    <div class="textarea textarea-sm"
      ><textarea placeholder="请输入XXX"></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
    ></div>
  </div>
  <div class="form-group form-group-lg">
    <label class="form-label">form-group-lg</label>
    <div class="textarea"
      ><textarea placeholder="请输入XXX"></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
    ></div>
  </div>
  <div class="form-group form-group-sm">
    <label class="form-label">form-group-sm</label>
    <div class="textarea"
      ><textarea placeholder="请输入XXX"></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
    ></div>
  </div>
</form>
```

## 表单验证

配合 `.has-valid` / `.has-invalid` + `.has-feedback-icon`。

```html
<form class="form-horizontal">
  <div class="form-group has-valid has-feedback-icon">
    <label class="form-label">has-valid</label>
    <div class="textarea"
      ><textarea placeholder="请输入XXX"></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
      ><i class="feedback-icon fa">&#xf00c;</i
    ></div>
  </div>
  <div class="form-group has-invalid has-feedback-icon">
    <label class="form-label">has-invalid</label>
    <div class="textarea"
      ><textarea placeholder="请输入XXX"></textarea
      ><span class="textarea-counter">0/100</span
      ><button type="button" class="control-clear fa">&#xf057;</button
      ><i class="feedback-icon fa">&#xf00d;</i
    ></div>
  </div>
</form>
```

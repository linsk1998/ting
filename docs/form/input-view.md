# 前后缀输入框

前后缀输入框（`.input`）是一种增强型输入控件，支持在输入框前后添加图标、文字、计数器等附加内容。附加元素通过 `.input-prefix` / `.input-suffix` 放置，控件本身放在 `.input-body` 中。


## 前后缀输入框

### 单独使用

`.input-prefix` 前置图标，`.input-suffix` 后置图标，控件必须放在 `.input-body` 内。

```html
<div class="input">
  <div class="input-prefix"
    ><span class="line-middle"></span
    ><i class="icon fa">&#xf002;</i
  ></div>
  <div class="input-suffix"
    ><span class="line-middle"></span
    ><i class="icon fa">&#xf133;</i
  ></div>
  <!--控件需要放在最后-->
  <div class="input-body">
    <input type="text"/>
  </div>
</div>
```

### 配合 input-group 使用

`.input` 可嵌套在 `.input-group` 中，形成输入框组 + 前后缀的复合结构。

```html
<div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">█</div>
  </div>
  <div class="input-group-append">
    <div class="input-group-text">元</div>
  </div>
  <div class="input-group-body">
    <div class="input">
      <div class="input-prefix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf002;</i
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf133;</i
      ></div>
      <!--控件需要放在最后-->
      <div class="input-body">
        <input type="text"/>
      </div>
    </div>
  </div>
</div>
```

## 清空图标

在 `.input-body` 或 `.input-suffix` 中放入 `.control-clear` 清空按钮。当没有后缀时放在 `.input-body` 内，有后缀时可放在 `.input-suffix` 中。

```html
<!-- 没有后缀 -->
<div class="input">
  <div class="input-prefix"
    ><span class="line-middle"></span
    ><i class="icon fa">&#xf002;</i
  ></div>
  <!--控件需要放在最后-->
  <div class="input-body"
    ><input type="text"
    ><button type="button" class="control-clear fa">&#xf057;</button
  ></div>
</div>
<br/>
<!-- 有后缀 -->
<div class="input">
  <div class="input-prefix"
    ><i class="icon fa">&#xf002;</i
    ><span class="line-middle"></span
  ></div>
  <div class="input-suffix"
    ><span class="line-middle"></span
    ><i class="icon fa">&#xf133;</i
    ><button type="button" class="control-clear fa">&#xf057;</button
  ></div>
  <!--控件需要放在最后-->
  <div class="input-body"
    ><input type="text"
    ><button type="button" class="control-clear fa">&#xf057;</button
  ></div>
</div>
<br/>
<!-- 有按钮：带计数器 -->
<div class="input">
  <div class="input-prefix"
    ><span class="line-middle"></span
    ><i class="icon fa">&#xf002;</i
  ></div>
  <div class="input-suffix"
    ><span class="line-middle"></span
    ><span class="input-counter">0/111</span
  ></div>
  <div class="input-suffix"
    ><span class="line-middle"></span
    ><i class="icon fa">&#xf133;</i
  ></div>
  <!--控件需要放在最后-->
  <div class="input-body"
    ><input type="text"
    ><button type="button" class="control-clear fa">&#xf057;</button
  ></div>
</div>
```

## 置灰状态

在 `.input` 上添加 `.input-disabled`，同时给 `<input>` 设置 `disabled` 属性。

```html
<div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">█</div>
  </div>
  <div class="input-group-append btn-group">
    <button type="button" class="btn btn-default btn-disabled" disabled>按钮 1</button>
    <button type="button" class="btn btn-primary btn-disabled" disabled>按钮 2</button>
  </div>
  <div class="input-group-body">
    <div class="input input-disabled">
      <div class="input-prefix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf002;</i
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><span class="input-counter">0/111</span
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf133;</i
      ></div>
      <!--控件需要放在最后-->
      <div class="input-body"
        ><input type="text" disabled
      ></div>
    </div>
  </div>
</div>
```

## 内联表单

`.input` 可在 `.form-inline` 内联表单中使用，配合 `.input-group` 组合更复杂的场景。

```html
<form class="form-inline">
  <div class="form-group">
    <label class="form-label">Name</label>
    <input style="width:160px;" type="text" class="form-control" placeholder="Jane Doe">
  </div>
  <div class="form-group">
    <label class="form-label">Cash</label>
    <div style="width:200px" class="input">
      <div class="input-prefix">
        <span class="vertical-align-middle">￥</span>
        <span class="line-middle"></span>
      </div>
      <div class="input-suffix">
        <span class="line-middle"></span>
        <span class="vertical-align-middle">元</span>
        <span class="input-counter">0/20</span>
      </div>
      <!--控件需要放在最后-->
      <div class="input-body">
        <input type="text"/>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">Page</label>
    <div style="width:300px;" class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">http://</div>
      </div>
      <div class="input-group-body">
        <div class="input">
          <div class="input-prefix"
            ><span class="line-middle"></span
            ><span class="vertical-align-middle">www.</span
          ></div>
          <div class="input-suffix"
            ><span class="line-middle"></span
            ><span class="vertical-align-middle">.com</span
          ></div>
          <div class="input-suffix"
            ><span class="line-middle"></span
            ><span class="input-counter">0/20</span
          ></div>
          <!--控件需要放在最后-->
          <div class="input-body">
            <input type="text"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
```

## 组件大小

`.input` 支持 `.input-lg` / `.input-sm`，`.input-group` 支持 `.input-group-lg` / `.input-group-sm`，还可配合 `.form-group-lg` / `.form-group-sm` 实现表单项级别的尺寸控制。

```html
<form class="form-horizontal">
  <div class="form-group">
    <label class="form-label">input-lg</label>
    <div class="input input-lg">
      <div class="input-prefix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf002;</i
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><span class="input-counter">0/111</span
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf133;</i
      ></div>
      <!--控件需要放在最后-->
      <div class="input-body"
        ><input type="text"
        ><button type="button" class="control-clear fa">&#xf057;</button
      ></div>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">input-sm</label>
    <div class="input input-sm">
      <div class="input-prefix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf002;</i
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><span class="input-counter">0/111</span
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf133;</i
      ></div>
      <!--控件需要放在最后-->
      <div class="input-body"
        ><input type="text"
        ><button type="button" class="control-clear fa">&#xf057;</button
      ></div>
    </div>
  </div>
  <div class="form-group form-group-lg">
    <label class="form-label">form-group-lg</label>
    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <div class="input-group-text">█</div>
      </div>
      <div class="input-group-append">
        <div class="input-group-text">元</div>
      </div>
      <!--控件需要放在最后-->
      <div class="input-group-body">
        <div class="input">
          <div class="input-prefix"
            ><span class="line-middle"></span
            ><i class="icon fa">&#xf002;</i
          ></div>
          <div class="input-suffix"
            ><span class="line-middle"></span
            ><span class="input-counter">0/111</span
          ></div>
          <div class="input-suffix"
            ><span class="line-middle"></span
            ><i class="icon fa">&#xf133;</i
          ></div>
          <!--控件需要放在最后-->
          <div class="input-body"
            ><input type="text"
            ><button type="button" class="control-clear fa">&#xf057;</button
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-group form-group-sm">
    <label class="form-label">form-group-sm</label>
    <div class="input-group input-group-sm">
      <div class="input-group-prepend">
        <div class="input-group-text">█</div>
      </div>
      <div class="input-group-append">
        <div class="input-group-text">元</div>
      </div>
      <div class="input-group-body">
        <div class="input">
          <div class="input-prefix"
            ><span class="line-middle"></span
            ><i class="icon fa">&#xf002;</i
          ></div>
          <div class="input-suffix"
            ><span class="line-middle"></span
            ><span class="input-counter">0/111</span
          ></div>
          <div class="input-suffix"
            ><span class="line-middle"></span
            ><i class="icon fa">&#xf133;</i
          ></div>
          <!--控件需要放在最后-->
          <div class="input-body"
            ><input type="text"
            ><button type="button" class="control-clear fa">&#xf057;</button
          ></div>
        </div>
      </div>
    </div>
  </div>
</form>
```

## 校验

`.input` 可配合 `.has-valid` / `.has-invalid` 校验状态，`.feedback-icon` 和 `.control-clear` 共存于 `.input-body` 内。

```html
<form class="form-horizontal">
  <div class="form-group has-valid has-feedback-icon">
    <label class="form-label">has-valid</label>
    <div class="input">
      <div class="input-prefix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf002;</i
      ></div>
      <!--控件需要放在最后-->
      <div class="input-body"
        ><input type="text"
        ><button type="button" class="control-clear fa">&#xf057;</button
        ><i class="feedback-icon fa">&#xf00c;</i
      ></div>
    </div>
    <p class="feedback-text">没有后缀</p>
  </div>
  <div class="form-group has-invalid has-feedback-icon">
    <label class="form-label">has-invalid</label>
    <div class="input">
      <div class="input-prefix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf002;</i
      ></div>
      <!--控件需要放在最后-->
      <div class="input-body"
        ><input type="text"
        ><button type="button" class="control-clear fa">&#xf057;</button
        ><i class="feedback-icon fa">&#xf00d;</i
      ></div>
    </div>
    <p class="feedback-text">没有后缀</p>
  </div>
  <div class="form-group has-valid has-feedback-icon">
    <label class="form-label">has-valid</label>
    <div class="input">
      <div class="input-prefix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf002;</i
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><span class="input-counter">0/111</span
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf133;</i
      ></div>
      <!--控件需要放在最后-->
      <div class="input-body"
        ><input type="text"
        ><button type="button" class="control-clear fa">&#xf057;</button
        ><i class="feedback-icon fa">&#xf00c;</i
      ></div>
    </div>
    <p class="feedback-text">有后缀</p>
  </div>
  <div class="form-group has-invalid has-feedback-icon">
    <label class="form-label">has-invalid</label>
    <div class="input">
      <div class="input-prefix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf002;</i
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><span class="input-counter">0/111</span
      ></div>
      <div class="input-suffix"
        ><span class="line-middle"></span
        ><i class="icon fa">&#xf133;</i
      ></div>
      <!--控件需要放在最后-->
      <div class="input-body"
        ><input type="text"
        ><button type="button" class="control-clear fa">&#xf057;</button
        ><i class="feedback-icon fa">&#xf00d;</i
      ></div>
    </div>
    <p class="feedback-text">有后缀</p>
  </div>
</form>
```

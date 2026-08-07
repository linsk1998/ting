# 开关按钮

开关按钮（`.switch`）用于布尔值切换的场景，支持选中、禁用和加载中状态。

## 基本用法

`.switch` + `.switch-thumb` 构成开关滑块，配合 `<input type="checkbox">` 和 `<label>`。

```html
<label>
    <div class="switch">
        <div class="switch-thumb"></div>
        <input type="checkbox">
    </div>
    默认状态
</label>
<label>
    <div class="switch switch-checked">
        <div class="switch-thumb"></div>
        <input type="checkbox">
    </div>
    选中
</label>
```

## 置灰

添加 `.switch-disabled`，`<input>` 设置 `disabled`。

```html
<label>
    <div class="switch switch-disabled">
        <div class="switch-thumb"></div>
        <input type="checkbox" disabled>
    </div>
    默认状态
</label>
<label>
    <div class="switch switch-checked switch-disabled">
        <div class="switch-thumb"></div>
        <input type="checkbox" disabled>
    </div>
    选中
</label>
```

## 加载中

添加 `.switch-loading`，在 `.switch-thumb` 内放 `.loading-circular`。选中和置灰状态可叠加。

```html
<label>
    <div class="switch switch-loading">
        <div class="switch-thumb"><div class="loading-circular"></div></div>
        <input type="checkbox" disabled>
    </div>
    默认状态
</label>
<label>
    <div class="switch switch-checked switch-loading">
        <div class="switch-thumb"><div class="loading-circular"></div></div>
        <input type="checkbox" disabled>
    </div>
    选中
</label>
<label>
    <div class="switch switch-disabled switch-loading">
        <div class="switch-thumb"><div class="loading-circular"></div></div>
        <input type="checkbox" disabled>
    </div>
    默认状态
</label>
<label>
    <div class="switch switch-checked switch-disabled switch-loading">
        <div class="switch-thumb"><div class="loading-circular"></div></div>
        <input type="checkbox" disabled>
    </div>
    选中
</label>
```

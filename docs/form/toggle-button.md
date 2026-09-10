# 开关按钮

开关按钮（`.btn-toggle`）提供按钮形式的开关交互，适用于需要在两个状态间切换的场景。支持独立使用、放入按钮组、内含 checkbox / radio 等形态。

## 基本用法

`.btn-toggle` 可作用于 `<label>`（内含 `.checkbox` 或 `.radio`）或 `<button>`。

```html
<div class="btn-toolbar">
    <label class="btn btn-toggle">
        <div class="checkbox"><input type="checkbox"></div>
        未选中
    </label>
    <label class="btn btn-toggle btn-toggle-checked">
        <div class="checkbox checkbox-checked"><input type="checkbox"></div>
        选中
    </label>
    <button class="btn btn-toggle">未选中</button>
    <button class="btn btn-toggle btn-toggle-checked">选中</button>
</div>
```

### 含 radio 单选

```html
<div class="btn-toolbar">
    <label class="btn btn-toggle">
        <div class="radio"><input type="radio" name="radio-group"></div>
        未选中
    </label>
    <label class="btn btn-toggle btn-toggle-checked">
        <div class="radio radio-checked"><input type="radio" name="radio-group"></div>
        选中
    </label>
    <button class="btn btn-toggle">未选中</button>
    <button class="btn btn-toggle btn-toggle-checked">选中</button>
</div>
```

### 放入按钮组

```html
<div class="btn-toolbar">
    <div class="btn-group">
        <label class="btn btn-toggle">
            <div class="checkbox"><input type="checkbox"></div>
            未选中
        </label>
        <label class="btn btn-toggle btn-toggle-checked">
            <div class="checkbox checkbox-checked"><input type="checkbox"></div>
            选中
        </label>
    </div>
    <div class="btn-group">
        <button class="btn btn-toggle">未选中</button>
        <button class="btn btn-toggle btn-toggle-checked">选中</button>
    </div>
</div>
```

# 工具提示

工具提示（`.tooltip`）用于在元素旁边显示提示气泡，支持上、右、下、左四个弹出方向。

## 样式用法

<style>
  .ting-example .tooltip {
    position: relative;
  }
</style>

```html
<div class="tooltip tooltip-left">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner">
        Tooltip on the left
    </div>
</div>
<div class="tooltip tooltip-top">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner">
        Tooltip on the top
    </div>
</div>
<div class="tooltip tooltip-bottom">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner">
        Tooltip on the bottom
    </div>
</div>
<div class="tooltip tooltip-right">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner">
        Tooltip on the right
    </div>
</div>
```

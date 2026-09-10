# 弹出框

弹出框（`.popover`）比工具提示包含更多内容，支持标题（`.popover-header`）和正文（`.popover-body`），可向上、右、下、左四个方向弹出。

## 基本用法

<style>
  .ting-example .popover {
    position: relative;
  }
</style>

```html
<div class="popover popover-left">
    <div class="popover-arrow"></div>
    <h3 class="popover-header">Popover title</h3>
    <div class="popover-body">
        And here's some amazing content. It's very engaging.
    </div>
</div>
<div class="popover popover-top">
    <div class="popover-arrow"></div>
    <h3 class="popover-header">Popover title</h3>
    <div class="popover-body">
        And here's some amazing content. It's very engaging.
    </div>
</div>
<div class="popover popover-bottom">
    <div class="popover-arrow"></div>
    <h3 class="popover-header">Popover title</h3>
    <div class="popover-body">
        And here's some amazing content. It's very engaging.
    </div>
</div>
<div class="popover popover-right">
    <div class="popover-arrow"></div>
    <h3 class="popover-header">Popover title</h3>
    <div class="popover-body">
        And here's some amazing content. It's very engaging.
    </div>
</div>
```

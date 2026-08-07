# 清除浮动

通过 `.pull-left` 和 `.pull-right` 类快速设置浮动，使用 `.clearfix` 清除容器内的浮动。

## 快速浮动

注意 HTML 书写顺序：先写右浮动元素，再写左浮动元素，可以避免一些布局问题。

```html
<div class="clearfix">
    <div class="pull-right">先写右</div>
    <div class="pull-left">再写左</div>
</div>
```

## 相关类

| 类 | 描述 |
|---|---|
| .pull-left | 元素浮动到左边 |
| .pull-right | 元素浮动到右边 |
| .clearfix | 清除容器内的浮动 |

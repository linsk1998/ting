# 布局

一套响应式栅格系统和弹性布局方案，帮助开发者快速构建页面布局。

## 断点

包括五个默认断点，断点代表了常见设备尺寸和视口尺寸的子集。

			
| 断点 | 代号 | 尺寸 | 典型屏幕 |
|---|---|---|---|
| 手机 | xs | ~ 576px | 375x667 |
| 平板 | sm | 576px ~ 992px | 800x1280 |
| 小屏 | md | 992px ~ 1400px | 1024x768 |
| 中屏 | lg | 1400px ~ 1700px | 1600x900 |
| 大屏 | xl | 1700px ~ | 1920x1080 |

## 布局容器

.container 类用于固定宽度并支持响应式布局的容器。
		
```html
<div class="container">
    ...
</div>
```

.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。

```html
<div class="container-fluid">
    ...
</div>
```

| 类 | 描述 |
|---|---|
| .container | 用于固定宽度居中并支持响应式。 |
| .container-{size} | 直到指定断点为止是 width: 100%。 |
| .container-fluid | 用于 100% 宽度，占据全部视口（viewport）的容器。 |
		
| 类 | ~ 576px | 576px ~ 992px | 992px ~ 1400px | 1400px ~ 1700px | 1700px ~ |
|---|---|---|---|---|---|
| .container-sm | 100% | 546px | 1002px | 1134px | 1362px |
| .container-md, .container | 100% | 100% | 1002px | 1134px | 1362px |
| .container-lg | 100% | 100% | 100% | 1134px | 1362px |
| .container-xl | 100% | 100% | 100% | 100% | 1362px |
| .container-fluid | 100% | 100% | 100% | 100% | 100% |

[例子](container.html)

## 栅格系统

不带间隔支持响应式的布局样式类。由于使用的是border-box，因此可以加入padding，实现固定宽度间隙。

```html
<div class="container">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-10"></div>
    </div>
</div>
```

加入宽度为24px的间隙。

```html
<div class="container">
    <div class="row row-gx-4">
        <div class="col-md-2 col-gx-4"></div>
        <div class="col-md-10 col-gx-4"></div>
    </div>
</div>
```

| 类 | 描述 |
|---|---|
| .row | 网格中的行，用于包裹列，清除列的浮动。里面的列没有间隔。 |
| .col-{width} | 列的宽度。如`.col-4`默认为12等分。`.col-4/5`五分之四宽度。 |
| .col-offset-{width} | 列偏移 |
| .col-push-{width} | 右移动偏移 |
| .col-pull-{width} | 左移动偏移 |
| .col-{size}-{width} | 不同设备尺寸的列宽度，如`.col-md-4` `.col-md-4/5`。size可以为md、lg、sm、xs。 |
| .col-{size}-offset-{width} | 列偏移 |
| .col-{size}-push-{width} | 右移动偏移 |
| .col-{size}-pull-{width} | 左移动偏移 |
| .col-{size}-{width}-{gap} | 间隙尺寸，gap为0~5可选 |
| .row-gx-{n} | 间隙调整，n为0~5可选 |
| .row-gy-{n} | 垂直间隙 |

[例子](grid.html)

## 宽度高度适应

| 类 | 描述 |
|---|---|
| .flex | 最外层宽度100%的弹性布局容器。 |
| .row-flex | 一行弹性布局容器。 |
| .col-left | 一行内的左列（固定宽度）。 |
| .col-right | 一行内的右列（固定宽度）。 |
| .col-center | 一行内的中间列（宽度自适应剩余宽度）。 |
| .col-flex | 一列弹性布局容器。 |
| .row-shrink | 一列中的高度为内容高度行（或高度固定）。 |
| .row-grow | 一列中的高度适应剩余高度行。 |

[高度适应例子](layout-vbox.html) [综合例子](layout-border.html)

## 固定比例容器

| 类 | 描述 |
|---|---|
| .ratio | 固定比例媒体容器 |
| .ratio-21x9 | 21:9容器 |
| .ratio-16x9 | 16:9容器 |
| .ratio-4x3 | 4:3容器 |
| .ratio-1x1 | 1:1容器 |
| .ratio-item | 媒体内容 |

[使用方法](./ratio.md)

## 对齐

| 类 | 描述 |
|---|---|
| .center-block | 设置元素为 display:block 并居中显示 |
| .vertical-align | 垂直对齐容器。 |
| .vertical-align-middle | 垂直居中内容。 |
| .vertical-align-bottom | 底部对齐内容。 |
[使用方法](./align.md)


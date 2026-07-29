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

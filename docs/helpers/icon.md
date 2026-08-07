# 图标

参考 FontAwesome 提供了一套丰富的图标样式类，包括尺寸缩放、固定宽度、旋转翻转、堆叠组合等功能。

## 基本图标

使用样式类 `.icon` 生成一个方形 inline-block。

```html
<i class="icon fa">&#xf004;</i>
<i class="icon fa fa-heart"></i>
```

## 大图标

使用 `icon-lg`（33% 递增）、`icon-2x`、`icon-3x`、`icon-4x` 或 `icon-5x` 类来放大图标。

```html
<i class="fa icon-lg">&#xf083;</i>
<i class="fa icon-2x">&#xf083;</i>
<i class="fa icon-3x">&#xf083;</i>
<i class="fa icon-4x">&#xf083;</i>
<i class="fa icon-5x">&#xf083;</i>
```

## 固定宽度

使用 `icon-fw` 可以将图标设置为一个固定宽度，主要用于不同宽度图标无法对齐的情况，尤其在列表或导航时起到重要作用。

```html
<div class="list-group">
  <a class="list-group-item" href="#"><i class="fa icon-fw">&#xf015;</i> Home</a>
  <a class="list-group-item" href="#"><i class="fa icon-fw">&#xf02d;</i> Library</a>
  <a class="list-group-item" href="#"><i class="fa icon-fw">&#xf040;</i> Applications</a>
  <a class="list-group-item" href="#"><i class="fa icon-fw">&#xf013;</i> Settings</a>
</div>
```

## 动画

使用 `icon-spin` 类来使任意图标旋转，也可以使用 `icon-pulse` 来使其进行8方位旋转。尤其适合加载中和设置类图标。

```html
<i class="fa icon-spin">&#xf110;</i>
<i class="fa icon-spin">&#xf1ce;</i>
<i class="fa icon-spin">&#xf013;</i>
<i class="fa icon-spin">&#xf021;</i>
<i class="fa icon-pulse">&#xf110;</i>
```

> **提示**：CSS3 动画不支持 IE9 以下。

## 旋转和翻转

使用 `icon-rotate-*` 和 `icon-flip-*` 类对图标进行任意旋转和翻转。

```html
<i class="icon fa">&#xf132;</i> normal
<i class="icon fa icon-rotate-90">&#xf132;</i> icon-rotate-90
<i class="icon fa icon-rotate-180">&#xf132;</i> icon-rotate-180
<i class="icon fa icon-rotate-270">&#xf132;</i> icon-rotate-270
<i class="icon fa icon-flip-horizontal">&#xf132;</i> icon-flip-horizontal
<i class="icon fa icon-flip-vertical">&#xf132;</i> icon-flip-vertical
```

## 组合使用

使用 `icon-stack` 类作为父容器，`icon-stack-1x` 作为正常比例的图标，`icon-stack-2x` 作为大一些的图标。还可以使用 `icon-inverse` 类来切换图标颜色。可通过添加大图标类来控制整体大小。

```html
<span class="icon-stack icon-lg">
  <i class="fa icon-stack-2x">&#xf096;</i>
  <i class="fa icon-stack-1x">&#xf099;</i>
</span>
fa-twitter on fa-square-o
<span class="icon-stack icon-lg">
  <i class="fa icon-stack-2x">&#xf111;</i>
  <i class="fa icon-stack-1x icon-inverse">&#xf024;</i>
</span>
fa-flag on fa-circle
<span class="icon-stack icon-lg">
  <i class="fa icon-stack-2x">&#xf0c8;</i>
  <i class="fa icon-stack-1x icon-inverse">&#xf120;</i>
</span>
fa-terminal on fa-square
<span class="icon-stack icon-lg">
  <i class="fa icon-stack-1x">&#xf030;</i>
  <i class="fa icon-stack-2x text-danger">&#xf05e;</i>
</span>
fa-ban on fa-camera
```

## 可访问性

使用 `aria-hidden` 可以禁止屏幕朗读工具作用，使用 `aria-label` 可以让屏幕朗读工具读指定的内容。

```html
<button type="button" class="btn btn-default" aria-label="Left Align">
  <i class="fa" aria-hidden="true">&#xf036;</i>
</button>
<button type="button" class="btn btn-default">
  <i class="fa" aria-hidden="true">&#xf005;</i> Star
</button>
```

# 按钮

按钮是网页中最基础的交互元素。支持多种 HTML 元素、语境颜色、尺寸以及加载状态。

## 基础用法

使用 `.btn` 和 `.btn-default` 类创建默认按钮。可以应用于 `<button>`、`<a>` 和 `<label>` 元素。

```html
<button type="button" class="btn btn-default">Default</button>
<a href="javascript:void 0" class="btn btn-default">Default</a>
<label class="btn btn-default">Default</label>
<button type="button" class="btn btn-default btn-disabled" disabled>Default</button>
<a href="javascript:void 0" class="btn btn-default btn-disabled" disabled>Default</a>
<label class="btn btn-default btn-disabled" disabled>Default</label>
```

## 语境颜色

通过 `.btn-primary`、`.btn-success`、`.btn-info`、`.btn-warning`、`.btn-danger` 类可以为按钮添加不同的语境颜色。

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
```

## 幽灵按钮（边框按钮）

使用 `.btn-outline-*` 类创建透明背景的幽灵按钮。

```html
<button type="button" class="btn btn-outline-primary">Outline</button>
<button type="button" class="btn btn-outline-success">Outline</button>
<button type="button" class="btn btn-outline-info">Outline</button>
<button type="button" class="btn btn-outline-warning">Outline</button>
<button type="button" class="btn btn-outline-danger">Outline</button>
```

## 尺寸

通过 `.btn-xl`、`.btn-lg`、`.btn-sm`、`.btn-xs` 调整按钮大小。

```html
<button type="button" class="btn btn-default btn-xl">Extra large</button>
<button type="button" class="btn btn-default btn-lg">Large</button>
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-default btn-sm">Small</button>
<button type="button" class="btn btn-default btn-xs">Extra small</button>
```

## 方块按钮

使用 `.btn-square-*` 创建正方形按钮。

```html
<button type="button" class="btn btn-default btn-square-xl">方</button>
<button type="button" class="btn btn-default btn-square-lg">方</button>
<button type="button" class="btn btn-default btn-square">方</button>
<button type="button" class="btn btn-default btn-square-sm">方</button>
<button type="button" class="btn btn-default btn-square-xs">方</button>
```

## 块级按钮

使用 `.btn-block` 让按钮占满父容器宽度。

```html
<button type="button" class="btn btn-primary btn-block">Block level button</button>
<button type="button" class="btn btn-default btn-block">Block level button</button>
```

## 圆角按钮

```html
<button type="button" class="btn btn-default btn-round">Round</button>
```

## 带图标的按钮

使用 `.btn-icon-left` / `.btn-icon-right` 控制图标位置，`.btn-label` 包裹按钮文字。

```html
<button type="button" class="btn btn-primary">
    <i class="fa btn-icon-left">&#xf007;</i>
    <span class="btn-label">用户</span>
</button>
<button type="button" class="btn btn-primary">
    <span class="btn-label">下载</span>
    <i class="fa btn-icon-right">&#xf019;</i>
</button>
```

## 加载状态

使用 `.btn-loading` 类标记加载中的按钮。

```html
<button type="button" class="btn btn-primary btn-loading"><i class="btn-icon-left loading-spin"></i><span class="btn-label">加载中</span></button>
<button type="button" class="btn btn-success btn-loading">加载中</button>
<button type="button" class="btn btn-info btn-loading">加载中</button>
<button type="button" class="btn btn-warning btn-loading">加载中</button>
<button type="button" class="btn btn-danger btn-loading">加载中</button>
```

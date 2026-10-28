# 页面内容

丰富的页面内容样式，包括排版、链接、表格、图片、卡片、列表、媒体对象等。

## 文章排版

排版定义了各种标题、段落、列表及其他内联元素的样式，您可以创建标题、段落、列表及其他内联元素。

			
| 类 | 描述 |
|---|---|
| .h1~.h6 | 设置为标题样式 |
| .small、.mark | 和HTML有相同样式的class |
| .pre、.nobr | 和HTML有相同样式的class |
| .u、.s、.i、.b | 和HTML有相同样式的class |
| .list-unstyled | 移除默认的列表样式 |
| .list-inline<br/>.list-inline-item | 将所有列表项放置同一行 |

[使用方法](./type.md)

## 超级链接

| 类 | 描述 |
|---|---|
| .link-primary | 主要链接 |
| .link-secondary | 次级链接 |
| .link-disabled | 禁用链接 |
| .link-offset-* | 增加下划线偏移量 |
| .link-stretched | 链接作用到容器（需要将链接放入position:relative的容器中） |

[使用方法](./link.md)

## 页头

页头组件能够为 `h1` 标签增加适当的空间，并且与页面的其他部分形成一定的分隔。它支持 `h1` 标签内内嵌 `small` 元素的默认效果，还支持大部分其他组件（需要增加一些额外的样式）。

```html
<h1 class="page-header">页头</h1>
```

## 表格

| 类 | 描述 |
|---|---|
| .table | 为任意  添加基本样式 (只有横向分隔线) |
| .table-striped | 在  内添加斑马线形式的条纹 ( IE8 不支持) |
| .table-bordered | 为所有表格的单元格添加边框 |
| .table-hover | 在  内的任一行启用鼠标悬停状态 |
| .table-sm | 让表格更加紧凑 |
| .thead-subtle<br/>.thead-inverse | 表头 |
| .table-{context} | 语境类，可以用于整个表格，也可以用于整行，也可以用于单个单元格 |
| .table-active | 激活状态 |
| .table-responsive | 响应式表格 |
| .table-fixed | 强制固定表格宽度 |

[使用方法](./table.md)

## 图片

| 类 | 描述 |
|---|---|
| .img-rounded | 圆角 |
| .img-circle | 圆形 |
| .img-thumbnail | 带边框 |
| .img-fluid | 让图片占满容器宽度 |
| .img-responsive | 容器不够宽时自动缩放 |

[使用方法](./img.md)

## 媒体对象

专门解决图文混排、评论列表、消息流、动态信息流等场景的统一排版问题。

			
| 类 | 描述 |
|---|---|
| .media | 媒体组件外层容器，使用弹性布局，统一管理图文间距，支持媒体嵌套 |
| .media-left | 左侧媒体容器，放置头像、缩略图，默认居上对齐 |
| .media-right | 右侧媒体容器，图片放置在文本内容右侧 |
| .media-body | 媒体主体内容容器，自动自适应剩余宽度，承载标题、正文、嵌套媒体 |
| .media-object | 媒体内部图片专用类，清除图片默认边距、适配容器宽高，防止溢出 |
| .media-heading | 媒体内容标题，自带底部间距，区分标题与正文文本 |
| .media-middle | 配合 .media-left / .media-right 使用，图片垂直居中对齐 |
| .media-bottom | 配合 .media-left / .media-right 使用，图片垂直底部对齐 |
| .media-list | 媒体列表外层，清除列表默认内外边距，批量渲染多条 media 评论/信息流 |

			
```html
<div class="media">
    <div class="media-left">
        <a href="#"><img class="media-object" src="http://placeholder.qiniudn.com/64x64" width="64" height="64"/></a>
    </div>
    <div class="media-right">
        <a href="#"><img class="media-object" src="http://placeholder.qiniudn.com/64x64" width="64" height="64"/></a>
    </div>
    <div class="media-body">
        <h4 class="media-heading">Media heading</h4>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
    </div>
</div>
```

[使用方法](./media.md)

## 列表

| 类 | 描述 |
|---|---|
| .list | 只带有横线的列表 |
| .list-dashed | 虚线列表 |
| .list-flush | 没有边框的列表 |
| .list-bordered | 含有边框的列表 |
| .list-striped | 隔行变色 |
| .list-hover | 鼠标经过样式 |
| .list-item-{context} | 列表项的语境色 |
| .active | 列表项的活动样式 |

[效果演示](list.html)

## 卡片

通过缩略图组件扩展和栅格系统，可以很容易地展示栅格样式的图像、视频、文本等内容。

			
| 类 | 描述 |
|---|---|
| .card | 卡片容器 |
| .card-body | 卡片主体内容区域，提供内边距 |
| .card-header | 卡片头部区域 |
| .card-footer | 卡片底部区域 |
| .card-title | 卡片标题 |
| .card-subtitle | 卡片副标题 |
| .card-text | 卡片段落文本 |
| .card-link | 卡片内的链接 |
| .card-img-top | 卡片顶部图片 |
| .card-img-bottom | 卡片底部图片 |
| .card-img | 卡片图片，同时是顶部图片和底部图片时，可以使用此类 |
| .card-img-overlay | 覆盖在图片上方的内容层，用于图文叠加 |
| .card-header-tabs | 卡片头部的标签页导航样式 |
| .card-header-pills | 卡片头部的药丸导航样式 |
| .card-header-underline | 卡片头部的下划线导航样式 |

			
```html
<a href="#" class="card">
    <img src="..." alt="...">
</a>
```

[效果演示](card.html)

## 缩略图卡片

| 类 | 描述 |
|---|---|
| .thumbnail | 卡片容器 |
| .thumbnail .caption | 卡片主体内容区域 |

[效果演示](thumbnail.md)

## 凹陷

| 类 | 描述 |
|---|---|
| .well | 凹陷容器，浅灰色背景，带边框和内阴影效果 |
| .well-lg | 大号凹陷，内边距22px |
| .well-sm | 小号凹陷，内边距9px |

[使用方法](./well.md)

## 标志

| 类 | 描述 |
|---|---|
| .callout | 标志容器，白色背景，带左侧5px边框标识和阴影 |
| .callout-{context} | 标志容器，语境色 |

[使用方法](./callout.md)

## 徽章

给链接、导航等元素嵌套  元素，可以很醒目的展示新的或未读的信息条目。

			
| 类 | 描述 |
|---|---|
| .badge | 徽章，圆角红色背景，白色文字，最小宽度18px |

[使用方法](./badge.md)

## 标签

| 类 | 描述 |
|---|---|
| .tag | 标签容器，带边框和内边距 |
| .tag-{context} | 标签语境色 |
| .tag-{size} | 标签大小 |

[使用方法](./tag.md)

## 警告框

| 类 | 描述 |
|---|---|
| .alert | 警告框容器，带内边距和边框 |
| .alert-{context} | 警告框语境色，不同的背景、文字和边框颜色 |
| .alert-dismissible | 可关闭警告框，左侧留出关闭按钮位置 |
| .alert-link | 警告框内的链接，加粗显示，悬停变色 |
| .alert-heading | 警告框内的标题 |

[使用方法](./alert.html)

## 描述列表​

以表格形式展示一组键值对信息，常用于详情页、个人中心等场景。

| 类 | 描述 |
|---|---|
| .descriptions | 描述列表容器 |
| .descriptions-header | 描述列表头部 |
| .descriptions-table | 内部的表格 |
| .descriptions-row | 表格行 |
| .descriptions-label | 标签列 |
| .descriptions-content | 内容列 |
| .descriptions-bordered | 带边框样式，标签列带浅色背景 |
| .descriptions-sm | 表格紧凑 |

[使用方法](./descriptions.md)

## 巨幕

| 类 | 描述 |
|---|---|
| .jumbotron | 延伸至整个浏览器视口来展示网站上的关键内容。 |

## 网站底部

| 类 | 描述 |
|---|---|
| .footer | 网站底部 |

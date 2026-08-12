# 组件

本章节组件更推荐使用 Javascript 框架封装成组件使用。本项目是一个纯 CSS 实现的表单组件，示例页内的 Javascript 代码，仅为文档演示。

## 路径导航

breadcrumb在一个带有层次的导航结构中标明当前页面的位置。

			
| 类 | 描述 |
|---|---|
| .breadcrumb | 路径导航容器，浅灰色背景，使用斜杠分隔各级 |

[使用方法](./breadcrumb.md)

## 导航

导航组件都依赖同一个 .nav 类，状态类也是共用的。改变修饰类可以改变样式。提供了选项卡标签页、药丸标签页、下划线标签页三种。

			
| 类 | 描述 |
|---|---|
| .nav | 导航基础容器，清除列表默认样式 |
| .nav-pills | 药丸导航，圆角背景，激活项填充主题色 |
| .nav-tabs | 选项卡导航，底部边框，激活项带边框和白色背景 |
| .nav-underline | 指示器导航，底部边框，激活项底部显示主题色指示线 |
| .nav-justified | 两端对齐导航，导航项平均分配宽度 |
| .nav-tabs-left<br/>.nav-tabs-right | 左侧/右侧垂直选项卡导航 |

[使用方法](./nav.md)

## 标签页

| 类 | 描述 |
|---|---|
| .tabs | tab切换框总容器 |
| .tabs-content | tab内容容器 |
| .tabs-pane | tab内容面板，默认隐藏 |
| .active | 激活的tab面板 |
| .tabs-left | 导航左排 |
| .tabs-right | 导航右排 |
| .tabs-below | 导航下排，content需放在nav前面 |

[使用方法](./tabs.md)

## 导航条

| 类 | 描述 |
|---|---|
| .navbar | 导航栏基础容器，提供基本的定位和布局 |
| .navbar-fixed-top | 导航栏固定在顶部 |
| .navbar-sticky-top | 导航栏粘滞在顶部 |
| .navbar-brand | 导航栏品牌标识区域，通常放置Logo或网站名称 |
| .navbar-nav | 导航栏内的导航列表容器 |
| .navbar-collapsible | 响应式折叠区域，在小屏幕时可收起/展开 |
| .navbar-toggle | 移动端折叠触发按钮 |
| .navbar-header | 导航栏头部，包含品牌标识和移动端切换按钮 |
| .navbar-right | 导航栏内容右对齐 |
| .navbar-form | 导航栏内的表单区域，自动适配间距和对齐 |
| .navbar-btn | 导航栏内的按钮，适配垂直居中 |
| .navbar-text | 导航栏内的文本内容，自动适配行高和对齐 |
| .navbar-link | 导航栏内的普通链接样式 |

[使用方法](./navbar.md)

## 分页

为您的网站或应用提供带有展示页码的分页组件，或者可以使用简单的翻页组件。

			
| 类 | 描述 |
|---|---|
| .pagination | 分页列表容器，内联块级显示 |
| .pagination-lg<br/>.pagination-sm | 分页大小：大、小 |
| .pagination-gutter | 分页项之间有间距的样式 |
| .active | 当前激活的页码项 |
| .disabled | 禁用的页码项，不可点击 |

[使用方法](./pagination.md)

## 列表组

| 类 | 描述 |
|---|---|
| .list-group | 列表组容器，提供基本的列表样式和边框 |
| .list-group-item | 列表组中的单个项目，支持悬停效果和语境色 |
| .list-group-flush | 去除列表组边框和圆角，使其与父容器无缝融合 |
| .list-group-item-{context} | 列表项的语境色样式，用于表示不同状态 |
| .active | 激活状态的列表项，高亮显示 |

[使用示例](list-group.html)

## 进度条

| 类 | 描述 |
|---|---|
| .progress | 进度条容器，浅灰色背景，带内阴影 |
| .progress-bar | 进度条主体，默认主题色背景，白色文字，支持动画过渡 |
| .progress-bar-{context} | 进度条语境色，表示不同状态 |
| .progress-sm | 小号进度条，高度12px |
| .progress-xs | 超小进度条，高度6px |

[使用方法](./progress.md)

## 轮播图

| 类 | 描述 |
|---|---|
| .carousel | 轮播图容器，相对定位 |
| .carousel-indicators | 轮播指示器，底部圆点导航 |
| .carousel-inner | 轮播内容区域，隐藏溢出，横向排列 |
| .carousel-item | 轮播项，每个幻灯片 |
| .carousel-control-prev | 左切换按钮 |
| .carousel-control-next | 右切换按钮 |
| .carousel-caption | 轮播图文字说明，底部半透明黑色背景 |

[使用方法](./carousel.md)

## 下拉菜单

| 类 | 描述 |
|---|---|
| .dropdown | 下拉菜单容器，相对定位 |
| .dropdown-menu | 下拉菜单列表，绝对定位，默认隐藏 |
| .dropdown-menu-right | 右对齐的下拉菜单 |
| .dropdown-item | 下拉菜单项，支持悬停效果 |
| .dropdown-list | 下拉列表样式，使用在原生select |
| .dropup、.dropleft、.dropright | 弹出的菜单方向 |
| .dropdown-toggle-split | 下拉按钮分隔样式 |
| .dropright-submenu | 二级子菜单容器 |
| .dropdown-header | 分组标题 |
| .dropdown-divider | 分割线 |

[使用方法](./dropdown.md)

## 工具提示

| 类 | 描述 |
|---|---|
| .tooltip | 工具提示容器，相对定位，内联块元素 |
| .tooltip-inner | 提示气泡主体，黑色背景白色文字，带圆角 |
| .tooltip-arrow | 气泡箭头，指向触发元素 |
| .tooltip-top | 向上弹出，箭头朝下 |
| .tooltip-right | 向右弹出，箭头朝左 |
| .tooltip-bottom | 向下弹出，箭头朝上 |
| .tooltip-left | 向左弹出，箭头朝右 |

[使用方法](./tooltip.md)

## 弹出框

| 类 | 描述 |
|---|---|
| .popover | 弹出框容器，显示标题和内容 |
| .popover-arrow | 弹出框箭头，指向触发元素 |
| .popover-header | 弹出框标题区域 |
| .popover-body | 弹出框正文区域 |
| .popover-top | 向上弹出，箭头朝下 |
| .popover-right | 向右弹出，箭头朝左 |
| .popover-bottom | 向下弹出，箭头朝上 |
| .popover-left | 向左弹出，箭头朝右 |

[使用方法](./popover.md)

## 可折叠块

| 类 | 描述 |
|---|---|
| .collapsible | 可折叠容器，默认展开显示内容 |
| .collapsible.hide | 折叠状态，隐藏内容 |

[使用方法](./collapsible.md)

## 手风琴

| 类 | 描述 |
|---|---|
| .accordion | 手风琴容器 |
| .accordion-flush | 去除边框，贴紧父容器做到齐平嵌入 |
| .accordion-dark | 暗黑模式手风琴 |
| .accordion-item | 手风琴项目，每个可折叠`区块 |
| .accordion-collapsed | 一个accordion-item的收起状态 |
| .accordion-header | 手风琴头部，包裹触发按钮 |
| .accordion-button | 触发按钮，点击展开/收起对应内容 |
| .accordion-collapsible | 可折叠内容容器，默认展开，父组件可用`.accordion-collapsed`收起 |
| .accordion-body | 手风琴内容正文 |

[使用方法](./accordion.md)

## 树

| 类 | 描述 |
|---|---|
| .tree | 树组件容器，相对定位，带内边距 |
| .tree-icon | 树节点图标，垂直居中对齐 |
| .tree-expander | 树节点展开/收起三角箭头 |
| .tree-collapsed | 收起状态的树节点，隐藏子节点，箭头旋转 |
| .active | 选中的树节点，使用主题色背景 |

[使用方法](./tree.md)

## 侧栏导航

| 类 | 描述 |
|---|---|
| .sidebar | 导航项容器 |
| .sidebar-dark | 暗色侧栏容器，一般还要搭配 `.dark` 使得子组件也变暗 |
| .sidebar-collapsed | 折叠状态，折叠后只显示图标 |
| .sidebar-menu | 一级菜单 |
| .sidebar-item | 导航项 |
| .sidebar-item-collapsed | 导航项折叠状态 |
| .sidebar-indicator | 展示折叠状态的图标 |
| .sidebar-icon | 导航项图标 |
| .sidebar-link | 导航项链接 |
| .sidebar-collapsible | 折叠容器 |
| .sidebar-submenu | 二级及以下子菜单 |

[使用方法](./sidebar.html)

## 模态对话框

| 类 | 描述 |
|---|---|
| .modal | 模态遮罩层容器，固定定位覆盖整个视口，半透明黑色背景 |
| .modal-loading | 加载中状态的模态遮罩，带旋转加载动画 |
| .modal-center | 使模态内容居中对齐的容器，使用Flexbox布局 |
| .modal-hit | 模态层的事件捕获层，用于拦截用户点击 |

			
模态遮罩 模态遮罩加载中...

[使用方法](./modal.html)

## 提示信息

| 类 | 描述 |
|---|---|
| .toast | 半透明黑色背景的提示信息框，白色文字，圆角显示 |
| .msg | 白色背景的消息提示框，带边框和圆角 |

[使用方法](./toast.html)

## 对话框

| 类 | 描述 |
|---|---|
| .dialog | 对话框容器，白色背景，带阴影和圆角 |
| .dialog-header | 对话框头部区域，浅灰色背景，带底部边框 |
| .dialog-title | 对话框标题 |
| .dialog-body | 对话框主体内容区域 |
| .dialog-footer | 对话框底部按钮区域，带顶部边框 |
| .dialog-close | 对话框右上角的关闭按钮 |
| .dialog-rim | 带外边框的对话框样式，半透明黑色外框 |
| .dialog-primary.dialog-success.dialog-info.dialog-warning.dialog-danger.dialog-dark | 对话框语境色主题，影响头部背景色 |

[使用方法](./dialog.html)

## 消息框

| 类 | 描述 |
|---|---|
| .msgbox | 消息框容器，白色背景，顶部带4px语境色边框 |
| .msgbox-lg.msgbox-md.msgbox-sm | 消息框尺寸：大(90%)、中(600px)、小(400px) |
| .msgbox-header | 消息框头部区域，包含图标和关闭按钮 |
| .msgbox-title | 消息框标题，加粗字体，自动适配图标位置 |
| .msgbox-body | 消息框主体内容区域 |
| .msgbox-footer | 消息框底部按钮区域，居中显示 |
| .msgbox-info.msgbox-success.msgbox-warning.msgbox-danger | 消息框语境色主题，影响顶部边框颜色 |

[使用方法](./msgbox.html)

## 窗口

| 类 | 描述 |
|---|---|
| .win | 窗口容器，绝对定位，可拖动，带边框和标题栏 |
| .win-header | 窗口标题栏，可拖动，包含标题和按钮组 |
| .win-title | 窗口标题文本 |
| .win-btn-group | 窗口标题栏右侧的按钮组（最小化、最大化、关闭） |
| .win-close | 窗口关闭按钮，红色背景 |
| .win-body | 窗口主体内容区域，可滚动 |
| .win-resize | 窗口右下角的缩放手柄 |
| .win-maximized | 最大化状态的窗口，占满整个视口 |
| .win-active | 激活状态的窗口，标题栏使用主题色 |
| .win-disabled | 禁用状态的窗口，不可操作，显示半透明遮罩 |
| .win-hit | 窗口禁用时的遮罩层，拦截用户操作 |
| .win-transform-helper | 窗口拖拽/缩放时的辅助边框 |

[使用方法](./window.html)

## 可选列表

| 类 | 描述 |
|---|---|
| .select-list | 可选列表容器，浅灰色背景，左侧带2px边框 |
| .select-list-drag | 列表项拖动手柄，可移动光标 |
| .select-list-tools | 列表项操作工具区，悬停时显示 |

[使用方法](./select-list.md)

## 面版

| 类 | 描述 |
|---|---|
| .panel | 面板容器，白色背景，带边框和阴影 |
| .panel-heading | 面板头部区域，带底部边框 |
| .panel-title | 面板标题，继承父级颜色 |
| .panel-body | 面板主体内容区域，带内边距 |
| .panel-default | 默认面板，浅灰色头部 |
| .panel-primary | 主题色面板，主题色边框和头部 |
| .panel-success | 成功状态面板，绿色调 |
| .panel-info | 信息状态面板，蓝色调 |
| .panel-warning | 警告状态面板，黄色调 |
| .panel-danger | 危险状态面板，红色调 |

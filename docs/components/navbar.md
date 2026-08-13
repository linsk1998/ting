# 导航条

导航条（`.navbar`）用作站点的导航头部。它内置了响应式折叠、品牌标识、导航链接、表单、下拉菜单等支持。

## 工作原理

导航条在使用前需要了解以下要点：

- 导航条需要包裹一个 `.navbar-header` 和一个 `.navbar-collapsible` 以实现响应式行为。
- `.navbar-collapsible` 类可在移动端通过 `.navbar-toggler` 按钮展开/折叠。

## 基本结构

一个典型的导航条包含品牌标识、导航链接和表单：

```html
<nav class="navbar" style="z-index:590">
    <div class="navbar-header">
        <button type="button" class="navbar-toggler fa icon-lg">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">Brand</a>
    </div>
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li class="active"><a href="javascript:void 0">首页</a></li>
            <li><a href="javascript:void 0">链接</a></li>
            <li><a href="javascript:void 0">关于</a></li>
        </ul>
    </div>
</nav>
```

## 带下拉菜单的导航链接

在 `.nav-item` 上添加 `.dropdown` 类，并嵌入下拉菜单：

```html
<nav class="navbar" style="z-index:589">
    <div class="navbar-header">
        <button type="button" class="navbar-toggler fa icon-lg">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">Brand</a>
    </div>
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li class="dropdown">
                <a href="javascript:void 0" class="dropdown-toggle">
                    js下拉
                    <span class="fa">&#xf0d7;</span>
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void 0">申请服务</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">咨询服务</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">视频会议</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">办公平台</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">行政审批</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
```

## 表单

`.navbar-form` 用于在导航条中放置内联表单元素，如表单控件和按钮：

```html
<nav class="navbar" style="z-index:588">
    <div class="navbar-header">
        <button type="button" class="navbar-toggler fa icon-lg">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">Brand</a>
    </div>
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li class="active"><a href="javascript:void 0">首页</a></li>
            <li><a href="javascript:void 0">链接</a></li>
            <li><a href="javascript:void 0">关于</a></li>
        </ul>
        <form class="navbar-form navbar-left">
            <div class="form-group">
                <label class="form-label">搜索：</label>
                <input type="text" class="form-control" placeholder="请输入关键词">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
        </form>
    </div>
</nav>
```

## 对齐方式

使用 `.navbar-left` 和 `.navbar-right` 可将导航元素浮动到导航条左侧或右侧：

```html
<nav class="navbar" style="z-index:587">
    <div class="navbar-header">
        <a class="navbar-brand" href="javascript:void 0">Brand</a>
    </div>
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li><a href="javascript:void 0">首页</a></li>
            <li><a href="javascript:void 0">链接</a></li>
            <li><a href="javascript:void 0">关于</a></li>
        </ul>
        <ul class="navbar-nav navbar-right">
            <li class="dropdown">
                <a href="javascript:void 0" class="dropdown-toggle">
                    右侧菜单
                    <span class="fa">&#xf0d7;</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li><a class="dropdown-item" href="javascript:void 0">申请服务</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">咨询服务</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">视频会议</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">办公平台</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">行政审批</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
```

## 按钮

可以直接在导航条内放置 `.btn` 按钮，配合内边距与导航条高度对齐。使用 `.navbar-btn` 类可获得更好的垂直对齐：

```html
<nav class="navbar" style="z-index:586">
    <div class="navbar-header">
        <button type="button" class="navbar-toggler fa icon-lg">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">Brand</a>
    </div>
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li class="active"><a href="javascript:void 0">首页</a></li>
            <li><a href="javascript:void 0">链接</a></li>
            <li><a href="javascript:void 0">关于</a></li>
            <button type="button" class="btn btn-default navbar-btn">登录(左)</button>
        </ul>
        <div class="navbar-right">
            <button type="button" class="btn btn-default navbar-btn">登录(右)</button>
        </div>
    </div>
</nav>
```

## 纯文本

`.navbar-text` 用于在导航条内展示纯文本内容，保持与导航链接一致的行高和对齐：

```html
<nav class="navbar" style="z-index:585">
    <div class="navbar-header">
        <button type="button" class="navbar-toggler fa icon-lg">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">Brand</a>
    </div>
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li class="active"><a href="javascript:void 0">首页</a></li>
            <li><a href="javascript:void 0">链接</a></li>
            <li><a href="javascript:void 0">关于</a></li>
        </ul>
        <span class="navbar-text">欢迎您，用户名(左)</span>
        <div class="navbar-right">
            <span class="navbar-text">欢迎您，用户名(右)</span>
        </div>
    </div>
</nav>
```

## 非导航的链接

或许你希望在标准的导航组件之外添加标准链接，那么，使用 `.navbar-link` 类可以让链接有正确的默认颜色和反色设置。

```html
<nav class="navbar" style="z-index:584">
    <div class="navbar-header" style="z-index:503">
        <button type="button" class="navbar-toggler fa icon-lg">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">Brand</a>
    </div>
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li class="active"><a href="javascript:void 0">首页</a></li>
            <li><a href="javascript:void 0">链接</a></li>
            <li><a href="javascript:void 0">关于</a></li>
        </ul>
        <span class="navbar-text">欢迎您，<a href="index.html" class="navbar-link">用户名</a></span>
    </div>
</nav>
```

## 完整示例

以下展示了两个典型的导航条用法，涵盖下拉菜单、搜索表单和右侧对齐等常见场景。

### 示例一：搜索框

```html
<nav class="navbar navbar-default" style="z-index:583">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" class="navbar-toggler fa icon-lg">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">首页</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li class="active"><a href="javascript:void 0">新闻中心</a></li>
            <li><a href="javascript:void 0">信息公开</a></li>
            <li><a href="javascript:void 0">网上办事</a></li>
        </ul>
        <form class="navbar-form navbar-right">
            <div class="input-group">
                <div class="input-group-append input-group-btn">
                    <button class="btn btn-default" type="button">搜索</button>
                </div>
                <div class="input-group-body">
                    <input type="text" class="form-control" placeholder="关键词"/>
                </div>
            </div>
        </form>
    </div>
</nav>
```

### 示例二：多区域导航 + 右侧下拉

```html
<nav class="navbar navbar-default" style="z-index:582">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" class="navbar-toggler fa icon-lg">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">首页</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="navbar-collapsible">
        <ul class="navbar-nav">
            <li class="active"><a href="javascript:void 0">新闻中心</a></li>
            <li><a href="javascript:void 0">信息公开</a></li>
            <li><a href="javascript:void 0">网上办事</a></li>
            <li class="dropdown">
                <a href="javascript:void 0" class="dropdown-toggle">
                    公众参与
                    <span class="fa">&#xf0d7;</span>
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void 0">在线咨询</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">领导信箱</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">在线访谈</a></li>
                    <li class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="javascript:void 0">网站投稿</a></li>
                </ul>
            </li>
        </ul>
        <form class="navbar-form navbar-left">
            <div class="form-group">
                <label class="form-label">搜索：</label>
                <input type="text" class="form-control" placeholder="请输入关键词">
            </div>
            <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <ul class="navbar-nav navbar-right">
            <li>
                <a href="javascript:void 0">友情链接</a>
            </li>
            <li class="dropdown">
                <a href="javascript:void 0" class="dropdown-toggle">
                    公共服务
                    <span class="fa">&#xf0d7;</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li><a class="dropdown-item" href="javascript:void 0">申请服务</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">咨询服务</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">视频会议</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">办公平台</a></li>
                    <li><a class="dropdown-item" href="javascript:void 0">行政审批</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
```

此示例展示了更复杂的导航条结构：左侧导航 + 左侧表单（带标签的搜索框）+ 右侧导航链接和下拉菜单。右侧下拉菜单使用 `.dropdown-menu-right` 确保下拉内容在右侧对齐，避免溢出。

## 兼容 bootstrap 写法

在 bootstrap 中，导航条使用 `navbar-collapse collapse` 来实现折叠效果。ting-ui 中，使用 `.navbar-collapsible` 来实现折叠效果。

```html
<nav class="navbar">
    <div class="navbar-header">
        <button type="button" class="navbar-toggler fa icon-lg" data-toggle="collapse" data-target="#bs-collapse">&#xf0c9;</button>
        <a class="navbar-brand" href="javascript:void 0">Brand</a>
    </div>
    <div id="bs-collapse" class="navbar-collapse collapse">
        <ul class="navbar-nav">
            <li class="active"><a href="javascript:void 0">首页</a></li>
            <li><a href="javascript:void 0">链接</a></li>
            <li><a href="javascript:void 0">关于</a></li>
        </ul>
    </div>
</nav>
```

# 侧栏导航

侧栏导航（`.sidebar`）用于构建后台管理系统的侧边导航菜单，支持亮色和暗色主题，以及折叠/展开功能。

## 亮色主题

```html
<div class="sidebar">
    <div class="sidebar-nav">
        <div class="sidebar-nav-header">
            <a class="sidebar-nav-link" href="#">
                <i class="fa fa-fw">&#xf015;</i> 首页
                <i class="fa pull-right tree-caret">&#xf0d7;</i>
            </a>
        </div>
        <div class="sidebar-nav-body collapse">
            <ul class="nav-list">
                <li class="nav-list-item active"><a href="#">子菜单1</a></li>
                <li class="nav-list-item"><a href="#">子菜单2</a></li>
                <li class="nav-list-item"><a href="#">子菜单3</a></li>
            </ul>
        </div>
    </div>
    <div class="sidebar-nav">
        <div class="sidebar-nav-header expanded">
            <a class="sidebar-nav-link" href="#">
                <i class="fa fa-fw">&#xf013;</i> 设置
                <i class="fa pull-right tree-caret">&#xf0d7;</i>
            </a>
        </div>
        <div class="sidebar-nav-body">
            <ul class="nav-list">
                <li class="nav-list-item"><a href="#">个人设置</a></li>
                <li class="nav-list-item"><a href="#">系统设置</a></li>
            </ul>
        </div>
    </div>
</div>
```

## 暗色主题

```html
<div class="sidebar sidebar-inverse">
    <div class="sidebar-nav">
        <div class="sidebar-nav-header expanded">
            <a class="sidebar-nav-link" href="#">
                <i class="fa fa-fw">&#xf015;</i> 首页
            </a>
        </div>
    </div>
    <div class="sidebar-nav">
        <div class="sidebar-nav-header">
            <a class="sidebar-nav-link" href="#">
                <i class="fa fa-fw">&#xf013;</i> 设置
                <i class="fa pull-right tree-caret">&#xf0d7;</i>
            </a>
        </div>
        <div class="sidebar-nav-body collapse">
            <ul class="nav-list">
                <li class="nav-list-item"><a href="#">个人设置</a></li>
                <li class="nav-list-item"><a href="#">系统设置</a></li>
            </ul>
        </div>
    </div>
</div>
```

## 核心类

| 类 | 描述 |
|---|---|
| `.sidebar` | 亮色侧栏容器 |
| `.sidebar-inverse` | 暗色侧栏容器 |
| `.sidebar-nav` | 导航项容器 |
| `.sidebar-nav-header` | 导航头部（带蓝色边框标识） |
| `.sidebar-nav-body` | 导航主体内容 |
| `.sidebar-nav-link` | 导航链接 |
| `.nav-list` | 子导航列表 |
| `.nav-list-item` | 子导航列表项 |
| `.expanded` | 展开状态 |
| `.collapsed` | 收起状态 |
| `.collapse` | 默认隐藏 |

# 侧栏导航

侧栏导航（`.sidebar`）用于构建后台管理系统的侧边导航菜单，支持亮色和暗色主题，以及折叠/展开功能。

## 基本用法

```html
<div class="sidebar" style="width: 200px; outline: 1px solid #ddd;">
    <ul class="sidebar-menu">
        <li class="sidebar-item">
            <i class="sidebar-icon fa">&#xf013;</i>
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-indicator fa">&#xf078;</i>
                系统设置
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li class="active"><a href="javascript:;">
                        <span class="badge pull-right">2</span>
                        <i class="icon-fw fa">&#xf003;</i> 激活状态
                    </a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 文字超长长长长长长长长长长长长长长长长长长长</a></li>
                    <li><a href="javascript:;">
                        <span class="badge pull-right">2</span>
                        <i class="icon-fw fa">&#xf003;</i> 文字超长长长长长长长长长长长长长长长长长长长
                    </a></li>
                    <li class="sidebar-item-collapsed">
                        <a href="javascript:;">
                            <i class="sidebar-indicator fa">&#xf107;</i>
                            <i class="icon-fw fa">&#xf003;</i> 深层展开
                        </a>
                        <div class="sidebar-collapsible">
                            <ul class="sidebar-submenu">
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf015;</i>
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-indicator fa">&#xf078;</i>
                用户管理
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf15c;</i>
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-indicator fa">&#xf078;</i>
                内容管理
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf0f4;</i>
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-indicator fa">&#xf078;</i>
                运营管理
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf0c1;</i>
            <a class="sidebar-link" href="javascript:void(0);">外部连接</a>
        </li>
    </ul>
</div>
```

## 折叠

```html
<button type="button" class="btn btn-primary btn-square" onclick="$('#sidebar').toggleClass('sidebar-collapsed').find('.sidebar-item').addClass('sidebar-item-collapsed');"><i class="fa">&#xf0c9;</i></button>
<div id="sidebar" class="sidebar sidebar-collapsed" style="width: 200px; outline: 1px solid #ddd;">
    <ul class="sidebar-menu">
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf013;</i>
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-indicator fa">&#xf078;</i>
                系统设置
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li class="active"><a href="javascript:;">
                        <span class="badge pull-right">2</span>
                        <i class="icon-fw fa">&#xf003;</i> 激活状态
                    </a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 文字超长长长长长长长长长长长长长长长长长长长</a></li>
                    <li><a href="javascript:;">
                        <span class="badge pull-right">2</span>
                        <i class="icon-fw fa">&#xf003;</i> 文字超长长长长长长长长长长长长长长长长长长长
                    </a></li>
                    <li class="sidebar-item-collapsed">
                        <a href="javascript:;">
                            <i class="sidebar-indicator fa">&#xf107;</i>
                            <i class="icon-fw fa">&#xf003;</i> 深层展开
                        </a>
                        <div class="sidebar-collapsible">
                            <ul class="sidebar-submenu">
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                                <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf015;</i>
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-indicator fa">&#xf078;</i>
                用户管理
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf15c;</i>
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-indicator fa">&#xf078;</i>
                内容管理
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf0f4;</i>
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-indicator fa">&#xf078;</i>
                运营管理
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item sidebar-item-collapsed">
            <i class="sidebar-icon fa">&#xf0c1;</i>
            <a class="sidebar-link" href="javascript:void(0);">外部连接</a>
        </li>
    </ul>
</div>
```

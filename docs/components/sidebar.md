# 侧栏导航

侧栏导航（`.sidebar`）用于构建后台管理系统的侧边导航菜单，支持亮色和暗色主题，以及折叠/展开功能。

## 基本用法

```html
<div class="sidebar" style="width: 200px; outline: 1px solid #ddd;">
    <div class="sidebar-header">
        <a href="../index.html" class="sidebar-brand"><img src="../images/logo.png"><span class="valign-sibling">Ting Web UI</span></a>
    </div>
    <ul class="sidebar-body sidebar-menu">
        <li class="sidebar-item">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf013;</i>
                <i class="sidebar-indicator fa">&#xf078;</i>
                <span class="sidebar-label">系统设置</span>
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
                    <li class="collapsed">
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
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf007;</i>
                <i class="sidebar-indicator fa">&#xf078;</i>
                <span class="sidebar-label">用户管理</span>
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
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf15c;</i>
                <i class="sidebar-indicator fa">&#xf078;</i>
                <span class="sidebar-label">内容管理</span>
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf0f4;</i>
                <i class="sidebar-indicator fa">&#xf078;</i>
                <span class="sidebar-label">运营管理</span>
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf0c1;</i>
                <span class="sidebar-label">外部连接</span>
            </a>
        </li>
    </ul>
    <div class="sidebar-footer text-center p-3">
        <div class="text-muted small">Powered by <a href="https://github.com/ting-web-ui/ting-web-ui">Ting Web UI</a></div>
    </div>
</div>
```

## 折叠

```html
<button type="button" class="btn btn-primary btn-square" onclick="$('#sidebar').toggleClass('sidebar-collapsed').find('.sidebar-item').addClass('collapsed');"><i class="fa">&#xf0c9;</i></button>
<div id="sidebar" class="sidebar sidebar-collapsed" style="width: 200px; outline: 1px solid #ddd;">
    <div class="sidebar-header">
        <a href="../index.html" class="sidebar-brand"><img src="../images/logo.png"><span class="valign-sibling">Ting Web UI</span></a>
    </div>
    <ul class="sidebar-body sidebar-menu">
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf013;</i>
                <i class="sidebar-indicator fa">&#xf078;</i>
                <span class="sidebar-label">系统设置</span>
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
                    <li class="collapsed">
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
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf007;</i>
                <i class="sidebar-indicator fa">&#xf078;</i>
                <span class="sidebar-label">用户管理</span>
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
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf15c;</i>
                <i class="sidebar-indicator fa">&#xf078;</i>
                <span class="sidebar-label">内容管理</span>
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf0f4;</i>
                <i class="sidebar-indicator fa">&#xf078;</i>
                <span class="sidebar-label">运营管理</span>
            </a>
            <div class="sidebar-collapsible">
                <ul class="sidebar-submenu">
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                    <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 这是一个普通</a></li>
                </ul>
            </div>
        </li>
        <li class="sidebar-item collapsed">
            <a class="sidebar-link" href="javascript:void(0);">
                <i class="sidebar-icon fa">&#xf0c1;</i>
                <span class="sidebar-label">外部连接</span>
            </a>
        </li>
    </ul>
    <div class="sidebar-footer">
        <a class="sidebar-media media" href="http://www.linsk.net" target="_blank">
            <div class="media-left">
                <img class="media-object img-circle" src="../images/github.jpg">
            </div>
            <div class="media-body media-middle">
                <div>linsk</div>
                <div class="text-muted small">www.linsk.net</div>
            </div>
        </a>
    </div>
</div>
```

## 分组

```html
<button type="button" class="btn btn-primary btn-square" onclick="$('#sidebar2').toggleClass('sidebar-collapsed').find('.sidebar-item').addClass('collapsed');"><i class="fa">&#xf0c9;</i></button>
<div id="sidebar2" class="sidebar" style="width: 200px; outline: 1px solid #ddd;">
    <div class="sidebar-header">
        <a href="../index.html" class="sidebar-brand"><img src="../images/logo.png"><span class="valign-sibling">Ting Web UI</span></a>
    </div>
    <div class="sidebar-body">
        <div class="sidebar-group">
            <div class="sidebar-heading">业务</div>
            <ul class="sidebar-menu">
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf15c;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">内容管理</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 文章管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 栏目管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 标签管理</a></li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf0f4;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">运营管理</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 评论管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 广告管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 友情连接</a></li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf0c1;</i>
                        <span class="sidebar-label">外部连接</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="sidebar-group">
            <div class="sidebar-heading">系统</div>
            <ul class="sidebar-menu">
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf007;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">用户管理</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 用户管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 角色管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 部门管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 职务管理</a></li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf013;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">系统设置</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 菜单管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 字典管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 系统设置</a></li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf1fe;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">系统监控</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 系统状态</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 缓存查看</a></li>
                            <li class="collapsed">
                                <a href="javascript:;">
                                    <i class="sidebar-indicator fa">&#xf107;</i>
                                    <i class="icon-fw fa">&#xf003;</i> 系统日志
                                </a>
                                <div class="sidebar-collapsible">
                                    <ul class="sidebar-submenu">
                                        <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 操作日志</a></li>
                                        <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 登入日志</a></li>
                                        <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 错误日志</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="sidebar-footer">
        <a class="sidebar-media media" href="http://www.linsk.net" target="_blank">
            <div class="media-left">
                <img class="media-object img-circle" src="../images/github.jpg">
            </div>
            <div class="media-body media-middle">
                <div>linsk</div>
                <div class="text-muted small">www.linsk.net</div>
            </div>
        </a>
    </div>
</div>
```

## 高度适应

```html
<button type="button" class="btn btn-primary btn-square" onclick="$('#sidebar3').toggleClass('sidebar-collapsed').find('.sidebar-item').addClass('collapsed');"><i class="fa">&#xf0c9;</i></button>
<div id="sidebar3" class="sidebar sidebar-fill" style="width: 200px; height: 400px; outline: 1px solid #ddd;">
    <div class="sidebar-header">
        <a href="../index.html" class="sidebar-brand"><img src="../images/logo.png"><span class="valign-sibling">Ting Web UI</span></a>
    </div>
    <div class="sidebar-body">
        <div class="sidebar-group">
            <div class="sidebar-heading">业务</div>
            <ul class="sidebar-menu">
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf15c;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">内容管理</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 文章管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 栏目管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 标签管理</a></li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf0f4;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">运营管理</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 评论管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 广告管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 友情连接</a></li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf0c1;</i>
                        <span class="sidebar-label">外部连接</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="sidebar-group">
            <div class="sidebar-heading">系统</div>
            <ul class="sidebar-menu">
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf007;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">用户管理</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 用户管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 角色管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 部门管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 职务管理</a></li>
                        </ul>
                    </div>
                </li>
                <li class="sidebar-item collapsed">
                    <a class="sidebar-link" href="javascript:void(0);">
                        <i class="sidebar-icon fa">&#xf013;</i>
                        <i class="sidebar-indicator fa">&#xf078;</i>
                        <span class="sidebar-label">系统设置</span>
                    </a>
                    <div class="sidebar-collapsible">
                        <ul class="sidebar-submenu">
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 菜单管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 字典管理</a></li>
                            <li><a href="javascript:;"><i class="icon-fw fa">&#xf003;</i> 系统设置</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="sidebar-footer">
        <a class="sidebar-media media" href="http://www.linsk.net" target="_blank">
            <div class="media-left">
                <img class="media-object img-circle" src="../images/github.jpg">
            </div>
            <div class="media-body media-middle">
                <div>linsk</div>
                <div class="text-muted small">www.linsk.net</div>
            </div>
        </a>
    </div>
</div>
```

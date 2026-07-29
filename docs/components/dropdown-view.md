# 下拉菜单

下拉菜单（`.dropdown`）配合按钮组可实现弹出菜单，支持多种状态、方向控制和多级子菜单。

## 状态

菜单项支持默认、置灰（`disabled`）、激活（`.active`）三种状态，以及分组标题（`.dropdown-header`）和分割线（`.dropdown-divider`）。

```html
<div class="btn-group dropdown">
  <button class="btn btn-default" type="button" popovertarget="dropdownMenu3">
    状态
    <span class="caret"></span>
  </button>
  <ul id="dropdownMenu3" class="dropdown-menu" popover>
    <li class="dropdown-header">分组标题</li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu3" popovertargetaction="hide">默认状态</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu3" popovertargetaction="hide" disabled>置灰状态</button></li>
    <li class="dropdown-header">分组标题</li>
    <li><button type="button" class="dropdown-item active" popovertarget="dropdownMenu3" popovertargetaction="hide">激活状态</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu3" popovertargetaction="hide">分割线</button></li>
  </ul>
</div>
```

## 按钮组

使用 `.dropdown-toggle-split` 将按钮与下拉触发器分离，实现左右分区的按钮组。

```html
<div class="btn-group dropdown">
  <button class="btn btn-default" type="button">
    按钮组
  </button>
  <button class="btn btn-default dropdown-toggle-split" type="button" popovertarget="dropdownMenu4">
    <span class="caret"></span>
  </button>
  <ul id="dropdownMenu4" class="dropdown-menu" popover>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu4" popovertargetaction="hide">Action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu4" popovertargetaction="hide">Another action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu4" popovertargetaction="hide">Something else here</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu4" popovertargetaction="hide">Separated link</button></li>
  </ul>
</div>
```

## 对齐

使用 `.dropdown-menu-right` 让菜单向右对齐容器的右边界。

```html
<div class="btn-group dropdown">
  <button class="btn btn-default" type="button">
    对齐
  </button>
  <button class="btn btn-default dropdown-toggle-split" type="button" popovertarget="dropdownMenu5">
    <span class="caret"></span>
  </button>
  <ul id="dropdownMenu5" class="dropdown-menu dropdown-menu-right" popover>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu5" popovertargetaction="hide">Action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu5" popovertargetaction="hide">Another action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu5" popovertargetaction="hide">Something else here</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu5" popovertargetaction="hide">Separated link</button></li>
  </ul>
</div>
```

## 方向

通过 `.dropdown`（下拉）、`.dropup`（上拉）、`.dropright`（右拉）、`.dropleft`（左拉）控制菜单弹出方向。

```html
<div class="dropdown btn-group">
  <button class="btn btn-default" type="button" popovertarget="dropdownMenu1">
    下拉
    <i class="btn-icon-right fa">&#xf0d7;</i>
  </button>
  <ul id="dropdownMenu1" class="dropdown-menu" popover>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu1" popovertargetaction="hide">Action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu1" popovertargetaction="hide">Another action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu1" popovertargetaction="hide">Something else here</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropdownMenu1" popovertargetaction="hide">Separated link</button></li>
  </ul>
</div>
<div class="dropup btn-group">
  <button class="btn btn-default" type="button" popovertarget="dropupMenu1">
    上拉
    <i class="btn-icon-right fa">&#xf0d8;</i>
  </button>
  <ul id="dropupMenu1" class="dropdown-menu" popover>
    <li><button type="button" class="dropdown-item" popovertarget="dropupMenu1" popovertargetaction="hide">Action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropupMenu1" popovertargetaction="hide">Another action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropupMenu1" popovertargetaction="hide">Something else here</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropupMenu1" popovertargetaction="hide">Separated link</button></li>
  </ul>
</div>
<div class="dropright btn-group">
  <button class="btn btn-default" type="button" popovertarget="droprightMenu1">
    右拉
    <i class="btn-icon-right fa">&#xf0da;</i>
  </button>
  <ul id="droprightMenu1" class="dropdown-menu" popover>
    <li><button type="button" class="dropdown-item" popovertarget="droprightMenu1" popovertargetaction="hide">Action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="droprightMenu1" popovertargetaction="hide">Another action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="droprightMenu1" popovertargetaction="hide">Something else here</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item" popovertarget="droprightMenu1" popovertargetaction="hide">Separated link</button></li>
  </ul>
</div>
<div class="dropleft btn-group">
  <button class="btn btn-default" type="button" popovertarget="dropleftMenu1">
    <i class="btn-icon-left fa">&#xf0d9;</i>
    左拉
  </button>
  <ul id="dropleftMenu1" class="dropdown-menu" popover>
    <li><button type="button" class="dropdown-item" popovertarget="dropleftMenu1" popovertargetaction="hide">Action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropleftMenu1" popovertargetaction="hide">Another action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropleftMenu1" popovertargetaction="hide">Something else here</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li><button type="button" class="dropdown-item" popovertarget="dropleftMenu1" popovertargetaction="hide">Separated link</button></li>
  </ul>
</div>
```

## 子菜单

使用 `.dropright-submenu` 可实现多级子菜单。支持点击（`popovertarget`）和经过（`interestfor`）两种触发方式。

```html
<div class="dropdown btn-group">
  <button class="btn btn-default" type="button" popovertarget="firstMenu1">
    点击展开
    <span class="caret"></span>
  </button>
  <ul id="firstMenu1" class="dropdown-menu" popover>
    <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Another action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Something else here</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li class="dropright-submenu">
      <button type="button" class="dropdown-item" popovertarget="secondMenu1">点击展开<i class="dropdown-item-right fa">&#xf0da;</i></button>
      <ul id="secondMenu1" class="dropdown-menu" popover>
        <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Second level link</button></li>
        <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Second level link</button></li>
        <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Second level link</button></li>
        <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Second level link</button></li>
        <li class="dropright-submenu">
          <button type="button" class="dropdown-item" popovertarget="thirdMenu1">点击展开<i class="dropdown-item-right fa">&#xf0da;</i></button>
          <ul id="thirdMenu1" class="dropdown-menu" popover>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Third level link</button></li>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Third level link</button></li>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Third level link</button></li>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Third level link</button></li>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu1" popovertargetaction="hide">Third level link</button></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
<div class="dropdown btn-group">
  <button class="btn btn-default" type="button" interestfor="firstMenu2">
    经过展开
    <span class="caret"></span>
  </button>
  <ul id="firstMenu2" class="dropdown-menu" popover>
    <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Another action</button></li>
    <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Something else here</button></li>
    <li role="separator" class="dropdown-divider"></li>
    <li class="dropright-submenu">
      <button type="button" class="dropdown-item" interestfor="secondMenu2">经过展开<i class="dropdown-item-right fa">&#xf0da;</i></button>
      <ul id="secondMenu2" class="dropdown-menu" popover>
        <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Second level link</button></li>
        <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Second level link</button></li>
        <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Second level link</button></li>
        <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Second level link</button></li>
        <li class="dropright-submenu">
          <button type="button" class="dropdown-item" interestfor="thirdMenu2">经过展开<i class="dropdown-item-right fa">&#xf0da;</i></button>
          <ul id="thirdMenu2" class="dropdown-menu" popover>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Third level link</button></li>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Third level link</button></li>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Third level link</button></li>
            <li><button type="button" class="dropdown-item" popovertarget="firstMenu2" popovertargetaction="hide">Third level link</button></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

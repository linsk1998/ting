# 折叠块

折叠块用于隐藏/显示内容区域，通过切换 `.show` 类来控制展开和收起。这个类用于兼容 Bootstrap 的 `collapse`，本项目推荐使用 [collapsible](collapsible-view.md)。

## 基本用法

`.collapse` 默认隐藏，添加 `.show` 后内容展开。

```html
<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">
  切换折叠
</button>
<div id="demo" class="collapse">
  <div class="well m-0">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
  </div>
</div>
```

## 默认展开的可折叠内容。

```html
<div class="collapse show">
  <div class="well m-0">
    默认展开的可折叠内容。
  </div>
</div>
```

## 水平可折叠块

```html
<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo2">
  切换折叠
</button>
<div id="demo2" class="collapse-horizontal">
  <div class="well m-0" style="width: 300px;">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
  </div>
</div>
```

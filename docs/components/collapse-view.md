# 可折叠块

可折叠块用于隐藏/显示内容区域，通过切换 `.show` 类来控制展开和收起。

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
<div id="demo2" class="collapse show">
  <div class="well m-0">
    默认展开的可折叠内容。
  </div>
</div>
```

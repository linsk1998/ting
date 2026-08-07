# 可折叠块

`.collapsible` = "可被折叠的" = 现在开着，但能关上。通过切换 `.hide` 类来控制开启和关上。

```html
<button type="button" class="btn btn-primary" data-toggle="collapsible" data-target="#demo">
  切换折叠
</button>
<div id="demo" class="collapsible">
  <div class="well m-0">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
  </div>
</div>
```

## 隐藏状态

```html
<div id="demo" class="collapsible hide">
  <div class="well m-0">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
  </div>
</div>
```

## 水平可折叠块

```html
<button type="button" class="btn btn-primary" data-toggle="collapsible" data-target="#demo2">
  切换折叠
</button>
<div id="demo2" class="collapsible-horizontal">
  <div class="well m-0" style="width: 300px;">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
  </div>
</div>
```

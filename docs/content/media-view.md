# 媒体对象

媒体对象组件用于构建图文混排的布局，适合评论列表、消息流、动态信息流等场景。

## 基础用法

默认情况下，图片贴顶对齐，文字区域自动填充剩余空间。

```html
<div class="media my-3">
  <div class="media-left">
    <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
  </div>
  <div class="media-center">
    <h4 class="media-heading">Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
  </div>
</div>
```

## 嵌套

媒体对象支持嵌套，可以轻松构建评论回复等层级结构。

```html
<div class="media my-3">
  <div class="media-left">
    <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
  </div>
  <div class="media-center">
    <h4 class="media-heading">Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla...
    <div class="media mt-3">
      <div class="media-left">
        <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
      </div>
      <div class="media-center">
        <h4 class="media-heading">Nested media heading</h4>
        Cras sit amet nibh libero, in gravida nulla...
      </div>
    </div>
  </div>
</div>
```

## 右对齐

将 `.media-left` 替换为 `.media-right` 可将媒体对象放到右侧。

```html
<div class="media my-3">
  <div class="media-right">
    <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
  </div>
  <div class="media-center">
    <h4 class="media-heading">Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla...
  </div>
</div>
```

## 两侧都放媒体

可以同时放置 `.media-left` 和 `.media-right`。

```html
<div class="media my-3">
  <div class="media-left">
    <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
  </div>
  <div class="media-right">
    <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
  </div>
  <div class="media-center">
    <h4 class="media-heading">Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla...
  </div>
</div>
```

## 对齐方式

使用 `.media-middle` 或 `.media-bottom` 控制媒体对象的垂直对齐。

### 垂直居中

```html
<div class="media my-3">
  <div class="media-left media-middle">
    <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
  </div>
  <div class="media-center">
    <h4 class="media-heading">Middle aligned media</h4>
    Cras sit amet nibh libero, in gravida nulla...
  </div>
</div>
```

### 底部对齐

```html
<div class="media my-3">
  <div class="media-left media-bottom">
    <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
  </div>
  <div class="media-center">
    <h4 class="media-heading">Bottom aligned media</h4>
    Cras sit amet nibh libero, in gravida nulla...
  </div>
</div>
```

## 媒体对象列表

使用 `.media-list` 配合 `.media` 构建列表样式的媒体对象组。

```html
<ul class="media-list">
  <li class="media">
    <div class="media-left">
      <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
    </div>
    <div class="media-center">
      <h4 class="media-heading">Media heading</h4>
      <p class="line-2">Cras sit amet nibh libero, in gravida nulla...</p>
    </div>
  </li>
  <li class="media">
    <div class="media-left">
      <a href="#"><img class="media-object" src="../images/logo.png" width="64" height="64"/></a>
    </div>
    <div class="media-center">
      <h4 class="media-heading">Media heading</h4>
      <p class="line-2">Cras sit amet nibh libero, in gravida nulla...</p>
    </div>
  </li>
</ul>
```

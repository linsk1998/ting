# 导航

导航组件提供基础导航、选项卡、药丸和指示器四种样式，以及两端对齐变体。

## 常用

```html
<ul class="nav">
    <li class="nav-item active"><a class="nav-link" href="javascript:void 0">首页</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void 0">个人设置</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void 0">消息</a></li>
</ul>
<ul class="nav nav-tabs">
    <li class="nav-item active"><a class="nav-link" href="javascript:void 0">首页</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void 0">个人设置</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void 0">消息</a></li>
</ul>
<ul class="nav nav-pills">
    <li class="nav-item active"><a class="nav-link" href="javascript:void 0">首页</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void 0">个人设置</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void 0">消息</a></li>
</ul>
<ul class="nav nav-underline">
    <li class="nav-item active"><a class="nav-link" href="javascript:void 0">首页</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void 0">个人设置</a></li>
    <li class="nav-item"><a class="nav-link" href="javascript:void 0">消息</a></li>
</ul>
```

## 两端对齐

使用 `.nav-justified` 让导航项等宽填充容器。`<nav>` + `<a>` 结构可替代 `<ul>` + `<li>`，所有样式均支持。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
    <nav class="nav nav-justified">
        <a class="nav-item nav-link active" href="javascript:void 0">首页</a>
        <a class="nav-item nav-link" href="javascript:void 0">个人设置</a>
        <a class="nav-item nav-link" href="javascript:void 0">消息</a>
    </nav>
    <nav class="nav nav-tabs nav-justified">
        <a class="nav-item nav-link active" href="javascript:void 0">首页</a>
        <a class="nav-item nav-link" href="javascript:void 0">个人设置</a>
        <a class="nav-item nav-link" href="javascript:void 0">消息</a>
    </nav>
    <nav class="nav nav-tabs nav-justified">
        <a class="nav-item nav-link" href="javascript:void 0">个人设置</a>
        <a class="nav-item nav-link active" href="javascript:void 0">首页</a>
        <a class="nav-item nav-link" href="javascript:void 0">消息</a>
    </nav>
    <nav class="nav nav-pills nav-justified">
        <a class="nav-item nav-link active" href="javascript:void 0">首页</a>
        <a class="nav-item nav-link" href="javascript:void 0">个人设置</a>
        <a class="nav-item nav-link" href="javascript:void 0">消息</a>
    </nav>
    <nav class="nav nav-underline nav-justified">
        <a class="nav-item nav-link active" href="javascript:void 0">首页</a>
        <a class="nav-item nav-link" href="javascript:void 0">个人设置</a>
        <a class="nav-item nav-link" href="javascript:void 0">消息</a>
    </nav>
</div>
```

## 紧贴容器

`.nav-flush` 状态可以使选项卡组紧贴容器。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666;">
    <ul class="nav nav-tabs nav-flush">
        <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
    </ul>
    <ul class="nav nav-pills nav-flush">
        <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
    </ul>
    <ul class="nav nav-underline nav-flush">
        <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
    </ul>
</div>
```

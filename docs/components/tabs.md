# 标签页

标签页（`.tabs`）配合导航组件实现内容面板的切换展示。

## 基本用法

`.tabs` 容器内包含 `.nav-tabs` 导航和 `.tabs-content` 内容面板，`.tabs-pane` + `.active` 标记当前激活面板。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
    <div class="tabs">
        <ul class="tabs-nav nav nav-tabs">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
```

## 变换方向的标签页

### 左排

导航在左侧，内容在右侧。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
    <div class="tabs tabs-horizontal">
        <ul class="tabs-nav-left nav nav-tabs">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
```

### 右排

导航在右侧，内容在左侧。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
    <div class="tabs tabs-horizontal">
        <ul class="tabs-nav-right nav nav-tabs">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
```

### 下排 

导航在内容下方，`.tabs-content` 需放在 `.nav-tabs` 前面。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
    <div class="tabs">
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222</div>
            <div class="tabs-pane hide">333</div>
        </div>
        <ul class="tabs-nav-below nav nav-tabs">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
    </div>
</div>
```

## 紧贴容器

`.tabs-flush` 状态可以使选项卡组紧贴容器。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666;">
    <div class="tabs tabs-flush">
        <ul class="tabs-nav nav nav-tabs nav-flush">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
<div style="_width:480px; max-width:480px; border:1px solid #666;">
    <div class="tabs tabs-horizontal tabs-flush">
        <ul class="nav nav-tabs tabs-nav-left nav-flush">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222<br>222<br>222<br>222<br>222<br>222<br>222<br>222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
<div style="_width:480px; max-width:480px; border:1px solid #666;">
    <div class="tabs tabs-horizontal tabs-flush">
        <ul class="nav nav-tabs tabs-nav-right nav-flush">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222<br>222<br>222<br>222<br>222<br>222<br>222<br>222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
<div style="_width:480px; max-width:480px; border:1px solid #666;">
    <div class="tabs tabs-flush">
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222</div>
            <div class="tabs-pane hide">333</div>
        </div>
        <ul class="nav nav-tabs tabs-nav-below nav-flush">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
    </div>
</div>
```

## 适应容器高度

`.tabs-fill` 状态可以使选项卡组紧贴容器。

```html
<div style="_width:480px; max-width:480px; height:200px; overflow:auto; border:1px solid #666;">
    <div class="tabs tabs-flush tabs-fill">
        <ul class="tabs-nav nav nav-tabs nav-flush">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222<br>222<br>222<br>222<br>222<br>222<br>222<br>222<br>222<br>222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
<div style="_width:480px; max-width:480px; height:140px; overflow:auto; border:1px solid #666;">
    <div class="tabs tabs-horizontal tabs-flush tabs-fill">
        <ul class="tabs-nav-left nav nav-tabs nav-flush">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222<br>222<br>222<br>222<br>222<br>222<br>222<br>222<br>222<br>222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
<div style="_width:480px; max-width:480px; height:140px; overflow:auto; border:1px solid #666;">
    <div class="tabs tabs-horizontal tabs-flush tabs-fill">
        <ul class="tabs-nav-right nav nav-tabs nav-flush">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222<br>222<br>222<br>222<br>222<br>222<br>222<br>222<br>222<br>222</div>
            <div class="tabs-pane hide">333</div>
        </div>
    </div>
</div>
<div style="_width:480px; max-width:480px; height:200px; overflow:auto; border:1px solid #666;">
    <div class="tabs tabs-flush tabs-fill">
        <div class="tabs-content">
            <div class="tabs-pane">111</div>
            <div class="tabs-pane hide">222<br>222<br>222<br>222<br>222<br>222<br>222<br>222<br>222<br>222</div>
            <div class="tabs-pane hide">333</div>
        </div>
        <ul class="tabs-nav-below nav nav-tabs nav-flush">
            <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
        </ul>
    </div>
</div>
```

## 兼容 bootstrap 写法

```html
<div class="tabbable">
    <ul class="nav nav-tabs">
        <li class="nav-item active"><a class="nav-link" href="#home" data-toggle="tab">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#profile" data-toggle="tab">Profile</a></li>
        <li class="nav-item"><a class="nav-link" href="#messages" data-toggle="tab">Messages</a></li>
        <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="home">home</div>
        <div class="tab-pane" id="profile">profile</div>
        <div class="tab-pane" id="messages">messages</div>
        <div class="tab-pane" id="settings">settings</div>
    </div>
</div>
```

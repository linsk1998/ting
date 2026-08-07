# 标签页

标签页（`.tabs`）配合导航组件实现内容面板的切换展示。

## 基本用法

`.tabs` 容器内包含 `.nav-tabs` 导航和 `.tabs-content` 内容面板，`.tabs-pane` + `.active` 标记当前激活面板。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
  <div class="tabs" role="tabbable">
    <ul class="nav nav-tabs">
      <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
      <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
    </ul>
    <div class="tabs-content">
      <div class="tabs-pane active">111</div>
      <div class="tabs-pane">222</div>
      <div class="tabs-pane">333</div>
    </div>
  </div>
</div>
```

## 变换方向的标签页

### 左排 (.tabs-left)

导航在左侧，内容在右侧。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
  <div class="tabs tabs-left" role="tabbable">
    <ul class="nav nav-tabs">
      <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
      <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
    </ul>
    <div class="tabs-content">
      <div class="tabs-pane active">111</div>
      <div class="tabs-pane">222</div>
      <div class="tabs-pane">333</div>
    </div>
  </div>
</div>
```

### 右排 (.tabs-right)

导航在右侧，内容在左侧。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
  <div class="tabs tabs-right" role="tabbable">
    <ul class="nav nav-tabs">
      <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
      <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
    </ul>
    <div class="tabs-content">
      <div class="tabs-pane active">111</div>
      <div class="tabs-pane">222</div>
      <div class="tabs-pane">333</div>
    </div>
  </div>
</div>
```

### 下排 (.tabs-below)

导航在内容下方，`.tabs-content` 需放在 `.nav-tabs` 前面。

```html
<div style="_width:480px; max-width:480px; border:1px solid #666; padding:20px;">
  <div class="tabs tabs-below" role="tabbable">
    <div class="tabs-content">
      <div class="tabs-pane active">111</div>
      <div class="tabs-pane">222</div>
      <div class="tabs-pane">333</div>
    </div>
    <ul class="nav nav-tabs">
      <li class="nav-item active"><a class="nav-link" href="javascript:void 0">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="javascript:void 0">Profile</a></li>
      <li class="nav-item"><a class="nav-link" href="javascript:void 0">Messages</a></li>
    </ul>
  </div>
</div>
```

# 窗口

窗口组件（`.win`）用于创建可拖动、可缩放、可最大化的桌面级窗口，适合后台管理系统中的多窗口操作场景。

## 基本用法

```html
<div class="win" style="left: 50px; top: 50px; width: 400px; height: 300px;">
  <div class="win-header">
    <span class="win-title">
      <i class="fa">&#xf0ca;</i> 窗口标题
    </span>
    <div class="win-btn-group">
      <button type="button" class="btn btn-default btn-square-xs">
        <i class="fa">&#xf068;</i>
      </button>
      <button type="button" class="btn btn-default btn-square-xs">
        <i class="fa">&#xf065;</i>
      </button>
      <button type="button" class="btn btn-danger btn-square-xs win-close">
        <i class="fa">&#xf00d;</i>
      </button>
    </div>
  </div>
  <div class="win-body">
    <p>窗口内容区域</p>
  </div>
</div>
```

## 激活状态

使用 `.win-active` 使窗口激活显示：

```html
<div class="win win-active" style="position:relative; width:400px; height:200px;">
  <div class="win-header">
    <span class="win-title">激活窗口</span>
  </div>
  <div class="win-body">
    <p>激活状态下的窗口</p>
  </div>
</div>
```

## 禁用状态

使用 `.win-disabled` 禁用窗口交互：

```html
<div class="win win-disabled" style="position:relative; width:400px; height:150px;">
  <div class="win-header">
    <span class="win-title">禁用窗口</span>
  </div>
  <div class="win-body">
    <p>无法操作的窗口</p>
  </div>
  <div class="win-hit"></div>
</div>
```

## 拖拽和缩放

窗口右下角的 `.win-resize` 区域提供缩放功能：

```html
<div class="win win-active" style="position:relative; width:400px; height:200px;">
  <div class="win-header">
    <span class="win-title">可缩放窗口</span>
  </div>
  <div class="win-body">
    <p>拖拽右下角进行缩放</p>
  </div>
  <div class="win-resize"></div>
</div>
```

## 核心类

| 类 | 描述 |
|---|---|
| `.win` | 窗口容器 |
| `.win-header` | 窗口标题栏（可拖动） |
| `.win-title` | 窗口标题 |
| `.win-btn-group` | 窗口按钮组（最小化、最大化、关闭） |
| `.win-close` | 关闭按钮（红色背景） |
| `.win-body` | 窗口主体内容 |
| `.win-resize` | 缩放手柄 |
| `.win-maximized` | 最大化状态 |
| `.win-active` | 激活状态 |
| `.win-disabled` | 禁用状态 |
| `.win-hit` | 禁用遮罩层 |
| `.win-transform-helper` | 拖拽/缩放辅助边框 |

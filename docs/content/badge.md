# 徽章

使用 `.badge` 创建醒目的徽章，适合展示新消息数、未读提醒或状态标记。

## 基础徽章

`.badge` 默认显示为红色背景、白色文字的圆角小标。空徽章会自动隐藏。

```html
<span class="badge">新</span>
<span class="badge">3</span>
```

## 嵌套在按钮中

徽章常用于按钮内部，表示待处理数量等。当按钮带语境色时，徽章会自动反色适配。

```html
<button class="btn btn-primary">消息 <span class="badge">5</span></button>
<button class="btn btn-success">完成 <span class="badge">12</span></button>
<button class="btn btn-info">任务 <span class="badge">3</span></button>
<button class="btn btn-warning">待处理 <span class="badge">8</span></button>
<button class="btn btn-danger">错误 <span class="badge">2</span></button>
```

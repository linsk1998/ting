# 对话框

对话框（`.dialog`）用于在页面中弹出浮层进行内容展示或交互，支持多种语境色主题。

## 基本用法

```html
<div class="dialog">
  <div class="dialog-header">
    <span class="dialog-title">对话框标题</span>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="dialog-body">
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
  </div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-default">取消</button>
    <button type="button" class="btn btn-primary">确定</button>
  </div>
</div>
```

## 语境色

### 主题色对话框

```html
<div class="dialog dialog-primary">
  <div class="dialog-header">
    <span class="dialog-title">primary对话框</span>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="dialog-body"><p>内容</p></div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-default">取消</button>
    <button type="button" class="btn btn-primary">确定</button>
  </div>
</div>
```

### 成功对话框

```html
<div class="dialog dialog-success">
  <div class="dialog-header">
    <span class="dialog-title">success对话框</span>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="dialog-body"><p>内容</p></div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-success">确定</button>
  </div>
</div>
```

### 信息对话框

```html
<div class="dialog dialog-info">
  <div class="dialog-header">
    <span class="dialog-title">info对话框</span>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="dialog-body"><p>内容</p></div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-info">确定</button>
  </div>
</div>
```

### 警告对话框

```html
<div class="dialog dialog-warning">
  <div class="dialog-header">
    <span class="dialog-title">warning对话框</span>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="dialog-body"><p>内容</p></div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-warning">确定</button>
  </div>
</div>
```

### 危险对话框

```html
<div class="dialog dialog-danger">
  <div class="dialog-header">
    <span class="dialog-title">danger对话框</span>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="dialog-body"><p>内容</p></div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-danger">确定</button>
  </div>
</div>
```

### 暗色对话框

```html
<div class="dialog dialog-dark">
  <div class="dialog-header">
    <span class="dialog-title">dark对话框</span>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="dialog-body"><p>内容</p></div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-default">取消</button>
    <button type="button" class="btn btn-dark">确定</button>
  </div>
</div>
```

## 带外边框

使用 `.dialog-rim` 为对话框添加额外的外层边框。

```html
<div class="dialog dialog-rim">
  <div class="dialog-header">
    <span class="dialog-title">带外边框</span>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="dialog-body"><p>内容</p></div>
  <div class="dialog-footer">
    <button type="button" class="btn btn-primary">确定</button>
  </div>
</div>
```

## 核心类

| 类 | 描述 |
|---|---|
| `.dialog` | 对话框容器 |
| `.dialog-header` | 头部区域 |
| `.dialog-title` | 标题文字 |
| `.dialog-body` | 主体内容 |
| `.dialog-footer` | 底部按钮区 |
| `.dialog-primary` / `.dialog-success` / `.dialog-info` / `.dialog-warning` / `.dialog-danger` / `.dialog-dark` | 语境色主题 |
| `.dialog-rim` | 外边框样式 |

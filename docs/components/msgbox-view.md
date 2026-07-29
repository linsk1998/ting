# 消息框

消息框（`.msgbox`）是一种特殊的对话框，左侧带有图标，适用于操作确认和状态提示。支持多种尺寸和语境色主题。

## 基本用法

```html
<div class="msgbox">
  <div class="msgbox-header">
    <i class="fa icon-4x text-warning">&#xf06a;</i>
    <h4 class="msgbox-title">提示标题</h4>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="msgbox-body">
    <p>您确定要执行此操作吗？</p>
  </div>
  <div class="msgbox-footer">
    <button type="button" class="btn btn-default">取消</button>
    <button type="button" class="btn btn-primary">确定</button>
  </div>
</div>
```

## 语境色

### 信息消息框

```html
<div class="msgbox msgbox-info">
  <div class="msgbox-header">
    <i class="fa icon-4x text-info">&#xf05a;</i>
    <h4 class="msgbox-title">信息</h4>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="msgbox-body"><p>这是一条提示信息。</p></div>
  <div class="msgbox-footer">
    <button type="button" class="btn btn-info">确定</button>
  </div>
</div>
```

### 成功消息框

```html
<div class="msgbox msgbox-success">
  <div class="msgbox-header">
    <i class="fa icon-4x text-success">&#xf058;</i>
    <h4 class="msgbox-title">成功</h4>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="msgbox-body"><p>操作已成功完成！</p></div>
  <div class="msgbox-footer">
    <button type="button" class="btn btn-success">确定</button>
  </div>
</div>
```

### 警告消息框

```html
<div class="msgbox msgbox-warning">
  <div class="msgbox-header">
    <i class="fa icon-4x text-warning">&#xf06a;</i>
    <h4 class="msgbox-title">警告</h4>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="msgbox-body"><p>此操作不可撤销！</p></div>
  <div class="msgbox-footer">
    <button type="button" class="btn btn-default">取消</button>
    <button type="button" class="btn btn-warning">确定</button>
  </div>
</div>
```

### 危险消息框

```html
<div class="msgbox msgbox-danger">
  <div class="msgbox-header">
    <i class="fa icon-4x text-danger">&#xf057;</i>
    <h4 class="msgbox-title">错误</h4>
    <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
  </div>
  <div class="msgbox-body"><p>操作失败，请重试。</p></div>
  <div class="msgbox-footer">
    <button type="button" class="btn btn-danger">确定</button>
  </div>
</div>
```

## 核心类

| 类 | 描述 |
|---|---|
| `.msgbox` | 消息框容器，顶部带4px语境色边框 |
| `.msgbox-lg` / `.msgbox-md` / `.msgbox-sm` | 尺寸 |
| `.msgbox-header` | 头部区域 |
| `.msgbox-title` | 标题 |
| `.msgbox-body` | 主体内容 |
| `.msgbox-footer` | 底部按钮区 |
| `.msgbox-info` / `.msgbox-success` / `.msgbox-warning` / `.msgbox-danger` | 语境色 |

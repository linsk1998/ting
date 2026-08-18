# 对话框

对话框（`.dialog`）用于在页面中弹出浮层进行内容展示或交互，支持多种语境色主题。

## 基本用法

```html
<div class="dialog">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <a href="javascript:void 0" class="close"></a>
    </div>
    <div class="dialog-body">
        <p>普通对话框</p>
    </div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary">确定</button>
        <button type="button" class="btn btn-default">取消</button>
    </div>
</div>
```

## 语境色

```html
<div class="dialog dialog-primary">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <a href="javascript:void 0" class="close"></a>
    </div>
    <div class="dialog-body"><p>primary对话框</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary">确定</button>
        <button type="button" class="btn btn-default">取消</button>
    </div>
</div>
<div class="dialog dialog-success">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <a href="javascript:void 0" class="close"></a>
    </div>
    <div class="dialog-body"><p>success对话框</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-success">确定</button>
    </div>
</div>
<div class="dialog dialog-info">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <a href="javascript:void 0" class="close"></a>
    </div>
    <div class="dialog-body"><p>info对话框</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-info">确定</button>
    </div>
</div>
<div class="dialog dialog-warning">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <a href="javascript:void 0" class="close"></a>
    </div>
    <div class="dialog-body"><p>warning对话框</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-warning">确定</button>
    </div>
</div>
<div class="dialog dialog-danger">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <a href="javascript:void 0" class="close"></a>
    </div>
    <div class="dialog-body"><p>danger对话框</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-danger">确定</button>
    </div>
</div>
```

## 原生 dialog 渐进增强

```html
<button type="button" class="btn btn-primary" commandfor="dialog1" command="show-modal">打开对话框</button>
<dialog class="dialog" id="dialog1">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <button type="button" class="close" commandfor="dialog1" command="close"></button>
    </div>
    <div class="dialog-body"><p>原生 dialog</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary" commandfor="dialog1" command="close">确定</button>
    </div>
</dialog>
```

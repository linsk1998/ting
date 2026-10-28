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

## 弹出对话框

```html
<button type="button" class="btn btn-primary" commandfor="dialog" command="show-modal">打开对话框</button>
<dialog class="dialog" id="dialog">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <button type="button" class="close" commandfor="dialog" command="close"></button>
    </div>
    <div class="dialog-body"><p>原生 dialog</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary" commandfor="dialog" command="close">确定</button>
    </div>
</dialog>
```


## 预设尺寸

```html
<button type="button" class="btn btn-primary" commandfor="dialog-xs" command="show-modal">xs</button>
<dialog class="dialog dialog-xs" id="dialog-xs">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <button type="button" class="close" commandfor="dialog-xs" command="close"></button>
    </div>
    <div class="dialog-body"><p>dialog-xs</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary" commandfor="dialog-xs" command="close">确定</button>
    </div>
</dialog>

<button type="button" class="btn btn-primary" commandfor="dialog-sm" command="show-modal">sm</button>
<dialog class="dialog dialog-sm" id="dialog-sm">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <button type="button" class="close" commandfor="dialog-sm" command="close"></button>
    </div>
    <div class="dialog-body"><p>dialog-sm</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary" commandfor="dialog-sm" command="close">确定</button>
    </div>
</dialog>

<button type="button" class="btn btn-primary" commandfor="dialog-md" command="show-modal">md</button>
<dialog class="dialog dialog-md" id="dialog-md">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <button type="button" class="close" commandfor="dialog-md" command="close"></button>
    </div>
    <div class="dialog-body"><p>dialog-md</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary" commandfor="dialog-md" command="close">确定</button>
    </div>
</dialog>

<button type="button" class="btn btn-primary" commandfor="dialog-lg" command="show-modal">lg</button>
<dialog class="dialog dialog-lg" id="dialog-lg">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <button type="button" class="close" commandfor="dialog-lg" command="close"></button>
    </div>
    <div class="dialog-body"><p>dialog-lg</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary" commandfor="dialog-lg" command="close">确定</button>
    </div>
</dialog>

<button type="button" class="btn btn-primary" commandfor="dialog-xl" command="show-modal">xl</button>
<dialog class="dialog dialog-xl" id="dialog-xl">
    <div class="dialog-header">
        <span class="dialog-title">标题</span>
        <button type="button" class="close" commandfor="dialog-xl" command="close"></button>
    </div>
    <div class="dialog-body"><p>dialog-xl</p></div>
    <div class="dialog-footer">
        <button type="button" class="btn btn-primary" commandfor="dialog-xl" command="close">确定</button>
    </div>
</dialog>
```

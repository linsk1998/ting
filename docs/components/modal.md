# 模态遮罩

模态遮罩（`.modal`）用于覆盖整个页面，阻止用户与背景内容交互，常用于配合对话框、加载等场景。

## 基本用法

```html
<div class="modal">
    <div class="modal-center">
        <div class="dialog">
            <div class="dialog-header">
                <span class="dialog-title">标题</span>
                <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
            </div>
            <div class="dialog-body"><p>模态遮罩内容</p></div>
            <div class="dialog-footer">
                <button type="button" class="btn btn-default">取消</button>
                <button type="button" class="btn btn-primary">确定</button>
            </div>
        </div>
    </div>
</div>
```

## 核心类

| 类 | 描述 |
|---|---|
| `.modal` | 模态遮罩层，固定定位覆盖整个视口 |
| `.modal-center` | 居中对齐内容的容器 |
| `.modal-hit` | 事件捕获层，拦截点击关闭 |

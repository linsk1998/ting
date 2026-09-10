# 消息框

消息框（`.msgbox`）是一种特殊的对话框，左侧带有图标，适用于操作确认和状态提示。支持多种尺寸和语境色主题。

## 消息提示

最简单的消息框，直接在 `.msgbox` 内放置文字和图标，配合语境色类即可显示不同的提示样式。可以通过 `msgbox-lg`、`msgbox-md`、`msgbox-sm` 设置固定尺寸。

```html
<div class="text-center">
    <div class="msgbox msgbox-info"><i class="icon text-info fa">&#xf05a;</i> <span class="valign-middle">自适应消息框</span></div>
</div>
<div class="text-center">
    <div class="msgbox msgbox-lg msgbox-success"><i class="icon text-success fa">&#xf058;</i> <span class="valign-middle">大消息框</span></div>
</div>
<div class="text-center">
    <div class="msgbox msgbox-md msgbox-warning"><i class="icon text-warning fa">&#xf06a;</i> <span class="valign-middle">中消息框</span></div>
</div>
<div class="text-center">
    <div class="msgbox msgbox-sm msgbox-danger"><i class="icon text-danger fa">&#xf057;</i> <span class="valign-middle">小消息框</span></div>
</div>
```

## 消息对话框

使用 `.msgbox-header`、`.msgbox-body`、`.msgbox-footer` 构成完整的消息对话框，头部可放置标题和关闭按钮，底部放置操作按钮。

```html
<div class="text-center">
    <div class="msgbox msgbox-primary">
        <div class="msgbox-header">
            <a href="javascript:void 0" class="close" data-dismiss="modal"></a>
            <h3 class="msgbox-title">嗨</h3>
        </div>
        <div class="msgbox-body pre-wrap">小朋友们 大家好</p></div>
        <div class="msgbox-footer">
            <button type="button" class="btn btn-primary">确定</button>
        </div>
    </div>
</div>
```

## 弹出消息框

```html
<button type="button" class="btn btn-primary" commandfor="msgbox-confirm" command="show-modal">确认框</button>
<dialog id="msgbox-confirm" class="msgbox msgbox-md msgbox-info">
    <div class="msgbox-header">
        <i class="icon fa text-info">&#xf059;</i>
        <button type="button" class="close" commandfor="msgbox-confirm" command="close"></button>
        <h3 class="msgbox-title">还记得我是谁吗</h3>
    </div>
    <div class="msgbox-body">
        <pre class="pre-wrap">对了我就是为蓝猫配音的演员葛平
今天呐我特别的要向秦皇岛市的小朋友们石家庄市的小朋友们还有河南安阳的小朋友们问声好
为什么呢
因为我们在二零零二年十月份来到了秦皇岛石家庄为小朋友们做现场的表演在这次活动中呢发生了一个非常有趣的事</pre>
    </div>
    <div class="msgbox-footer">
        <button type="button" class="btn btn-info" commandfor="msgbox-confirm" command="close">记得</button>
        <button type="button" class="btn btn-default" commandfor="msgbox-confirm" command="close">忘了</button>
    </div>
</dialog>

<button type="button" class="btn btn-primary" commandfor="msgbox-info" command="show-modal">信息框</button>
<dialog id="msgbox-info" class="msgbox msgbox-md msgbox-info">
    <div class="msgbox-header">
        <i class="icon fa text-info">&#xf05a;</i>
        <button type="button" class="close" commandfor="msgbox-info" command="close"></button>
        <h3 class="msgbox-title">下面我就跟大家讲一讲</h3>
    </div>
    <div class="msgbox-body">
        <pre class="pre-wrap">当时我们在石家庄表演的时候我说小朋友们谁愿意跟我蓝猫学一句配音呐
只听见下面有一个我来
这时候我一看小朋友们人群当中钻出了一个光头</pre>
    </div>
    <div class="msgbox-footer">
        <button type="button" class="btn btn-default" commandfor="msgbox-info" command="close">确定</button>
    </div>
</dialog>

<button type="button" class="btn btn-primary" commandfor="msgbox-prompt" command="show-modal">提示词</button>
<dialog id="msgbox-prompt" class="msgbox msgbox-md msgbox-info">
    <div class="msgbox-header">
        <i class="icon fa text-info">&#xf059;</i>
        <button type="button" class="close" commandfor="msgbox-prompt" command="close"></button>
        <h3 class="msgbox-title">哇</h3>
    </div>
    <div class="msgbox-body">
        <pre class="pre-wrap">他全身穿的都是我们蓝猫品牌的衣服特别显眼我一把就把他抱了
起来我说你叫什么名字他说我叫吴克你今年多大啦他说他五岁这个小朋友非常喜欢我抱着我啊
非要学我配音我说好好好好好别着急啊
我当时就说了一句</pre>
    </div>
    <div class="msgbox-footer">
        <div class="input-group">
            <div class="input-group-append input-group-btn">
                <button class="btn btn-default" type="button" commandfor="msgbox-prompt" command="close">确定</button>
            </div>
            <div class="input-group-body">
                <input type="text" class="form-control" placeholder="说了一句什么" value="我是超威蓝猫"/>
            </div>
        </div>
    </div>
</dialog>

<button type="button" class="btn btn-primary" commandfor="msgbox-success" command="show-modal">成功信息</button>
<dialog id="msgbox-success" class="msgbox msgbox-md msgbox-success">
    <div class="msgbox-header">
        <i class="icon fa text-success">&#xf058;</i>
        <button type="button" class="close" commandfor="msgbox-success" command="close"></button>
        <h3 class="msgbox-title">他也跟着我学了一句</h3>
    </div>
    <div class="msgbox-body">
        <p>学的非常像</p>
    </div>
    <div class="msgbox-footer">
        <button type="button" class="btn btn-success" commandfor="msgbox-success" command="close">确定</button>
    </div>
</dialog>
```

# 输入框组

标签输入框（`.tags-input`）用于在输入框中展示和管理多个标签，支持换行/不换行、清空、配合 input-group、标签输入、大小控制和校验反馈。

## 多选控件

```html
空白
<div class="tags-input">
</div>
占位文字
<div class="tags-input">
    <div class="tags-input-placeholder">请输入XXX</div>
</div>
有标签
<div class="tags-input">
    <div class="tags-input-wrap">
        <div class="tag tag-default">金坷垃</div>
        <div class="tag tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div>
        <div class="tag tag-default"><span>农业发达</span><button type="button" class="close"></button></div>
    </div>
    <button type="button" class="control-clear fa">&#xf057;</button>
</div>
```

### 超出行为

`.tags-input-wrap` 超出换行，`.tags-input-nowrap` 超出不换行。

```html
<form class="form">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group" style="max-width: 320px; _width: 320px;">
                <label class="form-label">超出换行</label>
                <div class="tags-input">
                    <div class="tags-input-wrap"
                        ><div class="tag tag-default">金坷垃</div
                        ><div class="tag tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><span>农业发达</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default">两米下</div
                        ><div class="tag tag-default"><span>种庄稼</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><span>资源缺乏</span><button type="button" class="close"></button></div
                    ></div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group" style="max-width: 320px; _width: 320px;">
                <label class="form-label">超出不换行</label>
                <div class="tags-input">
                    <div class="tags-input-nowrap"
                        ><div class="tag tag-default">金坷垃</div
                        ><div class="tag tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><span>农业发达</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default">两米下</div
                        ><div class="tag tag-default"><span>种庄稼</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><span>资源缺乏</span><button type="button" class="close"></button></div
                    ></div>
                </div>
            </div>
        </div>
    </div>
</form>
```

### 配合 input-group

`.tags-input` 可放在 `.input-group-body` 中使用。

```html
<form class="form">
    <div class="form-group">
        <label class="form-label">配合input-group多选控件</label>
        <div class="input-group">
            <button type="button" class="input-group-append btn btn-default">
                <i class="fa">&#xf093;</i>
            </button>
            <div class="input-group-body">
                <div class="tags-input">
                    <div class="tags-input-wrap"
                        ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">金坷垃</a><button class="close" type="button">✕</button></div
                        ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">氮磷钾</a><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">农业发达</a><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">两米下</a><button class="close" type="button">✕</button></div
                        ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">种庄稼</a><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">资源缺乏</a><button type="button" class="close"></button></div
                    ></div>
                    <button type="button" class="control-clear fa">&#xf057;</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group" style="max-width: 320px; _width: 320px;">
                <label class="form-label">配合input-group超出换行</label>
                <div class="input-group">
                    <button type="button" class="input-group-append btn btn-default">
                        <i class="fa">&#xf093;</i>
                    </button>
                    <div class="input-group-body">
                        <div class="tags-input">
                            <div class="tags-input-wrap"
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">金坷垃</a><button class="close" type="button">✕</button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">氮磷钾</a><button type="button" class="close"></button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">农业发达</a><button type="button" class="close"></button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">两米下</a><button class="close" type="button">✕</button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">种庄稼</a><button type="button" class="close"></button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">资源缺乏</a><button type="button" class="close"></button></div
                            ></div>
                            <button type="button" class="control-clear fa">&#xf057;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group" style="max-width: 320px; _width: 320px;">
                <label class="form-label">配合input-group超出不换行</label>
                <div class="input-group">
                    <button type="button" class="input-group-append btn btn-default">
                        <i class="fa">&#xf093;</i>
                    </button>
                    <div class="input-group-body">
                        <div class="tags-input">
                            <div class="tags-input-nowrap"
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">金坷垃</a><button class="close" type="button">✕</button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">氮磷钾</a><button type="button" class="close"></button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">农业发达</a><button type="button" class="close"></button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">两米下</a><button class="close" type="button">✕</button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">种庄稼</a><button type="button" class="close"></button></div
                                ><div class="tag tag-default"><i class="icon-left fa fa-paperclip"></i><a href="javascript:;">资源缺乏</a><button type="button" class="close"></button></div
                            ></div>
                            <button type="button" class="control-clear fa">&#xf057;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
```

### 标签输入

在 `.tags-input` 中放入 `<input>` 元素实现标签输入。

```html
<form class="form">
    <div class="form-group">
        <label class="form-label">标签输入</label>
        <div class="tags-input">
            <div class="tags-input-wrap"
                ><div class="tag tag-default">金坷垃</div
                ><div class="tag tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
            ></div>
            <input type="text" placeholder="请输入内容">
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
    <div class="form-group">
        <div class="tags-input">
            <div class="tags-input-nowrap"
                ><div class="tag tag-default">金坷垃</div
                ><div class="tag tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
            ></div>
            <input type="text" placeholder="请输入内容">
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group" style="max-width: 320px; _width: 320px;">
                <label class="form-label">标签输入超出换行</label>
                <div class="tags-input">
                    <div class="tags-input-wrap"
                        ><div class="tag tag-default">金坷垃</div
                        ><div class="tag tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><span>农业发达</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default">两米下</div
                        ><div class="tag tag-default"><span>种庄稼</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><span>资源缺乏</span><button type="button" class="close"></button></div
                    ></div>
                    <input type="text" placeholder="请输入内容">
                    <button type="button" class="control-clear fa">&#xf057;</button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group" style="max-width: 320px; _width: 320px;">
                <label class="form-label">标签输入超出不换行</label>
                <div class="tags-input">
                    <div class="tags-input-nowrap"
                        ><div class="tag tag-default">金坷垃</div
                        ><div class="tag tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><span>农业发达</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default">两米下</div
                        ><div class="tag tag-default"><span>种庄稼</span><button type="button" class="close"></button></div
                        ><div class="tag tag-default"><span>资源缺乏</span><button type="button" class="close"></button></div
                    ></div>
                    <input type="text" placeholder="请输入内容">
                    <button type="button" class="control-clear fa">&#xf057;</button>
                </div>
            </div>
        </div>
    </div>
</form>
```

## 控件大小

使用 `.tags-input-lg` / `.tags-input-sm`，标签本身也需用 `.tag-lg` / `.tag-sm`。还可配合 `.form-group-lg` / `.form-group-sm`（此时 `.tags-input` 无需额外尺寸类，标签仍需 `.tag-lg` / `.tag-sm`）。

```html
<form class="form-horizontal">
    <div class="form-group">
        <label class="form-label">tags-input-lg</label>
        <div class="tags-input tags-input-lg">
            <div class="tags-input-wrap"
                ><div class="tag tag-lg tag-default">金坷垃</div
                ><div class="tag tag-lg tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                ><div class="tag tag-lg tag-default"><span>农业发达</span><button type="button" class="close"></button></div
            ></div>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">tags-input-sm</label>
        <div class="tags-input tags-input-sm">
            <div class="tags-input-wrap"
                ><div class="tag tag-sm tag-default">金坷垃</div
                ><div class="tag tag-sm tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                ><div class="tag tag-sm tag-default"><span>农业发达</span><button type="button" class="close"></button></div
            ></div>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
    <div class="form-group form-group-lg">
        <label class="form-label">form-group-lg</label>
        <div class="tags-input">
            <div class="tags-input-wrap"
                ><div class="tag tag-lg tag-default">金坷垃</div
                ><div class="tag tag-lg tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                ><div class="tag tag-lg tag-default"><span>农业发达</span><button type="button" class="close"></button></div
            ></div>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
    <div class="form-group form-group-sm">
        <label class="form-label">form-group-sm</label>
        <div class="tags-input">
            <div class="tags-input-wrap"
                ><div class="tag tag-sm tag-default">金坷垃</div
                ><div class="tag tag-sm tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                ><div class="tag tag-sm tag-default"><span>农业发达</span><button type="button" class="close"></button></div
            ></div>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
</form>
```

## 置灰

在 `.tags-input` 上添加 `.tags-input-disabled`，内部 `<input>` 也需 `disabled`。空白控件、placeholder、标签输入三种场景均支持。

```html
<form class="form-horizontal">
    <div class="form-group">
        <label class="form-label">空白控件</label>
        <div class="tags-input tags-input-disabled">
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">placeholder</label>
        <div class="input-group">
            <button type="button" class="input-group-append btn btn-default btn-disabled" disabled><span class="caret"></span></button>
            <div class="input-group-body">
                <div class="tags-input tags-input-disabled">
                    <div class="tags-input-placeholder">请输入XXX</div>
                    <button type="button" class="control-clear fa">&#xf057;</button>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">标签输入</label>
        <div class="tags-input tags-input-disabled">
            <div class="tags-input-wrap"
                ><div class="tag tag-default">金坷垃</div
                ><div class="tag tag-default"><span>氮磷钾</span><button type="button" class="close"></button></div
                ><div class="tag tag-default"><span>农业发达</span><button type="button" class="close"></button></div
                ><div class="tag tag-default">两米下</div
                ><div class="tag tag-default"><span>种庄稼</span><button type="button" class="close"></button></div
                ><div class="tag tag-default"><span>资源缺乏</span><button type="button" class="close"></button></div
            ></div>
            <input type="text" placeholder="请输入内容" disabled>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
</form>
```

## 校验

配合 `.has-valid` / `.has-invalid` + `.has-feedback-icon`，`tags-input` 嵌套在 `.input-group-body` 内，`feedback-icon` 放在 `.tags-input` 内。

```html
<form class="form-horizontal">
    <div class="form-group has-valid has-feedback-icon">
        <label class="form-label">has-valid</label>
        <div class="input-group">
            <button type="button" class="input-group-append btn btn-default"><span class="caret"></span></button>
            <!--控件需要放在最后-->
            <div class="input-group-body">
                <div class="tags-input">
                    <div class="tags-input-wrap"
                        ><div class="tag tag-default">金坷垃</div
                    ></div>
                    <button type="button" class="control-clear fa">&#xf057;</button>
                    <i class="feedback-icon fa">&#xf00c;</i>
                </div>
            </div>
        </div>
        <p class="form-text">Example block-level help text here.</p>
    </div>
    <div class="form-group has-invalid has-feedback-icon">
        <label class="form-label">has-invalid</label>
        <div class="input-group">
            <button type="button" class="input-group-append btn btn-default"><span class="caret"></span></button>
            <!--控件需要放在最后-->
            <div class="input-group-body">
                <div class="tags-input">
                    <div class="tags-input-wrap"
                        ><div class="tag tag-default">金坷垃</div
                    ></div>
                    <button type="button" class="control-clear fa">&#xf057;</button>
                    <i class="feedback-icon fa">&#xf00d;</i>
                </div>
            </div>
        </div>
        <p class="form-text">Example block-level help text here.</p>
    </div>
</form>
```

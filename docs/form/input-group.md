# 输入框组

通过 `.input-group` 将文本、按钮等附加元素与输入框组合在一起，使用 `.input-group-prepend` 前置、`.input-group-append` 后置，控件放在 `.input-group-body` 中。

## 基础用法

### 文本前置 / 后置

```html
<label for="basic-url">前置</label>
<div class="input-group">
    <div class="input-group-prepend input-group-text" id="basic-addon3">https://example.com/users/</div>
    <div class="input-group-body">
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
    </div>
</div>
<br/>
<label for="basic-addon1">后置</label>
<div class="input-group">
    <div class="input-group-append input-group-text">@example.com</div>
    <div class="input-group-body">
        <input id="basic-addon1" type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon1"/>
    </div>
</div>
<br/>
<label for="basic-addon2">同时使用前后附加</label>
<div class="input-group">
    <div class="input-group-prepend input-group-text">$</div>
    <div class="input-group-append input-group-text">.00</div>
    <!--控件需要放在最后-->
    <div class="input-group-body">
        <input id="basic-addon2" type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
    </div>
</div>
```

### 作为额外元素的按钮

`input-group-prepend` 和 `input-group-append` 可以直接放按钮或按钮组。

```html
<div class="input-group">
    <button class="input-group-prepend btn btn-default" type="button">搜索</button>
    <button class="input-group-append btn btn-primary" type="button">搜索</button>
    <div class="input-group-body">
        <input type="text" class="form-control" placeholder="关键词"/>
    </div>
</div>
<br/>
<div class="input-group">
    <div class="input-group-prepend btn-group">
        <button type="button" class="btn btn-default">按钮 1</button>
        <button type="button" class="btn btn-default">按钮 2</button>
    </div>
    <div class="input-group-append btn-group">
        <button type="button" class="btn btn-default">按钮 1</button>
        <button type="button" class="btn btn-primary">按钮 2</button>
    </div>
    <div class="input-group-body">
        <input type="text" class="form-control" placeholder="关键词"/>
    </div>
</div>
```

## 清空图标

在 `.input-group-body` 内放入 `.control-clear` 清空按钮。

```html
<div class="input-group">
    <div class="input-group-prepend input-group-text">@</div>
    <div class="input-group-body">
        <input type="text" class="form-control" placeholder="Username"/>
        <button type="button" class="control-clear fa">&#xf057;</button>
    </div>
</div>
```

## 置灰状态

对控件和按钮设置 `disabled` 属性即可。

```html
<div class="input-group">
    <div class="input-group-prepend">
        <div class="input-group-text">█</div>
    </div>
    <div class="input-group-append btn-group">
        <button type="button" class="btn btn-default btn-disabled" disabled>按钮 1</button>
        <button type="button" class="btn btn-primary btn-disabled" disabled>按钮 2</button>
    </div>
    <!--控件需要放在最后-->
    <div class="input-group-body">
        <input type="text" class="form-control" disabled/>
    </div>
</div>
```

## 内联表单

`.input-group` 可直接放在 `.form-inline` 中使用。

```html
<form class="form-inline">
    <div class="form-group">
        <label class="form-label" for="exampleInputName2">Name</label>
        <input style="width:160px;" type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
    </div>
    <div class="form-group">
        <label class="form-label" for="exampleInputEmail2">Email</label>
        <div style="width:300px;" class="input-group">
            <div class="input-group-append">
                <div class="input-group-text">@shengdiyage.us</div>
            </div>
            <div class="input-group-body">
                <input type="text" class="form-control"/>
            </div>
        </div>
    </div>
</form>
```

## 组件大小

使用 `.input-group-lg` / `.input-group-sm` 控制输入框组尺寸，配合 `.form-group-lg` / `.form-group-sm` 或 `.form-control-lg` / `.form-control-sm`。

```html
<form class="form-horizontal">
    <div class="form-group">
        <label class="form-label">input-group-lg</label>
        <div class="input-group input-group-lg">
            <div class="input-group-prepend"><div class="input-group-text">█</div></div>
            <div class="input-group-append"><div class="input-group-text">元</div></div>
            <!--控件需要放在最后-->
            <div class="input-group-body">
                <input type="text" class="form-control form-control-lg"/>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">input-group-sm</label>
        <div class="input-group input-group-sm">
            <div class="input-group-prepend"><div class="input-group-text">█</div></div>
            <div class="input-group-append"><div class="input-group-text">元</div></div>
            <div class="input-group-body">
                <input type="text" class="form-control form-control-sm"/>
            </div>
        </div>
    </div>
    <div class="form-group form-group-lg">
        <label class="form-label">form-group-lg</label>
        <div class="input-group input-group-lg">
            <div class="input-group-prepend"><div class="input-group-text">█</div></div>
            <div class="input-group-append"><div class="input-group-text">元</div></div>
            <div class="input-group-body">
                <input type="text" class="form-control"/>
            </div>
        </div>
    </div>
    <div class="form-group form-group-sm">
        <label class="form-label">form-group-sm</label>
        <div class="input-group input-group-sm">
            <div class="input-group-prepend"><div class="input-group-text">█</div></div>
            <div class="input-group-append"><div class="input-group-text">元</div></div>
            <div class="input-group-body">
                <input type="text" class="form-control"/>
            </div>
        </div>
    </div>
</form>
```

## 校验

`.input-group` 可配合 `.has-valid` / `.has-invalid` 校验状态，`feedback-icon` 和 `control-clear` 可共存于 `.input-group-body` 内。

```html
<form class="form-horizontal">
    <div class="form-group has-valid has-feedback-icon">
        <label class="form-label">has-valid</label>
        <div class="input-group">
            <div class="input-group-prepend"><div class="input-group-text">█</div></div>
            <div class="input-group-append"><div class="input-group-text">元</div></div>
            <!--控件需要放在最后-->
            <div class="input-group-body">
                <input type="text" class="form-control"/>
                <button type="button" class="control-clear fa">&#xf057;</button>
                <i class="feedback-icon fa">&#xf00c;</i>
            </div>
        </div>
        <p class="feedback-text">Example block-level help text here.</p>
    </div>
    <div class="form-group has-invalid has-feedback-icon">
        <label class="form-label">has-invalid</label>
        <div class="input-group">
            <div class="input-group-prepend"><div class="input-group-text">█</div></div>
            <div class="input-group-append"><div class="input-group-text">元</div></div>
            <div class="input-group-body">
                <input type="text" class="form-control"/>
                <button type="button" class="control-clear fa">&#xf057;</button>
                <i class="feedback-icon fa">&#xf00d;</i>
            </div>
        </div>
        <p class="feedback-text">Example block-level help text here.</p>
    </div>
</form>
```

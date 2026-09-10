# 表单布局

表单布局提供了多种排列方式，包括基本表单、内联表单、水平排列以及配合格栅系统的灵活布局。

## 垂直布局表单

```html
<form class="form">
    <div class="form-group">
        <label class="form-label" for="email">普通文本</label>
        <input type="email" class="form-control" name="email" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label class="form-label" for="password">密码</label>
        <input type="password" class="form-control" name="password" placeholder="Password">
    </div>
    <div class="form-group">
        <label class="form-label">文本域</label>
        <textarea class="form-control" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label class="form-label">下拉</label>
        <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## 内联表单

通过 `.form-inline` 类可以使表单元素水平排列在同一行。

```html
<form class="form-inline"
    ><div class="form-group"
        ><label class="form-label" for="exampleInputName2">Name</label
        ><input style="width:160px;" type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe"
    ></div
    ><div class="form-group"
        ><label class="form-label" for="exampleInputEmail2">Email</label
        ><input style="width:160px;" type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"
    ></div
    ><div class="form-group"
        ><label class="form-label">Password</label
        ><input type="password" class="form-control"
    ></div
    ><div class="form-group">
        <div class="radio-group">
            <label><input type="checkbox">记住登入</label>
            <label><input type="checkbox">同时可以选我</label>
            <label><input type="checkbox">还可以选我</label>
        </div>
    </div
    ><button type="submit" class="btn btn-primary">Send invitation</button
></form>
```

## 水平排列的表单

使用 `.form-horizontal` 类可以让表单的 label 和控件水平排列。

```html
<form class="form-horizontal">
    <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="Email">
    </div>
    <div class="form-group">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="Password">
    </div>
    <div class="form-group">
        <label class="form-check"><input type="checkbox"> Remember me</label>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
</form>
```

## 使用格栅系统

结合 `.row` 和 `.col-*` 类可以实现更灵活的表单布局。

```html
<form class="form">
    <div class="form-group row">
        <label class="form-label col-md-2">Email</label>
        <div class="col-md-10">
            <input type="email" class="form-control" placeholder="Email">
        </div>
    </div>
    <div class="form-group row">
        <label class="form-label col-md-2">Password</label>
        <div class="col-md-10">
            <input type="password" class="form-control" placeholder="Password">
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-offset-2 col-md-10">
            <div class="form-check">
                <label><input type="checkbox"> Remember me</label>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-offset-2 col-md-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </div>
</form>
```

## 表格形式

将表单嵌入表格中，适用于批量数据输入场景。

```html
<form class="form">
    <table class="table table-bordered table-sm">
        <colgroup>
            <col width="10.33%"/><col width="20%"/>
            <col width="10.33%"/><col width="20%"/>
            <col width="10.33%"/><col width="20%"/>
        </colgroup>
        <tbody>
            <tr>
                <th class="thead-subtle">流水号</th>
                <td><input type="email" class="form-control"/></td>
                <th class="thead-subtle">订单号</th>
                <td><input type="email" class="form-control"/></td>
                <th class="thead-subtle">状态</th>
                <td><input type="email" class="form-control"/></td>
            </tr>
            <tr>
                <th class="thead-subtle">原因</th>
                <td><input type="email" class="form-control"/></td>
                <th class="thead-subtle">要求</th>
                <td><input type="email" class="form-control"/></td>
                <th class="thead-subtle">申请时间</th>
                <td><input type="email" class="form-control"/></td>
            </tr>
            <tr>
                <th class="thead-subtle">详细说明</th>
                <td colspan="5">
                    <textarea class="form-control" rows="3"></textarea>
                </td>
            </tr>
            <tr>
                <th class="thead-subtle">附件</th>
                <td colspan="5">
                    <input type="file" name="attachment">
                </td>
            </tr>
        </tbody>
    </table>
</form>
```

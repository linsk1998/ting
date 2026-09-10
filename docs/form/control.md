# 基础控件

表单基础控件包括文本输入、下拉选择、文本域、文件上传、复选框和单选框等所有基础表单元素。

```html
<form class="form">
    <div class="form-group">
        <label class="form-label" for="email">普通文本</label>
        <input type="email" class="form-control" name="email" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label class="form-label" for="password">密码</label>
        <input type="password" class="form-control" name="password" placeholder="Password">
        <p class="form-text">Example block-level help text here.</p>
    </div>
    <div class="form-group">
        <label class="form-label">置灰状态</label>
        <input type="text" class="form-control input-disabled" disabled>
    </div>
    <div class="form-group">
        <label class="form-label" for="attachment">上传</label>
        <input type="file" name="attachment">
    </div>
    <div class="form-group">
        <label class="form-label">多选</label>
        <div>
            <label class="form-check"><input type="checkbox">Check me out</label>
            <label class="form-check"><input type="checkbox">同时可以选我</label>
            <label class="form-check"><input type="checkbox">还可以选我</label>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">单选</label>
        <div>
            <label class="form-check"><input type="radio" name="radio">Check me out</label>
            <label class="form-check"><input type="radio" name="radio">同时可以选我</label>
            <label class="form-check"><input type="radio" name="radio">还可以选我</label>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">水平布局多选</label>
        <div>
            <label class="form-check form-check-inline"><input type="checkbox">Check me out</label>
            <label class="form-check form-check-inline"><input type="checkbox">同时可以选我</label>
            <label class="form-check form-check-inline"><input type="checkbox">还可以选我</label>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">水平布局单选</label>
        <div>
            <label class="form-check form-check-inline"><input type="radio" name="radio">Check me out</label>
            <label class="form-check form-check-inline"><input type="radio" name="radio">同时可以选我</label>
            <label class="form-check form-check-inline"><input type="radio" name="radio">还可以选我</label>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">文本域</label>
        <textarea class="form-control" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label class="form-label">置灰状态</label>
        <textarea class="form-control input-disabled" rows="3" disabled></textarea>
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
    <div class="form-group">
        <label class="form-label">置灰状态</label>
        <select class="form-control input-disabled" disabled>
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

# 可选列表

可选列表（`.select-list`）是一种带复选框、拖动手柄和操作工具的可选择列表项容器。

## 基本用法

每个 `<li>` 内包含操作工具（`.select-list-tools`，悬停显示）、拖动手柄（`.select-list-drag`）、复选框和标签文字。

```html
<div class="row row-gx-4 mb-4">
    <div class="col-md-3 col-gx-4">
        <ul class="select-list">
            <li>
                <div class="select-list-tools"><a href="#" class="fa">&#xf014;</a></div>
                <i class="select-list-drag fa">&#xf142; &#xf142;</i>
                <input type="checkbox" value=""/>
                <span class="vertical-align-sibling">环境变量设</span>
            </li>
            <li>
                <div class="select-list-tools"><a href="#" class="fa">&#xf014;</a></div>
                <i class="select-list-drag fa">&#xf142; &#xf142;</i>
                <input type="checkbox" value=""/>
                <span class="vertical-align-sibling">环境变量设</span>
            </li>
            <li>
                <div class="select-list-tools"><a href="#" class="fa">&#xf014;</a></div>
                <i class="select-list-drag fa">&#xf142; &#xf142;</i>
                <input type="checkbox" value=""/>
                <span class="vertical-align-sibling">环境变量设</span>
            </li>
            <li>
                <div class="select-list-tools"><a href="#" class="fa">&#xf014;</a></div>
                <i class="select-list-drag fa">&#xf142; &#xf142;</i>
                <input type="checkbox" value=""/>
                <span class="vertical-align-sibling">环境变量设</span>
            </li>
        </ul>
    </div>
</div>
```

# 树

树控件（`.tree`）用于展示层级结构数据，支持节点的展开/折叠和选中状态。`collapsed`表示节点折叠。`tree-toggler`表示节点展开/折叠按钮，需要加上`tabindex="0"`属性。`active`表示节点选中。

## 基本用法

```html
<div style="width: 300px; height: 300px; overflow: auto; border: 4px solid #000;">
    <div class="tree">
        <ul>
            <li class="collapsed">
                <i class="tree-toggler" tabindex="0"></i>
                <a href="javascript:void 0"><i class="tree-icon fa color-folder">&#xf07b;</i>新闻中心</a>
                <ul>
                    <li class="active"><a href="javascript:void 0"><i class="tree-icon fa">&#xf016;</i>选中效果</a></li>
                    <li><a href="javascript:void 0"><i class="tree-icon fa">&#xf016;</i>重要会议</a></li>
                    <li><a href="javascript:void 0"><i class="tree-icon fa">&#xf016;</i>视频新闻</a></li>
                    <li><a href="javascript:void 0"><i class="tree-icon fa">&#xf016;</i>各地要闻</a></li>
                    <li><a href="javascript:void 0"><i class="tree-icon fa">&#xf016;</i>国际局势</a></li>
                </ul>
            </li>
            <li class="collapsed">
                <i class="tree-toggler" tabindex="0"></i>
                <a href="javascript:void 0"><i class="tree-icon fa color-folder">&#xf07b;</i>新闻中心</a>
                <ul>
                    <li><a href="javascript:void 0">长长长长长长长长长长长长长长长长长长长长长长长</a></li>
                    <li><a href="javascript:void 0">重要会议</a></li>
                    <li><a href="javascript:void 0">视频新闻</a></li>
                    <li><a href="javascript:void 0">各地要闻</a></li>
                    <li><a href="javascript:void 0">国际局势</a></li>
                </ul>
            </li>
            <li>
                <i class="tree-toggler" tabindex="0"></i>
                <a href="javascript:void 0"><i class="tree-icon fa color-folder">&#xf07b;</i>新闻中心</a>
                <ul>
                    <li><label><input type="checkbox"/><i class="tree-icon fa">&#xf016;</i>领导活动</label></li>
                    <li><label><input type="checkbox"/><i class="tree-icon fa">&#xf016;</i>重要会议</label></li>
                    <li><label><input type="checkbox"/><i class="tree-icon fa">&#xf016;</i>视频新闻</label></li>
                    <li><label><input type="checkbox"/><i class="tree-icon fa">&#xf016;</i>各地要闻</label></li>
                    <li><label><input type="checkbox"/><i class="tree-icon fa">&#xf016;</i>国际局势</label></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
```

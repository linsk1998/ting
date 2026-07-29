# 树

树控件（`.tree`）用于展示层级结构数据，支持节点的展开/收起和选中状态。

## 基本用法

```html
<div class="tree">
  <ul>
    <li>
      <div class="active">
        <i class="fa tree-caret">&#xf0d7;</i>
        <i class="fa tree-icon">&#xf07b;</i>
        节点 1
      </div>
      <ul>
        <li>
          <div>
            <i class="fa tree-caret">&#xf0d7;</i>
            <i class="fa tree-icon">&#xf07b;</i>
            节点 1-1
          </div>
          <ul>
            <li>
              <div>
                <i class="fa tree-caret tree-caret-empty"></i>
                <i class="fa tree-icon">&#xf15b;</i>
                节点 1-1-1
              </div>
            </li>
            <li>
              <div>
                <i class="fa tree-caret tree-caret-empty"></i>
                <i class="fa tree-icon">&#xf15b;</i>
                节点 1-1-2
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div>
            <i class="fa tree-caret tree-caret-empty"></i>
            <i class="fa tree-icon">&#xf15b;</i>
            节点 1-2
          </div>
        </li>
      </ul>
    </li>
    <li>
      <div>
        <i class="fa tree-caret">&#xf0d7;</i>
        <i class="fa tree-icon">&#xf07b;</i>
        节点 2
      </div>
      <ul class="collapse">
        <li>
          <div>
            <i class="fa tree-caret tree-caret-empty"></i>
            <i class="fa tree-icon">&#xf15b;</i>
            节点 2-1
          </div>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

## 核心类

| 类 | 描述 |
|---|---|
| `.tree` | 树容器 |
| `.tree-caret` | 展开/收起三角箭头 |
| `.tree-caret-empty` | 空白占位（无子节点的缩进） |
| `.tree-icon` | 节点图标 |
| `.active` | 选中节点 |
| `.collapse` | 收起状态（隐藏子节点） |

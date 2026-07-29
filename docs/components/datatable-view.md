# 数据表格

数据表格（`.datatable`）是一个基于 Flexbox 布局的表格组件，支持固定表头、自动滚动等高级特性。

## 基本用法

```html
<div class="datatable">
  <div class="datatable-header">
    <table>
      <thead class="thead-subtle">
        <tr>
          <th width="30">#</th>
          <th>标题</th>
          <th width="80">作者</th>
          <th width="120">时间</th>
          <th width="50">操作</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="datatable-body">
    <div class="scroller">
      <table class="table table-striped table-bordered table-hover">
        <tbody>
          <tr class="active"><td>1</td><td>Title</td><td>Author</td><td class="nobr">2020-01-01</td><td><a href="#">编辑</a></td></tr>
          <tr><td>2</td><td>Title</td><td>Author</td><td class="nobr">2020-01-01</td><td><a href="#">编辑</a></td></tr>
          <tr><td>3</td><td>Title</td><td>Author</td><td class="nobr">2020-01-01</td><td><a href="#">编辑</a></td></tr>
          <tr><td>4</td><td>Title</td><td>Author</td><td class="nobr">2020-01-01</td><td><a href="#">编辑</a></td></tr>
          <tr><td>5</td><td>Title</td><td>Author</td><td class="nobr">2020-01-01</td><td><a href="#">编辑</a></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

## 核心类

| 类 | 描述 |
|---|---|
| `.datatable` | 数据表格容器 |
| `.datatable-header` | 表头区域（固定不滚动） |
| `.datatable-body` | 表体区域（可滚动） |
| `.scroller` | 滚动容器 |
| `.scrollBar` | 自定义滚动条 |

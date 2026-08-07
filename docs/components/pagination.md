# 分页

分页组件用于展示带有页码的导航，分为基本分页（`.pagination`）和前后翻页（`.pager`）两种样式。

## 基本用法

`.pagination` 配合 `<nav>` 包裹，使用 `.disabled` 禁用指定页、`.active` 标记当前页。禁用项用 `<span>` 替代 `<a>`。

```html
<nav>
    <ul class="pagination">
        <li><a href="#">&laquo;</a></li>
        <li><a href="#">1</a></li>
        <li class="disabled"><span>2</span></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
    </ul>
</nav>
<nav>
    <ul class="pagination">
        <li><a href="#">&laquo;</a></li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
    </ul>
</nav>
```

## 带间隙

使用 `.pagination-gutter` 为分页项之间添加间距。

```html
<nav>
    <ul class="pagination pagination-gutter">
        <li><a href="#">&laquo;</a></li>
        <li class="disabled"><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li class="active"><span>4</span></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
    </ul>
</nav>
```

## 不同尺寸

`.pagination-lg` / `.pagination-sm` 控制分页大小。

```html
<nav>
    <ul class="pagination pagination-lg">
        <li><a href="#">&laquo;</a></li>
        <li class="active"><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
    </ul>
</nav>
<nav>
    <ul class="pagination pagination-sm">
        <li><a href="#">&laquo;</a></li>
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
    </ul>
</nav>
```

## 翻页

`.pager` 提供简洁的前后翻页样式。使用 `.previous` / `.next` 可将链接对齐到两端。

```html
<nav>
    <ul class="pager">
        <li><a href="#">Previous</a></li>
        <li><a href="#">Next</a></li>
    </ul>
</nav>
<nav>
    <ul class="pager">
        <li class="previous"><a href="#">&larr; Older</a></li>
        <li class="next"><a href="#">Newer &rarr;</a></li>
    </ul>
</nav>
```

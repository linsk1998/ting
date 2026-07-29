# 滚动器

滚动器（`.scroller`）用于隐藏浏览器默认滚动条，并提供自定义滚动条样式。

## 基本用法

```html
<div class="scroller" style="height:200px; border:1px solid #ddd; padding:10px;">
  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
</div>
```

## 核心类

| 类 | 描述 |
|---|---|
| `.scroller` | 滚动容器（隐藏原生滚动条） |
| `.scrollBar` | 自定义滚动条 |

# 标签

提供两种标签风格：空心标签（`.tag`）和实心标签（`.label`）。

## 空心标签

### 基础标签

使用 `.tag` 搭配 `.tag-{context}` 设置语境色。

```html
<div class="tag tag-default">Default标签</div>
<div class="tag tag-primary">Primary标签</div>
<div class="tag tag-success">Success标签</div>
<div class="tag tag-info">Info标签</div>
<div class="tag tag-warning">Warning标签</div>
<div class="tag tag-danger">Danger标签</div>
```

### 标签尺寸

使用 `.tag-lg` 和 `.tag-sm` 控制标签大小。

大号标签：

```html
<div class="tag tag-default tag-lg">tag-lg标签</div>
<div class="tag tag-primary tag-lg">tag-lg标签</div>
<div class="tag tag-success tag-lg">tag-lg标签</div>
<div class="tag tag-info tag-lg">tag-lg标签</div>
<div class="tag tag-warning tag-lg">tag-lg标签</div>
<div class="tag tag-danger tag-lg">tag-lg标签</div>
```

小号标签：

```html
<div class="tag tag-default tag-sm">tag-sm标签</div>
<div class="tag tag-primary tag-sm">tag-sm标签</div>
<div class="tag tag-success tag-sm">tag-sm标签</div>
<div class="tag tag-info tag-sm">tag-sm标签</div>
<div class="tag tag-warning tag-sm">tag-sm标签</div>
<div class="tag tag-danger tag-sm">tag-sm标签</div>
```

### 可关闭标签

标签内可以放置 `.close` 关闭按钮。

```html
<div class="tag tag-default">Default标签 <span class="close">&times;</span></div>
<div class="tag tag-primary">Primary标签 <span class="close">&times;</span></div>
<div class="tag tag-success tag-lg">tag-lg标签 <span class="close">&times;</span></div>
<div class="tag tag-info tag-sm">tag-sm标签 <span class="close">&times;</span></div>
```

## 实心标签

使用 `.label` 创建实心底色白字的标签，适合标记状态或计数。

```html
<span class="label label-default">Default</span>
<span class="label label-primary">Primary</span>
<span class="label label-success">Success</span>
<span class="label label-info">Info</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Danger</span>
```

# 排版

全局的排版设置，包括标题、段落、列表、引用、代码块等元素的样式。

## 标题

HTML 中的所有标题标签 `<h1>` 到 `<h6>` 均可使用。另外还提供了 `.h1` 到 `.h6` 类，为的是给内联（inline）属性的文本赋予标题的样式。

在标题内还可以包含 `<small>` 标签或赋予 `.small` 类的元素，可以用来标记副标题。

```html
<h1>我是1级标题 <small>我是标题后的小字</small></h1>
<h2>我是2级标题 <small>我是标题后的小字</small></h2>
<h3>我是3级标题 <small>我是标题后的小字</small></h3>
<h4>我是4级标题 <small>我是标题后的小字</small></h4>
<h5>我是5级标题 <small>我是标题后的小字</small></h5>
<h6>我是6级标题 <small>我是标题后的小字</small></h6>
```

## 导语

使用 `.lead` 类让段落突出显示。

```html
<p class="lead">有人说："诗歌如跳舞，散文如散步。"读朱自清的散文，就像是在月下进行一场心灵的漫步。在这篇《荷塘月色》中，先生以细腻的笔触，将客观的自然之景与主观的内心之情完美交融。</p>
```

## 段落

```html
<p>这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了；妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。</p>
```

## 分隔线

使用 `<hr>` 元素：

```html
<hr/>
```

## 缩略语

```html
<p><abbr title="HyperText Markup Language">HTML</abbr> is the best thing since sliced bread.</p>
```

## 键盘文本

```html
<p>按<kbd>ctrl</kbd>+<kbd>v</kbd>可以复制。</p>
```

## 引用

```html
<blockquote>
  <p>好好学习，天天向上。</p>
  <footer>——毛泽东</footer>
</blockquote>
```

## 代码块

```html
<pre><code>alert(1)</code></pre>
```

## 列表

### 无序列表

```html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
</ul>
```

### 有序列表

```html
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
</ol>
```

### 无样式列表

使用 `.list-unstyled` 移除默认的 `list-style` 和左侧外边距（只对直接子项生效）。

```html
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
</ul>
```

### 内联列表

通过 `.list-inline` 和 `.list-inline-item` 将所有元素放置于同一行。

```html
<ul class="list-inline">
  <li class="list-inline-item">论坛</li>
  <li class="list-inline-item">案例</li>
  <li class="list-inline-item">捐赠</li>
  <li class="list-inline-item">联系</li>
</ul>
```

### 描述列表

```html
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
```

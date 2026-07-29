# 表格

多种表格样式，包括基础表格、隔行变色、边框、鼠标悬停、紧凑样式、语境色和响应式表格。

## 基础表格

```html
<table class="table">
  <thead>
    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
  <tfoot>
    <tr><td>6</td><td>6</td><td>6</td><td>6</td><td>6</td></tr>
  </tfoot>
</table>
```

## 隔行变色

使用 `.table-striped` 为 `<tbody>` 内的行添加斑马条纹样式。

```html
<table class="table table-striped">
  <thead>
    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
</table>
```

## 边框表格

使用 `.table-bordered` 为表格的每个单元格添加边框。

```html
<table class="table table-bordered table-striped">
  <thead class="thead-subtle">
    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
</table>
```

## 鼠标悬停

使用 `.table-hover` 为每一行添加鼠标悬停效果。

```html
<table class="table table-bordered table-striped table-hover">
  <thead class="thead-subtle">
    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
</table>
```

## 表头样式

### 深色表头

```html
<table class="table table-bordered table-striped table-hover">
  <thead class="thead-inverse">
    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
</table>
```

### 浅色表头

```html
<table class="table table-bordered table-striped table-hover">
  <thead class="thead-subtle">
    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
</table>
```

## 紧凑表格

使用 `.table-sm` 让表格更加紧凑。

```html
<table class="table table-bordered table-sm table-striped table-hover">
  <thead class="thead-subtle">
    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
</table>
```

## 语境色

语境色类可以用于整个表格、整行或单个单元格。

### 表格语境色

```html
<table class="table table-bordered table-primary table-striped table-hover">
  <thead class="thead-inverse">
    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
</table>
```

### 行语境色

```html
<table class="table table-bordered table-sm table-striped table-hover">
  <tbody>
    <tr class="table-active"><th>active</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr class="table-primary"><th>primary</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr class="table-success"><th>success</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr class="table-info"><th>info</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr class="table-warning"><th>warning</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
    <tr class="table-danger"><th>danger</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
  </tbody>
</table>
```

### 单元格语境色

```html
<table class="table table-bordered table-sm table-striped table-hover">
  <thead class="thead-inverse">
    <tr>
      <th>语境色</th>
      <th>active</th>
      <th class="table-primary">primary</th>
      <th class="table-success">success</th>
      <th class="table-info">info</th>
      <th class="table-warning">warning</th>
      <th class="table-danger">danger</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数据</td>
      <td class="table-active">active</td>
      <td class="table-primary">primary</td>
      <td class="table-success">success</td>
      <td class="table-info">info</td>
      <td class="table-warning">warning</td>
      <td class="table-danger">danger</td>
    </tr>
  </tbody>
</table>
```

## 响应式表格

使用 `.table-responsive` 包裹表格，在小屏幕上出现水平滚动条。

```html
<div class="table-responsive">
  <table class="table table-bordered table-sm table-striped table-hover">
    <tr>
      <td class="nobr">长长长长长长长长长长长长</td>
      <td class="nobr">长长长长长长长长长长长长</td>
      <td class="nobr">长长长长长长长长长长长长</td>
      <td class="nobr">长长长长长长长长长长长长</td>
      <td class="nobr">长长长长长长长长长长长长</td>
      <td class="nobr">长长长长长长长长长长长长</td>
    </tr>
  </table>
</div>
```

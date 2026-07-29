# 动画

内置了多种 CSS3 动画效果，包括进入动画、退出动画和强调动画，可通过添加对应的类名来触发。

使用 `.animated` 作为动画基础类，配合具体的动画名称类即可。可以结合 `.infinite`（循环）、`.forwards`（保持结束状态）、`.fast`/`.faster`/`.slower`（速度控制）等修饰类使用。

## 进入动画

进入动画使元素从隐藏状态过渡显示，通常配合点击等交互触发。

### fade 系列

```html
<button type="button" class="btn btn-primary">fadeIn</button>
<button type="button" class="btn btn-primary">fadeInUp</button>
<button type="button" class="btn btn-primary">fadeInDown</button>
<button type="button" class="btn btn-primary">fadeInLeft</button>
<button type="button" class="btn btn-primary">fadeInRight</button>
```

### bounce 系列

```html
<button type="button" class="btn btn-primary">bounceIn</button>
<button type="button" class="btn btn-primary">bounceInUp</button>
<button type="button" class="btn btn-primary">bounceInDown</button>
<button type="button" class="btn btn-primary">bounceInLeft</button>
<button type="button" class="btn btn-primary">bounceInRight</button>
```

### zoom 系列

```html
<button type="button" class="btn btn-primary">zoomIn</button>
<button type="button" class="btn btn-primary">zoomInUp</button>
<button type="button" class="btn btn-primary">zoomInDown</button>
<button type="button" class="btn btn-primary">zoomInLeft</button>
<button type="button" class="btn btn-primary">zoomInRight</button>
```

### rotate 系列

```html
<button type="button" class="btn btn-primary">rotateIn</button>
<button type="button" class="btn btn-primary">rotateInUpLeft</button>
<button type="button" class="btn btn-primary">rotateInDownLeft</button>
<button type="button" class="btn btn-primary">rotateInUpRight</button>
<button type="button" class="btn btn-primary">rotateInDownRight</button>
```

### slide 系列

```html
<button type="button" class="btn btn-primary">slideInUp</button>
<button type="button" class="btn btn-primary">slideInDown</button>
<button type="button" class="btn btn-primary">slideInLeft</button>
<button type="button" class="btn btn-primary">slideInRight</button>
```

### fly 系列

```html
<button type="button" class="btn btn-primary">flyInUp</button>
<button type="button" class="btn btn-primary">flyInDown</button>
<button type="button" class="btn btn-primary">flyInLeft</button>
<button type="button" class="btn btn-primary">flyInRight</button>
```

### flip 进入

```html
<button type="button" class="btn btn-primary">flipInX</button>
<button type="button" class="btn btn-primary">flipInY</button>
```

## 退出动画

退出动画使元素从显示状态过渡到隐藏，与进入动画一一对应。

### fade 退出

```html
<button type="button" class="btn btn-primary">fadeOut</button>
<button type="button" class="btn btn-primary">fadeOutUp</button>
<button type="button" class="btn btn-primary">fadeOutRight</button>
<button type="button" class="btn btn-primary">fadeOutDown</button>
<button type="button" class="btn btn-primary">fadeOutLeft</button>
```

### bounce 退出

```html
<button type="button" class="btn btn-primary">bounceOut</button>
<button type="button" class="btn btn-primary">bounceOutUp</button>
<button type="button" class="btn btn-primary">bounceOutDown</button>
<button type="button" class="btn btn-primary">bounceOutLeft</button>
<button type="button" class="btn btn-primary">bounceOutRight</button>
```

### rotate 退出

```html
<button type="button" class="btn btn-primary">rotateOut</button>
<button type="button" class="btn btn-primary">rotateOutUpLeft</button>
<button type="button" class="btn btn-primary">rotateOutDownLeft</button>
<button type="button" class="btn btn-primary">rotateOutUpRight</button>
<button type="button" class="btn btn-primary">rotateOutDownRight</button>
```

### zoom 退出

```html
<button type="button" class="btn btn-primary">zoomOut</button>
<button type="button" class="btn btn-primary">zoomOutUp</button>
<button type="button" class="btn btn-primary">zoomOutDown</button>
<button type="button" class="btn btn-primary">zoomOutLeft</button>
<button type="button" class="btn btn-primary">zoomOutRight</button>
```

### slide 退出

```html
<button type="button" class="btn btn-primary">slideOutUp</button>
<button type="button" class="btn btn-primary">slideOutDown</button>
<button type="button" class="btn btn-primary">slideOutLeft</button>
<button type="button" class="btn btn-primary">slideOutRight</button>
```

### fly 退出

```html
<button type="button" class="btn btn-primary">flyOutUp</button>
<button type="button" class="btn btn-primary">flyOutDown</button>
<button type="button" class="btn btn-primary">flyOutLeft</button>
<button type="button" class="btn btn-primary">flyOutRight</button>
```

### flip 退出

```html
<button type="button" class="btn btn-primary">flipOutX</button>
<button type="button" class="btn btn-primary">flipOutY</button>
```

## 强调动画

强调动作用于吸引用户注意力，适合需要突出展示的场景。

```html
<button type="button" class="btn btn-primary">bounce</button>
<button type="button" class="btn btn-primary">flash</button>
<button type="button" class="btn btn-primary">shake</button>
<button type="button" class="btn btn-primary">swing</button>
<button type="button" class="btn btn-primary">wobble</button>
<button type="button" class="btn btn-primary">tada</button>
<button type="button" class="btn btn-primary">pulse</button>
<button type="button" class="btn btn-primary">flip</button>
<button type="button" class="btn btn-primary">spin</button>
```

> **提示**：CSS3 动画不支持 IE9 及以下浏览器。

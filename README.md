# ting

公共样式库Common Style Lib

演示地址Demo

https://linsk1998.github.io/ting/

## 设计理念

- 统一命名方式
- 屏蔽实现细节
- 提供实用工具

## 指导原则

### 类名语义化

所有组件均为成品语义化封装，底层样式逻辑完全隐藏，开发者直接调用成品组件，将精力完全聚焦业务逻辑开发，而非样式拼接。

### 命名风格

本项目的风格是.{组件}-{状态}、.{组件}-{子元素}风格。示例：`.btn`、`.btn-primary`。以下这种`.btn.primary`组合使用的风格不是本项目的风格。同理，`.btn.is-disabled`、`.btn.disabled`也是一样的。但考虑到兼容 bootstrap，我提供了一个全局公用样式`.disabled`，这是公用的，不针对 `.btn`。

### 避免子元素选择器

例如 `.carousel-control>.left` 不是本项目的风格，应该写成 `.carousel-control-prev`。

### 渐进增强 & 优雅降级

本项目使用了渐进增强和优雅降级，低版本的浏览器中，样式会被降级为最基本的样式。

### 优先展示

bootstrap是优先隐藏的，比如 bootstrap 的`.collapse`是一个可折叠容器，默认是折叠的，加上`.show`出现。本项目用的是`.collapsible`默认是展开的，加上`.hide`隐藏。当然，也提供了`.collapse`来兼容 bootstrap。同理还有 `.navbar-collapse`、`.accordion-collapse`等。

### 不包含图标

本项目是纯样式库，样式中避免使用特定图标，有使用图标的地方都放到了 html 中维户，用户可以自己替换。示例中所使用的图标为 fontawesome。

### 动画支持浏览器关闭

所以动画都有同prefers-reduced-motion包裹，用户不想看到动画时，可以自行关闭。

## 和其他库的比较

和 tailwind 比较：

tailwind 只是换了一种方式去写样式，并没帮助开发者屏蔽样式编写中的复杂度，开发者仍然要思考样式怎么写。而ting-ui是让你直使用的，屏蔽了实现细节，业务人员能够专注于业务。

和 bootstrap 比较：

定位和bootstrap有些不同。1. bootstrap 对自身的定位更顷向于直接使用bootstrap 本体，ting-ui的更顷向于提供一套标准的编码规范，由不同主题来具体实现。2. bootstrap 越来越希望用工具类组合来解决问题，写的是这个元素有什么样式，ting-ui则写的是这个元素是什么？

和无头组件库比较：

ting-ui的思想比较接近无头组件库。但是无头组件库是毫无样式的，ting-ui提供了最基本的样式，和开发主题的方案。

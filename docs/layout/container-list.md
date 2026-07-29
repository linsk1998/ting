## 布局容器

.container 类用于固定宽度并支持响应式布局的容器。
		
```html
<div class="container">
    ...
</div>
```

.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。

```html
<div class="container-fluid">
    ...
</div>
```

| 类 | 描述 |
|---|---|
| .container | 用于固定宽度居中并支持响应式。 |
| .container-{size} | 直到指定断点为止是 width: 100%。 |
| .container-fluid | 用于 100% 宽度，占据全部视口（viewport）的容器。 |
		
| 类 | ~ 576px | 576px ~ 992px | 992px ~ 1400px | 1400px ~ 1700px | 1700px ~ |
|---|---|---|---|---|---|
| .container-sm | 100% | 546px | 1002px | 1134px | 1362px |
| .container-md, .container | 100% | 100% | 1002px | 1134px | 1362px |
| .container-lg | 100% | 100% | 100% | 1134px | 1362px |
| .container-xl | 100% | 100% | 100% | 100% | 1362px |
| .container-fluid | 100% | 100% | 100% | 100% | 100% |

[例子](container.html)

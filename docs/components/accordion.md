# 手风琴

手风琴（`.accordion`）将多个可折叠面板组织在一起。

## 基本用法

`.accordion` 容器内包含多个 `.accordion-item`，每个含头部（`.accordion-header` + `.accordion-button`）和可折叠内容（`.accordion-collapsible` + `.accordion-body`）。

```html
<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #1
      </button>
    </h2>
    <div class="accordion-collapsible">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-collapsed">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #2
      </button>
    </h2>
    <div class="accordion-collapsible">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-collapsed">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #3
      </button>
    </h2>
    <div class="accordion-collapsible">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```

## 使用图标

可以用`.accordion-icon`将图标定位到特定位置。

```html
<div class="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #1
        <i class="accordion-icon fa">&#xf077;</i>
      </button>
    </h2>
    <div class="accordion-collapsible">
        <div class="accordion-body">收起</div>
    </div>
  </div>
  <div class="accordion-item accordion-collapsed">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #2
        <i class="accordion-icon fa">&#xf078;</i>
      </button>
    </h2>
    <div class="accordion-collapsible">
        <div class="accordion-body">展开</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #3
        <i class="accordion-icon fa">&#xf068;</i>
      </button>
    </h2>
    <div class="accordion-collapsible">
        <div class="accordion-body">减号</div>
    </div>
  </div>
  <div class="accordion-item accordion-collapsed">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #4
        <i class="accordion-icon fa">&#xf067;</i>
      </button>
    </h2>
    <div class="accordion-collapsible">
        <div class="accordion-body">加号</div>
    </div>
  </div>
</div>
```

## 去除边框

可以用`.accordion-flush`可以去除四周边框，可以放入已有边框的容器中。

```html
<div class="accordion accordion-flush">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #1
      </button>
    </h2>
    <div class="accordion-collapsible">
        <div class="accordion-body">1</div>
    </div>
  </div>
  <div class="accordion-item accordion-collapsed">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #2
      </button>
    </h2>
    <div class="accordion-collapsible">
        <div class="accordion-body">2</div>
    </div>
  </div>
  <div class="accordion-item accordion-collapsed">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button">
        Accordion Item #3
      </button>
    </h2>
    <div class="accordion-collapsible">
        <div class="accordion-body">3</div>
    </div>
  </div>
</div>
```

## 适配容器高度


```html
<div class="row">
    <div class="col-md-6">
        <div style="width: 300px; height: 400px; overflow-y: auto;">
            <div class="accordion accordion-fill">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button">
                            包含边框
                        </button>
                    </h2>
                    <div class="accordion-collapsible">
                        <div class="accordion-body">
                            很多内容：<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item accordion-collapsed">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div class="accordion-collapsible">
                        <div class="accordion-body">
                            少内容
                        </div>
                    </div>
                </div>
                <div class="accordion-item accordion-collapsed">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div class="accordion-collapsible">
                        <div class="accordion-body">
                            少内容
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div style="width: 300px; height: 400px; overflow-y: auto;">
            <div class="accordion accordion-flush accordion-fill">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button">
                            去除边框
                        </button>
                    </h2>
                    <div class="accordion-collapsible">
                        <div class="accordion-body">
                            很多内容：<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item accordion-collapsed">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div class="accordion-collapsible">
                        <div class="accordion-body">
                            少内容
                        </div>
                    </div>
                </div>
                <div class="accordion-item accordion-collapsed">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div class="accordion-collapsible">
                        <div class="accordion-body">
                            少内容
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 黑暗模式

使用`.accordion-dark`或容器上使用`.dark`可以开启黑暗模式。如果使用`.accordion-dark`一般还要额外添加`.dark`，使得子组件也是黑暗模式。

```html
<div style="width: 300px; border: 4px solid #000;">
    <div class="accordion accordion-dark dark">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button">
                    Accordion Item #1
                </button>
            </h2>
            <div class="accordion-collapsible">
                <div class="accordion-body">
                    1
                </div>
            </div>
        </div>
        <div class="accordion-item accordion-collapsed">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button">
                    Accordion Item #2
                </button>
            </h2>
            <div class="accordion-collapsible">
                <div class="accordion-body">
                    2
                </div>
            </div>
        </div>
        <div class="accordion-item accordion-collapsed">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button">
                    Accordion Item #3
                </button>
            </h2>
            <div class="accordion-collapsible">
                <div class="accordion-body">
                    3
                </div>
            </div>
        </div>
    </div>
</div>
```

## 兼容 bootstrap 写法

bootstrap 使用 `accordion-collapse collapse`，ting-ui 使用 `accordion-collapsible`。bootstrap 没有 `accordion-fill` 功能。

```html
<div class="accordion" id="bs-accordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-toggle="collapse" data-parent="#bs-accordion" data-target="#accordion1">
        Accordion Item #1
      </button>
    </h2>
    <div id="accordion1" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-parent="#bs-accordion" data-target="#accordion2">
        Accordion Item #2
      </button>
    </h2>
    <div id="accordion2" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-parent="#bs-accordion" data-target="#accordion3">
        Accordion Item #3
      </button>
    </h2>
    <div id="accordion3" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```

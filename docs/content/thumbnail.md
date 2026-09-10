# 缩略图

通过缩略图组件扩展和栅格系统，可以很容易地展示栅格样式的图像、视频、文本等内容。

## 链接缩略图

使用 `.thumbnail` 将整张图片作为链接，配合栅格系统可在一行内排列多个缩略图。

```html
<div class="row row-gx-4">
	<div class="col-md-4 col-gx-4">
		<a href="#" class="thumbnail"><img src="../images/devices.jpg"/></a>
	</div>
	<div class="col-md-4 col-gx-4">
		<a href="#" class="thumbnail"><img src="../images/devices.jpg"/></a>
	</div>
	<div class="col-md-4 col-gx-4">
		<a href="#" class="thumbnail"><img src="../images/devices.jpg"/></a>
	</div>
</div>
```

## 带说明文字的缩略图

在 `.thumbnail` 内使用 `.caption` 承载标题、描述和操作按钮等内容。

```html
<div class="row row-gx-4">
	<div class="col-md-4 col-gx-4">
        <div class="thumbnail">
            <img src="../images/devices.jpg"/>
            <div class="caption">
                <h3>Thumbnail label</h3>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
            </div>
        </div>
	</div>
	<div class="col-md-4 col-gx-4">
        <div class="thumbnail">
            <img src="../images/devices.jpg"/>
        </div>
	</div>
	<div class="col-md-4 col-gx-4">
        <div class="thumbnail">
            <img src="../images/devices.jpg"/>
        </div>
	</div>
</div>
```

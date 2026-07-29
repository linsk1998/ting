## 媒体对象

专门解决图文混排、评论列表、消息流、动态信息流等场景的统一排版问题。

			
| 类 | 描述 |
|---|---|
| .media | 媒体组件外层容器，使用弹性布局，统一管理图文间距，支持媒体嵌套 |
| .media-left | 左侧媒体容器，放置头像、缩略图，默认居上对齐 |
| .media-right | 右侧媒体容器，图片放置在文本内容右侧 |
| .media-center | 媒体主体内容容器，自动自适应剩余宽度，承载标题、正文、嵌套媒体 |
| .media-object | 媒体内部图片专用类，清除图片默认边距、适配容器宽高，防止溢出 |
| .media-heading | 媒体内容标题，自带底部间距，区分标题与正文文本 |
| .media-middle | 配合 .media-left / .media-right 使用，图片垂直居中对齐 |
| .media-bottom | 配合 .media-left / .media-right 使用，图片垂直底部对齐 |
| .media-list | 媒体列表外层，清除列表默认内外边距，批量渲染多条 media 评论/信息流 |

			
```html
<div class="media">
	<div class="media-left">
		<a href="#"><img class="media-object" src="http://placeholder.qiniudn.com/64x64" width="64" height="64"/></a>
	</div>
	<div class="media-right">
		<a href="#"><img class="media-object" src="http://placeholder.qiniudn.com/64x64" width="64" height="64"/></a>
	</div>
	<div class="media-center">
		<h4 class="media-heading">Media heading</h4>
		Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
	</div>
</div>
```

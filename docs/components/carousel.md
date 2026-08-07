# 轮播图

轮播图用于循环展示一系列内容，支持图片轮播、指示器导航和前后切换。

## 基本用法

`.carousel` 容器内包含图片、文字说明（`.carousel-caption`）、前后控制按钮（`.carousel-control-prev` / `.carousel-control-next`）和底部指示器（`.carousel-indicators`）。

```html
<div class="carousel" role="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width="100%" src="../images/functions.jpg"/>
      <div class="carousel-caption">
        <h3>金坷垃</h3>
        <p>肥料掺了金坷垃，一袋能顶两袋撒。来自美国的金坷垃是美国肥料研究中心CNT的最新科技成果。</p>
      </div>
    </div>
    <div class="carousel-item">
      <img width="100%" src="../images/github.jpg"/>
      <div class="carousel-caption">
        <h3>金氮丹</h3>
        <p>金氮丹是来自大洋彼岸的美国品牌，含有β乳胶剂,与土壤合为一体，下雨不流失，日晒不挥发，从而使肥料的利用率大幅增加，是全球唯一不怕日晒雨淋的肥料，让世界农民刮目相看。</p>
      </div>
    </div>
    <div class="carousel-item">
      <img width="100%" src="../images/devices.jpg"/>
      <div class="carousel-caption">
        <h3>凭良心</h3>
        <p>本品是国际最安全环保型的广谱专用杀虫剂，采用国际领先生产设备。</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev fa" href="javascript:;">&#xf104;</a>
  <a class="carousel-control-next fa" href="javascript:;">&#xf105;</a>
  <ol class="carousel-indicators">
    <li class="active fa">&#xf111;</li>
    <li class="fa">&#xf111;</li>
    <li class="fa">&#xf111;</li>
  </ol>
</div>
```

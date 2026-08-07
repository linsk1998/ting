# 选择按钮

下拉选择按钮（`.select`）提供自定义样式的选择控件，支持下拉菜单、占位、置灰、加载中、错误重试等多种状态。

## 选择按钮的不同状态

### 基本用法

```html
<form class="form">
    <div class="form-group">
        <label class="form-label">基本用法</label>
        <div class="select dropdown">
            <input type="hidden">
            <button type="button" class="select-btn" popovertarget="myPop">
                <span class="select-label">金坷拉</span>
                <div class="select-icon caret"></div>
            </button>
            <button type="button" class="control-clear fa">&#xf057;</button>
            <ul id="myPop" class="dropdown-menu" popover>
                <li><button type="button" class="dropdown-item" popovertarget="myPop" popovertargetaction="hide">在线咨询</button></li>
                <li><button type="button" class="dropdown-item" popovertarget="myPop" popovertargetaction="hide">领导信箱</button></li>
                <li><button type="button" class="dropdown-item" popovertarget="myPop" popovertargetaction="hide">在线访谈</button></li>
                <li role="separator" class="dropdown-divider"></li>
                <li><button type="button" class="dropdown-item" popovertarget="myPop" popovertargetaction="hide">网站投稿</button></li>
            </ul>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">空白占位</label>
        <input type="hidden">
        <div class="select">
            <button type="button" class="select-btn">
                <span class="select-placeholder">请选择XXX</span>
                <div class="select-icon caret"></div>
            </button>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">置灰</label>
        <input type="hidden">
        <div class="select select-disabled">
            <button type="button" class="select-btn" disabled>
                <span class="select-label">金坷拉</span>
                <div class="caret select-icon"></div>
            </button>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">置灰空白占位</label>
        <input type="hidden">
        <div class="select select-disabled">
            <button type="button" class="select-btn" disabled>
                <span class="select-placeholder">请选择XXX</span>
                <div class="caret select-icon"></div>
            </button>
        </div>
    </div>
</form>
```

### 加载中

```html
<form class="form">
    <div class="form-group">
        <label class="form-label">加载中</label>
        <input type="hidden">
        <div class="select select-loading">
            <button type="button" class="select-btn" disabled>
                <span class="select-label">金坷拉</span>
                <div class="select-icon icon loading-circular"></div>
            </button>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">加载中空白占位</label>
        <input type="hidden">
        <div class="select select-loading">
            <button type="button" class="select-btn" disabled>
                <span class="select-placeholder">加载中...</span>
                <div class="select-icon icon loading-circular"></div>
            </button>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">错误重试</label>
        <input type="hidden">
        <div class="select">
            <button type="button" class="select-btn">
                <span class="select-msg text-danger">网络加载错误</span>
                <div class="select-icon icon fa fa-refresh"></div>
            </button>
        </div>
    </div>
</form>
```

## 组件大小

`.select-lg` / `.select-sm` 控制选择按钮大小，可配合 `.form-group-lg` / `.form-group-sm`（此时 `.select` 无需额外尺寸类）。

```html
<form class="form-horizontal">
    <div class="form-group">
        <label class="form-label">select-lg</label>
        <div class="select select-lg">
            <button type="button" class="select-btn">
                <span class="select-label">金坷拉</span>
                <div class="select-icon caret"></div>
            </button>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">select-sm</label>
        <div class="select select-sm">
            <button type="button" class="select-btn">
                <span class="select-label">金坷拉</span>
                <div class="select-icon caret"></div>
            </button>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
    <div class="form-group form-group-lg">
        <label class="form-label">form-group-lg</label>
        <div class="select">
            <button type="button" class="select-btn">
                <span class="select-label">金坷拉</span>
                <div class="select-icon caret"></div>
            </button>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
    <div class="form-group form-group-sm">
        <label class="form-label">form-group-sm</label>
        <div class="select">
            <button type="button" class="select-btn">
                <span class="select-label">金坷拉</span>
                <div class="select-icon caret"></div>
            </button>
            <button type="button" class="control-clear fa">&#xf057;</button>
        </div>
    </div>
</form>
```

## 字段校验

在 `.form-group` 上添加 `.has-invalid`，控件边框自动变红。支持全部 7 种状态，其中置灰态可额外加 `.is-invalid` 保持红色边框。

```html
<form class="form">
    <div class="form-group has-invalid">
        <label class="form-label">基本用法</label>
        <input type="hidden">
        <div class="select">
            <button type="button" class="select-btn">
                <span class="select-label">金坷拉</span>
                <div class="select-icon caret"></div>
            </button>
        </div>
    </div>
    <div class="form-group has-invalid">
        <label class="form-label">空白占位</label>
        <input type="hidden">
        <div class="select">
            <button type="button" class="select-btn">
                <span class="select-placeholder">请选择XXX</span>
                <div class="select-icon caret"></div>
            </button>
        </div>
    </div>
    <div class="form-group has-invalid">
        <label class="form-label">置灰</label>
        <input type="hidden">
        <div class="select select-disabled is-invalid">
            <button type="button" class="select-btn" disabled>
                <span class="select-label">金坷拉</span>
                <div class="caret select-icon"></div>
            </button>
        </div>
    </div>
    <div class="form-group has-invalid">
        <label class="form-label">置灰空白占位</label>
        <input type="hidden">
        <div class="select select-disabled">
            <button type="button" class="select-btn" disabled>
                <span class="select-placeholder">请选择XXX</span>
                <div class="caret select-icon"></div>
            </button>
        </div>
    </div>
    <div class="form-group has-invalid">
        <label class="form-label">加载中</label>
        <input type="hidden">
        <div class="select select-loading">
            <button type="button" class="select-btn" disabled>
                <span class="select-label">金坷拉</span>
                <div class="select-icon icon loading-circular"></div>
            </button>
        </div>
    </div>
    <div class="form-group has-invalid">
        <label class="form-label">加载中空白占位</label>
        <input type="hidden">
        <div class="select select-loading">
            <button type="button" class="select-btn" disabled>
                <span class="select-placeholder">加载中...</span>
                <div class="select-icon icon loading-circular"></div>
            </button>
        </div>
    </div>
    <div class="form-group has-invalid">
        <label class="form-label">错误重试</label>
        <input type="hidden">
        <div class="select">
            <button type="button" class="select-btn" disabled>
                <span class="select-msg text-danger">网络加载错误</span>
                <div class="select-icon icon fa fa-refresh"></div>
            </button>
        </div>
    </div>
</form>
```

## 表单验证

配合 `.has-valid` / `.has-invalid` + `.has-feedback-icon`，`feedback-icon` 和 `control-clear` 放在 `.select` 内。

```html
<form class="form-horizontal">
    <div class="form-group has-valid has-feedback-icon">
        <label class="form-label">has-valid</label>
        <div class="select">
            <button type="button" class="select-btn">
                <span class="select-label">金坷拉</span>
                <div class="select-icon caret"></div>
            </button>
            <button type="button" class="control-clear fa">&#xf057;</button>
            <i class="feedback-icon fa">&#xf00c;</i>
        </div>
    </div>
    <div class="form-group has-invalid has-feedback-icon">
        <label class="form-label">has-invalid</label>
        <div class="select">
            <button type="button" class="select-btn">
                <span class="select-label">金坷拉</span>
                <div class="select-icon caret"></div>
            </button>
            <button type="button" class="control-clear fa">&#xf057;</button>
            <i class="feedback-icon fa">&#xf00d;</i>
        </div>
    </div>
</form>
```

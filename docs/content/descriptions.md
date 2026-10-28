# 描述列表

列表形式展示多个字段。通过 `.descriptions` 以表格的形式展示一组键值对信息，常用于详情页、个人中心等场景。

## 基础用法

`.descriptions` 默认以表格形式展示，每个字段由标签（`.descriptions-label`）和内容（`.descriptions-content`）组成，标签与内容依次排列。标签使用语义化的 `th` 元素，便于屏幕阅读器识别。

```html
<div class="descriptions">
    <table class="descriptions-table">
        <colgroup>
            <col width="20%">
            <col>
            <col width="20%">
            <col>
        </colgroup>
        <tbody>
            <tr class="descriptions-row">
                <th class="descriptions-label">用户名</th>
                <td class="descriptions-content">king</td>
                <th class="descriptions-label">邮箱</th>
                <td class="descriptions-content">king@example.com</td>
            </tr>
            <tr class="descriptions-row">
                <th class="descriptions-label">状态</th>
                <td class="descriptions-content">正常</td>
                <th class="descriptions-label">注册时间</th>
                <td class="descriptions-content">2020-01-01</td>
            </tr>
        </tbody>
    </table>
</div>
```

## 带边框

添加 `.descriptions-bordered` 为每个单元格添加边框，标签列带有浅色背景，更适合信息密集的展示场景。

```html
<div class="descriptions descriptions-bordered">
    <table class="descriptions-table">
        <colgroup>
            <col width="15%">
            <col>
            <col width="15%">
            <col>
            <col width="15%">
            <col>
        </colgroup>
        <tbody>
            <tr class="descriptions-row">
                <th class="descriptions-label">用户名</th>
                <td class="descriptions-content">king</td>
                <th class="descriptions-label">邮箱</th>
                <td class="descriptions-content">king@example.com</td>
                <th class="descriptions-label">状态</th>
                <td class="descriptions-content">正常</td>
            </tr>
            <tr class="descriptions-row">
                <th class="descriptions-label">注册时间</th>
                <td class="descriptions-content">2020-01-01</td>
                <th class="descriptions-label">最后登录</th>
                <td class="descriptions-content">2026-08-01</td>
                <th class="descriptions-label">所属部门</th>
                <td class="descriptions-content">研发部</td>
            </tr>
        </tbody>
    </table>
</div>
```

## 标题

```html
<div class="descriptions descriptions-bordered">
    <div class="descriptions-header">用户信息</div>
    <table class="descriptions-table">
        <colgroup>
            <col width="15%">
            <col>
            <col width="15%">
            <col>
            <col width="15%">
            <col>
        </colgroup>
        <tbody>
            <tr class="descriptions-row">
                <th class="descriptions-label">用户名</th>
                <td class="descriptions-content">king</td>
                <th class="descriptions-label">邮箱</th>
                <td class="descriptions-content">king@example.com</td>
                <th class="descriptions-label">状态</th>
                <td class="descriptions-content">正常</td>
            </tr>
            <tr class="descriptions-row">
                <th class="descriptions-label">注册时间</th>
                <td class="descriptions-content">2020-01-01</td>
                <th class="descriptions-label">最后登录</th>
                <td class="descriptions-content">2026-08-01</td>
                <th class="descriptions-label">所属部门</th>
                <td class="descriptions-content">研发部</td>
            </tr>
        </tbody>
    </table>
</div>
```

## 紧凑

添加 `.descriptions-sm` 紧凑的展示形式，适合表单的展示场景。

```html
<form class="form">
    <div class="descriptions descriptions-bordered descriptions-sm">
        <div class="descriptions-header">用户信息</div>
        <table class="descriptions-table">
            <colgroup>
                <col width="15%">
                <col>
                <col width="15%">
                <col>
                <col width="15%">
                <col>
            </colgroup>
            <tbody>
                <tr class="descriptions-row">
                    <th class="descriptions-label">用户名</th>
                    <td class="descriptions-content">
                        <input class="form-control" type="text" value="king">
                    </td>
                    <th class="descriptions-label">邮箱</th>
                    <td class="descriptions-content">
                        <input class="form-control" type="text" value="king@example.com">
                    </td>
                    <th class="descriptions-label">状态</th>
                    <td class="descriptions-content">
                        <select class="form-control">
                            <option value="0">正常</option>
                            <option value="1">禁用</option>
                        </select>
                    </td>
                </tr>
                <tr class="descriptions-row">
                    <th class="descriptions-label">注册时间</th>
                    <td class="descriptions-content">
                        <input class="form-control" type="text" value="2020-01-01">
                    </td>
                    <th class="descriptions-label">最后登录</th>
                    <td class="descriptions-content">
                        <input class="form-control" type="text" value="2026-08-01">
                    </td>
                    <th class="descriptions-label">所属部门</th>
                    <td class="descriptions-content">
                        <input class="form-control" type="text" value="研发部">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</form>
```

---
title: Markdown 教程
published: 2025-01-20
pinned: true
description: 一篇用于演示博客写作的 Markdown 示例文章。
lang: zh_CN
translationKey: markdown-tutorial
tags: [Markdown, 写作]
category: 示例
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
---

# Markdown 教程

这是一篇中文版 Markdown 示例文章，用来演示在博客里如何组织标题、段落、列表、代码块、表格、链接和图片。

## 块级元素

### 段落与换行

Markdown 通过空行来分隔段落；如果你想在同一段里强制换行，可以在行尾保留两个空格。

示例：

```markdown
这是第一段。

这是第二段。

这是一行  
这是同一段中的下一行。
```

### 标题

最常见的写法是使用 `#`：

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 引用

引用适合放提示、说明或摘录内容：

```markdown
> 这是一段引用。
> 它可以跨越多行。
```

### 列表

无序列表可以使用 `-`、`*` 或 `+`，有序列表则使用数字加句点：

```markdown
- 苹果
- 香蕉
- 橙子

1. 第一步
2. 第二步
3. 第三步
```

### 代码块

你可以使用三个反引号包裹代码，也可以指定语言高亮：

```markdown
```ts
function greet(name: string) {
  return `Hello, ${name}`;
}
```
```

## 常用行内语法

### 强调

```markdown
*斜体*
**粗体**
`行内代码`
```

效果：

*斜体*  
**粗体**  
`行内代码`

### 链接

```markdown
[Astro 官网](https://astro.build/)
```

### 图片

```markdown
![示意图](/path/to/image.jpg)
```

### 删除线

```markdown
~~这段文字会显示为删除线~~
```

## 表格

Markdown 也很适合写简单表格：

```markdown
| 功能 | 说明 |
| --- | --- |
| 标题 | 使用 `#` |
| 列表 | 使用 `-` 或数字 |
| 代码 | 使用反引号 |
```

效果：

| 功能 | 说明 |
| --- | --- |
| 标题 | 使用 `#` |
| 列表 | 使用 `-` 或数字 |
| 代码 | 使用反引号 |

## 内联 HTML

当 Markdown 自带语法不够用时，也可以直接插入 HTML：

```html
<details>
  <summary>点击展开</summary>
  <p>这里是更多内容。</p>
</details>
```

## 总结

如果你只是写博客、笔记或文档，Markdown 已经足够覆盖绝大多数场景。建议先掌握标题、段落、列表、代码块和链接，再逐步加入表格、引用和 HTML 扩展。

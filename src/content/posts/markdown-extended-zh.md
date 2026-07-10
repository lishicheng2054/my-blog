---
title: Markdown 扩展能力
published: 2024-05-01
updated: 2024-11-29
description: 进一步了解 Mizuki 中可用的 Markdown 扩展能力。
image: ""
lang: zh_CN
translationKey: markdown-extended
tags: [示例, Markdown, Mizuki]
category: 示例
draft: false
---

## GitHub 仓库卡片

你可以在文章里直接插入 GitHub 仓库卡片，页面加载后会自动拉取仓库信息。

::github{repo="LyraVoid/Mizuki"}

对应写法：

```markdown
::github{repo="LyraVoid/Mizuki"}
```

## 提示块 Admonitions

Mizuki 支持常见的提示块类型：`note`、`tip`、`important`、`warning`、`caution`。

:::note
适合放读者快速浏览时也不该错过的信息。
:::

:::tip
适合放补充建议或更高效的使用方式。
:::

:::important
适合放必须注意的关键说明。
:::

:::warning
适合放有风险或容易踩坑的内容。
:::

## 自定义标题

你也可以给提示块自定义标题：

:::note[自定义标题]
这是一个带有自定义标题的说明块。
:::

## GitHub 风格语法

GitHub 的提示块写法同样可用：

```markdown
> [!TIP]
> 这是一条提示信息。
```

## Spoiler 隐藏内容

你可以在正文里加入折叠/隐藏内容：

示例：

`这里有一段 :spoiler[被隐藏的内容]。`

效果：

这里有一段 :spoiler[被隐藏的内容]。

## 总结

这些扩展能力可以让 Markdown 不再只是“纯文本格式”，而是更接近一个可读性强、表达力足够的技术写作系统。

---
title: Mizuki 使用指南
published: 2024-04-01
description: 如何使用这个博客模板的简明中文说明。
image: "guide/cover.webp"
lang: zh_CN
translationKey: guide-index
tags: ["Mizuki", "博客", "自定义"]
category: 指南
draft: false
---

这套博客模板基于 [Astro](https://astro.build/) 构建。如果你在这篇指南里没有找到答案，通常还可以去 Astro 官方文档继续查阅。

## 文章 Front-matter

一篇最基础的文章大概会长这样：

```yaml
---
title: 我的第一篇博客
published: 2023-09-09
description: 这是我的第一篇博客文章。
image: ./cover.jpg
tags: [前端, 博客]
category: 教程
draft: false
---
```

## 常见字段说明

| 字段 | 作用 |
| --- | --- |
| `title` | 文章标题 |
| `published` | 发布时间 |
| `description` | 文章简介 |
| `image` | 封面图路径 |
| `tags` | 标签列表 |
| `category` | 分类名称 |
| `draft` | 是否为草稿 |

## 文章文件放哪里

文章建议放在 `src/content/posts/` 目录中。你也可以根据需要建立子目录来管理封面图和内容资源。

```text
src/content/posts/
├── post-1.md
└── guide/
    ├── cover.webp
    └── index.md
```

## 实际使用建议

- 如果文章有封面，最好把图片和文章放在同一个主题目录中。
- 如果是系列文章，可以按分类或专题建立子目录。
- 如果文章还没写完，把 `draft` 设为 `true` 即可。

## 总结

Mizuki 的文章结构很轻量，适合个人博客长期维护。你只需要掌握 front-matter、图片路径和目录组织这三点，就能比较顺手地开始写内容。

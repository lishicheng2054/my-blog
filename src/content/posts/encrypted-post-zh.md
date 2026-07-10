---
title: 加密文章示例
published: 2024-01-15
description: 这是一篇用来测试页面加密功能的文章。
lang: zh_CN
translationKey: encrypted-post
encrypted: true
pinned: true
password: "123456"
passwordHint: "123456"
hideHomeContent: true
alias: "encrypted-example"
tags: ["测试", "加密"]
category: "技术"
draft: false
---

这篇文章用于演示 Mizuki 的文章加密能力，也就是只有输入正确密码后，正文内容才会显示出来。

## 基本写法

```yaml
---
title: 私密文章
published: 2024-01-15
encrypted: true
password: "my-secret-password"
passwordHint: "提示：它是我的宠物名字"
hideHomeContent: true
---
```

## 字段说明

| 字段 | 说明 |
| --- | --- |
| `encrypted` | 是否启用加密 |
| `password` | 访问密码 |
| `passwordHint` | 密码提示 |
| `hideHomeContent` | 是否在首页、摘要和分享卡里隐藏正文简介 |

## 使用场景

- 放私人备忘或半公开内容
- 给特定读者分享文章
- 测试博客的加密交互能力

## 解锁后的体验

解锁框通常会显示：

- 一个锁图标
- 文章标题
- 密码输入框
- 解锁按钮
- 可选的密码提示

输入正确密码后，正文会被解密并显示；在同一会话中，访问者不需要重复输入密码。

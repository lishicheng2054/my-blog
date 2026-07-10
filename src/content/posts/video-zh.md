---
title: 在文章中嵌入视频
published: 2022-08-01
description: 这篇文章演示如何在博客文章中嵌入视频内容。
lang: zh_CN
translationKey: video-post
tags: [示例, 视频]
category: 示例
draft: false
---

在 Mizuki 的文章中嵌入视频其实很简单，通常只需要把平台提供的嵌入代码直接贴进 Markdown 文件即可。

## 基本示例

```yaml
---
title: 在文章中嵌入视频
published: 2023-10-19
---

<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
```

## YouTube

<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Bilibili

<iframe width="100%" height="468" src="//player.bilibili.com/player.html?bvid=BV1fK4y1s7Qf&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" &autoplay=0> </iframe>

## 使用建议

- 视频宽度建议使用 `100%`，方便适配移动端。
- 高度可以根据页面布局适当调整。
- 如果文章较长，建议在视频前后加上简短说明，帮助读者理解上下文。

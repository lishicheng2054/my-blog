---
title: Markdown 与 Mermaid 图表
published: 2023-10-01
pinned: false
description: 一篇展示如何在 Markdown 中使用 Mermaid 图表的示例文章。
lang: zh_CN
translationKey: markdown-mermaid
tags: [Markdown, Mermaid, 图表]
category: 示例
draft: false
---

# Markdown 与 Mermaid 图表完整指南

这篇文章演示如何在 Markdown 文档里插入 Mermaid 图表，包括流程图、时序图、甘特图、类图和状态图。

## 流程图

流程图适合表示业务流程或算法步骤。

```mermaid
graph TD
    A[开始] --> B{条件判断}
    B -->|是| C[处理步骤 1]
    B -->|否| D[处理步骤 2]
    C --> E[子流程]
    D --> E
    E --> F[结束]
```

## 时序图

时序图非常适合表达用户、前端、服务端和数据库之间的交互过程。

```mermaid
sequenceDiagram
    participant 用户
    participant 前端
    participant 服务端
    participant 数据库

    用户->>前端: 提交登录请求
    前端->>服务端: 发送认证信息
    服务端->>数据库: 查询用户数据
    数据库-->>服务端: 返回结果
    服务端-->>前端: 登录成功
    前端-->>用户: 渲染欢迎页面
```

## 甘特图

如果你想在文档里说明项目排期，甘特图会非常直观。

```mermaid
gantt
    title 博客改版计划
    dateFormat  YYYY-MM-DD

    section 设计
    风格参考          :a1, 2026-07-01, 3d
    页面草图          :a2, after a1, 4d

    section 开发
    首页改造          :b1, after a2, 5d
    文章页改造        :b2, after b1, 4d

    section 发布
    测试与部署        :c1, after b2, 3d
```

## 类图

类图适合说明系统里实体之间的结构关系。

```mermaid
classDiagram
    class User {
        +String username
        +String email
        +login()
    }

    class Article {
        +String title
        +String content
        +publish()
    }

    class Comment {
        +String content
        +addComment()
    }

    User "1" -- "*" Article : writes
    Article "1" -- "*" Comment : has
```

## 状态图

状态图适合描述一篇文章从草稿到发布再到归档的变化过程。

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Review : submit
    Review --> Draft : reject
    Review --> Published : approve
    Published --> Archived : archive
    Archived --> [*]
```

## 总结

Mermaid 最大的好处是写法轻量、可维护性高，非常适合技术博客、项目文档和知识库。只要在 Markdown 代码块中声明 `mermaid`，就能把文本描述转换成结构清晰的图表。

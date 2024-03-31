---
title: hexo next 主题优化
tags:
  - hexo
author: 孙贺毅
slug: '423546907'
pubDate: 2023-05-29 18:11:59
updated: 2023-05-29T18:11:59.000Z
ogImage: https://top-img.pupper.cn/top-img/top-img-109.webp

---

记录一下我对于hexo的优化

<!-- more -->

## 标签页

去除标签页下面显示的标签二字

```html
title: 
```

标签页那个md title 为空就可以了

> blogSource/source/tags/index.md
>
> blogSource是 博客根目录

### 关闭评论

添加comments: false即可

```html
comments: false
```




---
title: hexo next 圆角边框
tags:
  - hexo
author: 孙贺毅
slug: '4168057682'
pubDate: 2023-05-29 16:37:48
updated: 2023-05-29T16:37:48.000Z
ogImage: https://top-img.pupper.cn/top-img/top-img-220.webp

---

简单设置就可以了

<!-- more -->

> 以前的那种在source/_datavariables.styl文件中修改的不管用了 只能自己来了

## 主题设置

```yaml
custom_file_path:
  style: source/_data/styles.styl
```

主要是styles这个文件启用就好了

## styles.styl

```yaml
.fadeIn{
      border-radius:20px;  /* 矩形有圆角 */
}
```

> 其实很快就搞出来，直接f12 试试就行了

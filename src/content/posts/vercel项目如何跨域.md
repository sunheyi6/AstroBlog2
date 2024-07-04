---
title: vercel项目如何跨域
tags:
  - vercel
author: 孙贺毅
slug: 'vercelCors'
pubDate: 2024-07-04
ogImage: https://top-img.pupper.cn/top-img/top-img-182.webp

---

其实很简单，在你的项目根目录下新建一个vercel.json

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Credentials", "value": "true" },
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
      ]
    }
  ]
}
```
source 就是允许跨域的路径，我这边设置的是所有路径，即在这个网站上任何路径跨域都是可以的

---
title: astro添加谷歌分析
tags:
  - 年度总结
pubDate: 2024-07-04
author: 孙贺毅
slug: 'astroGoogleAnalysis'
featured: false
ogImage: https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png
description: ""
---
## 安装partytown
```shell
pnpm install @astrojs/partytown
```
## 启用partytown,在astro.config.ts文件下添加下列文件
```ts
import partytown from '@astrojs/partytown'

export default defineConfig({
  integrations: [
      partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ]
});
```
## header.astro文件添加谷歌分析代码
```javascript
<!-- Google tag (gtag.js) -->
<script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-MZXCQSZ8FT"></script>
<script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '你的谷歌代码');
</script>
```
## 测试是否成功
在谷歌分析中这个页面可以进行测试的
![](https://shyblog.oss-cn-beijing.aliyuncs.com/img/PixPin_2024-07-04_12-05-28.png)

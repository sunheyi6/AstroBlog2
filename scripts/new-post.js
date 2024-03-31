import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 日期格式化函数
function formatTimestamp(date) {
  const pad = (number) => number.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 获取文章标题
const args = process.argv.slice(2); // 获取所有参数，排除前两个元素
if (args.length === 0) {
  console.error('Error: No article title provided!');
  process.exit(1);
}
const title = args.join(' '); // 将参数数组合并为一个字符串

// 将标题转换成文件名
const filename = title.toLowerCase().replace(/\s+/g, '-') + '.md';

// 文件路径拼接
const filepath = path.join(__dirname,'..', 'src', 'content', 'posts', filename);

// 检查文件是否已存在
if (fs.existsSync(filepath)) {
  console.error('Error: File already exists!');
  process.exit(1);
}

// 获取当前日期和时间
const timestamp = formatTimestamp(new Date());

// 创建新的文章文件并写入头部信息
const header = `---
title: ${title}
pubDate: ${timestamp}
categories: []
description: ''
---

`;

// 写入文件
fs.writeFile(filepath, header, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Successfully created a new article: ${filepath}`);
});
const paths = require('path');

// 获取文件目录
const dirname = paths.dirname('/Event/index1.js');
console.log(dirname);

// 获取文件扩展名
const extname = paths.extname('/Event/index1.js');
console.log(extname);

// 获取路径是否为绝对路径 返回Boolean true 是 false 否
const absolute = paths.isAbsolute('index1.js');
const absolute1 = paths.isAbsolute('/Event/index1.js');
console.log(absolute,absolute1);

// 拼接字符串
const joinstr = paths.join('/123','/2133223','hhhhh');
console.log(joinstr);

// 将路径或路径片段的序列解析为绝对路径
const resolve = paths.resolve('index1.js');
console.log(resolve);

// 规范化路径
const normalize = paths.normalize('////Path///index.js');
console.log(normalize);
// 解析路径
const parse =paths.parse(normalize);
console.log(parse);
// 序列化路径
const format = paths.format(parse);
console.log(format);
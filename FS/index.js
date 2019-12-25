const fs = require('fs');

// 异步读取
fs.readFile('./read.json','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data)
});

// 同步读取
const tongbu = fs.readFileSync('./read.json','utf8')
console.log(tongbu);

// 创建读取流
const stream = fs.createReadStream('./read.json', 'utf8')

// 这里可以看到fs.createReadStream用到了我们前面介绍的events eventEmitter.on() 方法来监听事件
stream.on('data', data => {
  console.log(data) // Hello Nodejs
})

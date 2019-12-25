const Event_Emit = require('events');
// 事件触发与事件监听器功能的封装,EventEmitter 本质上是一个观察者模式的实现
class apps extends Event_Emit{};
const app = new apps();

// 绑定多个监听器
// 监听event事件

app.on('event',function(){
    console.log('123');
    console.log(this)
})
app.on('event',()=>{
    console.log('again');
    console.log(this)
})
// 触发所有绑定在event上的事件
app.emit('event');
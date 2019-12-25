const Event_Emit = require('events');
// 事件触发与事件监听器功能的封装,EventEmitter 本质上是一个观察者模式的实现
class apps extends Event_Emit{};
const app = new apps();
// 监听event事件
app.on('event',()=>{
    console.log('123');
})
// 触发所有绑定在event上的事件
app.emit('event');
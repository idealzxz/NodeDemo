const Event_Emit = require('events');

class App extends Event_Emit{};

const Apps = new App();
Apps.on('event',(data)=>{
    
    // 将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行setImmediate指定的回调函数，
    setImmediate(()=>{
        console.log(data);
    })

    // 该任务总是发生在所有异步任务之前，当前主线程的末尾。（nextTick虽然也会异步执行，但是不会给其他io事件执行的任何机会）
    process.nextTick(()=>{
        console.log(data,'1')
    })
})
Apps.emit('event','异步');
console.log('同步');
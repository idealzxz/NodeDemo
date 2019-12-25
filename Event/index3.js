const Events_Emit = require('events');
class App extends Events_Emit{};
 const Apps = new App();

//  events.once 监听器只可调用一次
 Apps.once('event',()=>{
     console.log('123')
 })
 
 Apps.emit('event');
 Apps.emit('event');

//  移除监听器
Apps.removeListener('event',()=>{});
Apps.emit('event');
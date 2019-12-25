const Event_Emit = require('events');
class apps extends Event_Emit{};
const app = new apps();
app.on('event',()=>{
    console.log('123');
})
app.emit('event');
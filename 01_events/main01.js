const EventLogger = require('events');//blueprint
const logger = new EventLogger();//objeto en sí

//Listeners
logger.on('messageLogged', () =>{
    console.log('Listener Called');
});
logger.on('messageError', (arg) =>{
    console.log('Something is wrong', arg);
});

//Raise event
var a = 6;
if (a>5) logger.emit('messageLogged', a);
if (a<5) logger.emit('messageError', a);



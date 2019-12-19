const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('londonCalling', (arg) =>{
    console.log('Mensaje activado -> ', arg);
});


logger.log('message');


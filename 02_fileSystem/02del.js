var fs = require('fs');

fs.unlink('Copy-Of-message.txt', function(){
    console.log('file deleted');
});


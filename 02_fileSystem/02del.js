var fs = require('fs');

fs.unlink('readmeCopy2.txt', function(){
    console.log('file deleted');
});


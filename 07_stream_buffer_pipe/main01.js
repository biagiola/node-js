var fs = require('fs');

// copy readMe.txt in a new file writeMe.txt
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on( 'data', function(chunk) {
    console.log('new chunk received: ');
    myWriteStream.write(chunk);
});

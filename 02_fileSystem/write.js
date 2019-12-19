var fs = require('fs');
var data = 'hola que tal';
fs.writeFile('message.txt', data, (err) => {
  
  console.log('The file has been saved!');
});

fs.readFile('readme.txt', 'utf8', function(err, a){
    fs.writeFile('readmeCopy2.txt', a);
});

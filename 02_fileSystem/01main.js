//{syncronize or bloking} and {asyncronize or nonbloking}
var fs = require('fs');

/*Syncronize way*/
    // sync way to read dir data 
    const filesTwo = fs.readdirSync('../');
    console.log('Datos de un directorio Sync \n', filesTwo);

    // sync way to read a file 
    var readMe = fs.readFileSync('readme.txt', 'utf8');
    console.log('Archivo readme.txt => ',readMe);

    // sync way to write/copy a file
    fs.writeFileSync('readmeCopy.txt', readMe);

/*Asyncronize way*/
    // async way to read dir data 
    const files = fs.readdir('../', function(err, files){
        if (err) console.log('Error', err);
        else console.log('Result', files);
    });
    
    // async way to write a file 
    var data = 'hola que tal';
    fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    });

    // async way to write/copy a file
    fs.readFile('readme.txt', 'utf8', function(err, a){
        fs.writeFile('readmeCopy2.txt', a);
    });

    //To delete files
    //fs.unlink('readmeCopy.txt');






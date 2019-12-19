var fs = require('fs');

/*Sync*/
    // sync way to add dir 
    fs.mkdirSync('Stuff', function(){
        console.log('Directory made');
    });
    // sync way to remove dir 
    fs.rmdirSync('Stuff', function(){
        console.log('Directory made');
    }); 


/*Async*/
    // async way to make a dir (with a file 'message.txt' inside)
    fs.mkdir('stuff', function(){
        fs.readFile('readme.txt', 'utf8', function(err, data){
            fs.writeFile('./stuff/message.txt', data, (err) => {
                if (err) throw err;
            });
        })
    })

    // delete a dir (include the file inside)
    fs.unlink('./stuff/readme.txt', function(){
        fs.rmdir('./stuff', function(){});
    });

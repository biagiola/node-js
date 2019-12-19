//{syncronize or bloking} and {asyncronize or nonbloking}
var fs = require('fs');

/*Syncronize way*/
    // sync way to read dir data 
    // const upperDirFiles = fs.readdirSync('.../'); // upper directory
    console.log( 'Syncronize way ');
    const actualDirFiles = fs.readdirSync('./'); // actual directory
    console.log( 'Actual directory Sync \n', actualDirFiles );

    // sync way to read a file 
    var readMe = fs.readFileSync( 'readme.txt', 'utf8' );
    //console.log( 'File: readme.txt => ', readMe );
    console.log( `File: readme.txt => ${ readMe }` );

    // sync way to write/copy a file
    fs.writeFileSync('readmeCopy.txt', readMe);

/*Asyncronize way*/
    console.log( '\nAsyncronize way' );
    // async way to read dir data of actual directory 
    const files = fs.readdir( './', function( err, files ) {
        if ( err ) console.log('Error', err);
        else console.log( 'Actual directory Async\n', files );
    });
    
    // async way to write a file 
    var data = 'Hi there, this is a copy';
    fs.writeFile('message.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    // async way to write/copy a file
    fs.readFile('readme.txt', 'utf8', function( err, a ) {

        /* fs.writeFile( 'readmeCopy2.txt', a)  */

        fs.writeFile('Copy-Of-message.txt', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }); 

    //To delete files
    //fs.unlink('readmeCopy.txt');







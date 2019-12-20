const http = require('http');

//http event tiene todas las capacidades de EventEmitter de por así
const server = http.createServer( (req, resp) => {

    if (req.url === '/') {
        resp.write('Home page');
        resp.end();
    }

    if (req.url === '/about') {
        resp.write(`
            <h1>About</h1>
            <div>Welcome to the about page</div>
            `);
        resp.end();
    }

    if (req.url === '/api/courses') {
        resp.write( JSON.stringify([1, 2, 3]) );
        resp.end();
    }
});

server.listen(3000);
console.log('Listening on the port 3000');



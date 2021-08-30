// *** Using Require ***

// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();


// *** Using EventEmitters/(logger)

// const Logger = require('./logger');

// const logger = new Logger();
// logger.on('message', (data) => console.log(`Called Listener: data.id=${data.id} data.msg=\"${data.msg}\"`));
// logger.log('Hello World!');
// logger.log('Hi')


// *** Writing a web app/server WITHOUT EXPRESS ***

const http = require('http');
const path = require('path');
const fs = require('fs');
const { runInNewContext } = require('vm');

const server = http.createServer((req, res) => {
    // // *** INEFFICIENT ***
    //
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
            
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write(content);
    //         res.end();
    //     });
    // } else if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;

    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write(content);
    //         res.end();
    //     });
    // }

    // // serving JSON instead of HTML (like in the case of building an api)
    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30 },
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.write(JSON.stringify(users));
    //     res.end();
    // }

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File and process path
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(content, 'utf8');
                    res.end();
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.write(`Server Error: ${err.code}`);
                res.end();
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(content, 'utf8');
            res.end();
        }
    });
});
// get port
const PORT = process.env.PORT || 5000; // first checks env PORT var, then 5000 if not available
// listen on PORT
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const http = require('http');

// *** HTTP Module ***

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World!');
    res.end();
}).listen(5000, function callbackFunction() { console.log('Something running...'); });
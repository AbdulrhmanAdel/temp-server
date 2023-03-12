const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.setHeader('content-type', 'application-json');
    res.write("{'up': true}");
    res.end();
});

server.listen(3000);
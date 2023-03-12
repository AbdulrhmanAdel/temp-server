const http = require('http');

const server = http.createServer();
const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
    res.json({
        up: true
    });
});

app.listen(3000);
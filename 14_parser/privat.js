const http = require('http');
const port = 3000;
const request = require('request');
const server = http.createServer((req, res) => {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.write(body);
        res.end();
    });

});

server.listen(port, () => {
    console.log('Server');
});

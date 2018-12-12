const http = require('http');
const port = 3000;
const EventEmitter = require('events');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req, res) => { //Создаем сервер
    let datetime = new Date();
    switch (req.url) {
        case '/registration' :
            if (req.method === 'POST') {
                let body = '';

                req.on('data', function (data) {
                    body += data;
                });

                req.on('end', function () {
                    let post = qs.parse(body);
                    console.log(post['userName'], datetime);
                });
            }
            break;
    }

    fs.readFile('index.html', 'utf-8', (err, data) => { //читаем файл на сервере
        if (err) throw err;
        res.write(data); //отдаем в ответе содержимое файла (data)
        res.end();
    });
});

server.listen(port, () => {//слушает (запускает) сервер
    console.log('Server');
});


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');


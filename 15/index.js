const http = require('http');
const port = 3000;
const Event = require('events').EventEmitter;
const fs = require('fs');
const qs = require('querystring');

let event = new Event();

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
                    event.emit('registration', post['userName'], datetime);
                });
            }
            break;

        case '/logout':
            event.emit('logout');
        break;

        case '/social':
            event.emit('social');
        break;

    }

    fs.readFile('index.html', 'utf-8', (err, data) => { //читаем файл на сервере
        if (err) throw err;
        res.write(data); //отдаем в ответе содержимое файла (data)
        res.end();
    });

});

server.listen(port, () => {//слушает (запускает) сервер
    console.log('Создали сервер');
});

event.on('registration', (name, datetime) => {
    console.log('Пользователь:', name, datetime);
});

event.on('social', () => {
    console.log('Зарегистрировался с помощью соцсетей');
});

event.on('logout', () => {
    console.log('Вышел из своего аккаунта');
});
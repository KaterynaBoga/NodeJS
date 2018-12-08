const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/about' :
            console.log(req);
            res.end();
            break;

        case '/stop' :
            server.close();
            res.end();
            break;
        case '/contact' :
            fs.readFile('index.html', 'utf-8', (err, data) => {
                if (err) throw err;
                res.write(data);
                res.end();
            });
            break;
        default :
            res.write('Hello Word!');
            res.end();
    }
});

server.listen(port, () => {
    console.log('Server');
});


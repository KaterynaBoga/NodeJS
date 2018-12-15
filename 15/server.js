const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/file' :
            let file = fs.readFile('./demo.txt', (err, data) => {
                res.write(data);
                res.end();
                console.log('We have new file');
            });
            break;

        case '/stream' :
            let stream = fs.createReadStream('./demo.txt');
            stream.pipe(res);
            console.log('We have new stream');
            break;
        default :
            res.write('Hello Word!');
            res.end();
    }
});

server.listen(port, () => {
    console.log('Server');
});

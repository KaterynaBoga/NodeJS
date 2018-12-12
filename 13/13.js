let fs = require('fs');


// fs.writeFile('13/13.pug','Welcome to', (err, data) => {
//     console.log('Асинхронный метод записи файла');
//     if(err) throw err;
//
// });

fs.appendFile('13/13.pug', '\n Hello Node', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});

fs.readFile('13/13.pug', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
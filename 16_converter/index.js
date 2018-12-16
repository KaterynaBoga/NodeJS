let Converter = require('./converter');

let converter = new Converter( () => {
    console.log('100 долларов равно ' + converter.convert(100, 'USD', 'UAH') + ' гривень');
    console.log('5000 гривень равно ' + converter.convert(5000, 'UAH', 'EUR') + 'евро');
});




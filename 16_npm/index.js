let User = require('./module.js');
let conf = require('./config/config.json');
let user = new User(conf.name, conf.address);//объект из переменной модуля

user.setNumber('777');
user.setDestination('Las Palmas de Gran Canaria');

console.log('Информация о пассажире: ', user.getInfo());
console.log('Куда летит:', user.getDestination());
console.log('Номер самолета: ', user.getNumber());

const request = require('request');//сторонний модуль
const express = require('express');//сторонний модуль
const app = express();
app.listen(3000);

let Converter = function (callback) {
    request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', (error, response, body) => {
        let jsonBody = JSON.parse(body);//превращаем тело ответа приватбанка в json
        this.rates = []; //создаем курсы валют
        let key = ''; //создаем валюты
        for (let i = 0; i<jsonBody.length; i++) {
            key = jsonBody[i]['ccy'] + jsonBody[i]['base_ccy']; //берем валюту из json для продажи
            this.rates[key] = 1/jsonBody[i].sale;
            key = jsonBody[i]['base_ccy'] + jsonBody[i]['ccy']; //берем валюту из json для покупки
            this.rates[key] = jsonBody[i].buy;
        }
        app.get('/', function (req, res) {
            res.send('Hello World')

        });

        callback(); //для запуска вычеслений, т.к. получение курсов асинхронное
    });
};


Converter.prototype.convert = function (sum, source, target) {//сумма, исходная валюта, валюта в которую нужно перевести
    let rate = this.rates[source + target];//вернет курс, который умножается

    return Math.round(sum / rate * 100) / 100;
};

module.exports = Converter;
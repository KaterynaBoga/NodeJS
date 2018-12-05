'use strict';
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kateryna.bohatova@gmail.com',
        pass: '********'
    }
});

let mailOptions = {
    from: 'kateryna.bohatova@gmail.com',
    to: 'kateryna.bohatova@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Письмо отправлено')
});
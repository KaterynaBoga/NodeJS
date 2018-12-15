let User = function (name, address) {//объект пользователя
    this.name = name;
    this.address = address;
    this.number = null;
    this.destination = null;
};

User.prototype.view = function () {//метод для вывода имени
    console.log(this.name);
};

User.prototype.setNumber = function (num) {
    this.number = num;
};

User.prototype.setDestination = function (des) {
    this.destination = des;
};

User.prototype.getDestination = function () {
    return this.destination;
};

User.prototype.getNumber = function () {
    return this.number;
};

User.prototype.getInfo = function () {
    return {
       'Имя:' : this.name,
        'Город вылета' : this.address
    } ;
};

module.exports = User;
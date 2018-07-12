foo2 = require('./foo2');

module.exports = {
    sayHelloEnglish: function () {
        console.log('Hello');
    },
    sayHelloVietnam: function () {
        console.log('Chao');
    },
    sayHelloJapan: function () {
        foo2.sayHelloJapan();
    }
}

module.exports.Person = class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log("Hello ", this.name);
    }
}
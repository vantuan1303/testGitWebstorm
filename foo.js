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
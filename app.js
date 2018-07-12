// const foo = require('./foo');
//
// foo.sayHelloEnglish();
// foo.sayHelloJapan();

// const Person = require('./foo').Person;
// var person = new Person('Tuan'); //new... để khởi động constructor
// person.sayName();

const foo = require('./foo');
var person = new foo.Person('An');
person.sayName()

class Child extends foo.Person {
    constructor(name, age) {
        super (name);
        this.age = age;
    }
    sayName() {
        super.sayName();

        console.log("Name:", this.name, "Age:", this.age);
    }
}

var child = new Child("Tuan", 25);
child.sayName();
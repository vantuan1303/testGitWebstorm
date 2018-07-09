var cars = ["BNW", "J2Z", "LAMBOGHINI"];
console.log(cars.valueOf());

for (var i = 0; i < cars.length; i++ ){
    console.log(cars[i]);
}

console.log("Nối mảng: " + cars.join(" + "));

cars.push("Yamaha");
var a = cars.push("Honda");
console.log(a);

console.log(cars.valueOf());
// cars.pop();
// cars.shift();
cars.splice(1, 1);
console.log(cars.valueOf());

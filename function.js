var square = function(x) {
    return x * x;
}
console.log(square(3));

square.description = function () {
    console.log("Square number");
}
square.description();
square.description.help = function () {
    console.log("Input your number");
}
// square.description.help()

//Throw
var add = function (a, b) {
    if (typeof a != "number" || typeof b != "number") {
        throw {
            name: "Error",
            message: "Please input number"
        }
    } else {
        return a + b;
    }
}
// console.log(add(3, "D"));

function phepToan(operator) {
    switch (operator){
        case "+" :
            return function(a, b) {
                return a + b;
            };
        case "-" :
            return function(a, b) {
                return a - b;
            };
        case "*" :
            return function (a, b) {
                return a * b;
            };
        case "/" :
            return function (a, b) {
                if (b == 0 ) {
                    throw {
                        name: "Error",
                        message: "b = 0?"
                    }

                } else {
                    return a / b;
                }
            }
    }

}
console.log("Kết quả:", phepToan("/")(3, 1));

var numberObj = function (val) {
    var value = parseFloat(val);
    return {
        absolute: function () {
            return value > 0 ? value : -value;
        },
        square: function () {
            return value * value;
        }
    };
}(-5);

console.log(numberObj.absolute(), numberObj.square());
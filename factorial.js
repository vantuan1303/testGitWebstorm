function factorial(n) {
    if (typeof(n) !== "number") {
        return NaN;
    }

    if (n == parseInt(n)) {
        if (n <= 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    } else {
        return NaN;
    }
}

console.log(factorial(D))
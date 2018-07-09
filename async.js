//Viết dạng Sync

var addSync = function (a, b) {
    if (isNaN(a) || isNaN(b))
        throw new Error("Input number");
    return a + b;
}
try {
    var result = addSync(3, 4);
    console.log(result);
} catch (err) {
    console.log(err.message);
}

//Viết dạng async

var add = function (a, b, callback) {
    if (isNaN(a) || isNaN(b))
        return callback(new err("Input number"), null);
    return callback(null, a + b);
}

add(3, 5, function (err, data) {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data.toString());
    }
})
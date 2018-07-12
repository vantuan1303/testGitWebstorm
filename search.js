var fs = require('fs');



var processData = process.argv;
var fileName = processData[2];
// var dirName = processData[3];

fs.stat(fileName, function (err, stats) {
    try {
        if (stats.isDirectory()) {
        console.log('Thu muc');
        }
        if (stats.isFile()) {
            console.log('File');
        }
    } catch {
        console.log('Khong ton tai');
    }

})

// console.log(fileName, dirName);
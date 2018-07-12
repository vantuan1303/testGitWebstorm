'use strict';

var fs = require('fs'); //Xử lí
var path = require('path'); //Xử lí với đường



// var filePath = path.join(__dirname,'fs.js'); //join = cộng hai
//
// console.log(__dirname); //Thư mục chạy node
// console.log(path.dirname(filePath)); //Đường dẫn thư mục
// console.log(path.basename(filePath)); //Đường dẫn file
// console.log(path.basename(filePath,'.js')); //Đường dẫn file - đuôi
// console.log(path.extname(filePath)); //Lấy đuôi
// console.log(path.resolve(filePath,'..','views')); //Giống lệnh
//
// //fs.chown cấp quyền, fs.mkdir tạo thư mục
fs.stat('views', function (err,stats) { //Lấy thông tin file
    if(stats.isDirectory()) {
        console.log('thu muc')
    }
    if (stats.isFile()){
        console.log('file')
    }
})
// var stats = fs.statSync('views');
// //
// console.log(stats);
//
// fs.readdir('test', function (err,listFiles) { //Giống lệnh ls
//     console.log(listFiles);
// })
//
// var processData = process.argv;
//
// var filename = processData[2];
// var dirname = processData[3];
//
// console.log(filename,dirname);
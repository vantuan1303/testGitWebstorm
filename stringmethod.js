var quote = "Darkness cannot drive out darkness; " +
    "only light can do that. " +
    "Hate cannot drive out hate; " +
    "only love can do that.";
var first = quote.indexOf("only");
console.log(first);
var second = quote.lastIndexOf("only");
console.log(second);
var canPost = quote.search("drive");
console.log(canPost);

var iLove = "I love PHP, php is a good language with extension pHp";
var iLoveNodejs = iLove.replace(/php/ig, "NodeJS");
console.log(iLoveNodejs)

var str = "Apple, Banana, Kiwi"
// var slices = str.slice(-12, -6);
var slices = str.slice(7, 13);
console.log(slices);

var str2 = "Apple, Banana, Kiwi"
var str3 = str2.split(", ");
console.log(str3.valueOf());

var love = "LOVE";
String.prototype.reverse = function() {
    var result = ""
    for (var i = this.length - 1; i >= 0; i --) {
        result += this[i];
    }
    return result;
};
console.log(love.reverse());
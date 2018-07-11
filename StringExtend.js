String.prototype.reverse = function() {
    var result = ""
    for (var i = this.length - 1; i >= 0; i --) {
        result += this[i];
    }
    return result;
};

String.prototype.cammelCase = function() {
    var result = "";
    var prevChar = undefined;
    for (i = 0; i < this.length; i ++) {
        var curentCase = this.charAt(i);
        if (i == 0 || prevChar == " ") {
            result += curentCase.toUpperCase();
        } else {
            result += curentCase;
        }
        prevChar = curentCase;
    }
    return result;
}

module.export = String;
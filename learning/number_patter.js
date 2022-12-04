"use strict";
exports.__esModule = true;
var input = require("readline-sync");
var n = parseInt(input.question("Enter a number: "));
var str = "";
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        str += " " + j;
    }
    console.log(str);
    str = "";
}

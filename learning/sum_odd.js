"use strict";
exports.__esModule = true;
var input = require("readline-sync");
var limit = parseInt(input.question("enter a number"));
var sum = 0;
for (var i = 1; i <= limit; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}
console.log(sum);

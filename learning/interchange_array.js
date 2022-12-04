"use strict";
exports.__esModule = true;
var input = require("readline-sync");
var arr1 = [];
var arr2 = [];
var limit = parseInt(input.question("enter array length: "));
for (var i = 1; i < 3; i++) {
    for (var j = 0; j < limit; j++) {
        if (i == 1) {
            arr1[j] = input.question("enter ".concat(j, " th element of array1: "));
        }
        else {
            arr2[j] = input.question("enter ".concat(j, " th element of array2: "));
        }
    }
}
for (var i = 0; i < limit; i++) {
    var temp = arr1[i];
    arr1[i] = arr2[i];
    arr2[i] = temp;
}
console.log("array1: " + arr1);
console.log("array2: " + arr2);

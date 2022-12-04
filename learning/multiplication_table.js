var inputP = require("readline-sync");
var enteredNumber = parseInt(inputP.question("enter a number to show multiplication table: "));
for (var i = 0; i < 10; i++) {
    console.log("".concat(i + 1, " * ").concat(enteredNumber, " = ").concat((i + 1) * enteredNumber));
}
;

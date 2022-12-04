// get input from terminal. there are many ways to get input from terminal. this is one of them.
var read = require("readline-sync");
var userInput;
userInput = read.question("enter your name: ");
try {
    String(userInput);
}
catch (_a) {
    console.log('error');
}
console.log("you entered ".concat(userInput));

var inputPackage = require("readline-sync");
var p = parseFloat(inputPackage.question("Enter principal amount: ")); // principal amount
var r = parseFloat(inputPackage.question("Enter interest rate: ")); // interest rate
var n = parseFloat(inputPackage.question("Enter number of years: ")); // number of years
// find simple interest
var simpInterest = (p * r * n) / 100;
if (isNaN(simpInterest)) {
    console.log("you entered wrong data. every values are note numbers");
}
else {
    console.log("smiple interest is: ".concat(simpInterest));
}

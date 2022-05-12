// TypeScript's type system only helps you during development. before the code gets compiled
// how to add a number type to a parameter?
function add(num1, num2, printResult, Username) {
    console.log(Username, printResult);
    return num1 + num2;
}
var num1 = 2; // if you added a string insted of number, then TypeScript will show an error
var num2 = 2;
var printResult = true;
var Username = "abdhu";
add(num1, num2, printResult, Username);
////////////////////////////////////////
// how to add a type to a variable;
////////////////////////////////////////
var number1;
var myName;
var action;
// after declaration, assign the data;
number1 = 1;
myName = "abdhu";
action = true;

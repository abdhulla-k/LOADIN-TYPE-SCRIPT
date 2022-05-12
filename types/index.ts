// TypeScript's type system only helps you during development. before the code gets compiled

// how to add a number type to a parameter?

function add( num1: number, num2: number, printResult: boolean, Username: string ) {
    console.log( Username,printResult )
    return num1 + num2;
}

let num1 = 2; // if you added a string insted of number, then TypeScript will show an error
let num2 = 2;
let printResult = true;
let Username = "abdhu";

add( num1, num2, printResult, Username );


////////////////////////////////////////
// how to add a type to a variable;
////////////////////////////////////////
let number1: number;
let myName: string;
let action: boolean;

// after declaration, assign the data;
number1 = 1;
myName = "abdhu";
action = true;
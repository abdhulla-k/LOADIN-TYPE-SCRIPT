let input = require( "readline-sync" );

let num1: number;
let num2: number;
let sum: number;

console.log( "Enter two numbers: " );

// use parsFloat function to convert to float
num1 = parseFloat( input.question() )
num2 = parseFloat( input.question() )
sum = num1 + num2;

if( isNaN(sum) ) {
    console.log( "you enterd not a number! try again" );
} else {
    console.log( `sum is: ${ sum }` );
}
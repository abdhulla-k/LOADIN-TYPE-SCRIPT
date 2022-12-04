let inputP = require( "readline-sync" );

let enteredNumber: number = parseInt(
    inputP.question( "enter a number to show multiplication table: " )
);

for( let i = 0; i < 10; i++ ) {
    console.log( `${ i+1 } * ${ enteredNumber } = ${ (i+1) * enteredNumber }` );
};
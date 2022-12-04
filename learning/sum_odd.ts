export {}
let input = require( "readline-sync" );

let limit: number = parseInt( input.question( "enter a number" ));
let sum: number = 0;

for( let i = 1; i <= limit; i++ ) {
    if( i % 2 != 0 ) {
        sum += i;
    }
}

console.log( sum );
export {}
let input = require( "readline-sync" );

let n:number = parseInt( input.question( "Enter a number: " ));

let str: string = "";

for( let i = 1; i <= n; i++ ) {
    for( let j = 1; j <= i; j++ ) {
        str += " " + j;
    }
    console.log( str );
    str = "";
}
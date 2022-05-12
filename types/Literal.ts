// parameter literal is the example of leteral type. parameter literal only accept either 'as-number' or 'as-text'.
// we can use enum insted of using literal if the options are too long.
function combine( input1: number | string, input2: number | string, literal: 'as-number' | 'as-text' ) {
    let result;
    if( typeof input1 === 'number' && typeof input2 === 'number' || 'as-number' ) {
        result = +input1 + +input2; // with adding + ,forcing to convert the data into number
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

let conmbinedAge = combine( 22, 33, 'as-number' );
console.log( conmbinedAge );

let combinedAge2 = combine( '22', '55', 'as-number' );
console.log( combinedAge2 );

let combinedName = combine( 'Anna', 'Alex', 'as-text' );
console.log( combinedName );
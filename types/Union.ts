// how to add a union of two or more types
// eg.
function combine( input1: number | string, input2: number | string ) {
    let result;
    if( typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;

    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

let conmbinedAge = combine( 22, 33 );
console.log( conmbinedAge );

let combinedName = combine( 'Max', 'Anna' );
console.log( combinedName );
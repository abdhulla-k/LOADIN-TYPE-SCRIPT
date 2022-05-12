// we can create new types or assign different types to a ne name
//eg

type CustomeName = number;
type CustomeName1 = number | string;
type CustomeName2 = number | string | boolean;
type CheckOut = 'text' | 'non-text'

// we can use this types in our code
//eg

function TypeData( input1: CustomeName2, input2: CustomeName, input: CustomeName1, input3: CheckOut ) {
    if( input3 == 'text' ) {
        console.log( "text" )
    } else {
        console.log( "non-text" )
    }
    console.log( input );
    console.log( input1 );
    console.log( input2 )
}

TypeData( true, 2, 'name', 'text' );
/* TypeData( 'str', 'str', 'str' ) // Error */
TypeData( false, 33, 'name', 'non-text' );
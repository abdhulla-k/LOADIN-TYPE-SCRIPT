// we can create new types or assign different types to a ne name
//eg
// we can use this types in our code
//eg
function TypeData(input1, input2, input, input3) {
    if (input3 == 'text') {
        console.log("text");
    }
    else {
        console.log("non-text");
    }
    console.log(input);
    console.log(input1);
    console.log(input2);
}
TypeData(true, 2, 'name', 'text');
/* TypeData( 'str', 'str', 'str' ) // Error */
TypeData(false, 33, 'name', 'non-text');

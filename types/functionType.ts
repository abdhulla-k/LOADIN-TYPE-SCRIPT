//function types are types that describe a function regarding parameters and the return value of that function;
// write type of parameters under the bracket and type of return value after arrow to assign a function to a variable;
// we can type type of return value of a function
// eg

/* In function add1, The return value is automatically number. becouse the parameters are numbers.and we do not 
converted it . */
function add1( num1: number, num2: number ) { 
    return num1 + num2;
}

// In function add2, The return value is automatically string. becouse we converted the values to string.
function add2( num1: number, num2: number ) {
    return num1.toString()+ num2.toString()
}

// We can explicitly define the return value
type Flag = 'text' | 'num';
function add3( num1: number, num2: number, num3: Flag ): number | string { 
    let result = num1.toString()

    if( num3 == 'text' ) {
        return result;

    } else {
        return num2
    }
}

console.log( add3( 3, 4, 'text' ));
console.log( add3( 3, 4, 'num' ));


// type void is avilable here
// in add4 function, return value is automatically 'void'. becouse the function add4 returns nothing.
function add4( num1: number, num2: number ) {
    console.log( num1 + num2 );
}

console.log( add4( 2, 3 )); // it will return undefined

// we don't want to explicitly specify the type.

//////////////////////////////////////////////////////////////////
// there is a type called 'Function' in type script.

function printTwoValue( val1: number, val2:number ) {
    console.log( val1 );
    console.log( val2 );
}

function printValue( val ) {
    console.log( val )
}

// we can assign a function to a variable in javaScript and also in typeScript
let one;
one = printValue;
one = 3;
// one(3); // it will show an error
// it will find an error. becouse, the value under variable 'one' is 3. we are treated 3 as a function
// how would this problem can be solved?
// we can add type Function to the variable

// eg.
let two: Function; // now we can't assign values to this variable except function type. we can only assign functions.

// still there is a problem here.
// if we assigned two functions to a variable, the variable only contains the function assigned later.
// eg.
two = printValue;
two = printTwoValue;
// here the variable two condains the function printTwoValue. but we want to call printValue
// what to do to solve this problem?

/*
function types are types that describe a function regarding parameters and the return value of that function;
how to add return type with the variable?
*/
//eg.

// write type of parameters under the bracket and type of return value after arrow
let three: ( a: number, b: number ) => void;  

three = printTwoValue;

//incase of call back functions
//eg.

function addAndHandle( n1: number, n2: number, cb: ( num: number ) => void ) {
    let result = n1 + n2;
    cb( result );
}

addAndHandle( 2, 33, (result) => {
    console.log( 'from callback function' + result );
})
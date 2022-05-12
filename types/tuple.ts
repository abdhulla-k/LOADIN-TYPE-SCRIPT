let tuple1 = [ 'name', 2 ];
tuple1.push('userName');
tuple1[1] = 2;// this two actions will work. becouse, TypeScript can't know the length and where the exact position of 
// different types of data

// then how we can create a tuple?

let tuple2: [ string, number ];
//tuple2[0] = 10; // this will not work. becouse, typeScript knows the positions of different types.

tuple2 = [ 'abdhu', 22 ];

tuple2[0] = 'name';
tuple2[1] = 2;

console.log( tuple2 );
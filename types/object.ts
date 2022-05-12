// eg.

const person = {
    name: 'abdhu',
    age: 30
}

// TypeScript will show error when you try to  access a key that not exists in that object.
// eg.
// console.log( person.place );
console.log( person )

// how to add type explicitly to keys
// eg.

const person2: {
    name: string;
    age: number;
} = {
    name: 'abdhu',
    age: 21,
}

// but this is not a better syntax
// better experiance is 

const person3 = {
    name: '  ',
    age: 2,
}
/*
 1. Enum is short for enumerations, which means "specially listed".
 2. The enumeration type is defined by using the "enum" keyword.
 3. The values of the named constants are incremental values starting with 1, but they can be changed to other values.
 
 eg.
    enum {
        RED,
        GREEN,
        BLUE
    }
In TypeScript, enums, or enumerated types, are data structures of constant length that hold a set of constant values. 
Each of these constant values is known as a member of the enum. Enums are useful when setting properties or values 
that can only be a certain number of possible values. One common example is the suit value of a single card in a deck 
of playing cards. Every card that is drawn will either be a club, a diamond, a heart, or a spade; there are no possible
suit values beyond these four, and these possible values are not likely to change. Because of this, an enum would be 
an efficient and clear way to describe the possible suits of a card.

Whereas most features of TypeScript are useful for throwing errors during compilation, enums are also useful as data 
structures that can hold constants for your code. TypeScript translates enums into JavaScript objects in the final 
code emitted by the compiler. Because of this, you can use enums to make a codebase more readable, as you can have 
multiple constant values grouped in the same data structure, while also making the code more type-safe than just having
different const variables laying around. 
*/

//  how to create an enum?
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHER
}

console.log( Role.ADMIN ); // it will print the value 0.

// how to change the values
enum First {
    RED = 2,
    GREEN = 3,
    BLUE = 1
}

// Can pur value as string
enum Second {
    INDIA = 'india',
    CHINA = 'china',
    US = 'us',
}

console.log( Second.INDIA );
console.log( Second.CHINA );
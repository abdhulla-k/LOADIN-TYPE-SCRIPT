<h1 align="center"> Type Script </h1>

## <u> what is type script?</u>
<br>
<p>
  Type Script is a javascript superset. what does this means?<br>
  This means that Type script is a programing language building up on javascript.
  Type script is not a brand new language insted it takes the JavaScript language and adds new
  features and advantages to it. It makes writing JavaScript code easier and more powerful.
  The Type Script compailer compailes the new features and advantages that you written in Type Script into JavaScript code.<br>
  Type Script forces us to write better, cleaner and less error code.

  ### The compailer of Type Script is : tsc
  ### The extention is: .ts
</p>
</br>

<hr>

<h2 align="center">Types</h2>

```TypeScript
// how to add a number type to a parameter?
//eg.
function sum(age: number, name: string, flag: boolean ){
  // actions
}
```
now these parameters are special datatypes.</br>
</br>

### we can add data types to variables at the time of declaration. how?

```TypeScript
// how to add a type to a variable?
//eg.
let number: number;
let Name: string;
let flag: boolean;

// assign data to this variables
number = 1;
Name = "name";
flag = true;
```
<hr>

### Core Types:-
- number type: </br>
  - eg.<br>
    1, 2, 2.0
  - note:<br>
    All numbers. no differentiation between integers or floats

- sting type: <br>
  - eg.<br>
  'hi', 'Hello'
  - note:<br>
  all text values

- boolean type:<br>
  - eg.<br>
  true, false
  - note:<br>
  just this two values. no "truthy' or "falsy" values

- object type:
  - eg.<br>
  {age: 22, name: 'name'}
  - note:<br>
  Any javaScript object, more specific types (type of object are possible ).

- Array type:
  - eg.<br>
  [1,2,3]
  - note:<br>
  Any javaScript array. type can be flexible or strict (regarding the element types).

- Tuple type:
  - eg.<br>
  [1,2]
  - note:<br>
  Added by typeScript: Fixed-length array.

- Enum type:
  - eg.<br>
  enum{ NEW, OLD }
  - note:<br>
  added by typeScript: Automatically enumerated global constant identifiers.

- Any type:
  - eg<br>
  *
  - note:<br>
  Any kind of value, no specific type assignment.

- <h3>Other important types to learn<h3>

  - Function type
  - literals
  - type aliases
  - union type
  - never type
  - any
  - unknown
<hr>
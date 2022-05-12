// whate are the differences between any and unknown?
// the type unknown good to use somewhere we can't know what type is user going to input
var number1;
var str;
var userInput;
var userData;
// we can assign type any to type string and type number
number1 = userData;
str = userData;
// but we can't assign type unknown to other types, without an ifcheck
//number1 = userInput; // it will show an error
//str = userInput; // it will show an error
// we can assign type unknown to a variable after assuring the userInput is same as the type of the variable
//eg.
if (typeof userInput == 'string') {
    str = userInput; // it will not show an error
}
if (typeof userInput == 'number') {
    number1 = userInput; // it will not show an error
}

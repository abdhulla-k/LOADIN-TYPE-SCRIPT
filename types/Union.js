// how to add a union of two or more types
// eg.
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var conmbinedAge = combine(22, 33);
console.log(conmbinedAge);
var combinedName = combine('Max', 'Anna');
console.log(combinedName);

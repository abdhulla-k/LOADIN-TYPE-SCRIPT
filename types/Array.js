// In JavaScript, we can add any type of data in to an array
// eg.
var array1 = ['name', 2, true];
// in TypeScript we any javaScript array can be supported. type can be flexible or strict.
var array2 = ['name']; // it will be string array automatically at the time of assignment;
// how to add a type to an array?
//eg.
var array3; // can add number, bool etc like this
array3 = ['name']; // we can't add other data types like number, boolean etc to array3. becouse array3 is type string;
// we can add data type 'any' to add mix data
// eg.
var array4;
console.log(array1);
var data1 = {
    name: 'name',
    age: 21
};
var activities = ['reading', 'coding'];
// try to access the array activities
for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
    var activity = activities_1[_i];
    console.log(activity /*.toUpperCase() */); // it will not show an error. becouse typeScript does know the array is a string array
    //console.log( activity.map()) // it will show an error. becous map is not avilable for string
}

var inputProperty = require("readline-sync");
var studentMark = inputProperty.question("Enter you mark to find grade: ");
if (isNaN(studentMark)) {
    console.log("you entered not a number");
}
else {
    if (studentMark < 50) {
        console.log("Failed");
    }
    else if (studentMark >= 50 && studentMark < 60) {
        console.log("E");
    }
    else if (studentMark >= 60 && studentMark < 70) {
        console.log("D");
    }
    else if (studentMark >= 70 && studentMark < 80) {
        console.log("C");
    }
    else if (studentMark >= 80 && studentMark < 90) {
        console.log("B");
    }
    else {
        console.log("A");
    }
}

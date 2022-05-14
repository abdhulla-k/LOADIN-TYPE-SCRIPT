// eg. for a class
// this is  an examble for a class
var Studnet = /** @class */ (function () {
    function Studnet(first, second, age, cours) {
        this.firstName = first;
        this.secondName = second;
        this.age = age;
        this.courses = cours;
    }
    Studnet.prototype.enrol = function (coursName) {
        this.courses.push(coursName);
    };
    return Studnet;
}());
var student1 = new Studnet('abdhu', 'omy', 22, ['angular']);
// we can add public and privat keywords to class variables in typeScript
//eg.
var StudentBord = /** @class */ (function () {
    function StudentBord(firstName, secondName, age, courses) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.courses = courses;
    }
    StudentBord.prototype.enrol2 = function (coursName) {
        this.courses.push(coursName);
    };
    StudentBord.prototype.listCours = function () {
        return this.courses.slice(); // can't access privat variables without like this
    };
    return StudentBord;
}());
var student2 = new StudentBord('abdhu', 'omy', 22, ['angular']);
student2.enrol2('react');
// console.log( student2.courses ) // we can't access like this
console.log(student2.listCours()); // only can access like this
;
// examble of an object
var abdhu;
abdhu = {
    firstName: 'abdhu',
    secondName: 'K',
    age: 22,
    great: function () {
        console.log('hello abdhu!');
    }
};
// example of a class. can force to be in this structure
var Student3 = /** @class */ (function () {
    function Student3() {
    }
    return Student3;
}());

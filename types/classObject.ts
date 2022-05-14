// eg. for a class

// this is  an examble for a class
class Studnet {
    firstName: string;
    secondName: string;
    age: number;
    courses: string[];

    constructor( first: string, second: string, age: number, cours: string[] ){
        this.firstName = first;
        this.secondName = second;
        this.age = age;
        this.courses = cours;
    }

    enrol( coursName: string ) {
        this.courses.push( coursName );
    }

}

const student1 = new Studnet( 'abdhu', 'omy', 22, [ 'angular' ] );


// we can add public and privat keywords to class variables in typeScript
//eg.

class StudentBord {
    constructor(
        public firstName: string,
        public secondName: string,
        public age: number,
        private courses: string[]
    ) {

    }

    enrol2( coursName: string ) {
        this.courses.push( coursName ); 
    }

    listCours(){
        return this.courses.slice(); // can't access privat variables without like this
    }
}

const student2 = new StudentBord( 'abdhu', 'omy', 22, ['angular'] );

student2.enrol2( 'react' );


// console.log( student2.courses ) // we can't access like this
console.log( student2.listCours() ); // only can access like this


// Interfaces feature. this is only avilable in type script. not  in vanilla javaScript
// interface means object type definition;
// eg.

// it is a structure we can force objects to be in this structure
interface Human {
    firstName: string,
    secondName: string,
    age: number,
    great: () => void;
};

// examble of an object

let abdhu: Human;

abdhu = {
    firstName: 'abdhu',
    secondName: 'K',
    age: 22,
    great() {
        console.log( 'hello abdhu!' );
    },
}

// example of a class. can force to be in this structure

class Student3 implements Human {  // we are implemented Human in this class
    firstName: string;
    secondName: string;
    age: number;
    great: () => {}
}
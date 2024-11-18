// 1. function constructor before ES6

// function Person(name, age) {
//     // console.log(this)
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`I am ${this.name} and ${this.age} years old`);
//         return this; 
//     }
//     this.sayHi();
// }

// Person("Swapnil", 26);
// console.log(Person("Swapnil", 26)); // this is a function and it is pointing to undefined

// const Tanishq = new Person("Tanishq", 26); // creating instance of object -> function is converted to object
// console.log(Tanishq); 
// Tanishq.sayHi();  // now its acting like a object

// but above is not good way to conver a function to a object


// // -------------------- class after ES6 ---------------------------------- // //

// class -> strict mode
// class should have a constructor
// I'm creating an function which can behave like a object
// If it is a class then its have inheritance properties... (object also have inheritance properties)
// behind the scene object is kind of class

class Person {
    constructor(name, age) { // its a special method in which is called autometically when an object is created
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`I am ${this.name} and ${this.age} years old`);
    }
    sayBye() {
        console.log(`I am ${this.name} and ${this.age} years old, Have a nice day!`);
    }
}

class SuperHuman extends Person { // SuperHuman(child class) of Person(parent class)
    constructor(name, age) {
        super(name, age);  // super will call parent class(Person) constructor
    }
    sayHi() {  // overide the Parent's sayHi
    console.log(`I am ${this.name} and ${this.age} years old, I want to say Hi!`)
    }
}

// const Tanishq = new Person("Tanishq", 26); // this will create a Person object named Tanishq
// Tanishq.sayHi()

const natasha = new SuperHuman("Natasha", 25); // this create SuperHuman object with name Natasha with pass the arguements Natasha and 26
natasha.sayHi();
natasha.sayBye();

/* 
   * Inheritance: code sharing, saving memory

   * Prototype is: In JS we create object from an object -> that object is your parent or prototype -> that chain goes on 

   * Prototype Inheritance (Object Chaining): you inherit the properties from a parent object/ prototype and that inheritance -> Prototype inheritance (Prototype chain(Object Chain))

   * Class Inheritance: class Person{ constructor() {} } -> const Tanishq = new Person(); (converting class to a object) 
        // we can create class but we can not call it directly but we can convert it into new object and then we can call
*/

/* 
    class over Function or Object:-
    1. readability and easy to understand
    2. class remove the conflict, that a function can behave like a object
    3. class is suppose to construct only not called by someone.
    
*/
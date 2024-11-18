 // Inheritance : High Level Intro
 // 1. Inheritance is related to OOPS. All OOPS languages are java based.
 // 2. Because we need a class to create an object just like for creating a house we need the architecture of the house.
 // 3. Suppose we have architecture having 1 door and 2 rooms. Now we want to create a new house with this architure along\
 // 4. So we will inherit all the properties of the old architecture and add a swimming pool to it.
 // 5. Then we will create a house with that new architecture.


// Statement 1
// let arr = [1,2,3,4];
// console.log(typeof arr);

// arr.push("hello");
// console.log(arr);


// Statement 2
// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4, 5, 6];

// arr1.sum = function() {
//     let sum = 0;
//     for(let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr2.sum = function() {
//     let sum = 0;
//     for(let i = 0; i < this.length; i++) {
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// console.log(arr1);
// arr1.sum();
// arr2.sum();

// ***************************** parent **************************** //

// Prototype Inheritance: 
// In JavaScript, all object have the property of prototype
// because of this propert one object can use  properties and 
// methods of other object. Instead of copying function to each object.
// JS links objects together in a chain
// when we ask for a property or method, JS checks the object first, 
// and if it's not there, it looks at the object's prototype (the object it's link to)
// and keep going up the chain untill it finds what you need or reaches the end.

// Here arrays don't have the sum method, so i created it and attach it to all arrays using 
// "prototype" property. we use Prototype property to attached any method to any object
// so, we can create any custom method and attach them to any type of object, giving them
// new abilities that they didn't have before

// one point of view is like we inheriting all inbuilt methods of array and attaching 
// new sum method for our use its called prototype inheritance

// arr1 -> have parrent Array -> and parrent array have property of sum attact to it with the help of prototype property
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];
Array.prototype.sum = function() {
    let sum = 0;
    for(let i = 0; i < this.length; i++) {
        sum = sum + this[i];  // method call (this == current object)
    }
    console.log(sum);
}
 arr1.sum(); //metthode call
 arr2.sum();


// using an inheritance property 
console.log(arr.toString());


// ********************** advantages of inheritance ************************ //

// 1. reuse of code (no code repetation)
// 2. saving memory space


// ********************** Bind, call & apply ******************************* //





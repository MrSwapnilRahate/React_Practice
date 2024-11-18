/* 
    ways to create object in JS
    1. Object literal (let Obj = {})
    2. Object.create
*/

// --------------------- object literal --------------------- //

/* 
    1. properties and methods
    2. Object -> as your prototype (parent)
*/

// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//         console.log("object this: ", this);
//         return this;
//     }
// };

// console.log("Object: ", obj);
// obj.sayHi();
// console.log("Returned Value of Object This: ", obj.sayHi());


// // // In JS everything is treated as a object // // //

// let str = "Hi My name is Swapnil";  // behinde the scene: new String("Hi My name is Swapnil") -> return the result of 'primitive value"
// console.log(str); // because of autoboxing (here is the unboxed)  typecasted to children // we cannot see parent or object in console
// string also an object but in console we cant see any capital String or any object   
// means someone is hiding that
// whenever you want to access any method or property
// then that primitive is typecasted as a children of 
// there respective parent class and then that method 
// is applied on that non primitive 
// you are returned the answer -> autoboxing

// console.log(new String("Hi My name is Swapnil"));   // now I'm inforcing JS to show the all properties of object
// console.log(new Boolean(true));
// console.log(new Number(2));


// ----------------------------------- Inbuilt Object Works ------------------------------- //

/* 
    2. array -> Array -> Object -> null
    3. function -> Function -> Object -> null
    4. object -> Object -> null

    For Primitive : temporary parents
    a. num -> Number -> Object -> null
    b. str -> String -> Object -> null
    c. boolean -> Boolean -> Object -> null
    d. null and undefined no parent

    * whenever you want to access any method or property
      then that primitive is typecasted as a children of 
      there respective parent class and then that method 
      is applied on that non primitive 
      you are returned the answer -> autoboxing

*/

// ---------------------------- 2. Object create -------------------------- //

// // this one have parent Object
// let obj1 = new Object();
// obj1.name = "Swapnil";
// console.log("obj: ", obj1);

// // 1. you create an object without any parent
// // we need to use create and specifically convey that this 
// // object doesn't heve any parent by passing the value null
// let obj2 = Object.create(null);
// obj2.fullName = "Swapnil Rahate";
// console.log("obj: ", obj2);

// // 2. Object with some different object as a parent (we can create chain of a object)
// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//         console.log("object this: ", this);
//         return this;
//     }
// };
// // obj3 -> obj -> Object -> null 
// let obj3 = Object.create(obj);
// obj3.name = "Swapnil";
// obj3.lastName = "Rahate";
// console.log("Obj3: ", obj3);


// // 3. Object with some different object as a parent
let obj = {
    name: "Steve",
    address: {
        state: "Newyork",
        city: "Manhatten"
    },
    sayHi: function () {
        console.log(`${this.name} say's Hi`);
    }
};

let obj2 = Object.create(obj); // parent object is obj
// console.log(obj2);

// //  overriden the name prop // //
obj2.name = "symphony";
obj2.lastName = "rogers";
// console.log("1.", obj2.name, " ", obj2.lastName, obj2.address); // obj2 dont have the address but still we canable to access ... because parent (obj) have the object
// 1. symphony   rogers {state: 'Newyork', city: 'Manhatten'}
// console.log("2. ", obj.lastName); // undefined -> bcoz parent don't have lastName
// 2.  undefined 

// // because of chaining if my parent object have something i can access it in child object

// console.log(obj.isPrototypeOf(obj2)); // true: is 'obj' parent of 'obj2'
// console.log(obj2.isPrototypeOf(obj)); // true: os 'obj2' parent of 'obj'

let obj3 = Object.create(obj2);
obj3.friends = ["tony", "bruce"];
obj3.fullName = "Swapnil Rahate";
obj3.age = 26;
// console.log(obj3);  // obj3 -> obj2 -> obj -> Object -> null (chaining )

// loop -> object -> for in loop -> iterate over all the prop og the object
// inherited which are enumerable to for in
// for(let key in obj3) {
//     console.log("Keys are: ", key);
// }

// Time Complexicity -> O(P + Q + R), where P is no. of elements in obj3, Q is no. of elements in obj2, R is no. of elements in obj
for(let key in obj3) {
    if(obj3.hasOwnProperty(key)) {
        console.log("My keys: ", key);
    } else if(obj2.hasOwnProperty(key)) {
        console.log("My Parent keys: ", key);
    } else {
        console.log("My Grand Parent keys: ", key);
    }
}

// / 2.
// // object.keys -> normal loop

let keys = Object.keys(obj3);
for (let i = 0; i < keys.length; i++) {
    console.log(i + " " + keys[i]);
}

// Question: Can you write a loop to print all members of my object but you need to ignore member of all parent class. And can you optimize that operation ?
// Time Complexicity -> P is no. of elements in obj3
 for (let key in obj3) {
    if (obj3.hasOwnProperty(key)) {
        console.log(key);
    } else {
        break;
    }
 }


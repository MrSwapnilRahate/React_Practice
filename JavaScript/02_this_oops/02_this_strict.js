// var varName = "Senthil";
// window.varName = "Surya";
// console.log(varName);
// Surya

// "use strict";   // In strict mode drfine a variable without data type will throw the error
// varName = "Natasha";
// window.varName = "Minakshi";
// console.log(window.varName);
// Uncaught ReferenceError: varName is not defined

// ****************************** Question 1 ********************************************** //
// "use strict"
// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {
//         // console.log(this)
//         console.log("Hi from ", this.firstName);
//     }
// }
// cap.sayHi();      // methode call in strict mode (this == cap)
// // Hi from  Steve
// let sayHiAdd = cap.sayHi;
// var firstName = "loki";
// sayHiAdd();      // function call in strict mode (this == undefined)
// TypeError: Cannot read properties of undefined (reading 'firstName') at sayHi

// ********************************* Question 2 ********************************************** //
// "use strict";
// let cap2 = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("47", this.firstName);
//         const iAmInner = function () {
//             console.log("49", this.firstName);
//         }
//         // EC by this kind of call undefined
//         iAmInner(); // function call (this == undefined)
//     }
// }

// // EC by this -> ?? -> cap
// cap2.sayHi();  // function call (this == object)
// 47 Steve
// TypeError: Cannot read properties of undefined (reading 'firstName') at sayHi

// *********************************** Question 3 ***************************************** //
// "use strict";
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("53", this.firstName);
//         // arrow -> does not have it's own this. I am going to cheat it from outside
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner(); // arrow function call (this == nearest scope)
//     }
// }
// cap.sayHi(); //// methode call (this == cap)
// 53 Steve
// 55 Steve

// ********************************** Question 4 ******************************************** //
"use strict";
let cap2 = {
  firstName: "Steve",
  sayHi: function () {
    console.log("91", this.firstName);
    // arrow -> does not have it's own this. I am going to cheat it from outside
    const subInner = () => {
      console.log("94", this.firstName);
      const iAmInner = () => {
        console.log("95", this.firstName);
        const iAmSupperInner = function () {
            console.log("49", this.firstName);
        }
        iAmSupperInner(); // simple function call (this == undefined)
      };
      iAmInner(); // arrow function call (this == nearest scope)
    };
    subInner();  // arrow function call (this == nearest scope)
  },
};
cap2.sayHi(); // methode call (this == cap)
// 91 Steve
// 94 Steve 
// 95 Steve
// TypeError: Cannot read properties of undefined (reading 'firstName') at iAmSupperInner
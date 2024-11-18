/* 
    Inbuilt Errors in JS
    -> Syntax Error

    try catch only works with run time error
    -> Runtime Error -> only get to know after executing the code 
                        and it will only fail on the where we have made the error
    
    -> TypeError
    -> Rference Error
    -> Range Error

*/


// 02. Illegal Shadowing: Identifier 'a' has already been declared
// console.log("a");
// let a = 10;
// {
//     let a = 20; // if we use var it trying to redeclare the a, because var have global scope (so it will pointing to same memory address)
//              // so it means if we use var we are trying to redclare let a again


//              // and if we use let a again it will pointing to new memrory address 
//              // new let have the scope in that scope onlye and outer let have outer scope
//     console.log("Hello", a);
// }


// work like a charm
// let a = 10
// {
//     let a = 20;
//     console.log("Hello: " + a);
// }


// ********************* Run Time Zone ********************* //
// Reference Error

// 1. TDZ -> Temporal Dead Zone, ReferenceError: Cannot access "a" before initialization
// cxonsole.log(a);
// let a = 10;
// console.log("Before")

// 2. Reference Error: fn is not defined
// fn()

// 2.1 when you accessing a prop for which object does not exist
// console.log(obj.a);

// 3. ReferenceError: a is not defined (in strict mode if a variable is not defined)
// "use strict";
// a = 10;
// console.log(a); 


// ******************** Range Error ************************ //
// 1. Range Error: Maximum call size exceeded stackoverflow
// infinite recursion

// function foo() {
//     foo();
// }
// foo();

// 2. array size RangeError: Invalid array length, Max allowed length: (2 ^ 32 -1)
// let a = []

// a.length = 2 ** 32 - 1;  // Max allowed length
// a.length = 2 ** 32;
// console.log(a.length);


/* 
    Type Error:
        1. whenever a method is called and it does not exist
        2. when you accessing a prop for which object is undefined 
*/

// 1. TypeError: num.toUpperCase is not a function
// let num = 10;
// console.log(num.toUpperCase());

// 2. TypeError: Cannot read properties of undefined (reading 'a') 
// "use strict";
// function fn() {
//     console.log(this);
//     console.log(this.Swapnil);
// };
// fn();


// "use strict";
// function fn() {
//     let string = "hello";
//     // console.log(string.toUpperCase());
//     // console.log(string.abc());
//     console.log(string.abc);

//     console.log(string.abc.def);

//     console.log(this);
//     console.log(this.abc);
// }
// fn();


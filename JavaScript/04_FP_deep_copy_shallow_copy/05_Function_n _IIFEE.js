// functions are also object
// object : key : value pair

// fn defination
// function fn() {
//     console.log("Hi I am an fn");
//     console.log("Hi I am an fn2");
//     console.log("Hi I am an fn3");
//     fn.count++;
// }

// console.log(typeof fn); // output: Function

// add a property to fn
// fn.count = 0;
// fn(); // count 0 -> 1
// fn(); // count 1 -> 2

// // method to a fn
// fn.showCount = function () {
//     console.log("count on fn is ", this.count);
// }

// fn.showCount();

// for(let key in fn) {
//     console.log("key: ", key, " Value: ", fn[key]);
// }

// documentation -> function are the object that implements callable constructor
// Layman fn is an object that can also be called


// ------- assignment ----------- //
// let a = [10, 20, 30];
// let b = a;

//----------- fn expression ----------//

// I can attach my fn to variable and later i canused that variable to invoke that function
// const addrFn = function () {
//     console.log(" I am a variable that's why addrFn stores my address");
// }
// addrFn();


// ------------------ pass a variable as a parameter ------------------ //
// function fn(param) {
//     console.log(" I recived a param", param);
//     if (typeof param === "function") {
//         param();
//     }
// }

// function smallerfn() {
//     console.log("I am smaller");
// }
// fn({ name: "swapnil"});//
// fn(smallerfn);

// I recived a param ƒ smallerfn() {
//     console.log("I am smaller");
// }

// I am smaller

// --------------------- HOF ------------------- //

// HOF -> fn that accepts or returns a fn
// function HOF(cb) {
//     console.log("Inside HOF");
//     cb();
//     return function() {
//         console.log("I am get returned");
//     }
// }

// function smallerfn() {
//     console.log("I am smaller");
// }

// HOF(smallerfn);

// Inside HOF
// I am smaller

// const catchValue = HOF(smallerfn);
// catchValue();

// Inside HOF
// I am smaller
// I am get returned

// real();
// this can cause a bug // because I'm able to create a function 
// with same name at a multiple instances
// function real() { console.log("I am real. Always run me");}
// function real() { console.log("No I am real one");}
// function real() { console.log("You both are wasted");}

// You both are wasted

// Soluction is always use const it will not allow to use same variable multiple times
// const function real() { console.log("I am real. Always run me");}
// const function real() { console.log("No I am real one");}
// const function real() { console.log("You both are wasted");}



// ---------------------------- Arrays ------------------------------ //

// JS -> array is a collection of anything (valid JS datatype)

// let arr = [
//     1, 
//     1.1,
//     true,
//     null,
//     "Hello",
//     [1, 2, 3, 4, 5],
//     {
//         name: "Jasbir",
//         FriendName: "Rajneesh"
//     },
//     function sayhi() {
//         console.log(" I am a fn inside an array");
//     }
// ]


// console.log("arr", arr);
// console.log(arr[5][2]);
// console.log(arr[6]["FriendName"]);
// arr[7]();

// Arrays are object diguised as an array -> key are numbers

// traverse array
// console.log(arr[25])
// arr[250] = 600;
// for (let key in arr) {
//     console.log("key: ", key, "value: ", arr[key]);
// }
// console.log(arr);

// length -> no Index out of bound error -> introduces bugs
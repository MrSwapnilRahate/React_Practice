/* 
    Intro to closures
    1. Closure is a JS lexical scoping technique used to preserve variables from a function's outer scope in its inner scope.
    2. In lexical scoping, the scope of a variable is defined by its position in the source code.
    3. Whenever you define a function, the variables it contains are only accessible within function
    4. If you try to access variables within a function from outside it will result in a scope error. Closure can solve this
*/

// function outerFunction () {
//     console.log("first line of outerfunction: ", count);
//     var count = 0;
//     function innerFunction () {
//         count++;
//         return count;
//     }
//     console.log("second line of outerfunction: ", count);
//     return innerFunction;
// }

// const innerFunc = outerFunction(); // calling outerFunctions & defining and returning innerFunction()
// // first line of outerfunction:  undefined
// // second line of outerfunction:  0

// /*
// this means we are calling the outerFunction()
// "()" after outerFunction means you are invoking (or calling) the function
// when you call "outerFunction", all the code inside "outerFunction" runs.

// but the "innerFunction" does not run automatically.

// when you call "outerFunction" everything inside "outerFunction" executes in oder, 
// but that doesn't mean "innerFunction" will be automatically executed.
// The code inside "outerFunction" only defines and returns "innerFunction"; it does not call it.

// During this execution, the variables are declared, logs are orinted, and the inner function is defined
// but not executed yet

// defining function does not mean execution
// it's like writtning down instruction on how to do something,
// but not actually doing it yet.

// after outerFunction finishes executing, it reaches the "return innerFunction;" statement

// when you wirte return innerFunction inside outerFunction, you are telling JS to give the innerFunction as the output of Outerfunction

// innerFunc holds the innerFunctionn returned by outerFunction

// now innerFunction hold a reference (address) of innerFunction

// because innerFunct noe address innerFunction, you can execute the code inside innerFunction by calling innerFunc() later in your code.

// // console.log(innerFunc()); // executing innerFunction only and returning its value to outerfunction 
// // innerFunct() == InnerFunction()
// // console.log(innerFunc());

// //  returning a function - the outerFunction does not execute innerFunction. 
// //         Instead, it gives you the innerFunction to use later.

// // assignment - by assigining innerFunc = outerFunction(), you are storing the innerFunction in innerFunc, 
// //         but it hasn't run yet
// //         you can run it by calling innerFunc()


// // console.log(outerFunction); // have complete outerfunction includung inner function
// // console.log(innerFunc) // innerFunction have innerFunction

// // console.log(innerFunc()); // innerFunc() == innerFunction()
// // for calling you have to console.log(innerFunc()); and it will return the value of innerFunction

// */

// console.log(innerFunc()); // pritnting the return value of innerFunction to outerFunction
// // 1
// console.log(innerFunc());
// // 2

// const innerFunc2 = outerFunction();
// // calling whole function again from starting

// // first line of outerfunction:  undefined
// // second line of outerfunction:  0

// console.log(innerFunc());
// console.log(innerFunc());

// console.log(innerFunc2());
// console.log(innerFunc2());

/*
A closure is created when the innerFunction is defined insdie outerFunction
This closure allows the innerFunction to remember and access the count variable, 
even after the outerFunction has finished runing.

A closure is when the "innerFunction" remembers the count variables from outerfunction, 
allowing it to keep track and update count every time innerFunc() is callled, even though
outerFunction is already finished
*/


// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }

// let c1 = createCounter(10, 5);
// let c2 = createCounter(5, 2);

// console.log(c1()); // 15
// console.log(c2()); // 7

// console.log(c1()); // 20
// console.log(c2()); // 9


// Nested closure : you will get access to outer variable even if 
// the outer fn is not your direct parent
// let iamINGEC = 200;

// function getFirstName (firstName) {
//     console.log("I have got your first Name");

//     return function getLastName(lastName) {
//         console.log("I have got your last name");

//         return function getGreeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`) // closure
//             console.log("Hi GEC", iamINGEC) // lexical scope
//             iamINGEC++;
//         }
//     }
// }
// // getFirstName("Swapnil") execute line to line -> I have got your first Name
// // and return whole getLastName() (address of getLastName()), 
// // because of that we can call getLastName() using lnNameRtrn() (lnNameRtrn() == getLastName()); 
// // and also remember firstName even if execution of GetFirstName is done
// const lnNameRtrn = getFirstName("Swapnil"); // calling getFirstName() with value Swapnil // returnining getLastName() // remembering firstName value
// const greeter = lnNameRtrn("Rahate"); // calling getLastName() with value Rahate // returning getGreeter() // remembering firstName & lastName value
// greeter();  // calling getGreeter() // can use firstName & lastName bcoz it can remember that values
// greeter();
// greeter();
// console.log(greeter()); // grtGreeter() is not returning anything so, o/p is undefined


/*
Application of Closure
1. Currying : taking one input at a time and you use the input later (e.g incometax website, CAT registration, CET registration)
2. asynchronous code cannot run without closure
*/

// get all the inputs at once -> we can execute the code
// function greeter(firstName, lastName) {
//     console.log(`Hi I am ${FirstName} ${lastName}`); // closure
// }
// greeter("Swapnil", "Rahate");


// function getFirstName (firstName) {
//     console.log("I have got your first Name");

//     return function getLastName(lastName) {
//         console.log("I have got your last name");

//         return function greeter(deduction) {
//             console.log(`Hi I am ${firstName} ${lastName}`) // closure
//             console.log("here is your deduction: ", deduction);
//         }
//     }
// }

// const getLastName = getFirstName("Swapnil");

// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// const greeter = getLastName("Rahate");

// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");

// greeter(100);
// console.log("Task in between");
// console.log("Task in between");
// console.log("Task in between");


// Shorcut to above same thing
// getFirstName("Swapnil")("Rahate")(100);


// -------------------------------- asynchronous code ----------------------------------- //
// let a= 100;
// console.log("Before");
// function cb() {
//     console.log("I will explode", a);
// }
// setTimeout(cb, 2000);
// console.log("After");
// for(let i = 0; i < 1000; i++){
//     a++;
// }

function fun() {
    let a = 100;
    console.log("Before");

    function cb() {
        console.log("I will explode", a);
    }
    console.log("After");
    return cb;
}

setTimeout(fun(), 2000);











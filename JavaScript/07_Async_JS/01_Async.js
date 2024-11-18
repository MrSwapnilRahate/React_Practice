// synchronous code -> the code that executes line by line

// console.log("Before");
// function fn() {
//     console.log("I'm in function");
// }
// fn();
// console.log("After");


// Asynchronous code -> piece of code is executed at current point of time
//                      and  other piece of code is executed on later part

// console.log("Before");

// function fn() {
//     console.log("I'm in function");
// }
// setTimeout(fn, 2000);

// console.log("After");


/* 
    * JS is a single threated language.
    * It means only one task can be executed at a time.
    * It will block the event loop untill the task is completed.
*/

/* 
    1st step -> initialize a
*/

// let a = true; // initialize a = true
// console.log("Before"); // immediately print "Before"

// setTimeout(() => {  // the function wait for 1 sec timer to complete and after that it will automaetically call the callback fn
//     a = false;
//     console.log("I will broke the while loop");
// }, 1000);

// console.log("After"); // imediatly print "After" after "Before"

// while (a) {}  // after that while loop will runs till a = true it will not stop until and unless value of is false
  // so it will stuck in infinity loop
  // because before setTimeOut ends its time and call its call back function and set the value a = false and stop the while loop and print that console.log statement
  // while loop is already started running in call stack its means event loop is blocked untill the while is completed
  // and because JS is a single threated language (everything executed line by line)
  // so thats our program is hang and stuck in infinity loop and never get chance to run that callback function even after setTimeOut function completed its time


/* 
    * Environment : Browser
        Web API : 
         * console -> is not a part of js
         * window -> is not a part of js
         * document -> is not a part of js
         * fetch -> is not a part of js
         * eventListner -> is not a part of js
    
    * Environment : NodeJS
         * fs -> is not a part of js
         * Http -> nodeJS
         * child_process -> nodeJS
    
    * thumb rule:
        -> Environment provide you the features.
        -> JS provide you the logic
        -> Programers: 
                    [C++ -> Java]: Pointers were take care of.
                    [Java -> JS]: There is no threads to take care of.
        
        Inference: You cannot create an asynchronous fns as a programer -> Environment
*/


// let a = true; 
// console.log("Before"); 

// setTimeout(() => {  
//     a = false;
//     console.log("I will broke the while loop");
// }, 1000);

// console.log("After"); 

// let timeFuture = Date.now() + 5000;
// while (Date.now() < timeFuture) { }


console.log("Before");
const cb2 = () => {
    console.log("Set  timeout 1");
    let timeInfuture = Date.now() + 5000;

    console.log("Before while loop: ", Date.now());
    while (Date.now() < timeInfuture) {
    }

    console.log("After while loop: ", Date.now());
}
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000);

setTimeout(cb1, 2000);

console.log("After");



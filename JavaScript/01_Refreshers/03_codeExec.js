// 1st statement:
// high level view -> how you code exec
// stack -> callstack
let a = 10;
function fn() {
    console.log("I am fn");
    function inner() {
        console.log("I am inner");
    }
    inner();
}
fn()
// I am fn
// I am inner

// Code Execution : always execute in EC
    // Global code -> Global Execution Context (GEC)
    // Inside fn -> own Execution context (EC)

// Code Execution
        // 1. EC creation
            // 1.a Hoisting -> memory allocation
                            // variable -> undefined;
                            // fn -> get it's memory allocated
            // 2. global -> browser -> window/nodejs -> global -> features
            // 3. outer scope -> outer var
            // 4. this -> always calculated
        // 2. EC code  execution



// Hoisting -> Means Allocation memory to any variable or function 
// which is not define yet but it will get value or define 
// when we call that value or function till that momet it will be undefined.

// 2nd Statement:

console.log("b", b);
var b = 10;
// this can cause a bug
real();
function real() { console.log("I am real. Always run me"); } // these two are deprecated by GEC
function real() { console.log("No I am real one"); } // these two are deprecated by GEC
function real() { console.log("You both are wasted"); }

// b undefined
// You both are wasted

// js -> js provides only a logic
// features & environment provide by the nodejs

// console.log(window);  
// so basically window is gloval object which have all the operations(cosole.log, array, all mouse events, everything, etc) 
// that require by js to perform all the task 
// (means js lang just provide logics to perform all the task which available in the windows)

var c = 10;
function fn(){
//    c = 20;  // 2nd  EC go to parent and it got value of c in parent only that is 20. so here its not need to go to out side the function for value of c and its print 20.
    console.log("c", c); // 1st c is goes to check parent that value is present or not if it is not present then its go to out of the function to check if there is present a value if it is present then print its value that is 10. 
}
fn();
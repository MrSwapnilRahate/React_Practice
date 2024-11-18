// A lexical scope allows a function scope to access variables in the outer scope
// The outer scope is determined wrt to function defination only were we have defined the function code in js file

// var x = 10;
// function fn() {
//     // you are taking the value from the current/local scope
//     // var x = 20;
//     console.log("Value of x is", x); 
// }

// fn();
// Value of x is 10

// let x = 10;
// function fn() {
//     // you are taking the value from the current/local scope
//     var x = 20;
//     console.log("Value of x is", x); 
// }

// fn();
// // Value of x is 20

// let x = 10;
// function fn() {
//     // you are taking the value from the current/local scope
//     let x = 20;
//     console.log("Value of x is", x); 
// }

// fn();
// Value of x is 20


// var varName = 10;
// // fn defination
// function b() {
//     console.log("in b", varName);
// }

// function fn() {
//     var varName = 20;
//     // fn call
//     b();
//     console.log(varName); //20
// }

// fn();
// in b 10
// 20


var varName = "I'm here";
// fn defination
function fn() {
    var varName = 10;
    function inner() {
        console.log(varName);
    }
    inner();
}

fn();
// 10





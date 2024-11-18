var a = 10;
console.log("line number 2", a);
function fn() {
    var a = 20;
    console.log("line number 4", a);
    a++;
    console.log("line number 7", a);
    if (a) {
        var a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}

fn();
console.log("line number 17", a);

// line number 2 10
// line number 4 20
// line number 7 21
// line number 11 31
// line number 13 31
// line number 17 10


// Satement 2
var f = 5;
function fn () {
    f = 6;
}
fn();
console.log(f);
// 6

// ******************* var ******************* //
// reassign, redeclare, can access before its value defined(undefined(hoisting)), global scope

// reassign
var a = 10;
a = 20;

// redeclare -> yes
// var a = 30;

// console.log(a);     // output: undefined
var b = 10;
console.log(b);        // output: 10


// ****************** let ************************* //
// reassign, cant redeclare, cannot access value before it defined(temprary dead zone), block scope {}

// reassign -> yes 
// redeclartion -> is not possible
// let a = 10;
// a = 20;
// let a;      // throw error


// let Hoisting -> undefined 
// before declartion let and const variables cannot be accessed ->
// tempral dead zone












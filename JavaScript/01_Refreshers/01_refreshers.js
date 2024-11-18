// 1st statement
console.log("value of a ", a); // (undefined) I can access the variable (var a) without declaring it
// value of a  undefined

var a; // Always undefined
console.log("value of a ", a);
// value of a  undefined

a = 10;
console.log("value of a ", a); 
// value of a  10

a = "abc";  // I can reasigned the value
console.log("value of a ", a);
// value of a  abc

a = 'abc';   // Both single quote and double works same way
console.log("value of a ", a);
// value of a  abc

a = 10.234;  // can access any decimal value
console.log("value of a ", a);
//  value of a  10.234

a = true;   // can access any bolean value
console.log("value of a ", a);
// value of a  true

// In var a you can reassinged new value n number of times

// 2nd Statement: no diff in single quote and double quote
var age = 25;
var name = 'Swapnil';
var c = "Hi my name is " + name + ' and age is ' + age;
console.log("value of c ", c);
// value of c  Hi my name is Swapnil and age is 25

var d = "hi" + 
            " hello";
console.log("value of d: ", d);
// value of d:  hi hello

var d = `hi ${age}` + 
            ` hello`;
console.log("value of d: ", d); // It will create a single line statement. 
// value of d:  hi 25 hello

// It will concate both string and create a single line statement.
var s3 = `Hi my name is ${name}` + 
        ` and my age is ${age}, How are you doing today?`
        console.log("Value of s3 ", s3);
// Value of s3  Hi my name is Swapnil and my age is 25, How are you doing today?

// 3rd statement: It will create multiple line statements.
var s3 = `Hi my name is ${name}  
         and my age is ${age}, How are you doing today?`
        console.log("Value of s3 ", s3);
// Value of s3  Hi my name is Swapnil  
// and my age is 25, How are you doing today?

// 4th Statement: 
var e;
console.log("typeof a where content is: " + e + " => " + typeof e);
// typeof a where content is: undefined => undefined

var e = 10 ;
console.log("typeof a where content is: " + e + " => " + typeof e);
// typeof a where content is: 10 => number

e = "abc" ;
console.log("typeof a where content is: " + e + " => " + typeof e);
// typeof a where content is: abc => string

e = 'abc' ;
console.log("typeof a where content is: " + e + " => " + typeof e);
// typeof a where content is: abc => string

e = 'a' ;
console.log("typeof a where content is: " + e + " => " + typeof e);
// typeof a where content is: a => string

e = 10.444 ;
console.log("typeof a where content is: " + e + " => " + typeof e);
// typeof a where content is: 10.444 => number

e = undefined;  // type of undefined is undefined (undefined means empty, nothing, void)
console.log("typeof a where content is: " + e + " => " + typeof e);
// typeof a where content is: undefined => undefined

e = null;       // type of null is object (null means 0)
console.log("typeof a where content is: " + e + " => " + typeof e);
// typeof a where content is: null => object

// 5th Statement: In js number is treated as 64bit floating number
var f = 5 / 3;
console.log("value of f: ", f);
// value of f:  1.6666666666666667

// 6th Statement:
var g = [10, 20.5, "abc", 'def', true];
console.log("value of g: ", g);
// value of g:  (5) [10, 20.5, 'abc', 'def', true]
console.log("typeof of g: ", typeof g);
// typeof of g:  object
console.log("typeof of g: ", Array.isArray(g));
// typeof of g:  true

// 7th Statement: [Important: why typeof null is object?]
// It is a bug in js which they can't change now, 
// reason is binary null is zero and zero is trated as a object
console.log("typeof of null: ", typeof null);
// typeof of null:  object

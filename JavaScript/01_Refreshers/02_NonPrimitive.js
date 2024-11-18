 // 1st Statement: Function

 function fn(param1){
    console.log("Hello world! ", param1);
    return              // Js will add a semicoln here, to avoid this use linter[eg., eslint]
        "my name is khan";
 };

 var rVal = fn(); 
 console.log("Value of rVal " + rVal);
 // Hello world!  undefined
 // Value of rVal undefined
 console.log("typeof of fn: " + typeof fn);
 // typeof of fn: function

 // ------------------------------------------------------------------------------------------------------------------------------ //

 //2nd Statement: Object(key(number, string): value)
 // key (number, string) : object ("string", number, boolean, {another object}, function () {}, [array] )
let cap = {
    name: "Steve",          // key should be unique
    'last Name': "Rogers",  // key: if one word key u can write as it is, but if 2 word key then u have to use double qoute or single quote
    isAvenger: true,
    address: {
        city: "manhatten",
        state: "Newyork"
    },
    sayHi: function () {
        console.log("Cap say's HI");
    },
    movies: ["Avenger", "civile War"],
    2: "random thing",
    // key: "have fun" 
 }

 console.log(cap);
// 2: "random thing"
//  address: {city: 'manhatten', state: 'Newyork'}
//  isAvenger: true
//  key: "have fun"
//  last Name: "Rogers"
//  movies: (2) ['Avenger', 'civile War']
//  name: "Steve"
//  sayHi: ƒ ()

console.log("one way to print: " + cap['name'], " another way to print: " + cap.name);
// one way to print: Steve  another way to print: Steve

for (let key in cap) {
    console.log("My key is: " + key + ", value against it using cap[key]: " + cap[key] + " and using cap.key: " + cap.key);
}
// one way to print: Steve  another way to print: Steve
// My key is: 2, value against it using cap[key]: random thing and using cap.key: undefined
// My key is: name, value against it using cap[key]: Steve and using cap.key: undefined
// My key is: last Name, value against it using cap[key]: Rogers and using cap.key: undefined
// My key is: isAvenger, value against it using cap[key]: true and using cap.key: undefined
// My key is: address, value against it using cap[key]: [object Object] and using cap.key: undefined
// My key is: sayHi, value against it using cap[key]: function () {
    // console.log("Cap say's HI");
    // } and using cap.key: have fun
// My key is: movies, value against it using cap[key]: Avenger,civile War and using cap.key: undefined
// My key is: key, value against it using cap[key]: have fun and using cap.key: undefined

// // cap[key] -> search for the value inside variable (value inside value key)
// // cap.key  -> it will search for key

// Example:
function fun(obejectParam1, keyParam) {
    // want to print the value
    console.log(obejectParam1[keyParam]);
}
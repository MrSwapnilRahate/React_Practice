// Metadata -> object discription
// DATA -> prop
// value -> value of that prop
// variable -> can you change

let obj = {
    age: 26
}

Object.defineProperty( obj, 
    'name', {
    value: "Swapnil",
    enumerable: true}
);

Object.defineProperty( obj, 
    'age', {
    value: "25",
    enumerable: false}
);

Object.defineProperty( obj, 
    'test', {
    value: "fail",
    enumerable: false}
);

Object.defineProperty( obj, 
    'test2', {
    value: "fail2",
    enumerable: true}
);

Object.defineProperty( obj, 
    'test3', {
    value: "fail3",
    enumerable: false}
);

Object.name = "Kumar";
console.log(obj);
for (let key in obj) {
    console.log("in loops: ", key);
}

/*
    If we create any member usingh defineProperty(objName, <key>, {
    value: <input>
    enumerable: true/false
    })
     
    If value of enumerable is false you are not allowed to iterate over it.
    If value of enumerable is true you are allowed to iterate over it.

    but in both cases you can't override the value
*/

/*
    Use case of enumerable = false
    1. to declare private key which is not overriden and iterable
    
    Example: 
        1. you build a credit card class which have a key amount and it is only changed by function call when payment is done.
        2. It is used in network call when you are preparing you response before network call and response have metadata information
*/
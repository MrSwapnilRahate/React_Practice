/*
* Object, Map -> store data in key, value pair 
*/

/******************* 1. syntax *******************/

const print = console.log;
// // a
let cap = {
    name: "Steve",
    occupation: "Super Hero",
    age: 35
}

// cap.newProp = "Hello";
// delete cap.name;
// print(cap);

// let arrKeys = Object.keys(cap);
// let size = arrKeys.length;
// print(size);

// b. map
const personMap = new Map();

// adding/update a key in map
personMap.set('name', "Jasbir");
personMap.set("age", 35);
personMap.set('occupation', 'Super Hero');
personMap.delete("age");
// print("output: " + personMap.get("occupation"));

// print(personMap.has("name")); // returns true if the key exits, false otherwise
// personMap.clear() // removes everything from the map

// print("object", cap);
// print("map", personMap);
// print("size", personMap.size);

/* 
******** differences between object and map ***********

1. iteration
    Iterate over a map ->
                all the HOF,
                for of loop,
                for in loop does not work
    
    Can't iterate over an object ->
                hof not applicable,
                for of loop not work,
                for in loop work

*/

// a. 
// forEach 
let arr = [1, 2, 3, 4];
// arr.forEach(function (elem, idx) {
//     print("Data at this idx", idx, " is ", elem)
// })

// It will not work
// cap.forEach((elem, key) => { // cap is a object & object doesnt have the forEach functionality
//     print("key", key , ":", elem);  // forEach will not work object
// })

// here it will work bcoz map have that functionality
// personMap.forEach((elem, key) => { // forEach for map
//     print("key", key, " : ", elem);
// })

// b. for of loop
// for (let [elem, key] of personMap) {  // for of will work map
//     print("key", key, " : ", elem);
// }

// for (let [elem, key] of cap) {   // for of will not for object
//     print("key", key, " : ", elem);
// }

// c. for in loop
// for(let key in personMap) {
//     print("key", key, " : ", personMap[key]);
// }
// console.log("after map for in ");

// for(let key in cap) {
//     print("key", key, " : ", cap[key]);
// }

/**
 * object -> 
 *         Yes -> for in
 *         No  -> forEach, for of, hof not work here, 
 * 
 * map ->  
 *         Yes -> forEach, for of, all hof work here
 *         No  -> for in
*/

/**
 * Map -> keys can be of any type
 * Obj -> String, Number, Symbols
 * Usecase: when you want to store properties with a key that has some metadata
*/

// // user -> multiple entries
// const user1 = { id: 1, name: 'Alice' };
// const user2 = { id: 2, name: 'Bob' };
// const user3 = { id: 3, name: 'Charlie' };

// // extended data
// let preferencesObj1 = { theme: 'dark', language: 'en'};
// let preferencesObj2 = { theme: 'light', language: 'fr'};
// let preferencesObj3 = { theme: 'dark', language: 'de'};

// let preferencesMap = new Map();

// preferencesMap.set(user1, preferencesObj1); // (key(user1), value(preferencesObj1))
// preferencesMap.set(user2, preferencesObj2);
// preferencesMap.set(user3, preferencesObj3);

// console.log("first Users name", user1.name);
// console.log("first users preference", preferencesMap.get(user1));


/***********************object format of Implementation *********************/

// const user1 = {
//     id: 1, name: 'Alice',
//     preferences : { theme: 'dark', language: 'en'}
// };
// const user2 = {
//     id: 1, name: 'Bob',
//     preferences : { theme: 'light', language: 'fr'}
// };
// const user3 = {
//     id: 1, name: 'Charlie',
//     preferences : { theme: 'dark', language: 'de'}
// };

// console.log("first Users name", user1.name);
// console.log("first users preference", user1.preferences);


// 2. when you have lot update / delete -> amount of data set -> Map

// print(cap);
// print(personMap);

// print("`````````````````");
// let strMap = JSON.stringify(personMap);
// console.log("strMap: ", strMap);
// print("``````````````````");
// let strObj = JSON.stringify(cap);
// print("strObj: ", strObj);

// stringify work on object, not on map


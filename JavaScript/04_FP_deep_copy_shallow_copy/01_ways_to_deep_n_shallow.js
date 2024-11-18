// let arr = [1, 2, 3, 4, [10, 12], 5, 6];

// // assigning arr to copiedArr
// let copiedArr = arr;
// // console.log(copiedArr);
// copiedArr[2] = 100;
// console.log("arr:- ", arr, "copiedArr: ", copiedArr);

/**
 * array, object -> two types of values -> primitive(values), non primitives(reference)
 * Assignment -> 
 *   values -> are not copied, only main address copied
 *   reference -> they are also not copied, only main address copied
*/

/* 
 * shallow copy: shallow copy of an object/Array is a copy whose properties share the same refernces
 * (point to the same underlying values) as those of the source object from which copied
 * object is formed
 * shallow copy : 
 *   value -> values will be copied and they have diff mem
 *   reference -> new reference will be created but the values inside the reference will be pointing towards same location
*/

// --------------------------------------- spread (is not a deep copy) (shallow copy) --------------------------------------------// 
// Deep Copy - create complete independent copy of original object 
        // changes in nested object will not affect original object
// Shallow copy - spread oprator - creates a new object but it only copies the reference to the original object
        // it means changes to the nested object will reflect in original object

// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// let spreadArray = [...arr];
// spreadArray[2] = 100;
// // spreadArray[4][1] = 300;

// spreadArray[4][1] = 300;
// console.log("outputs ", spreadArray, arr);

// outputs  Array(7)0: 1, 1: 2, 2: 100, 3: 4, 4: (2) [10, 300], 5: 5, 6: 6
// Array(7)0: 1, 1: 2, 2: 100, 3: 4, 4: (2) [10, 300], 5: 5, 6: 6


// ----------- Object.assign -------------------- //

let person = {
    firstName: 'Jhone',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
};

// let veryShallowCopy = person;
// veryShallowCopy.firstName = "Tapaswini";
// console.log("person", person);
// console.log("copiedObject", veryShallowCopy);

// assign operator create deep copy till level 1 same like a spread oprator
let copiedObject = Object.assign({}, person);
copiedObject.lastName = "Rahate";
copiedObject.address.street = "138, Katol";

// console.log("person", person);
// console.log("copiedObject", copiedObject);

// work in same way as assign operator
// let copiedObject = {...person};


// ------------------------------------ Deep Copy ------------------------------------- //

// Deep Copy : JSON.stringify and JSON.parse

// convert obj to string
let stringSyntaxOfobject = JSON.stringify(person);
// console.log(stringSyntaxOfobject);

// // how to get to know is this a string?
// console.log(typeof stringSyntaxOfobject);

// // deep copy -> object like string
// // JSON.parse(stringSyntaxOfobject) convert string in to the new object
// // this deep copy is completely seprate from the original object 
let deepCloneObj = JSON.parse(stringSyntaxOfobject);
deepCloneObj.address.street = "south 1st street";

// console.log("person", person);
// console.log("copiedObject", deepCloneObj);

// shallow -> copied refernce (address)
//     spread (...person);
//     object.assign ({}, person);
// deep -> copied  value (create copy of original object to a new object )
//     JSON.stringify(person); & JSON.parse();

// ------------------------ Deep copy (Stringify) of Array ----------------------------- //

let arr = [1, 2, 3, 4, [10, 12], 5, 6];
let stringArr = JSON.stringify(arr);
console.log(stringArr);

const deepArray = JSON.parse(stringArr);
deepArray[2] = 100;
deepArray[4][1] = 300;
console.log("arr: ", arr, "deepArray: ", deepArray);

// array/object -> (stringify) -> string -> (parse) -> new object

// JSON.parse -> bottleNect (It is a costly operation)





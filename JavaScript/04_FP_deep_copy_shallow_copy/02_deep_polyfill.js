// this object -> copy of it
let person = {
    firstName: 'Jhone',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", {name: "Jai", lastName: "Roy"}],
    sayHi: function() {
        console.log("Hi Class!");
    }
};

// for (let k in person) {
//     console.log("Key: ", k, " value: ", person[k]);
// }

// for (let k in person.friends) {
//     console.log("Key: ", k, " value: ", person.friends[k]);
// }

// we are using recursion for deep copy bcoz the parse of array is costly operation 

// it will work but this is not correct way to code it
// bcoz it will not work in the case for array
// function superClone(obj) {
//     // create new object
//     let newObj = {};
//     // copy all the keys and values
//     for (let key in obj) {
//         let isKeyObj = typeof obj[key];

//         if (isKeyObj == "object") {
//             let newSmallCopiedObj = superClone(obj[key]);
//             newObj[key] = newSmallCopiedObj;
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     // return the obj
//     return newObj;
// }

  
function superCloneEffective (input) {
    if(!Array.isArray(input) & typeof input !== 'object') {
        return input; // function or either primitive data types
    }
    // create a new container to clone values
    let clone = Array.isArray(input) ? [] : {};

    // copy all the keys and values
    for(let key in input) {
        const value = input[key];
        clone[key] = superCloneEffective(value);
    }
    // return the obj
    return clone;
}

let superDeeplyCloneObj = superCloneEffective(person);
superDeeplyCloneObj.lastName = "Rahate";
superDeeplyCloneObj.address.street = "south 1st street";

console.log("person", person);
console.log("superCopiedObject", superDeeplyCloneObj);

// why does shallow copy exist not deep copy ?
// Answer : We can have array and object that can have "n" level if nesting an there 
// size is only limited by js heap so for performance point of view it good to have 
// shallow copy

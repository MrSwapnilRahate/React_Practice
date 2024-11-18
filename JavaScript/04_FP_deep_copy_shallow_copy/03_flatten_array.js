// input -> nested array
let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 110]]];
// // output -> single level of array with num
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 110  ]:

// [4, 5] -> [4, 5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]

// Array.prototype.flat() -> you have till how many level you want to flattern So, we pass infinity
let flatternOutput = input.flat(Infinity);
console.log(flatternOutput);

// (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 110]

// am assuming that there is always array not object inside the array
// with spread oprator
function flattern(srcArr) {
    let newArr = [];
    for(element of srcArr) {
        if(Array.isArray(element)){
            let flatterArrayUsingRecursion = flattern(element);
            newArr.push(...flatterArrayUsingRecursion);
        } else {
            newArr.push(element);
        }
    }
    return newArr;
}


// without spread oprator
function flattern(srcArr) {
    let newArr = [];
    for(element of srcArr) {
        if(Array.isArray(element)){
            let flatterArrayUsingRecursion = flattern(element);
            for (ele of flatterArrayUsingRecursion) {
                newArr.push(ele);
            }
        } else {
            newArr.push(element);
        }
    }
    return newArr;
}


// flattern an object

let person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    },
};

person = {
     firstName: 'Jhon',
     lastName: 'Doe',
     "address.street": 'North 1st street',
     "address.city": 'San Jose',
     "address.country": 'CA',
     "address.postCodes.firstBlock": 10,
     "address.postCodes.secondBlock": 20
}





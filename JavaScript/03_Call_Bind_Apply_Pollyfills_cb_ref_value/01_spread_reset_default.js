// Statement 1


// function fn(param1, param2, param3) {
//     console.log("Hi param are ", param1, param2, param3);
// }
// fn("Hi", "Hello", "Hola");
// Hi param are  Hi Hello Hola

function fn(param1, param2, param3 = "default Value") {
    console.log("Hi param are ", param1, param2, param3);
}
fn("Hi", "Hello");  // if no param pass it will access the default value
// Hi param are  Hi Hello default Value 


// Statement 2

// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr;  
// // arr2 and arr has the same address
// // its like we are giving the memory address of arr to arr2
// // now both arr and arr2 have the same memory address

// // in non primitive data type like array, object, function
// // if we are assigning to new variable (arr2) it means
// // we just giving the memory address of arr
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;

// console.log("actual Array", arr);
// console.log("modified Array: ", arr2);
//  // actual Array (5) [1, 2, 200, 4, 100]
// // modified Array:  (5) [1, 2, 200, 4, 100]


//  ********************************************************************************* //

// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr; 
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// arr2 = 300;
// add if we are giving just value now it will store value 
// and the address of arr which is saved in arr2 got deleted
// and after assigning the value it will just the value not address

// in primitive data type (number, string, boolean) if we assigning to new 
// new varible arr2 it will store value not memory address

// console.log("actual Array", arr);
// console.log("modified Array: ", arr2);

// actual Array (5) [1, 2, 200, 4, 100]
// modified Array:  300


// non primitive (array, object, function) 
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;      // because arr is array (non primitive) so arr2 will store the address of arr

// primitive (number, string, boolean)
// arr2 = 300;          // because 300 is number (primitive) so the arr2 will now store the value 300 and address in that got deleted


// array dila tr address gela ani value dili actual value geli


// Statement 2 ---------------------------------------------

// Example 1:  Shallow Copy

// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr; 
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// arr2 = 300;

// console.log("actual Array", arr);
// console.log("modified Array: ", arr2);


// Example 2: Deep copy --------------------------------------

// let arr = [1, 2, [3, 4], 5, 6];
// // Spread copies value from one array to another array for the first level only.

// let arr2 = [...arr];  
// arr2.pop();
// arr2.push(100);
// arr2.push(300);

// console.log("actual Array: ", arr);    
// console.log("modified Array: ", arr2);

// actual Array:  (5) [1, 2, Array(2), 5, 6]
//  modified Array:  (4) [1, 2, 300, 5, 100]

// both arrays (arr, arr2) pointing to different memory address


// let arr = [1, 2, [3, 4], 5, 6];
// // Spread copies value and ref from one array to another array for the first level only.

// let arr2 = [...arr];  
// // because in spread oprator we copy entire array to another array
// // so when copying arr in to arr2, at arr2[2] we copied memory address 
// // of array present in arr at arr[2] (which is [3,4])
// // so now in arr2 at arr[2] we have memory address
// // so any change we are doing at that index that will be reflected in both arrays( actual array and modified array )
// arr2.pop();
// arr2.push(100);
// arr2[2][0] = 500;

// console.log("actual Array: ", arr);    
// console.log("modified Array: ", arr2);

// actual Array:  
// (5) [1, 2, Array(2), 5, 6]
// 0: 1, 1: 2, 2: (2) [500, 4], 3: 5, 4: 6

// modified Array:  
// (5) [1, 2, Array(2), 5, 6]
// 0: 1, 1: 2, 2: (2) [500, 4], 3: 5, 4: 6
 
// let arr  = [1, 2, [3, 4], 5, 6]
// [value, value, ref, value, value]

// Statement 3 -------------------------------------------

let a = 10;
// copied value -> primitive types
let b = a;
console.log("value of a : ", a, " value of b ", b);
b = 20;
console.log("value of a : ", a, " value of b ", b);
// value of a :  10  value of b  10
// value of a :  10  value of b  20

// let arr = [1, 2, 3, 4];
// // you get the ref
// let arr2 = arr;

// let arr  = [1, 2, [3, 4], 5, 6]
// [value, value, ref, value, value]

// let arr2 = [...arr];  // deep copy or I say actual copy  of array


// Statement 4 -------------------------------------------------------------

// rest -> It is uesd as parameter of fn
// use you to collect remaining parameters numbers of params

// function fn(param1, param2) {
//     console.log("params are: ", param1);
//     console.log("Rest parameters: ", param2);
// }
// fn("Hi", "Hello");
// params are:  Hi
// Rest parameters:  Hello

// ---------------------------------

function fn(param1, ...param2) {    // because of spread (...param2) all values collected in the form of array 
    console.log("params are: ", param1);
    console.log("Rest parameters: ", param2);
}
fn("Hi", "Hello", "bolo", "shallo", "khalo", "hoho", "hehe");
// params are:  Hi
// Rest parameters:  (6) ['Hello', 'bolo', 'shallo', 'khalo', 'hoho', 'hehe']


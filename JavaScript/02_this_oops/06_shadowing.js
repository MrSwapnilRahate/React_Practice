// Statement 1:
// All variables are in the same scope and pointing to same address memory
// var fruits = "apple";
// console.log(fruits);  // apple
// {
//     console.log(fruits);  // apple
//     var fruits;
//     console.log(fruits);  // apple
//     fruits = "orange";
//     {
//         console.log(fruits);  // orange
//     }
//     console.log(fruits);  // orange
// }
// console.log(fruits);  // orange


// Statement 2:
 
// let fruits = "apple";
// console.log(fruits);  // apple
// {
//     console.log(fruits);  // apple
//     console.log(fruits);  // apple  
//     fruits = "orange";
//     {
//         console.log(fruits);  // orange
//     }
//     console.log(fruits);  // orange
// }
// console.log(fruits);  // orange


let fruits = "apple";
console.log(fruits);  // apple
{
    // console.log(fruits);  // ref error
    let fruits;  
    // but if we redeclared let for same in block scope, then in block before its redeclared its value is TPZ 
    // and it will throw the reference error
    // and also that same block scope ended access also ended
    console.log(fruits);  // undefined
    fruits = "orange";
    {
        console.log(fruits);  // orange
    }
    console.log(fruits);  // orange
}
console.log(fruits);  // apple

// any varible (let, var, const) can access from anywhere

// but only var can use without its declared and its value is undefined

// let cant use before its value is declared, before that it is in TDZ
// only after declaration let value we can use anywhere, even block scope, until the value is reassign

// but if we redeclared let for same in block scope, then in block before its redeclared its value is TPZ 
// and it will throw the reference error
 // and also that same block scope ended access also ended
    


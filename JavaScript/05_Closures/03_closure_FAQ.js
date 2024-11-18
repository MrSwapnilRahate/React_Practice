// // Q.1
// function outer() {
//     let arrFn = [];
//     // var i = 0;
//     for (var i = 0; i < 3; i++) {  
//         arrFn.push(function fn() {
//             i++;                  
//             console.log(i); 
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer(); // arrFn = [fn, fn, fn]
//  // var is function scope, share same i in all closure
//  // loop created three functions and store it in arrFn(array) -> [fn, fn, fn]
//  // and each functions created new closure
//  // we are creating functions multiple times within same EC, So closure is common for all thoes functions
//  // i is same for all function 
//  // thats why i will start increase after where the loop is stop iterating (means after i = 3)
// console.log(arrFn);
// arrFn[0](); // 4
// arrFn[1](); // 5
// arrFn[2](); // 6

// Q.2 - fn is getting different values of i because here
//  //   block scope is different for every iteration
// function outer() {
//     let arrFn = [];
//     for (let i = 0; i < 3; i++) {
//         arrFn.push(function fn() { // all functions maintain their separate i
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer(); // arrFn = [fn, fn, fn]
// arrFn[0](); // 1    // let is block scope // so all function create separate closure and maintain their separate i
// arrFn[1](); // 2
// arrFn[2](); // 3


// Q.3 -> act same like a var, i shared in all the function
function outer() {
    let arrFn = [];
    let i = 0;
    for (i = 0; i < 3; i++) {
        arrFn.push(function fn() { // all functions have same i
            i++;
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer(); // arrFn = [fn, fn, fn]
arrFn[0](); // 4
arrFn[1](); // 5
arrFn[2](); // 6
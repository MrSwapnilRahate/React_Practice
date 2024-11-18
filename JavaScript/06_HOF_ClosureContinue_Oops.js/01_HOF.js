// let arr = [1, 2, 3, 4, 5, 6];
// // for square of every element in array
// for(i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
// }
// console.log("arr: ", arr);

// // for cube of every element in array
// for(i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i] * arr[i];
// }
// console.log("arr: ", arr);


// // above is not a good way to do that lets use HOF
// const transform = function (arr, logic) {
//     let res = [];
//     for(ele of arr) {
//         res.push(logic(ele)); // Logic is just accepting reference or address (either it is squareLogic or cubeLogic and redirecting to that function's address)
//     }
//     return res;
// }

// // logic of square
// const squareLogic = function (ele) {
//     return ele * ele;
// }

// // logic of cube
// const cubeLogic = function(ele) {
//     return squareLogic(ele) * ele;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// console.log("Transform to Square: ", transform(arr, squareLogic));
// console.log("Transform to Square: ", transform(arr, cubeLogic));

/*
    HOF -> are the function that accepts a fn as a parameter or returns a function
    Callbacks -> function that are passed as a parameter to a another are known as cb fns
    They usually be called by HOFns
*/

/*
    * HOF -> majorly available on array
    * these fn doesn't change the source array
        * foreach
        * Map
        * filter
        * reduce
        * sort
*/

// ---------------------- forEach --------------------------- //

// // traversal -> it is used to traverse the arr
// let arr = [2, 3, 4, 5, 6, 7, 9];
// function printEleLogic(ele) {
//     console.log(ele * ele);
// }

// let rVal = arr.forEach(printEleLogic);
// // console.log(rVal); // rVal is undefined forEach

// arr.forEach((ele) => console.log(ele * ele));

// ------------------------- polyfills of forEach ------------- //

// Array.prototype.myForEach = function (logic) {
//     for(ele of this) {
//         logic(ele);
//     }
// }

// arr.myForEach(printEleLogic);


// ------------------------- Map ----------------------------- //

// // it changes every element according to the cb
// let arr = [2, 3, 4, 5];
// // logic of square
// const squareLogic = function (ele) {
//     return ele * ele;
// }

// // logic of cube
// const cubeLogic = function(ele) {
//     return squareLogic(ele) * ele;
// }

// let squareArr = arr.map(squareLogic);
// console.log("square array: ", squareArr);

// let cubeArr = arr.map(cubeLogic);
// console.log("cube array: ", cubeArr);

/*
diff betn forEach and map 
    map -> * returns a new array with the results of applying a function to each array element.
           * the original array is not modified
           * you can chain other methods like 'filter' or 'reduce' after it
    
    forEach -> * does not return anything.
               * it simply execute the provided function on each element in the array
               * return undefined
               * you canot chain method directly
*/


// ---------- polyfill of map ----------------- //

/* 
    * .map - * already exits in JS
             * is used to apply a function to each element of an array and 
               return a new array with the results.
    
    * myMap ( polyfill of map) - * creating exactly same method which work like .map method which is built in js.
                                 * its a custom method we created working like .map.
                                 * in that we can add our extra functionalities that are not present in that built in .map function.
                                 * so, we attach our custom myMap method to Array in JS using prototype, so now it is awailable for all arrays which we will define in future.
*/

// Array.prototype.myMap = function (callBackMethod) {
// // above line adds a new method (myMap) to all arrays in JS.
// // our custom myMap method accepts a one arguement which is function (callBackMethod) that will be applied to each element in the array.
//     let res = [];
//     // created empty(res) array to store the transformed elements after the "calBackMethod" is applied to each element.
//     for(let ele of this) {
//         // this = array on which 'myMap' was called
//         res.push(callBackMethod(ele));
//     }
//     return res;
// };

// console.log("cube array using myMap: ", arr.myMap(cubeLogic));


// ------------------------------- filter ------------------------------- //

// filter - it filters the elem on the basis of testlogic

// traverse through every elem -> elem to cb fn and if cb fn returns true
// -> it will add that elem to a new Arr at the end it returns the new Arr

// let arr = [1, 2, 3, 11, 4, 5, 34, 12];

// function isOdd(ele){
//     return ele % 2 == 1;
// }

// function isGtr5(ele) {
//     return ele > 5;
// }

// // odd values.
// console.log("Odd Values: ", arr.filter(isOdd));
// // all numbers greater than 5
// console.log("Greater than 5: ", arr.filter(isGtr5));

// let arr2 = [{name: "Swapnil", lastName: "kumar"}, {name: "Swapnil", lastName: "ok"}, {name: "Raja", lastName: "Baja"}, {name: "oyy", lastName: "hoy"}];
// console.log(arr2.filter((obj) => {
//     return obj.name === "Swapnil";
// }))


// ------------------ polyfills of filter ------------------- //

// Array.prototype.myFilter = function(calBackMethod) {
//     let res = [];
//     for(ele of this){
//         if (calBackMethod(ele)){
//             res.push(ele);
//         }
//     }
//     return res;
// }

// console.log("hey", arr.myFilter(isOdd));


// ------------------------ reduce ---------------------------------- //

let elems = [1, 2, 3, 4, 5];

function sum(sumSoFar, ele) { 
//     // sumSoFar(accumulator) -> which holds the cumulative result of function as it processess each element of the array.
//     // by default accumulator start with the first element of the array (unless you provide an initial value)
//     // ele -> current ele of the array

    return sumSoFar + ele;
}
function product(productSoFar, ele) {
    return productSoFar * ele;
}

// console.log("Sum: ", elems.reduce(sum));
// console.log("Product: ", elems.reduce(product));


// ------------ polyfills of reduce ------------------ //

Array.prototype.myReduce = function (logic, initialValue) {
    let result = initialValue;
    for(let ele of this) {
        result = logic(result, ele)
    }
    return result;
}
console.log("Sum: ", elems.myReduce(sum, 0));
console.log("Product: ", elems.myReduce(product, 1));



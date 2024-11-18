// Array is an object

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//         0, 1, 2, 3, 4, 5, 6, 7
// ------------------------- Slice and Spliced --------------------------------- //

// Slice (select)

// it gives you the copy
// arr.slice(start index, end index+ 1);
//it copies the index from (starting index including, ending index + 1)
// let slicedArr = arr.slice(2, 5);
// console.log("silcedArr: ", slicedArr);

// Splice (delete)

// modifies the original array
// arr.splice(starting index, inding index + 1)
// let splicedArr = arr.splice(2, 5);
// console.log("splicedArr: ", splicedArr, "Arr: ", arr);

// ---------------------------- Concat ------------------------------------- //

// It concat a two array without chainging the original array
// first parent array get copied followed by concat array

// let concatArr = arr.concat([100, 200, 300]);
// console.log("concatArr: ", concatArr);
// console.log("arr", arr);

// --------------------------- split and join ---------------------------- //

// split splits a string into an array of string with the use of a delimiter
// let str = "hi I am Swapnil";
// let arrStr = str.split(" ");
// console.log("splitted Array: ", arrStr);

// joins the array of string into string on the basis of delimiter
// let joinedStr = arrStr.join(" ");
// console.log("joinedStr", joinedStr);

// we can use any delimiter
// let joinedStr = arrStr.join("+"); 
// console.log("joinedStr", joinedStr);


// --------------------------- trim ---------------------------- //
let str = "              Hi I am Swapnil     ";
let trimedStr = str.trim();
console.log("string: ", str);
console.log("trim string: ", trimedStr);




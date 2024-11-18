// in js num datatype -> 64 bit
// let num = 1000000 ^ 100000000000000000000000000;
// console.log(num);

// if you want to store a value that is greater than 2^63-1
// BigInt -> Stored in heap
// It is a primitive
// You can only do operations among bigInt


// 1 
// let bigNum = BigInt(1000000) * BigInt(10000000);
// console.log("big num", bigNum);

// 2
// for BigInt -> either BigInt or n at last 
// let bigNum1 = 100000000000000000000000n;
// let bigNum2 = 1234578n;
// let res = bigNum1 * bigNum2;
// // console.log("product", res);

// let div = BigInt(res / 10000n);
// console.log("div", div);


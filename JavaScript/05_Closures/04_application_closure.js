// function counter(args) {
//     let count = 0;
//     count++;
//     if(args === 0){
//         return count;
//     } else {
//         return function inner(args) {
//             count++;
//             if(args === 0) {
//                 return count;
//             } else {
//                 return inner;
//             }
//         }
//     }
// }

// // console.log(counter(0)); // 1
// // console.log(counter()()(0)); // 2
// // console.log(counter()()()(0)); // 3
// // console.log(counter()()()()(0)); // 4
// // console.log(counter()()()()()()(0)); // 5
// // console.log(counter()()()()()()()()(0)); // 6
// // infinite currying 
// // Calling blank () means function is invoked but it will not return anything 
// // in last (0) we pass 0 means i'm stopping curryying at thet point and it will print howm many times the function is invoked (called)


// // Q.2
//  let sum = function (args1) {
//     var a = 0;
//     if (args1 === undefined) {
//         return 0;
//     } 
//     return function (args2){
//         if(args2) {
//             return sum(args1 + args2);
//         }
//         return args1;
//     }

// };

// console.log(sum()); // 0
// console.log(sum(1)()); // 1
// console.log(sum(3)(4)()); // 7
// console.log(sum(3)(7)(8)); // 18

// // simpler version of above code
// function sum(val) {
//     if(val == undefined) {
//         return 0;
//     } else {
//         let res = val;
//         return function smallerSumhelperMethod(val) {
//             if(val == undefined) {
//                 return res;
//             } else {
//                 res += val;
//                 return smallerSumhelperMethod;
//             }
//         }
//     }
// }

// function sum(a) {
//     if (a == undefined) {
//         return 0;
//     }
//     return function (b) {
//         if (b != undefined) {
//             return sum(a + b);
//         }
//         return a;
//     }
// }

// console.log(sum()); // 0
// console.log(sum(1)()); // 1
// console.log(sum(3)(4)()); // 7
// console.log(sum(3)(7)(8)); // 18


// ------------------------- Private Variable ---------------------------- //

// memoitation of function
// create private variable
// function createEvenStack() {
//     return {
//         items: [],
//         // push: function (val) {}
//         push(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 this.items.push(item);
//             } else {
//                 console.log("Please input even value");
//             }
//         },
//         // pop: function() {}
//         pop() {
//             return this.items.pop();
//         }
//     };
// }

// const stack = createEvenStack();
// stack.push(10);
// stack.push(5);
// console.log("pop ele: ", stack.pop());
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log(stack.items);
// stack.items = [10, 100, 1000]; // prevent this behaviour
// console.log(stack.items);



// there is no private data type exits in JS, evry thing is public
// we have only var, const, let
// and if i want private variable so we can code like below code
// because of (let items = []), it create closure, and because of closure it behave like a private
// function createEvenStack() {
//     let items = [];
//     return {
//         // push: function (val) {}
//         push(val) {
//             if (val % 2 == 0) {
//                 console.log("Is pushed");
//                 items.push(val);
//             } else {
//                 console.log("Please input even value");
//             }
//         },
//         // pop: function() {}
//         pop() {
//             return items.pop();
//         }
//     };
// }

// const stack = createEvenStack();
// stack.push(10);
// stack.push(5);
// console.log("pop ele: ", stack.pop());
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log(stack.items);
// stack.items = [10, 100, 1000];
// console.log(stack.items);


/*
    * Memoization : sum calculation take a lot of time with
                    memoization we can store result of costly calculations -> useMemo
*/

function calc(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += n;
    }
    return sum;
}

function memoize(cb) {
    let cache = {};
    return function(val) {
        // checking val is present in cache or not if present then enter in if block if not then got to else block 
        // and with that value call the call back function (calc)
        if(cache[val] != undefined) { 
            return cache[val]; // value is present already so return from here with the value which present already no need to calculate
        }
        // else block because value is not present in cache
        const res = cb(val); // calling callback function(calc) with the value
        cache[val] = res; // store in to cache
        return res; // return result
    }
}

let efficientCalcFn = memoize(calc); // means calling return function of memoize
console.time();
let res2 = efficientCalcFn(1000000);
console.log("res", res2);
console.timeEnd();


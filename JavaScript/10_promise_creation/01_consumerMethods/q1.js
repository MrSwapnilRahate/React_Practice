let p = new Promise(function (resolve, reject) {
    setTimeout(function () { // this line is going to be ignored after 2s
        reject(new Error("some value v1"));
    }, 2000);

resolve("some error e1"); // this promise resolved with this value and other all setTimeout functions are ignored 
// any further reject and resolve and setTimeout will be ignored

setTimeout(function () { // this line is going to be ignored after 2s
    reject(new Error("some value v2"));
}, 2000);

resolve("some error e2"); // this line is going to be ignored

setTimeout(function () { // this line is goinig to be ignored after 2s
    reject(new Error("some value v3"));
}, 2000);
});

/* Statement 1 */
p.then(null, function (err) {  // so promise is already is already been resolved so this line also will igonored 
    console.log(22);
    console.log(err);
});

p.catch(function (err) {  // same here thi s will aslo ignored 
    console.log(27);
    console.log(err);
})

p.finally(function () {  // finally will always going to execute either the promise is rejected or resolved
    console.log("32: ", 1);
})

/* Statement 2 */
// p.then(
//     function (val) {
//         console.log("38: ", val);
//     }, 
//     function (err) {
//         console.log(err);
//     }
// );

/* 
    finally does not take any arguement -> forwards the arguement recieved
    finally will not return any thing except error. If you try to return something that is not error it will going to get ignored.
*/

const fs = require("fs");

// p.finally(function () {
//     console.log("finally: ", 2);
//     throw new Error("Hello");
//     // return Promise.resolve("some Error"); // this will ignore bcoz this is a promise
// }).finally(function () {
//     console.log("finally: ", 3);
//     return fs.promises.readFile("F1.txt"); // this will also ignored
// }).then(function (val) {
//     console.log("then with finally: ", val); // this will execute
// }).catch(function (err) {
//     console.log("catch with finally: ", err); // there is no error so this will also ignored
// });

Promise.resolve(1)
.then(() => 2)    // return 2
.then((data) => {
    console.log("68: ", data);
    return 3;
}).then((value) => {
    console.log(value);
    return value * 3;
}).then(console.log)    //~ .then((data) => console.log(data))


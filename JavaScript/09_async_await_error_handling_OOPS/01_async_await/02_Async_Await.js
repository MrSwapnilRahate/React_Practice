const fs = require("fs");
console.log("Before");

const promise = fs.promises.readFile("./f1.txt");

// // Consumption of promise
// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     })

// promise
//     .catch(function (err) {
//         console.log("err", err);
//     })


// *************************** async Await *********************** //
// await only works inside a function with async keyword

async function fn() {
    try{
    const data = await promise;
    console.log("Data inside the function is: " + data);
    } catch (err) {
        console.log("err: ", err);
    }
}
fn();



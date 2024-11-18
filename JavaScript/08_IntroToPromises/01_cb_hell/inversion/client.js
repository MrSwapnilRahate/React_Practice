const { runMlAlgo } = require("./lib");
const { prumMlAlgo } = require("./lib");

console.log("Before");

let amount = 100;
let priceOfOne = 20;

/*
    takes the amount and callbacks as param and it calls the cb for us
*/

// runMlAlgo(amount, cb);
function cb() {
    amount = amount - priceOfOne;
    console.log("Amount: ", amount);
}

const promise = prumMlAlgo();
promise.then(() => {
    cb();
}).catch((err) => {
    console.log("ohh! I hit by error");
})

console.log("After");

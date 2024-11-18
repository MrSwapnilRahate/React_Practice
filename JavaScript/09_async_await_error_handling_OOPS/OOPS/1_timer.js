/*********************setTimeout -> clearTimeout *********************/
// console.log("Before");
// function cb() {
//     console.log("Set-timeouts cb has been called");
// }

// // setTimeout(cb, 1000);

// const timerId = setTimeout(cb, 1000);
// // console.log(timerId);

// function canceller() {
//     console.log("Cacelling the timeout");
//     clearTimeout(timerId);
// }

// setTimeout(canceller, 2000);
// console.log("After");

/************************ setInterval, clearInterval ************************/
console.log("Before");
function cb() {
    console.log("Interval called" + Date.now());
}
// setInterval(cb, 2000);

const timerId = setInterval(cb, 1000);


function cancelInterval() {
    console.timeEnd();
    console.log("Cacelling the interval timer");
    clearInterval(timerId);
}

console.time();

setTimeout(cancelInterval, 5000);
console.log("After");

// cb -> of setTimeout -> higher precedence then cb of setInterval -> why precedence of SINt < STime
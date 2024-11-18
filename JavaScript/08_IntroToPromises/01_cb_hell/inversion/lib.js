function runMlAlgo(amount, cb) {
    console.log("running ml algo");
    console.log("processing payment");
    setTimeout(function () {
        console.log("payamet done");
        cb();
        cb();
        cb();
        cb();
        cb();
    }, 1000);
}

function prumMlAlgo() {
    return new Promise((resolve, reject) => {
        console.log("running ml algooo");
        console.log("processing paymenttt");
        setTimeout(function () {
            console.log("payamet done");
            resolve();
            resolve();
            resolve();
            resolve();
        }, 1000);
    })
}

module.exports = {
    runMlAlgo,
    prumMlAlgo
}
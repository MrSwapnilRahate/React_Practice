Promise.myPromiseAll = function (arrayOfPromise) {
    return new Promise(function (resolve, reject) {
        if(!Array.isArray(arrayOfPromise)){
            reject("Expected a array of promise.");
            return;
        }

        let unresolvedPromises = arrayOfPromise.length;
        const resolvedPromiseArray = [];
        if(unresolvedPromises == 0) {
            resolve(resolvedPromiseArray);
            return;
        }

        // what does a promise return: future value of the task that has already started.
        // async await -> iterate over the array

        arrayOfPromise.forEach(async(promise) => {
            try{
                const value = promise;
                resolvedPromiseArray.push(value);
                unresolvedPromises--;
                if(unresolvedPromises == 0){
                    resolve()
                }
            }catch(err){
                reject(err);
            }
        })
    });
}

/*-------------------------- Consumption ---------------------------*/
// when all promise are resolved
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("Foo");
    }, 1000);
});

Promise.myPromiseAll([p0, p1, p2])
    .then(console.log)
    .catch((err) => {
    console.log("Promise got rejected with error: " + err);
});

// when any of the promise got rejected
// const p0 = Promise.resolve(3);
// const p1 = 42;
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         reject("Foo");
//     }, 1000);
// });

// our Method
// Promise.myPromiseAll([p0, p1, p2])
//     .then(console.log)
//     .catch((err) => {
//     console.log("Promise got rejected with error: " + err);
// });

// Real
// Promise.all([p0, p1, p2])
//     .then(console.log)
//     .catch((err) => {
//         console.log("Promise got rejected with error: " + err);
//     });

 
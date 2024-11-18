const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 2000, 'one');
})

const secondPromise = new Promise((res, rej) => {
    // setTimeout(res, 1000, 'two');
    setTimeout((arg) => {
        res(arg)
    }, 1000, "two")
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// Promise.all -> print only if all promise resolved
// Promise.any -> print if anyone is resolved
// Promise.race -> print any one which is faster that will print 

// diff betn any and race -> any will print only if promise is resolved
//                              & race will print either promise is resolved or rejected                

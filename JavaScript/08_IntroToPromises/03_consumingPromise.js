const fs = require("fs");

console.log("before");

/*
    Promise based fn -> do not take cbs
    -> the outcome of the promise is determined by the function that will give you the promise.
*/ 

// task has started when fn is called
const promise = fs.promises.readFile("./f1.txt");

/**
 * "then" is an event listner over promise -> fn when promise is resolved (task is done)
 *    -> Promise gives us a method named "then" which is an event listner over promises and it triggers when the promise is done
 */

promise.then((data) => {
    console.log("My content is: " + data);
});

/* 
    catch -> is also an event listner on promises -> fn when promise is rejected (you got an error)
            -> catch is also an event listner over promise and it triggers when the promise is rejectes (you get an error).
*/

promise.catch((err) => {
    console.log("We hit by error" + err)
})



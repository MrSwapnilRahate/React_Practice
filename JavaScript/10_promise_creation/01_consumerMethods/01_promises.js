/*
    what were issued with callbacks -> promises: inversion of control
        // cb based async fn -> cb to third party fns -> async fn can call your cb multiple times
        // cb but here we send cb to the promise API: promise can be rejected or resolved once in the life time
*/

let fs = require("fs");

// then
// then is event listner (handler) for a promise when promise state changes to resolved

// let promise = fs.promises.readFile("f11.txt");

// promise.then(function (data) {
//   console.log("Hi the data 1st Statement: " + data);
// });

// promise.then(function (data) {
//   console.log("Hi the data 2nd Statement: " + data);
// });

// promise.then(function () {
//   console.log("I am not accepting");
// });
// till now all then seqentially after promise is complete (after reading f1.txt file)

// but bellow 1st then will execute after the promise is resolved but 2nd the which is
// chainned to 1st then that will print undefined
// bcoz fro printing 2nd then, 1st then must have to return data then only 2nd will print that data
// promise.then(function (data) {
//   console.log("Hi the data is: " + data);
//        return data;
// }).then(function (data) {
//     console.log("Hi the data is: " + data);
// })
// promise
//   .then(function (data) {
//     console.log("Hi the data is: " + data);
//   })
//   .then(function (data) {
//     console.log("Hi the data is: " + data);
//   });

// catch
// catch is an event listener (handler) for a promise when promise state changes to reject

// promise
//   .catch(function (error) {
//     console.log("Hi the data is: ", error.message);
//   })

//   .catch(function (error) {
//     console.log("Hi the data is: ", "no error message");
//   });

/*
    then takes two parameter -> both cb fns
    first parameter -> is compulsory and that isinvoked when your promise is resolved
    second parameter -> if present called when promise is rejected
*/

// success call back
function scb(data) {
  console.log("Inside then: " + data);
}

// failure call back
function fcb(error) {
  console.log("Inside catch: ", error.message);
}

// promise.then(scb);
// promise.then(scb, fcb);

// promise.then(null, fcb); // catch using then
// promise.then(fcb);

function finallCB() {
  console.log("I will be called finally");
}

// promise.finally(finallCB);

/*
    promise.catch -> promise.then(null, fcb);
    try catch finally

    then catch

    then, catch and finally -> event listner -> promise all of then will execute
    resolve, reject, finally pn both the cases
*/

// 01.
// On reject ->
// promise.then(null, fcb), promise.catch(fcb), promise.finally(finallCB)

/*
    Promise
    1. resolve -> promise with state resolved whatever you pass into it treat as the value
    2. reject -> promise with state rejected whatever you pass into it treat as the value
*/

// const promise = Promise.resolve("Promise is resolved with value: v");
// promise.then (function(value) {
//     console.log("Inside then block, value: ", value);
// });

// const promise1 = Promise.reject("Promise is rejected with value: Some error");
// promise1.catch(function (err) {
//     console.log("90");
//     console.log("Inside catch block: ", err);
// });

// promise.then(function (err) {
//     console.log("Inside then block, value: ", err);
// }).catch(function (err) {
//     console.log("Inside catch block: ", err);
// });

// promise1.then(null, function (err) {
//     console.log("Inside catch block: ", err);
//     return 100;
// }).then(function (err) {
//     console.log("Inside then block, value: ", err);
// });

/***************************** 02 ******************************/

// let promise = Promise.resolve(10);

// promise.then(function (data) {
//     console.log("137 ", data);
// }).then(function (firstThenVal) {
//     console.log("139 ", firstThenVal);
//     return 100;
// }).then(function (secondThenVal) {
//     console.log("142 ", secondThenVal);
//     return fs.promises.readFile("f1.txt");
// }).then(function (thirdThen) {
//     console.log("145: " + thirdThen);
// })

/*************************** Q3 *************************/

let promise = Promise.resolve(10);

promise
  .then(function (data) {
    console.log("then 150: ", data);
    return "hello";
  })
  .catch(function (firstThenVal) {
    console.log("catch 154: ", firstThenVal);
    return 100;
  })
  .then(function (secondThenVal) {
    console.log("then 158: ", secondThenVal);
    return fs.promises.readFile("f1.txt");
  })
  .then(function (thirdThen) {
    console.log("then 162: " + thirdThen);
  })
  .catch(function (firstThenVal) {
    console.log("catch 165: " + firstThenVal);
    return 100;
  });

/*
  catch -> if it is receving a rejected value/ error -> it will take it
  then -> then will completely ignored
  and vice versa

  (*** IMP ) do not leave a rejected promise openly because that completly halt your code
*/

/* 
  1. Eventlistner -> then, catch, finally
  2. Then -> resolved, catch -> reject, finally/error and then -> bothe individually
  2.2 -> catch will always accept -> rejection/error -> and then -> always accept values/promise
  3. chaining then/catch -> rejection/error -> catch/everything
  4. no catch code stops executing
*/

/* 
  1. finally -> do not take anything 
  2. for value and promises -> it does not return anything / and neither take anything
  3. rejection -> goes to catch -> and give it the error / rejection 
*/
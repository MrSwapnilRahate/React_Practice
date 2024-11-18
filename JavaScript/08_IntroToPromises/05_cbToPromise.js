/*
    Promisify fs.readfile
*/

let fs = require("fs");

function promReadFile(filePath) {
  // 3rd -> controll come here
  return new Promise((resolve, reject) => {
    // 4th -> return new Promise Object with two executor function (resolve & reject)
    fs.readFile(filePath, (err, data) => {
      // 5th -> fs.readFile() is called with file path & cb function    // file read asynchronously
      if (err) {
        reject(err);
      } else {
        resolve(data); // 6th A -> if file read sucessfully then resolve(data)[executor function] will called    // and data is pass as argument
        // it will pass to the line 23 promise variable (which have the refernce of prompReadFile return function(new Promise))
      }
    });
  });
}

/******************************* consumption **************************/
console.log("Before"); // 1st -> print immidiaetly

const promise = promReadFile("./f1.txt"); // 2nd -> callpromReadFile with passing argument file path

/******************************  Statement 1 *************************/

promise
  .then(function (data) {
    // 7th -> then from line 23 -> because the we got file and promise is resolved from that that point resolve(data autometically call the promise.then block)
    // this "then" accept cb function which accept data as a arguemnt
    console.log("Data inside the file is " + data); // 8th -> final step -> it will print console line with which is got from that file
  })
  .catch(function (err) {
    console.log("Error is: " + err);
  });

console.log("After");

/******************************  Statement 1 *************************/
promise
  .then((data) => {
    console.log("My Content is: " + data);
    return promReadFile("./f2.txt");
  })
  .then((data) => {
    console.log("My Content is: " + data);
    return promReadFile("./f3.txt");
  })
  .then((data) => {
    console.log("My Content is: " + data);
    return promReadFile("./f4.txt");
  })
  .then((data) => {
    console.log("My Content is: " + data);
  })
  .catch((err) => {
    console.log("Ohh! I hit by error: " + err);
  });

console.log("After");

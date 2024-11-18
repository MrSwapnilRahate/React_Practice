
/*
    Callback hell -> initial defination
    1. Nesting of call back -> when we have to do serial task using async fns -> pyramid of doom
                               I want to read all file serially

    2. Inversion of Control: we send our callback function to an async function and then that async function has the control to call it(trust issues) 
*/

const fs = require("fs");

// console.log("Before");

// fs.readFile(".././f1.txt", (err, data) => {
//   if (err) {
//     console.log("Error is: ", err);
//   } else {
//     console.log("Contenet is: " + data);
//   }
// });

// --------------------- Heart Attack Code (Callback hell) (pyramid of doom) ----------------------- //
// fs.readFile(".././f1.txt", (err, data) => {
//   if (err) {
//     console.log("Error is: ", err);
//   } else {
//     console.log("Contenet is: " + data);
//     fs.readFile(".././f2.txt", (err, data) => {
//       if (err) {
//         console.log("Error is: ", err);
//       } else {
//         console.log("Contenet is: " + data);
//         fs.readFile(".././f3.txt", (err, data) => {
//           if (err) {
//             console.log("Error is: ", err);
//           } else {
//             console.log("Contenet is: " + data);
//             fs.readFile(".././f4.txt", (err, data) => {
//               if (err) {
//                 console.log("Error is: ", err);
//               } else {
//                 console.log("Contenet is: " + data);
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });
// console.log("After");

// simplified version

console.log("Before");

fs.readFile(".././f1.txt", f1cb);
function f1cb(err, data) {
  if (err) {
    console.log("Error is: ", err);
  } else {
    console.log("Contenet is: " + data);
    fs.readFile(".././f2.txt", f2cb);
  }
};

function f2cb(err, data) {
    if (err) {
      console.log("Error is: ", err);
    } else {
      console.log("Contenet is: " + data);
      fs.readFile(".././f3.txt", f3cb);
    }
  };

  function f3cb(err, data) {
    if (err) {
      console.log("Error is: ", err);
    } else {
      console.log("Contenet is: " + data);
      fs.readFile(".././f4.txt", f4cb);
    }
  };

  function f4cb(err, data) {
    if (err) {
      console.log("Error is: ", err);
    } else {
      console.log("Contenet is: " + data);
    }
  };

  console.log("After");

   
// --------------- recursion --------------- //

const list = [".././f1.txt", ".././f2.txt", ".././f3.txt", ".././f4.txt"]
function CallRecursion(list) {
    if(list.length == 0){
        return;
    }
    fs.readFile(list.pop(), smallCbFunction);
    
    function smallCbFunction (err, data){
        if (err) {
            console.log("Error is: ", err);
          } else {
            console.log("Contenet is: " + data);
            CallRecursion(list);
          }
    }
}
CallRecursion(list);
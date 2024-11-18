const fs = require("fs");
console.log("Before");

/******************* Chaining my then and catch ********************/

// const promise = fs.promises.readFile("./f1.txt");

// promise.then(function (futureValue) {
//     console.log("Data inside the file is " + futureValue);
// }).catch(function (err) {
//     console.log("Error is: " + err);
// })

// // --------------------- Heart Attack Code (Callback hell) (pyramid of doom) ----------------------- //
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

//**************************** Nested Then, its not a good way to solve the problem *************************/

// it again the pyramid of doom structure

// fs.promises
//   .readFile("./f1.txt")
//   .then((data1) => {
//     console.log("My content is: " + data1);
//     fs.promises
//       .readFile("./f1.txt")
//       .then((data2) => {
//         console.log("My content is: " + data2);
//         fs.promises
//           .readFile("./f2.txt")
//           .then((data3) => {
//             console.log("My content is: " + data3);
//             fs.promises
//               .readFile("./f3.txt")
//               .then((data4) => {
//                 console.log("My content is: " + data4);
//               })
//               .catch((err) => {
//                 console.log("Ohh! I hit by the error: " + err);
//               });
//           })
//           .catch((err) => {
//             console.log("Ohh! I hit by the error: " + err);
//           });
//       })
//       .catch((err) => {
//         console.log("Ohh! I hit by the error: " + err);
//       });
//   })
//   .catch((err) => {
//     console.log("Ohh! I hit by the error: " + err);
//   });

fs.promises
  .readFile("./f1.txt")
  .then((data) => {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f2.txt");
  })
  .then((data) => {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f3.txt");
  })
  .then((data) => {
    console.log("My Content is: " + data);
    return fs.promises.readFile("./f4.txt");
  })
  .then((data) => {
    console.log("My Content is: " + data);
  })
  .catch((err) => {
    console.log("Ohh! I hit by error: " + err);
  });

console.log("After");

// syntax error cant be solved by try and catch

// try {
//     le a
// } catch (err) {

// }

// its shadowing, and written in try catch block but try and catch block will not throw error ... bcoz its a syntatical error (not not showing red mark but still its a syntatical edrror)
// try {
//     console.log("Before");
//     let a = 10;
//     {
//         var a = 20;
//         console.log("Hello", a);
//     }
// } catch (err) {
//     console.log("Rajneesh_Error", err);
// }

// only runtime error will cstch by catch block
// console.log("Before");
// try {
//     console.log(a);
//     let a;
//     {
//         var a = 20;
//         console.log("Before");
//     }
// } catch (err) {
//     console.log("Rajneesh_Error", err);
// }
// console.log("after");


// try and catch are synchronus 
// console.log("Before");
// try {
//     setTimeout(() => {
//         console.log("set timeout is executed");
//         console.log(a);
//     }, 1000);
// } catch (err) {
//     console.log("Rajneesh_message_of_Error", err.message);
//     console.log("Rajneesh_name_of_Error", err.name);
// }

//  coorect way to write the above code
// console.log("Before");
// setTimeout(() => {
// try {
//         console.log("set timeout is executed");
//         console.log(a);
//     }
// catch (err) {
//     console.log("Rajneesh_message_of_Error", err.message);
//     console.log("Rajneesh_name_of_Error", err.name);
// }
// }, 1000);

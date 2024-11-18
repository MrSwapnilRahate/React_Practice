const fs = require("fs");

console.log("Before");

// they are a syntax sugar over
// microtask queue
async function fn() {     // (async function fn() {}()) -------called self calling
    try {
        let data = await fs.promises.readFile("./f1.txt");
        console.log("Content: " + data);
        let data1 = await fs.promises.readFile("./f2.txt");
        console.log("Content: " + data1);
        let data2 = await fs.promises.readFile("./f3.txt");
        console.log("Content: " + data2);
        return "rVal from fn";
    } catch (err) {
        console.log("Error: " + err)
    }
}

let rVal = fn();
console.log("rVal from 40", rVal);

for (let i = 0; i < 10; i++) {
    console.log("data");
}

console.log("After");

// async keyword fn always return a pending promise so either await for or use then
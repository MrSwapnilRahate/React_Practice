// The code takes advantage of Node.js to interact with the

// operating system and display a list of files in the current 
// directory. This information can be useful for various purposes,
// such as:

// Checking file existence
// Getting file names
// Performing file operations based on the listed files

// const { exec } = require("child_process");
// // Exec -> can run any shell command

// exec("dir /b /a-d", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//     } else {
//         console.log(`stdout: ${stdout}`);
//         console.log(`stderr: ${stderr}`);
//     }
// });

const { execFile } = require('child_process');

const scriptPath = 'C:\Users\swapnil.rahate\Desktop\script.bat'; // Replace with your path

execFile(scriptPath, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
});
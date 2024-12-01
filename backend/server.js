const app = require("./app");
const childProcess = require("child_process");

// childProcess.exec("dir", (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error occurred: ${error.message}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`Standard Error: ${stderr}`);
//     return;
//   }

//   console.log(`Standard Output:\n${stdout}`);
// });

app.listen(3000, () => {
  console.log("server is listening to the given port");
});

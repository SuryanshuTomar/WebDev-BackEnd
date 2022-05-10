// => SYNCHRONOUS VS ASYNCHRONOUS -

// 1. Synchronous (or sync) execution usually refers to code executing in sequence. In sync programming, the program is executed line by line, one line at a time. Each time a function is called, the program execution waits until that function returns before continuing to the next line of code.

// 2. Asynchronous (or async) execution refers to execution that doesn’t run in the sequence it appears in the code. In async programming the program doesn’t wait for the task to complete and can move on to the next task.

// -----------------------------------------------------------------------------------------------------
// => BLOCKING VS NON-BLOCKING -
// 1. Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn’t block execution. Or as Node.js docs puts it, blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes.
// 2. Blocking methods execute synchronously while non-blocking methods execute asynchronously.

// EXAMPLE -
// Blocking
// const fs = require('fs');
// const data = fs.readFileSync('/file.md'); // blocks here until file is read
// console.log(data);
// moreWork(); // will run after console.log

// // Non-blocking
// const fs = require('fs');
// fs.readFile('/file.md', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// moreWork(); // will run before console.log

// NOTE:
// In the first example above, console.log will be called before moreWork(). In the second example fs.readFile() is non-blocking so JavaScript execution can continue and moreWork() will be called first.

// In Node, non-blocking primarily refers to I/O operations, and JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn’t typically referred to as blocking.

// -----------------------------------------------------------------------------------------------------
//=> CALLBACKS -
// A callback is a function passed as an argument into another function, which can then be invoked (called back) inside the outer function to complete some kind of action at a convenient time. The invocation may be immediate (sync callback) or it might happen at a later time (async callback).

// EXAMPLE:
// // Sync callback
// function greetings(callback) {
//   callback();
// }
// greetings(() => { console.log('Hi'); });
// moreWork(); // will run after console.log

// // Async callback
// const fs = require('fs');
// fs.readFile('/file.md', function callback(err, data) { // fs.readFile is an async method provided by Node
//   if (err) throw err;
//   console.log(data);
// });
// moreWork(); // will run before console.log

// NOTE:
// In the first example, the callback function is called immediately within the outer greetings function and logs to the console before moreWork() proceeds.

// In the second example, fs.readFile (an async method provided by Node) reads the file and when it finishes it calls the callback function with an error or the file content. In the meantime the program can continue code execution.

// An async callback may be called when an event happens or when a task completes. It prevents blocking by allowing other code to be executed in the meantime.

// Instead of the code reading top to bottom procedurally, async programs may execute different functions at different times based on the order and speed that earlier functions like http requests or file system reads happen. They are used when you don’t know when some async operation will complete.

// You should avoid “callback hell”, a situation where callbacks are nested within other callbacks several levels deep, making the code difficult to understand, maintain and debug.

// --------------------------------------------------------------------------------------------------------
// - Using Promises and Async-Await in FS Core Modules -

// - We can also promisify our fs modules functions by importing the fs modules as -
// const fsPromises = require("fs").promises;

// - or by deconstructing the methods directly from fs/promises
// const { writeFile, appendFile } = require("fs/promises");

// - By Promisifying these fs module function we can escape the Callback Hell by not using the normal fs module functions

// - Difference between fs normal modules and fs promisified modules is that, All the fs module requires an additional callback function for error handling whereas in fs promises functions, error handling is done using try-catch blocks

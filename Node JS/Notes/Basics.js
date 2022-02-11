// What is Node JS?
// A JS runtime engine based on Chrome's V8 engine to run JS applications outside the browser.

// Why use node.js ?
// 1. No need to learn any other language to write backend.We can use JS on server-side of web development. Use and share same concepts for frontend and backend.
// 2. Has a rich variety of libraries and tools for developing a wide domain of applications.
// 3. You can use the knowledge of NodeJS
//     => To build cross-platform applications with Electron
//     => Write serverless functions for AWS lambda and microservices
//     => Or work with advanced frameworks like Next.js (server-side frontend framework) in the future

// => Pros of Node jS-
// - Single-threaded, based on event driven, non-blocking I/O model.
// - Perfect for building fast and scalable data intensive applications.
// - Companies like netflix, uber, paypal, ebay are using it.
// - JS across the entire stack -> faster and more efficient development

// => Ideal use for Node Js -
// - API with database behind it(preferably No SQL) and
// - Data streaming applications(Like youtube)
// - Real-time chat applications
// - Server-side Web applications.Applications relying on scalability
// - IOT applications

// => Not ideal for -
// - Applications with heavy server-side processing like image processing, video conversion, etc
// - CRUD applications.
// - For these cases python and ruby on rails but there are workaround in js also.

// => Some major difference between Browser and Node.JS -
//     BROWSER                                         NODE JS
// -   Access to browser APIs                          No Access to browser APIs
// -   DOM                                             No DOM
// -   Window                                          No Window
// -   Interactive Apps                                Server Side Apps
// -   No FileSystem                                   FileSystem
// -   Fragmentation                                   Versions
// -   ES6 Modules                                     Common JS

// ----------------------------------------------------------------------------------------------------------
//=>  Globals - No Window!!! -
// Node.js Global Objects are the objects that are available in all modules. Global Objects are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module. The Node.js Global Objects are listed below:

// Note:
// i)   To check all the global variables available in node -> In node terminal, press tab twice.In
// ii)  "_" Variable stores all the previous calculation result we did in node terminal.
// iii) We can check all the method a class has by pressing tab after a classname using a dot(.) operator used for accesing a method and then pressing tab.

// 1.Class:
// - Buffer - The Buffer class is an inbuilt globally accessible class that means it can be used without importing any module. The Buffer class is used to deal with binary data. Buffer class objects are used to represent binary data as a sequence of bytes.
// - console: It is an inbuilt global object used to print to stdout and stderr.
// - process: It is an inbuilt global object that is an instance of EventEmitter used to get information on current process. It can also be accessed using require() explicitly.
// - global: It is a global namespace. Defining a variable within this namespace makes it globally accessible.
// - URL: The URL class instance is a global object and is implemented by the following WHATWG URL Standard. The URL constructor creates a new URL object as shown below. //foo is the input and https://www.helloworld.og/ is the base value.
// - URLSearchParams: URLSearchParams API is used to perform read and write operations on the query of a URL.

// 2.It is a global scope when declared within the browser. However, any variable defined within a node.js file is accessible only within that file.

// - setImmediate() method: It schedules the immediate execution of the callback. The callback functions are queued and executed in the order in which they are created. The callback queue is processed at every event loop iteration. If there is a timer queued inside the executing callback, the timer will not get triggered until the next event loop iteration.

// - clearImmediate() method: It stops the immediate object returned by the setImmediate() method.
// - setInterval() method: It executes the callback function at repeated intervals. If an interval is larger than 2147483647 or less than 1, the interval is set to 1. Non-integer delays are truncated to the nearest integer.

// - clearInterval() method: It stops the interval object created by setInterval() method.

// - setTimeout() method: It is a global function used to run a callback function after at least delay in milliseconds. Node.js does not guarantee the exact timing of when callbacks will fire but tries to maintain the timing as close as possible to the specified delay. Any delay larger than 2147483647 or less than 1, is set to 1 automatically. Non-integer delays are truncated to the nearest integer.

// - clearTimeout() method: The clearTimeout() method is used to cancel or stop a timeout that was set with setTimeout() method. The timeoutObj is the object returned by setTimeout() method.

// 3.WebAssembly: The global object that acts as a namespace for all W3C WebAssembly related functionality. WebAssembly is a low level Assembly-like language that can be run on modern browsers.
// The following variables might appear to be global but actually exist only within the scope of some modules -
// __dirname  - The output throws an error which proves that __dirname is not globally defined in node.js. It requires a script to give the desired output as __dirname is only defined in scripts.It returns path to current directory.
// __filename - The output throws an error which proves that __filename is not globally defined in node.js. It requires a script to give the desired output as __filename is only defined in scripts.
// require    - function to use modules (CommonJS). It is used to import modules and returns an object of ‘any’ datatype.
// module     - info about current module (file). It is a reference to the current module and is not global rather local to each module. It is used to make a particular module available through require() in the application.
// process    - info about env where the program is being executed
// exports    - It is used to exports modules using module.exports.

// -----------------------------------------------------------------------------------------------------------
//=>  NPM (Node Package Manager) -
// - NPM is the default package manager for Node.js and is written entirely in Javascript.
// -  NPM manages all the packages and modules for Node.js and consists of command line client npm. It gets installed into the system with installation of Node.js. The required packages and modules in Node project are installed using NPM.
// - NPM can install all the dependencies of a project through the package.json file. It can also update and uninstall packages. In the package.json file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.

//=> Some facts about NPM:
// - At the time of writing this article, NPM has 580096 registered packages. The average rate of growth of this number is 291/day which outraces every other package registry.
// - npm is open source
// - The top npm packages in the decreasing order are: lodash, async, react, request, express.
// - A package contains all the files needed for a module and modules are the JavaScript libraries that can be included in Node project according to the requirement of the project.
// - A CLI (command-line interface) tool for publishing and downloading packages
// - Uses Node Package Registry → to download the published packages
// - npm CLI is also used to manage your node project -
//     a) It stores the configuration in a package.json file
//     b) And installs the packages inside a node_modules folder

//=> Installing Package -
// - To install packages and modules in the project use  - npm install <package_name> or npm i "package_name"
// - To install a package globally (accessible by all projects in system) - npm install <package_name> -g

//=> Uninstalling Package -
// - To Uninstall packages and modules in the project use  - npm uninstall <package_name>
// - To Uninstall a package globally - npm uninstall <package_name> -g

// -----------------------------------------------------------------------------------------------------------
// => package.json -

// - It is a manifest file that stores configuration for your project
// - The packages we install using npm for our project are called dependencies
// - Two types of dependencies -
//     a) production dependencies -> listed under "dependencies" key; installed in the server when you deploy the project.
//     b) development dependencies ->  listed under the "devDependencies" key, only installed on your local system. Installed with a --save-dev flag along with npm install.
// - We can create the package.json file either manually or we can use the command npm init -y
// Example: testing libraries like jest, or helper modules like nodemon. We just need them while developing our software. Not needed for the end-user.

// => Controlling where the package gets installed:
// - To install a package and simultaneously save it in package.json file (in case using Node.js), add –save flag. The –save flag is default in npm install command so it is equal to npm install package_name command
// - npm install <package_name> --save
// - By –save flag one can control where the packages are to be installed -
//       a) -–save-prod or -P: Using this packages will appear in Dependencies which is also by default.
//       b) -–save-dev or -D: Using this packages will get appear in devDependencies and will only be used in the development mode.

//=> Using Semantic Versioning to manage packages:
//  - version - 4.7.6 ->
//         a) 4 here is the Major Version which tells the major changes that can break the older APIs
//         b) 7 here is the Minor version which tells the minor changes that don't breaks the older APIs
//         c) 6 here is the patches which represent the bug fixes.
// - To install a package of a specific version, mention the full and exact version in the package.json file.
// - To install the latest version of the package, mention “*” in front of the dependency or “latest”. This will find the latest stable version of the module and install it.
// - To install any version (stable one) above a given version, mention it like in the example below:
// “express”:”^4.1.1″. in package.json file. The caret symbol (^) is used to tell the npm to find a version greater than 4.1.1 and install it.

// -----------------------------------------------------------------------------------------------------------
// => What about the "scripts" key?
// - Defines different commands you can use to start, test and build your project
// - These are defined under a key called "scripts”
// - You can use these commands with npm like npm run <script-key>
// For example:  npm run start -> To execute the command specified in the start script

// -----------------------------------------------------------------------------------------------------------
// => package-lock.json -
// 1. package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
// 2. This file is intended to be committed into source repositories, and serves various purposes:
//     - Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.
//     - Provide a facility for users to "time-travel" to previous states of node_modules without having to commit the directory itself.
//     - Facilitate greater visibility of tree changes through readable source control diffs.
//     - Optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages.
//     - As of npm v7, lockfiles include enough information to gain a complete picture of the package tree, reducing the need to read package.json files, and allowing for significant performance improvements.

// File Format -
// name -The name of the package this is a package-lock for. This will match what's in package.json.
// version - The version of the package this is a package-lock for. This will match what's in package.json.
// lockfileVersion - An integer version, starting at 1 with the version number of this document whose semantics were used when generating this package-lock.json.

// -----------------------------------------------------------------------------------------------------------
// => Node.js Modules -
//  Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders. The reason programmers are heavily reliant on modules is because of their re-usability as well as the ability to break down a complex piece of code into manageable chunks.

// NOTE: Since, node.js uses CommonJS, every file in node is a module(By default)

//=> Modules are of three types:
// 1. Core Modules -
// - Node.js has many built-in modules that are part of the platform and comes with Node.js installation. These modules can be loaded into the program by using the require function.
// Example- var module = require('module_name');

// NOTE: The require() function will return a JavaScript type depending on what the particular module returns. The following example demonstrates how to use the Node.js Http module to create a web server.
// Example -
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Welcome to this page!');
//   res.end();
// }).listen(3000);

// 2. local Modules -
// - Unlike built-in and external modules, local modules are created locally in your Node.js application. Let’s create a simple calculating module that calculates various operations. Create a calc.js file that has the following code:

// Filename: calc.js;
// exports.add = function (x, y) {
//     return x + y;
// };
// exports.sub = function (x, y) {
//     return x - y;
// };
// exports.mult = function (x, y) {
//     return x * y;
// };
// exports.div = function (x, y) {
//     return x / y;
// };

// Since this file provides attributes to the outer world via exports, another file can use its exported functionality using the require() function.

// Filename: index.js;
// var calculator = require("./calc");
// var x = 50,
//     y = 10;
// console.log("Addition of 50 and 10 is " + calculator.add(x, y));
// console.log("Subtraction of 50 and 10 is " + calculator.sub(x, y));
// console.log("Multiplication of 50 and 10 is " + calculator.mult(x, y));
// console.log("Division of 50 and 10 is " + calculator.div(x, y));

// 3. Third-party Modules -
// - Third-party modules are modules that are available online using the Node Package Manager(NPM). These modules can be installed in the project folder or globally. Some of the popular third-party modules are mongoose, express, angular, and react.

// Example:
// npm install express
// npm install mongoose
// npm install -g @angular/cli

// -----------------------------------------------------------------------------------------------------------
// Activity1 -
// - Create a file index.js if not already there.
// - Console log "Server Started" from inside this file
// - Define a script start inside the package.json which just maps to node index.js
// - Use the terminal to write npm start
// - Try to change the log message to "Hello from server" and save
// - Do you see the changes reflected?

// Activity2 -
// - Install nodemon as dev dependency- npm install nodemon --save-dev
// - Specify a dev script in the package.json as nodemon index.js and run the script using npm run dev
// - Change the  log message and see if the changes are reflected or not?

// -----------------------------------------------------------------------------------------------------------
// => HTTP built-in Module -

// - With Node.js installation we get a module named http
// - Used to create the server using Node.js which can receive requests and return a response
// - To use a server we need two primary things
//     - host - the address where our server will be accessible (example: localhost)
//     - port - the port of the machine where the server application is running

// => Creating an HTTP Server:
// 1. Node.js installation provides us with a native “http” module ->
// const http = require("http");
//Note: In node.js environment, we use require to import a module to our file instead of import keyword

// 2. Use the createServer method on the http module to create a server
// const server =  http.createServer()

// 3. The createServer() method takes in a callback which is executed once the server receives a request from the client.
// const server = http.createServer(() => {
//     console.log("Hello from server");
// });

// 4. Finally we make this server instance “listen” for any requests.
//     - Specify the PORT number as the first argument (say 8082)
//     - A success callback as the second argument
// server.listen(8082, () => {
//     console.log("Listening...");
// });

// 5. Run the server with npm run dev or node <filename>
// 6. Now, Use the <localhost:PORT> as your server endpoint URL to make a GET request from Postman or use the <localhost:PORT> in your browser
// 7. Then check the logs on your workspace and you shall see the message printed

// Note:
// 1. Postman/Browser will send the request forever :(
// 2. We made a request to the server but never got a response back.
// 3. The reason is we never specified what “response” to send back to the client.
// 4. The request was received but no response was sent.

// => The Response Object -
// - In the createServer callback we can pass in two special arguments - req for Request Object, and res from Response Object.
// - The reason is we never specified what “response” to send back to the client.
// const server = http.createServer((req, res) => {
//     console.log("Hello from Server");
// })
// - The req object has a special function end() which we can call to mark the end of the response.
// - This will make sure the request is completed.
// const server = http.createServer((req, res) => {
//     console.log("Hello from Server");
//     res.end();
// }) //No more timeout

// Note: But we also want to send data to the client!. Ending the response is just not enough

// => Sending Data with Response -
// 1. To send some information back to the client like a JSON or an HTML string
//     - we use res.write() function which takes the data to be returned as an argument.
//     - It is in form of a string
// 2. We can check the server response in either postman preview section or in browser.

// => Specifying Headers in Response -
// 1. Here is an object with server information, which we need to send back to the client when a request is made to the backend
// const serverInfo = {
//   serverName: "Crio Server",
//   version: "1.0.0",
//   currentDate: new Date().toDateString(),
//   currentTime: new Date().toTimeString(),
// };

// 2. We need to send this back to the client when the request is received. We can send the response date to client using  the response.write() and it should be in the form String. So, We can use JSON.stringify() method.
// like- response.write(JSON.stringify(serverInfo));

// 3. We must tell the client what “type of content” are we sending.

// 4. To specify the type of content, we have a function writeHead() where
//     - We can specify Headers (like “Content-Type”)
//     - And the status code for the request
// res.writeHead(200, { "Content-Type": "application/json" });
// res.write(JSON.stringify(serverInfo)); //Stringify the response
// res.end();

// => The Request Object -
// 1. To get information about the request, our callback function has a request object also
//     - Remember we used to make a fetch request with some configs?
//     - That whole object could be accessed on the backend with the req object
// 2. So now to distinguish the response based on what endpoint is being hit, we can use the url property of the request
//     - req.url - contains the url of the request
// if (req.url === "/status") {
//     res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
//     res.write(JSON.stringify(serverInfo));
//     res.end();
// } else {
//     res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
//     res.write(`<h1>Hello from server</h1>`);
//     res.end();
// }

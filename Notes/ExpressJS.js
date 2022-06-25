// => WHAT IS EXPRESS JS ?

// const { request } = require("https");

// - Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
// - It's a layer built on the top of the Node js that helps manage servers and routes.

// - More On -
// https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js?source=sl_frs_nav_playlist_video_clicked

// --------------------------------------------------------------------------------------------------
// => Setting Express Servers -

// ---------------------------------------------
// Method I. Conventional Way of creating an Express Server -
// const express = require("express");
// const app = express();
// app.listen(PORT, "localhost", () => {
// 	console.log(`Listening on Port : ${PORT}...`);
// });

// ---------------------------------------------
// Method II. Another common way of creating an Express Server which is more flexible than coventional way -

// Step 1. Creating an Express server via http server -
// const http = require("http");
// const express = require("express");
// const app = express();

// Step 2. Passing the express server app to our http server -
// const server = http.createServer(app);

// Note: Any middleware and route handlers that we attach to this express app object will respond to the requests coming in to our server object.
// The added benifit of this method is that we can organize our code little bit more by seprating the server functionality that we have in server.js from our express code, which we are going to put into a new file called app.js

// Step 3. Setting PORT -
// const PORT = process.env.PORT || 3500;

// Step 4. Listening to the server -
// server.listen(PORT, "localhost", () => {
// 	console.log(`Listening on PORT ${PORT}...`);
// });

// ----------------------------------------------------------------------------------------------
// => What are Middlewares ?
// -  Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

// Syntax -
// app.use(middlewareFN(request, response, next));

// - We take the app object and we call the use() method, which will register our middleware with Expresx so it know to run it.
// - The middleware callback function has three parameters - request, response and the next function. The callback middleware has the opportunity to work with the request, use the data from it and take some action.
// - When the incoming request hits the first middleware using the app.use() method, we can execute the next() function to start executing the next middleware and pass the control flow to the next middleware iteself along with the update request and response object and the same will happend till all the middlewares are executed and a response is sent using the app.HTTPMETHOD like app.get() or app.post() method.

// Control Flow -
//       ||           ^
//       v           ||
//    Request     Response
//       ||          ^
//       v          ||
//       MIDDLEWARE 1
//       app.use()
//       req + res + next
//       ||           ^
//       v           ||
//    Request     Response
//       ||          ^
//       v          ||
//       MIDDLEWARE 2
//       app.use()
//       req + res + next
//       ||           ^
//       v           ||
//    Request     Response
//       ||          ^
//       v          ||
//       MIDDLEWARE (Endpoint)
//       app.HTTPMethod()
//       req + res

// -----------------------------------------------------------------------------------------------
// => Model View Controller (MVC Pattern) -

// - MVC stands for model-view-controller. Here's what each of those components mean:
// 1. Model: The backend that contains all the data logic
// 2. View: The frontend or graphical user interface (GUI)
// 3. Controller: The brains of the application that controls how data is displayed

// - MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.
// - MVC is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner.

// - More On -
// https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/
// https://www.codecademy.com/article/mvc

// -------------------------------------------------------------------------------------------
// => Express Routers -

// - Express Router is a built-in class that refers to how an application’s endpoints (URIs) respond to client requests. In addition, the express router class helps create route handlers.
// - You define routing using the Express app object methods that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. For a full list, see the app.METHOD.
// - You can also use the app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function (See Using middleware for details).
// - These routing methods specify the callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method.
// - In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.
// - The routing methods can have more than one callback function as arguments.
// - With multiple callback functions, it is important to provide next as an argument to the callback function and then call next() within the function’s body to hand off control to the next callback.

// Syntax -
// Defining the Router
// const router = express.Router();

// Add the path the router
// router.HTTPMethod("/apiPath", routeHandler)

// Using the router as middleware or mounting the router on the express app
// app.use(router);
// Or we can mounting group of routes under a specific path
// app.use("/apiPath", router)

// - Example -
// server.js
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT = 3000;

// let router = express.Router();

// router.get('/',function(req,res){
//   res.json({'message' : 'Ping Successfull'});
// });

// app.use('/api',router);

// app.listen(PORT,function(){
//   console.log('Server is running at PORT:',PORT);
// });

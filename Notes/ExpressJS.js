// => WHAT IS EXPRESS JS ?

const { request } = require("https");

// - Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
// - It's a layer built on the top of the Node js that helps manage servers and routes.

// - More On -
// https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js?source=sl_frs_nav_playlist_video_clicked

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

// ------------------------------------------------------------------------------------------------
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

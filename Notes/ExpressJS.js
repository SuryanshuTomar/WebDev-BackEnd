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

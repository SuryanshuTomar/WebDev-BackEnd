// =>  MIDDLEWARES -

// -> What are Middlewares ?
// - Middleware functions have access to the request object and the response object and also the next function in the application request-response lifecycle.

// - Middlewares are used for:
// 1. Change the request or response object.
// 2. Execute any program or code
// 3. End the request-response lifecycle
// 4. Call the next middleware.

// - The next() function is used to call the next middleware, succeeding the current middleware. It is very important to note that the middleware should either stop the current lifecycle or pass it on to the next middleware, otherwise the webpage will keep loading.

// - Middleware Syntax:
// app.get(path, (req, res, next) => {}, (req, res) => {})

// - The middle part (req,res,next)=>{} is the middleware function. Here we generally perform the actions required before the user is allowed to view the webpage or call the data and many other functions. So let us create our own middleware and see its uses.

// - More on -
// https://www.geeksforgeeks.org/what-is-middleware-in-express-js/

// -> Advantages of Middleware -
// Advantages of using middleware:
// - Middleware can process request objects multiple times before the server works for that request.
// - Middleware can be used to add logging and authentication functionality.
// - Middleware improves client-side rendering performance.
// - Middleware is used for setting some specific HTTP headers.
// - Middleware helps for Optimization and better performance.

// - Middleware Chaining: Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order. The last function sends the response back to the browser. So, before sending the response back to the browser the different middleware process the request.
// - The next() function in the express is responsible for calling the next middleware function if there is one.

// - More on -
// https://www.geeksforgeeks.org/middleware-in-express-js/

// -> Types of Middlewares -
// 1. Inbuilt
// 2. Custom
// 3. Third-party

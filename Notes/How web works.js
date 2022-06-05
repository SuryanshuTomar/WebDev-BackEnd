// How the web works?

// => What is a Web Server ?
// - When we type a URL into our browser, Like https://www.google.com, our browser calls a system called DNS server or Domain Name System server.
// - It uses DNS by talking to the DNS servers across the internet.
// - These DNS servers lookup the internet(IP) address of the server by searching the URL name which we have types into the URL of the browser.
// - After finding the IP address of the server, the IP address sent back to our computer.
// - Its this IP address that we then use to communicate with the HTTP server, which will give us the data that we requested.
// - It is usually an HTTP server because we are communicating with the server via http/https protocol.
// - There is port no which is attached to the IP address which tells us which type of application server we are communicating with.
// - The server often sends back data like JSON files or text files and sometimes images and videos.
// - Our Browsers manages the mapping of the site name url of these sites to IP addresses.
// - Browsers only make these requests to DNS servers the first time we browse to a particular site.
// - Afterwards, it stores the locations which we call the DNS Cache, which saves us some work and improves performance when we are browsing the web.
// - IP Address Syntax : 255.255.255.255:PORTNO
// - The thing that defines how our web server responds to these requests are APIs.
// - APIs is the acronym for Application Programming Interface, which is a software intermediary that allows two application to talk to each other.
// - The APIs tells what kind of functions the server should support and how those functions should be used.
// - We can implement our APIs in either NodeJS, Python or any other programming language.
// - But whats important is that those language should react the requests and respond to them using HTTP.
// - HTTP is the common way that the browser and the server can use to understand what both sides are saying.
// - To Check HTTP methods - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// - More on -
// https://www.freecodecamp.org/news/how-the-web-works-a-primer-for-newcomers-to-web-development-or-anyone-really-b4584e63585c/

// => HTTP Request Structure -
// - The Client usually send a request using HTTP requests.
// 1. Method : It defines the type of HTTP methods like get, post, put, delete
// 2. Path: /path_URL
// 3. Body: Data sent to the server in case of post and put requests in the form of JSON usually.
// 4. Headers: These are optional properties that you can specify on a request to send addtional metadata to the servers. (Metdata: data about data, in this case data about servers).

// => HTTP Response Structure -
// - The Server usually respond to a client request using HTTP response.
// 1. Headers: Just like HTTP requests, Headers in response are also optional and basically the same as the one in request.
// 2. Body: Data sent as a response to the client request from the server which is usually in the form of JSON data.
// 3. Status Code: It tells us and the client whether the request was successfull or not. If it gives an error code that generally tells us what went wrong. 


// -------------------------------------------------------------------------------------------
// => Same Origin Policy - 

// 1. What is an Origin ?
// 1. - When we browse the Web and we go to a site like Google Maps, what we type in the browser is something like this - https://www.google.com/maps/.
// - And the origin is a combination of three things.
//    a. The first is the protocol - which is the part that says how we are communicating with the server at Google. in the above url its "https"
//    b. The second is the host - which tells us which server we're going to be browsing to or server is going to be handling our requests.
//    c. The third part of the origin is the ports - whenever its included in our requests and its looks something like - https://www.google.com:443/maps/.
// - Whenever one of the three part of the origin changes, we are no longer on the same origin.
// - We can browse the other pages at that origin, so maybe we replace maps with mail to get our email. But we can't change google.com to facebook.com and still be at the same origin. And similary if we change the protocol or port no then also we will not be at the same origin.
// - It important to us because our browser and JS use what's called the Same Origin Policy.

// 2. What is Same Origin Policy ? 
// 2. - Same Origin Policy is a security feature by the browser that restricts what our browser is allowed to load when you're browsing pages on the internet.
// - Our browser allows all requests from the same origin as the page that we've loaded in our browser. So, we can be on Google.com and make requests to Google.com with the HTTPS protocol. But the browser restricts requests from different origins, then the site we're currently browsing. So, the scenerio where Google gets data about friends from facebook isn't allowed because that helps protect our privacy. For eg- we've types Google.com into our browser and we're browsing Google, the request to Facebook will be denied by the browser because its enforcing that same origin policy. 
// - Now there is an exception, The Cross-Origin Servers, So from Google.com to Facebook.com are often allowed even with the same origin policy. So, we can send any data or request from Google.com to Facebook.com and its upto Facebook.com servers whether they choose to respond to the requests or not.
// - When we need to talk to many different servers across many different domains, its best to use what's called CORS(Cross Origin Resource Sharing)



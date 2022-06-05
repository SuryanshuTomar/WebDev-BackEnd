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

// -> Exercise: Same Origin Policy
// - Let's test our knowledge of the browser's Same Origin Policy! See if you can answer three quick questions about the following scenario:
// - Say you're browsing a page on www.wikipedia.org. In general, will the following requests succeed, or fail?
// 1. A JavaScript GET request to www.bank.com.
// 2. A JavaScript POST request to www.bank.com.
// 3. Clicking an HTML link to a video on www.bank.com.

// -> Answers -
// Here we go! There are possible exceptions, but in general the following will be true:
// 1. This request will FAIL, because requests to get information from a cross-origin domain are not allowed by the browser. The browser is trying to protect your privacy by preventing www.wikipedia.org from stealing your private information from www.bank.com.
// 2. This request will SUCCEED. This is a little known exception to the Same Origin Policy! The decision to allow POST requests is mostly historical, but there is also a lower chance that a POST request will steal your private information. POST requests are used to write data to a server, rather than GET data from it, so it's less likely the response will contain private information.
// 3. This request will SUCCEED. The Same Origin Policy applies only to scripts and not static resources like HTML tags.

// - What is CORS ?
// - CORS stands for Cross Origin Resource Sharing.
// - Its a way of relaxing the restrictions that the same origin policy puts on us developers so that we can make applications that potentially span many different domains and origins because the same origin policy generally limits us in the browser to talking to just one origin.
// - The CORS header(Access-Control-Allow-Origin) are used to allow the developers to allow an exception when we know requests from a different domain are safe and expected. And this header is optional.
// - So, our first option is to not include it and follow the textbook same origin policy.
// - Our second option is - we can also specify the access-control-allow-origin and include a specific orgin as the value like -> Access-Control-Allow-Origin: https://www.google.com
// Eg- So say we wanted to allow that request from Google to get the data for Wikipedia.org. The same request that failed for us earlier. Well, to allow that, Wikipedia would need to set a header that includes Google.com in the list of allowed origins and then send that header back when we make that request from JavaScript.
// - Our third option is -  we can set the Access-Control-Allow-Origin to "*" which means it will allow requests from any origin.
// - But in production, if you're really trying to lock down your site, it's a good idea to explicitly set access control, allow origin to the list of domains that you know will be making requests to your server.

// -> WhiteListing -
// - The really great thing about CORS is that it follows this practice of Whitelisting or Allow Listing.
// - Which is the practice of explicitly allowing access to some particular privilege or service. Like the access to be able to read data from a server. And it's the opposite of blacklisting, where by default you allow access. And you just have a specific list of Privileges that you block Or users that you block.
// - When you follow blacklisting, it's really easy to miss one of the people or privileges that you want to Block than it is when you deny access by default and only allow access to a pre-approved list of people or services.
// - When it comes to security, It's always better to white list than it is to blacklist. And that's what the access control allow origin header does.
// - The origins that you allow in the header are your white list And you're denying all other origins.
// - Finally, it's worth noting that it's the browser that does all of this enforcement of the same origin, policy and cause as well.
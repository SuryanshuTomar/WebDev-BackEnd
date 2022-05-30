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

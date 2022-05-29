// FRONTEND VS BACKEND DEVELOPMENT -

// 1. FrontEnd Development -
// - The part of a website that the user interacts with directly is termed the front end. It is also referred to as the ‘client side’ of the application. It includes everything that users experience directly: text colors and styles, images, graphs and tables, buttons, colors, and navigation menu. HTML, CSS, and JavaScript are the languages used for Front End development. The structure, design, behavior, and content of everything seen on browser screens when websites, web applications, or mobile apps are opened up, is implemented by front End developers. Responsiveness and performance are two main objectives of the Front End. The developer must ensure that the site is responsive i.e. it appears correctly on devices of all sizes no part of the website should behave abnormally irrespective of the size of the screen.

// - Front end Languages: The front end portion is built by using some languages which are discussed below:
//- HTML: HTML stands for Hypertext Markup Language. It is used to design the front-end portion of web pages using a markup language. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text documentation within the tag which defines the structure of web pages.
//- CSS: Cascading Style Sheets fondly referred to as CSS is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page.
//- JavaScript: JavaScript is a famous scripting language used to create magic on the sites to make the site interactive for the user. It is used to enhancing the functionality of a website to running cool games and web-based software.
// - There are many other languages through which one can do front-end development depending upon the framework for example Flutter user Dart, React uses JavaScript and Django uses Python, and much more.

// - Front End Frameworks and Libraries:
// - AngularJS: AngularJs is a JavaScript open-source front-end framework that is mainly used to develop single-page web applications(SPAs). It is a continuously growing and expanding framework which provides better ways for developing web applications. It changes the static HTML to dynamic HTML. It is an open-source project which can be free. It extends HTML attributes with Directives, and data is bound with HTML.
// - React.js: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. It is maintained by Facebook.
// Bootstrap: Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.
// - jQuery: jQuery is an open-source JavaScript library that simplifies the interactions between an HTML/CSS document, or more precisely the Document Object Model (DOM), and JavaScript. Elaborating the terms, jQuery simplifies HTML document traversing and manipulation, browser event handling, DOM animations, Ajax interactions, and cross-browser JavaScript development.
// - SASS: It is the most reliable, mature, and robust CSS extension language. It is used to extend the functionality of an existing CSS of a site including everything from variables, inheritance, and nesting with ease.
// - Flutter: Flutter is an open-source UI development SDK managed by google. It is powered by Dart programming language. It builds performant and good-looking natively compiled applications for mobile (Ios, Android), web, and desktop from a single code base. The key selling point of flutter is flat development is made easier, expressive, and flexible UI and native performance. In march 2021 flutter announce Flutter 2 which upgrades flutter to build release applications for the web, and the desktop is in beta state.
// Some other libraries and frameworks are Semantic-UI, Foundation, Materialize, Backbone.js, Ember.js, etc.

// 2. BackEnd Development -
// - Backend is the server-side(A basic web server is just a computer connected to the Internet all the time) of the website. It stores and arranges data, and also makes sure everything on the client-side of the website works fine. It is the part of the website that you cannot see and interact with. It is the portion of software that does not come in direct contact with the users. The parts and characteristics developed by backend designers are indirectly accessed by users through a front-end application. Activities, like writing APIs, creating libraries, and working with system components without user interfaces or even systems of scientific programming, are also included in the backend.
// - A Web Servers -
// a) Stores a Website Files(html, css, assets like images)
// b) Runs a HTTP server that is capable of understanding the client requests and be able to send suitable response according to the request back to the client. HTTO server is what actually communicates with the browser using requests and responses. Therefore, its like a bridge between the FrontEnd and the BackEnd of a web application.
// This web server containing only 2 things - Website Files and A HTTP Server creates is what we call a STATIC SERVER.
// c) Contains an application server and a database server which will make our Web Server what we call DYNAMIC SERVER.

// The back end portion is built by using some languages which are discussed below:
// - PHP: PHP is a server-side scripting language designed specifically for web development. Since PHP code executed on the server-side, so it is called a server-side scripting language.
// - C++: It is a general-purpose programming language and widely used nowadays for competitive programming. It is also used as a backend language.
// - Java: Java is one of the most popular and widely used programming languages and platforms. It is highly scalable. Java components are easily available.
// - Python: Python is a programming language that lets you work quickly and integrate systems more efficiently.
// - JavaScript: JavaScript can be used as both (front end and back end) programming languages.
// Node.js: Node.js is an open-source and cross-platform runtime environment for executing JavaScript code outside a browser. You need to remember that NodeJS is not a framework, and it’s not a programming language. Most people are confused and understand it’s a framework or a programming language. We often use - Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Wallmart, and so on.

// - Back End Frameworks:
// - The list of back-end frameworks are: Express, Django, Rails, Laravel, Spring, etc.
// - The other back-end program/scripting languages are C#, Ruby, REST, GO, etc.

// DATABASES:
// - MongoDB(Used with JS and Node)
// - MySQL(Used with PHP)
// - PostgreSQL(Used with Python)

// NOTE:
// - A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser.
// - A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.
// - The term dynamic means that the server processes the content or even generates it on the fly from a database. This approach provides more flexibility, but the technical stack is more complex, making it dramatically more challenging to build a website.
// - For example, to produce the final webpages you see in the browser, the application server might fill an HTML template with content from a database. Sites like MDN or Wikipedia have thousands of webpages. Typically, these kinds of sites are composed of only a few HTML templates and a giant database, rather than thousands of static HTML documents. This setup makes it easier to maintain and deliver the content.

// -----------------------------------------------------------------------------------------------------------
// => WEB SERVER VS APPLICATION SERVER -

// - A Web Server accepts and fulfills requests from clients for static content(i.e. HTML, pages, files, images and videos) from a website. Web Serbers handle HTTP reqyests and resonses only.
// - An application servers exposes business logic to the client, which generates dynamic content. It is a software framework that tranforms data to provide the specialized functionality offered by a business, service or application. Application servers enhance the interactive parts of a website that can appear differently depending on the context of the request.

// WEB SERVER -
// 1. Deliver static content to clients
// 2. Content is delivered using HTTP protocol only
// 3. Serves only web based content
// 4. No support for multithreading
// 5. Facilitate web traffic that is not resource intensive
// 6. Web server encompasses web container only.

// APPLICATION SERVER -
// 1. Deliver dynamic content to clients
// 2. Provides business logic to applications programs using several protocols
// 3. Can server web based content and enterprise based content
// 4. Uses multithreading to support multiple requests in parallel
// 5. Facilitate longer running processes that is very resource intensive
// 6. Application server encompasses Web container as well as EJB container.

// ------------------------------------------------------------------------------------------------------------------------------
// => STATIC VS DYNAMIC WEBSITES -

// A) Static Websites -
// - A static website, or A Simple Website, is when a developer uploads the final ready to be served files of a website onto the webserver.
// - These files usually contain HTML, CSS, JavaScript, images, and more, and as I said, these are the exact files that the server will later send to the browser when the website is requested.
// - The browser will then take these files and render them as they are.
// - This means that there is no work done on the server, there is no back-end code, and there’s also no application whatsoever running.
// - So, it’s just a static webserver serving static files
// - Now, you might think, wait, when there is JavaScript on the page, then there are usually dynamic effects, like animations and stuff, right?
// - Well, that dynamic that you mean there is a different dynamic. It’s just in the context of front-end development.
// - In the browser context, the dynamic has nothing to do with effects on a page or things moving around but with the way, websites are generated on servers.

// B) Dynamic Websites -
// - Dynamic websites are different from static websites because they are usually built on the server each time a new request comes in.
// - Dnamic websites usually contain a database, then there's also an application running, like a Node.js app, which fetches data from the database, and then, together with a predefined template, builds each page that the user requests dynamically based on data coming from the database.
// - So, each time a browser requests a page, that page is then built as HTML, CSS, and JavaScript files, which will then be sent back to the browser. This whole process is sometimes called Server-Side Rendering.
// - So, again, that's why it's called dynamic because the website can change all the time according to the content that's in the database or user's actions on the site.
// - For example, if you logged into Twitter, it will show you a completely different page than when you logged out, right? And it will also show you a different page tomorrow than it did today because there are new tweets, so new data in the database and that is what dynamic websites are all about.
// - Dynamic Websites can also be referred as Web Applications. Usually, when people refer to web applications, they mean a dynamic website with some functionality like slogging in, creating user profiles, searching for stuff, and things like that in general.
// - For example, something like a WordPress blog, they are still generated dynamically, but we can’t really do anything but reading them, right?

// Note: Traditionally, static and dynamic websites were the only two types of websites, but in recent years, thanks to how powerful browsers have become on the client-side, we see more and more websites that are, basically, based on APIs.

// C) Web Applications based on APIs -
// - Just like with the dynamic websites, we have a database here and we have an app that fetches data from the database each time a client makes a request, so in that sense, an API-powered website is actually quite similar to a dynamic website.
// - So, both work dynamically. Now, the big difference here is that with an API, we only send the data to the browser, usually in the JSON data format, and not the entire website. So, just the data is sent to the client and not the ready to be displayed website, and no HTML, no CSS, only the JSON data.
// - When building API-powered websites, there are always these two steps:
//     1. building an API
//     2. Then consuming the API on the client-side.

// NOTE:  By the way, API stands for Application Programming Interface, and on a very high level, it's basically a piece of software that can be used by another piece of software to, basically, allow applications to talk to each other.

// - Now the Client side is where the website is then actually assembled by plugging the data that we receive into some sort of templates, usually using some fancy front-end framework like React, Angular, or Vue.
// - So, when building an API-powered website, the building phase of the website kind of moved from the backend to the frontend Or we can also say it moved from the server to the client.
// - That's why many times you will see dynamic websites being called Server-Side Rendered because they're actually built on the server. On the other hand, API-powered websites are often called Client-Side Rendered.

// - So, Backend developers, it's actually far easier to just build an API and let the frontend people build a site. And in fact, Node is an absolutely perfect tool for building APIs, and it’s very commonly used for that, but of course, it's also perfectly suitable to build a dynamic server-side rendered website.
// - A huge advantage of building an API over SSR websites is that we could also request and then consume the exact same JSON data on a native iOS app or an Android app, or even on desktop apps for the Mac or for Windows computers and not only on wen browsers.

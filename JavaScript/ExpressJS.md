---
title: ExpressJS
tags: ExpressJS
---

## ExpressJS Introduction

- About, Installation
- Usage
  - Simple Server
  - Static file Server
  - Connection with Template engine(ejs)
  - Reading data from form
  - Saving Data to the DB using Mongoose
- RESTful API
- MVC Architecture
- Authentication(JWT, OAuth 2.0), Authorizations
- OAuth
- SSR, CSR

### Examples

- Send a Message to the Client

```js
// npm init -y
// npm i express
// server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("Serving on 3000"));

// node server.js
// http://localhost:3000
```

- Sending a HTML file

```js
// server.js
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
```

- Handling Multiple Route

```js
// server.js
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("Home Page");
});

app.get("/contact", (req, res) => {
  res.send("Home Page");
});
```

- Static File Server

```js
// server.js
app.use("/", express.static("./public"));
app.listen(3000, console.log(`Serving on 3000`));
```

- Using the Middlewares
  - Middlewares is a function that is used between the receiving a request and sending a response

```js
function message(req, res, next) {
  console.log(req.url);
  next();
}

// This will work for all the requests
// app.use(message)

app.get("/", message, (req, res) => {
  res.send("Using the Middlewares");
});
```

## ExpressJS Template Engine EJS

- EJS - Template Engine

```js
// npm init -y
// npm i express ejs
// server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, console.log(`Serving on ${PORT}`));
```

```cmd
<!-- Folder Structure -->
- views/
  - index.ejs
- server.js
```

```html
<!-- views/index.ejs -->
<h1>Using Template Engine EJS</h1>
```

### Sending the data to EJS

```js
// server.js
app.get("/", (req, res) => {
  res.render("index", { data: "Manoj Kumar" });
});
```

```html
<!-- views/index.ejs -->
<h2>Data <%- data %></h2>
```

### EJS tags

- if

```js
// server.js
app.get("/", (req, res) => {
  res.render("index", { day: 1 });
});
```

```html
<!-- views/index.ejs -->
<% if(day == '1') { %>
<p>Monday</p>
<% } %>
```

- for

```js
// server.js
app.get("/index", (req, res) => {
  res.render("index", { data: ["Apple", "Microsoft", "Google"] });
});
```

```html
<!-- views/index.ejs -->
<% for (let i of data) { %>
<p><%- student %></p>
<% } %>
```

- include

```js
// server.js
app.get("/index", (req, res) => {
  res.render("index");
});
```

```html
<!-- views/head.ejs -->
<head>
  <title><%- title %></title>
</head>
```

```html
<!-- views/index.ejs -->
<!DOCTYPE html>
<html lang="en">
  <%- include('head', {title: 'Home Page'}) -%>
  <body>
    <h1>Home Page</h1>
  </body>
</html>
```

## ExpressJS Template Engine PUG

```js
// npm i pug
// server.js
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { data: "Manoj Kumar" });
});

// - views/
//   - index.pug
// - server.js
```

```pug
//- views/index.pug
h1 Data : #{data}
```

- PUG Advanced
  - if
  - for
  - Template Inheritance

## ExpressJS Getting Data from Client

- Using GET Method
- Using POST Method
- Parameterized URL
- Same interface for both GET and POST request

```js
// submitting form data using get Method
app.get("/", (req, res) => {
  console.log(req.query);
  res.render("index");
});

// same interface for both GET and POST request
app.use("/same", (req, res) => {
  if (req.method === "GET") {
    res.send("Same GET Request");
  } else if (req.method === "POST") {
    res.send("Same POST request");
  }
});

// Parameterised URL
app.get("/std/:id", (req, res) => {
  console.log(req.params);

  res.render("index");
});

// rendering the signup form
app.get("/signup", (req, res) => {
  res.render("signup");
});

// app.use(express.json()); // used if we are getting of contentType - json
app.use(express.urlencoded({ extended: true }));

// getting the post data
app.post("/signup", (req, res) => {
  console.log(req.method);
  console.log(req.body);
  res.send("POST signup form Submitted");
});

app.listen(3000, console.log(`Server on 3000`));
```

## MVC Architectures

- MVC - Model, View, Controller
- Model - This part describe the structure of the data to be stored
- View - This is the part which is presented to the User
- Contrller - This is the part which handle the request and send an response back to the Client.

### Routing

```js
// user.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router Used");
});

module.exports = router;
```

```js
// server.js
const express = require("express");
const app = express();

app.use("/user", require("./user"));

// OR
// require("./user")(app);
app.listen(3000, console.log("Serving on 3000"));
```

## Authentication and Authorization

- Cookies, Sessions
- Flash Messages
- Password Encryption
- JWT Token
- Using Passport

### Cookies

- Cookies are client side storage used to identify the identity of the user sending the request
- Options in cookies

  - name, value, path, maxAge, httpOnly, etc

- Working With Cookies

```js
const cookieParser = require("cookie-parser"); // required for reading the cookies coming from the browser
app.use(cookieParser());
console.log(req.cookies);

// Accessing the cookies at the client side
console.log(document.cookie);

// Setting the Cookies at server side
// - this does not require the `cookie-parser` module
res.cookie("appname", "Express App");
res.cookie("appname", "Express App", {
  maxAge: 30000, // time in milliseconds
});

res.clearCookie("appname");
```

### Session

- **Session**
  - Sessions are Server Side storage.
  - In storing the Session data the cookies are stored
  - Module Used `express-session`
    - `express-session` defaultly uses the MemoryStore to store the Session data
    - Installation : `npm i express-session`

```js
const session = require("express-session");
// setting up
app.use(
  session({
    secret: "MySite",
    resave: false,
    saveUninitialized: false,
  })
);

// Creating a session
req.session.name = "MyDataIn Session";
console.log(req.sessionID); // session ID
console.log(req.session.name);
delete req.session.name;

req.session.cookie;
req.session.destroy(); // delete the session for the current request
```

```js
// Calculate the Visitor Count
let count = 0;
app.get("/", (req, res) => {
  console.log(req.session);
  if (!req.session.count) {
    req.session.count = "visited";
    count++;
  }
  res.render("index", { count: count });
});
```

### Flash Messages

- Sending flash messages using `express-flash`
- `express-flash` uses `express-session` for storing the messages

```js
// npm i express-flash
const session = require("express-session");
const flash = require("express-flash");

app.set("view engine", "pug");
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "My App",
  })
);
app.use(flash());

app.get("/", (req, res) => {
  req.flash("info", "Login Success");
  res.render("index");
});
```

```html
<%- messages.info %>
```

- `express-flash` is the extended version of the `connect-flash` in which we are not required to pass the message explicitly it will implicitly pass the message automatically

```js
const session = require("express-session");
const flash = require("connect-flash");

app.set("view engine", "pug");
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "My App",
  })
);
app.use(flash());

app.get("/", (req, res) => {
  req.flash("info", "Login Success");
  res.render("index", { messages: req.flash() });
});
```

### Authentication using Session

- Authentication - the process of verifying the identity of a user. or It is controlling if an incoming request can proceed or not.
- Authorization - the process of giving permission of Usage or It is controlling if an authentication request has the correct permission to access a resource
- identification - is determining who the requester is.
- Using session to authenticate the user
  - Registration
  - Login
  - Logout
  - Saving Data for a Particular user
  - mongoose populate
- [NodeJS Handling Authentication using Passport and JWT FreeCOdeCamp](https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/)

### Password Encryption(Hashing)

- For doing password encryption we can use any one of the following module
  - crypto(builtin nodejs)
  - bcrypt
  - bcryptjs
- Process of Password Encryption
  - During Registration
    - we get the password from the user, we generate the hash of the password(by password and the salt)
    - now we have the hash so we will save this hash to the database not the password
  - During login
    - we will get the password from the user, we will now create hash again using the password
    - after the hash has been created now we will compare this new hash with the old hash that we have saved to the database
    - if both the hashes matches that means that the password user has given is same as he give during the registration
    - so not we will allow him to login

### Using Passport for Authentication and Authorization

### JWT - JSON Web Token

- RFC 7519 - Standard that define how JWT should be structured
- JWT used for Authorization
- Authorization Strategies
  - Session Token
  - JSON web Token
- HTTP - States less protocol -

### Parts of the JWT

1. Header
2. Payload -
3. Signature

- Cryptography
  1. Symmetric Key Cryptography
  - Both Sender and Receive should have same key
  2. Asymmetric Key Cryptography
  - Public and Private Key
- Encryption
- Decryption
- Hashing

## File Upload Using Multer

```js
// npm i multer
// make a folder before uploading the images
// server.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

app.get("/", express.static("public"));
app.use(express.urlencoded({ extended: true }));

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({ storage: storage });
// let upload = multer({ dest: 'uploads/' });

app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  console.log(req.files);
  res.send("Uploaded");
});

app.listen(3000, () => console.log("Serving on 3000"));

//  Saving the upload file path to the Data base
```

## Making REST API

- API
  - Method of the communication between software components
  - an API specifies how software components should interact with each other. It is a set of protocols and routines, and it’s responses are generally returned as JSON or XML data. APIs can use any type of communication protocol, and are not limited in the same way a web service is.
  - Interoperability : the ability of computer systems or software to exchange and make use of information.
  - What is REST - Architecture that define guidelines to make web API easily
  - WSDL - Web service description language
- Types of web services
  - REST - representational state transfer each URL is a object Architectural style
  - SOAP - simple object access protocol
- XML based message protocol

- API - Application Programming Interface
- REST - Representational state transfer
- API is a interface through which one application talk to another application.
- Web Services - are the type of APIs which are accessed through a network Connection
- REST is a software architectural style(or API design Pattern) that defines a set of constraints to be used for creating Web services.
- Web services that conform to the REST architectural style, called RESTful Web Services.

- RESTful Constraints

  - Both client and Server should work Independently
  - Request Should be handled using different HTTP Methods
  - No client context is stored on the server (like Session)

- Request and Response
- Parts of the Request

  - Endpoint (route)
  - Method
  - Headers(optional)
  - Body(optional)
  - Parameters(optional)
  - Query(Optional)

- Headers

  - The additional Information that the client need to send to the Server is Sended using the Headers.Like
    - Authorization Credentials
    - Content-Type of the Body
    - User-Agent - information about the application which is sending the request

- Request Methods

  - POST - Create
  - GET - Read
  - Put - Update
  - DELETE - Delete

- HTTP Methods

  - https://developer.mozilla.org/en-US/docs/Web/HTTP

  - GET - used for retrieving data
  - POST - to submit an entity of the specified resource
  - PUT - used to replaces all current representation of the resource with request payload
  - DELETE - used to delete specified resource
  - PATCH - used to apply partial modifications to a resource

- HTTP Status Codes

  - Tell the Status of the Response to the client
  - Common Status Terminology
    - 200+ - means the request is Success
    - 300+ - means the request is redirected to another URL
    - 400+ - an error is generated due to Client
    - 500+ - an error is generated due to server

### Important HTTP Status Codes

- References - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

- 200 : OK
- 201 : Created
- 400 : Bad Request
- 401 : Unauthorized -
- 403 : Forbidden - Does not have access right to this resource
- 404 : Not Found
- 500 : Internal Server Error
- 503 : Service Unavailable

- Testing Tools for Routes
  - CURL
  - Postman

### CORS Headers

```js
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
```

## TODO

- [Express Generator](https://expressjs.com/en/starter/generator.html)
- [Debugging Express APP](https://expressjs.com/en/guide/debugging.html)
- https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-getting-started/

## Starting the node express typescript app

```sh
cd LOCAL_DIRECTORY
cd server
npm init -y
git init

npm i express
npm i -D typescript ts-node
npm i -D @types/node @types/express
npm i -D nodemon

npm start
npm run build
```

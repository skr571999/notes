# Authentication and Authorization

- Cookes, Sessions
- Flash Messages
- Password Excryption
- JWT Token
- Using Passport

## Cookies

- Cookies are client side storage used to identify the identity of the user sending the request
- Options in cookies

  - name, value, path, maxAge, httpOnly, etc

- Working With Cookies

```js
const cookieParser = require("cookie-parser"); // required for reading the cookies comming from the browser
app.use(cookieParser());
console.log(req.cookies);

// Accessing the cookies at the client side
console.log(document.cookie);

// Setting the Cookies at server side
// - this does not require the `cookie-parser` modeule
res.cookie("appname", "Express App");
res.cookie("appname", "Express App", {
  maxAge: 30000, // time in milliseconds
});

res.clearCookie("appname");
```

## Session

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

## Flash Messages

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

## Authentication using Session

- Authentication - the process of verifying the identity of a user. or It is controlling if an incomming request can proceed or not.
- Authorization - the process of giving permission of Usage or It is controlling if an authentication request has the correct permission to access a resource
- identification - is determining who the requester is.

- Using session to authenticate the user

  - Registration
  - Login
  - Logout
  - Saving Data for a Particular user
  - mongoose populate

- [NodeJS Handling Authentication using Passport and JWT FreeCOdeCamp](https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/)

## Password Encryption(Hashing)

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

## Using Passport for Authentication and Authorization

- See in Examples

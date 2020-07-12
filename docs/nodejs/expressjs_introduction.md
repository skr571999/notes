---
title: ExpressJS Introduction
---

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

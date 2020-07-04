# ExpressJS Template Engine - EJS

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

## Sending the data to EJS

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

## EJS tags

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

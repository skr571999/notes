---
title: NodeJS Module System
---

- **Why use Module System** - a member defined inside a module is not available inside another module but we can do that explicitly
- NodeJS Uses the **commonjs** module system
- What is a module. Example

- Types of Modules

  - Built In Modules(core modules)
    - are the modules that are provided by the NodeJS
  - User Defined Modules
  - Third Party modules(npm Modules)

<!--
- Packages
  - a folder containing a index.js file can be imported as follows

- sum
  - index.js
- app.js

// index.js
module.exports = (a, b) => {
  return a + b;
};
// app.js
const sum = require('./sum')
console.log(sum(12,2))

RUN: node app
-->

## User Defined Modules

```js
// Date.js
// Exporting a single member
exports.Date = function () {
  return Date();
};

// Demo.js
// Importing Using the Common.js module Standard
let sum = require("./Sum");
let date = require("./Date");

console.log(date.Date());
console.log(sum.a);

// Sum.js
// Only One Statement can be exported not 2 or more
// exports.Sum = function (a, b) {
//     return a + b;
// }

module.exports = {
  a: "Hello",
  b: 123,
};

// This will throw the error, when we are to export 2 or more member we need to use module.exports
// exports = {
//     a : 'Hello',
//     b: 123
// }
```

## Third Party Modules

- NPM - Node Package Manager
  - npm commands

```cmd
npm install MODULE_NAME
npm uninstall MODULE_NAME
npm list -g --depth=0
```

- Local and Global Modules

```js
// Example
// npm i request
const request = require("request");
const URL = "http://localhost:3000";

request(URL, (err, res, body) => {
  console.log(body);
});

request.post(URL, (err, res, body) => {
  console.log(err);
  console.log(body);
});
```

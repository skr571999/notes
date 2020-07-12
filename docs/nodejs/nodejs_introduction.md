---
title: NodeJS Introduction
---

- About NodeJS
  - NodeJS is created by Ryan Dahl in 2009. It is a javascrit runtime that uses the V8 engine inside to run the javascript code.
  - Basically it is a c++ program that run the V8 engine.
  - Website : [https://nodejs.org/en/](https://nodejs.org/en/)
  - What is the use of NodeJS
  - Why should we use NodeJS
- Installation and Introduction
- Basic Concepts of JavaScript

  - Variables, Identifers
  - Datatypes(Array, Object, JSON)
  - Control flow statements(conditional, looping)
  - functions(arrow functions, higher order function)

- NodeJS Module System
- NodeJS Builtin modules(url, path, http, fs, os, process)
- NPM Usage(initilizing the project, working with third party modules)

## Features of NodeJS

- Free and Open Source
- Cross Platforms - Windows, Linux, Mac OS, etc
- Asynchronous Event Driven IO
- Event Queue Loop - node monitor this event queue to know which tasks to do
- Handle Concurrent Request on a single thread
- Both front and backed using JavaScript so Faster development

<!--
- When to Use NodeJS
  - Chat Application
  - Game Servers
  - For Collaboration Environment
  - Streaming Servers
- When not to Use NodeJS
  - When we require long processing time, because it uses single thread to process if a request need nore time in background then it would not be able to serve other requests.
-->

## Running First Program

- Software Required
  - NodeJS
  - Visual Studio Code
- REPL

```js
// hello.js
console.log("Hello World");

// Run
// node hello.js

// /////////// Global Objects
global;
setTimeout();
clearTimeout();
setInterval();
clearInterval();
console;

// GLOBAL to a file
console.log(exports);
console.log(require);
console.log(module);
console.log(__filename);
console.log(__dirname);

// Command Line Arguments
// index.js
console.log(process.argv);

// Run
// node index.js 1 2 3 4
```

<!--
// ---------------- Example of Blocking code in NodeJS
const app = require("express")();

app.use((req, res) => {
  if (req.path == "/a") {
    let j = 0;
    for (let i = 0; i < 9e9; i++) {
      j++;
    }
    res.send("A");
  } else {
    res.send("Else");
  }
});

app.listen(3000, () => console.log("Serving on 3000"));
-->

## Debugging

```js
// Using the Debugger Statement
// Adding the debugger statement to inspect
// Use `node inspect FILE_NAME` to to start debugging
// Use : `next` : `watch('VARIABLE')` : `help` - for further instructions

let a = 10;
debugger;
a = 13;
```

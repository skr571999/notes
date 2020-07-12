---
title: NodeJS Builtin Modules
---

## HTTP

```js
// ////// Example 1
const http = require("http");
const PORT = 3000;

http
  .createServer((req, res) => {
    res.end("Hello World");
  })
  .listen(PORT, () => {
    console.log(`Server Runnig on ${PORT}`);
  });

// ///////////// Exmaple 2
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      // writeHead() is used to specify the HTTP Header Information
      // Here, status code of the response and the type of the content to be delivered is specified
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("HTML Response");
    } else if (req.url === "/json") {
      // Sending the JSON data when the /json is navigated
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({
          a: "hello JSON Data",
          b: "This is JSON Data",
        })
      );
    } else {
      // Sending a message of Invalid for all other requests
      res.write("Invalid Request");
    }
    res.end();
  })
  .listen(4200, console.log("Server is Running on Port: 4200"));

// Now, We can see server is running by two methods
// 1. Navigating to the http://localhost:4200
// 2. Type this command in the cmd : > curl -i http://localhost:4200
```

## FS

```js
const fs = require("fs");

// Asynchronous
fs.readdir("./", (err, files) => {
  if (err) console.log("Error ", err);
  else console.log("Result", files);
});

// Synchronous
console.log(fs.readdirSync("./"));

// 1. Creating a file
// fs.appendFile() - This is to append the content to a file and if it does not exit then is will be created

// fs.open() - It takes a flag as second argument if it is 'w' and the file does not exit the it would be created

// fs.writeFile() - method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

// 2. Updating a file
// fs.appendFile()
// fs.writeFile()

// fs.unlink() // 3. Deleting a file

// 4. Reading a file
fs.readFile("./data.json", "utf8", (err, data) => {
  console.log(data);
});

console.log("Hello WOrld");

// let data = fs.readFileSync('./data.json')

// console.log(data)
console.log("Hello WOrld");
setTimeout(() => {
  console.log("Time finished");
}, 10);

// fs.rename() // 5. Renaming a file

// console.log(fs);

// //// Example 2
const { readFile } = require("fs");

readFile("data.json", "utf8", (err, data) => {
  console.log(data);
});

// data.json
{
  "id": 1,
  "name": "Sachin"
}

// File handling
// Working with Files
// - writeFile
// - readFile
// - rename
// - appendFile
// - unlink

//  Working with dir
// - mkdir
// - rmdir
// creating file inside filder

// working with streams
// compressing and uncompressing using fs and zlib
```

## OS

```js
const os = require("os");

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.userInfo());
console.log(os.uptime());
```

## PATH

```js
const path = require("path");
console.log(path.parse(__filename));
```

## URL

```js
const url = require("url");
let adr = "http://localhost:8080/index.html?year=2017&month=february";

let q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
```

## Streams

## Process

- argv
- cwd()

<!--
- Getting User Input
- Command Line Arguments
- JSON Data
- Asynchronous Programming
  - Callbacks
  - Promises
- Event Emitter
- Read Line
- File System / direcotry
- Read and Writable Streams
- Buffers
  - Why Buffers exist
  - Creating Buffers
  - Reading and Writing Buffers
  - Manipulating Buffers
- Http Server
  - static server using the http and fs
- npm
  - init
  - installing a third party module
  - versioning > major.minor.patch
    - ^ - for minor version updates
    - ~ - for patches updates
-->

<!--
// Example
// const exec = require("child_process").exec;

// exec("python test.py", (err, stdout, stderr) => {
//   console.log(stdout);
//   //   console.log(err)
//   console.log(stderr);
// });

// console.log(module)
// console.log(global)
// console.log(require.main == module)

// const fs = require('fs')

// fs.readdir('.',(err, files)=>{
//     console.log(files)
// })
-->

## Event Emitter

- Passing Arguments to the Event

<!--
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("test1", () => {
  console.log("Hello World of the event");
});

event.emit("test1");

// Passing arguments to the event emitter

event.addListener("test2", event => {
  console.log("Test 2: ", event);
});

event.emit("test2", { name: "Sachin Kumar" });
-->

- Using the Class to create Event Emitter

<!--
// Logger.js
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("test", { id: 1234 });
  }
}

module.exports = Logger;

// test.js
const Logger = require("./Looger");

const logger = new Logger();

logger.on("test", event => {
  console.log("Test : ", event);
});

logger.log("Hello world of test");

-->

## Readline

<!--
// test1.js
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'input>'
})

// rl.prompt();

rl.question('What is the day?',(answer)=>{
    console.log(`Have a good ${answer}`);
})

rl.on('line', (i) => {
    console.log(`Received : ${i}`)
    rl.pause()
})

rl.on('pause', () => {
    rl.setPrompt('New>');
    console.log('Paused');
    rl.resume()
})

rl.on('close', () => {
    console.log("Closed")
})

rl.on('resume', () => {
    rl.prompt();
    console.log('Resuned');
})

// test2.js
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let a, b;

rl.question('Enter a number : ', (x) => {
    console.log(`a : ${x}`)
    a = x;
    rl.question('Enter another number : ', (x) => {
        console.log(`b : ${x}`)
        b = x;
        console.log(`Sum : ${sum(a, b)}`);
        rl.close();
    })
})

function sum(i, j) {
    i = parseInt(i);
    j = parseInt(j);
    console.log(i)
    console.log(typeof i)
    // if ((i !== NaN) && (j !== NaN)) {
    return (i + j)
    // } else {
    //     return 'Not Possible'
    // }
}

// test3.js
const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async function() {
  function input(msg) {
    return new Promise((resolve, reject) => {
      rl.question(msg, input => {
        resolve(input);
        rl.close();
      });
    });
  }

  let n1 = await input("Enter a number : ");
})();
-->

---
title: NodeJS
---

## Learning Topics

- NodeJS Introduction
- NodeJS Module System
- NodeJS Builtin Modules
- NodeJS MongoDB
- NodeJS MySQL
- NPM Guide
- ExpressJS Introduction
- ExpressJS Template Engine { EJS, PUG }
- ExpressJS - Getting Data from the Client
- MVC architecture
- Saving Data to Database(MongoDB) using Mongoose
- Authentication and Authorization
- Data Validation Using Joi
- File Upload using Multer
- Sending Mail using Nodemailer
- Making REST API
- Others

## NodeJS Introduction

- About NodeJS
  - NodeJS is created by Ryan Dahl in 2009.
  - It is a JavaScript runtime that uses the V8 engine inside to run the javascript code.
  - Basically it is a c++ program that run the V8 engine.
  - [https://nodejs.org/en/](https://nodejs.org/en/)
  - What is the use of NodeJS
  - Why should we use NodeJS
- Installation and Introduction
- Basic Concepts of JavaScript
  - Variables, Identifers
  - Data types(Array, Object, JSON)
  - Control flow statements(conditional, looping)
  - functions(arrow functions, higher order function)
- Features of NodeJS
  - Free and Open Source
  - Cross Platforms - Windows, Linux, Mac OS, etc
  - Asynchronous Event Driven IO
  - Event Queue Loop - node monitor this event queue to know which tasks to do
  - Handle Concurrent Request on a single thread
  - Both front and backed using JavaScript so Faster development
- When to Use NodeJS
  - Chat Application
  - Game Servers
  - For Collaboration Environment
  - Streaming Servers
- When not to Use NodeJS
  - When we require long processing time, because it uses single thread to process if a request need more time in background then it would not be able to serve other requests.
- REPL - Read Evaluate Print Loop

```js
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

// ### Debugging
// Using the Debugger Statement
// Adding the debugger statement to inspect
// Use `node inspect FILE_NAME` to to start debugging
// Use : `next` : `watch('VARIABLE')` : `help` - for further instructions

let a = 10;
debugger;
a = 13;
```

## NodeJS Module System

- **Why use Module System** - a member defined inside a module is not available inside another module but we can do that explicitly
- NodeJS Uses the **commonjs** module system
- Types of Modules
  - Built In Modules(core modules)
    - are the modules that are provided by the NodeJS
  - User Defined Modules
  - Third Party modules(npm Modules)

```js
// - Packages
//   - a folder containing a index.js file can be imported as follows

// - sum
//   - index.js
// - app.js

// index.js
module.exports = (a, b) => {
  return a + b;
};
// app.js
const sum = require("./sum");
console.log(sum(12, 2));

// RUN: node app
```

### User Defined Modules

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

### Third Party Modules

- NPM - Node Package Manager
- NPM Usage(initializing the project, working with third party modules)
- Local and Global Modules

```sh
# npm commands
npm install MODULE_NAME
npm uninstall MODULE_NAME
npm list -g --depth=0
```

```js
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

## NodeJS Builtin Modules

### HTTP

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

// ///////////// Example 2
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("HTML Response");
    } else if (req.url === "/json") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({
          a: "hello JSON Data",
          b: "This is JSON Data",
        })
      );
    } else {
      res.write("Invalid Request");
    }
    res.end();
  })
  .listen(4200, console.log("Server is Running on Port: 4200"));

// - http://localhost:4200
// ->curl -i http://localhost:4200
```

### FS

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
// creating file inside folder

// working with streams
// compressing and un-compressing using fs and zlib
```

### OS

```js
const os = require("os");

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.userInfo());
console.log(os.uptime());
```

### PATH

```js
const path = require("path");
console.log(path.parse(__filename));
```

### URL

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

### Streams

### Process

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

### Event Emitter

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

### ReadLine

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

## NodeJS MongoDB

### Basic Connection

```js
const MongoClient = require("mongodb").MongoClient;
const dbURL1 = "mongodb://localhost:27017";
const dbURL2 = "mongodb://localhost:27017/test";

// MongoClient.connect(dbURL1, { useNewUrlParser: true }, (err, client) => {
//   if (err) throw err;

//   console.log("Successfully connected to Client");
//   client.close();
// });

// NOTES:
// - If the db is specified in the url then no need to use the client.db('DB_NAME)
// then we can directly access db using the passed parameter in the callback

// ### Creating Collection
let db = client.db(dbNAME);

db.createCollection("students", () => {
  console.log("Collection created!");
});

// it will not show in DB because it is empty
client
  .db()
  .collections()
  .then((result) => {
    console.log(result.length);
    // console.log(result[0].namespace)
    client.close();
  });

// ### Dropping the Collection
let db = client.db(dbNAME);

// Method - 1
db.collection("students").drop(() => {
  console.log("Collection Dropped");
});

// Method - 2
db.dropCollection("students", () => {
  console.log("Collection Dropped");
});

// ### Inserting into the Database
let collection = client.db(dbNAME).collection("students");

// Method - 1
collection.insertOne({ name: "Sachin Kumar", branch: "CSE" }, (err, res) => {
  if (err) throw err;
  console.log(res.ops);
});

// Method - 2
let documents = [
  { name: "Mradul Kumar", branch: "ME" },
  { name: "Rajneesh Kumar", branch: "EC" },
];

collection.insertMany(documents, (err, res) => {
  if (err) throw err;
  console.log(res.ops);
});

// ### Reading the data from the Database
let collection = client.db(dbNAME).collection("students");

collection.find({}).toArray((err, res) => {
  if (err) throw err;
  console.log(res);
});

collection.findOne({}, (err, res) => {
  if (err) throw err;
  console.log(res);
});

let query = { name: "Rajput" };

collection.find(query).toArray((err, res) => {
  if (err) throw err;
  console.log(res);
  console.log(res.length);
});

// ### Example
const MongoClient = require("mongodb").MongoClient;
const dbURL = "mongodb://localhost:27017/sunday";

MongoClient.connect(
  dbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    console.log(client.isConnected());
  }
);

MongoClient.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.dir(client, { depth: 0 });

    let collection = client.db().collection("student");

    // INSERT
    collection.insertOne({ name: "Jishant", course: "Python" }).then((res) => {
      console.dir(res, { depth: 0 });
    });

    // READ
    collection
      .find()
      .toArray()
      .then((res) => {
        console.log(res);
      });

    // UPDATE
    collection
      .updateOne(
        { name: "Jishant" },
        {
          $set: {
            name: "Jishant Tyagi",
          },
        }
      )
      .then((res) => {
        console.dir(res, { depth: 0 });
      })
      .catch((err) => {
        console.log("Erro Occured in Update", err.name);
      });

    // DELETE
    collection
      .deleteOne({ name: "Jishant" })
      .then((res) => {
        console.dir(res, { depth: 0 });
      })
      .catch((err) => {
        console.log("Error Occured During Deletion ", err.name);
      });

    collection
      .countDocuments((err, res) => {
        console.log(res);
      })
      .then((res) => {
        console.log(res);
      });

    console.log(client.db().databaseName);
    console.log(collection.collectionName);

    client
      .db()
      .collections()
      .then((res) => {
        for (let i of res) {
          console.log(i.collectionName);
        }
      });

    client.close();
  })
  .catch((err) => {
    console.log("Error Occurred During Connection", err.name);
  });
```

## NodeJS Mongoose

```js
// ### Multiple Type Property
const pendingMenuSchema = new mongoose.Schema({
  category: {
    // type: {},
    // OR
    type: mongoose.Schema.Types.Mixed,
  },
});

const PendingMenu = mongoose.model("pendingmenu", pendingMenuSchema);

const pm1 = new PendingMenu({
  category: "Apple",
});

const pm2 = new PendingMenu({
  category: mongoose.Types.ObjectId(),
});

// ### Aggregation Example
const mongoose = require("mongoose");

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/test1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

const userSchema = mongoose.Schema({
  name: String,
  review: [{ course: String, rating: Number }],
});
// console.log(userSchema.path("name"))

const User = mongoose.model("User", userSchema);

let u1 = new User({
  name: "User 4",
  review: [
    { course: "Course 1", rating: 6 },
    { course: "Course 2", rating: 7 },
    { course: "Course 3", rating: 6 },
  ],
});

u1.save().then((result) => {
  console.log(result);
});

User.countDocuments().then((result) => {
  console.log(result);
});

User.distinct("review.course").then((result) => {
  console.log(result);
});

User.aggregate([
  { $match: { name: "User 1" } },
  { $group: { _id: "$_id", total: { $sum: "$rewiew.0.rating" } } },
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
```

## NodeJS MySQL

- Requirement
  - MySQL
  - NodeJS
  - MySQL NodeJS Connector
- Resources
  - [https://www.npmjs.com/package/mysql](https://www.npmjs.com/package/mysql)
  - [https://www.w3schools.com/nodejs/nodejs_mysql.asp](https://www.w3schools.com/nodejs/nodejs_mysql.asp)

### Example

- MySQL Code

```sql
CREATE DATABASE test;

USE test;

CREATE TABLE student (
  name VARCHAR(20),
  rollno INT
);
```

- NodeJS Code

```js
// npm i mysql
const mysql = require("mysql");

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

conn.connect();

const QUERY = `show tables;`;

conn.query(QUERY, (err, result) => {
  if (err) throw err;
  console.log(result);
});

conn.end();
```

---

## NPM Guide

### Basic Commands

- to save packages as the dev dependencies

```cmd
npm i -D nodemon
npm i --save-dev nodemon
```

- global commands

```cmd
npm i -g <package_name>
npm uninstall -g <package_name>
npm update -g <package_name>
npm outdated -g <package_name>
```

- to install the dependencies not the dev-dependencies `npm i --production`

### Npm Scripts

- scripts are to be written in `package.json` file in the script property
- to run a script from cmd `npm run <SCRIPT_NAME>`

### Npm versioning

- ^ - for most recent version
- ~ - for most recent minor version
- `npm i loadash@4.17.4` - to install the specific version
- `npm i loadash@^4.0.0` - to install the latest 4.x.x version

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

## Saving Data to DB using Mongoose

- What is ORM
  - ORM is a technique for converting data between incompatible type systems using object-oriented programming languages.
- Mongoose is the Tool that is used to store data to MongoDB using the concept of OOP
  <!-- - Also called ODM(Object Document Mapper) -->
- Populating
  - Populating Inner Documents

### Example

```js
const mongoose = require("mongoose");
const dbURL = "mongodb://localhost/sunday";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    // console.dir(res, { depth: 0 });
    console.log("DB connected");

    // let conn = mongoose.connection.db.databaseName;
    // console.dir(conn, { depth: 0 });

    // res.connection.close();
  })
  .catch((err) => {
    console.log("Error in DB Connection : ", err.name);
  });

let Employe = mongoose.model(
  "Employe",
  new mongoose.Schema({
    name: {
      type: String,
    },
  })
);

let conn = mongoose.connection;

// ///// INSERT
// let e1 = new Employe({ name: "Vikas Bhardwaj" });

// e1.save()
//   .then(res => {
//     console.dir(res);
//     conn.close()
//   })
//   .catch(err => {
//     console.log("Error in insertion : ", err.name);
//   });

// //////////// READ
// Employe.find().then(res=>{
//   console.log(res)
//   conn.close()
// })

// /////////// Update
// Employe.updateOne(
//   { name: "Vikas Bhardwaj" },
//   {
//     $set: {
//       name: "Vikas"
//     }
//   }
// ).then(res => {
//   console.log(res);
//   conn.close()
// });

// ////// DELETE
// Employe.deleteOne({ name: "Vikas Bhardwaj" }, (err, res) => {
//   console.log("Deleted");
//   console.log(res);
//   conn.close()
// });

// We can use conn.close() OR mongoose.disconnect()
```

<!--
- _id ==> ObjectId(4 bytes timestamp, 3 bytes machineid, 2 bytes process id, 3 bytes incrementer)
-->

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

## Data validation using Joi

- Using Joi
  - Installation : `npm i @hapi/joi`
  - Documentation : `https://hapi.dev/family/joi/?v=16.1.8`

```js
// server.js
const Joi = require("@hapi/joi");

let data = {
  name: "Sn",
  email: "abc@gmail.com",
};

const schema = Joi.object({
  name: Joi.string().min(3).max(12).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
});

let { value, error } = schema.validate(data);

console.log(value);
console.log(error);
```

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

## Sending Mail using Nodemailer

- Using nodemailer

```js
// npm i nodemailer
const nodemailer = require("nodemailer");

const SENDER_MAIL = "AAAAAA@gmail.com";
const RECEIVER_MAIL = "BBBBBB@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SENDER_MAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter
  .sendMail({
    from: SENDER_MAIL,
    to: RECEIVER_MAIL,
    subject: "Friday Sale",
    text: "Apple iPhone X 11 pro Sale",
    html: "<h1>Apple iPhone X 11 pro Sale</h1>",
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// //  Setting the ENVIRONMENT VARIABLES
// set EMAIL_PASSWORD=1234
// echo %EMAIL_PASSWORD%
// // getting Environment Variables using nodeJS
process.env.VERIABLE_NAME;
```

<!--
- Sending HTML Mail From an file
- Using SanGrid
-->

### User Verification through Email

- User Identity Verification Need
  - Through Verification we can ensure that the email is valid and that email belongs to that user
- Process of User(user's email) Verification using Email Link
  - We will generate a random string and save that string to the databse with the user model
  - After creating the string we will send a verification email to the user in which we will send him a link(in link there will be user emial and the string)
  - For the link which we have sended to the user we need to make a route for handle that mail click
  - When the user click to the link we have sended in the mail our route will handle it
  - In handling the route
    - we will receive the string through the url parameter and will match that string with the string we have stored in the database for that user
    - if both matches then we will set status verified for that user
- Process of User(user's email) Verification using Email OTP

## Making REST API

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

- HTTP Status Codes

  - Tell the Status of the Response to the client
  - Common Status Terminology
    - 200+ - means the request is Success
    - 300+ - means the request is redirected to another URL
    - 400+ - an error is generated due to Client
    - 500+ - an error is generated due to server

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

## Other Tasks

- NodeJS app deployment - Heroku
- [Express Generator](https://expressjs.com/en/starter/generator.html)
- Socket Programming
- [Debugging Express APP](https://expressjs.com/en/guide/debugging.html)
- Testing(Unit & Integration Testing)
- NodeJS Swagger
- NodeJS logging module
- [NodeScheduler](https://www.npmjs.com/package/node-schedule)
- bad-words
- express-rate-limit

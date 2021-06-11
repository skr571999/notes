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

- https://mongoosejs.com/
- What is ORM
  - ORM is a technique for converting data between incompatible type systems using object-oriented programming languages.
- Mongoose is the Tool that is used to store data to MongoDB using the concept of OOP
  <!-- - Also called ODM(Object Document Mapper) -->
- Populating
  - Populating Inner Documents

### Example Mongodb

```js
// npm i mongodb
const MongoClient = require("mongodb").MongoClient;
const dbURL1 = "mongodb://localhost:27017/test";

(async () => {
  const Client = await MongoClient.connect(dbURL1, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB Connected");

  const Student = await Client.db().collection("students");
  const Result = await Student.find().toArray();

  console.log(Result);
})();
```

### Example Mongoose

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

// Multiple Types
const menuSchema = new mongoose.Schema({
  category: {
    // type: {},
    // OR
    type: mongoose.Schema.Types.Mixed,
  },
});
```

<!--
- _id ==> ObjectId(4 bytes timestamp, 3 bytes machineid, 2 bytes process id, 3 bytes incrementer)
-->

## NodeJS SQL

- https://github.com/skrtry/nodejs_sql_samples
- https://sequelize.org/master/manual/getting-started.html
- https://www.npmjs.com/package/mysql2
- https://www.npmjs.com/package/mysql
- https://www.w3schools.com/nodejs/nodejs_mysql.asp

### Example MySQL

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

// config.js
const mysql = require("mysql");

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

module.exports = { conn };

// index.js
const { conn } = require("./config");

conn.connect((err) => {
  const QUERY = `show tables;`;

  conn.query(QUERY, (err, result) => {
    if (err) throw err;
    console.log(result);
    conn.end();
  });
});
```

---

### Squelize Example

```js
// npm i mysql2 sequelize sqlite3
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });
  console.log(jane.toJSON());
})();
```

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

### To update all the dependencies to the latest version

- https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version

```sh
npm i -g npm-check-updates

ncu -u

npm install
```

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

## TODO

- NodeJS app deployment - Heroku
- Socket Programming
- Testing(Unit & Integration Testing)
- NodeJS Swagger
- NodeJS logging module
- [NodeScheduler](https://www.npmjs.com/package/node-schedule)
- bad-words
- express-rate-limit

## Nvm Installation Ubuntu

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

## Reading Environment Variables from CMD

### Using CMD

```js
const PORT = process.env.PORT;
console.log(`Port : ${PORT}`);

// RUN using the Command: PORT=3000 node server.js
```

### Using Dotenv

- Create a file `.env` in root directory

```sh
# .env
PORT=3000
```

- Install the Dependency `npm i dotenv`

- Configure the App

```js
// index.js
require("dotenv").config();
console.log(process.env.PORT);
```

## Creating the CLI Application

- In `package.json` specify `main` and `bin` property

```json
{
  // ...
  "main": "bin/index.js",
  "bin": "./bin/index.js"
  // ...
}
```

- In `index.js` on first line add `#!/usr/bin/env node`

- Installing globally `npm i -g .`

### References

- https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
- https://www.digitalocean.com/community/tutorials/how-to-build-command-line-applications-with-node-js
- https://blog.bitsrc.io/coloring-your-terminal-using-nodejs-eb647d4af2a2
- https://zellwk.com/blog/publish-to-npm/
- https://zellwk.com/blog/ignoring-files-from-npm-package/
- https://docs.npmjs.com/unpublishing-packages-from-the-registry
- https://docs.npmjs.com/cli/v6/commands/npm-deprecate

## Internalization

- https://www.npmjs.com/package/i18n

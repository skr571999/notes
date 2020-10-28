---
title: Website Development
---

## HTML Introduction

- Hypertext Markup Language
- HTML is used to describe the structure of the web page.
- HTML Document extension (.html)
- HTML is not Case sensitive

## CSS Introduction

- Cascading Stylesheet
- Used to describe the Style for the HTML document
- Ways of adding CSS to HTML page
  - Inline - Style attribute
  - Internal - Style tag
  - External - (.css) file
- Working: Selector --> Property --> Value

## JS Introduction

- It is used to give behavior to the Web page
- Interpreted
- Free <!-- and Open source -->
- Developed By - **Brendan Eich** in `1995`
- Automatic Semicolon Insertion(ASI)
- Dynamic Type - data type of variable can be changed
- Case Sensitive
  <!-- - JavaScript engines uses JIT(Just-In-Time)
    - Run-Time compilations
  - Programming Syntax
    - Scripting
    - Function
    - Object Oriented(Prototype based)
    - Module Based -->
- JS Versions

| Year    |     | Name                 |
| ------- | :-: | -------------------- |
| 1995    |  -  | Creation by Netscape |
| 1997    |  -  | ES1                  |
| 2009-10 |  -  | ES5                  |
| 2015    |  -  | ES6                  |
| 2017    |  -  | ES7                  |
|         |     |                      |

<!-- - **ECMAScript** is the Specification defined by the _ECMA Organization_
  - ECMAScript - European Computer manufactures Association Script
- **JavaScript** is the language that obey ECMAScript specification -->

- Other Applications of JS
  - Browser - Chrome, Opera
  - Server side - NodeJS
  - SPA - ReactJS, Angular
  - Desktop App - ElectronJS
  - Android, iOS App - React Native, Iconic

<!-- - VR, AR(React 360, React VR)
    - ML (Tensorflow.js)
    - IOT
- Where JS Run
  - **Browser** - have JavaScript Engines like, `v8`, `Spider-Monkey`, etc.
  - **NodeJS** - It is a c++ program that includes _Google V8_ engine.
  - _JavaScript Engine_ is a software program that execute JavaScript Code. -->

- Ways of Adding JS to a Web Page
  - Internal
  - External(extension- .js)
- Prompt Boxes(alert, confirm, prompt)
- Comments

```js
// Single Line Comment
/*
  multiple lines
  Comments
*/

// Dynamic Typing
let a; // undefined
a = "Manoj"; // string
a = true; // booleam
a = [1, 2, 3, 4]; // array object
a = { name: "Manoj" }; // object
```

<!--
- We can divide javascript into three parts
  - Core
  - Browser
  - NodeJS
- In Core JS ==> ES5, ES6, above ES6
- In Browser JS ==> we have Browser Object model
  - Location, Window, Navigator, History, Document, Screen
- In NodeJS we have builtin modules and Others

- JavaScript Course :https://course.profitwithjavascript.com/
-->

<!--
console.log(document.body) // will log body as html document
console.dir(document.body) // will log body as JS object
-->

## HTML

- Elements(Tags), Attributes
  - Tags - Opening Tag, Closing tag, Self closing Tags
  - Attributes provide additional information about the HTML element
- Parts of the HTML Page
  - Document Type
  - HEAD - It is used to define the Information about the web Page
  - BODY - It is used to define the Content to be displayed on the Web Page
- HEAD Tag
  - title
- BODY Tags
  - Headings, Paragraphs, Lists, Image, Table, Form
  - Div, Span, id, class
- Comments
- Linking Pages
- Formatting Elements
  - em, strong, i, b, hr, br, sub, sup, u, code, pre, abbr, address
- Media Elements
  - img, audio, video, iframe
- Multimedia and embedding
  - images
  - figure, figcaption
  - video, audio
  - iframe
  - embed, object
  - SVG -
  - adding image using picture and source tag
- Working With Form
  - textarea, input, select, option
  - Input Types
    - Radio
    - Checkbox
    - Datalist Tag
  - form, label, input, textarea, button
  - action, method
  - label: for
  - input: type, name, value, required, readonly, range
  - fieldset, leged
  - select, option
  - input type: radio, checkbox, file: (custom file upload), email, password, number, date
  - button: type
  - textarea: col, row , wrap
- Tables
  - Tages: th, td, tr, thead, tbody, tfoot, colgroup, col, caption
- HTML5 Organization Tags
  - section, article, nav, header, footer, aside, main
- HTML page validation
- Adding Meta Information
  - author, description
- Adding custom icon

## CSS

- Selectors
  - Tag, Class, Id, Multiple
- properties and values
  - color, background-color, width, height, margin, padding, font-family, font-size, font-weight, border, text-align
  - color Values
- width in percentage: responsive design
- Comments
- Advance Selector
  - `ul li`
  - `ul > li`
  - `h1, h2`
  - `input[type=text]`
  - Pseudo Selectors
    - Styling at a particular state of a Element
    - `:hover`
    - `::before`
    - `::selection`
- Properties Categories
  - Styling Text
    - Font formatting
    - Links, List Styling
  - Styling Box
    - Background
    - Border
    - Margin, Padding
    - Height, Width
- Responsive Design
  - View Port
  - Media Queries
  - Flexbox
  - Grid
- CSS Variables
- Transform
- Transition
- Animation

### FlexBox Properties

- Container Properties
  - flex-direction
  - flex-wrap
  - flex-flow - shorthand for flex-direction and flex-wrap
  - justify-content
  - align-items
  - align-content
- Child Element Properties
  - order
  - flex-grow
  - flex-shrink
  - flex-basis - specify the initial width
  - flex - shorthand property for flex-grow, flex-shrink, and flex-basis
  - align-self

### Media Queries

- Media Types
  - all
  - print
  - screen
  - speech

```css
@media screen and (max-width: 600px) {
  body {
    background-color: red;
  }
}
```

- Specifing media for style sheet

```html
<link
  rel="stylesheet"
  media="screen and (min-width: 900px)"
  href="widescreen.css"
/>
```

### CSS Variables

- Are Case Sensitive
- Must be declared in Selector Scope OR for global scope use `:root`
- variable name must start with `--`
- declaration

```css
:root {
  --mycolor: red;
}
```

- Usage

```css
body {
  background-color: var(--mycolor);
}
```

<!--
- Freecode camp (YouTube) - CSS3 30 Days
  - https://www.youtube.com/playlist?list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU
-->

<!--
- Layout
  - float, flex, position, grid, table
- Color Values
  - rgb()
  - rgba(red, green, blue, alpha)
  - HEX value
  - hsl(hue, saturation, lightness)
  - hsl(hue, saturation, lightness, alpha)
- CSS clip-path maker => https://bennettfeely.com/clippy/
-->

## BOM

- Browser Object Model(BOM)(window) is an interface that allow javascript to interact with the browser
- And the DOM(Document Object Model)(window.document) is a property of the window using which we can interact with the HTML Document
- The Browser converts a web page into the tree of node of HTML Elements

  - It Defines an HTML Element as Object which have properties and Methods
  - we can add Events to the HTML Elements
  - So, a HTML Element can have
    - Property
    - Method
    - Event

- Working Process
  - Selection --> Adding Event Listener --> Add Event Action
- Ways of Selecting an Element

  - .querySelector()
  - .querySelectorAll()
  - .getElementById()
  - .getElementByClassName()

- What we can do using JavaScript in HTML Document

  - Modifying the Element content
  - Adding the new Element
  - Removing the Element
  - Modify the Style
  - Modifying the Classlist of an Element
  - Modifying the Attributes of an Element
  - Getting the Form Value
  - Form Validation
  - Browser Storage
    - localstorage
    - sessionstorage
  - AJAX
  - Dropdown
  - Sidebar

<!--
- Window Objects and Properties
- setTimeout()
- clearTimeout()
- setInterval()
- clearInterval()
- print()
- innerHeight, innerWidth, outerHeight, outerWidth
- location.href
  - used to get the current page address and redirect to new page

- Common JavaScript APIs
  - API to manipulate document
  - API to fetch data from the server
  - API for drawing and manipulating graphics
  - Audio and video APIs
  - Device APIs
  - Client side storage APIS
- Third Party APIs
  - Twitter API
  - Google Map API

- Charts
  - https://canvasjs.com
  - https://www.chartjs.org
-->

### Modifying Element Constent

```js
<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>
    <button>Click Me</button>
    <script>
        let a = document.querySelector('h1')
        let btn1 = document.querySelector('button')

        btn1.addEventListener('click', ()=>{
            a.innerHTML = "Hello World"
        })
    </script>
</body>
</html>
```

### Adding the new Element

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <div>
      <h1>Hello</h1>
    </div>
    <button>Click Me</button>
    <script>
      let div1 = document.querySelector("div");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        let p1 = document.createElement("p");
        p1.innerHTML = "This is Added using JavaScript";

        div1.append(p1);
      });
    </script>
  </body>
</html>
```

### Removing the Element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
    <script>
      let h1 = document.querySelector("h1");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        h1.remove();
      });
    </script>
  </body>
</html>
```

### Modify the Style

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
    <script>
      let h1 = document.querySelector("h1");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        h1.style.color = "red";
      });
    </script>
  </body>
</html>
```

### Modifying the Classlist of an Element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      .bgBlue {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
    <script>
      let h1 = document.querySelector("h1");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        h1.classList.toggle("bgBlue");
      });
    </script>
  </body>
</html>
```

### Modifying the Attributes of an Element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      #bgBlue {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
    <script>
      let h1 = document.querySelector("h1");
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        h1.setAttribute("id", "bgBlue");
      });
    </script>
  </body>
</html>
```

### Getting the Form Value

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <form name="registerForm">
      <p>Name : <input type="text" name="name" /></p>
      <p>Email : <input type="email" name="email" /></p>
      <p>Password : <input type="password" name="password" /></p>
      <p><input type="submit" value="Submit" /></p>
    </form>
    <script>
      document.forms[0].addEventListener("submit", e => {
        e.preventDefault();

        console.log(document.forms[0]["name"].value);
        console.log(document.forms[0]["email"].value);
        console.log(document.forms[0]["password"].value);
      });
    </script>

    <h2>Method - 2</h1>
     <form class="myForm">
        <p><input type="text" name="username" placeholder="Username"></p>
        <p><input type="text" name="name" placeholder="Name"></p>
        <p><input type="submit" value="Submit"></p>
    </form>

    <script>
        let myForm = document.querySelector('.myForm')

        myForm.addEventListener('submit', (e)=>{
            e.preventDefault()

            console.log(e.target.username.value)
            console.log(e.target.name.value)

            e.target.username.value = ''
            e.target.name.value = ''
        })
    </script>
  </body>
</html>
```

### Form Validation

- Example 1

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <form action="" name="form1" onsubmit="return validate1()">
      <p>Name<input type="text" name="name" /></p>
      <p><input type="submit" value="Submit" /></p>
    </form>
    <script>
      function validate1() {
        let name = document.forms["form1"]["name"].value;
        if (name === "") {
          alert("Can not be Empty");
          return false;
        }
      }
    </script>
  </body>
</html>
```

- Form validation using builtin required Attribute and adding CSS style on valid and invalid

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      input:valid {
        border: 1px solid green;
      }
      input:invalid {
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <form name="registerForm">
      <p>Name : <input type="text" name="name" required /></p>
      <p>Email : <input type="email" name="email" required /></p>
      <p>Password : <input type="password" name="password" required /></p>
      <p><button type="submit">Submit</button></p>
    </form>
  </body>
</html>
```

- Form Validation Using Regular Expression

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Regex</title>
    <style>
      .input:valid {
        border: 2px solid green;
      }
      .input:invalid {
        border: 2px solid red;
      }
    </style>
  </head>
  <body>
    <form class="form1">
      <p>
        Name :<input
          class="input"
          type="text"
          required
          name="name"
          pattern="[a-zA-Z1-9]{2,10}"
        />
      </p>
      <p>
        Mobile No. :
        <input
          class="input"
          type="text"
          required
          pattern="[1-9]{1}[0-9]{9}"
          name="number"
        />
      </p>
      <p>
        Email 1 :
        <input
          type="text"
          name="email1"
          required
          class="input"
          pattern="[a-z0-9]{1,}[@]{1}"
        />
      </p>
      <p>
        Email :
        <input class="input" type="email" required name="email" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
    <script>
      let name = document.forms[0].name;
      let number = document.forms[0].number;
      let email1 = document.forms[0].email1;
      let email = document.forms[0].email;

      let form1 = document.forms[0];
      form1.addEventListener("input", (e) => {
        e.preventDefault();
        console.log(
          form1.checkValidity(),
          name.checkValidity(),
          number.checkValidity(),
          email1.checkValidity(),
          email.checkValidity()
        );
      });
    </script>
  </body>
</html>
```

### Browser Storage

### AJAX

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <button>Get Data</button>
    <script>
      let btn1 = document.querySelector("button");

      btn1.addEventListener("click", () => {
        let URL = "https://api.github.com";
        fetch(URL)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
      });
    </script>
  </body>
</html>
```

<!--
# AJAX

- API Endpoints
  - https://jsonplaceholder.typicode.com
  - https://reqres.in
  - https://www.openbrewerydb.org/dataset
  - https://httpbin.org/#/Anything/get_anything__anything_ ==> what we send it return the same

## Example

- Using Fetch with Local Server

```js
fetch("./data.json")
  .then(res => {
    return res.json();
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log("Error");
  });
```

- Using XMLHttpRequest

```js
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4)
    console.log("Data ", JSON.parse(xhttp.responseText));
};

xhttp.open("GET", "data.json");
xhttp.send();
```

- Using Async and Await

```js
(async () => {
  let res = await fetch("data.json");
  let result = await res.json();
  console.log(result);

  console.log("ddd");
})();
```

- Using Json Web Server

 https://www.npmjs.com/package/json-server

// npm install -g json-server

// Create db.json

// Start the Json Server
// json-server --watch db.json

// let url = "https://randomuser.me/api/?results=6";

// fetch(url)
//     .then(res => res.json())
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log("Error ", err.name);
//     });

// Example - 2

// let url = "http://localhost:3000/api/users/";

// url = "data.json";

// function fetchData() {
//     return fetch(url).then(res => res.json());
//     // .then(result => {
//     //     console.log(result);
//     // });
// }

// fetchData().then(result=>{
//     console.log(result)
// })

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let data = fetch(url).then(res=>res.json())
//             console.log(data)

//             resolve('data')
//         },3000)
//     })
// }

// fetchData().then(result=>{
//     console.log(result)
// })

// fetch(url).then(res=>{
//     console.log(res.json().then(result=> result).then(r=> console.log(r)))
// })

// function ss(){
//     return new Promise((resolve, reject)=>{
//         resolve([1,2,3,4])
//     })
// }

// ss().then(res=> {
//     console.log(res)
//     return res
// }).then(r=>{
//     console.log(r)
// })

// Example 3 -  Using the JSON web Server
// let url = "http://localhost:3000/users";

// fetch(url, {
//     method: "POST",
//     mode: "cors",
//     credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ id: 12, name: "Anmol", course: "SASS" })
// })
//     .then(res => res.json())
//     .then(result => {
//         console.log(result);
//     });

// POST DATA EXAMPLE

// let url = "http://localhost:3000/api/users";

// fetch(url, {
//     method: "POST",
//     mode: "cors",
//     credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         id: 2,
//         name: "Piyush Sharma",
//         course: "Android"
//     })
// })
//     .then(res => res.json())
//     .then(result => {
//         console.log(result);
//     });

(function() {
    var httpRequest = document
        .getElementById("simple")
        .addEventListener("click", makeRequest);

    function makeRequest() {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "        ");
        oReq.send();
    }

    function reqListener() {
        const text = document.querySelector(".text");
        text.innerHTML = String(this.responseText);
        console.log(typeof this.responseText);
    }
})();

(function() {
    var httpRequest;
    document
        .getElementById("ajaxButton")
        .addEventListener("click", makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert("Giving up :( Cannot create an XMLHTTP instance");
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open("GET", "test.html");
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
            } else {
                alert("There was a problem with the request.");
            }
        }
    }
})();

(function() {
    var httpRequest;
    document
        .getElementById("xmlRequest")
        .addEventListener("click", makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert("Giving up :( Cannot create an XMLHTTP instance");
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open("GET", "test.xml");
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var xmldoc = httpRequest.responseXML;
                var root_node = xmldoc.getElementsByTagName("root").item(0);
                alert(root_node.firstChild.data);
            } else {
                alert("There was a problem with the request.");
            }
        }
    }
})();
-->

```xml
<!-- test.xml -->
<?xml version="1.0" ?>
<root>
    I'm a test.
</root>
```

<!-- ### Projects

- Make a todo manager that will store data in browser storage
- Make a form that have input field for name, email and add button
  - show the added data below the form
- Make a clickable dropdown
- Make a sidebar navigation
- Make a image slideshow
- Make a javaScript digital clock with start and stop button -->

<!--
  - history - contain the browser history
    - back()
    - forward()
  - navigator - contain the information about the browser
    - appName
    - appCodeName
    - platform
    - cookieEnabled
    - product
    - userAgent
  - screen - contain the information about the user screen
    - width
    - height
    - availWidth
  - availHeight

- console
    - log, error, dir, table, warn, clear
```js
// console methods
console.clear(); // clear the console
console.info("This is info");
console.error("This is error");
console.warn("This is warning");
console.debug("This is debugging");
console.table({
  name: "Abc",
  rollno: 111,
  branch: "CSE"
});
console.table([1, 2, 3, 4]);

console.time("1"); // start the time calculation
for (let i = 0; i < 20000000; i++) {
  i + 1;
}
console.timeEnd("1");

console.log("Hello");
console.assert(12 == 13, "Both are not Equal", "hdhh");
console.dir({ a: 122 });
```

## DOM

- DOM properties and Methods
  - .forms
  - .cookie
  - .getElementById()
  - .getElementByClassName()
  - .getElementByName()
  - .querySelector()
  - .querySelectorAll()
  - .write()
  - .writeln()
  - .title
  - .addEventListener()
  - .images
  - .links
  - .head
  - .body

### Element Object

- addEventListener()
- appendChild()
- attributes
- children
- classList
- className
- click()
- firstChild()
- .innerHTML
- .setAttribute()
- .getAttribute()
-->

<!--
// JavaScript how to find intersection, union of two array
function intersection(a, b) {
  return a.filter(val => b.includes(val));
}

let a1 = [1, 2, 3];
let b1 = [2, 3, 4, 5];

console.log(intersection(a1, b1));
console.log(intersection(b1, a1));
function difference(a, b) {
  return a.filter(val => !b.includes(val));
}
console.log(difference(a1, b1));
console.log(difference(b1, a1));
-->

<!--
// Handling Multiple Key Press
// A, S, D
let map = { 65: false, 83: false, 68: false };
document.onkeydown = e => {
  if (e.keyCode in map) {
    map[e.keyCode] = true;
    if (map[65] && map[83] && map[68]) {
      console.log("Hello World");
    }
  }
};
document.onkeyup = e => {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
};
-->

## Pug Introduction

### Installation

```cmd
npm i pug-cli -g
pug --help
intro> pug -w ./ -o ./html -P

// folder
// - intro
//    - html
//    - index.pug
```

### Usage

- directly with node/browser
- using build tool(gulp, webpack)
- express intergation
- Doctypes - `doctype html` -- {html, xml, strict}
- multiple line

```pug
p.
    this is a text
    this is also a text
p.text-center.
    this is a text
    this is also a text
```

### Id and class

```pug
h1#pageTitle
p.big-text
p.text-center.text-primary
```

- Attributes `input(type='text' name='name')`

- Javascript `- var a = 13;`

## SASS Introduction

### Basics

- Installation `npm i sass -g`, `sass --help`
- Output Styles
  - Commpressed
  - Compact
  - Expanded
  - Nested
- Usage

```cmd
// convert the scss file of styles/scss folder to styles/css
sass --watch styles/scss:styles/css
// converting sass <--> scss
sass-convert styles.sass style.scss
sass-convert styles.scss style.sass
```

### Variables

```scss
$primary-color: #00ffff;
body {
  color: $primary-color;
}
```

### Nesting

```scss
body {
  color: grey;
  h1 {
    color: lightgreen;
  }
}
```

### Partials and imports

```scss
// _break.scss
h1 {
  color: red;
}

// main.scss
@import "break" body {
  margin: 0;
}
```

### Mixins

```scss
@mixin transform($property) {
  --web-kit-transform: $property;
  --ms-transform: $property;
  transform: $property;
}

.box {
  @include transform(rotate(30deg));
}
```

### Extend and Inheritance

```scss
%message {
  border: 1px solid red;
  padding: 10px;
}

.message-success {
  @extend %message;
  color: green;
}
```

## jQuery Introduction

- jQuery is a JavaScript Library
- Features of Jquery
  - Easy to Use
  - Cross browser Community
  - Support AJAX
  - Have Plugins
  - Light Weight
- Usage
  - Using CDN - Google CDN Link
  - By Downloading - From [jQuery Website](https://jquery.com/download/)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

### Working

```js
// - Element Selection
$("h1");

// - Adding the Action
$("a").click(function (event) {
  alert("As you can see, the link no longer took you to jquery.com");
  event.preventDefault();
});

// - Launching code on Document Ready
$(document).ready(function () {
  // Your code here.
});

//  Attributes
// As a setter
$("a").attr("href", "about.html");
$("a").attr({
  title: "About Page",
  href: "about.html",
});
// As a getter
$("a");
// ///// Changing the Content
$("div").html("<p>Hello World</p>");
$("div").text("<p>Hello World</p>");
```

```html
<!--  Doing Change On Some Event -->
<p>1</p>
<button>Click to Add 1</button>

<script>
  $("button").click(() => {
    $("p").text(parseInt($("p").text()) + 1);
  });
</script>

<!-- OR -->
<script>
  $("button").on("click", () => {
    $("p").text(parseInt($("p").text()) + 1);
  });
</script>
```

- Example

```js
$("button").on("click", () => {
  $("p").text(parseInt($("p").text()) + 1);
});

$("button").off("click");

$("button").one("click", () => {
  console.log("Clicked Once");
});
```

### Effects

```html
<div>
  <p>Apple</p>
  <p>Microsoft</p>
  <p>Google</p>
  <p>Dell</p>
</div>

<button>Hide Div</button>
<script>
  $("button").click(() => {
    //$('div').toggle()
    //$('div').show(1000)
    //$('div').fadeIn(2000)
    $("div").fadeToggle(2000);
  });

  $("button").dblclick(() => {
    //$('div').hide('slow')
    $("div").fadeOut("slow");
  });
</script>
```

### AJAX Call

```html
<button class="getData">Get Data</button>
<button class="sendData">Send Data</button>

<script>
  $(".getData").click(() => {
    $.get({
      url: "http://localhost:3000/api/users/",
    }).done((res) => {
      console.log(res);
    });
  });

  $(".sendData").click(() => {
    $.post({
      url: "http://localhost:3000/api/users/",
      data: {
        name: "Mradul",
        courses: "Python",
      },
    }).done((res) => {
      console.log(res);
    });
  });
</script>
```

### Cash

- Similar to jQuery

<!-- https://kenwheeler.github.io/cash/ -->

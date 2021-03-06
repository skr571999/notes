---
title: Website Development
---

## Terminology

- Website - Collection of Webpages
- Webpages - a hypertext document(generally contain information) on the World Wide Web
- Hypertext is text which contains links to other texts
- WWW - ?
- Web Development - It is the work involved in developing a website.
- What is the URL
  - http://localhost:3000/login
  - http → Protocol
  - localhost → server address
  - 3000 → Port Number
  - /login → path

## Technologies and Tools

- Frontend Technologies
  - HTML (define structure)
  - CSS (add style)
  - JS (add behavior)
- Tools
  - Browser(Chrome)
  - Text Editor(VSCode)
- Backend Technologies
  - Programming Language (Python, JavaScript)
  - Server (software that handle the Request and Response)
  - DBMS (software to manage data)

## Web development Procedures

- Phase - I - Understanding
  - Taking Requirements
    - Purpose, Goal, Target Audience
  - Analysis, Planning
  - Sitemap, Structure
  - Design
- Phase - II - Development Environment SetUp
  - Setting up Tasks like
    - Transpiling
    - Bundling
    - Minifing
    - Packaging
  - Development
  - Test
  - Deployment
- Phase - III - Maintenance

## Important Links

- [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)
- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)
- [Freecode camp (YouTube) - CSS3 30 Days](https://www.youtube.com/playlist?list=PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU)
- [Namaste 🙏 JavaScript - Akshay Saini](https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)
- [https://roadmap.sh](https://roadmap.sh)
- [https://levelup.gitconnected.com/the-2020-web-developer-roadmap-76503ddfb327#f309](https://levelup.gitconnected.com/the-2020-web-developer-roadmap-76503ddfb327#f309)
- [https://www.theodinproject.com/](https://www.theodinproject.com/)
- [https://www.freecodecamp.org/](https://www.freecodecamp.org/)
- [https://www.khanacademy.org/computing/computer-programming](https://www.khanacademy.org/computing/computer-programming)
- [https://cs50.harvard.edu/college/2021/spring/](https://cs50.harvard.edu/college/2021/spring/)
- [https://www.youtube.com/c/TheCodingTrain/videos](https://www.youtube.com/c/TheCodingTrain/videos)
- [https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFAs)

## Tools

- [https://getbootstrap.com/](https://getbootstrap.com/)
- [CSS clip-path maker](https://bennettfeely.com/clippy/)
- [https://canvasjs.com](https://canvasjs.com)
- [https://www.chartjs.org](https://www.chartjs.org)
- [Cash - Similar to jQuery](https://kenwheeler.github.io/cash/)
- Build Tools
  - Webpack
  - Gulp

---

## Notes

### CSS Media Queries

- Media Types - `all, print, screen, speech`

```css
@media screen and (max-width: 600px) {
  body {
    background-color: red;
  }
}
```

- Specifying media for style sheet

```html
<link
  rel="stylesheet"
  media="screen and (min-width: 900px)"
  href="widescreen.css"
/>
```

### CSS Variables

```css
:root {
  --primary: red;
}
/* Usage */
body {
  background-color: var(--primary);
}
```

### Using JavaScript in Browser

- Adding, Removing, Modifying the Element
- Modify the Style
- Modifying the ClassList of an Element
- Modifying the Attributes of an Element
- Getting the Form Value
- Form Validation
  - Using Regex
- Browser Storage
- AJAX

```txt
API Endpoints
  - https://jsonplaceholder.typicode.com
  - https://api.github.com
  - https://reqres.in
  - https://www.openbrewerydb.org/dataset
  - https://httpbin.org/#/Anything/get_anything__anything_
    - what we send it return the same
```

### Using AJAX

```js
// 1- Using Fetch
fetch("END_POINT")
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("Error");
  });

// 2- Using XMLHttpRequest
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4)
    console.log("Data ", JSON.parse(xhttp.responseText));
};

xhttp.open("GET", "data.json");
xhttp.send();

// 3- Using Async and Await
(async () => {
  let res = await fetch("data.json");
  let result = await res.json();
  console.log(result);

  console.log("ddd");
})();
```

### Using Json Web Server

- [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)
- `npm install -g json-server`
- Create `db.json`
- Start the Json Server
  - `json-server --watch db.json`

### POST Data using Fetch

```js
const BASE_URL = "http://localhost:3000/api/users";

fetch(BASE_URL, {
  method: "POST",
  mode: "cors",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    name: "Ram",
    course: "Android",
  }),
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
```

### JS console methods

```js
console.clear(); // clear the console
console.info("This is info");
console.error("This is error");
console.warn("This is warning");
console.debug("This is debugging");
console.table({
  name: "Abc",
  roll_no: 111,
  branch: "CSE",
});
console.table([1, 2, 3, 4]);

console.time("1"); // start the time calculation
for (let i = 0; i < 20000000; i++) {
  i + 1;
}
console.timeEnd("1");

console.log("Hello");
console.assert(12 == 13, "Both are not Equal", "HELLO");
console.dir({ a: 122 });
```

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

### Handling Multiple Key Press in JS

```js
// A, S, D
let map = { 65: false, 83: false, 68: false };
document.onkeydown = (e) => {
  if (e.keyCode in map) {
    map[e.keyCode] = true;
    if (map[65] && map[83] && map[68]) {
      console.log("Hello World");
    }
  }
};
document.onkeyup = (e) => {
  if (e.keyCode in map) {
    map[e.keyCode] = false;
  }
};
```

### Pug Usage

- [https://pugjs.org/api/getting-started.html](https://pugjs.org/api/getting-started.html)

```sh
# Installation
npm i pug-cli -g

# intro
#  - html
#    - index.pug
cd intro
pug -w ./ -o ./html -P
```

```pug
//- - DocTypes - `doctype html` -- {html, xml, strict}
//- - directly with node/browser
//- - using build tool(gulp, webpack)
//- - express integration

//- - multiple line
p.
    this is a text
    this is also a text
p.text-center.
    this is a text
    this is also a text

//- Id and class
h1#pageTitle
p.big-text
p.text-center.text-primary

//- - Attributes
input(type='text' name='name')

//- - Javascript
- var a = 13;
```

### SASS Usage

- [https://sass-lang.com/guide](https://sass-lang.com/guide)

```sh
# Installation
npm i sass -g
# convert the scss file of styles/scss folder to styles/css
sass --watch styles/scss:styles/css
# converting sass <--> scss
sass-convert styles.sass style.scss
sass-convert styles.scss style.sass
```

```scss
// - Variables
$primary-color: #00ffff;
body {
  color: $primary-color;
}

// - Nesting
body {
  color: grey;
  h1 {
    color: green;
  }
}

// Partials and imports
// _break.scss
h1 {
  color: red;
}
// main.scss
@import "break";

// - Mixin
@mixin transform($property) {
  --web-kit-transform: $property;
  --ms-transform: $property;
  transform: $property;
}
.box {
  @include transform(rotate(30deg));
}

// - Extend and Inheritance
%message {
  border: 1px solid red;
  padding: 10px;
}

.message-success {
  @extend %message;
  color: green;
}
```

### jQuery Usage

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

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
  //  OR

  $("button").on("click", () => {
    $("p").text(parseInt($("p").text()) + 1);
  });

  // Other
  $("button").off("click");

  $("button").one("click", () => {
    console.log("Clicked Once");
  });
</script>
```

```html
<!-- Effects -->
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

```html
<!-- AJAX Call -->
<button class="getData">Get Data</button>
<button class="sendData">Send Data</button>

<script>
  $(".getData").click(() => {
    $.get({
      url: "BASE_URL",
    }).done((res) => {
      console.log(res);
    });
  });

  $(".sendData").click(() => {
    $.post({
      url: "BASE_URL",
      data: {
        name: "Ram",
        courses: "JavaScript",
      },
    }).done((res) => {
      console.log(res);
    });
  });
</script>
```

## Other Notes

### Alert Message Style Using CSS

```css
p {
  color: #bf1650;
}

p::before {
  display: inline;
  content: "⚠ ";
}
```

### Firing a Event

```js
window.dispatchEvent(new Event("resize"));
```

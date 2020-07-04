# Others

## Strict Mode

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.
- Strict mode applies to _entire scripts_ or to _individual functions_. It doesn't apply to block statements enclosed in `{}` braces; attempting to apply it to such contexts does nothing.

- Example

```js
// I . Invoking the Strict Mode

// - Strict mode for Script
// Whole-script strict mode syntax
{
  ("use strict");
  var v = "Hi! I'm a strict mode script!";
}
// - Strict mode for functions
{
  function strict() {
    // Function-level strict mode syntax
    "use strict";
    function nested() {
      return "And so am I!";
    }
    return "Hi!  I'm a strict mode function!  " + nested();
  }
  function notStrict() {
    return "I'm not strict.";
  }
}
// - Strict mode for modules
{
  function strict() {
    // momdules are by default in strict mode
  }
  export default strict;
}
// II- Using the Strict mode
{
  // INCORRECT
  // without Strict mode
  v = "Hi! I'm a strict mode script!"; // No Error

  // With Strict mode
  ("use strict");
  v = "Hi! I'm a strict mode script!"; // Error

  // CORRECT with Strict mode
  ("use strict");
  var v = "Hi! I'm a strict mode script!"; // No Error
}
```

---

## Hoisting

- Hoisting is JavaScript's default behavior of moving declarations to the top of the variable declared using the `var` and `function`

  - Variable Hoisting
  - Function Hoisting

---

## JIT Example

```js
console.log("Hello World");

function aa() {
  return a; // here, a is not defined but no error
}
```

## Asynchronuous Programming

- Asynchronous programming is a means of writing non-blocking code by running a task on a separate thread than the main application thread and notifying the main thread about its progress, completion or failure.

- Ways of Doing
  - Async/Await
  - Call back
  - Promises

---

## Disable Video Download

```html
<video src="./video/video1.mp4" id="video1" controls width="400">
  Not Supported
</video>

<script>
  document.querySelector("#video1").addEventListener("contextmenu", e => {
    e.preventDefault();
  });
</script>
```

---

## Geolocation

```html
<h1>Golocation Demo</h1>
<script>
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log("Latitude: ", position.coords.latitude);
      console.log("Longitude: ", position.coords.longitude);
    });
  }
</script>
```

## Embeding Google Map

## Form Validation

- CSS classes for Validation

  - `:disabled`
  - `:invalid`
  - `:optional`
  - `:required`
  - `:valid`

- Doing Form Validation
  - Using Attributes(required,max,min)
  - Function for Validation
    - checkValidity()
    - setCustomValidity()

## Symbol

```js
let a = Symbol();
let b = Symbol("key 1");

console.log(a.toString());
console.log(b == a);
// Symbols do not auto matic converted to the String

// alert(a) // Error: alert require string
alert(a.toString());

// Hidden properties
let a = {
  a: "AAA"
};

let b = Symbol();
a[b] = "BBB";

a[b] = "CCCC";
// console.log(a[b])

// for(let i in a){
//     console.log(i) // here b is not visible
// }

let a = Symbol.for("a");
let b = Symbol.for("a");
console.log(a === b);
```

## Background Color Changer

```html
<style>
  body {
    margin: 0;
  }
  .box {
    font-family: sans-serif;
    font-size: 4em;
    padding: 5em 0;
    text-align: center;
    color: white;
    height: 25.5vh;
  }
</style>

<div class="box">
  <p>Hello World</p>
</div>

<script>
  let nIntervId = setInterval(() => {
    let a = [];
    let b = [];
    var box = document.querySelector(".box");
    a[0] = Math.random() * 100 + 150;
    a[1] = Math.random() * 100 + 50;
    a[2] = Math.random() * 100 + 150;
    b[0] = Math.random() * 100 + 150;
    b[1] = Math.random() * 100 + 100;
    b[2] = Math.random() * 100 + 150;
    let x = "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")";
    let y = "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")";
    let g = "linear-gradient(" + x + "," + y + " )";
    box.style.background = g;
  }, 1000);
</script>
```

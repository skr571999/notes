---
title: JS Exception Closure
---

## Exception Handling

- Exceptions are Run time Errors. `Error` object is thrown when Exception Occurs.
- When an Exception occur the program, execution stops
- Exception Handling
  - In Exception Handling we use `try-catch-finally` block to handle the exception so that program will not stop unexpectedly.
  - Form of Usage
    - `try-catch`
    - `try-finally`
    - `try-catch-finally`
  - Throwing Exceptions

```js
try {
  // block of code in which error might occur
  console.log(add(1, 2));
} catch (err) {
  // block of code which run when error occur in try block
  console.log("Error Occured");
} finally {
  // block of code that will run no matter error occur or not
  console.log("After Execution");
}

// Throwing Exceptions
try {
  // throw 12
  // throw "My Error"
  throw new Error("Whoops!");
} catch (e) {
  console.error(e.name + ": " + e.message);
}
```

<!-- - Handling a Specific Error

```js
try {
  // body
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.error(e.name + ": " + e.message);
  }
}
``` -->

<!-- - Defining Custom Error Using ES6

```js
class CustomError extends Error {
  constructor(...params) {
    super(...params);

    this.name = "CustomError";
    this.date = new Date();
  }
}

try {
  throw new CustomError("My Custom Error In JavaScript");
} catch (e) {
  console.error(e.name); //CustomError
  console.error(e.message); //bazMessage
}
``` -->

## Closures

```js
// Closures
// lexical scope
// Closure Inside the Function
{
  let f1 = () => {
    let i = 1;
    let j = 2;
    return () => {
      console.log(i);
    };
  };
  console.dir(f1());
}

//   Closure inside the loop
{
  // Example 1 - using the let have the block scope
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
{
  // Example 2 - using the var have the functional scope ,
  // here-i will be 3 becaue the var is functional scope and the loop will iterate
  // to the 3 so as to check the condition of the loop and so we get 3
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
{
  // Example 2 - fixing the functional scope using IIFE
  for (var i = 0; i < 3; i++) {
    ((i) => {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}
```

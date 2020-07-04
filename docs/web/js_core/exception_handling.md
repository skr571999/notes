# Exception Handling

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

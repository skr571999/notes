# Functions

- A Function is a collection of the statements that performs a specific task.
- Parts of Function
  - Declaration
  - Calling

## Types of Functons

- Built in Functions
- User Defined Functions
  - without return value and parameter
  - With Return Value
  - With Parameters
    - Default Parameter
    - Variable Length Parameter(Rest Operator)
  - Higher Order Functions
    - Function that take another function as argument
      <!-- - Types based on how it is defined
        - Named Functions -->
  - Function Expression(Anonymous Function) - Arrow Functions
- Variabels Types
  - Local Variables - variables defined inside the function
  - Global Variables - varaibles exists in the global scope
- Functions inside an Object(methods)

<!--
- Closures
- Imediately Executing Functions
- First Class Function - function treated as variables
-->

## Builtin Function

```js
isNaN(10 / "a");
isFinite("3e999");
eval();
parseInt("123"); // 123
parseInt("101", 2); // 5
parseFloat("123"); // 123
parseFloat("101", 2); // 5
```

## User defined Functions

```js
// without return value and parameter
function printHello(){
  console.log("Hello World")
}
// with parameters
function add(a,b){
  console.log(a + b)
}
// with return value
function f1(){
  return 12
}

// formal parameters(arguments)
function add(a + b){
    return a + b
}
// actual parameters(arguments)
add(12,3)

// Default Argument
function add(a=0, b=0){
  return a + b;
}

// Variable Length Argument
function add(...agrs){
  console.log(args);
}

// Variable Types
let a = 222; // Global Variable
function f4() {
  let a = 123; // local variable
  return a;
}

// Higher Order Function
function find(arr, fn) {
    let new_arr = [];
    for (let i of arr) {
        if (fn(i)) {
            new_arr.push(i);
        }
    }
    return new_arr;
}

function check_even(n) {
    return n % 2 === 0;
}

console.log(find([1, 2, 3, 4, 5], check_even));

// Function expression - function assigned to a variable
// Anonymous Function - function without a name
let add = function(a, b) {
    return a + b;
};

console.log(add(12, 3));

// arrow function
let add = (a, b) => a + b;
console.log(add(12, 3));
```

<!-- ### IIFE
- Self Invoking Function
- Immediately Invoked Function Expression
- Is a JavaScript function that runs as soon as it is defined

```js
(function() {
  console.log("Hele");
})();

console.log(
  (function(a, b) {
    return a + b;
  })(1, 2)
);
``` -->

<!-- ### Constructor Function

- Constructor Function are used to create a object

```js
function Student(name) {
  this.name = name;
  this.detail = function() {
    console.log("Student Detail");
  };
}

const std2 = new Student("Manoj"); // create new object
``` -->

<!-- Function constructor
```js
// Creating a function using the `Function()` constructor
let add = new Function("a", "b", "return a + b;");
add(12, 32);

//  Factory Function
function studentData(name) {
  return {
    name: name,
    detail: function() {
      console.log("Student Detail");
    }
  };
}

const std1 = stucentData("Manoj");
``` -->

## Questions

```js
// Q - Write a function that takes minutes and return seconds
```

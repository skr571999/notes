---
title: JavaScript
---

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
- JavaScript Design Pattern
  - https://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternsjavascript
  - https://github.com/kamranahmedse/design-patterns-for-humans
- https://exploringjs.com/es6/index.html
- https://github.com/dipakkr/ES6-Guide
- ES6 Overview
  - https://ponyfoo.com/articles/es6

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

<!-- //console.log((12, 13)); // Output: 13 because of the , operator -->

## Variable Declaration

- _Variables_ - are used to store the data temporarily by assigning a label in the memory and when we need the value we use that label to get the value.
- Variable declaration is done using `let`, `var`, `const`
- Difference
  - Scope
    - `var` make global scope variable
    - `let` and `const` makes variables in block scope
  - Hoisting
    - `var` declaration is Hoisted
    - `let` and `const` declaration is not hoisted
  - Reassigning
    - `const` variable can not be reassign a value

```js
let a = 12;
a = 13;
const b = 12;
b = 14; // error
const c; // error
const d = [1, 2, 3];
d.push(4); // possible becaue we are not reassigning the value
d = [4, 5, 6, 7]; // error because reassigning the value
```

## Identifiers

- The name given to a variable is called _Identifer_.
- Rules of Identifiers
  - Identifer can contain (A-Z), (a-z), (0-9), (`_`), (`$`)
  - Identifer should not start with a digit
  - Identifer should not be a keyword
  - Identifer are case sensitive
  - Identifiers cannot contain a space or hyphen(-)
  - It is recomended to use the camel case

```js
let abc;
let carBonus; // camel case
let car_bonus; // snake case
```

## Keywords

- Also called Reserved Words

|          |        |         |          |
| :------: | :----: | :-----: | :------: |
|   var    |  let   |  const  |  typeof  |
|    if    |  else  | switch  |   case   |
| default  | break  |   for   |    in    |
|    is    | while  |   do    | continue |
|   try    | catch  | finally |  throw   |
| function | return |  this   |   new    |
|   ...    |        |         |          |
|          |        |         |          |

## Data Types

- Value Types (Primitives)
  - Number, String, Boolean, undefined, null
- Reference Types
  - Array, Object, Regx ...

<!--
- Compare by value
  console.log(1 == 1) // true
  console.log('abc' == 'abc') // true
- compare by reference
  console.log({} == {}) // false
  console.log([] == []) // falsse
-->

## Number

- Syntax

```js
a = 10; // Decimal Form
a = 0b10; // Binary Form
a = 0o7; // Octal Form
a = 0x1a; // Hexadecimal Form
a = 21.5; // Floating Point Form
a = 3.0e6; // exponential (3.0 × 10^6 = 3,000,000)
a = -1.6e-19; // exponential (-1.6 × 10^-5 = 0.00016)
a = Infinity;
a = NaN; // "not a number"

console.log(100 / "Asd"); // return NaN
```

<!--
// Methods
(11).toString(2); //convert to binary
(9.122).toExponential(3);
(9.4555).toFixed(3); // 9.456
(9.4555).toPrecision(3); // 9.46
(12 + 21).valueOf(); -->

## String

- Sring is the Sequence of the Characters

- Syntax
  - Single quotes, Double quotes, Template string
  - Template String is used for multi line string and string interpolation

```js
// a = 'Hello World';
a = "Hello World";

// template string
a = `This is a template string
    this can be used for multi line string
    This is also called template string
`;
a = "Apple";
b = `This is my ${a}.`;

function a() {
  console.log(arguments);
}
a`Hello${1}`;
```

- Properties

  - Indexing
  - Immutable - Not changable
  - `.length`

```js
let a = "Hello World";
a[1]; // e

a[1] = "Z"; // does not do anything

a.length; // return the length of the string
```

- Escaping Characters

  - Escaping characters are the characters in the string with special meaning
  - `\n`, `\t`, `\\`, `\'`, `\"`

- Concatenation

```js
let fName = "Ram";
let lName = "Kumar";

fName + " " + lName; // Ram Kumar
```

- Methods

```js
let a = "aa Hello in the aa";

// .indexOf(searchString) - return the index of the searchString
a.indexOf("aa");
a.indexOf("aa", 10); // start the search form the 10 character)

// /lastIndexOf(searchString) - return the index of the searchString searching from the end
a.lastIndexOf("aa");
a.lastIndexOf("aa", 10);

// .includes(searchString) - return weather searchstring present in the string or not
let a = "abc";
a.includes("a"); // true
a.includes("a", 2); // false - thisstart the search from position 2

// .replace(searchValue, replaceValue) - return a new string replacing searchvalue with replace value
a.replace("aa", "Manoj");

//  Changing the CASE of the string
a.toUpperCase();
a.toLowerCase();

// .split(separator) - divides the string into an array using the separator
let a = "1 2 3 4 5";
a.split(" "); // ["1", "2", "3", "4", "5"]

// .trim() - remove the space from left and right of the string
let a = "       Hello World      ";
a.trim();

// .repeat() - repeat the string
let a = "abc";
a.repeat(2); // abcabc
```

<!--
a =
  "This is first line \
    this is second line \
    this is third line";

String("Ram"); // string value
new String("Ram"); // string object

a.search("in"); // difference in search() and the index()
a.replace(/aa/i, "Manoj"); // case insensitive
a.replace(/aa/g, "Manoj"); // global match

a.trimStart();
a.trimEnd();
a.trimLeft();
a.trimRight();

// LocalCompare
a = "abc";
console.log(a.localeCompare("def")); // -1
// -1 if the reference string is sorted before the compareString

a = "def";
console.log(a.localeCompare("abc")); // 1
// 1 if the reference string is sorted after the compareString

a = "abc";
console.log(a.localeCompare("abc")); // 0
// 0 if the two strings are equal

// toString() - returns the value of a String object
a = "abcd";
console.log(a.toString());

// Concating two or more data types to a new string
a.concat(" ", "This is new");

// Extracting the character
a = "abcdefghij";
a.charAt(0); // return the character
// charCodeAt() is UTF-16, codePointAt() is Unicode
a.charCodeAt(3); // return the code
a.codePointAt(3);
a[2];
a[0] = "S"; // no error but not work

// To get the Substring from the Complete string
a = "abcdef";

// slice(start, end)
console.log(a.slice(5));
console.log(a.slice(-12));
console.log(a.slice(5, 12));
console.log(a.slice(-12, -5));

// substring(start, end)
console.log(a.substring(2, 6));

// substr(from, Count)
console.log(a.substr(3, 10));

// Difference in substring() and slice()
console.log(a.substring(13, 0)); // abcdef
console.log(a.slice(13, 0)); // ''
-->

- Boolean

  - true, flase

- null and undefined
  - When we define a variable but not assign a value it get `undefined` means no value is there
  - `null` is used when we want to explicitly clear the value of a variable

```js
typeof undefined; // undefined
typeof null; // object
```

## Conversions

- Implicit Conversion(Coercion) - conversion done automatically by JS.
- Explicit Conversion(Type Casting) - conversion done by user.

```js
// coercion
console.log("5" - 5); // 0
console.log("5" + 5); // 55
console.log(true + 5); // 6
console.log("1" + 3); // 13
console.log("3" - 1); // 2

// Explicit conversion
Number(true); // 1
Number("10"); // 10
Number("10.33"); // 10.33
Number("John"); // NaN
parseInt("10"); // 10
parseInt("10.33"); // 10
parseFloat("10.33"); // 10.33
(12).toString(); // convert to string
Boolean(12); // convert to boolean value
```

<!--
Number(123); // Number primitive
new Number(123); // Number Object
parseInt("10 20 30"); // 10
parseInt("10 years"); // 10
parseInt("11", 2); // 3
parseFloat("10"); // 10
- Explicit Conversion Using Type Wrappers
- Number(), String(), Boolean(), etc.
-->

## Questions

```js
// Q - Differenc Between Adding JS in head and Body Tag?

// Q - What is the difference between primitives and non primitives datatypes?
// -  Primitives are copied by values, Object are copied by reference
```

<!--
- ARRAY Problem
var arr = [1,2,3]
arr.name = "Ram Kumar"
console.log(arr) // [1, 2, 3, name: "Ram Kumar"]
for(let i in arr){
  console.log(i) // 0,1,2,name
}
for(let i of arr){
  console.log(i) // 1,2,3
}

- Datatype Literal vs Object
let x = "abc"
let y = new String('abc)
let z = new String('abc)
x == y // true because same value
x === y // false because different datatypes
y == z // fasle beacuse compare by reference
y === z // false because compare by reference
-->

## Data Types

### Array

- Collection of the multiple values, objects
- Syntax
- Properties
  - Heterogeneous Collection
  - Indexing
  - Mutable
  - Support multi dimension Array
  - .length

```js
let a = ["apple", "Samsumg", "Lenovo", "Mi", "Oppo"];

a[0]; // return 'apple'
a.length; // 5

// Mutability
a[0] = "Honor"; // replace the value at 0 index

//  Multidimension Array
let a = [
  [2, 3, 4],
  [5, 6],
];
```

- Methods

```js
let a = [1, 2, 3, 4];
// shift() - delete the first array element and return it
a.shift(); // 1

// unshift(elem) - add a element at the starting position
a.unshift(10);

// pop() - delete the first array element and return it
a.pop(); // 4

// push() -  add a element at the end position
a.push(20);

let a = ["Asdf", "Kumar", "Rajput"];
a.toString(); // convert the array to string
a.join(" "); // join the array elements
a.concat(["hello", "new", "Array"]); // return the new array
a.slice(start, end);
a.reverse();
a.indexOf(searchElement, fromIndex);
a.lastIndexOf(searchElement, fromIndex);
```

<!--
typeof a; // object
a = Array(1, 2, 3, 4, 5);
a = new Array(1, 2, 3, 4, 5);
a = new Array(5); // create a array with 5 undefined elements

console.log(a instanceof Array); // true

// splice(start, no. of elem, NEW_ELEM)
let a = [1, 2, 3, 4, 5];
a.splice(1, 1, "Dell");

// forEach()
a.forEach(function(val, index, all) {
  console.log(val, index, all);
});

// Coping an array to another
let a = [1, 2, 3];
let b = [...a]; // spred operator

// Array Destructing
let courses = ["HTML", "CSS", "JS"];
let [c1, c2, c3] = courses;

delete a[0];

a.concat(["hello", "new", "Array"], [12, 13, 14, 14]);
a.sort((a, b) => a < b);

// map, filter , reduce, reduceRight, every, some
a = [1, 2, 3, 4, 5, 6, 7];

b = a.map(function(val, index, arr) {
  return val * 3;
});

b = a.filter(function(val, index, arr) {
  return val > 4;
});

b = a.reduce(function(total, val, index, arr) {
  return total + val;
});

b = a.reduceRight(function(total, val, index, arr) {
  //return total
  return total + val;
});

console.log("Reduce Right: ", b);

// check every element of the array
b = a.every(function(val, index, arr) {
  return val > 10;
});

console.log(b);

// check that a element should satisfy the condition
b = a.some(function(val, index, arr) {
  return val < 6;
});

// find, findIndex
a = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1];
b = a.find(function(val, index, arr) {
  return val > 4;
});

console.log("Find ", b);

b = a.findIndex(function(val, index, arr) {
  return val > 4;
});
console.log("Find Index ", b);
-->

### Object

- Collection of multiple related variables in a single name in the form of key value pair also called properties, methods.
- Syntax
- Properties
  - Nesting Objects
  - Mutable
  - Used defined indexing
    <!-- - Object Wrappers -->
    <!-- // //// Object Literal -->

```js
let std = {
  name: "Piyush",
  age: 20,
  branch: "CSE",
  "course name": "HTML",
};

// Accessing properties
std.name; // using the dot notation
std["name"]; // using the bracket notation
std["course name"];

// change the value of a property
std.name = "Rajneesh";
std["name"] = "Rajneesh";

// add the properties to an existing object
std.course = "JavaScript";
```

<!--
// delete a peoperty from the object
delete std.course; // return true
delete std; // not possible return false
// Checking Properties
let a = {};
a.hasOwnProperty("name");
// ///// Object with Methods
let std = {
  fname: "Asdf",
  lname: "Kumar",
  fullname: function() {
    return this.fname + " " + this.lname;
  }
};
console.log(std.fullname());
-->

## Operators

- Expression - something that give a value
- Types

  - Unary Operator - are the operators that operates on one operand
  - Binary operand - are the operators that operates on two operands

- Arithmetic Opertors

```js
//  +   Addition
//  -   Substraction
//  *   Multiplication
//  /   Division
//  %   Remainder
//  ++  Increment(post, pre)
//  --  Decrement( post, pre)
//  **  Exponential(ES2016)

2 ** 3; // 8
```

- Comparison Operators

```js
//  ==   Equal
//  ===  Strict Equal
//  !=   Not Equal
//  !==  Strict Not Equal
//  >    Greater than
//  >=   Greater than or equal
//  <    Less than
//  <=   Less than or equal
```

- Logical Operators

```js
//  &&  Logicall AND
//  ||  Logicall OR
//  !   Logicall NOT(unary)
```

- Bitwise Operators

```js
//  &    Bitwise AND
//  |    Bitwise OR
//  ^    Bitwise XOR
//  ~    Bitwise NOT
//  <<   Left Shift
//  >>   Sign-propagating right shift
//  >>>  Zero-fill right shift
```

- Assignment Operator

  - Equal Operator (=), which assigns the value of its right operand to its left operand.
  - Compound Assignment Operator
    - `+=`, `-=`, `*=`, `/=`, `%=`, ...

```js
let a = 1;
a += 1; // a = a + 1
```

- Other Operators
  - delete, typeof, instanceof

```js
let a = [1, 2, 3];
delete a[0]; // delete array element 1

typeof a; // object - return the type variable

a instanceof Array; // return true if a's type is Array
```

<!--
void expression;
// - Relational Operators
propNameOrNumber in objectName;
objectName instanceof objectType;
### Operators Precedence
-->

## Questions

```js
// Q - convert temperature
const tempFahren = 100;
const tempCel = ((tempFahren - 32) * 5) / 9;
console.log(tempCel);

// Q - What is the difference between the `==` and `===`?
// - == compare only value
// - === compare value and the type
console.log(12 == '12')   // true
console.log(12 ==== '12') // false
```

## Conditional Statements

- `if-else`
- `else-if`
- `switch`
- Ternary Operator
  - Syntax: `condition ? val1 : val2`

```js
// if-else
let a = 12;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}

// if-else if - else
let a = 12;
let b = 3;
let op = "add";
if (op === "add") {
  console.log(a + b);
} else if (op == "sub") {
  console.log(a - b);
} else {
  console.log("Not Valid Operation");
}

// switch
let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Not Valid");
    break;
}

// Ternary operator
let a = true ? 12 : 13;
console.log(a); // 12
```

## Looping Statements

- `for`, `for-of`, `for-in`
- `while`
- `do-while`

```js
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let a = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// for of loop
for (let i of a) {
  console.log(i);
}

// for in loop
for (let i in a) {
  console.log(i);
}

let obj = {
  name: "Abc",
  rollno: 111,
  branch: "CSE",
};

for (let i in obj) {
  console.log(i, obj[i]);
}

// while
let b = 0;
while (b < 5) {
  console.log(b);
  b++;
}

// do while
let c = 0;
do {
  console.log(c);
  c++;
} while (c < 5);
```

## Transfer Statements

- `break`
- `continue`

```js
for (let i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  console.log(i);
  if (i == 7) {
    break;
  }
}
```

## Questions

```js
// find the factorial of a Number
// find all the even numbers between 0 and 100
// find the even elements of the array
// print the sum of the odd elements of the array
```

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

## Functions

- A Function is a collection of the statements that performs a specific task.
- Parts of Function
  - Declaration
  - Calling

### Types of Functions

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

### Builtin Function

```js
isNaN(10 / "a");
isFinite("3e999");
eval();
parseInt("123"); // 123
parseInt("101", 2); // 5
parseFloat("123"); // 123
parseFloat("101", 2); // 5
```

### User defined Functions

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

### Questions

```js
// Q - Write a function that takes minutes and return seconds
```

## Inheritance

```js
function Item(color, count) {
  this.color = color;
  this.count = count;
  this.log = function () {
    console.log("Color : " + this.color + "\nCount : " + this.count);
    return 0;
  };
}

let item1 = new Item("green", 12);

console.log(item1);

// First Method : Using the Prototypal Inheritance
// SpecialItem.prototype = new Item();
// console.log(SpecialItem);

// Second Method :
function SpecialItem(name, color, count) {
  Item.call(this, color, count);
  this.name = name;
  this.describe = function () {
    console.log("Name : " + this.name);
    console.log(this.log());
    return 0;
  };
}

let specialItem1 = new SpecialItem("FirstItem", "gray", 123);

console.log(specialItem1);
```

## Classes

- Classes is the blueprint of the Objects
- Object is the instance of the class
- Constructor - is a method in the class that is invoked when the object of that class is made using the new Keyword

```js
class Student {
  constructor(name) {
    this.name = name;
  }
}

let s1 = new Student("Mradul");
```

<!--
// //  class Declaration
// class User {}
// // making the object of the class
// let user1 = new User();

// // class with a constructor
// class User {
//   constructor() {
//     console.log("This will be executed when an object is maded");
//   }
// }
// let user1 = new User();

// // class - constructor with the parameter passed
// class User {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
// }

// let user1 = new User(11, "Abc");
// console.log(user1);
// let user2 = new User();
// console.log(user2); // User {id: undefined, name: undefined}

// // methods inside the class
// class User {
//   constructor(id, name) {
//     this.name = name;
//     this.id = id;
//   }
//   getDesc() {
//     console.log(`User ${this.name} have id - ${this.id}`);
//   }
// }

// let user1 = new User(11, "Asdf");
// user1.getDesc();

// // method inside the class with the parameter
// class User {
//   constructor(id, name) {
//     this.name = name;
//     this.id = id;
//   }
//   getDesc() {
//     console.log(`User ${this.name} have id - ${this.id}`);
//   }
//   setname(name) {
//     this.name = name;
//   }
// }
// let user1 = new User(11, "Asdf");
// user1.setname("Ram");
// user1.getDesc();

// // static method
// class User {
//   constructor(id, name) {
//     this.name = name;
//     this.id = id;
//   }
//   static getUserDesc() {
//     return "This is User Class";
//   }

//   static name = "User";
// }

// let u1 = new User("Rajneesh", 1001);
// console.log(User.getUserDesc());
// console.log(User.name);
// console.log(u1);

// // getter and Setter method
// class User {
//   constructor(id, name) {
//     this.name = name;
//     this.id = id;
//   }
//   // get  ake it a property not a method
//   get getName() {
//     return `User name : ${this.name}`;
//   }
//   // set  ake it a property not a method
//   set setname(name) {
//     this.name = name;
//   }
// }

// let u1 = new User(10001, "Mradul");
// console.log(u1.getName);
// u1.setname = "Rajneesh";
// console.log(u1.getName);

// // ACCESSING Static and Instance Members
// class Rectangle {
//   // static member can only be accessed using the class name
//   static a = 1;
//   // instance member accessed using the object name
//   b = 2;
// }
// let rec = new Rectangle();
// console.log(Rectangle.a);
// console.log(rec.a); // undefined
// console.log(rec.b);

// // Calling the Super Class members
// class Rectangle {
//   constructor() {
//     console.log("Rectange");
//   }
// }
// class Square extends Rectangle {
//   constructor() {
//     // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//     // super();
//     console.log("Square");
//     // return {} // when not to call the super class constructor
//   }
// }
// let sq = new Square();

// // class without a constructor
// class A {
//   a = 11;
// }
// let a1 = new A();
// console.log(a1.a);

// // class with a private variable
// class A {
//   #a = 12; // Private field
//   constructor() {
//     console.log(this.#a);
//   }
// }
// let a1 = new A();
// // console.log(a1.#a) // error private field

// /////// INHERITANCE
class Item {
  constructor(color, count) {
    this.color = color;
    this.count = count;
    this.log = function() {
      // console.log('Color : ' + this.color + 'Count : ' + this.count)
      return this;
    };
  }
}

let item1 = new Item("red", 123);
console.log(item1.log());

// Extending the Item class using the extend
class SpecialItem extends Item {
  constructor(name, color, count) {
    super(color, count);
    this.name = name;
    this.describe = function() {
      return this;
    };
  }
}

let specialItem1 = new SpecialItem("VScode", "SkyBlue", 122);
console.log(specialItem1.describe());

// JS class Syntax
// 1 - Class declaration
// 2 - Class expression

// Class Declaration
// Class declaration and expression are not hoisted so we need to declare the class before using it
// In class body the code is executed in strict mode

class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
// if we not pass the paremeter then their default value will be undefined
let car1 = new Car();
console.log(car1);

let car2 = new Car("Tesla", 450000);
console.log(car2);

// Class Expression
// - unnamed class
let Mobile = class {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
};

console.log(Mobile.name);
let mob1 = new Mobile("M 40", 20000);
console.log(mob1);

// Could not possible
// console.log(Laptop());

// - named class
var Laptop = class Laptop1 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
};

console.log(Laptop.name);
let lap1 = new Laptop("Vostro 5568", 60000);
console.log(lap1);
// We canot create a opbejs using the Laptop1
// let lap2 = new Laptop1("iMac X", 100000);

// Constructor
// - it is a special method for creating and initializing an object created
// - there can be only one constructor
// - constructor use super to call the parent class constructor
-->

## Modules

- Module System Should be used with Local Server
- Default Exports
- Importing all the Members

```html
<!-- This need a server to run not directly -->
<script type="module" src="./main.js"></script>
```

```js
// main.js
// Test - 1
import { sum } from "./MyMath.js";
console.log(sum(10, 10));

// test - 2
// We import without curly breces when their is a default export from the another module
import a from "./MyMath.js";

console.log(a);

//  this is used for the node_modules import
// import { name } from "./Sum";

import { name } from "./MyMath.js";

// error because name is const
// name = 'Manoj'
console.log(name);

import { data } from "./MyMath.js";

console.log(data);
console.log(data.course);

// Importing all the members
import * as aa from "./MyMath.js";

console.log(aa.sub(12, 2));
```

```js
// MyMath.js
// Keywords used - export, default, import, as, from
// Test - 1
export const sum = function (a, b) {
  return a + b;
};

// Test - 2
let a = 12;
export default a;
// default can be declared only once
// export default 123;

export const name = "Rajneesh";

export const data = {
  name: "Mradul",
  course: "Python",
};

function sub(a, b) {
  return a - b;
}

export { sub };
```

## Promises

```js
let a = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Success!");
  }, 1000);
});

a.then((successMessage) => {
  console.log("Yay! " + successMessage);
});
```

## Getters and Setters

```js
class Student {
  constructor(name) {
    this.name = name;
  }
  get age() {
    return this.age;
  }
  set age(age) {
    this.age = age;
  }
}

let s1 = new Student("Chetan");
s1.age = 12;
s1.age;
```

## Async and Await

```js
let URL = "https://rajretrofit.herokuapp.com/api/get/";

function getValue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "Samsung" });
    }, 2000);
  });
}

// getValue()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

async function getValueAsync() {
  let data = await getValue();

  console.log(11111);
  console.log(data);
  let data1 = await getValue();
  console.log(data1);
}

getValueAsync();

async function getDataAsync() {
  const res = await fetch(URL);
  const result = await res.json();

  console.log("Hello");
  return result;
}

// getDataAsync()
// .then(res =>{
//     console.log(res)
// }).catch(err =>{
//     console.log(err)
// })

function getData() {
  fetch(URL)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("Error", err.name);
    });
}

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var add = async function (x) {
  // async function expression assigned to a variable
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

// add(10).then(v => {
//   console.log(v);  // prints 60 after 4 seconds.
// });

(async function (x) {
  // async function expression used as an IIFE
  var p_a = resolveAfter2Seconds(20);
  var p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
})(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
```

<!--
// // -------------- Difference Between Promises and Async and Await
// const A = () => {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       resolve("Apple");
//     }, 2000);
//   });
// };

// let start = new Date().getTime();
// A().then(result => {
//   let end = new Date().getTime();
//   console.log(result);
//   console.log("1: ", end - start);
// });

// A().then(result => {
//   let end = new Date().getTime();
//   console.log(result);
//   console.log("2: ", end - start);
// });

// (async () => {
//     let start = new Date().getTime()
//     const a1 = await A();
//     console.log(a1);

//     const a2 = await A();
//     console.log(a2);
//     let end = new Date().getTime()

//     console.log(end - start)
// })();

// console.log("Hello")
-->

<!--
// ---------- an async function return the promise
// ---------- code after async function is not blocking
// ---------- code inside async function with await is blocking
(async () => {

})().then(() => {
  console.log("Task Completed");
});

-->

## Generators

```js
function* f1() {
  // yield 1
  // yield 3

  yield* ["a", "b", "c"];
}
let a = f1();
console.log(a.next());
console.log(a.next());
console.log(a.next());
```

## Other

- Template String
- Destructing Objects

```js
const std = {
  name: "Piyush",
  rollno: 111,
  course: "Python",
};

const { name, course } = std;
console.log(name, course);

// Renaming the variables
const { name: n, course: c } = std;
console.log(n, c);

// destructing the nested objects
let std = {
  name: "Asdf",
  course: {
    web: ["HTML", "CSS", "JS"],
    android: ["Java", "Android"],
  },
};

const {
  course: { web: courses },
} = std;

// ARRAY Destructing
let [x, y, z] = [1, 2, 3, 4, 5];
console.log(x, y, z);

// Swaping the Values
let a = 12;
let b = 21;

[a, b] = [b, a];
console.log(a, b);

// Using the destruction to pass the arguments to a function
function detail({ name }) {
  console.log(name);
}
detail(std);
```

- Consise object Literal

```js
let name = "Manoj";
let a = {
  name: name,
};
let b = { name }; // both a and b result the same Output
```

- Consise Function Method Declaration

```js
let a = {
  name: "Mradul",
  getDetail() {
    return "Hello World";
  },
};
```

<!--
// template string, destructing objects and Array
{
  const std = {
    name: "Piyush",
    rollno: 111,
    course: "Python"
  };

  // destructing objects
  const { name, course } = std;
  // template string
  console.log(`${name} your course is ${course}`);

  // assigning different name
  const { name: n1, course: c1 } = std;
  console.log(n1, c1);

  // destructing array
  const brands = ["Samsung", "Apple", "Google", "Microsoft"];

  const [b1, b2, b3] = brands;

  console.log(b1, b2, b3);
}

// object literal
{
  const user = "Piyush Sharma";
  const course = "Computer Science";
  const rollno = 1001;

  const user1 = {
    user,
    course,
    rollno
  };

  console.log(user1);
}

// for of loop
{
  const brands = ["Samsung", "Apple", "Google", "Microsoft"];

  for (const brand of brands) {
    console.log(brand);
  }
}

// spread operator
{
  const brands = ["Samsung", "Apple", "Google", "Microsoft"];
  console.log(...brands);

  const b2 = [...brands];
  console.log(b2);

  const std = {
    name: "Piyush",
    rollno: 111,
    course: "Python"
  };

  // not possible
  // console.log(...std)  // Error
}

// rest operator
{
  function add(...nums) {
    //console.log(nums) // [1, 2, 3, 4, 5]

    return nums.reduce(function(x, y) {
      return x + y;
    });
  }

  console.log(add(1, 2, 3, 4, 5));
}

// string padStart()
{
  let name = "Mradul";
  console.log(name.padStart(10, "a"));

  name = "Mradul Kumar";
  console.log(name.padStart(10, "a"));

  name = "Mradul";
  console.log(name.padEnd(10, "a"));

  name = "Mradul Kumar";
  console.log(name.padEnd(10, "a"));
  console.log(name.padEnd(10, "a").length);
}
-->

- Map, Set

```js
// SET
// sets are iterable like arrays
// sets only contain the unique values
// sets have the key and the value but both are same
const myset = new Set([1, 2, 3, "Piyush", 4, 4, 3, 2, 2, 1]);
console.log(myset);

console.log(myset.entries());
console.log(myset.keys());
console.log(myset.values());

console.log(myset.has(1));
console.log(myset.has(11));

console.log(myset.size);
console.log(myset.delete(1)); // delete the item 1

myset.forEach((val, val2, s) => {
  //console.log(val, val2, s)
});

myset.clear();

// converting a set to the array
const brands = new Set(["Samsung", "Apple", "Google", "Microsoft"]);
console.log(brands);
// method 1
let mybrands = new Array(...brands);
// method 2
mybrands = [...brands];
console.log(mybrands);
```

```js
// MAP
let a = "Mradul Kumar";
let b = "Piyush Sharma";
let c = "Rajneesh Kumar";

// store the data in the key: value format but it is iterable different from normal object
let std = new Map();

std.set("a", a);
std.set("b", b);
std.set("c", c);

console.log(std);
console.log(typeof std); // object
// console.log(std.entries());
console.log(std.keys());
console.log(std.values().next().value);
console.log(std.size); // give the size of the map

for (let i of std) {
  console.log(i);
}

console.log(std.get("a")); // return the value at the key 'a'

//   for (let [i, j] of std.entries()) {
//     //console.log(i, j);
//   }

//   for (let i of std.values()) {
//     //console.log(i)
//   }

std.delete("a"); // delete the entry with the key 'a'
console.log(std);

//   std.forEach((val, key, std) => {
//     //console.log(val, key,std)
//   });

//   std.clear(); // clear the complete map
//console.log(std)

a = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
];

std = new Map(a);
console.log(std);
```

<!--
- Wesbos - JavaScript 30 ==> https://www.youtube.com/watch?v=VuN8qwZoego&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH
- Book JavaScript deign pattern ==> https://addyosmani.com/resources/essentialjsdesignpatterns/book/
-->

<!--
- Building a JS Development Environment
  - Starter Kit
  - Setup Git
  - Choose Package Manager ==> npm, jspm, bower
  - Setup Editor
  - Development Server ==> webpack, browsersync, gulp, live-server
    - Sharing Work progress ==> localtunel, ngrok, surge, now
  - Automation using Build System
    - Gulp
    - Webpack
  - Transpiling ==> babel, typescript
  - Bundling ==> Webpack
  - Linting
  - Testing ==> mocha, Jasmine, Jest
  - Continous Integration ==> travis CI, Jenkins
-->

## Variables Scope

```js
// Example 1
// Variables declared in the global scope
let a = 11;
var b = 22;
c = 33;

console.log(a); // 11
console.log(b); // 22
console.log(c); // 33

console.log(window.a); // undefined
console.log(window.b); // 22
console.log(window.c); // 33

// variablels declared inside the block scope
{
  let d = 44;
  var e = 55;
  f = 66;
}

// console.log(d) // error
console.log(e);
console.log(window.e);
console.log(f);
console.log(window.f);

var k;

// variables declared inside the function scope
function g() {
  let h = 77;
  var i = 88;
  window.j = 99;
  k = 111;
  l = 222;
}
g();
// console.log(h) // error
// console.log(i) // error
console.log(window.j); // after function call
console.log(k);
console.log(l);

// Example 2 - Nested Scope
let mobile = "Samsung";

if (true) {
  let mobile = "Apple";
  if (true) {
    let mobile = "Oppo";
    if (true) {
      let mobile = "Vivo";

      console.log("Inner : ", mobile); // vivo
      // here vivo because JS first search in its scope and if he found then print else if it will go to the outer scope and try to find there of found print else more outer block
      // what will happen of we remove the let from beginning of the mobile and also comment all the other mobile of the outside?
    }
  }
}

if (true) {
  console.log("Outer : ", mobile);
}
```

## Prototype

```js
function Item() {
  this.color = "red";
  this.count = 12;
  this.log = function () {
    console.log("Color : " + this.color + "\nCount : " + this.count);
  };
}

let i1 = new Item();
console.log(i1);
i1.height = 122; // height will be added to i1 only

Item.apple = 111; // apple will be added to Item only not to i1 and i2
Item.prototype.banana = 222; // banana will be added to i2 and i1

let i2 = new Item();
console.log(i2);
```

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

## Asynchronous Programming

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
  document.querySelector("#video1").addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
</script>
```

---

## Geo Location

```html
<h1>Golocation Demo</h1>
<script>
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude: ", position.coords.latitude);
      console.log("Longitude: ", position.coords.longitude);
    });
  }
</script>
```

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
  a: "AAA",
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

## Regular Expression

Regular Expression are used to perform pattern matching and search-and-replace functions on text

### Syntax

- `/pattern/modifers;`

- Exmpale:

```js
let a = /abc/i;
```

here,

|        |     |                          |
| ------ | :-: | ------------------------ |
| /abc/i |  :  | is the reguar expression |
| abc    |  :  | is the pattern           |
| i      |  :  | is the modifer           |

### Regex Methods

- exec()
- test()
- toString()

### String Methods

- match()
- search()
- matchAll()

### **Modifers**

are used to perform the case insentive and global match

|     |     |                                  |
| --- | :-: | -------------------------------- |
| g   |  :  | perform the global match         |
| i   |  :  | perform the case-insentive match |
| m   |  :  | perform the multiline match      |

### **Brackets**

are used to find a range of the character

|          |     |                                               |
| -------- | :-: | --------------------------------------------- | ----------------------------- |
| `[abc]`  |  :  | find any character in the bracket             |
| `[^abc]` |  :  | find any character not in the bracket         |
| `[0-9]`  |  :  | find any digit here, any digit between 0 to 9 |
| `(x      | y)` | :                                             | find any one of the specified |
|          |     |                                               |

### **Meta characters**

- these are the characters with a special meaning

|      |     |                                                           |
| ---- | :-: | --------------------------------------------------------- |
| `.`  |  :  | matches any single character except the newline character |
| `\w` |  :  | find a word character                                     |
| `\W` |  :  | find a non-word character                                 |
| `\d` |  :  | find a digit                                              |
| `\D` |  :  | find a non digit                                          |
| `\s` |  :  | find a White space Characrer                              |
| `\S` |  :  | find a White non-space Characrer                          |
| `\b` |  :  | find a match at the beginning/end                         |
| `\B` |  :  | find the match but should not at the start or end         |

### **Quantifiers**

|      |     |                                                    |
| ---- | :-: | -------------------------------------------------- |
| `a+` |  :  | matches string having at least one occurence of a  |
| `a*` |  :  | matches string having zero or more occurence of ad |
| `a?` |  :  |                                                    |

### Example

```js
// Email verification
let rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
```

## Object

- Using the `Object()` Constructor

```js
let std = new Object();
std.name = "Manoj";
std.course = "CSE";
std.log = function () {
  console.log(`Hello, ${this.name}`);
};
console.log(std.log());

Object(12); // Number() object
Object("Ram"); // String() object
Object(true); // Boolean() object
Object({ name: "Ram" }); // Object() object
```

- Object Creation using the Constructor Function

- `Object.freeze()`

```js
const math = {
  PI: 3.14,
};

math.PI = 99;
Object.freeze(math);
("use strict");
math.PI = 99; // Error
```

## Using Math

```js
a = 3.14;
console.log(Math.floor(a)); // 3 - to min
console.log(Math.ceil(a)); // 4 - to max

// Random number
let upper = 6;
let lower = 1;
let radNum = Math.ceil(Math.random() * (upper - lower + 1)) + lower;
console.log("Random num : ", radNum);

// Generate a random number between a range
Math.floor(Math.random() * (maxNo - minNo + 1)) + minNo;
```

---

## Using JSON

JavaScript Object Notation

```js
const a = {
  id: 11,
  name: "Abc",
  branch: "CSE",
};

// Javascript Value to the JSON string
const b = JSON.stringify(a);
// String to the JavaScript object
JSON.parse(b);

JSON.stringify(a, null, "-");
JSON.stringify(a, null, 4");
```

## Object Demos

```js
// object literal
{
  let std = {
    name: "Piyush",
    rollno: 1001,
    desc: function () {
      //console.log(`Piyush ${name} Rollno: ${this.rollno} `);
      console.log(`${this.name} Rollno: ${this.rollno} `);
    },
  };
  std.desc();
}

// Factory Function
{
  function student(name, rollno) {
    return {
      name: name,
      rollno: rollno,
      desc: function () {
        console.log(`${name} Rollno: ${this.rollno} `);
      },
    };
  }

  let std1 = student("Mradul", 1002);
  let std2 = student("Rajneesh", 1002);

  std1.desc();
  std2.desc();
  std1.desc();
}

// Constructor Function
{
  function Student(name, rollno) {
    console.log(this);
    this.name = name;
    this.rollno = rollno;
    this.desc = function () {
      console.log(`${this.name} Rollno: ${this.rollno} `);
    };
  }

  let std1 = new Student("Manoj", 1003); // here this refer to the Student and the function returns the this ie the address of the object
  std1.desc();

  let std2 = Student("Chetan", 1004); // here this refer to the Window
  std1.desc();

  console.log(name); // Chetan  because we make the object without the use of the new
  // objects constructors, String(), Boolean(), Number()

  // {} is similar to new Object()

  // all objects have the property constructor
  let a = 12;
  console.log(a.constructor); // ƒ Number() { [native code] }
}
// we also have the Function() constructor that make the object of the function
{
  function hello() {
    console.log("Hello");
  }

  console.log(hello.constructor); // ƒ Function() { [native code] }

  function Student(name, rollno) {
    this.name = name;
    this.rollno = rollno;
    this.desc = function () {
      console.log(`${this.name} Rollno: ${this.rollno} `);
    };
  }

  // TODO: how to pass two arguments
  let c1 = new Function(
    "name",
    `this.name = name;
           this.desc = function(){
             console.log(${this.name});
          }`
  );

  let c2 = new c1("Mradul");
  console.log(c2);
}

// how the function call the object
{
  function Student(name, rollno) {
    this.name = name;
    this.rollno = rollno;
    this.desc = function () {
      console.log(`${this.name} Rollno: ${this.rollno} `);
    };
  }

  let bb = Student.call({}, "BBB", 222); // this is similar to Student("BBB", 222)
  let cc = Student.apply({}, ["CCC", 333]); // this is similar to new Student("CCC", 333)
  console.log(bb); // undefined why?
  console.log(cc); // undefined why?
}

{
  let a = new Function("n", "this.n =n");
  console.log(a.constructor); // ƒ Function() { [native code] } why this not object
}

// primitive values and the Reference types
{
  let a, b;
  a = 12;
  b = a;
  console.log(a);
  console.log(b);

  a = 14; // only the value of the a is changed not of the b because it is a value not the object
  console.log(a);
  console.log(b);

  /*a = new Number(12)
        b = a

        console.log(a)
        console.log(b)

        a = new Number(14) // here we are assigning new object to the a not to the b
        console.log(a)
        console.log(b)*/

  a = { value: 10 };
  b = a;

  a.value = 13; // here for both the a and b the value will be changed

  console.log(a);
  console.log(b);
}

// adding new properties to the object and deleting the properties of the object
{
  function Student(name, rollno) {
    this.name = name;
    this.rollno = rollno;
    this.desc = function () {
      console.log(`${this.name} Rollno: ${this.rollno} `);
    };
  }
  let std = new Student("Rajneesh", 1001);
  console.log(std);

  std.course = "CSE";
  console.log(std);
  // when to use the bracket notation for accessing the properties
  const propName = "std courses";
  std[propName] = { 1: "HTML", 2: "CSS" };

  console.log(std);

  delete std[propName];

  console.log(std);

  // getting the keys of the object
  let keys = Object.keys(std);
  console.log(keys);
}

// abstraction
{
  function Student(name, rollno) {
    this.name = name;
    this.rollno = rollno;

    let courses = ["HTML", "CSS"];
    this.getCourses = function () {
      return courses;
    };

    Object.defineProperty(this, "courses", {
      get: function () {
        return courses;
      },
      set: function (newcourses) {
        courses = newcourses;
      },
    });
  }

  let std = new Student("Mradul", 1001);

  console.log(std.getCourses());
  console.log(std.courses);

  std.courses = ["Python", "Django"];
  console.log(std.courses);
}
```

## Object Methods

```js
// Object.freeze()
function Student() {
  this.name = "Ram Kumar";
}

let s1 = new Student();

Object.freeze(s1); // prevent the Addition of any property to s1

s1.class = "CSE";
console.log(s1);

Object.freeze(Student); // prevent the addition of any property to the Student
Student.apple = "Google";

let s2 = { name: "Google" };

Object.defineProperty(s2, "class", {
  writable: false,
  value: "CSE",
});

// // Returns the names of the own properties of an object. The own properties of an object are those that are defined directly on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
// console.log(Object.getOwnPropertyNames(s2))

// // Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
// console.log(Object.getOwnPropertyDescriptor(s2, 'name'))

// // Returns an object containing all own property descriptors of an object
// console.log(Object.getOwnPropertyDescriptors(s2))

// // Returns the names of the enumerable string properties and methods of an object.
// console.log(Object.keys(s2))

// // Returns a value that indicates whether new properties can be added to an object.
// console.log(Object.isExtensible(s2.name))

// // Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
// console.log(Object.isFrozen(s1))

// // Returns true if the values are the same value, false otherwise.
// Object.is(ob1, ob2)

//----------- Second way of defining the Attributes on the property ----------------
// function Item(color, count) {
//     this.color = color;
//     this.count = count;
//     Object.defineProperty(this, "size",
//         { value: 7, writable: true, enumerable: false, configurable: "true" });
// }

// Creating the Copy of the Object
let a = { name: "Mohit" };
let c = { branch: "CSE" };

let b = Object.assign({}, a, c);
let d = { ...b };

a.name = "Ram";

console.log(a);
console.log(b);
console.log(d);
```

## Other Notes

### Having a Submit Button Outside of the Form

```html
<form id="entityForm" onSubmit="{handleSubmit}">
  <!-- Form Elements -->
</form>
<button type="submit" form="entityForm">Next</button>
```

### Getting the Key using Value of a Object

```js
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
```

### Code for Checking Audio Permissions are Given Or Not

```js
let stream;
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((e) => {
    stream = e;
  })
  .catch((error) => console.log(error));

stream.getAudioTracks()[0].stop();
```

### Async and Defer

```html
<script async defer scr="main.js"></script>
<!-- async - script will be downloaded in parallel with page -->
<!-- defer - script will run after page load  -->
```

### Blur and focus

```js
window.addEventListener("blur", () => console.log("Blur"));
window.addEventListener("focus", () => console.log("Focus"));
```

### Using Object Destructuring and Property Shorthand

```js
const object = { a: 5, b: 6, c: 7 };
const picked = (({ a, c }) => ({ a, c }))(object);

console.log(picked); // { a: 5, c: 7 }
```

### Random

```js
"3".padEnd(3, "1") ==> 311
"3".padStart(3, "1") ==> 113
// data:text/plain,Hello, world!

//  Adding image using blob JavaScript
data = [some elements]
b = new Blob([new Uint8Array(data).buffer], {type : 'image/png'});
imgElm.src = URL.createObjectURL(b)

[-2, 2, 5, -7].sort()

// JavaScript Buffer
console.log(Buffer.from("Hello World").toString('base64'));
// SGVsbG8gV29ybGQ=
console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))
// Hello World
```

## References

- http://eloquentjavascript.net/
- http://exploringjs.com/
- https://regex101.com/

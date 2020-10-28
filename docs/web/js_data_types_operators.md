---
title: JS Data Types Operators
---

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

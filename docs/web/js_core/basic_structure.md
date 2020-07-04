# JS Basic Structure

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
let  a = 12
a = 13
const b = 12
b = 14 // error
const c; // error
const d = [1,2,3]
d.push(4) // possible becaue we are not reassigning the value
d = [4,5,6,7] // error because reassigning the value
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

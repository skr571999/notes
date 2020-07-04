# Object

- Using the `Object()` Constructor

```js
let std = new Object();
std.name = "Manoj";
std.course = "CSE";
std.log = function() {
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
  PI: 3.14
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
let a, b, c;
a = {
  id: 11,
  name: "Abc",
  branch: "CSE"
};

console.log(a);
// Javascript Value to the JSON string
b = JSON.stringify(a);
console.log(b);

// Json String to the JavaScript object
c = JSON.parse(b);
console.log(c);

a = [1, 2, 3, 4];
console.log(JSON.stringify(a));

a = "hello JavaScript";
console.log(JSON.stringify(a));
```

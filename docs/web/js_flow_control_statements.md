---
title: JS Flow Control Statements
---

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

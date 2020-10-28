---
title: JS Scope Prototype
---

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

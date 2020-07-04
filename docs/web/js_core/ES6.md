# ES6

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
export const sum = function(a, b) {
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
  course: "Python"
};

function sub(a, b) {
  return a - b;
}

export { sub };
```

## Promises

```js
let a = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Success!");
  }, 1000);
});

a.then(successMessage => {
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
    .then(res => res.json())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log("Error", err.name);
    });
}

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var add = async function(x) {
  // async function expression assigned to a variable
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

// add(10).then(v => {
//   console.log(v);  // prints 60 after 4 seconds.
// });

(async function(x) {
  // async function expression used as an IIFE
  var p_a = resolveAfter2Seconds(20);
  var p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
})(10).then(v => {
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
  course: "Python"
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
    android: ["Java", "Android"]
  }
};

const {
  course: { web: courses }
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
  name: name
};
let b = { name }; // both a and b result the same Output
```

- Consise Function Method Declaration

```js
let a = {
  name: "Mradul",
  getDetail() {
    return "Hello World";
  }
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
  ["three", 3]
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

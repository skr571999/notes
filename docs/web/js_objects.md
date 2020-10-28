---
title: JS Objects
---

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
let a, b, c;
a = {
  id: 11,
  name: "Abc",
  branch: "CSE",
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

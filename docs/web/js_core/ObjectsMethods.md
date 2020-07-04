# Object Methods

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
  value: "CSE"
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

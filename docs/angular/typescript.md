# Typescript

- It is a stronly typed, object oriented, compiled language
- It is a superset of the JavaScript
- i.e. Any valid JavaScript code is valid in TypeScript.
- Has more Features than JavaScript
- It is transpiled to the JavaScript
- variables declarations
- varaibales Types
  - boolean, number, string, undefined , null, any, unknown

> NOTE: type checking in editor and intelligance

![JS vs TS](js_vs_ts.png)

## Installation

```cmd
npm i -g typescript
tsc -v
```

## Running

```js
tsc hello.ts // Create a hello.js file
tsc hello --watch // watch for the changes in the hello.ts file and recomile to hello.js if the changes occur
```

## Examples

- null and undefined can be assigned to any of the type

```ts
let a: boolean = null;
```

- Array Declaration

```ts
let a: number[] = [1, 2, 3, 4];
let a: Array<number> = [1, 2, 3, 4];
let a: [number, string] = [12, "1"];
```

- Enum Declaration

```ts
enum a {
  Apple,
  Microsoft
}
console.log(a.Apple); // 0
enum a {
  Apple = 5,
  Microsoft
}

console.log(a.Apple); // 5
```

### Type Declarations

```ts
// any, number, string, boolean
// Multiple type declaration
let a: number | boolean;
a = true;
a = 12;
```

### Function Decalration

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}
add(12, 1);

// optional parameter
function sub(n1: number, n2?: number): number {
  return n1 - n2;
}
sub(12, 12);

// default parameter
function mul(n1: number, n2: number = 1): number {
  return n1 * n2;
}
mul(12, 12);
```

### Interfaces

```ts
interface Student {
  name: string;
  course?: string; // Optional Parameter
}

function Detail(std: Student) {
  console.log(std);
}

Detail({ name: "Ram" });
```

### Class and Access Modifers

```ts
class Employee {
  name: string;

  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

let e1 = new Employee("Ram");
e1.sayHello();

console.log(e1.name); // because name is public
// Inheritance

class Manager extends Employee {
  constructor(name) {
    super(name);
  }
}

// Access modifers
// - public - accessable inside and outside of the class
// - private - only inside the class
// - protected - only accessable inside the class and the child class
```

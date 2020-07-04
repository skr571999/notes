# 10 Days of JavaScript

```js
// DAY - 3 ==> Try, Catch, Finally
function reverseString(s) {
  try {
    console.log(
      s
        .split("")
        .reverse()
        .join("")
    );
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

// DAY - 3 ==> Throw
function isPositive(a) {
  if (a > 0) return "YES";
  else if (a == 0) throw Error("Zero Error");
  else throw Error("Negative Error");
}

// try {
//   console.log(isPositive(-12));
// } catch (e) {
//   console.log(e.message);
// }

// DAY - 4 ==> Create a Rectangle Object
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (this.length + this.width);
  this.area = this.length * this.width;
}

// const rec = new Rectangle(4, 5);

// console.log(rec.length);
// console.log(rec.width);
// console.log(rec.perimeter);
// console.log(rec.area);

// DAY - 4 ==> Count Objects
function getCount(objects) {
  let count = 0;
  for (let i of objects) {
    if (i.x === i.y) {
      count++;
    }
  }
  return count;
}

// DAY - 5 ==> Classes
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

// TEST CASES
// const rectangle = new Polygon([10, 20, 10, 20]);
// const square = new Polygon([10, 10, 10, 10]);
// const pentagon = new Polygon([10, 20, 30, 40, 43]);

// console.log(rectangle.perimeter());
// console.log(square.perimeter());
// console.log(pentagon.perimeter());

// DAY - 5 ==> Template Literals

function sides(literals, ...expressions) {
  console.log(literals);
  console.log(expressions);

  return [1, 2];
}

function main() {
  let s1 = 10;
  let s2 = 14;

  [s1, s2] = [s1, s2].sort();

  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 *
    (s1 + s2)}.`;

  console.log(s1 === x ? s1 : -1);
  console.log(s2 === y ? s2 : -1);
}

main();
```

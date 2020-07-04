# Questions

```js
// // Q - Find the even elements from the array
// let a = [1, 2, 3, 4];
// function find_even(arr) {
//     let new_arr = [];
//     for (let i of arr) {
//         if (i % 2 === 0) {
//             new_arr.push(i);
//         }
//     }
//     return new_arr;
// }
// console.log(find_even(a));
// console.log(a.filter((val, index, arr) => val % 2 == 0));

// // Q - write a function that return true if all the element of the array are even
// let a = [1, 2, 3, 4];
// function check_even(arr) {
//     for (let i of arr) {
//         if (i % 2 !== 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(check_even(a));
// let result = a.every((val, index, arr) => val % 2 === 0);
// console.log(result);

// // Q - write a function that increase the array element by 2
// let a = [1, 2, 3, 4];
// function incr2(arr) {
//     let new_arr = [];
//     for (let i of arr) {
//         new_arr.push(i + 2);
//     }
//     return new_arr;
// }

// console.log(incr2(a));
// console.log(a.map((val, index, arr) => val + 2));

// // Q - Write a function that check all the array elements are Even if all are even return true else return Flase?
// let a = [12, 3, 4, 6, undefined];

// function checkAllEven(arr) {
//     return arr.every(x => (x ? x % 2 === 0 : false));
// }
// console.log(checkAllEven(a));

// // Q - Write a  function to fund the Factorial of a Number
// function factorial(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// console.log(factorial(4));

// // Q - Print the area and parameter of the Circle
// let r = 12.2;
// const PI = Math.PI;
// console.log(PI * r * r);
// console.log(2 * PI * r);

// // Q - Print the Grade According to the Marks
// function getGrade(score) {
//     let grade;
//     if (25 < score && score <= 30) {
//         grade = "A";
//     } else if (20 < score && score <= 25) {
//         grade = "B";
//     } else if (15 < score && score <= 20) {
//         grade = "C";
//     } else if (10 < score && score <= 15) {
//         grade = "D";
//     } else if (5 < score && score <= 10) {
//         grade = "E";
//     } else if (0 < score && score <= 5) {
//         grade = "F";
//     }
//     return grade;
// }

// console.log(getGrade(11));

// // Q -
// function getLetter(s) {
//     switch (true) {
//         case "aeiou".includes(s[0]):
//             return "A";
//         case "bcdfg".includes(s[0]):
//             return "B";
//             break;
//         case "hjklm".includes(s[0]):
//             return "C";
//             break;
//         case "npqrstvwxyz".includes(s[0]):
//             return "D";
//     }
// }
// console.log(getLetter("adfgt"));

// // Q - print the vowels and then constants from the given string
// function vowelsAndConsonants(s) {
//     let vowels = "aeiou";
//     for (let v of s) {
//         if (vowels.includes(v)) console.log(v);
//     }
//     for (let v of s) {
//         if (!vowels.includes(v)) console.log(v);
//     }
// }

// vowelsAndConsonants("javascriptloops");

// // Q - fund the second largest number
// function getSecondLargest(nums) {
//     let first = nums[0];
//     let second = -1;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > first) {
//             second = first;
//             first = nums[i];
//         }
//         if (nums[i] > second && nums[i] < first) {
//             second = nums[i];
//         }
//     }
//     return second;
// }

// console.log(getSecondLargest([2, 3, 6, 6, 5]));
```

- Arrow Function

```js
// Q - What will be the Output?
let a = () => ({ a: 12 });
console.log(a());
// {a:12}

let a = () => {
  a: 12;
};
console.log(a());
// undefined

// Q - What will be the  Output
const Student = {
  name: "Mohit",
  myDesc: () => {
    //return `${this.name}`;
    return `${Student.name}`; // here this referes to the window object
  },
  // using the normal function syntax
  myDesc2: function() {
    // here this refers to the current object
    return `${this.name}`;
  }
};

console.log(Student.myDesc());
console.log(Student.myDesc2());
```

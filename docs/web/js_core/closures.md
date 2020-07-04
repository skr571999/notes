# Closures

```js
// Closures
// lexical scope
// Closure Inside the Function
{
  let f1 = () => {
    let i = 1;
    let j = 2;
    return () => {
      console.log(i);
    };
  };
  console.dir(f1());
}

//   Closure inside the loop
{
  // Example 1 - using the let have the block scope
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
{
  // Example 2 - using the var have the functional scope ,
  // here-i will be 3 becaue the var is functional scope and the loop will iterate
  // to the 3 so as to check the condition of the loop and so we get 3
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
{
  // Example 2 - fixing the functional scope using IIFE
  for (var i = 0; i < 3; i++) {
    (i => {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}
```

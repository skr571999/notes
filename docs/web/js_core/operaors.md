# Operators

- Expression - something that give a value
- Types

  - Unary Operator - are the operators that operates on one operand
  - Binary operand - are the operators that operates on two operands

- Arithmetic Opertors

```js
//  +   Addition
//  -   Substraction
//  *   Multiplication
//  /   Division
//  %   Remainder
//  ++  Increment(post, pre)
//  --  Decrement( post, pre)
//  **  Exponential(ES2016)

2 ** 3; // 8
```

- Comparison Operators

```js
//  ==   Equal
//  ===  Strict Equal
//  !=   Not Equal
//  !==  Strict Not Equal
//  >    Greater than
//  >=   Greater than or equal
//  <    Less than
//  <=   Less than or equal
```

- Logical Operators

```js
//  &&  Logicall AND
//  ||  Logicall OR
//  !   Logicall NOT(unary)
```

- Bitwise Operators

```js
//  &    Bitwise AND
//  |    Bitwise OR
//  ^    Bitwise XOR
//  ~    Bitwise NOT
//  <<   Left Shift
//  >>   Sign-propagating right shift
//  >>>  Zero-fill right shift
```

- Assignment Operator

  - Equal Operator (=), which assigns the value of its right operand to its left operand.
  - Compound Assignment Operator
    - `+=`, `-=`, `*=`, `/=`, `%=`, ...

```js
let a = 1;
a += 1; // a = a + 1
```

- Other Operators
  - delete, typeof, instanceof

```js
let a = [1, 2, 3];
delete a[0]; // delete array element 1

typeof a; // object - return the type variable

a instanceof Array; // return true if a's type is Array
```

<!--
void expression;
// - Relational Operators
propNameOrNumber in objectName;
objectName instanceof objectType;
### Operators Precedence
-->

## Questions

```js
// Q - convert temperature
const tempFahren = 100;
const tempCel = ((tempFahren - 32) * 5) / 9;
console.log(tempCel);

// Q - What is the difference between the `==` and `===`?
// - == compare only value
// - === compare value and the type
console.log(12 == '12')   // true
console.log(12 ==== '12') // false
```

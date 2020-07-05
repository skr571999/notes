# Control Statements

## Conditional Statements

### if statement

- Syntax

  ```cpp
  if(EXPRESSION){
    // Body
  }
  ```

- Example

  ```cpp
  if(10 > 5){
    printf("10 is greater than 5")
  }
  ```

### if...else Statement

### if...else Ladder

### Nested if...else

### Without brackets

```cpp
// both are same
if(10 > 5)
  printf("Hello World");

if(10 > 5){
  printf("Hello World");
}
```

## Switch Statement

- Syntax

  ```cpp
  switch(expression){
    case constant1:
      // statements
      break;
    case constant2:
      // statements
      break;

    default:
      // default statements
  }
  ```

- Example

  ```cpp
  int n = 3;
  switch (n) {
    case 1:
      printf("Monday");
      printf(", Monday");
      break;

    case 2:
      printf("Tuesday");
      break;

    case 3:
      printf("Wednesday");
      break;

    default:
      printf("Not in the Option");
    }
  ```

## Goto statemenet

- Syntax

  ```cpp
  goto label1;

  label1:
    // statements
  ```

- Example:

  ```cpp
  #include <stdio.h>
  int main() {
    goto label1;

    printf("A");

    label1:
    printf("B");
  }
  // OP: B
  ```

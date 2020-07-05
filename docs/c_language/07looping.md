# Looping Statemnets

## `for` loop

- Syntax

  ```cpp
  for(initilization; condition; increment/decrement){
    // body
  }
  ```

- Example

  ```cpp
  for(int i = 0; i < 5 ; i++){
    printf("%d ", i);
  }
  ```

  - To print the sum of n natural numbers

    ```cpp
    #include <stdio.h>
    int main()
    {
        int n = 10;
        int sum = 0;
        for (int i = 1; i <= n; i++)
        {
            sum += i;
        }
        printf("%d", sum);
    }
    ```

## `while` loop

- Syntax

  ```cpp
  while(condition){
    // body
  }
  ```

- Example

  ```cpp
  int i = 0;
    while (i < 5){
      printf("%d ", i);
      i++;
    }
  ```

## do...while loop

- Syntax

  ```cpp
  do{
    // body
  }
  while(condition);
  ```

- Example

  ```cpp
  do{
    print("Hello World");
  }
  while(10 < 5); // condition is false still the statement print for one time
  ```

## `break` and `continue`

- Example `break`

  ```cpp
  for (int i = 0; i < 10; i++) {
    if (i==5){
      break;
    }
    printf("%d ", i);
  }
  // OP: 0 1 2 3 4
  ```

- Example `continue`

  ```cpp
  for (int i = 0; i < 10; i++) {
    if (i==5){
      continue;
    }
    printf("%d ", i);
  }
  // OP: 0 1 2 3 4 6 7 8 9
  ```

## Examples

- Resource
  - [https://www.programiz.com/c-programming/c-decision-making-loops-examples](https://www.programiz.com/c-programming/c-decision-making-loops-examples)

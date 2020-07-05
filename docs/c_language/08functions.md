# Functions

## Types of the Function

- Standard Library(built-in) Functions
- User defined Functions

## Built in Functions

```cpp
// stdio.h functions
printf()
scanf()
// math.h functions
sqrt()
```

Reference: [https://www.programiz.com/c-programming/library-function](https://www.programiz.com/c-programming/library-function)

## User defined Functions

- Advantages

  - The program will be easier to understand, maintain and debug.
  - Reusable codes that can be used in other programs
  - A large program can be divided into smaller modules. Hence, a large project can be divided among many programmers.

- Syntax
  - Function declaration
  - Function defination
  - Function Calling

```cpp
#include <stdio.h>
// function defination
int f1() {
    printf("Hello f1");
    return 0;
}

int main() {
    // function calling
    f1();
}

```

```cpp
#include <stdio.h>
// function declaration
int f1();

int main() {
    // function calling
    f1();
}
// function defination
int f1() {
    printf("Hello f1");
    return 0;
}
```

- Types of User defined Function

  - No Arguments passed and no return
  - No arguments passed but a return value
  - Argument passed but no return value
  - Argument passed and a return value

- Example

```cpp
#include <stdio.h>
int add(int a, int b) {
  return a + b;
}

int main() {
  printf("1 + 2 : %d", add(1,2));
}
```

## Recursion Function

- Recursion is slower so insted use the loop
- Sum of n numbers using recursion

```cpp
#include <stdio.h>
int sum(int n) {
  if (n != 0) {
    return n + sum(n - 1);
  } else {
    n;
  }
}

int main() {
  printf("%d", sum(10));
}
```

## Types of Variables

- Local
- Global(external)

```cpp
#include <stdio.h>

int b; // global variables

int sum(int n) {
	int a;
	// a and n are local variables
}
```

- `static`: The value of a static variable persists until the end of the program.

```cpp
#include <stdio.h>

int f1() {
  static int a = 1;
  a += 5;
  printf("%d ", a);
}

void main() {
  f1(); // 6
  f1(); // 11
}
```

- `register*`

## Function Examples

- Resource
  - [https://www.programiz.com/c-programming/c-functions-examples](https://www.programiz.com/c-programming/c-functions-examples)

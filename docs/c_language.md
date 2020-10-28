---
title: C Language
---

## Introduction

- Importance of the C
- C is Fast
- We can interact with machine code
- Where c is Used
  - Linux
  - MySQL
  - CPython
  - PERL
  - OS
  - Ruby
  - C is used in development of Apache and NGINX
  - Used in Making the Game

### What is programming language

- It is a medium to intercact with the computer
- Developed by Dennis Ritchie

### Steps to convert a `c` file to `exe`

- **Preprocessing** - in this step all the comments are removed and the content of all the includes files is included and macros are expanded and saved into the `.i` file
- **Compilation** - in this step the `.i` file is converted into the Assembly level instructions and then saved to the `.s` file
- **Assembling** - in this step the Assembly level code of the `.s` file is converted into the machine level code and saved to the `'o` file
- **Linking** - in this step all the `.o` file are combined to a `.exe` file
  - Types
    - Static
    - Dynamic - Example: `.dll` file
- **Loading** - Loading of the program in RAM while we run it

#### Command To see the Complete Steps

- `gcc -Wall -save-temps test.c`
- This command will generate four files
  - a.exe - the executable file
  - test.i -
  - test.o
  - test.s

### Structure of the c program

- Every c program is made up of token. Token are keywords, functions, identifer, literals, constants, symbols.
- We Can have spaces and next line between our tokens

- **Keywords** - are reserved words in c language we have 32 keywords

|          |        |          |          |
| -------- | ------ | -------- | -------- |
| auto     | double | int      | struct   |
| break    | else   | long     | switch   |
| case     | enum   | register | typedef  |
| char     | extern | return   | union    |
| const    | float  | short    | unsigned |
| continue | for    | signed   | void     |
| default  | goto   | sizeof   | volatile |
| do       | if     | static   | while    |
|          |        |          |          |

- **Identifers** - these are the names of the variables, cnstants and functions

## Development Environment Setup

- Editor
  - [Code Block](http://www.codeblocks.org/downloads)
  - [VSCode](https://code.visualstudio.com)
    - [Usage docs - CPP](https://code.visualstudio.com/docs/cpp/config-mingw)

### Usage

- Compiling the C Program

  - `gcc test.c`
  - `gcc test.c -o test`

- Compiling the C++ program
  - `g++ test.cpp`
  - `g++ test.cpp -o test`

## Variables and Data types

- **Variable** - it is a name given to a memory location that store the data

  - Declaring a variable - reserving the memory of the data
    - `VARIABLE_TYPE VARIABLE_NAME;`
    - `int a;`
  - Declaring multiple variable at the same time
    - `int a, b, c;`
  - Initialized and Declaration
    - `int a = 12;`

- **Rules of the Variables**

  - Case Sensitive
  - Can contain alphabets, digits and Underscore `_`
  - can only starts with an alphabet and underscore
  - can't starts with a digit
  - No whitespace & resesved words is alloted
  - Valid Example

    ```c
    int ram;
    float score;
    char grade;
    ```

  - Invalid Example

    ```c
    int $ram;
    float 12score;
    char long;
    ```

- **Data Types**
  - Basic Data types - int, char, float, double
  - Derived Data types
    - are the data types for making them we require basic data types
    - array, pointer, structure, union
  - Enumeration Data type: enum
  - Void Data type: void
- Size of the Data types based on 32-bit Architecture
- `1 byte` = `8 bits`

  ![Data type Size 32-bit](./../images/datatype-size-32bit.png)

- Format Specifers

  ![Format Specifer](../images/datatype-formatspecifer.png)

- [https://www.geeksforgeeks.org/format-specifiers-in-c/](https://www.geeksforgeeks.org/format-specifiers-in-c/)

### Basics Operators and Functions

- Operators: `+`, `-`, `*`, `/`
- Functions

  - `printf()`
  - `scanf()` - to take the user Input

    - Exmaple

      ```c
      int a;
      scanf("%d", &a);
      ```

  - `sizeof()`

### Keywords

|          |        |          |          |
| -------- | ------ | -------- | -------- |
| auto     | double | int      | struct   |
| break    | else   | long     | switch   |
| case     | enum   | register | typedef  |
| char     | extern | return   | union    |
| continue | for    | signed   | void     |
| do       | if     | static   | while    |
| default  | goto   | sizeof   | volatile |
| const    | float  | short    | unsigned |
|          |        |          |          |

### Literals

- Intergers

  ```c
  int a = 12; // decimal
  int a = 077; // octal
  int a = 0x2a; // hexadecimal
  int a = 0X2a;
  int a = 0b11; // Binary
  int a = 0b11;
  ```

- Floating-Point

  ```c
  float a = 2.0
  float a = 2E3 // exponential form
  float a = 2e3
  ```

- Characters

  ```c
  char a = 'a';
  char a = '}';
  ```

- **Escape Sequences**

|      |                       |
| ---- | --------------------- |
| `\b` | Backspace             |
| `\f` | Form feed             |
| `\n` | Newline               |
| `\r` | Return                |
| `\t` | Horizontal tab        |
| `\v` | Vertical tab          |
| `\\` | Backslash             |
| `\'` | Single quotation mark |
| `\"` | Double quotation mark |
| `\?` | Question mark         |
| `\0` | Null character        |
|      |                       |

- String

  ```c
  "Hello World"
  ```

- Constants

  ```c
  const int PI = 3.14
  ```

### Convert a char to int(ASCII value)

```c
char a = 'A';
printf("%d", a);
```

### Convert a int to char

```c
int a = 65;
printf("%c", a);
```

### Taking User Input

- One Input

  ```c
  int a;
  scanf("%d", &a);
  ```

- Multiple Input

  ```c
  int a;
  float b;
  scanf("%d%f", &a, &b);
  printf("%d  %f", a, b);
  ```

## Operators

- Arithmetic Operators

```c
+, -, *, /, %
```

- Increment and Decrement

```c
++a, a++, --a, --a
```

```c
int a = 12;
printf("%d", a++); // 12
printf("%d", a); // 13
```

- Assignment

```c
=, +=, -=, *=, /=, %=
```

- Relational

```c
==, >, <, <=, >=, !=
```

- Logical

```c
&&, ||, !
```

- Bitwise

|     |                      |
| --- | -------------------- |
| &   | Bitwise AND          |
|     | Bitwise OR           |
| ^   | Bitwise exclusive OR |
| ~   | Bitwise complement   |
| <<  | Shift left           |
| >>  | Shift right          |
|     |                      |

## Example Programs

### Add to numbers taking from user input

```c
#include <stdio.h>

int main()
{
    int a, b;
    printf("Enter a value: ");
    scanf("%d", &a);
    printf("Enter b value: ");
    scanf("%d", &b);
    printf("Sum of a and b : %d", (a + b));
    return 0;
}
```

### Multiply two floating numbers

```c
#include <stdio.h>

int main()
{
    float a, b;
    printf("Enter two numbers: ");
    scanf("%f", &a);
    scanf("%f", &b);
    printf("Product : %f", (a * b));
    printf("\nProduct : %.2f", (a * b)); // upto two decimal place
    return 0;
}
```

### Program to find the ASCII value of the Character Entered by the User

### Program to find quotient and remainder of Two Integers

### Get the size of the datatype using the c program

```c
#include <stdio.h>
int main()
{
  printf("%ld\n", sizeof(int));
  printf("%ld\n", sizeof(float));
  printf("%ld\n", sizeof(double));
  printf("%ld\n", sizeof(char));
  return 0;
}
```

### Working of the `long`

```c
#include <stdio.h>
int main()
{
    int a;
    long b;
    long long c;
    double d;
    long double e;
    printf("%ld\n", sizeof(a));
    printf("%ld\n", sizeof(b));
    printf("%ld\n", sizeof(c));
    printf("%ld\n", sizeof(d));
    printf("%ld\n", sizeof(e));
    return 0;
}
```

### Swap the two variables value

```c
#include <stdio.h>
int main()
{
    int a = 2;
    int b = 3;
    int temp;
    printf("BEFORE: a : %d b : %d", a, b);
    temp = a;
    a = b;
    b = temp;
    printf("\nAFTER: a : %d b : %d", a, b);
    return 0;
}
```

## Control Statements

### Conditional Statements

#### if statement

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

#### if...else Statement

#### if...else Ladder

#### Nested if...else

#### Without brackets

```cpp
// both are same
if(10 > 5)
  printf("Hello World");

if(10 > 5){
  printf("Hello World");
}
```

### Switch Statement

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

### Goto Statement

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

## Looping Statements

### `for` loop

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

### `while` loop

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

### do...while loop

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

### `break` and `continue`

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

### Examples

- Resource
  - [https://www.programiz.com/c-programming/c-decision-making-loops-examples](https://www.programiz.com/c-programming/c-decision-making-loops-examples)

## Functions

### Types of the Function

- Standard Library(built-in) Functions
- User defined Functions

### Built in Functions

```cpp
// stdio.h functions
printf()
scanf()
// math.h functions
sqrt()
```

Reference: [https://www.programiz.com/c-programming/library-function](https://www.programiz.com/c-programming/library-function)

### User defined Functions

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

### Recursion Function

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

### Types of Variables

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

### Function Examples

- Resource
  - [https://www.programiz.com/c-programming/c-functions-examples](https://www.programiz.com/c-programming/c-functions-examples)

## Array

An array is a variable that can store multiple values.

### 1-D Array

- Decalration

```cpp
// syntax
datatype arrayName[arraySize];
// example
int arr[10];
```

- Array Initialization

```cpp
int arr[5] = {1, 2, 3, 4, 5};
int arr[] = {1, 2, 3, 4, 5};
```

- Accessing the elements of the array
- Changing the value of the array elements
- Example

```cpp
#include <stdio.h>

void main() {
    int arr[5];

    printf("Enter 5 elemnts: ");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
}
```

- Default value assigned to the array elements
- accessing array element out of the size

```cpp
int arr[5] = {1,2,3,4,5};
printf("%d", arr[10]); // a random value is given
```

- Character array

```cpp
#include <stdio.h>
int main(){
  char str[] = "Hello World";
  printf("%20s\n", str);
  printf("%-20s\n", str);
  printf("%20.5s\n", str);
  printf("%-20.5s\n", str);
  return 0;
}
```

### Multi-D Array

- Declaring array

```cpp
int a[3][3]; // 2 D array
int a[3][3][3]; // 3 D array
```

- Initialization

```cpp
int a[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
int a[3][3][3] = {
    {{1, 2, 3}, {22, 33, 44}, {44, 44, 55}},
    {{1, 2, 3}, {22, 33, 44}, {44, 44, 55}},
    {{1, 2, 3}, {22, 33, 44}, {44, 44, 55}},
  };
```

### Function and array

- Passing the array to the function
- Getting the length of the array
- Resource: [https://www.programiz.com/c-programming/c-arrays-functions](https://www.programiz.com/c-programming/c-arrays-functions)

## Pointers

### Address

If we have a variable `var`, then `&var` will give the address of that variable.

```cpp
int a = 10;
printf("%d\n", a);
printf("Address %p", &a);
```

### Pointer Variables

These are the variables that are used store the address not the value.

- Syntax

```cpp
int* p;
int * p;
int *p;
int* a, b; // here a is pointer and b is normal variable
```

- Assigning address to the Pointer

```cpp
int* pc, c;
c = 5;
pc = &c; // 5 is assigned to the c variable. And, the address of c is assigned to the pc pointer
```

- Getting the value of the pointer

```cpp
#include <stdio.h>

void main() {
    int *a, b;
    b = 4;
    a = &b;

    printf("%d\n", a);   // int value address stored in the pointer a
    printf("%p\n", a);   // hex value of the address stored in pointer a
    printf("%d\n", *a);  // value stored at the address stored in the pointer a
    printf("%d\n", &a);  // address of the pointer a
}
```

- Chnaging the value of the address stored in the Pointer

```cpp
#include <stdio.h>

void main() {
  int *a, b;
  b = 4;
  a = &b;
  *a = 12;

  printf("%d\n", *a);
}
```

### Pointer and Array

### Pointer and Functions

### Memory Allocation

### Array and Pointer Examples

- Resourse: [https://www.programiz.com/c-programming/c-pointer-examples](https://www.programiz.com/c-programming/c-pointer-examples)

<!-- // malloc()
// realloc()
// free() -->

## Strings

A string is a sequence of characters terminated with a null character \0.

- Example

```cpp
char a[5]; // string declaration

char str[] = "Hello World";

char c[] = "abcd";
char c[50] = "abcd";
char c[] = {'a', 'b', 'c', 'd', '\0'};
char c[5] = {'a', 'b', 'c', 'd', '\0'};
```

- Reading a string from the user

```cpp
char name[20];
scanf("%s", name);
printf("%s", name);
```

- Reading a line of the String

```cpp
char name[20];
fgets(name, sizeof(name), stdin);
puts(name);
```

### String and function

- Passing string to the function

```cpp
#include <stdio.h>

void display(char str[]){
  printf("%s", str);
}

void main() {
  char name[20] = "Hello";

  display(name);
}
```

### String and Pointers

### String Functions

```cpp
// string.h
strlen() // computes string's length
strcpy() // copies a string to another
strcat() // concatenates(joins) two strings
strcmp() // compares two strings
strlwr() // converts string to lowercase
strupr() // converts string to uppercase
```

### String Examples

- Resource: [https://www.programiz.com/c-programming/c-string-examples](https://www.programiz.com/c-programming/c-string-examples)

## Structures

A structure(struct) is a collection of the variables(can be of the Different types) under a single name.

- Syntax

```cpp
struct structureName{
  dataType member1;
  dataType member2;
}
```

- Example

```cpp
struct Student{
  char name[25];
  int rollno;
  int cityNo;
}
```

- Creating a structure variable
- Access member of a structure
- Nested Structure

### Structure and Pointer

### Structure and Functions

## Unions

- Syntax
- Access members of a union
- Difference between Struct and Union

## Files Handling

A file is a container in computer storage devices used for storing data.

- Types of Files

  - Text Files
  - Binary Files

- File Operations
  - Create a new File
  - Opening Existing File
  - Closing a File
  - Reading from and writing information to a file

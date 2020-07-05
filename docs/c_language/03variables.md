# Variables and Data types

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

## Basics Operators and Functions

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

## Keywords

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

## Literals

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

## Convert a char to int(ASCII value)

```c
char a = 'A';
printf("%d", a);
```

## Convert a int to char

```c
int a = 65;
printf("%c", a);
```

## Taking User Input

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

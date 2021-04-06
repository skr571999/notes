# Java Tutorial - by Mosh

## Tools Installation

- JDK
- IDE
  - IntelliJ
  - Netbeans
  - Eclipse

## Antonomy

- Functions
- main function
- Class
  - Contain the related functions
- Method
- Access Modifiers
- Naming Convention
  - PascalNamingConvention - Classes
  - camelNamingConvention - Methods
- Comments

## How Java Program gets Executed

- Steps in running a Java Program
  - Compilation and Execution
- Compilation
  - Source code(.java) ==> Java Compiler ==> Byte Code (.class)
- Java Runtime Environment
  - It has java virtual machine
  - it does the Execution
  - Byte Code(.class) ==> Java Virtual Machine ==> Native code(for windows or Mac or linux)

```cmd
javac Main.java # complication
java Main # Execution
```

## 5 Interesting Facts about Java

- Java was developed by James Gosling in 1995 in Sum Micro System which later acquired by Oracle 2010 originally called Oak and after that named to Green and them to Java from Coffee
- Java Editions
  - SE - Standard Edition
  - EE - Enterprise Edition
  - ME - Micro Edition
  - Java Card

## Course Overview

- Part 1 - Fundamentals(Beginner)
  - Types System
  - Control Flow Statements
  - Clean coding
  - Finding and fixing Errors
  - Packaging your Application
- Part 2 - OOPs(Intermediate)
- Part 3 - Core Java APIs(Advanced)
- Part 4 - Advanced Features(Mastery)

## Part 1 - Fundamentals - Type System

- Variables and constants
- Primitives and reference types
- Casting
- Numbers, Strings and Arrays
- Read Input

### Variables

Are used to temporarily store data in computer memory

- Identifers
- Data Types
- Assignment Operator

```java
int age = 20;
age = 23;

int age = 20, temperature = 30;
```

### Types in Java

- Primitives - for storing simple values
- Reference types - for storing complex objects

- Primitives Types

| Types   | Bytes | Range       |
| ------- | ----- | ----------- |
| byte    | 1     | [-128, 127] |
| short   | 2     | [-32K, 32K] |
| int     | 4     | [-2B, 2B]   |
| long    | 8     |             |
| float   | 4     |             |
| double  | 8     |             |
| char    | 2     | A,B,c       |
| boolean | 1     | true/false  |

```java
byte age = 23;
int viewsCount = 23_222_432;
long viewsCount = 3_253_222_432L;
long viewsCount = 3_253_222_432l;
float price = 12.44F;
float price = 12.44f;
double price = 123.444;
char letter = 'A';
boolean isEligiable = false;
```

- Reference types

```java
Date now = new Date()
now.getTime()
```

- Difference between primitive and reference types in memory management
  - In primitives types the value is stored in a variable while in reference type the memory address of the Object is stored

```java
byte x = 12;
byte y = x;
// here both x and y hold different values which are independent of each other

import java.awt.*;

Point point1 = new Point(1, 3);
Point point2 = point1;
// here both point1 and point2 are referring to same object of Point class means they are dependent on each other
```

### String

- String Literals

```java
String message = new String("Hello World");
// OR
String message = "Hello World" + "!!";
message.endsWith("!!")
message.length()
// - immutable property
message.replace("!!", "--")
// other string methods
// trim, toLowerCase, toUpperCase, etc
```

- Escaping Sequences - are the special characters in a string

```java
"Hello \"java\""
"C:\\Users\\Dell\\Desktops\\...."
"Hello in the World of \n\tJava"
```

### Arrays

- Arrays are used to list of items.

```java
int[] numbers = new int[5];
numbers[0] = 12;
numbers[1] = 13;

int subjects[], totalMarks; // here subjects is of itn array type but total is of int type

import java.utils.Arrays;
Arrays.toString(numbers); //  for printing the array

int[] numbers = {1,2,3,4};
numbers.length;
Arrays.sort(numbers) // will change the actual array
```

- Default value of int array is 0
- Array has fixed size.
- arrays are mutable.

- Multi-dimensional Arrays

```java
int[][] matrix = new int[2][3];
matrix[1][2] = 1;
Arrays.deepToString(matrix);

int[][] matrix = {{1,2,3}, {4,5,6}};
```

### Constants

- naming convention for Constants in Uppercase

```java
final float PI = 3.14F;
```

### Arithmetic Operators

- `+`, `-`, `*`, `/`, `%`

```java
int result = 10 / 3; // 3

double result = (double) 10/ (double) 3; // 3.3333333333333
```

- increment and decrement operator

```java
int x = 2;
int y = x++;
System.out.println(x); // 3
System.out.println(y); // 2

int x = 2;
int y = ++x;
System.out.println(x); // 3
System.out.println(y); // 3
```

- Compound assignment operators

```java
int x = 12;
a += 3;
a // 15
```

- Expression is a piece of code that produces a value

### Order of Operation

```java
10 + 3 * 2; // 16
// here the * is having high precedence than + so first * and then +
```

- to change the order of operation we use parentheses
- Operator precedence
  - `()`
  - `*` `/`
  - `+` `-`
- when having operators of same precedence calculation is done from left to right

### Casting

- Casting and type conversion

```java
// Implicit casting - automatically casting, here no data is loss
// byte > short > int > long > float > double
short x = 1;
int y = x + 2;

double x = 1.1;
double y = x + 2;

// Explicit casting
double x = 1.1;
int y = (int)x + 3;

// converting string to int
String x = "1";
Interger.parseInt(x);
Short.parseShort(x);
```

### Math Class

- methods

```java
Math.round(1.1F); // 1
Math.ceil(1.1F); // 2.0
Math.floor(1.1F); // 1.0
Math.max(12,3);
Math.min(12,3);
Math.random(); // 0.98765

int result = (int) (Math.random() * 100);
```

### Formatting Numbers

```java
NumberFormat currency = NumberFormat.getCurrencyInstance();
String result = currency.format(12345.766);
System.out.println(result);

NumberFormat percent = NumberFormat.getPercentInstance();
String result = percent.format(12345.766);
System.out.println(result);
```

### Reading Input

```java
import java.utils.Scanner;

Scanner input = new Scanner(System.in);
byte age = input.nextByte();

input.next() // used to take only one token (word)
input.nextLine() // used to take full line
```

### Summary

- Variables and constants
- Primitives and reference types
- Casting
- Numbers, Strings and Arrays
- Read Input

## Part 1 - Fundamentals - Control Flow Statements

- Comparison Operators
- Logical Operators
- Conditional Operators
- Loops
- Mortgage Calculator Project

### Comparison Operators

- `==`, `!=`, `>=`, `>`, `<=`, `<`

### Logical Operators

- `&&`, `||`, `!`

### If statements

- if - else if - else
- Ternary Operator

### Switch Statements

### For Loop

### While Loop

### Do While Loop

### Break and Continue

### For Each Loop

```java
String[] fruits = {"Apple", "Banana", "Orange"};

for(String fruit : fruits){
  System.out.println(fruit);
}
```

### Summary

- Comparison Operator
- Logical Operator
- Condition Statements
- Loops
- Break and continue

## NOTE

- String comparison

```java
String s1 = "Hello"
String s2 = "Hello"

s1 == s2 // true

String s1 = "Hello"
String s2 = new String("Hello")
s1 == s2 // false // comparison operator here compare the address
s1.equals(s2) // true // here equals check the value
```

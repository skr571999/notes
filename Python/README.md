---
title: Python
---

## Table of Content

- Introduction
- Basic Structure
- Operators
- Flow Control Statements
- Functions
- Modules and Packages
- File Handling
- Errors and Exceptions
- OOPs
- Multi-threading
- Database Connectivity
- Logging
- Regular Expression
- Testing
- GUI Programming

## References

- https://www.programiz.com/python-programming
- https://automatetheboringstuff.com/#toc
- https://www.python-course.eu/python3_course.php
- https://realpython.com
- https://pythonprogramming.net/python-fundamental-tutorials/
- https://docs.python-guide.org/
- https://github.com/TheAlgorithms/Python
- https://automatetheboringstuff.com/
- https://www.py4e.com/lessons
- https://www.python-course.eu/python3_course.php
- https://www.thepythoncode.com/
- Python String Formatting - https://pyformat.info/
- https://packaging.python.org/overview/

## Python Introduction

### About Python

- Python is an interpreted, high-level, general-purpose programming language. Created by **Guido van Rossum** and first released in 1991.

### Applications of Python

- Desktop App Development (Tkinter, PyQT)
- Web Application Development (Flask, Django)
- Game Development(PyGame)
- Data Science
- AI, ML
- Web Scrapping
- IOT
- Scripting,
- Cpython, Pypy, Anaconda
- Extensible / Embedded

### Features of Python

- Small code and simple syntax
- Free and Open source
- High level Programming language
- Platform independent - means WORA - Write Once Run Anywhere
- Portable - code can be transferred from one OS to another
- Interpreted
- Extensive library(pip)
- Dynamic typed
- Multi-paradigm - Support Multiple Programming Syntax

### Limitations of Python

- Performance in comparison to Compiled Languages
- We don't use Python for making Mobile Apps

### Installation of Python

- Step - 1
  - Download Python Interpreter from [https://www.python.org](https://www.python.org)
- Step - 2
  - Installation of the Interpreter
- Step - 3
  - Running Python program using -
    - IDLE (Integrated Development and Learning Environment)
    - Text Editors
    - cmd(Command Prompt)
- Adding Python folder path to system environment PATH variable

### Basic Python Programs

```py
# - Printing something to the Screen
print("Hello World")

# - Variable Declaration
name = "Ram Kumar"

# - Taking user Input
name = input("Enter your name : ")
print("Your name is : ", name)

# - If-else Conditional Statement
x = 12
y = 3
if x > y:
  print("x is greater than y")
else:
  print("y is greater than x")

# - Arithmetic Operator
```

### Questions

- Write a program to perform Arithmetic Operations on two numbers taking from User?
- Take two numbers from users and find the greater number out of them?

### Programming Syntax

- Scripting
- Functional
- Object oriented
- Modular

### Other

- Help command
  - help()
  - help> topics
  - help>LISTS
  - help>quit
  - help('LISTS')
  - help('FORMATTING')
  - help('OPERATORS')
- Interactive Mode, Scripting Mode
- REPL(Read Evaluate Print Loop)
- Python launcher for Windows Usage

```sh
py       # run the latest installed python shell
py -3    # run the latest 3.x version shell
py -3.8  # run the 3.8 version shell
```

### Common Terminology

- Variable - is a storage location with a name, which contain some data.
- Statements - Instructions given to the Interpreter
- Expression - Instruction that give a value
- Operator and Operand
- Unary and Binary operators

### Identifiers

- Identifers is a name given to a variables, functions, classes, Modules and Packages
- Rules of Identifers
  - Allotted symbols: alphabet(small, upper case), digits, underscore(`_`)
  - Identifiers should not start with digits
  - Identifiers are case sensitive
  - We can not use keywords as Identifiers
  - There is no limit on max length of the identifiers
  - There should not be any space between a identifer

### Keywords

- keywords are the words that are reserved by the python

```py
# Show  the list os all keywords
import keyword
print(keyword.kwlist)
```

### Comment

- Comments are ignored while we execute the program

```py
# This is a single line comment
'''
This is a
multi line
comment.
'''
```

### Basic Data Types

- Built in
  - Numbers - int, float, bool
  - Text Sequence - str
  - Sequences - list, tuple, range
  - Set - set
  - Mapping Types - dict
- User Defined

### Numbers

- int

```py
print(1234) # Decimal int
print(1122121235563823382832893289238238)
print(0b10) # binary int
print(0o10) # octal int
print(0xA) # hex int
```

- float

```py
print(1.2)
print(-321.23)
print(13e3) # exponential form
print(12E-2)
print(-12.1e2)
```

- bool

```py
print(True + False)
print(2 + True)
print("2" + True)
```

### Strings

- str - Sequence of characters
  - Syntax
  - Properties
    - Indexing +ve and -ve
    - Immutable
    - Unpacking
  - Accessing the string characters
    - `'string'[index]`
  - Slicing
    - `'string'[start:end]`
    - `'string'[start:end:step]`
  - Operation
  - Escaping Characters
  - String Methods

```py
# /////////////// Syntax
a = 'Hello world'
b = "Hello World"
# triple-quotes - for multiline string
c = """
    for multi line string we can use the
    three double quote or three single quote
"""

# \ is used to prevent the end of the lines to include in output
a = """\

Hii, this is a multi line string
here we use the triple quote

"""
# for multiple lines
a = ('Hello in the world of the '
    'Python')

# ////////// String unpacking
a, b, c, d = "abcd"
print(a, b, c, d)

# //////// Operations
print("hello" + "world") # concatenation
print(2 * "hello") # repetition
print("Hello" "World")
print("a" == "A")
print("a" < "A")
print("a" > "A")

# //////////////// Slicing
a = "abcdefghij"
print(a[1])
print(a[1:4])
print(a[1:6:2])
print(a[:4])
print(a[1:])
print(a[:])
print(a[2:4:0])
print(a[100])
print(a[:100])
print(a[-1])
print(a[::-1]) # reverse
print(a[::-2])
print(a[2:8:1])
print(a[2:8:-1])
print(a[2:1:-1])
print(a[-1:-6:-1])
print(a[2:-5:1])

# /////////////////  Escaping Characters
# (\n, \t, \', \", \\)
print("c:\newfile\folder\table")
print("c:\\newfile\\folder\\table")
print("""c:\\newfile\\folder\\table""")
print(r"c:\newfile\folder\table") # raw string - ignores all the escaping characters
print("this is ram's house")
print('this is ram"s house')
print("hello this is more \"complicated\" 'This is single quote'")
print('"Isn\'t," they said.')

# a = f"Addition  {1+2}" #formatted string

# Printing the emojis
print("\U0001f600")
print("😀")
print("\N{winking face}")

s = '{name} has {n} messages.'
name = 'Guido'
n = 37
print(s.format_map(vars()))
```

```py
# //////////// String Methods
# lower, upper, swapcase, title, capatalize, startswith, endswith
# strip, lstrip, rstrip, replace(old, new, count=-1)
# islower, isupper, isidentifier
# find, rfind, index, rindex, count
# center, ljust, rjust, expandtabs
# split, rsplit
```

### Sequences

- list - sequence of comma-separated values (items) between square brackets
  - Syntax
  - Properties
    - +ve and -ve indexing, Slice
    - insertion order preserved
    - duplicates are alloted
    - heterogeneous objects alloted
    - mutable/growable/reducible
    - Nested list
  - Operations
  - Methods
- tuple
- range
- Sequence - a particular order in which related things follow each other
- Collection - a group of items
  - range - sequence of numbers
  - list - sequence of mutable values
  - tuple - sequence of immutable values
  - dict - collection of key/value pair
  - set - collection of unique values

```py
# ////////// Syntax
a = [1,2,3,4,5]
l = [] # empty List
# l = eval(input('Enter a list'))
# l = list(sequence)
# l = s.split(separator)

# sort() : numerical ac. to value , string acc. to alphabetical order. for sort the list should contain the homogeneous elements
a = [1, 4, 3, 2, 6, 7, 8]
a.sort()
# Sorting the list of homogeneous objects
a = [12, 13, 14, "abc", "def"]
a.sort()  # error

# sorting in reverse order
a = [1, 4, 3, 2, 6, 7, 8]
a.sort(reverse=True)

# sort values in the alphabetical order
a = ["a", "B", "c", "A", "b", "C"]
a.sort(key=str.lower)
```

### Operators

- Comparison Operator
- Logical Operator
- Assignment Operator

### For looping Statement

- Looping statements are used to execute statements multiple times

```py
for i in range(5):
  print(i)

for i in [1,2,3]:
  print(i)
```

### Conversion

- Conversion means converting from one data type to another
- Types
  - Implicit(Coercion)
  - Explicit(Type Casting)

```py
# /////// Implicit Conversion
a = 12
b = 12.3
c = a / b
print(c)
print(type(c))

# /////// Type Casting
# int, float, bool
# str
# list, tuple
# set
```

```py
# Complex are of two type
# 1. complex(x)==> x+0j
# 1. complex(x,y)==> x+yj

print(0b111)
print(int(0b111))
a = 12
print(bin(a))
print(oct(a))
print(hex(a))
print(bin(0xAE))
print(bin(0o77))
print(type(bin(123)))
print(type(int(0b111)))
print(type(bin(123)))
print(bin("12"))
print(bin(int("12")))
print(int("10"))
print(int("10.5"))
print(int("0b111"))
print(int('0xa', base=0))
print(int('0xa', 0))
print(int('0b1010',2))
print(int('0o077',8))
print(int('0x12a',16))
print(int(123.43))
print(int('10.5')) # Error
```

### Extra Material

```py
# builtins functions
# id, type, round, len, ord, chr, eval, pow, isinstance

# How to get the size of an object?
import sys
sys.getsizeof(12)
```

## Python Flow Control Statements

### Conditional Statement

- Conditional Statements are used when we want to execute the code only when some condition is satisfied.
- `if`-`elif`-`else`
- elif is used when we want to check multiple conditions
- Nesting
- Ternary Operator

```py
# Q - Check a number is +ve, -ve, Zero
n = int(input("Enter a number : "))
if n > 0:
  print("+ ve Number")
elif n < 0:
  print("-ve Number")
else:
  print("Zero")

# TERNARY Operator
# x = firstValue if condition else secondeValue
x = 10 if 10 > 8 else  20
print(x)
```

### Looping Statements

- Also called Iterative Statements
- Looping statement are used when we want to execute some statements multiple times.
  - `for` - statement is used when we want to iterate over a iterable object
  - `while`
    - when we don't know the no. of iteration then use the while loop
    - Two methods to exit the while loop
      1. using the break
      2. making the while condition false
- Nesting

```py
i = 5
while i:
  print(i)
  i-=1

pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
print(pets)
while 'cat' in pets:
  pets.remove('cat')
print(pets)
```

- looping statements with break, continue, else

```py
for i in range(10):
  if i == 5:
    continue
  if i == 7:
    break
  print(i)

# for-else - else block will be executed when the for loop will execute without the break
for i in range(8):
  if i == 6:
    print("Here is the break")
    break
  print(i)
else:
  print("break not executed")
```

### None Type

```py
print(None)
print(type(None))
```

### Functions

- Functions are named blocks containing related statements that perform some specific task.
- Advantages of Function
  - Code reusability
  - Reduce code length
- Parts of a function
  - Function definition/declaration
  - Function calling
- Calling the function before defining will give an error
- Types of Function
  - Built In Functions
  - User Defined Functions
    - With no return and no parameters
    - With return value
    - With parameter
    - Recursive function
    - Anonymous(lambda) function
    - Higher order
    - Decorator
    - Function Annotations - are the meta information about the types used by the function parameter and return value
  - Documentation String
  - Scope
- Variables Types
  - Global Variables
    - These are the variables that are defined in the global scope
    - These can be accessed from inside and outside of the function
  - Local Variables
    - These are the variables defined inside of the function or the local scope
    - These can only be accessed from inside of the function

### User Defined Functions

```py
# With no return and no parameters
def simFin():
    print("Hello")

# function returning one value
def retFun():
    return 12

# function without a body
def f3():
    pass

# function aliasing
def myfun():
    return 12
a = myfun
print(a())

# Function is also an Object
# getting the type of the function
def f1():
  pass
print(f1)
print(type(f1))
print(id(f1))
```

- Function With Parameters
  - Formal and Actual Parameters
  - Types - Positional - Keyword - Default - Variable Length - Variable Length Keyword arguments
    <!-- - Arbitrary Argument Lists Functions -->

```py
### Position Arguments
def getDetail(name, rollno):
  print("Name ", name)
  print("Rollno ", rollno)

getDetail("ram", 123)
getDetail(123, "ram")

### Keyword Arguments
getDetail(rollno=123, name="ram")
# getDetail(123, name="ram")
getDetail("ram", rollno=1234)
# getDetail(name="ram", 123)

### Default Argument
# - default argument are defined at last
def greeting1(name, msg="Good Morning"):
    print("hello " + name + ", " + msg)

greeting1("ram")
greeting1("ram", "Good Evening")
greeting1("Good Evening", "ram")
greeting1(msg="Good Evening", name="ram")

### Variable Length Argument
def add(*x):
    print(x)

add(1, 23, 1)
add(1, 2, "21")

# Variable Length Keyword arguments
def displayData(**x):
  print(x)
displayData(a=12, b="sachin", c="cse")

# Q - can we pass a variable length argument variable before the normal parameter
def f2(*x, a, b):
    print(x, a, b)

# f2(12, "ram", "hello", "ram", 123)
f2(12, "ram", "123", a="rohit", b=321)
# f2(12,'ram','123',a='rohit',321)

def f3(*n, name):
    print(name)
    print(n)

f3(name="Ram")
f3(12, 13, name="Sachin")
# f3(name="Ram",14,15)

# unpacking dictionary
def fun(a, b, c):
    print(a, b, c)

d = {"a": 2, "b": 4, "c": 10}
fun(**d)
```

- Types of Variable
  - Global Variables
  - Local variables

```py
# modifying global variable from inside of the function using global keyword
a = "hello"
def f3():
    global a
    print(a)
    a = a * 2
    print(a)
print(a)

# changing the value of the local variable from inside the local defined function using nonlocal keyword
def a():
    n = 1
    def b():
        nonlocal n
        n = 2
    print(n)
    b()
    print(n)
a()
```

- Recursive function

```py
def f1(n):
    print(n)
    if n ==0:
        return 1
    else:
        return f1(n-1)
f1(5)

# factorial
def fact(a):
  if a == 1:
    return 1
  else:
    return a * fact(a - 1)
print(fact(4))
```

- Higher Order Functions
  - function that take other function as argument

```py
a = [1, 22, 5, 33, 66, 77, 23]

def findOdd(n):
    return n % 2 == 1

def find(arr, fn):
    f = []
    for i in arr:
        if fn(i):
            f.append(i)
    return f

print(find(a, findOdd))

# map, filter, functools.reduce
```

- Anonymous function(lambda expression) - are the function that are defined without the name.

```py
# Syntax
# lambda arguments: expression

#
sum1 = lambda x, y: x + y
def sum2(x, y):
  return x + y

#
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
pairs.sort(key=lambda pair: pair[1])
print(pairs)
```

- Decorator Functions
  - It is a function that take another function as input and provide some extra functionality to that function and return it

```py
# make a decorator that will check the type of the argument passed to the function that it is list or not
def check(fn):
    def inner(a):
        if isinstance(a, list):
            return fn(a)
        else:
            return "Could Not Perform Operation"
    return inner

@check
def add_list(a):
    return sum(a)

@check
def add_even_list(a):
    s = 0
    for i in a:
        if i % 2 == 0:
            s+=i
    return s

@check
def add_odd_list(a):
    s = 0
    for i in a:
        if i % 2 == 1:
            s+=i
    return s

my_a = (1, 5,6,3,2,8)

print(add_list(my_a))
print(add_even_list(my_a))
print(add_odd_list(my_a))
```

- Inner Function
  - Non local variables
  - Closures

```py
# INNER Function - function inside a function
# - inner function is accessible only inside i.e. we can not call the inner function from the outside of the function
# calling a inner function from the outside of the outside function
def outer():
    print("Outer start")

    def inner():
        print("inner")

    print("outer end")
    return inner

print(outer())
print(outer()())  # calling the inner function
a = outer()
print(a())
```

## NonLocal Variables

- Nonlocal variable are used in nested function whose local scope is not defined. This means, the variable can be neither in the local nor the global scope.

```py
# defining the local scope variable inside the inner function
def outer():
    x = 1

    def inner():
        nonlocal x  # now the local variable x of the outer function will be alerted
        x = 2
        print(x)

        def inner2():
            nonlocal x
            x = 3
            print(x)

        inner2()

    inner()
    print(x)
```

### Closures

- This is a technique by which we can attach the variable in the enclosing scope(like of the function) visible in the outer scope even if the outer function has been removed from the current namespace.
- Conditions for the closures
  - We must have a nested function (function inside a function).
  - The enclosing function must return the nested function.

```py
# function returning the function
def f3(x):
  def f4():
    return x * x
  return f4

a = f3(12)
del f3
print(a())

# Example - 2
def f4(x):
  def f5(y):
    return y * y
  return f5

a = f4(12)
del f4
print(a(2))
```

- DOC String in the function

```py
def add(*x):
    """ This will add all the int values """
    print(x)
    sum = 0
    for i in x:
        sum += i
    print(sum)

add(1, 23, 1)
print(add.__doc__)

# DOC function string in the main scope
"""This is the main scope"""
print(__doc__)
```

### Exception Handling Statements

- What are Errors And Exceptions?

  - An exception is an error that happens during the execution of a program.
  - **Syntax Error** cannot be handled using Exception handling
  - Types of Exceptions
    - Builtin(Predefined Exception Classes)
      - EX - `10/0` - `ZeroDivisionError`
      - [Exception hierarchy](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)
    - User defined(custom)

- Syntax Notes
  - `try` - here code in which exception might occur is kept
  - `except` - here code that will be executed when exception occur is kept
  - `else` - here code that will be executed when no exception occur is kept
  - `finally` - here code that will be executed no matter exception occur or not
  - `try` cannot be without `except` or `finally`
  - Order of usage is: `try`-`except`-`else`-`finally`
  - Multiple `except` blocks
  - Number of times we can use try-except-else-finally
    - try - 1 time
    - except - multiple times
    - else - 1 times
    - finally - 1 times
- Nesting

```py
# - multiple except
try:
    print(1)
except IndexError:
    print(2)
except ZeroDivisionError:
    print(3)

# - Displaying Error Message
a = [1,2]
try:
    print(12/0)
except ZeroDivisionError as err:
    print('Error', err)

# - Multiple Exception in one Except
a = [1,2]
try:
    print(12)
    print(a[10])
except(IndexError, ZeroDivisionError) as err:
    print('Error', err)
```

### Nesting

```py
# 1 -
try:
    print(1)
    try:
        print(2)
    except:
        print(3)
    finally:
        print(4)
except:
    print(5)
finally:
    print(6)

# 2 -
try:
    print(1)
except:
    print(2)
    try:
        print(3)
    except:
        print(4)
    finally:
        print(5)
finally:
    print(6)

# 3 -
try:
    print(1)
except:
    print(2)
finally:
    print(3)
    try:
        print(4)
    except:
        print(5)
    finally:
        print(6)
    print(7)

# 5
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except IndexError:
        print("3")
    finally:
        print("4")
    print("5")
except ZeroDivisionError:
    print("6")
finally:
    print("7")
print("8")


# 6
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except IndexError:
        print("3")
    finally:
        print("4")
    print("5")
except IndentationError:
    print("6")
finally:
    print("7")
print("8")


# 7
try:
    print("1")
    try:
        print("2")
    except ZeroDivisionError:
        print("3")
        print(10 / 0)
    finally:
        print("4")
    print("5")
except IndentationError:
    print("6")
finally:
    print("7")
print("8")


# 8
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except ZeroDivisionError:
        print("3")
        print(10 / 0)
    finally:
        print("4")
    print("5")
except IndentationError:
    print("6")
finally:
    print("7")
print("8")


# 9
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except ZeroDivisionError:
        print("3")
        print(10 / 0)
    finally:
        print("4")
    print("5")
except ZeroDivisionError:
    print("6")
finally:
    print("7")
print("8")


# 10
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except ZeroDivisionError:
        print("3")
    finally:
        print("4")
        print(10 / 0)
    print("5")
except ZeroDivisionError:
    print("6")
finally:
    print("7")
print("8")


# 11
try:
    print("1")
    try:
        print("2")
    except ZeroDivisionError:
        print("3")
    finally:
        print("4")
    print("5")
except ZeroDivisionError:
    print(10 / 0)
    print("6")
finally:
    print("7")
print("8")


# 12
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except ZeroDivisionError:
        print("3")
    finally:
        print("4")
    print("5")
except ZeroDivisionError:
    print("6")
finally:
    print(10 / 0)
    print("7")
print("8")
```

## Extra Material

```py
# Builtin functions
# print(* ,sep="", end=""), dir, abs, divmod, eval, any, all
# zip

# Q - take input from the user(two numbers and the operation)
# n1, n2, op = (add, sub, mul, ...)
# according to the operation perform the operation

# Q - WAP to print methods of string that start with 'is' using the `dir()`

# Pattern Programs
# - Star Pattern Program
# - Number Pattern Programs
# - Alphabet/Character Pattern Programs

# Q - Print the following Pattern
#  *
#  .  *
#  .  .  *
#  .  .  .  *
n=int(input())
for i in range(n):
  for j in range(i+1):
    if j==i:
      print(' * ', end="")
    else:
      print(' . ',end="")
  print()

# Q - Print the bellow Pattern
#       *
#     * *
#   * * *
# * * * *
n = 4
for i in range(n):
    for j in range(n, 0, -1):
        if(i+1>=j):
            print("*",end=" ")
        else:
            print(" ", end=" ")
    print()


## Q - Printing the SQUARE
# * * * *
# *     *
# *     *
# * * * *
n = int(input())
for i in range(n):
    for j in range(n):
        if (i < (n - 1) and i > 0) and (j > 0 and j < (n - 1)):
            print(" ", end=" ")
        else:
            print("*", end=" ")
    print()

# Q - Print the Following Pattern taking user input
#    A
#   BAB
#  CBABC
# DCBABCD

n = int(input("Enter the Number : "))

start = 65
for i in range(n):
    for j in range(1, n):
        if (n - i) > j:
            print(" ", end="")
        else:
            print(chr(start + (n - j)), end="")
    print(chr(start), end="")
    for j in range(n, 2 * n):
        if (n + i) < (j + 1):
            print(" ", end="")
        else:
            print(chr(start + (j - n + 1)), end="")
    print()

## Multiple Line User Input
text = ''
s = ' '
while s:
    s = input()
    text+=(s + '\n')
print(text)
```

```py
### Transfer Statements
# - break, continue, pass

# Q - WAP to print n even elements?
for i in range(10):
    if i % 2 == 0:
        print(i)

# Q - Print out methods of string that start with 'is' using the `dir()`
for i in dir(str):
  if not i.startswith("is"):
    pass
  else:
    print(i)

dir() # list attributes for the current file
dir(list) # print the list of the attribute for the list

a = [1, 2, 3, 4]
b = [12, 13, 14, 15]
zip(a, b)

print(10, 20, 30, sep="+") # default value for the sep ==> space
print("Hello ", end="")
print("python", end="") # default value for the end ==> new line
print(10, 20, 30, 40, sep=":", end="...")

a = [1, 2, 3, 4]
print(*a) # unpacking operator

## eval()
ex = input("Enter a expression : ")
print("The result : ", eval(ex))

x = eval(input())
print(type(x))

## abs()
print(abs(-1.2))
print(abs(-1j))
print(abs(1 + 2j))
print(abs(1 - 2j))

# divmod
print(divmod(10, 3))
print(divmod(10.0, 3))

# print(++x)
# print(---x)
# print(----x)
# print(x++) # error
# Q - difference b/w `is` and `==`
#   - (==) operator check for the content comparison
#   - (is) operator check for the reference comparison

# Q - Check a given number is even or odd
num = 10
if (num % 2) == 0:
    print("Even")
else:
    print("Odd")

# Q - check a number is in between 1 and 100
n = 10
# 1<=n<=100
if n >= 1 and n <= 100:
    print(n, " is between 1 and 100")
else:
    print("Not between")

# Q - How to find the largest number among the three numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))
if (num1 >= num2) and (num1 >= num3):
    largest = num1
elif (num2 >= num1) and (num2 >= num3):
    largest = num2
else:
    largest = num3
print(largest)

# Q - Find the second largest number
a = 10
b = 12
c = 3
if a > b and a < c:
    print(a)
elif b > c and b < a:
    print(b)
else:
    print(c)

# Q - find the minimum value using ternary operator
a = 23
b = 34
c = a if a > b else b
print(c)

# nesting of the trinary operator
# find the max in three no.
a = 12
b = 11
c = 14
d = a if a > b > c else b if b > c else c
print(d)
```

```py
# Builtin functions
# locals, globals
# locals() will give you a dictionary of local variables
# globals() will give you a dictionary of global variables

# Q - Make a function that take any length of numbers input and do their sum
def sum(*n):
  s = 0
  for x in n:
    s = s + x
  return s
sum(1,2,3,4)

# Count the numbers of the uppercase and lowercase  alphabets
s = "Hello World"
upCount = 0
loCount = 0
for c in s:
    if c.isupper():
        upCount += 1
    elif c.islower():
        loCount += 1
print(upCount)
print(loCount)

# Create a function that takes a list and finds the integer which appears an odd number of times
def find_odd(lst):
    myset = set(lst)
    for i in myset:
        c = lst.count(i)
        if c % 2 != 0:
            return i
print(find_odd([1, -1, 3, 3, 5, 5, 1, -1, 5]))

# Find the max of two and three numbers
def max_of_two(x, y):
    if x > y:
        return x
    return y
def max_of_three(x, y, z):
    return max_of_two(x, max_of_two(y, z))
print(max_of_three(3, 6, -5))

# Q - Write a function to print the sum of the elements of the list

# Q- Write a function that print the fibonacci series
def fibonic_series(n):
    if n <= 1:
        return n
    else:
        return fibonic_series(n - 1) + fibonic_series(n - 2)
nterms = 10
for i in range(nterms):
    print(fibonic_series(i))

# Q - Write a python function, nearest_palindrome() which accepts a number and returns the nearest palindrome greater than the given number.
def nearest_palindrome(number):
    def check_palindrome(num):
        temp = num
        rev = 0
        while num > 0:
            dig = num % 10
            rev = rev * 10 + dig
            num //= 10
        return temp == rev

    number += 1  # for 99 to get 101
    while not check_palindrome(number):
        number += 1
    return number

number = 99
print(nearest_palindrome(number))

# Q - find the even numbers
a = [1, 5, 4, 6, 8, 11, 3, 12]
# 1 - using the normal function
def isEven(x):
    if x % 2 == 0:
        return x


b = list(filter(isEven, a))
print(b)
# 2 - using the lambda function
c = list(filter(lambda x: (x % 2 == 0), a))
print(c)  # Output: [4, 6, 8, 12]


# map - apply some operation on all the values of the sequence
a = [1, 5, 4, 6, 8, 11, 3, 12]
# 1 - Using the normal function
def double(x):
    return 2 * x


b = list(map(double, a))
print(b)
# 2 - using the lambda function
c = list(map(lambda x: x * 2, a))
print(c)  # Output: [2, 10, 8, 12, 16, 22, 6, 24]


# Q - apply map on multiple list
a = [1, 2, 3, 4]
b = [5, 6, 7, 8, 9]  # the extra number will be ignored
c = list(map(lambda x, y: x * y, a, b))
print(c)


# Q - How to pass the lambda expression as the argument in a function
# defining logic using lambda expression
def checkNo(logic, value):
    if logic(value):
        print("Valid")
    else:
        print("not valid")


checkNo(lambda x: x > 12, 12)
checkNo(lambda x: x < 12, 1)


# Q - how to filter a data using the lambda expression
students = [
    (101, "sachin", 43),
    (102, "rajneesh", 50),
    (103, "mradul", 55),
    (104, "vikas", 100),
    (104, "piyush", 85),
]


# filtering data without using lambda expression
def filterData(data):
    def filterLogic(student):
        if student[1][0] == "s":
            return True
        else:
            return False

    for i in data:
        if filterLogic(i):
            print(i[1])


filterData(students)


# Filter data using lambda expression
def filterData2(filterLogic, data):
    for i in data:
        if filterLogic(i):
            print(i[1])


filterData2(lambda x: x[2] > 50, students)
filterData2(lambda x: x[2] > 90, students)


# Q - How to find the numbers divisible by 3 in a list (using filter)
a = [1, 6, 23, 4, 65, 43, 22]
print(list(filter(lambda i: i % 3 == 0, a)))

# Q - how to multiply the elements of a list by 2 (using the map)
a = [1, 6, 23, 4, 65, 43, 22]
print(list(map(lambda i: i * 2, a)))

# Q - How to do the sum of the numbers in a list (Using reduce)
import functools

lis = [1, 6, 23, 4, 65, 43, 22]
print(functools.reduce(lambda a, b: a + b, lis))

# Factorial Program in one line
from functools import reduce
print(reduce(lambda x, y: x * y, range(1, 6)))
```

```py
# global and local variable defined with the same name
# case 1
a = 1
def f1():
    print(a)
f1()
print(a)
# case 2
def f2():
    print(a)
    a = 2
    print(a)
f2()
print(a)

def f1(a, b, *x):
  print(a, b, x)
f1(12, "ram", "hello", "ram", 123)
```

## Python Modules and Packages

- Module - is a normal python file. It contains variables, functions, Classes.
- Package - is a folder that contain a file `__init__.py`. It is a collection of modules, and other packages.
- Types of Modules and Packages
  - Builtin Modules
  - User Defined Modules
  - Third Party Modules

### Import Syntax

```py
import MODULE_NAME
import MODULE_NAME as OTHER_NAME # aliasing
from MODULE_NAME import MEMBERS
from MODULE_NAME import *
from MODULE_NAME import f1 as m1, f22 as m2 # aliasing
```

### Built in modules

- math, random, sys, time
- Command Line Arguments

```py
# math
from math import *
sqrt(4) # 2.0 - return the square root
ceil(10.01) # 11 - return the smallest integer >= x.
floor(10.6) # 10 return the largest integer <= x.
factorial(3) # 6 - give the factorial of the number
pow(3, 3) # 27.0 - to calculate the power
# - fmod()
# - fsum()
gcd(12,15)

# random
from random import *
random() # give a random number b/w 0 and 1
randint(1, 200) # give a random number b/w 1 and 200
choice([1,2,3,4]) # give a random number from the list
# randrange(start, stop, step)

# sys
import sys
print(sys.argv[1:]) # command line arguments

# time
import time
print(time.time())
print(time.sleep(2)) # - suspends (delays) execution of the current thread for the given number of seconds.

# pprint
from pprint import pprint
pprint(globals())
# ///// Others: Builtin Modules File
```

### User Defined Modules

- Calling a module imported in another module

```py
# test.py
import math

# my.py
import test
print(test.math.pi)
```

- Predefined variables of a module

```py
print(dir())
```

- Main Function Example

```py
def add(x, y):
    return x + y

# below print statement will be executed every time module is loaded
print("This is executed every time")

def main():
    print("This will be executed when this module is executed")

if __name__ == "__main__":
# this will be executed when this file is executed not when any other module import this module
    main()
```

- System path append

```py
import sys

# sys.path.append("D:\\Python\\learning\\basics")
```

- Dir Function

  - dir() ==> without the argument will return the members of the current module
  - dir(moduleName) ==> will return the members of the argument passed module

- Module Reloading

```py
# module1.py
print('This is module 1 version 2')

# test1.py
import module1
import module1
import module1 # module will be loaded once

# test2.py
import time
import module1

print("Before sleep")

time.sleep(20)  # in this time change the code in module1

print("After sleep")

import module1

print("Module reimport but not work")

from importlib import reload
# from imp import reload

# we can reload a module any number of times
reload(module1)
print("This is after the imp.reload()")
```

### Packages

### Third Party Modules

- PIP
  - PIP commands

```py
# pip freeze - to show all the installed packages
# pip list
# pip install -r requirements.txt # to install the modules of the requirements.txt file
# pip freeze > requirements.txt # to save the modules into the requirements.txt file

# remove packages one by one
pip uninstall -r requirements.txt

# remove all packages at once
pip uninstall -r requirements.txt -y

## To update the path in the venv we will re run the command to recreate the venv
python -m venv venv
python -m pip list
```

---

### Question

```py
# Q - dir
dir()
dir(__builtins__)

# Q - Do the sum of the values passed through the cmd arguments
# python UserInput.py 1 2 3 4 5
no = sys.argv[1:]
res = 0
for i in no:
    n = int(i)
    res += n
print("The sum : ", res)

# Q - Write a python program to guess the number in the user's mind
from random import randrange

def guess_number(number_in_mind):
    n = randrange(1, 11)
    if n == number_in_mind:
        print("You have got it right!!!")
    elif n > number_in_mind:
        print("Number is high")
    else:
        print("Number is low")

guess_number(4)
```

## Python Builtin Data Structures

### Numeric Types

- int, float, complex
- int
  - Bitwise Operator
  - Only applied on Boolean and int

```py
# &  bitwise AND
# |  Bitwise OR
# ^  Exclusive OR / XOR (if both are different then 1 otherwise 0)
# ~  Bitwise NOT (complement) operator
# << left shift
# >> Right shift
```

- complex
  - Syntax: `a + bj`
    - a -> real part
    - b -> imaginary
      <!-- - Imaginary part can not be specified by binary, octal, hexa -->

```py
print(5j)
print(-39j)
print(0j)
a = 10 + 20j
print(a.real) # to get the real part
print(a.imag) # to get the imaginary part
```

### Sequence Types

- List, Tuple, range

```py
import sys
print(sys.getsizeof(range(5)))
```

- List Comprehensions

```py
# - Syntax - 1
# list = [expression for i in sequence]
a = [x * x for x in range(1, 11)]
print(a)

# expanded form
a = []
for i in range(1,11):
    a.append(i*i)

print(a)

# - Syntax - 2
# list = [expression for i in sequence if condition]
a = [x * x for x in range(1, 11) if x % 2 == 0]
print(a)
# Expanded form
a = []
for i in range(1,11):
    if i%2==0:
        a.append(i*i)
print(a)

# Q - How to print the  printing the first character of the words in list
a = ["sachin", "rajneesh", "kumar"]
print([w[0] for w in a])
print([w for w in a if len(w) < 4])

w = "the quick brown fox jumps over the lazy dog".split()
print(w)
print([i.upper() for i in w])
print([[i.upper(), len(i)] for i in w])

# printing the methods of the list that starts with '__'
print(*[i for i in dir(list) if not i.startswith("__")], sep="\n")

print([(i,j,k) for i in range(1) for j in range(2) for k in range(3)])
```

- Tuple
  - Syntax
  - Properties
    - duplicates are alloted
    - heterogenous
    - insertion order preserved
    - Indexing +ve, -ve
    - **Immutable** - cannot modify after created
    - same as list except it is immutable
    - fast access than list
  - Slicing
  - Operation(+, \*)

```py
a = ()
a = (12)
a = (12,)
a = tuple(sequence)
a = (123, 12345, 543, 53, 5, 4, 99, 123)

# ////////// tuple unpacking
a = (12, 13, 14)
a = 12, 13, 14
b, c, d = a
print(b, c, d)

# ///////// Methods
# index, count

# //////////////// Operations
a = (1, 2, 3, 4)
b = (12, 13, 14)
print(a + b)
print(a * 2)
```

- Tuple Comprehension Not Supported

```py
# not supported of tuple
t = (x * x for x in range(1, 11))
print(t)  # generator
```

### Set Types

- set, frozenset
- Set
  - Syntax
  - properties
    - insertion order not preserved
    - no slicing
    - no indexing
    - set are mutable
    - duplicate are not alloted
    - heterogenous values allotted
  - Methods

```py
# ///////// Syntax
a = {1}
a = set()

a = set() # empty set

# //////////// Methods
# update() |=
# insertion_update() &=
# difference_update() -=
# symmetric_difference_update() ^=

a = {12, 13, 14}
a.add("Hello")
a.add(1212, 1313)
a.add(["Hello", "world"])
print(a)

a = {12, 13, 14}
a.update(99)  # error 99 not iterable
a.update("hello")
a.update([23, 24, 25])
a.update({"a": 12, "b": 123})
print(a)
```

- Set Comprehension

```py
a = {x for x in "abcdef" if x not in "abc"}
print(a)
```

### Mapping Types

- Dict
  - Syntax
  - Properties
    - Unordered collection
    - User defined indexing
    - Mutable
    - No duplicate key
    - Heterogeneous keys are alloted
    - Values can be duplicated
  - Methods

```py
# ////////// Syntax
a = {}
a = dict()
a = dict({12: "123", "name": "Kumar"})
a = dict(name="Sachin", branch="CSE")

# getting the values
a['id']
a.get("id")
a.get("id", 1001))  # 1001 this will be the default value
len(a)

# Adding items to the dictionary
a = {}
a["name"] = "Sachin"

# unpacking
a, b, c = {"a": 11, "b": 22, "c": 33}
print(a, b, c)  # a b c

# ///////// Methods
# copy, keys, values, items, setdefault, get
# pop, popitem, clear
# update

a = {"name": "sachin", "branch": "CSE"}
b = a.setdefault("branch", "ME")
c = a.setdefault("rollno", 1234)
print(a, b, c)

print({}.fromkeys([1,2,3], 'A'))

# - Dictionary Comprehension
sq = {x: x * x for x in range(1, 6)}
print(sq)

gen = ((i, i + 1) for i in range(1, 6, 2))
dict(gen)  # {1: 2, 3: 4, 5: 6}
```

### del keyword

- del is a keyword
- it is used to delete the object reference from the variable

```py
a = 'abc'
del a
del a[0] # error because str is immutable

# We cannot delete a literal of the datatype and function call
del 12312 # Error
del sum() # Error
del sum

a = [11, 12, 13, 14, 15, 16]
del a[2:]
```

### Nesting

```py
t = (12, 13, [12, 15, 16])
print(t[2][1])
t[2][1] = 12345
print(t[2][1])

# We can have only immutable data types inside set
a = {123, 432, 54, (12, 14, 14)}
print({1, 2, 3, {1, 2, 3}}) # error
# to use the set inside the set we have to use the frozenSet()
```

### Conversion

```py
# /////// Type Casting
# list, tuple, set, dict

a = set({"name": "Ram"})
a = list("python programming")

a = dict([(100, "Sachin"), (200, "Ram")])
a = dict({(100, "Sachin"), (200, "Ram")})
ts = [(1, 2), (3, 4), (5, 6)]
dict(ts)  # {1: 2, 3: 4, 5: 6}
```

### Extra Material

```py
# - min, max, sum, sorted, str.join(), str.split()
# ///// Sorted
sorted((1, 2, 34))
sorted(("a", "A", "98"))
sorted("absd123ABa")
sorted([1,2,3,4], reverse=True)

t = ("Ram", "kumar", "Singh")
print("".join(t))

t = ("Ram", "kumar", 123)
print("".join(t)) # could not join the int with the string

# - difference b/w discard vs remove method of Set
# - difference between the del and the clear()

# - Print out the methods using `dir()` using list comprehension
print(*[i for i in dir(str) if not i.startswith("__")], sep="\n")

# take three values input using list comprehension
a, b, c = [eval(x) for x in input().split()]
print(a, b, c)

# - finding a element in a list and not in the second list
a = [10, 20, 30, 40]
b = [10, 50, 30, 60]
print([x for x in a if x not in b])

#
eval("set(map(int,[1,2,3,4]))," * 2)
# ({1, 2, 3, 4}, {1, 2, 3, 4})
```

## Python File Handling

- We use the `open()` function to open a file in reading or the writing mode.
- Syntax:

```py
open("FILE_PATH_WITH_NAME", "MODE")
```

- Modes for Opening a file
  - `x` - Create file and open it in Writing mode. If already Exists then throw Error
  - `w` - Open a file in writing mode and if not exists create it
  - `a` - Open a file in appending mode and if not exists create it
  - `r` - Open the file in reading mode and if not exists throw Error.
  - `b` - for binary data
  - `t` - for text data
  - `+` - for opening in both modes read and write
- File Methods
  - `close()`
  - `closed`
  - `read()`
  - `readable()`
  - `readline()`
  - `readlines()`
  - `seek()`
  - `seekable()`
  - `tell()`
  - `writable()`
  - `write()`
  - `writelines()`

```py
f = open("test.txt", "w")
f.write("Hello World")
f.close()

f = open("test.txt", "r")

# for i in f:
#     print(i)

# print(next(f))
# print(next(f))

# print(f.read())
# print(f.read(13))

# print(f.readline())
# print(f.readline(2))
# print(f.readline(12))

if f.readable():
    print(f.read())

# Seeking the position of the cursor
# if f.seekable():
#     f.seek(10)
#     print(f.read())

### Deleting a file
import os

# os.remove("test.txt")

# check if the file exists if yes then delete
if os.path.exists("test.txt"):
    os.remove("test.txt")
else:
    print("The file does not exist")
```

### With Statement

```py
with open('test.txt','r') as f:
    print(f.read())
```

- **Need of Closing file** - Improperly closed file can cause loss of the Data or corrupted. Closing file manually may also work, so we use `with` statement which automatically close the file if our work is done with that file.

```py
# ////////// Writing to file using print
fs = open('hello.txt', 'w')

import sys
print('New', file=fs)
print('New', file=sys.stdout)

f = open('test.txt') # mode default to 'r'
f = open('test.txt', 'w+') # place the cursor at start but delete all the content of the file
f = open('test.txt', 'r+') #  place the cursor at start
# f = open('test.txt', 'rb+') # binary mode is used for reading the image sand the videos
f = open('test.txt', 'a+') # place the cursor at the end
```

## Python OOPs

- OOP - Object Oriented Programming
- OOP is a programming model in which we use the concept of Class and Object

### Classes

- Class
  - is a blueprint of the Object
- Object
  - is the instance of the Class
  - A object has some state and behaviour which are declared inside the class as properties and methods
- Members of a Class
  - Variables
  - Methods
    - Constructor

```py
# What will be the Output
class Car:
  print(1)
  def __init__(self):
    print(2)

Car()
```

### Methods Usage

| If we use                   | we should use    |
| --------------------------- | ---------------- |
| Instance Variable           | Instance Methods |
| static Variable             | Class Methods    |
| not static & not non-static | Static Method    |
|                             |                  |

### Constructor

- Constructor is a non-static method that is called by the Python Interpreter when a object of a class is made.
- It is used for initialize the Non-Static Variables

```py
class Test2:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def getSum(self):
        return self.a + self.b

t2 = Test2(1, 2)
print(t2.getSum())
```

### Ways of Accessing a member of the class

- Using the class Name(Static Way)
- Using the Object Reference(Non Static Way)

### Types of Variables

- Static
  - Are the variable that are defined inside the class or using the class name outside of the class
  - Static variabels can be accessed using the class name or the object
  - If there exixts a non static variable with the same name as the static variable and we try to access it using the object reference then the non static variable value will be returned
  - Static Variables defined inside the class gets the memory at class declaration

```py
# Example 2
class Student:
    college = "ABC" # static variable
    def __init__(self, name):
        self.name = name

Student.university = "ABCDEF" # Static variable defined outside
s1 = Student("Aniket")
s1.college = "DEF"
print(Student.name) # Error
print(s1.college)
print(Student.college)
```

- Non Static
  - Are the variables that are defined using the object reference
  - These can be defined inside of the nonstatic method or outside of the class using the object reference
  - non satic variable gets the memory when they are defined/ after the object creation

```py
class Car:
    def __init__(self):
        self.name = "Ram" # Non static

a = Car()
a.color ="Red" # Non Static
```

### Types of Method

- Non Static Method

  - These are the method that require one formal argument self in which the reference of the object is passed
  - These method can only be called using the Object reference
  - These methods are used to work with non-static data

```py
# Example 1
class Student:
    def f1(self):
        print("Hello World")

Student.f1() # ERROR
s1 = Student()
s1.f1()
```

- Static Method
  - To make a method static @staticmethod decorator is used
  - this method take no required formal argument
  - These type of method can be called using the class name or the object reference
  - Static method does not deal with the class but deal with the parameter passed to it.
  - static methods are used to group utility function into the class

```py
# Example 1
class Student:
    @staticmethod
    def f1():
        print("Hello World")

Student.f1()
s1 = Student()
s1.f1()

# Example 2
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
    @staticmethod
    def isPass(marks):
        return marks > 35

s1 = Student("Ram", 46)
print(s1.name)
print(s1.marks)
print(s1.isPass(s1.marks))
```

- Class Method
  - To make a method class method @classmethod decorator is used
  - That method must have one argument cls
  - Class method can be called in any way but the class reference goes to cls only
  - So, Class method work with the class and it takes first argument the class
  - Class method are used for creating Factory Function (that return the class object)

```py
# Example 1
class Student:
    @classmethod
    def f1(cls):
        print(cls)
        print("Hello World")

Student.f1()
s1 = Student()
s1.f1()

# Example 2
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
    @classmethod
    def f1(cls, name, marks):
        return cls(name, marks)

s1 = Student("Ram", 6)
print(s1.name)
print(s1.marks)
s2 = Student.f1("Mohan", 33)
print(s2.name)
```

### Access Modifers

- Public Members - are the members that can are accessed from outside and also inside of the class.
- Protected Members - are the members that can only be accessed inside and in the child class of that class but not outside
- Private Members - are the members that can only be accessed inside the class but not outside
- Public - all the members are defaultly public
- Protected - to specify that a member to be protected we use single underscore(`_`) before it.
- Private - to specify that a member is private we use the double uderscore(`__`) before it

### Questions

```py
# Functions - getattr, delattr, hasattr, issubclass, isinstance

# __init__ - method is called when object of the class is maded
# __str__ - method is called when object reference of the class is print it return only string
# __del__ - method is called when the object of that class is destroyed
```

## Python OOPs Properties

- Properties of OOP
  - Inheritance
  - Encapsulation
  - polymorphism
  - Abstraction

### Inheritance

- Types of Inheritance
  - Single
  - multilevel - parent can be child
  - multiple - more than one parent
  - hierarchical - more than one child
  - hybrid - mix
    <!-- cyclic\* -->

```py
## Single
class A:
    pass

class B(A):
    pass

## Multi level
class C:
    pass

class D(C):
    pass

class E(D):
    pass

## Multiple
class C:
    pass

class D:
    pass

class E(C,D):
    pass

## tree level - hierarchical
class C:
    pass

class D(C):
    pass

class E(C):
    pass

## Hybrid
```

<!-- ### Cyclic

```py
# class F(G):
#     pass
# class G(F):
#     pass
``` -->

- Super
  - It is used to call the parent class members.

```py
class A:
    a = 1

    def __init__(self):
        self.b = 2
        print("A init")

    def a_m1(self):
        print("A m1")

class B(A):
    c = 3

    def __init__(self):
        super().__init__()
        self.d = 4
        self.a_m1()
        print("B init")

    def b_m1(self):
        print("B m1")

a = A()
b = B()
```

- `mro()`
  - Methods Resolution Order
  - Gives a list of all the class from which the class is inherited.

```py
print(list.mro())

print(list.__mro__)
```

```py
class A:
    __slots__ = ['name']
    course = "Python"
    def __init__(self):
        print("init")
        self.name = "Ram"
    def __str__(self):
        return 'str'
    def __repr__(self):
        return 'repr'
    def __exit__(self, *args, **kwargs):
        print("EXIT", args, kwargs)
    def __enter__(self):
        print("Enter")
    def __getattr__(self, name):
        print("A getattr")

print(A.course)

with A() as a:
    print("Inside")
```

```py
# Calling the constructor of the parent class using the super will call the constructors
#  of the multiple inherited class only once but using the MRO
class A:
    def __init__(self):
        super().__init__()
        print("A")

class B:
    def __init__(self):
        super().__init__()
        print("B")

class C(A,B):
    def __init__(self):
        super().__init__()
        print("C")
C()
```

### Encapsulation

- Encapsulation is the property of OOPs under which we can hide the properties of a Class by making its members private. And then making the Getter and Setter Methods to modify and Access the property.

```py
# - Example 1
class A:
    __a = 12
    def __init__(self):
        self.a = 2
        self.__a = 3

print(A.__a)
print(A().a)
print(A().__a)

# - Example 2
class Test:
  def __init__(self, a, b):
    self.__a = a  # private variable
    self.__b = b
    self._c = 123 # protected Variable
  # Setter Methods
  def setValue(self, a, b):
    # here we can add restriction
    self.__a = a
    self.__b = b
  # Getter Methods
  def getValue(self):
    return self.__a, self.__b

  t = Test(12, 13)
  print(t.getValue())

  t.setValue(120, 1231)
  print(t.getValue())

  print(t._c)
  t._c = 12345
  print(t._c)

# property
class A:
    def __init__(self):
        self.__n = 123
    def getN(self):
        return self.__n + 33
    def setN(self, n):
        self.__n = n
    n = property(getN, setN)

a = A()
print(a.n)
a.n = 12
print(a.n)
# Second Way
class A:
    def __init__(self):
        self.__n = 123
    @property
    def n(self):
        return self.__n
    @n.setter
    def n(self, n):
        self.__n = n

a = A()
print(a.n)
a.n = 12
print(a.n)
```

### Polymorphism

- Polymorphism means having many forms.
- Types
  - Constructor\*
  - Methods\*
  - **Operator**
- Overloading

```py
class Student:
    def __init__(self, rollNo, name):
        self.rollNo = rollNo
        self.name = name

    def __add__(self, x):
        return str(self.name) + str(x.name)

    def __mul__(self, x):
        return 'Could not multiply'

    def __str__(self):
        return self.name


s = Student(101, "Sachin")
s1 = Student(102, "Rajneesh")

# print(s + s1)
# print(s*s1)
# print(s)
print(repr(s))
print(s)
# this will work when we define __add__ method in the Student class
```

- Methods Overloaded of Operators

- Overriding

```py
class A:
    def home(self):
        print(1)

    def vehicle(self):
        print(2)


class B(A):
    def vehicle(self):
        print(3)


obj = B()

obj.home()
obj.vehicle()
```

### Abstraction

- Abstraction is a process of hiding the implementation details from the user.
  - Abstract method
  - Abstract class

```py
from abc import ABC, abstractmethod


class Car(ABC):
    wheels = 4

    @abstractmethod
    def start(self):
        pass

    @abstractmethod
    def stop(self):
        pass

class Audi(Car):
    def start(self):
        print("Car Start")

    def stop(self):
        print("Car Stop")

    def open_roof(self):
        print("Open Roof")

    def close_roof(self):
        print("Close Roof")

c1 = Audi()
c1.stop()
c1.close_roof()
```

### Questions

```py
# Q - difference b/w + and +=
a= [1,2,3]
b = (2,3)
a +=b
# a = a + b # error
print(a)

# Q-
class A:
        def __b__(self):
                return B()
        def __int__(self):
                return 12
        def __float__(self):
                return 12.2

print(int(A()))
print(float(A()))
```

## Python OOPs Part - 3

### User Defined Exception

- To make our exception we need to make a `class` that is inherited form the `Exception` class

```py
class ToYoungEx(Exception):
  def __init__(self, msg):
    self.msg = msg

age = 10
if age < 18:
  raise ToYoungEx("You are young")
```

### Raising Exceptions

- We use the `raise` keyword to raise the exception explicitly.

```py
raise ZeroDivisionError
raise ZeroDivisionError("My Raising")
```

### Extending Thread Class

```py
import threading

class MyThread1(threading.Thread):
  def run(self):
    for _ in range(10):
      print("****")

def f2():
  for _ in range(10):
    print("----")

t1 = MyThread1()
t1.start()
f2()
```

- Using method inside the Thread class object

```py
import threading as t

class c1:
  def m1(self):
    for _ in range(10):
      print("****")

def f3():
  for _ in range(10):
    print("----")

ob1 = c1()
t1 = t.Thread(target=ob1.m1)
t1.start()
f3()
```

## Python Multi-threading

- **Multitasking** - doing several tasks simultaneously.
- Types of multitasking

  - **Process based** (os level) - Executing several task simultaneously where each task is in a separate independent process

- **Multithreading** - Executing several task simultaneously where each task is a separate independent part of the same program and each independent part is called thread.
  <!-- - Thread scheduler allocate the cpu to the threads -->
- Need and Benefits of the threading
  - To separate a big task into small independent task called threads
  - It help in reducing the execution time and improve the performance because tasks are now executed simultaneously.
- Application of the Multi threading
  - Computer Games
  - Web Browsers
  - IDEs
  - Web Servers

### Ways of creating the thread

- Using function
- By extending the Thread class

```py
import threading as t

def f1():
  for _ in range(10):
    print("****")

def f2():
  for _ in range(10):
    print("----")

t1 = t.Thread(target=f1)
t1.start()
f2()
```

- Parameterised Function inside thread

```py
import threading

def m1(x):
  for i in range(x):
    print(i, "1")

def m2(x):
  for i in range(x):
    print(i, "222222")

t1 = threading.Thread(target=m1,args=(10,))

t1.start()
m2()
```

- Joining two or more threads

- Getting the current thread name

```py
import threading
print(threading.current_thread().getName())

threading.current_thread().setName("My main Thread")
print(threading.current_thread().getName())
```

### Thread Sleep

```py
import threading as t
import time

def f1():
  for _ in range(10):
    print("****")
    time.sleep(1)

def f2():
  for _ in range(10):
    print("----")
    time.sleep(0.5)


t1 = t.Thread(target=f1)
t1.start()
f2()
```

### Daemon Thread

- Thread that work in background, purpose is to provide support to the main thread
- garbage collector is a daemon thread

```py
import threading as t

def f1():
  for _ in range(10):
    print("*****")

def f2():
  for _ in range(10):
    print("----")

t1 = t.Thread(target=f1)
t1.setDaemon(True)
# t1 = t.Thread(target=f1, daemon=True)
t1.start()  # we cannot create a thread daemon after it has started so we have to set daemon to a thread before it to start

print(t1.daemon)
print(t1.isDaemon())

# checking the current thread is daemon or not
print(t.current_thread().isDaemon())
print(t.current_thread().daemon)
```

### Time Difference

```py
import time
import threading as t

a = 10000000
def f1():
  for _ in range(a):
    pass

def f2():
  for _ in range(a):
    pass

# calling function in multiple thread
start_time = time.time()
t1 = t.Thread(target=f1)
t1.start()
f2()
end_time = time.time()
print("T1 = ", end_time - start_time)

# Calculating by calling in same thread
start_time = time.time()
f1()
f2()
end_time = time.time()
print("T1 = ", end_time - start_time)
```

## Builtin Modules

```py
# /////// Calender
import calendar as cal

print(cal.weekheader(1))
print(cal.month(2019, 12, 15))
print(cal.monthcalendar(2019, 12))
print(cal.calendar(2019, 2,2, 4, 1))
print(cal.weekday(2019, 12, 25))
print(cal.isleap(2019))
print(cal.leapdays(2000,2005))

# ///// cmath
import cmath
n = 4 + 4j
print(cmath.sqrt(n))

# solving the quadratic equation ax**2 + bx + c = 0
import cmath
a = 1
b = 5
c = 6
d = (b ** 2) - (4 * a * c)
sol1 = (-b - cmath.sqrt(d)) / (2 * a)
sol2 = (-b + cmath.sqrt(d)) / (2 * a)
print("The solution are {0} and {1}".format(sol1, sol2))

# //////  os
# WOrking with Directories
import os
os.getcwd()
os.getcwdb() # Get current Working Directory
os.chdir('D:\\Python') # Changing the Directory
os.listdir()
os.listdir('E:\\') # List the Directories and Files
os.mkdir('test') # Make a New Directory
os.rename('test','new_one')# Renaming a Directory
os.rmdir('new_one')## Removing a Directory
# NOTE: `rmdir()` can only remove a empty directory. To remove a directory containing file or other directories we can use `shutil` module as follows
import shutil
shutil.rmtree('test')


# ////// TextWrap
import textwrap

a = "ABCDEFGHIJKLIMNOQRSTUVWXYZ"
# First Way
print("\n".join(textwrap.wrap(a, 4)))
print(textwrap.shorten(a,width=20))

# Using the TextWraper Class
w = textwrap.TextWrapper(width=4)
print('\n'.join(w.wrap(a)))
print(w.fill(a))

# # ////////////////////////////
# # turtle
# import turtle as t

# a = t.Turtle()
# # a.speed(30)

# def square(d):
#     for i in range(d):
#         w = 90 + (10 * i)
#         for _ in range(4):
#             a.forward(w)
#             a.right(90)

# square(40)
```

### datetime

```py
# /////// datetime
import datetime

print(datetime.datetime.now())
print(datetime.date.today())
print(datetime.date(2019, 12, 27))
print(datetime.date.fromtimestamp(1326212121))
print(datetime.date.today().month)
print(datetime.date.today().day)
print(datetime.date.today().year)
```

- datetime : module

  - date
    class date(year, month, day)
    - year
    - month
    - day
    - max
    - min
    - weekday()
    - today()
    - replace()
    - isocalendar()
      - Return a 3-tuple containing ISO year, week number, and weekday
    - date.isoformat()
      - string in ISO 8601 format, YYYY-MM-DD.
    - date.isoweekday()
      - Return the day of the week represented by the date. - Monday == 1 ... Sunday == 7
  - time
    class time(hour, minute, second, microsecond) \* all arguments are optional
    hour : 0-23
    minute : 0-59
    second : 0-59
    microsecond : 0..999999
    - hour
    - isoformat()
      Return string in ISO 8601 format, [HH[:MM[:SS[.mmm[uuu]]]]][+hh:mm].
    - min
    - max
    - microsecond
    - minute
    - replace()
    - second
  - datetime
    class(year, month, day, *hour, *minute, *second, *microsecond)

    - date()
    - day
    - hour
    - isocalendar()
    - isoformat()
    - isoweekday()
    - max
    - min
    - microsecond
    - minute
    - month
    - replace
    - second
    - now()
    - time()
    - today()
    - now() vs today()
    - weekday()
    - year
    - strftime(format)

  - formats
    %a Weekday, short version Wed
    %A Weekday, full version Wednesday
    %w Weekday as a number 0-6, 0 is Sunday 3
    %d Day of month 01-31 31
    https://www.w3schools.com/python/python_datetime.asp

### json

```py
# ///////// json
import json
a = {"name": "John", "age": 31, "Salary": 25000}
b = json.dumps(a) # python to JSON done
print(b)
print(type(b))
c = json.loads(b) # JSON to python object
print(type(c))
print(c)

# - Writing and Reading the JSON Data to the File
import json
num = [1, 2, 3, 4, 5]
filename = "new.json"
with open(filename, "w") as f:
    json.dump(num, f)

with open(filename) as f:
    data = json.load(f)

print(data)
```

## Python Logging

- Logging is a means of tracking events that happen when some software runs.
- Software development phases
  - developing
  - debugging
  - running
  - Testing
- **Without Logging**
  - It is very hard to detect the problem.
  - And even if we are able to detect the cause, it will consume a lot of time
- **With logging**
  - By using log files we can easily do debugging and, can easily determine the cause of the problem
  - We can track certain events have occurred
- Logging Levels
  - CRITICAL(50)
    <!-- This tells serious error, indicating that the program itself may be unable to continue running -->
  - ERROR(40)
    <!-- This tells that due to a more serious problem, the software has not been able to perform some function -->
  - WARNING(30)
    <!-- These are used an indication that something unexpected happened, or indicative of some problem in the near future -->
  - INFO(20)
    <!-- This is used to Confirm that things are working as expected -->
  - DEBUG(10)
    <!-- This is used to give Detailed information, typically of interest only when diagnosing problems. -->
  - NOTSET(0)

#### Usage

```py
import logging as log
log.basicConfig(filename='./app.log',level=log.ERROR)
log.debug('This is a Message')
log.info('This is a Message')
log.warning('This is a Message')
log.error('This is a Message')
log.critical('This is a Message')
```

#### Logging Parameters

- Name of the file
- Level messages
- file mode
- Format of the Output
  - filename
  - message
  - funcName
  - lineno
  - pathname

> **NOTE**: For More Information Visit
> [https://docs.python.org/3/library/logging.html#logrecord-attributes](https://docs.python.org/3/library/logging.html#logrecord-attributes)

- Examples

```py
import logging as log

log.basicConfig(filename="./app.log", filemode="w",format="%(filename)s %(message)s %(lineno)s %(pathname)s")

log.error("error message")
log.critical("critical message")
log.warning("warning message")
log.info("info message")
log.debug("debug message")


# logging.basicConfig(filename='./app.log') # default level WARNING
# - If no file is set then the log message will be displayed to the cmd
# - If the file is configured then messages will be appended to that file
# - All the messages above the logging level will be displayed
#   - Exaxmple: If the level is Warning then all the log above WARNING level will be displayed like WARNING, ERROR, CRITICAL
```

```py
import logging as log

# log.basicConfig(filename="./app.log")
log.basicConfig(filename="./app.log", filemode="w",format="%(levelname)s %(asctime)s %(filename)s %(lineno)d %(message)s", level=log.NOTSET)

# Production
log.info("A new request come")
try:
    x = int(input("Enter a: "))
    y = int(input("Enter b: "))
    print(x / y)
except ZeroDivisionError as msg:
    print("Cannot divide by Zero")
    # log.error(msg)
    log.exception(msg)
except ValueError as msg:
    print("Enter only int value")
    log.exception(msg)
log.info("Request processing complete")
```

## Python Testing

- By doing code testing we can check that our code work as supposed to work.
- Need of Testing
  - Catching the problems before the user encounter them.

### Assertion

- Assert statement has a condition or expression which is supposed to be always true. If the condition is false assert halts the program and gives an AssertionError
- Is used as debugging tool as it halts the program at the point where an error occurs.
- Assert statement Syntax

```py
assert <expression>
assert <expression>, <error message>
```

```py
# Syntax-1
a = 12
assert a <=1

# Syntax-2
a = 12
assert a <=1, 'This is not valid'
```

### Python Snippet for Debugger

```py

import pdb

pdb.set_trace()

# quit
```

### Doc test

- doctest search for the test in doc string written as python interactive session

```py
# Writing test
'''
>>> fact(5)
120
'''

def fact(n):
  f = 1
  for i in range(1, n+1):
    f *=i
  return f

# calling test
import doctest
doctest.testmod()

# running file
# python filename.py -v
# python -m doctest -v filename.py   # directly calling testmod()
```

### Running test written in another file

```txt
# test.txt
'''

>>> from demo1 import fact
>>> fact(5)
120

'''
```

```py
# demo1.py
def fact(n):
  f = 1
  for i in range(1, n + 1):
    f *= i
  return f
```

```py
# test1.py
import doctest
doctest.testfile('test.txt')
```

### Unit testing

To perform unit testing we use the module `unittest`

- Testing Function

  - Example

```py
import unittest as ut

    def format_name(f, l, m=""):
        if m:
            m = m + " "
        return f + " " + m + l

    class NameTest(ut.TestCase):
        def test_1(self):
            self.assertEqual(
                format_name("Anmol", "Sharma", m="Kumar"), "Anmol Kumar Sharma"
            )

ut.main()
```

- Here,

  - we need to make a class which is inherited from `TestCase`
  - The method name inside the Testing class should be start with `test_` which make them run automatically

- Testing Class

  - Example

```py
import unittest as ut

class NameFormat:
    def __init__(self, f, l):
        self.f = f
        self.l = l

    def format_name(self):
        return self.f + " " + self.l

class NameTest(ut.TestCase):
    def test_1(self):
        nf = NameFormat("Anmol", "Kumar")
        self.assertEqual(nf.format_name(), "Anmol Kumar")

ut.main()
```

- `setUp()` method - inside the Testing class is called before the other `test_` method, so it can be used to place the code need to run before performing the tests

## Python Regular Expression

- Is a sequence of characters that define some search pattern which will be used for finding matches in a string

### Meta Characters

- are the special characters that have special meaning in regex pattern

```py
# [] - character set
# . - (period) match any character except new line
# ^ - (caret) match beginning of a string and while used inside of the character set it do the opposite work
# $ - (dollar) match end of a string
# [^ ] - match character not in bracket
# {} - braces
# | - alteration
# () - group
# \ - backslash
```

- Quantifiers

```py
# * - 0 or more
# + - 1 or More
# ? - 0 or one
# {3} - Exact Number
# {3,4} - Range of Numbers (min, max)
```

- SPECIAL SEQUENCES

```py
# \A -  Matches if the specified characters are at the start of a string.
# \b - Matches if the specified characters are at the beginning or end of a word.
# \B - (opposite of \b)Matches if the specified characters are not at the beginning or end of a word
# \d - Matches any decimal digit. Equivalent to [0-9]
# \D - Matches any non-decimal digit. Equivalent to [^0-9]
# \s - Matches where a string contains any whitespace character (space, tab, newline)
# \S - Not a Whitespace (space, tab, newline)
# \w - Word Character(a-z, A-Z, 0-9, _)
# \W - Not a Word Character
# \Z -  Matches if the specified characters are at the end of a string.
```

- Groups

```py
# (s|rs|s) - this will match s or rs or s
```

- SETS

```py
# [arn]
# [a-n]
# [^arn]
# [0123]
# [0-9]
# [0-5][0-9]
# [a-zA-Z]
# [+]
```

```py
import re

p = "^a...s$"  # 5 char string starting with 'a' and ending with 's'
s = "abyss"

p = "[abc]"  # check that string contain 'abc' or not
s = "abcd"

p = "[a-e]"  # check that string contain 'a to e' or not
s = "abc defgh"

p = "[1-4]"  # check that string contain '1 to 4' or not
s = "123 445"

p = "[0-39]"  # check that string contain '0 to 3 and 9' or not
s = "123934"

# ^ will revert the result
p = "[^abc]"  # any character other than 'abc'
p = "[^0-9]"  # any non-digit character

res = re.match(p, s)
if res:
    print(True)
else:
    print(False)

# FUNCTIONS
# findall() - return the list containing all matches
s = "Hello world of the Python"
print(re.findall("th", s))

# search()
# split()
# sub()


sentence = """
123--123--145
123.432.543
"""

pattern = re.compile(r"\d\d\d[.-][-]?\d\d\d[.-][-]?\d\d\d")

matches = pattern.finditer(sentence)


for match in matches:
    print(match)


pat = re.compile(r"\W")
s = "12av$"


# print(pat.search(s).start())
print(pat.findall(s))
# res = pat.finditer(s)
# print(res.__next__().group())


import re

# # re.findall - return list of all the matches
# s='Abc abc def Abc'
# pat = r'Abc'
# result = re.findall(pat, s)
# print(result)


# # re.finditer - return a iter object of all the mathces that return the match object
# s='AbcAbc'
# pat = r'Abc'
# result = re.finditer(pat, s)
# print(next(result))
# print(next(result))


# # re.match - match the pat at the start of the string
# s='Abc'
# pat = r'Abc'
# result = re.match(pat, s)
# print(result)


# # re.fullmatch - match the complete pattern with str
# s='Abc'
# pat = r'Abc'
# result = re.fullmatch(pat, s)
# print(result)


# # re.search - search the whole stringfrom starting
# s='def Abc Abc'
# pat = r'Abc'
# result = re.search(pat, s)
# print(result)

# # re.split(pattern, string, maxsplitCount)
# s = "XyzaDeeafSdfaWer"
# pat = r"a"
# result = re.split(pat, s, 2)
# print(result)


# # re.sub(pattern, replacementString, string, count) - substitute
# s='Abc Abc Abc'
# pat = r'Abc'
# result = re.sub(pat,"Xyz", s, 2)
# print(result)


# # re.subn - # return tuple containing new_string and count
# s='Abc Abc Abc'
# pat = r'Abc'
# result = re.subn(pat, "Def", s, 2)
# print(result)


pat = re.compile(r"abc")
# print(pat)
# print([i for i in dir(pat) if not i.startswith('_')])
s = "abc"
res = pat.match(s)


# # Match Object
# s='Abc'
# pat = r'Ab(c|d)'
# result = re.search(pat, s)
# print([i for i in dir(result) if not i.startswith('_')])
# print(result.string)
# print(result.re)

# print(result.pos)
# print(result.endpos)

# print(result.group()) # Return the string matched by the RE
# print(result.start()) # Return the starting position of the match
# print(result.end()) # Return the ending position of the match
# print(result.span()) #Return a tuple containing the (start, end) positions of the

s = "1a2b3c11sshhs9sus9sus"
pat = r"\D{2,5}"
result = re.findall(pat, s)
# print(result)


# 1
s = "Hello World"
pat = r"hello"
result = re.findall(pat, s, flags=re.I)
# print(result)

# 2
s = "Abcdef"
pat = r"^Ab.+ef$"
result = re.findall(pat, s)
# print(result)

# 3
s = "Abcdef12"
pat = r"."
result = re.findall(pat, s)
# print(result)


# Q - check that string should starts with the 'hello ' and then any character can come
s = "hello Asdf"
pat = r"hello .+"
result = re.findall(pat, s)
# print(result)


# Q - write a function to check that the string passed to it only contain the alphabets and numbers?
s = "abc@34@"
pat = r"^[a-zA-Z0-9]+$"
result = re.findall(pat, s)
# print(result)


# Q - write a function to check that the given string only starts with the https://
s = "https://google.com"
pat = r"^https://.+"
result = re.findall(pat, s)
# print(result)

# Q - Write a function that check that the given string ends with the @gmail.com
s = "abc@gmail.com"
pat = r".+@gmail.com$"
result = re.findall(pat, s)
# print(result)


# matches the a followed by one or more b's
s = "abbcdefabc"
pat = r"ab*"  # matches ab, abb, abbb
result = re.findall(pat, s)
# print(result)

# matches the a followed by zero or more b's
s = "abbcdeac"
pat = r"ab?"  # matches a, ab
result = re.findall(pat, s)
# print(result)

# matches the a followed by three b
s = "abb ab abbb abbbbb"
pat = r"ab{3}"
result = re.findall(pat, s)
# print(result)

# matches a follower by 2 or 4 b
s = "abb ab abbb abbbbb"
pat = r"ab{2,4}"
result = re.findall(pat, s)
# print(result)

# matches a valid identifer but only have small alphabets and one underscore
s = "abcde"
s = "abc_def"
s = "abc_def_ghi"
pat = r"^[a-z]+_[a-z]+$"
result = re.findall(pat, s)
# print(result)

# matches a word starting with alphabet
s = " abc"
s = "1abc"
s = "abc"
pat = r"^\w+"
pat = r"^\w"
result = re.findall(pat, s)
# print(result)

# matches a word ending with a string and with an optional punctuation
# the marks, such as full stop, comma, and brackets, used in writing to separate sentences and their elements and to clarify meaning.
s = "abc,"
s = "abc"
pat = r"\w+\S*"
result = re.findall(pat, s)
# print(result)

# matches the space and newline,tab
s = "abc "
s = """
ab  \t c
"""
pat = r"\s"
result = re.findall(pat, s)
# print(result)


# remove all the spaces from the string
s = "  ahd sksk kkksks  ksk    kk  "
pat = r" "
result = re.sub(pat, "", s)
# print(result)

# remove all the whitespaces from the string
s = "  ahd sksk\n \t kkksks  ksk\n\t    kk  "
pat = r"\s"
result = re.sub(pat, "", s)
result = re.subn(pat, "", s)  # get the count how much whitespaces have been removed
# print(result)

# find a 3 digit number followed by hiphen and then 2 digit number
s = "123-45 12-43 345-552"
pat = r"\d{3}-\d{2}"
# pat = r"(\d{3})-(\d{2})"
result = re.findall(pat, s)
# print(result)

s = "123-45 12-43 345-552"
pat = r"(\d{3})-(\d{2})"
result = re.match(pat, s)

print(result.group(1))
print(result.group(2))
# print(result.group(3)) # error
```

## Python GUI Programming

- Graphical User Interface
- There are mainly three geometry manager classes.
  - pack()
  - grid()
  - place()

### MAIN WIDGETS

- Button()
- Canvas()
- CheckButton()
- Entry()
- Frame()
- Label()
- Listbox()
- MenuButton()
- Menu()
- Message()
- RadioButton()
- Scale()
- Scrollbar()
- Text()
- TopLevel()
- SpinBox()
- PannedWindow()
- It provides the following top-level windows:
  - tk_chooseColor - pops up a dialog box for the user to select a color.
  - tk_chooseDirectory - pops up a dialog box for the user to select a directory.
  - tk_dialog - creates a modal dialog and waits for a response.
  - tk_getOpenFile - pops up a dialog box for the user to select a file to open.
  - tk_getSaveFile - pops up a dialog box for the user to select a file to save.
  - tk_messageBox - pops up a message window and waits for a user response.
  - tk_popup - posts a popup menu.
  - toplevel - creates and manipulates top level widgets.
- EVENTS
- NOTE : https://www.geeksforgeeks.org/python-gui-tkinter/
- https://tkdocs.com/tutorial/index.html
- https://wiki.python.org/moin/TkInter
- https://www.python-course.eu/tkinter_layout_management.php

## Async and Await

```py
## Asynchronous Implementation
import asyncio


async def count():
    print("One")
    await asyncio.sleep(1)
    print("Two")


async def main():
    await asyncio.gather(count(), count(), count())


asyncio.run(main())

## Synchronous Implementation
import time


def count():
    print("One")
    time.sleep(1)
    print("Two")


count()
count()
count()
```

## Builtin Functions

```py
# pow()
print(pow(2,3)) # 2 ** 3
print(pow(2,3, 3)) # (2 ** 3) % 3

print(ord("a")) # ord(character)
print(chr(97)) # chr(unicode)

print(abs(-123))

# round()
print(round(12.6))
print(round(12.5))
print(round(12.5, 0))
print(round(12.444444, 3))

# eval()
print(eval("1+2+3"))
a, b = 12, 13
print(eval("a + b"))


## ascii()
# -American Standard Code for Information Interchange
print(ascii("Python is interesting"))
print(ascii("Pythön is interesting"))
print("Pyth\xf6n is interesting")

## repr()
s = """
Hello in the new line
this is new line
"""
print(str(s))
print(repr(s))

## hash()
# - encode the data into unrecognisable value
# - Objects hashed using hash() are irreversible, leading to loss of information.
# - hash() returns hashed value only for immutable objects, hence can be used as an iterators to check for mutable/immutable objects.
# Note By default, the __hash__() values of str and bytes objects are “salted” with an unpredictable random value. Although they remain constant within an individual Python process, they are not predictable between repeated invocations of Python.

## exec()
program = 'a = 5\nb=10\nprint("Sum =", a+b)'
exec(program)
program = input("Enter a program:")
exec(program)

## compile()
# - make a code object of the string
code = 'a = 5\nb=6\nsum=a+b\nprint("sum =",sum)'
codeObj = compile(code, "anyname", "exec") # anyname is used for runtime exception
exec(codeObj)
print(codeObj)
help(compile)

## zip()
a = [1, 2, 3, 4]
b = ("A", "B", "C")

c = zip(a,b)
print(*c)
print(c)
print(type(c))
print(next(c))
```

## Iterator and Generators

```py
## Iterator - https://www.programiz.com/python-programming/iterator
# - Benefits of using the Iterator
#   - Size is smaller that list, tuple
# EX:
import sys

a = [1, 2, 3]
print(sys.getsizeof(a))

a = iter([1, 2, 3])
print(sys.getsizeof(a))

a = (1, 2, 3)
print(sys.getsizeof(a))
#   - value is generated when they are required
# EX:
a = iter(range(10000))  # values are only generated when they are required
print(sys.getsizeof(a))
a = list(range(10000))  # value get generated
print(sys.getsizeof(a))

print(sys.getrefcount(a))


# - Converting an datatype to Iterator
a = [1, 2, 3, "sachin"]  # converting a list to a iterator
b = iter(a)

while True:
    try:
        print(next(b))
    except:
        break

# User defined iterator or Adding Iterator to a Class
class PowTwo:
    def __init__(self, a=0):
        self.a = a
        self.n = 0

    def __iter__(self):
        self.n = 0
        return self

    def __next__(self):
        if self.n <= self.a:
            result = self.n
            self.n += 1
            return result
        else:
            raise StopIteration


a = PowTwo(4)
print(*iter(a))

i = iter(a)
next(a)
print(next(i))
print(next(i))


# Infinite iterator
inf = iter(int, 2)

print(next(inf))

a = [1, 2, 3, 4, 5]
b = iter(a)

print(b.__next__())
print(next(b))
print(b)


# Implementation of the for loop
# for element in iterable:
iterable = [1, 3, 2, 4, 5]
iter_obj = iter(iterable)
while True:
    try:
        element = next(iter_obj)
        print(element)
    except StopIteration:
        break

## Genterator - https://www.programiz.com/python-programming/generator

# a function containing the yield is called generator
def m1():
    yield 1
    yield 2
    yield 3


# generator function
for i in m1():
    print(i)

# generator object
a = m1()

print(a.__next__())

# third
i = iter(m1())

print(next(i))


import sys


def a1():
    yield 1
    yield "asndnnfn"
    yield 3


b = a1()

print(sys.getsizeof(a))
```

## Operators

### Arithmetic Operator

```py
# (+)   - Addition
# (-)   - Subtraction
# (*)   - Multiplication
# (/)   - Division
# (%)   - Modulo
# (//)  - Floor Division
# (**)  - Exponent / Power Operator
```

### Comparison Operator

```py
# (>)  # greater than
# (<)  # less than
# (<=) # less than or equal to
# (>=) # greater than or equal to
# (==) # equal to
# (!=) # not equal to
# (is, is not) # Identity operator
# (in, not in) # Membership operator
```

### Logical Operator

```py
# and, or, not

# after operation the operand is returned
# if first value is true then it will be returned
# if first value is false then second value will be returned
```

### Assignment Operator

```py
# = assignment operator
# Compound Assignment Operators
# (+=,  -=, *=, /=, %=, //=, **=, &=, |=, ^=, >>=, <<=)

# x += 2 ==> x = x + 2
```

### Operator Precedence

```py
# operator precedence : not ==> and ==> or

a = 30
b = 20
c = 10
d = 5

print((a + b) * (c / d))  # 100.0
print(a + (b * c) / d)  # 70.0
  # 32

# precedence decrease
# 1. parenthesis
# 2. unary operator
# 3. binary operator
# 4. ternary operator

# Operator Percedence Python Docs
# https://docs.python.org/3/reference/expressions.html#operator-summary

# swapping of the values
a = 10
b = 30
a, b = b, a

# Multiple Assignment
a, b, c = 12, 13, 14

### Operator Chaining
# chaining - if all the sub expression result is true then true otherwise false

print(1 > 2 < 3 >= "hello" < 5)
print(10 == 12 == 12 == 40)
```

## Others Data types

### Bytes

```py
# How to make a byte datatype
# bytes - it represents a group of byte numbers just like an array
# bytes and bytearray hold only value between 0 < 256 not 256 included
# insertion order is preserved
# bytes are immutable
# bytes are non growable
# bytes elements can only be int values
# Byte objects are sequence of Bytes, whereas Strings are sequence of characters.
# Byte objects are in machine readable form internally, Strings are only in human readable form.
# Since Byte objects are machine readable, they can be directly stored on the disk. Whereas, Strings need encoding before which they can be stored on disk.

# Q - How to make bytes
a = [12, 25, 14, 15, 255, 0]
b = {12, 14}
c = (12, 14, 32)
x = bytes(a)
y = bytes(b)
z = bytes(c)
print(x)
print(y)
print(z)

print(x)
print(type(x))

# Q - can we change the content of an bytes element
a = (12, 13, 14)
b = bytes(a)
# b[0] = 120  # not possible because bytes is immutable
for i in b:
    print(i)

# Q - can we grow the size of the bytes
a = [12, 13, 14]
b = bytes(a)

# b.append(123) # error

# Q - can we make the bytes of the character
a = ["a", "b"]
b = bytes(a)

# Q - can we make the bytes of the floating values
a = [12, 13.0]
b = bytes(a)

# Q - can we make the bytes from the binary values
a = [0b111, 0b1010]
b = bytes(a)

```

---

### Bytearray

```py
# bytearray same a bytes except that it is mutable
# bytearray is growable and reduaceable

# Q - how to make bytesarray
a = [12, 13, 14, 5]
b = bytearray(a)

print(b)
print(type(b))

for i in b:
    print(i)

# Q - how to change the content of a element of the bytearray
a = [12, 13, 14, 5]
b = bytearray(a)

b[0] = 120
print(b)
b[4] = 113  # Error
print(b)

# Q - can we add more elements to the bytearray
a = [12, 13, 14, 5]
b = bytearray(a)

for i in b:
    print(i)

b.append(123)

for i in b:
    print(i)

print(bytearray("Python is interesting.", "utf-8"))

# encode and decode nuilt in function
# print('abc'.encode('UTF')[0])
# print(b'abc'.decode('utf-8'))

# Time difference between the bytearray and the string
import time as t

start = t.time()
a = bytearray("Hello Python", "utf-8")
for i in range(100000):
    a.append(1)
end = t.time()
b = bytes(a)
print(type(b))  # now we cannot update the value of the b because it is immutable
print(end - start)

start = t.time()
a = "Hello Python"
for i in range(100000):
    a += "1"
end = t.time()
print(end - start)

# A bytearray is very similar to a regular python string (str in python2.x, bytes in python3) but with an important difference, whereas strings are immutable, bytearrays are mutable, a bit like a list of single character strings.

# This is useful because some applications use byte sequences in ways that perform poorly with immutable strings. When you are making lots of little changes in the middle of large chunks of memory, as in a database engine, or image library, strings perform quite poorly; since you have to make a copy of the whole (possibly large) string. bytearrays have the advantage of making it possible to make that kind of change without making a copy of the memory first.

a = [1,2,3,11]
b = bytearray(a)
# b.append('a')
print(b)

a = bytearray("Python is interesting.", 'utf-8')
a = bytes('abcdef', 'ascii')
a = bytes('abcdef', 'utf-8')
a = bytes([1,2,3,4,5])
print(a.upper())
```

---

### Frozenset

```py
# frozen set are similar to set but they are immutable

a = [1, 23, 4, 33, 23]
b = frozenset(a)  # making a list frozen set
print(b)
print(*b)

# METHOD OF Frozen Set
# b.copy
# b.difference
# b.intersection
# b.isdisjoint
# b.issubset
# b.issuperset
# b.symmetric_difference
# b.union
# check a frozen set id the supset of another set
print(b.issubset({1, 33, 23, 4, 32, 5, 67}))

# check wether this frozenset contain another set
print(b.issuperset({23, 1}))

# frozen set of the dictonary
d = {"id": 1001, "name": "Sachin Kumar", "branch": "CSE"}
e = frozenset(d)
print(e)  # e contain the frozenset of the keys of the d


# frozen set from tuple
f = (12, 21, 34, 55, 66)
g = frozenset(f)
print(g)

# frozen set of the set
h = {"sachin", "Rajneesh", "Vikas", "sachin"}
i = frozenset(h)
print(i)
```

---

### Range

```py
# to display the content of the range we need to convert it to list, tuple, ...
# it take only int values
# a = range(12.3) # not allotted
# range is immutable
# it represent a sequence of values
# slice operator alloted

a = range(4)
a = range(4, 10)
a = range(2, 9, 2)
a = range(0b111, 0b1111)

a = [1, 10]
print(*range(*a))

print(a)
print(list(a))
print(tuple(a))
print(set(a))
print(frozenset(a))
```

---

### Enumeration

```py
# Enumerate - contain the index and the item in a tuple
print(enumerate([1, 2, 3, 4]))
print(*enumerate([1, 2, 3, 4]))
print(enumerate("12", 2))
print(enumerate(12, 2))


lis = [1, 2, 3, 4, 5]

a = enumerate(lis)
print(type(a))
print(a)
print(*a)
print(next(a))

for i, x in enumerate([1, 2, 3, 4]):
    print(i, x)

for i, j in enumerate("123", 1):
    print(i, j)

for i, j in enumerate([11, 22, 33, 44], 2):
    print(i, j)
```

## PEP

- PEP(Python Enhancement Proposal)
- PEP8 -- Style guide for Python Code

- **Indentation** - It is recommended to use four spaces not the Tab, so we need to configure Text Editor to set spaces in place of tab. Also we should not mix tabs with spaces.
- **Line Length** - It is recommended to have 79 characters in a line.
- **Blank Lines** - It is recommended to place a blank line between 2 sections.
- Styling Functions

- Styling Classes

  - Class Names Should be written in _CamelCase_
  - Every Class should have a _docstring_
  - We should use one blank line between methods of a class
  - We should use two blank line between two classes

- **NOTE:**
  - Resource - [https://www.python.org/dev/peps/](https://www.python.org/dev/peps/)
  - PEP8 [https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/)

```py
# # Python 3.8
# a = 11
# if (b := a) > 10:
#     print(f"The value of b is {b} and is greater than

# annotations in python
# - Positional only(/)
# - Keyword Only(*)

# def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
#       -----------    ----------     ----------
#         |             |                  |
#         |        Positional or keyword   |
#         |                                - Keyword only
#          -- Positional only

# Ellipsis in python
# a = [1, 2, 3]
# b = [11, 22, 33]
# print(type([... for i in a][0]))

```

## String Formatting

```py
# Q - Format the output
for x in range(1, 11):
    print("{0:3d} {1:6d} {2:9d}".format(x, x * x, x * x * x))

## String Formatting
# formatting into tables
table = {"Sjoerd": 4127, "Jack": 4098, "Dcab": 8637678}
print("Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}".format(**table))

# {} ==> Replacement operator / Template string
n = "Asdf"
s = 10000
d = "CSE"
print("{} your salary is {} your dept is {}".format(n, s, d)) # syntax 1
print("{0} your salary is {1} your dept is {2}".format(n, s, d)) # syntax 2
print("{x} your salary is {y} your dept is {z}".format(z=d, x=n, y=s)) # syntax - 3

# --- OLD WAY
# %i ==> int type
# %d ==> int type
# %f ==> float
# %s ==> str type

a, b = 10, 20
print("a value is %i" % a)
print("a value is %i and b value is %i" % (a, b))

name = "Asdf"
lis = [10, 20, 30]
print("Hello %s the list is %s" % (name, lis))

a = "Hello %s" % "Asdf"
print(a)

a = 12345
print("{:=20d}".format(a))
print("{:#=20d}".format(a))

a = 12.33333
b = "%.2f" % a
print(type(b))
print("Hel %f lo " % a)
print("Hel {} lo ".format(a))

## String Methods
a = "sachin Kuamr 12 Rajput ß from GPB"
print(a.casefold())
```

## Tasks

```py
# # ///////////////////////////
# # TO clear the output Screen
# from os import system, name

# def clear():
#     if name == 'nt': # for windows
#         _ = system('cls')
#     else: # for other
#         _ = system('clear')

# clear()

# # ////////////////////////
# # To Compile the Python file expelicitly
# import py_compile
# py_compile.compile("FILE_NAME")

# # //////////////////////////////////
# # Downloading a file using the URL
# # pip install wget
# import wget
# import requests
# key = "52b9d6f2501383361c40eacdf8d7dc68beb19aa584ee8aff2ef1f63cfbca1392"
# url = "https://api.github.com"
# url = "https://api.unsplash.com/photos/random/?client_id=" + key
# res = requests.get(url)
# import pprint
# photo_urls = res.json()["urls"]["regular"]
# pprint.pprint(photo_urls)
# # res = wget.download(photo_urls, "image.png")

# ////////////////////
# # To call all the members of a Object
# import time
# a= dir(time)
# for i in a:
#     if callable(eval("time."+i)):
#         try:
#             print(eval("time."+i+".__call__()"))
#         except:
#             pass
```

## Python Database Connectivity

- PDBC(Python Database Connectivity)
- Type of Storage
  - Temporary Storage
    - PVM(Python virtual machine) Memory area
  - Permanent Storage
    - File System
    - Database
- Types of Data
  - Text Data - name, marks
  - Binary Data - Images, Videos, Audio files
- Limitations of File System
  - Huge Data
  - No Query Language Support
  - Security
  - No mechanism to prevent duplicate data so, data inconsistency, etc
- Advantages of Database
  - Store Huge data
  - Query Language support
  - Security is more
  - data stored in form the tables
  - rules to prevent duplication

<!--
- Limitations of Database
  - cannot hold huge amount of the data like tera bytes
  - can store only structured data not the unstructured data
- Advanced data storage technologies
  - Hadoop
  - Big Data
-->

### Steps to communicate with the Database

```py
# pip install mysql-connector-python
import mysql.connector as db # importing the connector

# Establishing the Connection
con = db.connect(
  host="localhost",
  user="root",
  passwd="root",
  database="skr")

# Making the Cursor
cr = con.cursor()

# Execute the SQL Query
cr.execute()
cr.executemany()

# Fetch the results
cr.fetchone() # To fetch only one row
cr.fetchall() # To fetch all rows
cr.fetchmany(n) # To fetch n rows

con.commit() # the changes and rollback() the changes

# Close the connection
con.close()
```

### PDBC Sqlite

```py
import sqlite3 as db

con = db.connect("saturday.db")
cr = con.cursor()

cr.execute(
    """
    CREATE TABLE student (
            name text,
            id integer
        )
    """
)


cr.execute("INSERT INTO student VALUES ('Piyush', 7)")


cr.execute("SELECT * FROM student")
print(cr.fetchall())


con.commit()
con.close()
```

#### Sqlite Query

```sql
CREATE TABLE student (
    id integer,
    name text
);
```

<!--
# sqlite-demo

## Download

- Precompiled Binaries for Windows
- [https://sqlite.org/download.html](https://sqlite.org/download.html)

## Usage

```sql
- sqlite3
- .mode column
- .headers on
- .width 15 20
- .exit
- .tables
- .mode line
- .schema
- .schema student
- select type, name, Tbl_name, sql from sqlite_master order by type;
- .show
- .nullvalue 'NULL'
- .prompt 'sqlite3>  ' - change the prompt
- .dump - to output complete database to the screen
- .output ./FILE_LOCATION - to change the location to output the data
- .output stdout - to change back the location of the output to the console
- sqlite3 test.db - to open sqlite data base with the data saving location to test.db
- .read FILE_LOCATION - to read the query from a file
- .mode insert
- .mode html
- .mode list
- .mode tabs
- .mode tcl
- .mode line
- .mode csv
- .separator , - NOT complete
- .mode csv
- .output FILE_LOCATION
- .output stdout
```

## sqlite3 Viewer

- [http://inloop.github.io/sqlite-viewer/](http://inloop.github.io/sqlite-viewer/)

## Usage Python

- Accesssing using key i.e dictonary

```py
    connection.row_factory = sqlite3.Row
    row = curcsor.fetchone()
    print(row.keys{})
```
-->

### PDBC MySQL

#### Data base Queries

```sql
-- to see the list of all the databases
show databases;

-- to create a database with a name saturday
CREATE DATABASE saturday;

-- to select saturday database for performing operations
use saturday;

-- to create a table whose name is student and has two columns field id and name
CREATE TABLE student{
    id int(5),
    name varchar(20)
}

-- to see the list of all the tables in the database saturday
show tables;

-- to see the structure of the table student
desc student;

-- to add a student into the table
insert into student values('Raman', 1);

-- to see the list of all the student in the table
select * from student;

-- to update the name of the student
update student set name = 'Anmol' where name = 'Raman';

-- To delete a student row whose name is Anmol
delete from student where name = 'Anmol';
```

#### Making Connection

```py
# pip install mysql-connector
import mysql.connector as db

con = db.connect(host="localhost", user="root", passwd="root")

if con:
    print("Connected to", con.user)

con.close()
```

#### See the List of Data Bases

```py
import mysql.connector as db

con = db.connect(host="localhost", user="root", passwd="root")
cr = con.cursor()

cr.execute("show databases")

print(next(cr))

for i in cr:
    print(i)

con.close()
```

#### Create a Table

```py
import mysql.connector as db

con = db.connect(host="localhost", user="root", passwd="root", database="skr")
cr = con.cursor()

cr.execute(
    """
    CREATE TABLE student (
      name varchar(20),
      id int(10)
    )
    """
)

print(cr)
con.close()
```

#### Insert into the Data base

```py
import mysql.connector as db

con = db.connect(host="localhost", user="root", passwd="root", database="skr")
cr = con.cursor()

# Method 1
cr.execute("insert into student values('Ram', 1)")
print(cr.rowcount, " row inserted")


# Method 2
# sql = "Insert into student values(%s, %s)"
# value = ('Rohit', 2)
# cr.execute(sql, value)
# print(cr.rowcount, " row inserted")


# Method 3
# sql = "INSERT INTO student VALUES (%s, %s)"
# val = [("Virat", 3), ("Dhoni", 4)]
# cr.executemany(sql, val)
# print(cr.rowcount, " row inserted")

con.commit()
con.close()
```

#### Read from the Database

```py
import mysql.connector as db

con = db.connect(host="localhost", user="root", passwd="root", database="skr")
cr = con.cursor()

sql = "SELECT * FROM student"

cr.execute(sql)
print(cr.fetchone())

# print(cr.fetchmany(2))

# print(cr.fetchall())

# print(cr.description)
# print(cr.arraysize)

# for i in cr.fetchall():
#     print(i)

# for i in cr:
#     print(i)

con.close()
```

#### Update a value in data base

```py
import mysql.connector as db

con = db.connect(host="localhost", user="root", passwd="root", database="skr")
cr = con.cursor()

sql = "UPDATE student SET name = %s WHERE name = %s"
val = ("Raj", "Ram")

cr.execute(sql, val)
print(cr.rowcount, "row affected")

con.commit()
con.close()
```

#### Delete a row from database

```py
import mysql.connector as db

con = db.connect(host="localhost", user="root", passwd="root", database="skr")
cr = con.cursor()

sql = "DELETE FROM student WHERE name = %s"
val = ("Raj",)

cr.execute(sql, val)
print(cr.rowcount, "row affected")

con.commit()
con.close()
```

## Random

```py
a, *b, c = 1,2,3,4,5
b  # 2,3,4

# 2 power -2  == .25
# -3 power 3 == -27


# Operator chaining
# 2 > x > 5
# is equivalent to 2 > x and x > 5
```

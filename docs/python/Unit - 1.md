# Unit - 1

- [Unit - 1](#unit---1)
  - [Common Terminology](#common-terminology)
  - [Identifiers](#identifiers)
  - [Keywords](#keywords)
  - [Comment](#comment)
  - [Basic Data Types](#basic-data-types)
  - [Numbers](#numbers)
  - [Strings](#strings)
  - [Sequences](#sequences)
  - [Operators](#operators)
  - [For looping Statement](#for-looping-statement)
  - [Conversion](#conversion)
  - [Extra Material](#extra-material)

## Common Terminology

- Variable - is a storage location with a name, which contain some data.
- Statements - Instructions given to the Interpreter
- Expression - Instruction that give a value
- Operator and Operand
- Unary and Binary operators

## Identifiers

- Identifers is a name given to a variables, functions, classes, Modules and Packages
- Rules of Identifers
  - Allotted symbols: alphabet(small, upper case), digits, underscore(`_`)
  - Identifiers should not start with digits
  - Identifiers are case sensitive
  - We can not use keywords as Identifiers
  - There is no limit on max length of the identifiers
  - There should not be any space between a identifer

## Keywords

- keywords are the words that are reserved by the python

```py
# Show  the list os all keywords
import keyword
print(keyword.kwlist)
```

## Comment

- Comments are ignored while we execute the program

```py
# This is a single line comment
'''
This is a
multi line
comment.
'''
```

## Basic Data Types

- Built in
  - Numbers - int, float, bool
  - Text Sequence - str
  - Sequences - list, tuple, range
  - Set - set
  - Mapping Types - dict
- User Defined

## Numbers

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

## Strings

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

<!--
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
-->

```py
# //////////// String Methods
# lower, upper, swapcase, title, capatalize, startswith, endswith
# strip, lstrip, rstrip, replace(old, new, count=-1)
# islower, isupper, isidentifier
# find, rfind, index, rindex, count
# center, ljust, rjust, expandtabs
# split, rsplit
```

## Sequences

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

<!--
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
-->

## Operators

- Comparison Operator
- Logical Operator
- Assignment Operator

## For looping Statement

<!-- Looping statemnets are used to execute statements multiple times -->

```py
for i in range(5):
  print(i)

for i in [1,2,3]:
  print(i)
```

## Conversion

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

<!--
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
-->

## Extra Material

```py
# builtins functions
# id, type, round, len, ord, chr, eval, pow, isinstance

# How to get the size of an object?
import sys
sys.getsizeof(12)
```

<!--
- Sequence - a particular order in which related things follow each other
- Collection - a group of items
  - range - sequence of numbers
  - list - sequence of mutable values
  - tuple - sequence of immutable values
  - dict - collection of key/value pair
  - set - collection of unique values
-->

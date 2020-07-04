# Unit 3

## Python Flow Control Statements

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
      <!-- - Function Annotations - are the meta information about the types used by the function parameter and return value -->
      <!-- - Documentation String -->
      <!-- - Scope -->
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

<!-- - Inner Function
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
# - This is a technique by which we can attach the variable in the enclosing scope(like of the function) visible in the outer scope even if the outer function has been removed from the current namespace.
# - Conditions for the closures
#   - We must have a nested function (function inside a function).
#   - The enclosing function must return the nested function.

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
 -->

<!-- - DOC String in the function

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
``` -->

## Extra Material

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

<!--
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
-->

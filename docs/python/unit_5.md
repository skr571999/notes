# Unit 5

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

<!-- - System path append

```py
import sys

# sys.path.append("D:\\Python\\learning\\basics")
```

- Dir Function

  - dir() ==> without the argument will return the members of the current module
  - dir(moduleName) ==> will return the members of the argument passed module
  -->

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
```

---

## Question

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

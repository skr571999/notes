# Builtin Modules

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

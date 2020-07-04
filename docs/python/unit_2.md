# Unit 2

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

<!--
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
-->

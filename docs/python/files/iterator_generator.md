# Iterator and Generators

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

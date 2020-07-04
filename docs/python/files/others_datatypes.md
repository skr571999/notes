# Others

## Bytes

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

## Bytearray

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

## Frozenset

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

## Range

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

## Enumeration

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

# Unit 6

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

## Extra Material

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

# Unit 9

## Python OOPs

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
```

<!-- print(list.__mro__) -->

<!-- ```py
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
``` -->

<!-- ```py
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
``` -->

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

## Questions

```py
# Q - difference b/w + and +=
a= [1,2,3]
b = (2,3)
a +=b
# a = a + b # error
print(a)
```

<!-- class A:
        def __b__(self):
                return B()
        def __int__(self):
                return 12
        def __float__(self):
                return 12.2

print(int(A()))
print(float(A())) -->

# Unit 8

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

<!-- ### Methods Usage

| If we use                   | we should use    |
| --------------------------- | ---------------- |
| Instance Variable           | Instance Methods |
| static Variable             | Class Methods    |
| not static & not non-static | Static Method    |
|                             |                  | -->

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

## Questions

```py
# Functions - getattr, delattr, hasattr, issubclass, isinstance

# __init__ - method is called when object of the class is maded
# __str__ - method is called when object reference of the class is print it return only string
# __del__ - method is called when the object of that class is destroyed
```

# Unit 10

## Python OOPs

### User Defined Exception

- To make our exception we need to make a `class` that is inherited form the `Exception` class

```py
class ToYoungEx(Exception):
  def __init__(self, msg):
    self.msg = msg

age = 10
if age < 18:
  raise ToYoungEx("You are young")
```

### Raising Exceptions

- We use the `raise` keyword to raise the exception explicitly.

```py
raise ZeroDivisionError
raise ZeroDivisionError("My Raising")
```

### Extending Thread Class

```py
import threading

class MyThread1(threading.Thread):
  def run(self):
    for _ in range(10):
      print("****")

def f2():
  for _ in range(10):
    print("----")

t1 = MyThread1()
t1.start()
f2()
```

<!-- - Using method inside the Thread class object

```py
import threading as t

class c1:
  def m1(self):
    for _ in range(10):
      print("****")

def f3():
  for _ in range(10):
    print("----")

ob1 = c1()
t1 = t.Thread(target=ob1.m1)
t1.start()
f3()
``` -->

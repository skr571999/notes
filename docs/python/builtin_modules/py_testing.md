# Unit 15

## Python Testing

- By doing code testing we can check that our code work as supposed to work.
- Need of Testing
  - Catching the problems before the user encounter them.

### Assertion

- Assert statement has a condition or expression which is supposed to be always true. If the condition is false assert halts the program and gives an AssertionError
- Is used as debugging tool as it halts the program at the point where an error occurs.
- Assert statement Syntax

```py
assert <expression>
assert <expression>, <error message>
```

```py
# Syntax-1
a = 12
assert a <=1

# Syntax-2
a = 12
assert a <=1, 'This is not valid'
```

### Doc test

- doctest search for the test in doc string written as python interactive session

```py
# Writing test
'''
>>> fact(5)
120
'''

def fact(n):
  f = 1
  for i in range(1, n+1):
    f *=i
  return f

# calling test
import doctest
doctest.testmod()

# running file
# python filename.py -v
# python -m doctest -v filename.py   # directly calling testmod()
```

### Running test written in another file

```txt
# test.txt
'''

>>> from demo1 import fact
>>> fact(5)
120

'''
```

```py
# demo1.py
def fact(n):
  f = 1
  for i in range(1, n + 1):
    f *= i
  return f
```

```py
# test1.py
import doctest
doctest.testfile('test.txt')
```

### Unit testing

To perform unit testing we use the module `unittest`

- Testing Function

  - Example

```py
import unittest as ut

    def format_name(f, l, m=""):
        if m:
            m = m + " "
        return f + " " + m + l

    class NameTest(ut.TestCase):
        def test_1(self):
            self.assertEqual(
                format_name("Anmol", "Sharma", m="Kumar"), "Anmol Kumar Sharma"
            )

ut.main()
```

- Here,

  - we need to make a class which is inherited from `TestCase`
  - The method name inside the Testing class should be start with `test_` which make them run automatically

- Testing Class

  - Example

```py
import unittest as ut

class NameFormat:
    def __init__(self, f, l):
        self.f = f
        self.l = l

    def format_name(self):
        return self.f + " " + self.l

class NameTest(ut.TestCase):
    def test_1(self):
        nf = NameFormat("Anmol", "Kumar")
        self.assertEqual(nf.format_name(), "Anmol Kumar")

ut.main()
```

- `setUp()` method - inside the Testing class is called before the other `test_` method, so it can be used to place the code need to run before performing the tests

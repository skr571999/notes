# Unit 4

## Python Flow Control Statements

### Exception Handling Statements

- What are Errors And Exceptions?

  - An exception is an error that happens during the execution of a program.
  - **Syntax Error** cannot be handled using Exception handling
  - Types of Exceptions
    - Builtin(Predefined Exception Classes)
      - EX - `10/0` - `ZeroDivisionError`
      - [Exception hierarchy](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)
    - User defined(custom)

- Syntax Notes
  - `try` - here code in which exception might occur is kept
  - `except` - here code that will be executed when exception occur is kept
  - `else` - here code that will be executed when no exception occur is kept
  - `finally` - here code that will be executed no matter exception occur or not
  - `try` cannot be without `except` or `finally`
  - Order of usage is: `try`-`except`-`else`-`finally`
  - Multiple `except` blocks
  - Number of times we can use try-except-else-finally
    - try - 1 time
    - except - multiple times
    - else - 1 times
    - finally - 1 times
- Nesting

```py
# - multiple except
try:
    print(1)
except IndexError:
    print(2)
except ZeroDivisionError:
    print(3)

# - Displaying Error Message
a = [1,2]
try:
    print(12/0)
except ZeroDivisionError as err:
    print('Error', err)

# - Multiple Exception in one Except
a = [1,2]
try:
    print(12)
    print(a[10])
except(IndexError, ZeroDivisionError) as err:
    print('Error', err)
```

### Nesting

```py
# 1 -
try:
    print(1)
    try:
        print(2)
    except:
        print(3)
    finally:
        print(4)
except:
    print(5)
finally:
    print(6)

# 2 -
try:
    print(1)
except:
    print(2)
    try:
        print(3)
    except:
        print(4)
    finally:
        print(5)
finally:
    print(6)

# 3 -
try:
    print(1)
except:
    print(2)
finally:
    print(3)
    try:
        print(4)
    except:
        print(5)
    finally:
        print(6)
    print(7)

# 5
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except IndexError:
        print("3")
    finally:
        print("4")
    print("5")
except ZeroDivisionError:
    print("6")
finally:
    print("7")
print("8")


# 6
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except IndexError:
        print("3")
    finally:
        print("4")
    print("5")
except IndentationError:
    print("6")
finally:
    print("7")
print("8")


# 7
try:
    print("1")
    try:
        print("2")
    except ZeroDivisionError:
        print("3")
        print(10 / 0)
    finally:
        print("4")
    print("5")
except IndentationError:
    print("6")
finally:
    print("7")
print("8")


# 8
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except ZeroDivisionError:
        print("3")
        print(10 / 0)
    finally:
        print("4")
    print("5")
except IndentationError:
    print("6")
finally:
    print("7")
print("8")


# 9
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except ZeroDivisionError:
        print("3")
        print(10 / 0)
    finally:
        print("4")
    print("5")
except ZeroDivisionError:
    print("6")
finally:
    print("7")
print("8")


# 10
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except ZeroDivisionError:
        print("3")
    finally:
        print("4")
        print(10 / 0)
    print("5")
except ZeroDivisionError:
    print("6")
finally:
    print("7")
print("8")


# 11
try:
    print("1")
    try:
        print("2")
    except ZeroDivisionError:
        print("3")
    finally:
        print("4")
    print("5")
except ZeroDivisionError:
    print(10 / 0)
    print("6")
finally:
    print("7")
print("8")


# 12
try:
    print("1")
    try:
        print("2")
        print(10 / 0)
    except ZeroDivisionError:
        print("3")
    finally:
        print("4")
    print("5")
except ZeroDivisionError:
    print("6")
finally:
    print(10 / 0)
    print("7")
print("8")
```

# Builtin Functions

```py
# pow()
print(pow(2,3)) # 2 ** 3
print(pow(2,3, 3)) # (2 ** 3) % 3

print(ord("a")) # ord(character)
print(chr(97)) # chr(unicode)

print(abs(-123))

# round()
print(round(12.6))
print(round(12.5))
print(round(12.5, 0))
print(round(12.444444, 3))

# eval()
print(eval("1+2+3"))
a, b = 12, 13
print(eval("a + b"))


## ascii()
# -American Standard Code for Information Interchange
print(ascii("Python is interesting"))
print(ascii("Pythön is interesting"))
print("Pyth\xf6n is interesting")

## repr()
s = """
Hello in the new line
this is new line
"""
print(str(s))
print(repr(s))

## hash()
# - encode the data into unrecognisable value
# - Objects hashed using hash() are irreversible, leading to loss of information.
# - hash() returns hashed value only for immutable objects, hence can be used as an iterators to check for mutable/immutable objects.
# Note By default, the __hash__() values of str and bytes objects are “salted” with an unpredictable random value. Although they remain constant within an individual Python process, they are not predictable between repeated invocations of Python.

## exec()
program = 'a = 5\nb=10\nprint("Sum =", a+b)'
exec(program)
program = input("Enter a program:")
exec(program)

## compile()
# - make a code object of the string
code = 'a = 5\nb=6\nsum=a+b\nprint("sum =",sum)'
codeObj = compile(code, "anyname", "exec") # anyname is used for runtime exception
exec(codeObj)
print(codeObj)
help(compile)

## zip()
a = [1, 2, 3, 4]
b = ("A", "B", "C")

c = zip(a,b)
print(*c)
print(c)
print(type(c))
print(next(c))
```

# String Formatting

```py
# Q - Format the output
for x in range(1, 11):
    print("{0:3d} {1:6d} {2:9d}".format(x, x * x, x * x * x))

## String Formatting
# formatting into tables
table = {"Sjoerd": 4127, "Jack": 4098, "Dcab": 8637678}
print("Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}".format(**table))

# {} ==> Replacement operator / Template string
n = "Asdf"
s = 10000
d = "CSE"
print("{} your salary is {} your dept is {}".format(n, s, d)) # syntax 1
print("{0} your salary is {1} your dept is {2}".format(n, s, d)) # syntax 2
print("{x} your salary is {y} your dept is {z}".format(z=d, x=n, y=s)) # syntax - 3

# --- OLD WAY
# %i ==> int type
# %d ==> int type
# %f ==> float
# %s ==> str type

a, b = 10, 20
print("a value is %i" % a)
print("a value is %i and b value is %i" % (a, b))

name = "Asdf"
lis = [10, 20, 30]
print("Hello %s the list is %s" % (name, lis))

a = "Hello %s" % "Asdf"
print(a)

a = 12345
print("{:=20d}".format(a))
print("{:#=20d}".format(a))

a = 12.33333
b = "%.2f" % a
print(type(b))
print("Hel %f lo " % a)
print("Hel {} lo ".format(a))

## String Methods
a = "sachin Kuamr 12 Rajput ß from GPB"
print(a.casefold())
```

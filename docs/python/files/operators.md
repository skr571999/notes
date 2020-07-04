# Operators

## Arithmetic Operator

```py
# (+)   - Addition
# (-)   - Subtraction
# (*)   - Multiplication
# (/)   - Division
# (%)   - Modulo
# (//)  - Floor Division
# (**)  - Exponent / Power Operator
```

## Comparison Operator

```py
# (>)  # greater than
# (<)  # less than
# (<=) # less than or equal to
# (>=) # greater than or equal to
# (==) # equal to
# (!=) # not equal to
# (is, is not) # Identity operator
# (in, not in) # Membership operator
```

## Logical Operator

```py
# and, or, not
```

<!--
# after operation the operand is returned
# if first value is true then it will be returned
# if first value is false then second value will be returned
-->

## Assignment Operator

```py
# = assignment operator
# Compound Assignment Operators
# (+=,  -=, *=, /=, %=, //=, **=, &=, |=, ^=, >>=, <<=)

# x += 2 ==> x = x + 2
```

<!--
```py
### Operator Precedence
# operator precedence : not ==> and ==> or

a = 30
b = 20
c = 10
d = 5

print((a + b) * (c / d))  # 100.0
print(a + (b * c) / d)  # 70.0
  # 32

# precedence decrease
# 1. parenthesis
# 2. unary operator
# 3. binary operator
# 4. ternary operator

# Operator Percedence Python Docs
# https://docs.python.org/3/reference/expressions.html#operator-summary

# swapping of the values
a = 10
b = 30
a, b = b, a

# Multiple Assignment
a, b, c = 12, 13, 14

### Operator Chaining
# chaining - if all the sub expression result is true then true otherwise false

print(1 > 2 < 3 >= "hello" < 5)
print(10 == 12 == 12 == 40)
```
-->

# Unit 14

## Python Regular Expression

- Is a sequence of characters that define some search pattern which will be used for finding matches in a string

### Meta Characters

- are the special characters that have special meaning in regex pattern

```py
# [] - character set
# . - (period) match any character except new line
# ^ - (caret) match beginning of a string and while used inside of the character set it do the opposite work
# $ - (dollar) match end of a string
# [^ ] - match character not in bracket
# {} - braces
# | - alteration
# () - group
# \ - backslash
```

- Quantifiers

```py
# * - 0 or more
# + - 1 or More
# ? - 0 or one
# {3} - Exact Number
# {3,4} - Range of Numbers (min, max)
```

- SPECIAL SEQUENCES

```py
# \A -  Matches if the specified characters are at the start of a string.
# \b - Matches if the specified characters are at the beginning or end of a word.
# \B - (opposite of \b)Matches if the specified characters are not at the beginning or end of a word
# \d - Matches any decimal digit. Equivalent to [0-9]
# \D - Matches any non-decimal digit. Equivalent to [^0-9]
# \s - Matches where a string contains any whitespace character (space, tab, newline)
# \S - Not a Whitespace (space, tab, newline)
# \w - Word Character(a-z, A-Z, 0-9, _)
# \W - Not a Word Character
# \Z -  Matches if the specified characters are at the end of a string.
```

- Groups

```py
# (s|rs|s) - this will match s or rs or s
```

- SETS

```py
# [arn]
# [a-n]
# [^arn]
# [0123]
# [0-9]
# [0-5][0-9]
# [a-zA-Z]
# [+]
```

```py
import re

p = "^a...s$"  # 5 char string starting with 'a' and ending with 's'
s = "abyss"

p = "[abc]"  # check that string contain 'abc' or not
s = "abcd"

p = "[a-e]"  # check that string contain 'a to e' or not
s = "abc defgh"

p = "[1-4]"  # check that string contain '1 to 4' or not
s = "123 445"

p = "[0-39]"  # check that string contain '0 to 3 and 9' or not
s = "123934"

# ^ will revert the result
p = "[^abc]"  # any character other than 'abc'
p = "[^0-9]"  # any non-digit character

res = re.match(p, s)
if res:
    print(True)
else:
    print(False)

# FUNCTIONS
# findall() - return the list containing all matches
s = "Hello world of the Python"
print(re.findall("th", s))

# search()
# split()
# sub()


sentence = """
123--123--145
123.432.543
"""

pattern = re.compile(r"\d\d\d[.-][-]?\d\d\d[.-][-]?\d\d\d")

matches = pattern.finditer(sentence)


for match in matches:
    print(match)


pat = re.compile(r"\W")
s = "12av$"


# print(pat.search(s).start())
print(pat.findall(s))
# res = pat.finditer(s)
# print(res.__next__().group())


import re

# # re.findall - return list of all the matches
# s='Abc abc def Abc'
# pat = r'Abc'
# result = re.findall(pat, s)
# print(result)


# # re.finditer - return a iter object of all the mathces that return the match object
# s='AbcAbc'
# pat = r'Abc'
# result = re.finditer(pat, s)
# print(next(result))
# print(next(result))


# # re.match - match the pat at the start of the string
# s='Abc'
# pat = r'Abc'
# result = re.match(pat, s)
# print(result)


# # re.fullmatch - match the complete pattern with str
# s='Abc'
# pat = r'Abc'
# result = re.fullmatch(pat, s)
# print(result)


# # re.search - search the whole stringfrom starting
# s='def Abc Abc'
# pat = r'Abc'
# result = re.search(pat, s)
# print(result)

# # re.split(pattern, string, maxsplitCount)
# s = "XyzaDeeafSdfaWer"
# pat = r"a"
# result = re.split(pat, s, 2)
# print(result)


# # re.sub(pattern, replacementString, string, count) - substitute
# s='Abc Abc Abc'
# pat = r'Abc'
# result = re.sub(pat,"Xyz", s, 2)
# print(result)


# # re.subn - # return tuple containing new_string and count
# s='Abc Abc Abc'
# pat = r'Abc'
# result = re.subn(pat, "Def", s, 2)
# print(result)


pat = re.compile(r"abc")
# print(pat)
# print([i for i in dir(pat) if not i.startswith('_')])
s = "abc"
res = pat.match(s)


# # Match Object
# s='Abc'
# pat = r'Ab(c|d)'
# result = re.search(pat, s)
# print([i for i in dir(result) if not i.startswith('_')])
# print(result.string)
# print(result.re)

# print(result.pos)
# print(result.endpos)

# print(result.group()) # Return the string matched by the RE
# print(result.start()) # Return the starting position of the match
# print(result.end()) # Return the ending position of the match
# print(result.span()) #Return a tuple containing the (start, end) positions of the

s = "1a2b3c11sshhs9sus9sus"
pat = r"\D{2,5}"
result = re.findall(pat, s)
# print(result)


# 1
s = "Hello World"
pat = r"hello"
result = re.findall(pat, s, flags=re.I)
# print(result)

# 2
s = "Abcdef"
pat = r"^Ab.+ef$"
result = re.findall(pat, s)
# print(result)

# 3
s = "Abcdef12"
pat = r"."
result = re.findall(pat, s)
# print(result)


# Q - check that string should starts with the 'hello ' and then any character can come
s = "hello Asdf"
pat = r"hello .+"
result = re.findall(pat, s)
# print(result)


# Q - write a function to check that the string passed to it only contain the alphabets and numbers?
s = "abc@34@"
pat = r"^[a-zA-Z0-9]+$"
result = re.findall(pat, s)
# print(result)


# Q - write a function to check that the given string only starts with the https://
s = "https://google.com"
pat = r"^https://.+"
result = re.findall(pat, s)
# print(result)

# Q - Write a function that check that the given string ends with the @gmail.com
s = "abc@gmail.com"
pat = r".+@gmail.com$"
result = re.findall(pat, s)
# print(result)


# matches the a followed by one or more b's
s = "abbcdefabc"
pat = r"ab*"  # matches ab, abb, abbb
result = re.findall(pat, s)
# print(result)

# matches the a followed by zero or more b's
s = "abbcdeac"
pat = r"ab?"  # matches a, ab
result = re.findall(pat, s)
# print(result)

# matches the a followed by three b
s = "abb ab abbb abbbbb"
pat = r"ab{3}"
result = re.findall(pat, s)
# print(result)

# matches a follower by 2 or 4 b
s = "abb ab abbb abbbbb"
pat = r"ab{2,4}"
result = re.findall(pat, s)
# print(result)

# matches a valid identifer but only have small alphabets and one underscore
s = "abcde"
s = "abc_def"
s = "abc_def_ghi"
pat = r"^[a-z]+_[a-z]+$"
result = re.findall(pat, s)
# print(result)

# matches a word starting with alphabet
s = " abc"
s = "1abc"
s = "abc"
pat = r"^\w+"
pat = r"^\w"
result = re.findall(pat, s)
# print(result)

# matches a word ending with a string and with an optional punctuation
# the marks, such as full stop, comma, and brackets, used in writing to separate sentences and their elements and to clarify meaning.
s = "abc,"
s = "abc"
pat = r"\w+\S*"
result = re.findall(pat, s)
# print(result)

# matches the space and newline,tab
s = "abc "
s = """
ab  \t c
"""
pat = r"\s"
result = re.findall(pat, s)
# print(result)


# remove all the spaces from the string
s = "  ahd sksk kkksks  ksk    kk  "
pat = r" "
result = re.sub(pat, "", s)
# print(result)

# remove all the whitespaces from the string
s = "  ahd sksk\n \t kkksks  ksk\n\t    kk  "
pat = r"\s"
result = re.sub(pat, "", s)
result = re.subn(pat, "", s)  # get the count how much whitespaces have been removed
# print(result)

# find a 3 digit number followed by hiphen and then 2 digit number
s = "123-45 12-43 345-552"
pat = r"\d{3}-\d{2}"
# pat = r"(\d{3})-(\d{2})"
result = re.findall(pat, s)
# print(result)

s = "123-45 12-43 345-552"
pat = r"(\d{3})-(\d{2})"
result = re.match(pat, s)

print(result.group(1))
print(result.group(2))
# print(result.group(3)) # error
```

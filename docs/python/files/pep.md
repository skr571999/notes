# PEP

- PEP(Python Enhancement Proposal)
- PEP8 -- Style guide for Python Code

- **Indentation** - It is recommended to use four spaces not the Tab, so we need to configure Text Editor to set spaces in place of tab. Also we should not mix tabs with spaces.
- **Line Length** - It is recommended to have 79 characters in a line.
- **Blank Lines** - It is recommended to place a blank line between 2 sections.
- Styling Functions

- Styling Classes

  - Class Names Should be written in _CamelCase_
  - Every Class should have a _docstring_
  - We should use one blank line between methods of a class
  - We should use two blank line between two classes

- **NOTE:**
  - Resource - [https://www.python.org/dev/peps/](https://www.python.org/dev/peps/)
  - PEP8 [https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/)

```py
# # Python 3.8
# a = 11
# if (b := a) > 10:
#     print(f"The value of b is {b} and is greater than

# annotations in python
# - Positional only(/)
# - Keyword Only(*)

# def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
#       -----------    ----------     ----------
#         |             |                  |
#         |        Positional or keyword   |
#         |                                - Keyword only
#          -- Positional only

# Ellipsis in python
# a = [1, 2, 3]
# b = [11, 22, 33]
# print(type([... for i in a][0]))

```

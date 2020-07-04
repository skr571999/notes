# Unit 7

## Python File Handling

- We use the `open()` function to open a file in reading or the writing mode.
- Syntax:

```py
open("FILE_PATH_WITH_NAME", "MODE")
```

- Modes for Opening a file
  - `x` - Create file and open it in Writing mode. If already Exists then throw Error
  - `w` - Open a file in writing mode and if not exists create it
  - `a` - Open a file in appending mode and if not exists create it
  - `r` - Open the file in reading mode and if not exists throw Error.
  - `b` - for binary data
  - `t` - for text data
  - `+` - for opening in both modes read and write
- File Methods
  - `close()`
  - `closed`
  - `read()`
  - `readable()`
  - `readline()`
  - `readlines()`
  - `seek()`
  - `seekable()`
  - `tell()`
  - `writable()`
  - `write()`
  - `writelines()`

```py
f = open("test.txt", "w")
f.write("Hello World")
f.close()

f = open("test.txt", "r")

# for i in f:
#     print(i)

# print(next(f))
# print(next(f))

# print(f.read())
# print(f.read(13))

# print(f.readline())
# print(f.readline(2))
# print(f.readline(12))

if f.readable():
    print(f.read())

# Seeking the position of the cursor
# if f.seekable():
#     f.seek(10)
#     print(f.read())

### Deleting a file
import os

# os.remove("test.txt")

# check if the file exists if yes then delete
if os.path.exists("test.txt"):
    os.remove("test.txt")
else:
    print("The file does not exist")
```

### With Statement

```py
with open('test.txt','r') as f:
    print(f.read())
```

- **Need of Closing file** - Improperly closed file can cause loss of the Data or corrupted. Closing file manually may also work, so we use `with` statement which automatically close the file if our work is done with that file.

<!-- ```py
# ////////// Writing to file using print
fs = open('hello.txt', 'w')

import sys
print('New', file=fs)
print('New', file=sys.stdout)

f = open('test.txt') # mode default to 'r'
f = open('test.txt', 'w+') # place the cursor at start but delete all the content of the file
f = open('test.txt', 'r+') #  place the cursor at start
# f = open('test.txt', 'rb+') # binary mode is used for reading the image sand the videos
f = open('test.txt', 'a+') # place the cursor at the end
``` -->

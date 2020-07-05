# Introduction

- Importance of the C
- C is Fast
- We can interact with machine code
- Where c is Used
  - Linux
  - MySQL
  - CPython
  - PERL
  - OS
  - Ruby
  - C is used in development of Apache and NGINX
  - Used in Making the Game

## What is programming language

- It is a medium to intercact with the computer
- Developed by Dennis Ritchie

## Steps to convert a `c` file to `exe`

- **Preprocessing** - in this step all the comments are removed and the content of all the includes files is included and macros are expanded and saved into the `.i` file
- **Compilation** - in this step the `.i` file is converted into the Assembly level instructions and then saved to the `.s` file
- **Assembling** - in this step the Assembly level code of the `.s` file is converted into the machine level code and saved to the `'o` file
- **Linking** - in this step all the `.o` file are combined to a `.exe` file
  - Types
    - Static
    - Dynamic - Example: `.dll` file
- **Loading** - Loading of the program in RAM while we run it

### Command To see the Complete Steps

- `gcc -Wall -save-temps test.c`
- This command will generate four files
  - a.exe - the executable file
  - test.i -
  - test.o
  - test.s

## Structure of the c program

- Every c program is made up of token. Token are keywords, functions, identifer, literals, constants, symbols.
- We Can have spaces and next line between our tokens

- **Keywords** - are reserved words in c language we have 32 keywords

|          |        |          |          |
| -------- | ------ | -------- | -------- |
| auto     | double | int      | struct   |
| break    | else   | long     | switch   |
| case     | enum   | register | typedef  |
| char     | extern | return   | union    |
| const    | float  | short    | unsigned |
| continue | for    | signed   | void     |
| default  | goto   | sizeof   | volatile |
| do       | if     | static   | while    |
|          |        |          |          |

- **Identifers** - these are the names of the variables, cnstants and functions

# Strings

A string is a sequence of characters terminated with a null character \0.

- Example

```cpp
char a[5]; // string declaration

char str[] = "Hello World";

char c[] = "abcd";
char c[50] = "abcd";
char c[] = {'a', 'b', 'c', 'd', '\0'};
char c[5] = {'a', 'b', 'c', 'd', '\0'};
```

- Reading a string from the user

```cpp
char name[20];
scanf("%s", name);
printf("%s", name);
```

- Reading a line of the String

```cpp
char name[20];
fgets(name, sizeof(name), stdin);
puts(name);
```

## String and function

- Passing string to the function

```cpp
#include <stdio.h>

void display(char str[]){
  printf("%s", str);
}

void main() {
  char name[20] = "Hello";

  display(name);
}
```

## String and Pointers

## String Functions

```cpp
// string.h
strlen() // computes string's length
strcpy() // copies a string to another
strcat() // concatenates(joins) two strings
strcmp() // compares two strings
strlwr() // converts string to lowercase
strupr() // converts string to uppercase
```

## String Examples

- Resource: [https://www.programiz.com/c-programming/c-string-examples](https://www.programiz.com/c-programming/c-string-examples)

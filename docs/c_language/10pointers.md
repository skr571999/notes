# Pointers

## Address

If we have a variable `var`, then `&var` will give the address of that variable.

```cpp
int a = 10;
printf("%d\n", a);
printf("Address %p", &a);
```

## Pointer Variables

These are the variables that are used store the address not the value.

- Syntax

```cpp
int* p;
int * p;
int *p;
int* a, b; // here a is pointer and b is normal variable
```

- Assigning address to the Pointer

```cpp
int* pc, c;
c = 5;
pc = &c; // 5 is assigned to the c variable. And, the address of c is assigned to the pc pointer
```

- Getting the value of the pointer

```cpp
#include <stdio.h>

void main() {
    int *a, b;
    b = 4;
    a = &b;

    printf("%d\n", a);   // int value address stored in the pointer a
    printf("%p\n", a);   // hex value of the address stored in pointer a
    printf("%d\n", *a);  // value stored at the address stored in the pointer a
    printf("%d\n", &a);  // address of the pointer a
}
```

- Chnaging the value of the address stored in the Pointer

```cpp
#include <stdio.h>

void main() {
  int *a, b;
  b = 4;
  a = &b;
  *a = 12;

  printf("%d\n", *a);
}
```

## Pointer and Array

## Pointer and Functions

## Memory Allocation

## Array and Pointer Examples

- Resourse: [https://www.programiz.com/c-programming/c-pointer-examples](https://www.programiz.com/c-programming/c-pointer-examples)


<!-- // malloc()
// realloc()
// free() -->

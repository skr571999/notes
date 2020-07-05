# Array

An array is a variable that can store multiple values.

## 1-D Array

- Decalration

```cpp
// syntax
datatype arrayName[arraySize];
// example
int arr[10];
```

- Array Initialization

```cpp
int arr[5] = {1, 2, 3, 4, 5};
int arr[] = {1, 2, 3, 4, 5};
```

- Accessing the elements of the array
- Changing the value of the array elements
- Example

```cpp
#include <stdio.h>

void main() {
    int arr[5];

    printf("Enter 5 elemnts: ");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
}
```

- Default value assigned to the array elements
- accessing array element out of the size

```cpp
int arr[5] = {1,2,3,4,5};
printf("%d", arr[10]); // a random value is given
```

- Character array

```cpp
#include <stdio.h>
int main(){
  char str[] = "Hello World";
  printf("%20s\n", str);
  printf("%-20s\n", str);
  printf("%20.5s\n", str);
  printf("%-20.5s\n", str);
  return 0;
}
```

## Multi-D Array

- Declaring array

```cpp
int a[3][3]; // 2 D array
int a[3][3][3]; // 3 D array
```

- Initialization

```cpp
int a[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
int a[3][3][3] = {
    {{1, 2, 3}, {22, 33, 44}, {44, 44, 55}},
    {{1, 2, 3}, {22, 33, 44}, {44, 44, 55}},
    {{1, 2, 3}, {22, 33, 44}, {44, 44, 55}},
  };
```

## Function and array

- Passing the array to the function
- Getting the length of the array
- Resource: [https://www.programiz.com/c-programming/c-arrays-functions](https://www.programiz.com/c-programming/c-arrays-functions)

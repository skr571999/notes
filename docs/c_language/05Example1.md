# Example 1

## Add to numbers taking from user input

```c
#include <stdio.h>

int main()
{
    int a, b;
    printf("Enter a value: ");
    scanf("%d", &a);
    printf("Enter b value: ");
    scanf("%d", &b);
    printf("Sum of a and b : %d", (a + b));
    return 0;
}
```

## Multiply two floating numbers

```c
#include <stdio.h>

int main()
{
    float a, b;
    printf("Enter two numbers: ");
    scanf("%f", &a);
    scanf("%f", &b);
    printf("Product : %f", (a * b));
    printf("\nProduct : %.2f", (a * b)); // upto two decimal place
    return 0;
}
```

## Program to find the ASCII value of the Character Entered by the User

## Program to find quotient and remainder of Two Integers

## Get the size of the datatype using the c program

```c
#include <stdio.h>
int main()
{
  printf("%ld\n", sizeof(int));
  printf("%ld\n", sizeof(float));
  printf("%ld\n", sizeof(double));
  printf("%ld\n", sizeof(char));
  return 0;
}
```

## Working of the `long`

```c
#include <stdio.h>
int main()
{
    int a;
    long b;
    long long c;
    double d;
    long double e;
    printf("%ld\n", sizeof(a));
    printf("%ld\n", sizeof(b));
    printf("%ld\n", sizeof(c));
    printf("%ld\n", sizeof(d));
    printf("%ld\n", sizeof(e));
    return 0;
}
```

## Swap the two variables value

```c
#include <stdio.h>
int main()
{
    int a = 2;
    int b = 3;
    int temp;
    printf("BEFORE: a : %d b : %d", a, b);
    temp = a;
    a = b;
    b = temp;
    printf("\nAFTER: a : %d b : %d", a, b);
    return 0;
}
```

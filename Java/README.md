---
title: Java
---

## References

- https://en.wikipedia.org/wiki/Java_(programming_language)
- https://www.programiz.com/java-programming
- https://learn.oracle.com/ols/learning-path/java-explorer/40805/79726
- https://docs.oracle.com/javase/tutorial/
- https://developer.ibm.com/languages/java/

## Introduction

- First appeared in 1995, Designed by James Gosling
- It is a Class based, Object Oriented, General Purpose Programming language
- It is intended for WORA(Write Once Run Anywhere)
- Java programs are compiled to Bytcode and run on JVM
- Latest Version - 16 (LTE - 11)
- Java SE - https://en.wikipedia.org/wiki/Java_Platform,_Standard_Edition

## Basics

- Syntax
- Input / Output
- Variables
- Operators
- Flow Control Statements

## Streams in Java

```java
import java.util.stream.IntStream;

public class Program {
  public static int[] arrayOfMultiples(int num, int length) {
    return IntStream.rangeClosed(1,length)
      .map(i -> num * i )
      .toArray();
  }
}
```

## Buffer Reader in Java

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int n = Integer.parseInt(br.readLine());
```

## String

```java
String str = "Hello";

str.length()

str.chatAt(0) // H

str.substring(startIndex, endIndex)
```

## Array List

```java
ArrayList<Integer> list = new ArrayList<>();

list.size();

list.add(10);

list.add(2, 100) // add in between

for(int val: list){
}

list.get(index)

list.set(index, newValue)
```

## conversion of char to int

```java
char ch = '7';

// Give ASCII Value
int n = ch; // 55

// 1-
int n1 = ch - '0'; // 7

// 2-
int n2 = Character.getNumericValue(ch); // 7
```

---
title: Java
---

## References

- https://en.wikipedia.org/wiki/Java_(programming_language)
- https://www.programiz.com/java-programming
- https://learn.oracle.com/ols/learning-path/java-explorer/40805/79726
- https://docs.oracle.com/javase/tutorial/
- https://developer.ibm.com/languages/java/

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

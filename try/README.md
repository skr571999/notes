---
title: Try
---

## Java

### Streams in Java

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

### Buffer Reader in Java

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int n = Integer.parseInt(br.readLine());
```

## TypeScript

```ts
let _interval: null | ReturnType<typeof setTimeout> = null;
```

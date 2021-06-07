---
title: TypeScript
---

## TypeScript

```ts
let interval: null | ReturnType<typeof setTimeout> = null;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
```

### TypeScript Custom Decorators

- https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/

```ts
const authIfRequired = (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  // console.log('A', target);
  // console.log('B', propertyKey);
  // console.log('C', descriptor);

  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any) {
    try {
      console.log("THIS :", this);

      const result = originalMethod.apply(this, args);
      return result;
    } catch (err) {
      console.log("Error Occurred");
      this.setLoginTrue();

      const result = originalMethod.apply(this, args);
      return result;
    }
  };

  return descriptor;
};

class Test {
  isLogin = false;

  setLoginTrue = () => {
    this.isLogin = true;
  };
  id = "Apple";

  @authIfRequired
  getResource() {
    console.log("...", this);
    if (this.isLogin) {
      console.log("Got the Resource");
    } else {
      throw new Error("SF_LOGIN_ERROR");
    }
  }
}

// const t1 = new Test();
// t1.getResource();
```

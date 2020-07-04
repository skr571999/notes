# Async and Await

```py
## Asynchronous Implementation
import asyncio


async def count():
    print("One")
    await asyncio.sleep(1)
    print("Two")


async def main():
    await asyncio.gather(count(), count(), count())


asyncio.run(main())

## Synchronous Implementation
import time


def count():
    print("One")
    time.sleep(1)
    print("Two")


count()
count()
count()
```

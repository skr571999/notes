# Unit 11

## Python Multithreading

<!-- - **Multitasking** - doing several tasks simultaneously.
- Types of multitasking
  - **Process based** (os level) - Executing several task simultaneously where each task is in a separate independent process -->

- **Multithreading** - Executing several task simultaneously where each task is a separate independent part of the same program and each independent part is called thread.
  <!-- - Thread scheduler allocate the cpu to the threads -->
- Need and Benefits of the threading
  - To separate a big task into small independent task called threads
  - It help in reducing the execution time and improve the performance because tasks are now executed simultaneously.
- Application of the Multi threading
  - Computer Games
  - Web Browsers
  - IDEs
  - Web Servers

### Ways of creating the thread

- Using function
- By extending the Thread class

```py
import threading as t

def f1():
  for _ in range(10):
    print("****")

def f2():
  for _ in range(10):
    print("----")

t1 = t.Thread(target=f1)
t1.start()
f2()
```

- Parameterised Function inside thread

```py
import threading

def m1(x):
  for i in range(x):
    print(i, "1")

def m2(x):
  for i in range(x):
    print(i, "222222")

t1 = threading.Thread(target=m1,args=(10,))

t1.start()
m2()
```

- Joining two or more threads

- Getting the current thread name

```py
import threading
print(threading.current_thread().getName())

threading.current_thread().setName("My main Thread")
print(threading.current_thread().getName())
```

### Thread Sleep

```py
import threading as t
import time

def f1():
  for _ in range(10):
    print("****")
    time.sleep(1)

def f2():
  for _ in range(10):
    print("----")
    time.sleep(0.5)


t1 = t.Thread(target=f1)
t1.start()
f2()
```

### Daemon Thread

- Thread that work in background, purpose is to provide support to the main thread
- garbage collector is a daemon thread

```py
import threading as t

def f1():
  for _ in range(10):
    print("*****")

def f2():
  for _ in range(10):
    print("----")

t1 = t.Thread(target=f1)
t1.setDaemon(True)
# t1 = t.Thread(target=f1, daemon=True)
t1.start()  # we cannot create a thread daemon after it has started so we have to set daemon to a thread before it to start

print(t1.daemon)
print(t1.isDaemon())

# checking the current thread is daemon or not
print(t.current_thread().isDaemon())
print(t.current_thread().daemon)
```

<!-- ### Time Difference

```py
import time
import threading as t

a = 10000000
def f1():
  for _ in range(a):
    pass

def f2():
  for _ in range(a):
    pass

# calling function in multiple thread
start_time = time.time()
t1 = t.Thread(target=f1)
t1.start()
f2()
end_time = time.time()
print("T1 = ", end_time - start_time)

# Calculating by calling in same thread
start_time = time.time()
f1()
f2()
end_time = time.time()
print("T1 = ", end_time - start_time)
``` -->

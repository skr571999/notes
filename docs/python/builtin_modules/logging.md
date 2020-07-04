# Unit 13

## Python Logging

- Logging is a means of tracking events that happen when some software runs.
- Software development phases
  - developing
  - debugging
  - running
  - Testing
- **Without Logging**
  - It is very hard to detect the problem.
  - And even if we are able to detect the cause, it will consume a lot of time
- **With logging**
  - By using log files we can easily do debugging and, can easily determine the cause of the problem
  - We can track certain events have occurred
- Logging Levels
  - CRITICAL(50)
    <!-- This tells serious error, indicating that the program itself may be unable to continue running -->
  - ERROR(40)
    <!-- This tells that due to a more serious problem, the software has not been able to perform some function -->
  - WARNING(30)
    <!-- These are used an indication that something unexpected happened, or indicative of some problem in the near future -->
  - INFO(20)
    <!-- This is used to Confirm that things are working as expected -->
  - DEBUG(10)
    <!-- This is used to give Detailed information, typically of interest only when diagnosing problems. -->
  - NOTSET(0)

### Usage

```py
import logging as log
log.basicConfig(filename='./app.log',level=log.ERROR)
log.debug('This is a Message')
log.info('This is a Message')
log.warning('This is a Message')
log.error('This is a Message')
log.critical('This is a Message')
```

### Logging Parameters

- Name of the file
- Level messages
- file mode
- Format of the Output
  - filename
  - message
  - funcName
  - lineno
  - pathname

> **NOTE**: For More Information Visit
> [https://docs.python.org/3/library/logging.html#logrecord-attributes](https://docs.python.org/3/library/logging.html#logrecord-attributes)

- Examples

```py
import logging as log

log.basicConfig(filename="./app.log", filemode="w",format="%(filename)s %(message)s %(lineno)s %(pathname)s")

log.error("error message")
log.critical("critical message")
log.warning("warning message")
log.info("info message")
log.debug("debug message")


# logging.basicConfig(filename='./app.log') # default level WARNING
# - If no file is set then the log message will be displayed to the cmd
# - If the file is configured then messages will be appended to that file
# - All the messages above the logging level will be displayed
#   - Exaxmple: If the level is Warning then all the log above WARNING level will be displayed like WARNING, ERROR, CRITICAL
```

```py
import logging as log

# log.basicConfig(filename="./app.log")
log.basicConfig(filename="./app.log", filemode="w",format="%(levelname)s %(asctime)s %(filename)s %(lineno)d %(message)s", level=log.NOTSET)

# Production
log.info("A new request come")
try:
    x = int(input("Enter a: "))
    y = int(input("Enter b: "))
    print(x / y)
except ZeroDivisionError as msg:
    print("Cannot divide by Zero")
    # log.error(msg)
    log.exception(msg)
except ValueError as msg:
    print("Enter only int value")
    log.exception(msg)
log.info("Request processing complete")
```

---
title: Try
---

## Batch Programming

- References

  - https://ss64.com/
  - https://www.youtube.com/playlist?list=PL35B3EFC3D6CD1DF7

- FIRST Lesson

```bat
@echo off

title First Lesson
pause

echo This is First Batch Command
pause
cls
echo Hii
pause

rem .bat Extension
```

- SECOND Lesson

```bat
@echo off

title Second Lesson
start https://google.com

start FILE_NAME rem to open a file in default program

color 0a
echo Color is Changed
pause

rem ======================
rem 0 = Black
rem 1 = Blue
rem 2 = Green
rem 3 = Aqua
rem 4 = Red
rem 5 = Purple
rem 6 = Yellow
rem 7 = White
rem 8 = Gray
rem 9 = Light Blue
rem A = Light Green
rem B = Light Aqua
rem C = Light Red
rem D = Light Purple
rem E = Light Yellow
rem F = Bright White
rem ======================
```

- THIRD Lesson

```bat
@echo off

rem marker
:a
echo Hi
pause
goto :a
```

- Forth Lesson : User Input

```bat
@echo off

title User Input
:main
echo Press 1 to make me say "Hi"
echo Press 2 to make me say "Bye"
set /p input=
if %input% == 1 goto hi
if %input% == 2 goto bye
:hi
echo Hi
pause
goto main

:bye
echo Bye
pause
goto main
```

- Fifth Lesson : Variables

```bat
rem it is case insensitive language
@echo off
title Variables

set name = default
echo What is your name?
set /p name=
echo Your name is %name%!
pause
```

- Sixth Lesson : Directors, Delete Command, Rename Command

```bat
rem Directors

@echo off

title Directors

rem will create a file and write Hello World to it
echo Hello World > hello.txt

rem will create a file if not exists and append Hello World to it
echo Hello World >> hello.txt

del FULL_FILE_PATH
rename OLD_NAME NEW_NAME
ren OLD_NAME NEW_NAME
```

- Seventh Lesson : File Maker

```bat
@echo off
title File Maker

set /p name=Enter File name :
set /p extension=Enter Extension :
echo. > %name%.%extension%
```

- Eight Lesson : If not

```bat
@echo off

title If Not Command

set /p pass=Ener Password :
if %pass% == hi goto correct
if not %pass% == hi goto incorrect

:correct
cls
echo Correct Password
pause
exit

:incorrect
cls
echo In Correct Password
pause
exit
```

- Ninth Lesson : Custom Pause

```bat
@echo off

title "Custom Pause"
echo Loading
ping localhost -n 2 >null
cls
echo Loading.
ping localhost -n 2 >null
cls
echo Loading..
ping localhost -n 2 >null
cls
echo Loading...
ping localhost -n 2 >null
cls
echo DONE

pause
```

- Tenth Lesson : Types of Variable - Predefined Variables

```bat
rem 1- Static Variables: HOMEDRIVE, PATH
rem 2- Dynamic Variables : time, date

@echo off
echo %date%
echo %time%
```

- Eleven Lesson : Encrypted Lesson

```bat
@echo off
set a=H
set b=i

echo %a%%b%
```

- Twelve Lesson : Downloading Notepad++

- Thirteen Lesson : Blank Lines and Comments

```bat
rem This is a Comment
echo.
echo.
echo.
echo Hello World
:: this is also a comment
pause
```

- Program to add two Numbers

```bat
@echo off

call :add 2 , 10
exit /B %ERRORLEVEL%
:add
set /a "sum=%~1+%~2"
echo Sum of %~1 and %~2 = %sum%
exit /b 0
```

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

## C Language References

- https://en.wikipedia.org/wiki/C_(programming_language)
- https://www.programiz.com/c-programming
- CodeWithHarry- https://www.youtube.com/watch?v=ZSPZob_1TOk

## Docker

```bash
## Dockerfile
# Step 1 - installing the OS
FROM alpine

# Step 2.1 - install the software
RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.6/main" >> /etc/apk/repositories

RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.6/community" >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0

# Step 2.2 - configure that software
VOLUME ["/data/db"]
WORKDIR /data
EXPOSE 27017

# Step 3 : Set default commands
CMD ["mongod"]
```

```txt
Docker
 - YouTube Playlist URL (Hitesh Choudary)- https://www.youtube.com/playlist?list=PLRAV69dS1uWTJLvDP4Veld5F05rJAmOcp

- Online Docker Lab: https://labs.play-with-docker.com

- Busybox Image
  - docker install busybox
  - docker run busybox
  - docker run busybox ls

- Mongo Image
  - docker run mongo # install and run the mongo image
  - docker ps --all # to see the list of all the images
  - docker start <Container ID> # to start the container
  - docker exec -it <Container ID> bash # to open the bash in docker container
    - mongo # to run the mongo in docker container
  - docker stop <Container ID> # to stop the container
  - docker kill <Container ID> # to kill the container without waiting to stop the resources

  - docker run -it mongo bash # to directly run the container and go to its bash (*not recommended)

How do we can create a new Docker Image
- Docker File
- Example - Steps to Install Postman
  - install the OS
  - install the Browser
  - Google Postman
  - Download Postman
  - Start Installation
  - Figure out dependencies
  - install those dependencies
  -  place a shortcut icon
  - DONE

- Installing Step for Installing binutils(application) on alpine (os)

  - Alpine OS - http://dl-cdn.alpinelinux.org/alpine/v3.12/main/
  - Make a file with "Dockerfile" name inside a new folder
  - Write the following code
## Dockerfile
# Step 1 - installing the OS
FROM alpine

# Step 2.1 - install the software
RUN apk add binutils

# Step 2.2 - configure that software

# Step 3 : Set default commands

  - To run this image run following command
    - docker build .

- Steps to install mongo in Alpine by creating a custom container
  - code in Dockerfile at Desktop
  - To build the container
    - docker build .

  - to run the container
  - copy the id of the container and then run the container
```

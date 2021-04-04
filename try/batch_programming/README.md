---
title: Batch Programming
---

## References

- https://ss64.com/
- https://www.youtube.com/playlist?list=PL35B3EFC3D6CD1DF7

## FIRST Lesson

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

## SECOND Lesson

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

## THIRD Lesson

```bat
@echo off

rem marker
:a
echo Hi
pause
goto :a
```

## Forth Lesson : User Input

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

## Fifth Lesson : Variables

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

## Seventh Lesson : File Maker

```bat
@echo off
title File Maker

set /p name=Enter File name :
set /p extension=Enter Extension :
echo. > %name%.%extension%
```

## Eight Lesson : If not

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

## Ninth Lesson : Custom Pause

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

## Tenth Lesson : Types of Variable - Predefined Variables

```bat
rem 1- Static Variables: HOMEDRIVE, PATH
rem 2- Dynamic Variables : time, date

@echo off
echo %date%
echo %time%
```

## Eleven Lesson : Encrypted Lesson

```bat
@echo off
set a=H
set b=i

echo %a%%b%
```

## Twelve Lesson : Downloading Notepad++

## Thirteen Lesson : Blank Lines and Comments

```bat
rem This is a Comment
echo.
echo.
echo.
echo Hello World
:: this is also a comment
pause
```

## Program to add two Numbers

```bat
@echo off

call :add 2 , 10
exit /B %ERRORLEVEL%
:add
set /a "sum=%~1+%~2"
echo Sum of %~1 and %~2 = %sum%
exit /b 0
```

---
title: Others
---

## Postman

- [Postman Collection Sharing Docs](https://learning.postman.com/docs/postman/collections/sharing-collections/)
- Software similar to POSTMAN[(Insomnia)](https://support.insomnia.rest)

## VSCode

- [Configure recomended Extensions for sharing extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)
- [VSCode in Browser](https://enterprise.coder.com/docs)

## Heroku Introduction

- Requirements
  - Git
  - Heroku CLI

### Introduction

- Login to heroku `heroku login`
- Creating an heroku app(repo) `heroku create`
- Pushing the changes `git push heroku master`
- Running the Heroku bash in local system `heroku run bash`
- Logging logs `heroku logs --tail`
- To Opent the App `heroku open`
- To see the login ID `heroku auth:whoami`

### Renaming the app

- Method I - after changing from the dashboard

- I - rename the app from the heroku dashboard
- II - to update the remote name in systme now

  - I - go to the folder
  - II - remove the old remote `git remote rm heroku`
  - III - add the new remote `heroku git:remote -a NEW_NAME`

- Method - II - not changing from dashboard

- If we are in same folder then `heroku apps:rename NEW_NAME`
- If we are on a different location `heroku apps:rename NEW_NAME --app OLD_NAME`

## Screen Commands in Linux

By using Screen command in Linux we can start multiple shell session at the same time and use them.

### Resource

- https://www.geeksforgeeks.org/screen-command-in-linux-with-examples/

### Usage

```cmd
- Installing Screen
	- sudo apt install screen
- Start a Screen Session
	- sudo screen
	- sudo screen -S SESSION_NAME
- See the List of the Screens
	- sudo screen -ls
- To detach a Screen
	- screen -d SESSION_ID
- To attach to a detached Screen
	- screen -r SESSION_ID
- To Close a Screen
	- I - Go to that screen
	- II - type exit
- To attach to a not detached Screen
	- screen -x SESSION_ID
- To rename a session
	- I - Go to that Session Screen
	- II - (CTRL + A) + type :sessionname NEW_SESSION_NAME
- To see the current Session name
	- I - Go to that Session
	- II - echo $STY
```

## CMD Introduction

```cmd
cd
cls
cd ..
dir
exit
md
D:

- rd/rmdir ==> to delete an empty directory
- rmdir /s DIRECTORY_NAME ==> to delete an directory containing file
- copy ==> to move files to another location
- more ==> to see the content of a file
- path ==> to set or display the PATH Environment Variable
- ren/rename ==> to rename a file
- calc ==> to open the calculator
- title ==> to set the window title
- vol
- dir > hello.txt  [to create a file]
- C: [ to change the drive]
- cd / chdir  [ to change the directory]
- cd.. [ to go to the parent directory]
- cd  [to show the current directory]
- mkdir/md [to make the directory]
- mkdir src build/{html, images, js} ==> to make folders
- type hello.txt [ to show the content of a file]
- ver - [to show the version of the window]
- date - [ to show or set the date]
- time - to show or set the time
- start - to start a new window of the cmd
- tasklist - to show currently running tasks and services
- cls - to clear the screen
- del filename - to delete one or more files
- dir - to show the list of the files and directory in current directory
- help
- exit
- move ../hello.txt ./  [to move or rename a file]
- dir /ah ==> to show hidden directory
- dir /ah-d ==> to show hidden file not hidden directories
- dir /a ==> to show all hidden and not hidden dirs
- help
- OTHER
- code . ==> to open VSCode with current folder
- start chrome ==> to open the Chrome
- start chrome <URL> ==> to open the chrome at URL
- start IExplore ==> to open the Internet Explorer
- start microsoft-edge: ==> to open microsoft Edge
- start . ==> open file explorer in current location
- netstat ==> show active connections
- ipconfig ==> retrive information about network
- ipconfig \a ==>
- help color
- color 0-f 0-f ==> for background and foreground color of the cmd
- color ==> set the default color

- prompt TEXT ==> change the prompt of cmd
- prompt ==> set the default prompt

- ipconfig | clip ==> to copy cmd output to the clipboard

- TO See Wifi Password
- netsh
- netsh> wlan show profile
- netsh> wlan show profile skr key=clear

- To show the cmd history
- f7
- doskey /history
- doskey /history >history.txt ==> to save the history to a file

- driverquery ==> list installed drivers
- netstat -an ==> list open ports
- systeminfo ==> show hardware information

- wmic product get name ==> show installed programes on system

- explorer "https://google.com" # to open default browser
- start opera "https://google.com" # to open opera
```

## VIM Introduction

- Modes

- Insert Mode (i)
- to change a mode press ESC

### Working with Files

```cmd
- Opening a file in vim
 	- vim hello.txt

- Saving a file in Vim

i) Saving a file and switching back to normal mode without closing vim
	- ESC + :w + ENTER
ii) Saving a file with another name
	- ESC + :w NEW_FILE_NAME + ENTER
iii) To save a file and Quit Vim
	- ESC + :wq + ENTER
	- ESC + :x + ENTER
	- Difference b/w :wq and :x
		- :wq - always write buffer to file so modify its time
		- :x - only write to file when there are unsaved changes

- Moving the Cursor
	- j - down
	- k - up
	- h - left
	- l - right
```

## Markdown Introduction

### Basics

- Extensions -- .md, .markdown
- Text Styling

```md
**Blod Text**
_Italic Text_
`Inline Code`
~~Strike through~~

> Quoted text
> [Linked Text](Link)

# Headinng Level 1

## Heading Level 2
```

- Lists

```md
1. Item 1
2. Item 2

- Item 1
- Item 2

* Item 1
* Item 2
```

- Task List

```md
[x] Task 1
[x] Task 2
```

- Tables

```md
| Column 1 | Column 2 |
| -------- | -------- |
| Row 1    | Row 1    |
| Row 2    | Row 2    |
```

- Images

```md
![Alert Text](image link)
```

- Code block

```EXTENSION -- {js, html, java, py}
<!-- here code will be there -->
```

- [GitHub Markdown Guide](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

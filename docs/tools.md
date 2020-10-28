---
title: Tools
---

## Deploy

- Using GitHub Pages
- Firebase Hosting
- Netlify
- Heroku

## Online IDEs

- GitPod
- Repl.it

## Tools for Website Testing

- [Can I Use](https://caniuse.com/)
- [Cross Browser Testing](http://browsershots.org/)
- [Lambda Test](https://accounts.lambdatest.com/dashboard)
- Browser Load Speed Test
  - [http://www.webpagetest.org/](http://www.webpagetest.org/)
  - [https://testmysite.thinkwithgoogle.com](https://testmysite.thinkwithgoogle.com)
  - [https://developers.google.com/speed/](https://developers.google.com/speed/)
  - [https://developers.google.com/speed/pagespeed/insights/](https://developers.google.com/speed/pagespeed/insights/)
  - [https://webhint.io/](https://webhint.io/)

## Git and GitHub Introduction

- Git - Distributed Version Control System

### Content

- Introduction
- Staging and Remote
- Cloning and Branching
- Collaboration
- Branching
- Rebase Belong to Us
- History and Configuration

### Introduction

- Checking Git is Installed or not `git --version`
- Use of Git
  - Keep track of the Changes in the code
  - Synchronize the code between different People
  - Test changes to code without losing the Original code using branches
  - Revert Back to the Old Version
- Configuring git

```cmd
// globally
git config --global user.email "email@example.com"
git config --global user.email
// locally
git config user.email "email@example.com"
git config user.email
// to see the list of configuration
git config --list
```

### Hello World

```cmd
git init
git add hello.txt
git commit -m  "Initial commit"
git status
git log
```

### Different ways to add files to stage Area

```cmd
git add <list of files> - Add the list of Files
git add -all - add all files
git add . - add all files
git add *.txt - add all txt files in current directory
git add docs/*.txt - add all txt files in docs directory
git add docs/ - add all files in docs directory
git add "*.txt" - add all files in the whole project
```

### Different Areas of Snapshot

- Working Area - tracked and Untracked files
- Staging Area
- Commited Area

### Staging and Remote

```cmd
git diff - show unstaged differences since last commit
git diff --staged - view staged differences
git reset HEAD <FILE> - to unstage
git checkout -- <FILE> - below awy the chenages since last commit
git commit -a -m "MESSAGE" - add and commit tracked file but not the untracked files
git reset --soft HEAD - Undoing a commit, --soft(reset into staging area)
```

- Adding staged files to the last commit `git commit --amend -m "NEW MESSAGE"`
  - `--amend` - add to last commit
  - `-m "MESSAGE"` - optional
  - Whatever is staged will be added to last commit
- Undoing last commit `git reset --hard HEAD^`
- Undoing last 2 commit `git reset --hard HEAD^^`
- Commands that does changes in the Commits should not be used after pushing the chenages
- HEAD - it refers to the last commit on the current branch
- Adding a remote `git remote add REMOTE_NAME REMOTE_URL`
  - REMOTE_NAME like - origin
- To see remotes `git remote -v`
- To change the remote URL `git remote set-url REMOTE_NAME REMOTE_NEW_URL`
- To push to remote `git push -u origin master`
  - -`u` - to set the upstream `--set-upstream`
- to pull the chanegs from remote `git pull`
- To remove a remote `git remote rm REMOTE_NAME`

### Cloning and Branching

- Cloning a repo
  - `git clone REMOTE_URL`
  - `git clone REMOTE_URL LOCAL_FOLDER_NAME`
- Creating a new Branch `git branch BRANCH_NAME`
- Listing out all the branches `git branch`
- Switching to a branch `git checkout BRANCH_NAME`
- Creacting and checkout branch `git checkout -b BRANCH_NAME`
- Merging two branches
  - I - `git checkout master`
  - II - `git merge BRNAHC_NAME`
- Deleting a branch when all things are commited `git branch -d BRANCH_NAME`
- Deleting a branch `git branch -D BRANCH_NAME` will delete the branch nomatter if there are something not commited
- Fast-Forward - when we doesn't do any changes in master branch and try to merge it with other branch the it is called fast-forward

### Collaboration Basics

- Pulling the changes from remote `git pull`
  - `git pull` is combination of two commands
    - I - git fetch
    - II - git merge origin/master

### Remote Branching and Taging

- Listing all the remote branches `git branch -r`

- [Git Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

### Pruning Local Branches

```cmd
git remote prune origin --dry-run ==> will list the branches to be pruned
git remote prune origin ==> will prune the local branches
git branch -a ==> to list all the branches
git branch -d BRANCH_NAME ==> to delete a branch
git branch -r ==> to list the remote branches
```

<!--
git branch -a ==> to see the remote branches after the cloning a remote repo
git clone <url>
git add <file_name>
git commit -m "message"
git status
git push
git pull
git log
git reset
git reflog
git branch <branch_name>
git branch
git checkout <branch_name>
git commit -am "message"
git merge <branch_name>
git fetch
git merge origin/master

- TODO
  - how to merge two repositories
- Pluralsight Git course: https://app.pluralsight.com/library/courses/code-school-git-real/table-of-contents
-->

### Others

- Monorepos
- [Git large File Storage](https://git-lfs.github.com)

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

## Shortcuts Sublime

```cmd
- ctrl + alt + down_arror : to make multiple cursor
- alt + f3 : to select all the same text on which currently cursor is
- ctrl + click : to add cursor to the position where we click
- ctrl + d : make multiple cursor at the next text under the cursor
- if we have copied using the multiple cursor then we can paste the data too
- ctrl + tab : to go to next tab
- ctrl + shift + tab : to go to previous tab
- ctrl + w : to close a tab
- ctrl + shit + t : to reopen the recently closed tab
- alt + shift+ (1,2,3,4): to open multiple layout
- alt + shift + (8,9) : to open to row layout
- alt + shift+ 5: to open 4 layout grid
- ctrl + shift + (up,down): to move a line up or dowm
- esc : to close the down bar
- ctrl + k + ctrl + b : to toogle the side bar
- ctrl + b : to run the build system
- ctrl + shift + b : to choose the build system
- ctrl + / : to do comment
- .someClassul>ul>li>a*8
```

## Shortcuts VSCode

- shift + alt : column selection
- alt + scroll : to scroll with the 5x speed

- code --help

- ctrl+k z : toogle zen mode
- ctrl + click : to add multiple cursors
- shift + alt + left/right : to select blocks

- ctrl + shift + o : to goto symbols
  @:
  @

- ctrl + shift + [ : to close the code folding
- ctrl + shift + ] : to open the code folding

- ctrl + space : for the suggestions of the code menbers

- to goto the defination
  alt + click :
  f12
  ctrl + click
  alt + left : to goto back the previous location

  alt + f12 : for the peek in the same file

<!--
{
    "workbench.colorCustomizations": {
        "window.activeBorder": "#1eff00",
        "window.inactiveBorder": "#ff0000"
    }
}
-->

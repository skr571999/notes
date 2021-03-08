---
title: Tools
---

## Deployment Tool

- Netlify
- Heroku

## Online IDEs

- https://www.gitpod.io/
- https://repl.it/
- https://runkit.com
- https://stackblitz.com/
- https://codesandbox.io/

## Other

- https://caniuse.com/
- https://sqliteonline.com/
- For Creating Table - https://stevecat.net/table-magic/
- Monitoring Up Time of Website - https://uptimerobot.com/
- For Looking the Size of NPM Packages - https://bundlephobia.com/
- For Testing UI - https://github.com/GoogleChromeLabs/ProjectVisBug
- For making Cloud Architecture - https://cloudcraft.co/
- Tool to Create Animations in Web - https://rive.app/
- Screen-shots device Mock-ups- https://mockuphone.com/
- NodeJS Virtual Environment - https://ekalinin.github.io/nodeenv/
- Explore GitHub API - https://api.github.com/repos/vercel/swr
- OpenSource Illustrations Images - https://undraw.co/illustrations
- Text Formatting - https://yaytext.com/script/
- Linux Container - https://linuxcontainers.org/lxd/try-it
- CSS Clip Path - https://bennettfeely.com/clippy/
- VScode Extension for Problem Solving - https://marketplace.visualstudio.com/items?itemName=DivyanshuAgrawal.competitive-programming-helper
- Website to Know about Startup Funding - https://www.crunchbase.com/organization/milkbasket
- Text Difference Checker - https://www.diffchecker.com/diff
- New Browser - https://vivaldi.com/
- For Coding Practice - https://edabit.com/challenges
- For Resume Building - https://standardresume.co/tech

## Git and GitHub

- Git - Distributed Version Control System
- References
  - https://app.pluralsight.com/library/courses/code-school-git-real/table-of-contents
  - https://www.atlassian.com/git/tutorials
- Monorepos
  - where code for many projects are stored in same repository
- [Git large File Storage](https://git-lfs.github.com)
- Use of Git
  - Keep track of the Changes in the code
  - Synchronize the code between different People
  - Test changes to code without losing the Original code using branches
  - Revert Back to the Old Version
- Different Areas of Snapshot
  - Working Area - tracked and Un-tracked files
  - Staging Area
  - Committed Area
- Commands that does changes in the Commits should not be used after pushing the changes
- HEAD - it refers to the last commit on the current branch
- Fast-Forward - when we doesn't do any changes in master branch and try to merge it with other branch the it is called fast-forward
- [Git Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

```sh
# - Checking Git is Installed or not
git --version

### - Configuring git
# // globally
git config --global user.email "email@example.com"
git config --global user.email
# // locally
git config user.email "email@example.com"
git config user.email
# // to see the list of configuration
git config --list

### - Basic Usage
git init
git add hello.txt
git commit -m  "Initial commit"
git status
git log

### Different ways to add files to stage Area
git add <list of files> - Add the list of Files
git add -all - add all files
git add . - add all files
git add *.txt - add all txt files in current directory
git add docs/*.txt - add all txt files in docs directory
git add docs/ - add all files in docs directory
git add "*.txt" - add all files in the whole project

### Staging and Remote
# - show unstaged differences since last commit
git diff
# - view staged differences
git diff --staged
# - to unstage
git reset HEAD <FILE>
# - below awy the changes since last commit
git checkout -- <FILE>
# - add and commit tracked file but not the untracked files
git commit -a -m "MESSAGE"
# - Undoing a commit, --soft(reset into staging area)
git reset --soft HEAD

# - Adding staged files to the last commit
git commit --amend -m "NEW MESSAGE"

# - Undoing last commit
git reset --hard HEAD^
# - Undoing last 2 commit
git reset --hard HEAD^^

# - Adding a remote
git remote add REMOTE_NAME REMOTE_URL
# - To see remotes
git remote -v

# - To change the remote URL
git remote set-url REMOTE_NAME REMOTE_NEW_URL
# - To push to remote : `-u` to set the upstream `--set-upstream`
git push -u origin master
# - to pull the changes from remote
git pull
# - To remove a remote
git remote rm REMOTE_NAME

# - Cloning a repo
git clone REMOTE_URL
git clone REMOTE_URL LOCAL_FOLDER_NAME

# - Creating a new Branch
git branch BRANCH_NAME
# - Listing out all the branches
git branch
# - Switching to a branch
git checkout BRANCH_NAME
# - Creating and checkout branch
git checkout -b BRANCH_NAME
# - Merging two branches
git checkout master
git merge BRANCH_NAME
# - Deleting branch when all things are committed
git branch -d BRANCH_NAME
# - Deleting branch no matter if there is something not committed
git branch -D BRANCH_NAME
# - Pulling the changes from remote
git pull
# - git pull is combination of two commands
# 1. `git fetch`
# 2. `git merge origin/master`

### - Pruning Local Branches
# ==> will list the branches to be pruned
git remote prune origin --dry-run
# ==> will prune the local branches
git remote prune origin

###  Displaying Branches with Filters
# ==> to list all the branches
git branch -a
# ==> to delete a branch
git branch -d BRANCH_NAME
# ==> to list the remote branches
git branch -r

### Other Unorganized
git status
git reset
git reflog
git commit -am "message"
git merge <branch_name>
git fetch
git merge origin/master

### Git Rebase with Github
# current branch feature
- git rebase origin/master
	# - Accept the current change only
- git add .
- git commit -a
- git rebase --continue

- git log --oneline --graph
- git push origin feature --force

### Git Stashing
git stash save Name
git stash apply stash@{STASH_ID}
git stash pop stash@{STASH_ID}
git stash list
# Also after applying or popping  a stash we need to first commit only after that we can apply another one

### Resolving conflict on Git and GitHub
# I - when having only one commit
- git stash
- git pull
- git stash pop // git stash apply
- create a new branch and commit your changes
# II -
- git fetch --all
# - go to your branch
- git pull origin master
# - Then resolve the conflict and commit the changes your changes will not be having the conflict

# To show log message in one line
- git log --pretty=oneline --abrev-commit

# To get the changes from the Master branch to the another branch
git checkout BRANCH_NAME
git rebase master

# Pull code from parent of forked Repo
git pull upstream master
git pull master

# Add the Upstream branch in a forked repo
git remote add upstream <repo_URL>
git remote -v

# To merge BRANCH to main with only one final commit
git merge --squash BRANCH_NAME

# to do a empty commit
git commit --allow-empty -m "Empty Commit"

# to rollback pull
git reset --hard

# git branch description
git config.branch.dev.description

# Adding tag to a particular commit and Pushing Tags to Remote
git tag -a TAG_NAME COMMIT_HASH -m "Message here"
# Ex. git tag -a v1.2 9fceb02 -m "Message here"

# Pushing tags to remote
git push origin --tags
```

## Postman / Insomnia

- Setup Environment Variable in a Collection

```js
// - Code to be pasted in Tests Tab of a Request

var jsonData = JSON.parse(responseBody);
pm.environment.set("ACCESS_TOKEN", jsonData["access"]);

// - Using the Set variable : `{{ACCESS_TOKEN}}`
```

## Heroku

```sh
heroku login # Login to heroku `
heroku create # Creating an heroku app(repo)
git push heroku master # Pushing the changes
heroku run bash # Running the Heroku bash in local system
heroku logs --tail # Logging logs
heroku open # To Open the App
heroku auth:whoami # To see the login ID
heroku git:clone -a APP_NAME # to clone a heroku app
```

- [Renaming the app](https://devcenter.heroku.com/articles/renaming-apps)

## Screen Commands in Linux

- By using Screen command in Linux we can start multiple shell session at the same time and use them.
- [https://www.geeksforgeeks.org/screen-command-in-linux-with-examples/](https://www.geeksforgeeks.org/screen-command-in-linux-with-examples/)

```sh
# - Installing Screen
	- sudo apt install screen
# - Start a Screen Session
	- sudo screen
	- sudo screen -S SESSION_NAME
# - See the List of the Screens
	- sudo screen -ls
# - To detach a Screen
	- screen -d SESSION_ID
# - To attach to a detached Screen
	- screen -r SESSION_ID
# - To Close a Screen
	# - I - Go to that screen
	# - II - type exit
# - To attach to a not detached Screen
	- screen -x SESSION_ID
# - To rename a session
	- I - Go to that Session Screen
	- II - (CTRL + A) + type :sessionname NEW_SESSION_NAME
# - To see the current Session name
	- I - Go to that Session
	- II - echo $STY
```

## CMD Usage

```sh
- rd/rmdir # to delete an empty directory
- rmdir /s DIRECTORY_NAME # to delete an directory containing file
- copy # to move files to another location
- more # to see the content of a file
- path # to set or display the PATH Environment Variable
- ren/rename # to rename a file
- calc # to open the calculator
- title # to set the window title
- vol
- dir > hello.txt # [to create a file]
- C: # [ to change the drive]
- cd / chdir #  [ to change the directory]
- cd..  # [ to go to the parent directory]
- cd  # [to show the current directory]
- mkdir/md # [to make the directory]
- mkdir src build/{html, images, js} # to make folders
- type hello.txt # [ to show the content of a file]
- ver # [to show the version of the window]
- date # [ to show or set the date]
- time # to show or set the time
- start # to start a new window of the cmd
- tasklist # to show currently running tasks and services
- cls # to clear the screen
- del filename # to delete one or more files
- dir # to show the list of the files and directory in current directory
- help
- exit
- move ../hello.txt ./ # [to move or rename a file]
- dir /ah # to show hidden directory
- dir /ah-d # to show hidden file not hidden directories
- dir /a # to show all hidden and not hidden dirs
- help
- OTHER
- code . # to open VSCode with current folder
- start chrome # to open the Chrome
- start chrome <URL> # to open the chrome at URL
- start IExplore # to open the Internet Explorer
- start microsoft-edge: # to open microsoft Edge
- start . # open file explorer in current location
- netstat # show active connections
- ipconfig # retrieve information about network
- ipconfig \a #
- help color
- color 0-f 0-f # for background and foreground color of the cmd
- color # set the default color

- prompt TEXT # change the prompt of cmd
- prompt # set the default prompt

- ipconfig | clip # to copy cmd output to the clipboard

# - TO See Wi-fi Password
- netsh
- netsh> wlan show profile
- netsh> wlan show profile skr key=clear

# - To show the cmd history
- f7
- doskey /history
- doskey /history >history.txt # to save the history to a file

- driverquery # list installed drivers
- netstat -an # list open ports
- systeminfo # show hardware information

- wmic product get name # show installed programs on system

- explorer "https://google.com" # to open default browser
- start opera "https://google.com" # to open opera

# whereis(bash) --> where(cmd)
```

## VIM Usage

- Modes
  - Insert Mode (i)
  - to change a mode press ESC
- Working with Files
  - Opening a file in vim `vim hello.txt`
  - Saving a file in Vim
  - Saving a file and switching back to normal mode without closing vim
    - `ESC + :w + ENTER`
  - Saving a file with another name
    - `ESC + :w NEW_FILE_NAME + ENTER`
  - To save a file and Quit Vim
    - `ESC + :wq + ENTER`
    - `ESC + :x + ENTER`
    - Difference b/w `:wq` and `:x`
      - `:wq` - always write buffer to file so modify its time
      - `:x` - only write to file when there are unsaved changes
- Moving the Cursor
  - j - down
  - k - up
  - h - left
  - l - right

## Sublime Shortcuts

- `ctrl + alt + down_arrow` : to make multiple cursor
- `alt + f3` : to select all the same text on which currently cursor is
- `ctrl + click` : to add cursor to the position where we click
- `ctrl + d` : make multiple cursor at the next text under the cursor
- `ctrl + tab` : to go to next tab
- `ctrl + shift + tab` : to go to previous tab
- `ctrl + w` : to close a tab
- `ctrl + shit + t` : to reopen the recently closed tab
- `alt + shift + (1,2,3,4)`: to open multiple layout
- `alt + shift + (8,9)` : to open to row layout
- `alt + shift + 5` : to open 4 layout grid
- `ctrl + shift + (up,down)` : to move a line up or down
- `esc` : to close the down bar
- `ctrl + k + ctrl + b` : to toggle the side bar
- `ctrl + b` : to run the build system
- `ctrl + shift + b` : to choose the build system
- `ctrl + /` : to do comment
- `.someClass>ul>li>a*8`

## Redirect in Netlify for ReactJS

Place a `_redirects` file in `public` folder with following content

```
/*  /index.html  200
```

## Setting Up Husky

```bash
cd FOLDER_NAME
git init
npm init -y
yarn add -D husky lint-staged prettier
```

- Add following code to `package.json` file

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "./src/*.{js,jsx,ts,tsx}": ["npx prettier --write"]
  },
  "dependencies": {}
}
```

- Create some `.js` file in `src` folder

```jsx
// src/sum.js
function sum(a, b) {
  console.log("Hello world");
  return a + b;
}

module.exports = sum;
```

- Now, when we are going to commit it will **format the code** before committing

```bash
git commit -m "COMMIT MESSAGE"
```

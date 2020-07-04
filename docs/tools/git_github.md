# Git and GitHub

- Git - Distributed Version Control System

## Content

- Introduction
- Staging and Remote
- Cloning and Branching
- Collaboration
- Branching
- Rebase Belong to Us
- History and Configuration

## Introduction

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

## Staging and Remote

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

## Cloning and Branching

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

## Collaboration Basics

- Pulling the changes from remote `git pull`
  - `git pull` is combination of two commands
    - I - git fetch
    - II - git merge origin/master

## Remote Branching and Taging

- Listing all the remote branches `git branch -r`

- [Git Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

## Rebase belong to Us

## History and Configurations

## Other

- Branching
- Pull Request
- Merging
- Remote Repo
- Cloning
- Forking
- Merge Conflict

### Pruneing Local Branches

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

- Monorepos
- [Git large File Storage](https://git-lfs.github.com)

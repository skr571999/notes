---
title: Git and GitHub
---

## References

- https://git-scm.com/doc
- https://git-scm.com/book/en/v2
- https://app.pluralsight.com/library/courses/code-school-git-real/table-of-contents
- https://www.atlassian.com/git/tutorials

## Use of Git

- Keep track of the Changes in the code
- Synchronize the code between different People
- Test changes to code without losing the Original code using branches
- Revert Back to the Old Version

## Terminology

- Different Areas of Snapshot

  - Working Area - tracked and Un-tracked files
  - Staging Area
  - Committed Area

- Commands that does changes in the Commits should not be used after pushing the changes
- HEAD - it refers to the last commit on the current branch
- Fast-Forward - when we doesn't do any changes in master branch and try to merge it with other branch the it is called fast-forward

## Basic Usage

```sh
git init
git add hello.txt
git commit -m  "Initial commit"
git status
git log

# Checking Git is Installed or not
git --version
```

### Different ways to add files to stage Area

```sh
git add <list of files> # Add the list of Files
git add -all # add all files
git add . # add all files
git add *.txt # add all txt files in current directory
git add docs/*.txt # add all txt files in docs directory
git add docs/ # add all files in docs directory
git add "*.txt" # add all files in the whole project
```

## Un Organized

```sh
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

### Other Unorganized
git status
git reset
git reflog
git commit -am "message"
git merge <branch_name>
git fetch
git merge origin/master

# To get the changes from the Master branch to the another branch
git checkout BRANCH_NAME
git rebase master

# Pull code from parent of forked Repo
git pull upstream master
git pull master

# Add the Upstream branch in a forked repo
git remote add upstream <repo_URL>
git remote -v

# to do a empty commit
git commit --allow-empty -m "Empty Commit"

# to rollback pull
git reset --hard


# to add the file to stage area
git add app.js

# to remove the file from stage area
git reset HEAD app.js
```

## Configuring git

```sh
# // globally
git config --global user.email "email@example.com"
git config --global user.email
# // locally
git config user.email "email@example.com"
git config user.email
# // to see the list of configuration
git config --list
```

## Git Stashing

```sh
git stash
# stash with a name
git stash save Name

git stash apply stash@{STASH_ID}
git stash pop stash@{STASH_ID}
# to show all stash
git stash list

# Also after applying or popping  a stash we need to first commit only after that we can apply another one
```

## Adding tag to a particular commit and Pushing Tags to Remote

```sh
git tag -a TAG_NAME COMMIT_HASH -m "Message here"
# Ex. git tag -a v1.2 9fceb02 -m "Message here"
# Pushing tags to remote
git push origin --tags
```

## Resolving conflict on Git and GitHub

```sh
# I - when having only one commit
git stash
git pull
git stash pop # git stash apply
# create a new branch and commit your changes

# II -
git fetch --all
# - go to your branch
git pull origin master
# - Then resolve the conflict and commit the changes your changes will not be having the conflict

# III
# To merge BRANCH to main with only one final commit
git merge --squash BRANCH_NAME
```

## Git Rebase with Github

```sh
# current branch feature
- git rebase origin/master
  # - Accept the current change only
- git add .
- git commit -a
- git rebase --continue
- git log --oneline --graph
- git push origin feature --force

# to see the changes in the files in commits
git log -p
```

## Pruning Local Branches

```sh
# ==> will list the branches to be pruned
git remote prune origin --dry-run
# ==> will prune the local branches
git remote prune origin
```

## Displaying Branches with Filters

```sh
# ==> to list all the branches
git branch -a
# ==> to delete a branch
git branch -d BRANCH_NAME
# ==> to list the remote branches
git branch -r
```

## Merging Two or More GitHub repos without losing History

- https://saintgimp.org/2013/01/22/merging-two-git-repositories-into-one-repository-without-losing-file-history/

```sh
git remote add -f old_a REPO_URL

git merge old_a/main --allow-unrelated-histories

git remote remove old_a
```

## Renaming/Deleting the Branch

```sh
# when on the same brnach
git branch -m <newname>
# When on a different Branch
git branch -m <oldname> <newname>
# Deleting remote branch
git push origin --delete feature/login
```

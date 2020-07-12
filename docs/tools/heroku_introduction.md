---
title: Heroku Introduction
---

- Requirements
  - Git
  - Heroku CLI

## Introduction

- Login to heroku `heroku login`
- Creating an heroku app(repo) `heroku create`
- Pushing the changes `git push heroku master`
- Running the Heroku bash in local system `heroku run bash`
- Logging logs `heroku logs --tail`
- To Opent the App `heroku open`
- To see the login ID `heroku auth:whoami`

## Renaming the app

### Method I - after changing from the dashboard

- I - rename the app from the heroku dashboard
- II - to update the remote name in systme now
  - I - go to the folder
  - II - remove the old remote `git remote rm heroku`
  - III - add the new remote `heroku git:remote -a NEW_NAME`

### Method - II - not changing from dashboard

- If we are in same folder then `heroku apps:rename NEW_NAME`
- If we are on a different location `heroku apps:rename NEW_NAME --app OLD_NAME`

---
id: _index
title: Home Page
hide_title: true
hide_table_of_contents: true
sidebar_label: Home Page
---

import TableOfContent from './TableOfContent';

## Select a Topic

<TableOfContent></TableOfContent>

## New Technologies

## Firebase

- Hosting
- Cloud Messaging
- Firestore

## NextJS

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

```
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

## GraphQL

## Redux

## Web Components

## TypeScript

## Web Assembly

## Flutter (Fuchsia)

## Server Less

## Decentralized Apps

## ML

## Docker

### References

- https://docs.docker.com/get-started/
- https://youtu.be/pTFZFxd4hOI
- https://www.youtube.com/playlist?list=PLRAV69dS1uWTJLvDP4Veld5F05rJAmOcp by Hitesh Choudhary
- Online Docker Lab: https://labs.play-with-docker.com
- https://docker-curriculum.com/

- Every container have it own port that does not have any interaction with other container port
  - i.e. if we are running two containers which uses same port then it will work without a problem

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

```sh
# - Busybox Image
docker install busybox
docker run busybox
docker run busybox ls

# - Mongo Image
docker run mongo # install and run the mongo image
docker ps --all # to see the list of all the images
docker start <Container ID> # to start the container
docker exec -it <Container ID> bash # to open the bash in docker container
  mongo # to run the mongo in docker container
docker stop <Container ID> # to stop the container
docker kill <Container ID> # to kill the container without waiting to stop the resources

docker run -it mongo bash # to directly run the container and go to its bash (*not recommended)

docker exec -it CONTAINER_ID COMMAND
```

- Docker Engine
- Docker Image
- Docker Container

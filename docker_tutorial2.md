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


## Monolithic vs MicroService

- Moving from Monoliths to Microservices - GauravSen
  - https://youtu.be/rckfN7xFig0

Monolithic
- Difficult to deploy big applications
- Scalability
  - When we scale the application server we need to scale whole app instead in MicroServices we can just scale the module that is needed


- MicroServices talk to each other by HTTP, gRPC

MicroServices
- Advantages
  - Deployment Flexibility
  - Technology Flexibility
    - we can develop different MicroService in different languages as well
  - Can be scaled Separately
- Disadvantages
  - Deployment/Architecture complicity



MicroServices Architecture
- Contract
- Router
- Simplify Deployment
- Communication
- Logging


Points to Remember for MicroService
- Single Source of Truth
  - dedicated data store for each MicroService
- Condense Business responsibilities to be at single place
- Initial Infrastructure cost is high



- MESSAGE BROKER - A message broker is an architectural pattern for message validation, transformation, and routing. It mediates communication among applications, minimizing the mutual awareness that applications should have of each other in order to be able to exchange messages, effectively implementing decoupling.

- Message queue architecture - A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures. Messages are stored on the queue until they are processed and deleted. Each message is processed only once, by a single consumer.

- Python Micro-service
  - https://www.youtube.com/watch?v=ddrucr_aAzA&ab_channel=ScalableScripts
  - https://github.com/scalablescripts/python-microservices


- Docker Engine
- Docker Image
- Docker Container
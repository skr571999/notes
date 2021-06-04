# Docker Tutorial for Beginners [FULL COURSE in 3 Hours]

- https://youtu.be/3c-iBn73dDE


## What is Docker?

- What is a container and what problem does it solve?
	- A way to package application with all the necessary dependencies and configuration
	- portable artifact, easily shared and moved around 
	- makes development and deployment more efficient
- Where does container Images live?
	- In Container repository
		- Private repositories
		- Public repositories
			- Docker Hub
- How container improves the application development
	- before container 
		- we need to install all the dependencies
		- Installation process different on each OS Environment
		- Many steps are there to install some of them can go wrong
	- After container
		- we are not required to install the dependencies as Docker image is a kind of configuration that will contain all of these information
		- so to install we just need to find the repository and run docker command to run that
- How container improves the application deployment
	- before container
		- in a normal flow first Dev Team will share the Application files and the Configuration required for dependencies to be install to Operation Team
		- so now Operation team will install the dependencies and ac to configurations but some error can happen due to miss understanding
	- After container
		- Dev and Operation Team work together to package the application in a container
		- No environmental configuration needed on server - except Docker runtime 

## What is Container?

- Layer of Images
- Most Linux Base Image, because small in size
- Layers
	- Application Image --> Intermediate Images Layer --> Base Layer Image 

### Example - PostgreSQL

- https://hub.docker.com/_/postgres
- https://www.optimadata.nl/blogs/1/n8dyr5-how-to-run-postgres-on-docker-part-1
- https://www.postgresqltutorial.com/

```sh
# to run postgres in docker
docker run -e POSTGRES_PASSWORD=root -d postgres:12-alpine

# to get into running container
docker exec -it CONTAINER_ID sh

# to start postgres
su postgres

# to go to psql shell
psql

# postgreSQL commands
# - to see the connection info
\conninfo 

# - to see the list of the databases
\l

# - to switch to a different database
\c DATABASE_NAME

# - to exit
\q 
```

- Docker images are separated as layers and each layer is downloaded only once
	- so suppose if pull postgres-12 so it will pull all of the Layers of image
	- and now suppose we are to pull postgres-13 so it will pull the layers but as we have postgres-12 already some of the layers may be some in both so it will not download them again


- Docker Image vs Docker Container
	- Docker Image is actual package which contain all the configurations
	- while docker container is where docker images are run


## Docker vs Virtual Environment

- Docker on OS Level
	- Operation System Layers
		- Application Layer --> Ubuntu, Fedora, etc.
		- OS Kernel --> Linux
		- Hardware
	- Both Docker and VM are virtualization tool
	- Which Part does they Virtualize
		- Docker Virtualize the Application Part
		- VM Virtualize both (Kernal as well as Application Part)
	- Due to how they do Virtualization there are the difference
		- Size: Docker Image is Small
		- Speed: Docker containers are fast
		- Compatibility: VM of any OS can run on any OS Host but not docker directly
- Different Levels of Abstractions
- Why linux-based docker containers don't run on windows 
	- because docker uses the Host Kernel and windows Kernel is not compatible to run Docker images directly 
	- to run docker on Old Window we need to use Docker Toolbox

## Docker Installation

- https://docs.docker.com/engine/install/

## Main Docker Commands

- Container vs Image
	- CONTAINER is a running environment for IMAGE
	- Container has
		- virtual File System
		- It have option of Port Binded - talk to application running inside of container
		- Application Image
- Version and Tag
- Docker Commands
	- docker pull, docker run, docker start, docker stop, docker ps, docker exec -it, docker logs

	- docker run -d IMAGE_NAME --> to run in background
	- docker stop CONTAINER_ID --> to stop Container
	- docker start CONTAINER_ID --> to start a stopped Container
	- docker ps --> to see list of all running containers
	- docker ps -a --> to see all running and Stopped Containers
	- docker pull redis --> to pull the latest redis image
	- docker pull redis:4.0 --> to pull redis 4.0 
	- docker run -p 3000:3000 IMAGE_NAME
- Container PORTS and HOST PORTS
	- to make use of a container we need to bind the port of the container with the port of the host machine
	- but there can we conflict when we try to bind two or more container ports to same host ports


## Debugging a Container
# Set up a React app with a Flask and MongoDB backend using Docker

This repository contains example code showing how to to set up and containerize a full stack web application with a React frontend, a Flask RESTful API and a MongoDB database using Docker. It includes one docker-compose file to set up a development environment and a docker-compose-prod file to set up a production environment.

Further instructions on how to run the example code can be found in this Medium article: https://medium.com/@lotrproject/how-to-set-up-a-react-app-with-a-flask-and-mongodb-backend-using-docker-19b356180199

## Installation
* Prerequisite: Docker and docker-compose (newest version)

## Running the application
**1. Development Purpose**
* Setup the docker containers:
```bash
docker-compose up -d
```
* Create an API user in MongoDB:
```bash
docker exec -it mongo bash
mongo -u admin -p
```
```sql
> use webapp
> db.createUser({user: 'apiuser', pwd: 'apipassword', roles: [{role: 'readWrite', db: 'webapp'}]})
```

**2. Production Purpose**
* To be updated

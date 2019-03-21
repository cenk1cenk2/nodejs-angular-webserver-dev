```
name:         | nodejs-angular-webserver-dev
compiler:     | docker-compose + dockerfile
version:      | v1.3, 201900321
```

## Description:

This script compiles a container to run a Angular.io web server to develop on. 
It auto creates a new project if the project folder is empty.

## Setup:

**Fast Deploy**
* `cp website-files ./src` or it will create a new project 
* `chmod +x init-env.sh && ./init-env.sh`
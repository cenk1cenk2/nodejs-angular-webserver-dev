```
name:         | nodejs-angular-webserver-dev
compiler:     | docker-compose + dockerfile
version:      | v1.5, 20200218
```

## Description:

This script compiles a container to run a Angular web server to develop on.
It auto creates a new project if the project folder is empty.

## Setup:

**Fast Deploy**
* `chmod +x init-env.sh && ./init-env.sh`
* `cp website-files ./src` or it will create a new project
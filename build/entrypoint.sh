#!/bin/bash

# Require all enviromental variables as essential
set -o

echo "nodejs-angular-webserver-dev @ docker-compose + dockerfile"

# Create new project if no project in mount exists
if [ ! -d /data/app/src ]; then
    echo "No project detected, initiating a new @angular project first."
    cd /data/app/ && ng new tempproject --routing --style=scss && npm rebuild node-sass
    mv /data/app/tempproject/* /data/app/
    rm -r /data/app/tempproject
    rm /data/app/README.md
fi

# Start test server
echo "Starting test server."
echo "Installing all nodejs dependencies or looking for update."
npm i --unsafe-perm 
echo "Poll time is stated as ${POLLINT}"
ng serve --watch --host 0.0.0.0 --poll ${POLLINT} --disable-host-check

# Graceful shutdown
# function finish {
#   echo "testing exit"
#   exit 0
# }
# trap finish TERM
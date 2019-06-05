#!/bin/bash

# Require all enviromental variables as essential
set nounset

# Header
echo "nodejs-angular-webserver-dev @ docker-compose + dockerfile"
echo "--------------------------------------------------------------------------"

# Create new project if no project in mount exists
if [ ! -d /data/app/src ]; then
  echo
  echo "No project detected, initiating a new @angular project first."
  echo "--------------------------------------------------------------------------"
  cd /data/app/ && ng new tempproject --routing --style=scss && npm rebuild node-sass > /dev/null
  mv /data/app/tempproject/* /data/app/ > /dev/null
  rm -r /data/app/tempproject > /dev/null
  rm /data/app/README.md > /dev/null
fi

# Start test server
echo
echo "Starting test server."
echo "--------------------------------------------------------------------------"
echo
echo "Installing all nodejs dependencies or looking for update."
echo "--------------------------------------------------------------------------"
yarn
echo
echo "Poll time is stated as ${POLLINT}ms."
echo "--------------------------------------------------------------------------"
ng serve --watch --host 0.0.0.0 --poll ${POLLINT} --disable-host-check

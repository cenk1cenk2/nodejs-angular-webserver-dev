#!/bin/sh

# Require all enviromental variables as essential
set nounset

# Header
echo "nodejs-angular-webserver-dev @ docker-compose + dockerfile"
echo "------------------------------"

# Create new project if no project in mount exists
if [ ! -d /data/app/src ]; then
  echo "No project detected, initiating a new @angular project first."
  echo "------------------------------"
  eval ng new ${ANGULAR_INIT_PROJECT:-"tempproject"} --directory ./ ${ANGULAR_INIT_ARGUMENTS:-"--routing --style=scss"} > /dev/null
  "# ${ANGULAR_INIT_PROJECT:-'tempproject'}" > README.md
fi

# Start test server
echo "Installing all nodejs dependencies or looking for update."
yarn

if [[ ! -z ${ANGULAR_WATCH_MODE} ]]; then
  echo "Poll time is stated as ${ANGULAR_WATCH_MODE}ms."
  echo "------------------------------"
  ng serve --watch --host 0.0.0.0 --poll ${ANGULAR_WATCH_MODE} --disable-host-check
else
  echo "Running package command: ${ANGULAR_PACKAGE_COMMAND}."
  echo "------------------------------"
  yarn run ${ANGULAR_PACKAGE_COMMAND}
fi



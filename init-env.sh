#!/bin/bash

echo "init-env.sh@sh: v2.1, 20190321"
## Variables
# Write down the data required in .env file here for initiation.
ENVFILENAME=.env
ENVFILECONTENTS=(
  "## Variables"
  "# Output Port"
  "ANGULAR_PORT="
  "# Watch Mode, set to miliseconds to start directly in watch mode"
  "ANGULAR_WATCH_MODE=3000"
  "# Select enviroment, can be set to development or build"
  "ANGULAR_PACKAGE_COMMAND="
  "# If project will be initated from scratch give it a name, ignore otherwise"
  "ANGULAR_INIT_PROJECT="
  "# Project init command defaults to \"--routing --style=scss\""
  "ANGULAR_INIT_ARGUMENTS="
)

## Script
echo "Initiating ${ENVFILENAME} file."; if [[ ! -f ${ENVFILENAME} ]] || ( echo -n ".env file already initiated. You want to override? [ y/N ]: " && read -r OVERRIDE && echo ${OVERRIDE::1} | grep -iqF "y" ); then echo "Will rewrite the .env file with the default one."; > ${ENVFILENAME} && for i in "${ENVFILECONTENTS[@]}"; do echo $i >> ${ENVFILENAME}; done; echo "All done."; else echo "File already exists with no overwrite permission given."; echo "Not doing anything."; fi
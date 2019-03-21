#!/bin/bash

echo "init-env.sh@bash: v2.0, 20190321"
## Variables
# Write down the data required in .env file here for initiation.
ENVFILENAME=.env
ENVFILECONTENTS=(
        "## Variables" 
        "# Pole interval for ng serve server to look for updates in miliseconds" \
        "POLLINT=" \
        "## Rest of the data is static"
        "NODE_ENV=development" \
        )

## Script
echo "Initiating ${ENVFILENAME} file."; if [[ ! -f ${ENVFILENAME} ]] || ( echo -n ".env file already initiated. You want to override? [ y/N ]: " && read -r OVERRIDE && echo ${OVERRIDE::1} | grep -iqF "y" ); then echo "Will rewrite the .env file with the default one."; > ${ENVFILENAME} && for i in "${ENVFILECONTENTS[@]}"; do echo $i >> ${ENVFILENAME}; done; echo "Opening enviroment file in nano editor."; nano ${ENVFILENAME}; echo "All done."; else echo "File already exists with no overwrite permissiong given."; echo "Not doing anything."; fi
#!/bin/sh

if [ ! -d /data/app/src ]; then
    echo "No project detected, initiating a new @angular project first."
    cd /data/app/ && ng new tempproject --routing --style=scss && npm rebuild node-sass
    mv /data/app/tempproject/* /data/app/
    rm -r /data/app/tempproject
fi
echo "Starting test server."
npm i --unsafe-perm && ng serve --watch --host 0.0.0.0 --poll 3 --disable-host-check
#!/usr/bin/env bash

die() { echo "$*" 1>&2 ; exit 1; }

echo 'Running strikepro-adminpanel local development container.'

read -p 'Type host port (default: 4002): ' HOST_PORT
read -p 'Type host project path (required): ' HOST_PATH

# Checking if $HOST_PATH set
if [[ -z $HOST_PATH ]]
then
    die 'Host project path is required!'
fi

read -p 'Type docker image tag (default: latest): ' DOCKER_IMAGE_TAG

HOST_PORT=${HOST_PORT:-4002}
CONTAINER_PORT=4000
CONTAINER_PATH='/home/node/app'
DOCKER_IMAGE_TAG=${DOCKER_IMAGE_TAG:-latest}

echo "Run strikepro/adminpanel-frontend:${DOCKER_IMAGE_TAG}..."
docker run -it -u node -p $HOST_PORT:4000 --name strikepro_adminpanel_frontend -v "$HOST_PATH":"$CONTAINER_PATH" --rm strikepro/adminpanel-frontend:$DOCKER_IMAGE_TAG

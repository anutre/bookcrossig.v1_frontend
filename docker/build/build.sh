#!/bin/bash

set -e

source ../scripts/builder.sh

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Error: version and/or build number of version are wrong, for example: ./build.sh 8.3.7 1"
    exit 1
fi

build $1 $2 "ghcr.io/anutre/base-frontend" "base-project-builder-frontend" "./docker/build"

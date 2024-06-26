#!/bin/bash

set -e

function build() {
    if [ -z "$1" ]; then
        echo "Error: version is invalid"
        exit 1
    fi

    if [ -z "$2" ]; then
        echo "Error: build number is invalid"
        exit 1
    fi

    if [ -z "$3" ]; then
        echo "Error: Container Registry's path is invalid"
        exit 1
    fi

    if [ -z "$4" ]; then
        echo "Error: BUILDER's name is invalid"
        exit 1
    fi

    if [ -z "$5" ]; then
        echo "Error: target Dockerfile is invalid"
        exit 1
    fi

    echo "Checking git..."

    local GIT_VERSION="$(git --version)"

    if [ "$GIT_VERSION" != "command not found" ]; then
        echo "git already installed"
    else
        echo "Error: git is missing"
        exit 1
    fi

    local VERSION=$1
    local BUILD_NUM=$2
    local TAG="$VERSION-$BUILD_NUM"
    local CONTAINER_REGISTRY=$3
    local ROOT_DIR=$(git rev-parse --show-toplevel)
    local DOCKER_BUILDER=$4
    local DOCKER_FILE=$5
    local DOCKER_BUILDER_PLATFORM_AMD="linux/amd64"
    local DOCKER_BUILDER_PLATFORM_ARM="linux/arm64"
    local DOCKER_BUILDER_PLATFORMS="$DOCKER_BUILDER_PLATFORM_AMD,$DOCKER_BUILDER_PLATFORM_ARM"
    local DOCKER_MANIFEST="$CONTAINER_REGISTRY:$TAG"
    local DOCKER_MANIFEST_MEDIA_TYPE="application/vnd.docker.distribution.manifest.list.v2+json"

    echo "Authenticating...on ghcr.io registry"
    docker login ghcr.io || exit 1

    echo "Root dir: $ROOT_DIR"
    echo "Docker manifest will be: $DOCKER_MANIFEST"

    if [ ! "$(docker buildx ls | grep -i $DOCKER_BUILDER_PLATFORM_AMD | grep -i $DOCKER_BUILDER_PLATFORM_ARM)" ]; then
        echo "All required drivers haven't been found!"
        echo "Run the following command:"
        echo "docker run --privileged --rm tonistiigi/binfmt --install all"
        echo "Here is more info on how it works: https://github.com/tonistiigi/binfmt"
        exit 1
    fi

    echo "All required drivers have been found..."

    cd "$ROOT_DIR" || exit 1

    [[ "$(docker buildx ls | grep -i ${DOCKER_BUILDER})" ]] && docker buildx rm ${DOCKER_BUILDER} \

    docker buildx create --name ${DOCKER_BUILDER} --use \
    && \

    docker buildx build --provenance=false --push --platform ${DOCKER_BUILDER_PLATFORMS} --build-arg APP_VERSION="$VERSION" -t "$DOCKER_MANIFEST" "$DOCKER_FILE" \
    && \

    docker buildx rm ${DOCKER_BUILDER}

    if [ "$(docker manifest inspect $DOCKER_MANIFEST | grep -i $DOCKER_MANIFEST_MEDIA_TYPE)" ]; then
        echo "Everything has finished successfully!"
        exit 0
    else
        echo "Error: Docker manifest inspecting hasn't passed successfully!"
        exit 1
    fi
}

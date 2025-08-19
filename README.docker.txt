This file contains instructions for building and running the Decker application in a Docker container.

## Prerequisites

- Docker must be installed on your system.

## Building the Docker Image

To build the Docker image, open a terminal in the root of the project and run the following command. This will build the Docker image and tag it with the name `decker`:

```bash
docker build -t decker .
```

## Running the Docker Container

Once the image is built, you can run it as a container with the following command. This will start the container and map port 3000 on your host machine to port 3000 in the container:

```bash
docker run -p 3000:3000 decker
```

You should then be able to access Decker in your web browser at http://127.0.0.1:3000/build/decker.html.

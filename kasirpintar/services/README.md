# kasirpintar

# 1.1. Overview

## 1.1. API kasir pintar

Files in this project are grouped into two main parts and placed accordingly:

 - in project root folder: contains project deployment files, such as docker's files and its configuration;
 - in `app` folder: contains application files, such as source codes, assets, and other files related to application.

# 2. Development Setup

## 2.1. Building Baseline Image

If you haven't had `kasirpintar/node:16.6.5` image in your local docker repository, create one first. You only need to do this once.

_If you already have the image, **skip this step**!_

To build node baseline image using the predefined dockerfile, use this command:

`$ docker build -t kasirpintar/node:16.6.5 -f base-node.dockerfile .`

After this process finishes, there will be `kasirpintar/node:16.6.5` image in your local docker.

## 2.2. Building kasirpintar container

First, create `.env` file (by copying `.env.example`), then adjust any values in it to suit your environment (or you may also use the default value as they are).
```
NODE_ENV=local
PORT=8196
```
`PORT` is the exposed port number to external while internally is at `8500`. Please note, this `.env` is used only by docker-compose.

Then you can exec the following command from project's root folder:

`$ docker-compose build`

Only when build has succeed, use this command to run the container:

`$ docker-compose run -d`

The app will serve on the defined port (see `PORT` value in `.env`).
You may test it by visiting `http://your_host:port`.

## 2.2.1. Tagging Image

To maintain versioning, you may want to tag each image you produce.
Let's say you have clone this project in a folder named 'kasirpintar' and want to tag today's image, use the following command (replace 'yyyymmdd' with your tag label):

`$ docker tag kasirpintar:latest kasirpintar/kasirpintar:yyyymmdd`

You can check the result with this command:

`$ docker image ls | grep kasirpintar`
```
kasirpintar/kasirpintar                 20220708                644b8fb8d4ef   10 hours ago    236MB
kasirpintar                       latest                  644b8fb8d4ef   10 hours ago    236MB
```

## 2.2.2. Copying Image between host

On source host (e.g. your local development machine), export the image to a file:

`$ docker save -o kasirpintar_kasirpintar__yyyymmdd.tar kasirpintar/kasirpintar:yyyymmdd`

Please change target filename ('kasirpintar_kasirpintar__yyyymmdd.tar') and the source image ('kasirpintar/kasirpintar:yyyymmdd') accordingly.

Then you can copy the file to the target host using any mean you want (sftp, rsync, etc).

On target host, when the file is already copied there, you can import the image back to docker with this command:

`$ docker load -i kasirpintar_kasirpintar__yyyymmdd.tar`

You may want to check the result with this (similar to previous command):

`$ docker image ls | grep kasirpintar`
```
kasirpintar/kasirpintar                 20220708                644b8fb8d4ef   10 hours ago    236MB
```

## 2.2.3. Running Container using Imported Image

Once you have the image, you can run container with the following command (replace the `yyyymmdd`). Please notice the use of `-p` option to specify `external:internal` port number.

`$ docker run -d -p 8196:8500 kasirpintar/kasirpintar:yyyymmdd`
# webSocket-nastiti
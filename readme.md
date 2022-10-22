# project
    this project is a simple API for processing images from, there is some images and you can control dimentions of this images
    and create copy of them because next time if you requested same image with same dimension, it will be served from processed oneself
    other wise new image will be created and store at you filesystem -> public/thumb/name

# setup
    to run this project: 
    - you should install all dependencies first by npm i
    - run by npm start
    - browse http://localhost:3000/api?filename=dora&width=200&height=200 as example

# scripts
    there are set of available scripts, any one run with this command npm run scriptKey
        1- start: to build and start the project
        2- test: to build and test project with jasmine
        3- lint: to report code which not satisfy lint rules
        4- lint:fix: to fix all errors which came from lint rule
        5- prettier: to improve code style
        6- build: to convert ts to js and build prokect
        7- jasmine: to test project


# constraints 
    - you should provide query string as ?filename=name&width=x&height=x
    - file name should be one of these: ['jerry', 'dora', 'mecky', 'spongpop', 'twetty']
    - width and height must be > 0

# examples
    - http://localhost:3000/api?filename=dora&width=200&height=200
    - http://localhost:3000/api?filename=jerry&width=100&height=300
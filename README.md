# Recist-App

Recist-App is a cloud application for the interactive analysis of the evolution of tumors in medical images

- Import DICOM medical images from URL or local storage
- Mark the size of the lesions
- Get the RECIST evaluation following RECIST standards

### Tech

Recist-App uses a number of open source projects to work properly:

- [AMI](https://github.com/FNNDSC/ami) - Medical Imaging JavaScript ToolKit
- [Polymer](https://github.com/Polymer/polymer) - JavaScript library for building web applications using Web Components
- [Node.js](https://nodejs.org) and [Express](https://github.com/expressjs/express) - As webserver to manage static files at deployment

### Installation

Recist-App requires [Node.js](https://nodejs.org/) v7.10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd recist-app
$ npm install
$ npm start
```

### Demo

[Check it live!](https://recist-app.herokuapp.com/)

![alt text](https://raw.githubusercontent.com/adefrutoscasado/recist-app/6cfcff3a0767f49a52a00337703574bd73223391/demo.gif)

## License

MIT

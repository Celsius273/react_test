# React Test

### What is this?

This is a simple as can be react project made as a setup exercise.
It's written in glorious ES6 (without all those pesky semicolons), and the [Flux](https://facebook.github.io/flux/docs/overview.html) architecture for react.js and alt.

### How to run it?

Simply clone the repo, run 'npm install' to install all the requisite node modules, then run 'npm run-script build'

The built js file is **build/react_test.js** and you can see the app's main page in **public/react_test.html**

### What's with the map in the homepage?

This map is to test integration with the jVectorMap library for svg maps, which can be found [here](http://jvectormap.com), Unfortunately this requires me to use JQuery for jVectorMap to work. I will be using react and jVectorMap in a future project.

### Anything else?

When running the app, you can install [alt-devtool](https://github.com/goatslacker/alt-devtool) to see the current state of the TestStore store and all actions dispatched.
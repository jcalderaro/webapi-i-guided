const express = require('express')
// importing express
// equivalent to import express from express
// this is the 'CommonJS' way of importing packages

// now we need to create an HTTP Web Server

const server = express();
// this creates the http web server 

// Endpoints

server.get('/', (req, res) => {
    // name is not important (could be request, response)
})
// There are the homies? Make sure it's always required and then response. 


// now we make the web server listen to the incoming traffic on port 4000
server.listen(4000, () => {
    // this callback function will run after the server starts successfully
    console.log('\n***Server Running on http://localhost:4000 ***\n')
})

// Open terminal 1:node within VS Code and type yarn server 
// Page says "Error Cannot GET / "

// import external modules
const path = require('path')
const express = require('express')

// define server
const server = express()

//define routes


// add middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended:false}))

//routes middleware


// export server
module.exports = server
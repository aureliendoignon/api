const express = require('express')
const app = express()
const port = 3000

// Set static path
app.use(express.static('public'));

// Set variables
app.locals.title = 'Api'
app.locals.charset = 'utf-8'
app.set('view engine', 'pug')
app.set('views', './src/views')

// Require routes files
require('./src/routes')(app)

// Start the server
app.listen(port)

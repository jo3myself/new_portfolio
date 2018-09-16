// Dependencies
var express = require('express')

// Sets up the Express App
var app = express()
var PORT = process.env.PORT || 3000

// Static directory
app.use(express.static('public'))

// Set routes
var routes = require('./controllers/controller.js')
app.use(routes)

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})

var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer')

// Sets up Nodemailer
var smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'jo3UCI@gmail.com',
    pass: 'UCIbootcamp!'
  }
})

router.get('/', function (req, res) {
  res.render('index')
})

router.get('/send', function (req, res) {
  var mailOptions = {
    to: req.query.to,
    subject: req.query.subject,
    text: req.query.text
  }
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error)
      res.end('error')
    } else {
      console.log('Email sent')
      res.end('sent')
    }
  })
})

module.exports = router

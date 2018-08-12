// Dependencies
var express = require('express')
var nodemailer = require("nodemailer");

// Sets up the Express App
var app = express()
var PORT = process.env.PORT || 3000

// Static directory
app.use(express.static('public'))

// Set routes
var routes = require('./controllers/controller.js')
app.use('/', routes)

// Sets up Nodemailer
var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
      user: "jo3UCI@gmail.com",
      pass: "UCIbootcamp!"
  }
});
app.get('/send',function(req,res){
  var mailOptions={
      to : req.query.to,
      subject : req.query.subject,
      text : req.query.text
  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
   if(error){
          console.log(error);
      res.end("error");
   }else{
          console.log("Email sent");
      res.end("sent");
       }
});
});

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})

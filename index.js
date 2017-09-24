var express = require("express");
var app = express();
const bodyParser = require('body-parser');
var router = express.Router();
var path = __dirname +"/";
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

var web3 = require('web3');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'secureserver',
  host:"smtpout.secureserver.net",
  port: 25,
  secure: false,
  auth: {
    user: 'prolosi@prolosi.com',
    pass: 'controlqa123'
  }
});

app.use(express.static('bower_components'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index___.html");
});

router.get("/index",function(req,res){
  res.sendFile(path + "index.html");
});

router.post("/sendEmail",function(req,res){  
var mailOptions = {
  from: req.body.from,
  to: req.body.to,
  subject: 'Welcome to Voting service',
  html: '<h1>Fiserv</h1><p> <p>Use your email as user</p> Password: '+ req.body.password +'</p>'
};

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.json({
         exitoso:true
      });
    }
  });
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/api",function(req,res){
  res.json({
  	valor:"datos de prueba"
  });
});


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});


app.listen(3000,function(){
  console.log("Live at Port 3000");
});




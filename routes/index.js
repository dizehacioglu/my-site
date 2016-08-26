require('dotenv').config();

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/', function(req,res,next){
  console.log(process.env.PASS);
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'dize.hacioglu@gmail.com',
      pass: process.env.PASS
    }
  });

  transporter.sendMail(req.body, function(err, info){
    if(err) console.log(err);
    else {
      console.log('message sent');
    }
  })
  console.log(req.body);
  res.redirect('/')
})

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });
//
// router.get('/about', function(req, res, next){
// 	res.render('about');
// });
//
// router.get('/work', function(req, res, next){
// 	res.render('work');
// });
//
// router.get('/contact', function(req, res, next){
// 	res.render('contact');
// });

module.exports = router;

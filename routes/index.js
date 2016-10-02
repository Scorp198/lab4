var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab4' });
});

// GET the Branden Page
router.get('/Branden', function (req,res,next) {
  res.render('Branden',{
    title: 'Branden',
    message: 'Hi my name is Branden Shirriff and I am currently a student a Georgian College studying Computer Programming.'
  });
});

// GET the Dave Page
router.get('/Dave', function (req,res,next) {
  res.render('Dave',{
    title: 'Dave',
    message: 'This is my father Dave, he works as a business man in Brampton.'
  });
});

// GET the Sue Page
router.get('/Sue', function (req,res,next) {
  res.render('Sue',{
    title: 'Sue',
    message: 'This is my mom, Sue. She works as an independent dog groomer.'
  });
});

// GET the Lexie Page
router.get('/Lexie', function (req,res,next) {
  res.render('Lexie',{
    title: 'Lexie',
    message: 'This is my Doge,Lexie. She is a Boxer.'
  });
});

module.exports = router;

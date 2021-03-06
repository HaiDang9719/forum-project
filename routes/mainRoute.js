var express = require('express');
var router = express.Router();
var loggedin = function (req, res, next) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/signin')
    }
  }

router.get('/', function(req,res,next){
    res.render('index',{title:"welcome to Motor"});
});

router.get('/signup', function(req,res,next){
    res.render('signup',{title:"Motor || Sign Up"});
});

router.get('/signin', function(req,res,next){
    res.render('signin',{title:"Motor || Sign In"});
});

router.get('/home', loggedin,function(req,res,next){
    res.render('home',{title:"Motor || Home"});
});

router.get('/tech', loggedin,function(req,res,next){
    res.render('tech',{title:"Motor || Technical support"});
});

router.get('/about', loggedin,function(req,res,next){
    res.render('about',{title:"Motor || About us"});
});



module.exports = router;
var express = require('express');
var router = express.Router();
 const passport=require('passport');
const passportSetup=require('../config/passportgoogle');
router.get('/', function(req, res, next) {
  res.render('home', { user: req.user });
  res.send('you need to  be authenticated');
});

router.get('/google',passport.authenticate('google',
{
  scope:['profile']
}));

router.get('/google/redirect',passport.authenticate('google'),(req,res,next)=>
{
  res.redirect('/profile/');

});
router.get('/logout',(req,res,next)=>
{
  req.logOut();
  res.redirect('/auth');
});



module.exports = router;
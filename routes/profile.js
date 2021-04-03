var express=require('express');
var router=express.Router();

var authcheck=(req,res,next)=>
{
    if(!req.user)
    {
        res.redirect('/auth');
    }
    else
    {
        next();
    }
}


router.get('/',authcheck,(req,res,next)=>
{ // console.log('hi  loggedin')
     res.render('dashboardwl');

});


module.exports=router;
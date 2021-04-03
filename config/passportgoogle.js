const { NotExtended } = require('http-errors');
const passport=require('passport');
const googlestrategy=require('passport-google-oauth20').Strategy;
const user=require('../models/User');
passport.serializeUser((user,done)=>
{
    done(null,user.id);

});

passport.deserializeUser((id,done)=>
{
    user.findById(id).then((user)=>
    {     
        done(null,user);
    });
  

});


passport.use(
    new googlestrategy({
       
        clientID:"621709230888-hthrmq3qpvq0di2smkbd5t86qgehuktl.apps.googleusercontent.com",
        clientSecret:'6jEkjsc9Irwm-TttzSmy5US0',
        callbackURL:"/auth/google/redirect"
    } ,(acessToken,refreshToken,profile,done)=>
    {
   
           user.findOne({googleid:profile.id}).then((currentuser)=>
           {
               if(currentuser)
               {   console.log(currentuser);
                console.log(profile);
                  done(null,currentuser);
                 
               }
               else 
               {  
                user.create({name:profile.displayName,googleid:profile.id}).then((newuser)=>
                  {
                   console.log(newuser);
                     done(null,newuser);
                  });
               }
           });

    })
);
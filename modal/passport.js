var GoogleStrategy = require('passport-google-oauth20');
var GitHubStrategy = require('passport-github');
var InstagramStrategy = require('passport-instagram');
var FacebookStrategy = require('passport-facebook');
var passport=require('passport');
passport.use(new GoogleStrategy({
    clientID: "696016007441-gtdnqjpl3auit24qf2859efaks3t1lk2.apps.googleusercontent.com",
    clientSecret: "XqHHv9dFyJc18qPZvkY3tZFO",
    callbackURL: "https://xemzom.herokuapp.com/gajjurock",
    // scope:['user:email'],
  },
  (accessToken, refreshToken, profile, cb)=>{
  	  exports.emailID=profile._json.email;
  	  console.log(profile);		
      return cb(null, profile);
  }
));

passport.use(new GitHubStrategy({
    clientID: "c03d795015e41188f002",
    clientSecret: "f7a934f57da88988bfca38cc98c6ba6847263f05",
    callbackURL: "https://xemzom.herokuapp.com/gajjurocks",
    scope:['user:email'],
  },
  (accessToken, refreshToken, profile, ck)=>{
    // User.findOrCreate({ googleId: profile.id },(err, user)=> {
    //   console.log('Gajjar DArshit',user);
    // });
  	  exports.emailID=profile.emails[0].value;
  	  console.log(profile.emails[0].value);
      console.log(profile);
      return ck(null, profile);
  }
));
passport.use(new InstagramStrategy({
    clientID: "c8674cab77a744d9bc2fa7fb060e37bb",
    clientSecret: "04be5ff8682e442ca3961be9322b2347",
    callbackURL: "https://xemzom.herokuapp.com/instagram",
    // scope:['email'],


  },
  (accessToken, refreshToken, profile, ck)=>{
    exports.emailID=profile.provider;
    // console.log('hello',profile.provider);
      return ck(null, profile);
  }
));

// const passport=require('passport');//import the file
// const GoogleStrategy=require('passport-google-oauth20');//import the google auth 20
// passport.use(new GoogleStrategy({
// 	clientID:'696016007441-gtdnqjpl3auit24qf2859efaks3t1lk2.apps.googleusercontent.com',
// 	clientSecret:'XqHHv9dFyJc18qPZvkY3tZFO',
// 	callbackURL:'/gajjurock',
// },
// (accessToken,refreshToken,profile,done)=>{
// 	//callback function and Data Of USER
// 	console.log(':::>',profile);
// 	console.log(">Hello Pappa",profile.emails[0].value);
// }));//set the object and then after the respomse to gather

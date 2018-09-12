const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

//Load user model
const User = mongoose.model("users");

const keys = require("./keys");

module.exports = function(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        // console.log(accessToken);
        // console.log(profile);

        //accessing the image profile
        const image = profile.photos[0].value
          //editing image string and removing everthing after the ?
          .substring(0, profile.photos[0].value.indexOf("?"));

        //Storing Google User infomation
        const newUser = {
          googleID: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          image: image
        };

        // Check for existing user
        User.findOne({
          googleID: profile.id
        }).then(user => {
          if (user) {
            //Return user
            done(null, user);
          } else {
            //Create user
            new User(newUser).save().then(user => done(null, user));
          }
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
  });
};

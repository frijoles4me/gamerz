const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

// Load User Model
require("./models/user");

//Passport Config
require("./config/passport")(passport);

//Load Routes
const index = require("./routes/index");
const auth = require("./routes/auth");

//Load Keys
const keys = require("./config/keys");

//Map gobal promises
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose
  .connect(
    keys.mongoURI,
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

const app = express();

app.use(cookieParser());
app.use(
  session({
    secret: "sercret",
    resave: false,
    saveUninitialized: false
  })
);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Set glboal vars
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

//Use Routes
app.use("/", index);
app.use("/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});

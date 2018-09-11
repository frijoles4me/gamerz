const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

// Load User Model
require("./models/user");

//Passport Config
require("./config/passport")(passport);

//Load Routes
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

app.get("/", (req, res) => {
  res.send("it works");
});

//Use Routes
app.use("/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});

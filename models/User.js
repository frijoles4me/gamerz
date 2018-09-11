const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the user Shema
const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  }
});

// Create collection and add schema
mongoose.model("users", UserSchema);

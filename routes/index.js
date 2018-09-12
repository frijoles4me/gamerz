const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("it works");
  console.log("home is working");
});

router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

module.exports = router;

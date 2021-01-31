const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.post("/add", function(req, res) {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

router.get("/", function(req, res) {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

router.get("/:id", function(req, res) {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

module.exports= router
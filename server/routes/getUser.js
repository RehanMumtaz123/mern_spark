const router = require("express").Router();
const User = require("../model/userSchema");

router.get("/users", (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(500).json({ message: err }));
});

module.exports = router;

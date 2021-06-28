const router = require("express").Router();
const User = require("../model/userSchema");

router.post("/add", (req, res) => {
  const { name, email, accountType, phone, age, amount } = req.body;
  if (!name || !email || !accountType || !phone || !age || !amount) {
    res.status(422).json({ message: "All fields need to be filled" });
  }
  User.find({ email: email })
    .then((data) => {
      console.log("daA", data);
      if (!data) {
        res.status(421).json({ message: "This person exists" });
      } else {
        const user = new User({ name, email, accountType, phone, age, amount });
        user
          .save()
          .then(() => {
            res.status(201).json({ message: "success" });
          })
          .catch((err) => res.status(500).json({ message: err }));
      }
    })
    .catch((err) => console.log("error:", err));
});
module.exports = router;

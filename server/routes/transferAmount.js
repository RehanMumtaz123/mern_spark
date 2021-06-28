const router = require("express").Router();
const User = require("../model/userSchema");

router.patch("/transfer/:sname&:rname", async (req, res) => {
  const { sname, rname } = req.params;
  const { amount } = req.body;
//   var llname, amounts;
  const newdata = await User.find({ name: [sname , rname] });
  const ffid = newdata[0]._id;
  const llid = newdata[1]._id;
  console.log("yeh hai", newdata);
  famounts = Number(newdata[0].amount) - Number(amount);
  lamounts = Number(newdata[1].amount) + Number(amount);
//   lamounts = Number(newdata[0].amount) + Number(amount);
  // const user = new User({ amount: amount + amt });

  const fupdate = await User.findByIdAndUpdate(
    { _id: ffid },
    { amount: famounts }
  );
  const lupdate = await User.findByIdAndUpdate(
    { _id: llid },
    { amount: lamounts }
  );
  res.status(200).json({ message: "success" });
  console.log("ab yeghh", fupdate);
});

module.exports = router;

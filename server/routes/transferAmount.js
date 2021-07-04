const router = require("express").Router();
const User = require("../model/userSchema");

router.patch("/transfer/:sname&:rname", async (req, res) => {
  const { sname, rname } = req.params;
  const { amount } = req.body;
  //   var llname, amounts;
  const data = await User.find({ name: [sname, rname] });
  // const ldata = await User.find({ name: rname });
  console.log("fdata kyaa", data);
  // console.log("hee", ldata);
  const ffid = data[0]._id;
  const llid = data[1]._id;
  // console.log("yeh hai", newdata);
  const famounts = Number(data[0].amount) + Number(amount);
  const lamounts = Number(data[1].amount) - Number(amount);
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

  // const fupdate = await User.updateOne(
  //   { name: sname },
  //   { $set: { amount: famounts } }
  // );
  // const lupdate = await User.updateOne(
  //   { name: rname },
  //   { $set: { amount: lamounts } }
  // );
  res.status(200).json({ message: "success" });
  // console.log("ab yeghh", fupdate);
});

module.exports = router;

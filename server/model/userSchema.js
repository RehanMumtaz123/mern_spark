const mongo = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { JsonWebTokenError } = require("jsonwebtoken");
const SchemaOptions = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};
const userSchema = new mongo.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    accountType: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  SchemaOptions
);

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     this.cpassword = await bcrypt.hash(this.cpassword, 12);
//     next();
//   }
// });

// userSchema.methods.generateAuthToken = async function () {
//   try {
//     let tokenn = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({ token: tokenn });
//     await this.save();
//     return tokenn;
//   } catch (err) {
//     console.log("eerooor:", err);
//   }
// };
const User = mongo.model("USER", userSchema);

module.exports = User;

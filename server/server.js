const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");

dotenv.config({ path: "./config.env" });
require("./db/connection");

// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
});

app.use(require("./routes/saveUsers"));
app.use(require("./routes/getUser"));
app.use(require("./routes/transferAmount"));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));

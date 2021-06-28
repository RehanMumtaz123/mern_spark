const mongo = require("mongoose");
db = process.env.CONNECTION_STRING;

mongo
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(console.log(`connection successful`))
  .catch((err) => console.log(err));

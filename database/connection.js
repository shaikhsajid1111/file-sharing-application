require("dotenv").config();

const mongoose = require("mongoose");

connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("Database is connected");
  });
};

module.exports = connectDatabase;

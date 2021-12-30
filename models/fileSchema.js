const mongoose = require("mongoose");
const schema = mongoose.Schema;

//file schema for storing in database
const fileSchema = new schema(
  {
    filename: {
      //to store file's name, type is string and require to store
      type: String,
      required: true,
    },
    path: {
      //to store file's path in database, type is string and is require to store
      type: String,
      required: true,
    },
    size: {
      //to store file's name, type is Integer and require to store
      type: Number,
      required: true,
    },
    uuid: {
      //Unique ID given to file for later retrieval
      type: String,
      required: true,
    },
    secretKey: {
      //secret key that holds the password in case if the user wants to delete the file, they need to provide the key
      type: String,
      require: true
    }
  },
  {
    //stores when file was stored
    timestamps: true,
  }
);

module.exports = mongoose.model("FILE", fileSchema);

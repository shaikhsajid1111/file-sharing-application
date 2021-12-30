const FILE = require("../models/fileSchema");
const fs = require("fs");


const deleteFiles = async () => {
  const files = await FILE.find({
    createdAt: {
      $lt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
  });

  if (files.length) {
    for (let file of files) {
      try {
        fs.unlinkSync(file.path);
        await file.remove();

        console.log(`${file.filename} deleted!`);
      } catch (err) {
        console.log(`error : ${err}`);
      }
    }
  }

};

exports.deleteFiles = deleteFiles;

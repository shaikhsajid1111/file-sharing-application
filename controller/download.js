const FILE = require("../models/fileSchema");

const downloadFile = async (req, res, next) => {
  /**find the filepath in DB,if it is there then
   * it exists and can be shared
   */
  const file = await FILE.findOne({
    uuid: req.params.uuid,
  }); //find the file path in database

  if (!file) {
    return res.status(404).json({ error: "File Not Available!" });
  } //if file is not found 

  const response = await file.save(); 
  const filePath = `${__dirname}/../${file.path}`;  //file path

  res.download(filePath); //download the file
};

exports.downloadFile = downloadFile;

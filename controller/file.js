const multer = require("multer");
const path = require("path");
const FILE = require("../models/fileSchema");

const { v4: uuidv4 } = require("uuid");


let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), //upload to uploads/ folder
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`; //generates a unique name for the file based on time and random number
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1000000 * 150, //file size limit for storing is 150 MBs
  },
}).single("file"); //when making POST request, the uploading file should be named as "file" in body

const uploadFile = (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    if (req.body['secretKey'] === undefined) {
      return res.status(500).send({ error: "Secret Key is Required!" });
    }
    const file = new FILE({
      filename: req.file.filename,
      uuid: uuidv4(),
      path: req.file.path,
      size: req.file.size,
      secretKey: req.body['secretKey']
    }); //store file's data in database, new Instance of FILE schema

    const response = await file.save(); //save the data to database

    res.json({
      uniqueId : response.uuid,
      fileURL: `${process.env.APP_BASE_URL}/api/files/${response.uuid}`,
    });
  });
};

exports.uploadFile = uploadFile;

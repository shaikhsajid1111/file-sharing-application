const multer = require("multer");
const path = require('path');
const FILE = require('../models/fileSchema');

const {v4 : uuidv4} = require("uuid");


let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/') ,
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
              cb(null, uniqueName)
    } ,
});

const upload = multer({storage,limits : {
    fileSize : 1000000*150,
}}).single('file');



const uploadFile = (req,res,next) =>{

    upload(req,res, async (err) => {
        if(err){
            return res.status(500).send({error : err.message});
        }

        const file = new FILE({
            filename : req.file.filename,
            uuid : uuidv4(),
            path : req.file.path,
            size : req.file.size
        });

        const response = await file.save();

        res.json({
            file : `${process.env.APP_BASE_URL}/files/${response.uuid}`
        });

    })


}



exports.uploadFile = uploadFile;
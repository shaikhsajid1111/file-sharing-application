const FILE = require('../models/fileSchema');



const downloadFile = async (req,res,next) =>{
    const file = await FILE.findOne({
        uuid : req.params.uuid
    });

    if(!file){
        return res.status(404).json({error : "File Not Available!"})
    }

    const response = await file.save();
    const filePath = `${__dirname}/../${file.path}`;

    res.download(filePath);


}



exports.downloadFile = downloadFile;
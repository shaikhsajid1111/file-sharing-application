const FILE = require("../models/fileSchema");

const show = async (req,res,next) =>{
    try{
        const file = await FILE.findOne({uuid : req.params.uuid});


        if(!file){
            return res.json({error : "Link have been expired."});
        }

        return res.status(200).json({uuid:file.uuid,
        fileName : file.filename,
        fileSize : file.size,
        downloadLink : `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })
    }catch(err){
        return res.json({error : err.message})
    }


}

exports.show = show;
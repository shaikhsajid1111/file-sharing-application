const FILE = require("../models/fileSchema");

const show = async (req,res,next) =>{
    try{
        const file = await FILE.findOne({uuid : req.params.uuid});


        if(!file){
            return res.render('download',{error : "Link have been expired."});
        }

        return res.render("download",{uuid:file.uuid,
        fileName : file.filename,
        fileSize : file.size,
        downloadLink : `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        
        })
    }catch(err){
        return res.render('download',{error : err.message})
    }


}

exports.show = show;
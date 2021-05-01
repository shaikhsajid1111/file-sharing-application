const FILE = require("../models/fileSchema");   /** Schema for FILE  */ 

const show = async (req,res,next) =>{
    try{
        
        const file = await FILE.findOne({uuid : req.params.uuid}); /*locate file with the gived UUID from the database */

        
        if(!file){ /**if file is not found in database */
            /**error 404 as file does not exists! */
            return res.status(404).json({error : "Link have been expired or File does not exists!"});
        }
        /**if file is found in database */
        return res.status(200).json({
        uuid:file.uuid, /**file UUID(unique ID for each file) */
        fileName : file.filename,  /**file name for the same */
        fileSize : `${parseFloat(file.size)/1000} KB`, /** parseFloat(fileSize/1000) gives the file size in KB*/
        downloadLink : `${process.env.APP_BASE_URL}/files/download/${file.uuid}` /**download link for the found
        file */
        })
    }catch(err){
        return res.json({error : err.message}) /**if any other error occured */
    }


}

exports.show = show;
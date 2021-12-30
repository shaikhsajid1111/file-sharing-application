const FILE = require("../models/fileSchema"); /** Schema for FILE  */

const show = async (req, res, next) => {
  try {

    const file = await FILE.findOne({
      uuid: req.body['uuid'],
      secretKey: req.body['secretKey']
    }); /*locate file with the gived UUID from the database */

    if (!file) {
      /**if file is not found in database */
      /**error 404 as file does not exists! */
      return res.status(404).json({ error: "Link have been expired or Invalid Key!" });
    }

    const totalMinutesLeft =
      (file.createdAt - new Date(Date.now() - 24 * 60 * 60 * 1000)) /
      (1000 * 60);
    /**if file is found in database */
    const output = {
      uuid: file.uuid /**file UUID(unique ID for each file) */,
      fileName: file.filename /**file name for the same */,
      fileSize: `${parseFloat(file.size) / 1000
        } KB` /** parseFloat(fileSize/1000) gives the file size in KB*/,

      downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}` /**download link for the found
        file */,

      //timeLeft argument is the time left for link to expire
      timeLeft: `${Math.floor(totalMinutesLeft / 60) > 0           //if the time is negative and script.js has not deleted the file
        ? Math.floor(totalMinutesLeft / 60)
        : 0                 //if time is getting negative then show 0
        } Hours and ${
        //calculate minutes if the minutes is negative, then show 0 else the time
        Math.floor(totalMinutesLeft % 60) > 0
          ? Math.floor(totalMinutesLeft % 60)
          : 0
        } Minutes`,
    }
    return res.status(200).json(output);
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({ error: err.message }); /**if any other error occured */
  }
};

exports.show = show;

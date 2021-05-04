/**routes for home page URL */
const index = (req, res, next) => {
  /**when url hits the BASE URL, show instructions of how to make request */
  return res.status(201).json({
    uploadingURL: `${process.env.APP_BASE_URL}/uploadfile`,
    getFileDetaiuls: `${process.env.APP_BASE_URL}/files/:uuid`,
    downloadFile: `${process.env.APP_BASE_URL}/files/download/:uuid`,
  });
};

exports.index = index;

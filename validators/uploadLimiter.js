const rateLimiter = require("express-rate-limit");
/*this will enable limit on file upload,
only 10 files are allowed in 30 minutes
*/
const uploadLimiter = rateLimiter({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 10,
  message: "Only 10 Files per 30 minutes allowed!"
})


exports.uploadLimiter = uploadLimiter;
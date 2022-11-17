const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = `${__dirname}/../Storage`;
    cb(null, path);
  },

  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});

const uploadMdl = multer({ storage });

module.exports = uploadMdl;

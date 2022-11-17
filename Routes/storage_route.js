const express = require("express");
const router = express.Router();

const {
  getFiles,
  uploadFileStorage,
} = require("../Controlles/storageController");

const uploadMdl = require("../Global/UploadFile");

router.get("/storage", getFiles);
router.post("/storage", uploadMdl.single("file"), uploadFileStorage);

module.exports = router;

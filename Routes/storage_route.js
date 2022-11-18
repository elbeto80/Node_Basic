const express = require("express");
const router = express.Router();

const {
  getFiles,
  uploadFileStorage,
} = require("../Controlles/storageController");

const uploadMdl = require("../Global/UploadFile");

router.get("/storages", getFiles);
router.post("/storages", uploadMdl.single("file"), uploadFileStorage);

module.exports = router;

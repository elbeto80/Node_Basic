const express = require("express");
const router = express.Router();

const {
  getFiles,
  uploadFileStorage,
  getFile,
  deleteFile,
} = require("../Controlles/storageController");

const uploadMdl = require("../Global/UploadFile");
const { idStorageValidator } = require("../Validators/storage_validator");

router.get("/storages", getFiles);
router.get("/storages/:id", [idStorageValidator], getFile);
router.delete("/storages/:id", [idStorageValidator], deleteFile);
router.post("/storages", uploadMdl.single("file"), uploadFileStorage);

module.exports = router;

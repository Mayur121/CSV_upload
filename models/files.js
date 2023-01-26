const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const FILES_PATH = path.join("/uploads/files");

// Create user Schema
const fileSchema = new mongoose.Schema(
  {
    filePath: {
      type: String,
    },

    originalName: {
      type: String,
    },

    file: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

// Uploading file using multer
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // path where files should be uploaded
    cb(null, path.join(__dirname, "..", FILES_PATH));
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

// static functions
fileSchema.statics.uploadedFile = multer({ storage: storage }).single("file");

// FILES_PATH should be publicly available
fileSchema.statics.filePath = FILES_PATH;

// Model
const Files = mongoose.model("Files", fileSchema);

// export model
module.exports = Files;

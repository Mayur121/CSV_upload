// import package
const File = require("../models/files");

// export function for uploading route
module.exports.Upload = function (req, res) {
  try {
    // Used for uploading file with note
    File.uploadedFile(req, res, function (err) {
      if (err) {
        console.timeLog("multer error", err);
      }
      console.log(req.file);
      if (
        (req.file && req.file.mimetype == "application/vnd.ms-excel") ||
        (req.file && req.file.mimetype == "text/csv")
      ) {
        console.log("true");
        console.log(req.file);
        File.create(
          {
            filePath: req.file.path,
            originalName: req.file.originalname,
            file: req.file.filename,
          },

          function (err) {
            if (err) {
              console.log("error", err);
              return res.status(400).json({
                message: "Error in creating Note or Uploading File",
              });
            }

            return res.redirect("/");
          }
        );
      } else {
        console.log("Please upload CSV format file");

        return res.redirect("/");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

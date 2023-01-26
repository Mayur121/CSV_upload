// import package
const File = require("../models/files");
const path = require("path");

// export function for deleting a route
module.exports.delete = async function(req, res) {
    try {
        const filename = req.params.file;

        let isFile = await File.findOne({ file: filename });
        if(isFile) {
            await File.deleteOne({ file: filename });
            console.log("File deleted");

            return res.redirect("/");
        } else {
            console.log("File not found");
            return res.redirect("/");
        }

    } catch(err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
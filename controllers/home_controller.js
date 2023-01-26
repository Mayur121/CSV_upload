// import package
const File = require("../models/files");

const fs = require("fs");
const path = require("path");

// export function for creating a route
module.exports.Index = async function(req, res) {
    try {
        let files = await File.find({});
        res.render("home", {
            file: files
        });
    } catch(err) {
        console.log(err);
    }
}
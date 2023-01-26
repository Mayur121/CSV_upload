// import package
const express = require("express");

// use router
const router = express.Router();

// import controller
const uploadController = require("../controllers/upload_controller");

// Make routes
router.post("/", uploadController.Upload);
router.use("/file", require("./file"));

// export the router
module.exports = router;

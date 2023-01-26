// Import packages
const express = require('express'); // Will not create a new instance but it will just fetch the existing one

// Using router
const router = express.Router();

// Import controllers
const homeController = require("../controllers/home_controller");
// const uploadController = require("../controllers/upload_controller");

// make routes
router.get("/", homeController.Index);
router.use("/upload", require("./upload"));
router.use("/delete", require("./delete"));

// export router
module.exports = router;
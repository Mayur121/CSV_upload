// import package
const express = require('express');

// use router
const router = express.Router();

// import controllers
const fileController = require("../controllers/file_controller");

// make routes
router.get("/:file", fileController.View);

// export router
module.exports = router;
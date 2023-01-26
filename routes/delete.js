// import packages
const express = require("express");

// use router
const router = express.Router();

// import controllers
const deleteController = require("../controllers/delete_controller");

// make routes
router.get("/:file", deleteController.delete);

// export router
module.exports = router;
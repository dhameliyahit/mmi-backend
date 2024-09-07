const express = require("express");
const { getAllDataController } = require("../controllers/dataController.js");

const router = express.Router();

router.get("/mmi",getAllDataController)

module.exports = router

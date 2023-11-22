const express = require("express");
const router = express.Router();
const countryController = require("../services/countryService");

router.get("/:countryName", countryController.getCountryInfo);

module.exports = router;

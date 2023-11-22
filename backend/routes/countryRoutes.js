const express = require("express");
const router = express.Router();
const { fetchCountryInfo } = require("../controller/countryController");

router.get("/:countryName", fetchCountryInfo);

module.exports = router;

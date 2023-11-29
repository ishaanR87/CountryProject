const express = require("express");
const router = express.Router();
const countryController = require("../controller/countryController");

router.get(
  "/:countryName",
  countryController.validateCountryName,
  countryController.fetchCountryInfo
);

module.exports = router;

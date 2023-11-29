const express = require("express");
const router = express.Router();
const countryController = require("../controller/countryController");

router.get(
  "/:countryName",
  countryController.fetchCountryInfo,
  countryController.validateCountryName
);

module.exports = router;

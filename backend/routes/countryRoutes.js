const express = require("express");
const router = express.Router();
const countryController = require("../services/countryService");

router.get('/:name', countryController.getCountryInfo);

module.exports = router;

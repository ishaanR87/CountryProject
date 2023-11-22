const countryService = require("../services/countryService");
const joi = require("joi");

const fetchCountryInfo = async (req, res, next) => {
  try {
    const { countryName } = req.params;

    // validate countryName using joi
    const { error, value } = joi.string().required().validate(countryName);
    if (error) {
      res.status(400).json({ message: "Invalid countryName" });
      return;
    }

    const countryInfo = await countryService.retrieveCountryInfo(value);

    if (!countryInfo) {
      res.status(404).json({ message: `Country not Found` });
      return;
    }

    res.status(200).json(countryInfo);
  } catch (error) {
    next(error);
  }
};

module.exports = { fetchCountryInfo };

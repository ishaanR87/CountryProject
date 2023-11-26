const countryService = require("../services/countryService");
const joi = require("joi");

const fetchCountryInfo = async (req, res, next) => {
  try {
    const { countryName } = req.params;

    // validate countryName using joi
    const { error } = joi.string().trim().required().validate(countryName);
    if (error) {
      return res.status(400).json({ message: "Invalid countryName" });
    }

    const countryInfo = await countryService.retrieveCountryInfo(countryName);
    
    if (!countryInfo) {
      return res.status(404).json({ message: "Country not Found" });
    }

    return res.status(200).json(countryInfo);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
 
module.exports = { fetchCountryInfo };

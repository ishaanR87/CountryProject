const countryService = require("../services/countryService");
const Joi = require("joi");
const validateCountryName = (req, res, next) => {
  const schema = Joi.object({
    countryName: Joi.string()
      .trim()
      .regex(/^[a-zA-Z\s]+$/)
      .required(),
  });

  const { error } = schema.validate({ countryName: req.params.countryName });

  if (error) {
    return res.status(400).json({ message: "Invalid country name" });
  }

  next();
};

const fetchCountryInfo = async (req, res, next) => {
  try {
    const { countryName } = req.params;
    const countryInfo = await countryService.retrieveCountryInfo(countryName);

    if (!countryInfo) {
      return res.status(404).json({ message: "Country not Found." });
    }

    return res.status(200).json(countryInfo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { validateCountryName, fetchCountryInfo };

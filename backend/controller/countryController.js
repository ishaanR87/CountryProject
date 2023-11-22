const countryService = require("../services/countryService");

const fetchCountryInfo = async (req, res) => {
  try {
    const { countryName } = req.params;

    // Validate countryName using joi
    const { error, value } = joi.string().required().validate(countryName);
    if (error) {
      res.status(400).json({ message: "Invalid countryName" });
      return;
    }

    const countryInfo = await countryService.retrieveCountryInfo(value);

    if (!countryInfo) {
      res.status(404).json({ message: `Country not found` });
      return;
    }

    res.status(200).json(countryInfo);
  } catch (error) {
    console.error("Error fetching country info:" + error.message);
    res.status(500).json({ message: "Server error" + error.message });
  }
};

module.exports = { fetchCountryInfo };

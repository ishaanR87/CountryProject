const countryService = require("../services/countryService");

exports.returnCountryInfo = async (req, res) => {
  try {
    const { name } = req.params;
    const countryInfo = await countryService.getCountryInfo.name;
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ error: "Service Error..." });
  }
};

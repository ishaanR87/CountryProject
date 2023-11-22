const countryService = require("../services/countryService");

exports.getCountryInfo = async (req, res) => {
  try {
    const { countryName } = req.params;
    const countryInfo = await countryService.getCountryInfo(countryName);

    if (!countryInfo) {
      res.status(404).json({ message: `Country not found` });
      return;
    }

    res.status(200).json(countryInfo);
  } catch (error) {
    console.error("Error fetching country info:" + error.message);
    res.status(500).json({ message: "Server error" });
  }
};

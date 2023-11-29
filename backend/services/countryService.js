const axios = require("axios");

const retrieveCountryInfo = async (countryName) => {
  if (typeof countryName !== "string" || countryName.trim() === "") {
    throw new Error("Country name is required");
  }

  try {
    const api = `https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`;
    const response = await axios.get(api);

    if (response.status !== 200) {
      throw new Error("Failed to retrieve country info");
    }

    if (response.data?.[0]) {
      const countryInfo = {
        name: response.data[0]?.name.common,
        capital: Array.isArray(response.data[0]?.capital)
          ? response.data[0]?.capital[0] // array
          : response.data[0]?.capital, // string
        population: response.data[0]?.population,
        region: response.data[0]?.region,
        flag: response.data[0]?.flags?.svg,
      };

      return countryInfo;
    } else {
      return {
        name: "Unknown",
        capital: "Unknown",
        population: "Unknown",
        region: "Unknown",
      };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { retrieveCountryInfo };

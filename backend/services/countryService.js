const axios = require("axios");

const retrieveCountryInfo = async (countryName) => {
  // check if countryName is provided and not an empty string
  if (!countryName || countryName.trim() === "") {
    throw new Error("Country name is required");
  }

  try {
    const api = `https://restcountries.com/v3.1/name/${countryName}`;
    const response = await axios.get(api);

    // if axios fails due to network etc.
    if (response.status !== 200) {
      throw new Error("Failed to retrieve country info");
    }

    if (response.data?.[0]) {
      const countryInfo = {
        flag: response.data[0]?.flags.svg,
        name: response.data[0]?.name?.common,
        capital: response.data[0]?.capital,
        population: response.data[0]?.population,
        region: response.data[0]?.region,
      };

      return countryInfo;
    } else {
      // return which detail couldn't be retrieved
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

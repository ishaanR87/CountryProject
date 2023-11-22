const axios = require("axios");

exports.getCountryInfo = async (name) => {
  try {
    const api = `https://restcountries.com/v3.1/name/${name}`;
    const response = await axios.get(api);

    if (response.data && response.data.length > 0) {
      const countryInfo = {
        name: response.data[0].name.common,
        capital: response.data[0].capital,
        population: response.data[0].population,
        region: response.data[0].region,
      };
      return countryInfo;
    } else {
      throw new Error("Country not Found");
    }
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};

describe("retrieveCountryInfo", () => {
  // Returns default values when country info cannot be retrieved
  it("should return default values when country info cannot be retrieved", async () => {
    const axios = require("axios");
    const { retrieveCountryInfo } = require("backend/services/countryService");

    const countryName = "InvalidCountry";
    const expectedCountryInfo = {
      name: "Unknown",
      capital: "Unknown",
      population: "Unknown",
      region: "Unknown",
    };

    jest.spyOn(axios, "get").mockResolvedValueOnce({ status: 200, data: [] });

    const result = await retrieveCountryInfo(countryName);

    expect(result).toEqual(expectedCountryInfo);
    expect(axios.get).toHaveBeenCalledWith(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
  });

  // Handles country names with leading/trailing spaces
  it("should handle country names with leading/trailing spaces", async () => {
    const axios = require("axios");
    const { retrieveCountryInfo } = require("backend/services/countryService");

    const countryName = "  Germany  ";
    const expectedCountryInfo = {
      name: "Germany",
      capital: "Berlin",
      population: 83149300,
      region: "Europe",
    };

    jest.spyOn(axios, "get").mockResolvedValueOnce({
      status: 200,
      data: [{ ...expectedCountryInfo, name: { common: "Germany" } }],
    });

    const result = await retrieveCountryInfo(countryName);

    expect(result).toEqual(expectedCountryInfo);
    expect(axios.get).toHaveBeenCalledWith(
      `https://restcountries.com/v3.1/name/  Germany  `
    );
  });

  // Throws error when country name is not provided
  it("should throw error when country name is not provided", async () => {
    const { retrieveCountryInfo } = require("backend/services/countryService");

    const countryName = undefined;

    await expect(retrieveCountryInfo(countryName)).rejects.toThrow(
      "Country name is required"
    );
  });

  // Throws error when country name is an empty string
  it("should throw error when country name is an empty string", async () => {
    const { retrieveCountryInfo } = require("backend/services/countryService");

    const countryName = "";

    await expect(retrieveCountryInfo(countryName)).rejects.toThrow(
      "Country name is required"
    );
  });

  // Throws error when API call fails
  it("should throw error when API call fails", async () => {
    const axios = require("axios");
    const { retrieveCountryInfo } = require("backend/services/countryService");

    const countryName = "Canada";

    jest
      .spyOn(axios, "get")
      .mockRejectedValueOnce(new Error("Failed to retrieve country info"));

    await expect(retrieveCountryInfo(countryName)).rejects.toThrow(
      "Failed to retrieve country info"
    );
    expect(axios.get).toHaveBeenCalledWith(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
  });
});

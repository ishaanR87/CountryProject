const { retrieveCountryInfo } = require("../services/countryService");
const axios = require("axios");

describe("retrieveCountryInfo", () => {
  // Should retrieve country info for a valid country name
  it("should retrieve country info when given a valid country name", async () => {
    const countryName = "Canada";
    const expectedCountryInfo = {
      name: "Canada", // Adjust to match the name format returned by the API
      capital: "Ottawa",
      population: 37589262,
      region: "Americas",
      flag: "https://flagcdn.com/cx.svg",
    };

    const axiosGetMock = jest.spyOn(axios, "get");
    axiosGetMock.mockResolvedValueOnce({
      status: 200,
      data: [
        {
          name: { common: "Canada" },
          capital: "Ottawa",
          population: 37589262,
          region: "Americas",
          flags: { svg: "https://flagcdn.com/cx.svg" },
        },
      ],
    });

    const result = await retrieveCountryInfo(countryName);

    expect(axiosGetMock).toHaveBeenCalledWith(
      `https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`
    );
    expect(result).toEqual(expectedCountryInfo);
  });

  // Should return default values for unknown country name
  it("should return default values for unknown country name", async () => {
    const countryName = "Unknown Country";
    const expectedCountryInfo = {
      name: "Unknown",
      capital: "Unknown",
      population: "Unknown",
      region: "Unknown",
    };

    const axiosGetMock = jest.spyOn(axios, "get");
    axiosGetMock.mockResolvedValueOnce({ status: 200, data: [] });

    const result = await retrieveCountryInfo(countryName);

    expect(axiosGetMock).toHaveBeenCalledWith(
      `https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`
    );
    expect(result).toEqual(expectedCountryInfo);
  });

  // Should throw error for empty country name
  it("should throw error for empty country name", async () => {
    const countryName = "";

    await expect(retrieveCountryInfo(countryName)).rejects.toThrow(
      "Country name is required"
    );
  });

  // Should throw error for non-string country name
  it("should throw error for non-string country name", async () => {
    const countryName = 123;

    await expect(retrieveCountryInfo(countryName)).rejects.toThrow(
      "Country name is required"
    );
  });

  // Should throw error for invalid country name
  it("should throw error for invalid country name", async () => {
    const countryName = "Invalid Country";

    const axiosGetMock = jest.spyOn(axios, "get");
    axiosGetMock.mockResolvedValueOnce({ status: 404 });

    await expect(retrieveCountryInfo(countryName)).rejects.toThrow(
      "Failed to retrieve country info"
    );
  });
});

import React, { useState } from "react";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countryInfo, setCountryInfo] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const getAPI = await axios.get(
        `http://localhost:5001/country/${countryName}`
      );
      console.log(getAPI);

      if (getAPI.status !== 200) {
        throw new Error("Country not found");
      }

      setCountryInfo(getAPI.data);
    } catch (error) {
      console.log("Error fetching country information:", error);
      setCountryInfo(null);
    }
  };

  const handleInputChange = (e) => {
    setCountryName(e.target.value);
  };

  return (
    <div id="body">
      <div id="card-container">
        <form onSubmit={handleFormSubmit}>
          <div className="input-group mb-3">
            <input
              id="search-bar"
              type="text"
              className="form-control shadow-none"
              placeholder="Search"
              aria-label="CountryName"
              aria-describedby="basic-addon2"
              value={countryName}
              onChange={handleInputChange}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                id="button"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        {countryInfo && (
          <div className="data-load">
            <div className="data">
              <b> Name: </b> {countryInfo.name}
            </div>
            <div className="data">
              <b>Capital: </b> {countryInfo.capital}
            </div>
            <div className="data">
              <b>Population: </b>
              {countryInfo.population}
            </div>
            <div className="data">
              <b>Region: </b>
              {countryInfo.region}
            </div>
            <img
              id="country-flag"
              src={countryInfo.flag}
              alt={`${countryInfo.name} flag`}
            />
          </div>
        )}
        <div className="description">Enter a Country.</div>
      </div>
    </div>
  );
};

export default App;

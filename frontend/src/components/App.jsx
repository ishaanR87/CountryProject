import React, { useState } from "react";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countryInfo, setCountryInfo] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div id="body">
      <div id="card-container">
        <form onSubmit={handleFormSubmit}>
          <div class="input-group mb-3">
            <input
              id="search-bar"
              type="text"
              class="form-control shadow-none"
              placeholder="Search"
              aria-label="CountryName"
              aria-describedby="basic-addon2"
            ></input>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div class="data-load">
          <div class="name"></div>
          <div class="captial"></div>
          <div class="population"></div>
          <div class="region"></div>
          <div class="description">Enter a Country.</div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div id="body">
      <div id="card-container">
        <div class="input-group mb-3">
          <input
            id = "search-bar"
            type="text"
            class="form-control shadow-none"
            placeholder="Enter Country Name:"
            aria-label="CountryName"
            aria-describedby="basic-addon2"
          ></input>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
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
      </div>
    </div>
  );
}

export default App;

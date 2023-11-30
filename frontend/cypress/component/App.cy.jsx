import React from "react";
import App from "../../src/components/App";

describe("App Component", () => {
  it("renders the component without crashing", () => {
    cy.mount(<App />);
    cy.contains("Enter a Country.");
  });

  it("displays error message for an invalid country name (numbers and symbols)", () => {
    cy.mount(<App />);
    cy.get("#search-bar").type("123"); // enter an invalid country name
    cy.get("#button").click();
    cy.contains("Please enter a valid country name.");
  });

  it("displays error message for incorrect country name", () => {
    cy.mount(<App />);
    cy.get("#search-bar").type("Irelan"); // enter an invalid country name
    cy.get("#button").click();
    cy.contains("Country not found, please try again.");
  });

  it("fetches country information for a valid country name", () => {
    cy.mount(<App />);
    cy.intercept("GET", "http://localhost:5001/country/*", {
      fixture: "countryInfo.json",
    }).as("countryInfo");

    cy.get("#search-bar").type("Canada"); // enter a valid country name
    cy.get("#button").click();
    cy.wait("@countryInfo");
    cy.get(".data-load").should("be.visible");
  });
});

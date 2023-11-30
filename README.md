# Description

The Country Project is a web application that allows users to search for and retrieve information about different countries. It provides details such as the country's name, capital, population, and region.

# Technologies Used

## Frontend

- React
- Vite (for the build)
- Axios (for handling HTTP requests)
- Bootstrap (for styling)
- Cypress for component testing

## Backend

- Node.js
- Express.js
- Axios (for fetching data from external APIs)
- Joi for request validation
- Jest for unit testing

## Testing Tools

### Jest

[Jest](https://jestjs.io/) - A delightful JavaScript testing framework.

### Cypress

[Cypress](https://www.cypress.io/) - Fast, easy, and reliable testing for anything that runs in a browser.

## Validation Library

### Joi

[Joi](https://github.com/sideway/joi) - Schema description language and data validator for JavaScript.

# Features

- Search for countries using their names
- Display detailed information about each country
- Error handling for invalid country names/invalid entries etc..

# Setup Instructions

To run the project locally, here are the steps:
<bold>(Before running these steps, please ensure you have npm installed globally)</bold>

1. Clone this repo onto your local computer: `git clone https://github.com/ishaanR87/CountryProject.git `
2. cd into this directory using two different terminals: `cd wherever/wherever/CountryProject`
   ### Frontend
3. Now using one terminal cd into the frontend folder and run this command which will install the latest version of vite and the necessary modules: `npm install vite@latest `
4. Now just run `npm run dev ` which will boot up the React page.
   ### Backend
5. cd into backend folder and delete the **_packages-lock.json_** file.
6. Run `npm install ` to download all the needed modules and to regenerate the file above.
7. Once done, run `npm run dev ` and the server will boot up.

### Testing

- For frontend tests: Navigate to the frontend directory and `npm cypress `
- For backend tests: Navigate to the backend directory and `npm test `

const express = require("express");
const app = express(); // Use express() to create an Express application
const countryRoutes = require("./routes/countryRoutes");

// Port Number
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

app.use("/country", countryRoutes);

// Server Setup
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

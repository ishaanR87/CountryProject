const express = require("express");
const app = express(); // Use express() to create an Express application
const countryRoutes = require("./routes/countryRoutes");
const cors = require("cors");

// port Number
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());
app.use(cors());

app.use("/country", countryRoutes);

// server setup
const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// if server doesn't start
server.on("error", (err) => {
  console.error("Server failed to start:", err.message);
});

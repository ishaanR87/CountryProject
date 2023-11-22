const express = require("express");
const app = express(); // Use express() to create an Express application

// Port Number
const PORT = process.env.PORT || 5001;

// Server Setup
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

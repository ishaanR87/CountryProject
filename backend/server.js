const express = require("express");
const app = express(); // Use express() to create an Express application

app.get("/", (req, res) => {
  res.send("Node App"); 
});

// Port Number
const PORT = process.env.PORT || 5001;

// Server Setup
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

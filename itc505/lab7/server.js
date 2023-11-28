// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("/itc505/lab7"));

// POST route handler for the mad lib form
app.post("/itc505/lab7", (req, res) => {
  // Extract data from the form
  const { noun, adjective, verb, pluralNoun, adverb } = req.body;

  // Your Mad Lib template
  const madLib = `Grab your ${adjective} ${noun} and ${adverb} ${verb} to NAU University. Explore the ${adjective} SBS building, and the ${adjective} engineering building. Head to the HLC for ${adjective} games, and other cool ${pluralNoun}.`;

  res.send(madLib);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

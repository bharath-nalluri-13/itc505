// functions/server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/.netlify/functions/madlib", (req, res) => {
  const { noun, adjective, verb, pluralNoun, adverb } = req.body;
  const madLib = `Grab your ${adjective} ${noun} and ${adverb} ${verb} to NAU University. Explore the ${adjective} SBS building, and the ${adjective} engineering building. Head to the HLC for ${adjective} games, and other cool ${pluralNoun}.`;

  res.send(madLib);
});

// Listen on the provided port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;

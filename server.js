// server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/itc505/lab7", (req, res) => {
  const { noun, adjective, verb, pluralNoun, adverb } = req.body;
  const madLib = `Grab your ${adjective} ${noun} and ${adverb} ${verb} to NAU University. Explore the ${adjective} SBS building, and the ${adjective} engineering building. Head to the HLC for ${adjective} games, and other cool ${pluralNoun}.`;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mad Lib Result</title>
      </head>
      <body>
        <h1>Mad Lib Result</h1>
        <p>${madLib}</p>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

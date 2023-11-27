// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
//app.use(express.static("public"));
app.use(express.static("itc505/lab7"));

// Handle favicon requests
app.get('/favicon.ico', (req, res) => res.status(204));

app.post("/itc505/lab7", (req, res) => {
  // Your Mad Lib template
  const madLib = `The ${req.body.adjective} ${req.body.noun}...`; // Adjust based on your template

  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

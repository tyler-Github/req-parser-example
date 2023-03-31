const express = require("express");
const bodyParser = require("req-parser");

const app = express();

// Use bodyParser middleware
app.use(bodyParser);

// Handle POST requests
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Got it!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

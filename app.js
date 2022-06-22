const express = require("express");
const app = express();
app.use(express.static(__dirname + '/frontend'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/frontend/index0.html");
  let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log('Server @: ', fullUrl);
  res.sendFile(__dirname + "/frontend/index.html");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT}`);
});
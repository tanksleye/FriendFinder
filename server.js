
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.static("app/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);


  


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/firends", function(req, res) {
     res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
  if (friendData.length < 1) {
      friendData.push(req.body);
      res.json(true);
  }
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newfriend.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriend);
  
    newfriend.push(newfriend);
  
    res.json(newfriend);
  });

}
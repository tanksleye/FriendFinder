

  app.get("/api/firends", function(req, res) {
    return res.json(table);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriend);
  
    characters.push(newfriend);
  
    res.json(newfriend);
  });
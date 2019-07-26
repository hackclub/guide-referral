var express = require("express");
const bodyParser = require('body-parser');

var app = express();
var Airtable = require('airtable');

require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
var base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base(process.env.AIRTABLE_BASE);

app.listen(process.env.PORT || 3000, () => {
 console.log("The potato is running on port 3000");
});

app.post('/chopchop',function(req,res){
    var username=req.body.username;
    var source=req.body.source;
    var page=req.body.page;

    base('Auto Grant').create({
        "User": "@" + username,
        "Submitted": "@" + source,
        "Page Name": page
      }, function(err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Success! Record ID: " + record.getId());
      });

      res.json({ success: true });

});

app.use(express.static('public'))
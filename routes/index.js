var express = require('express');
var router = express.Router();

// require fs module
const fs = require("fs");

// get creation time using fs.stat() method
fs.stat("./routes/index.js", (error, stats) => {
  if (error) {     console.log(error);     return;   }
  console.log("File created at: ", stats.birthtime); 
  btime= stats.birthtime; // creation time
  mtime= stats.mtime; // modification time
});

fs.stat("./views/index.ejs", (error, stats) => {
  if (error) {     console.log(error);     return;   }
  console.log("File created at: ", stats.birthtime);
  btime2= stats.birthtime;
  mtime2= stats.mtime;
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Site', btime: btime, mtime: mtime, btime2: btime2, mtime2: mtime2, sampleNumber: 123456.789});
});

module.exports = router;

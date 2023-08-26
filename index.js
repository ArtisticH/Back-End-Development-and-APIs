// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

let listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + 3000);
});

function isValidDate(input) {
  return /^(\d{4}-\d{2}-\d{2})$/.test(input) || !!Number(input);
}

app.get("/api/:date", (req, res) => {
  let date = req.params.date;
  let isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

  if(!isValidDate(date)) {
    res.json({ error : "Invalid Date" });
    return;
  } 
  
  if(isoDatePattern.test(date)) {
    let inputDate = new Date(date);
    let unixTimeStamp = inputDate.getTime();
    let formattedDate = inputDate.toUTCString();
    res.json({unix: unixTimeStamp, utc: formattedDate});
  } else {
    date = Number(date);
    let dateObject = new Date(date);
    let formattedDate = dateObject.toUTCString(dateObject);
    res.json({unix: date, utc: formattedDate});
  }
});

app.get("/api", (req, res) => {
  res.json({unix: Date.now(), utc: new Date().toUTCString()})
});


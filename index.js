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

app.get("/api/:date", (req, res) => {
  let date = req.params.date;

  // date 가 숫자인 경우(string)
  if(!isNaN(Number(date))) {
    res.json({
      unix: Number(date),
      utc: new Date(Number(date)).toUTCString()
    })
  }

  // date가 '2015-05-04'형식이면
  if(new Date(date).toUTCString() !== 'Invalid Date') {
    res.json({
      unix: new Date(date).getTime(),
      utc: new Date(date).toUTCString()
    })
  }

  res.json({error: 'Invalid Date'})
  
});

app.get("/api", (req, res) => {
  res.json({unix: Date.now(), utc: new Date().toUTCString()})
});

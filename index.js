require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");


// Basic Configuration
// const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(3000, function() {
  console.log(`Listening on port 3000`);
});

const originalUrls = [];
const shortUrls = [];

app.post('/api/shorturl', (req, res) => {
  const url = req.body.url; // url은 input의 name속성값
  const urlPattern = /^(https?:\/\/)/
  const index = originalUrls.indexOf(url);

  if(!urlPattern.test(url)) {
    res.json({ error: 'invalid url' });
    return;
  }

  if(index < 0) {
    originalUrls.push(url);
    shortUrls.push(shortUrls.length);

    res.json({
      original_url: url,
      short_url: shortUrls.length - 1
    })
  }

  res.json({
    original_url: url,
    short_url: shortUrls[index]
  })
});

app.get('/api/shorturl/:number', (req, res) => {
  res.redirect(`${originalUrls[req.params.number]}`);
});


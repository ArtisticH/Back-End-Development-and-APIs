const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.listen(3000, () => {
  console.log('Your app is listening on port ' + 3000)
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  log: [
    {
      description: String,
      duration: Number,
      date: String
    }
  ]
})

let User = mongoose.model('User', userSchema);

// body-parser는 POST 요청의 본문(body)을 파싱하여 req.body 객체에 넣어주는 역할을 합니다.
app.post('/api/users', (req, res) => {
  User.create({
    username: req.body.username
  })
  .then(user => {
    console.log(user);
    res.json({
      username: user.username,
      _id: user._id
    })
  })
})

// model의 모든 document를 가져오되, 특정 field만 골라서
app.get('/api/users', (req, res) => {
  User.find({}, '_id username')
    .then(userArr => {
      res.send(userArr)
    })
})

app.post('/api/users/:_id/exercises', (req, res) => {
  let id = req.params._id;
  let date = req.body.date;

  date = date ? new Date(date) : new Date();

  User.findById(id)
    .then(user => {
      user.log.push(
        {
          date: date,
          duration: req.body.duration,
          description: req.body.description,
      })
      return user.save()
    })
    .then(savedUser => {
      let changableDate = savedUser.log[savedUser.log.length - 1].date;

      res.json({
        _id: savedUser._id,
        username: savedUser.username,
        date: new Date(changableDate).toDateString(),
        duration: savedUser.log[savedUser.log.length - 1].duration,
        description: savedUser.log[savedUser.log.length - 1].description
      })
    })
})

app.get('/api/users/:_id/logs', (req, res) => {
  let id = req.params._id;
  let from = req.query.from;
  let to = req.query.to;
  let limit = req.query.limit;
  limit = Number(limit);

  User.findById(id)
    .then(finedUser => {
      let filteredLogs = finedUser.log;

      filteredLogs.map(item => {
        item.date = new Date(item.date).toDateString();
        console.log(item.date)
      })

      if(from && to) {
        from = new Date(from);
        to = new Date(to);

        filteredLogs = filteredLogs.filter(item => {
          const itemDate = new Date(item.date);
          return itemDate >= from && itemDate <= to;
        })
      }

      if(limit && limit > 0) {
        filteredLogs = filteredLogs.slice(filteredLogs.length - limit);
      }

      res.json({
        _id: finedUser._id,
        username: finedUser.username,
        count: filteredLogs.length,
        log: filteredLogs
      })
    })

})


// https://youtu.be/rVNsEXZPEF8?feature=shared
// https://codingapple.com/course/node-express-mongodb-server/

// 서버 오픈 기본 문법 3줄
// npm install express
const express = require("express");
const app = express();
// 서버를 어디다 열지? 
// 서버 띄울 포트번호, 띄운 후 실행할 코드
app.listen(8080, function() {
  console.log('listening on 8080')
}); 

// 누군가가 /pet으로 방문을 하면 
// pet관련 안내문을 띄어주자. 

// 서버 끌 때 ctrl + c
// 파일 저장하고
// 화살표 위 키보드 누르면 전에 썼던 코드 그대로

// http://localhost:8080/pet
app.get('/pet', function(req, res) {
  res.send('펫용품 쇼핑할 수 있는 페이지입니다.');
});

// // http://localhost:8080/beauty
app.get('/beauty', function(req, res) {
  res.send('뷰티용품 쇼핑할 수 있는 페이지입니다.');
});

// 서버 재실행 자동화시키는 스크립트
// sudo npm install -g nodemon
// nodemon server.js

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// app.get('/json', function(req, res) {
//   res.json({name: 'hanna'});
// });

// npm install dotenv
require("dotenv").config();

// app.use((req, res, next) => {
//   console.log(`${req.method}, ${req.ip}, ${req.path}, ${req}`)
//   next();
// })

app.get('/json', function(req, res) {
  let message2 = 'Hello json';
  if(process.env.MESSAGE_STYLE == 'uppercase') {
    res.json({message: message2.toUpperCase()});
  } else {
    res.json({message: message2});
  }
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({time: req.time})
});

app.get('/:name/echo', (req, res) => {
  res.json({'echo': req.params.name})
});

// http://localhost:8080/library?location=vision&name=visionlibrary
app.get('/library', (req, res) => {
  res.json({'library': `${req.query.location} ${req.query.name}`})
});

// npm install body-parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.post('/library', (req, res) => {
  res.json({'library': `${req.body.location} ${req.body.name}`})
});

const formData = new URLSearchParams();
formData.append('location', 'LibraryLocation'); // 여기에 원하는 데이터를 설정합니다.
formData.append('name', 'LibraryName');         // 여기에 원하는 데이터를 설정합니다.

fetch('http://localhost:8080/library', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: formData.toString(), // URLSearchParams 객체를 문자열로 변환하여 보냅니다.
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


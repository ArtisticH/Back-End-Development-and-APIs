// https://youtu.be/rVNsEXZPEF8?feature=shared
// https://codingapple.com/course/node-express-mongodb-server/

// 서버 오픈 기본 문법 3줄
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

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

let express = require('express');
let cors = require('cors');
require('dotenv').config()
let app = express();
let multer = require('multer');
let bodyParser = require('body-parser');

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('uploads'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

/*

Express에서 파일 업로드를 처리할 때 이미지의 정보를 알기 위해서는 multer 또는 express-fileupload와 같은 미들웨어를 사용해야 합니다. 
이러한 미들웨어를 사용하면 업로드된 파일의 정보를 req.files 객체에서 확인할 수 있습니다. 
req.body에는 파일 자체가 아니라 파일의 메타데이터 및 다른 필드 정보가 들어가므로 req.body만으로 이미지 정보를 얻을 수 없습니다.
*/

/*
diskStorage 함수는 파일 업로드에 대한 디스크 스토리지 엔진을 구성하는 데 사용됩니다. 
이 엔진은 업로드된 파일이 서버의 디스크에 어떻게 저장될지를 제어합니다. 
diskStorage 함수는 두 가지 콜백 함수를 인수로 받습니다.

1. destination:
첫 번째 인수 (null): 에러를 나타내는 값입니다. 보통 에러가 없으면 null을 전달합니다.
두 번째 인수 ('uploads/'): 업로드된 파일을 저장할 디렉토리의 경로를 지정합니다. 이 예제에서는 'uploads/' 폴더에 저장합니다.

2. filename:
이 콜백 함수는 업로드된 파일의 이름을 설정합니다.
첫 번째 인수 (null): 에러를 나타내는 값입니다. 보통 에러가 없으면 null을 전달합니다.
두 번째 인수: 실제로 파일의 이름을 설정합니다. 
이 함수는 업로드된 파일 객체 (file)와 함께 호출되며, 파일 객체에서 originalname 속성을 통해 원본 파일 이름을 얻어와서 파일 이름을 조합합니다. 
Date.now()는 현재 시간을 밀리초로 나타내며 파일 이름에 추가하여 파일명 충돌을 방지합니다.
*/

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // 업로드된 파일을 저장할 폴더를 설정합니다. 여기서는 uploads/ 폴더에 저장합니다.
  },
  filename: (req, file, cb) => {
    // 한글 인코딩 깨짐 현상 해결 코드
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    cb(null, file.originalname);
  }
});

// 파일 업로드 미들웨어 설정
// multer()를 호출하여 파일 업로드 미들웨어를 생성하고 storage 설정을 적용합니다.

const upload = multer({ storage });

// 파일 업로드 라우드 설정
// req.file에 업로드된 파일의 정보가 들어있으며, 이를 통해 파일의 원본 이름, MIME 타입, 저장된 파일 이름 등을 확인할 수 있습니다.
// 'upfile'은 HTML 폼에서 파일 업로드 필드의 이름(name)과 일치해야 합니다.
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

// const port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log('Your app is listening on port ' + port)
// });

app.listen(3000, function () {
  console.log('Your app is listening on port ' + 3000)
});

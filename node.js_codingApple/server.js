// https://youtu.be/rVNsEXZPEF8?feature=shared
// https://codingapple.com/course/node-express-mongodb-server/

// 서버 오픈 기본 문법 3줄
// npm install express
const express = require("express");
const app = express();
// 서버를 어디다 열지? 
// 서버 띄울 포트번호, 띄운 후 실행할 코드
app.listen(8000, function() {
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

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

// const createAndSavePerson = function(done) {
//   let person = Person({
//     name: "hanna seo",
//     age: 28,
//     favoriteFoods: ["apple", "pasta"]
//   })

//   person.save((err, data) => {
//     if(err) return console.error(err);
//     done(null, data);
//   });
// };

// createAndSavePerson(function(err, savedPerson) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Saved person:', savedPerson);
//   }
// });

/*
Mongoose 버전 6 이상에서는 Model.prototype.save() 메서드에 콜백 함수를 직접 전달하는 대신, Promise를 반환하도록 변경되었습니다.
따라서 콜백 함수 대신 Promise를 사용하여 코드를 수정해야 합니다. 
*/
const createAndSavePerson = function() {
  let person = new Person({
    name: "hanna seo",
    age: 28,
    favoriteFoods: ["apple", "pasta"]
  });

  return person.save()
    .then(savedPerson => {
      console.log('Saved person:', savedPerson);
      return savedPerson; // 이 부분은 선택사항입니다. 반환하려면 사용하세요.
    })
    .catch(err => {
      console.error(err);
      throw err; // 에러를 상위로 전달합니다.
    });
};
/*
Saved person: {
  name: 'hanna seo',
  age: 28,
  favoriteFoods: [ 'apple', 'pasta' ],
  _id: new ObjectId("64e968f9c8101aa3303935a1"),
  __v: 0
}
*/

// createAndSavePerson()
//   .then(savedPerson => {
//     // 이 부분에서 저장된 사람(savedPerson)을 사용할 수 있습니다.
//   })
//   .catch(err => {
//     // 오류 처리
//   });

  /*
  practice.people에
  하나의 document를 생성한다. 
  */

let arrayOfPeople = [
  {name: "minsoo kim", age:25, favoriteFoods: ["sushi"]},
  {name: "yezi kang", age: 27, favoriteFoods: ["soup"]}
];

const createManyPeople = (array) => {
  return Person.create(array)
};

// createManyPeople(arrayOfPeople)
//   .then(people => {
//     console.log('createManyPeople', people)
//   })
//   .catch(err => {
//     console.error(err)
//   })

  /*
  createManyPeople [
  {
    name: 'minsoo kim',
    age: 25,
    favoriteFoods: [ 'sushi' ],
    _id: new ObjectId("64e968f9c8101aa3303935a2"),
    __v: 0
  },
  {
    name: 'yezi kang',
    age: 27,
    favoriteFoods: [ 'soup' ],
    _id: new ObjectId("64e968f9c8101aa3303935a3"),
    __v: 0
  }
]
  */
  const findPeopleByName = (personName) => {
    return Person.find({name: personName})
  };

  // findPeopleByName('hanna seo')
  //   .then(personFound => {
  //     console.log('personFound', personFound)
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })

 /*

 그 동안 서버를 작동시켜서 중복으로 올라감
 personFound [
  {
    _id: new ObjectId("64e8a5e5c90d1b232a4c1317"),
    name: 'hanna seo',
    age: 28,
    favoriteFoods: [ 'apple', 'pasta' ],
    __v: 0
  },
  {
    _id: new ObjectId("64e968f9c8101aa3303935a1"),
    name: 'hanna seo',
    age: 28,
    favoriteFoods: [ 'apple', 'pasta' ],
    __v: 0
  },
  {
    _id: new ObjectId("64e96a17e0244f6dd26415ed"),
    name: 'hanna seo',
    age: 28,
    favoriteFoods: [ 'apple', 'pasta' ],
    __v: 0
  }
]
 */

const findOneByFood = (food) => {
  return Person.findOne({favoriteFoods: food})
}


// findOneByFood('soup')
//   .then(food => {
//     console.log('food', food, food._id);
//   })
//   .catch(err => {
//     console.error(err)
//   })

  /*
  {
  _id: new ObjectId("64e96a17e0244f6dd26415ef"),
  name: 'yezi kang',
  age: 27,
  favoriteFoods: [ 'soup' ],
  __v: 0
}
  */

const findPersonById = (personId) => {
  return Person.findById({_id: personId});
}

// findPersonById("64e96a17e0244f6dd26415ef")
//   .then(personIdFound => {
//     console.log('personIdFound', personIdFound.name == 'yezi kang'); // true
//   })
//   .catch(err => {
//     console.error(err)
//   })

  const findEditThenSave = (personId) => {
    return Person.findById({_id: personId})
  }
  
  // findEditThenSave("64e96a17e0244f6dd26415ef")
  //   .then(personIdFound => {
  //     personIdFound.favoriteFoods.push('hamburger');
  //     return personIdFound.save()
  //   })
  //   .then(updatedPerson => {
  //     console.log('updatedPerson', updatedPerson)
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })

/*
updatedPerson {
  _id: new ObjectId("64e96a17e0244f6dd26415ef"),
  name: 'yezi kang',
  age: 27,
  favoriteFoods: [ 'soup', 'hamburger' ],
  __v: 1 // update
}
*/

const findAndUpdate = (personName, ageToSet) => {
  return Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true});
}

// findAndUpdate('yezi kang', 30)
//   .then(updatedDoc => {
//     console.log('updatedDoc', updatedDoc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

/*
위에서 아래 순으로 진행되면서 __V가 바뀌는 거 주목
updatedDoc {
  _id: new ObjectId("64e96a17e0244f6dd26415ef"),
  name: 'yezi kang',
  age: 30,
  favoriteFoods: [ 'soup', 'hamburger' ],
  __v: 1
}
personIdFound true
updatedPerson {
  _id: new ObjectId("64e96a17e0244f6dd26415ef"),
  name: 'yezi kang',
  age: 27,
  favoriteFoods: [ 'soup', 'hamburger', 'hamburger' ],
  __v: 2
}
food {
  _id: new ObjectId("64e96a17e0244f6dd26415ef"),
  name: 'yezi kang',
  age: 30,
  favoriteFoods: [ 'soup', 'hamburger', 'hamburger' ],
  __v: 2
} new ObjectId("64e96a17e0244f6dd26415ef")
*/

const removeById = (personId) => {
  return Person.findByIdAndRemove(personId);
}

removeById('64e968f9c8101aa3303935a2')
  .then(removedDoc => {
    console.log('removedDoc', removedDoc)
  })
  .catch(err => {
    console.log('에러', err)
  })

/*
removedDoc {
  _id: new ObjectId("64e968f9c8101aa3303935a2"),
  name: 'minsoo kim',
  age: 25,
  favoriteFoods: [ 'sushi' ],
  __v: 0
}
*/

const removeManyPeople = (nameToRemove) => {
  return Person.deleteMany({name: nameToRemove})
};

removeManyPeople('hanna seo')
  .then(result => {
    console.log('result', result)
  })
  .catch(err => {
    console.error(err)
  })

/*
result { acknowledged: true, deletedCount: 1 }
acknowledged가 true로 설정된 경우, MongoDB 서버가 요청을 받았으며 작업이 수행되었음을 의미합니다.
acknowledged가 false로 설정된 경우, 요청이 서버로 전송되지 않거나 서버에 의해 처리되지 않았음을 나타냅니다.
*/

const queryChain = (foodToSearch) => {

  return Person.find({favoriteFoods: foodToSearch})
    .sort({name: 1})
    .limit(1)
    .select({ age: 0 })
    .exec()
};

queryChain('soup')
  .then(queryresult => {
    console.log('queryresult', queryresult)
  })
  .catch(err => {
    console.error(err)
  })
/*
queryresult [
  {
    _id: new ObjectId("64e98d6a4c23f37f941b5544"),
    name: 'minsoo kim',
    favoriteFoods: [ 'soup', 'sushi' ],
    __v: 0
  }
]
*/

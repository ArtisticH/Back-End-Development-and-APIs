# MongoDB and Mongoose
MongoDB is a database application that stores JSON documents (or records) that you can use in your application. Unlike SQL, another type of database, MongoDB is a non-relational or "NoSQL" database. This means MongoDB stores all associated data within one record, instead of storing it across many preset tables as in a SQL database.

Mongoose is a popular npm package for interacting with MongoDB. With Mongoose, you can use plain JavaScript objects instead of JSON, which makes it easier to work with MongoDB. Also, it allows you to create blueprints for your documents called schemas, so you don't accidentally save the wrong type of data and cause bugs later.

In the MongoDB and Mongoose courses, you'll learn the fundamentals of working with persistent data including how to set up a model, and save, delete, and find documents in the database.

## MongoDB Atlas
```
Q cluster

클러스터는 컴퓨터에 저장된 정보들을 다루는 일종의 "놀이공원"이에요. 그런데 이 놀이공원은 데이터라는 것을 다루거나 저장하기 위한 특별한 장소입니다.
클러스터 안에는 여러 대의 컴퓨터(서버)들이 있어요. 이 서버들은 함께 일하며 데이터를 저장하고 처리합니다.
이렇게 여러 대의 컴퓨터가 모여서 하나의 클러스터를 이루면, 데이터를 많이 저장하고 더 빠르게 처리할 수 있게 됩니다. 그리고 만약 하나의 컴퓨터에 문제가 생겨도 다른 컴퓨터들이 도와줘서 데이터가 안전하게 보호됩니다.
마치 놀이공원에 더 많은 놀이기구와 친구들이 있다면, 더 재미있는 놀이를 할 수 있고, 만약 친구 중에 한 명이 조금 아파도 다른 친구들이 같이 노는 걸 도와줄 거에요!
이렇게 클러스터는 데이터를 보호하고 처리하는데 도움을 주는 특별한 "데이터 놀이공원"이라고 생각하면 돼요!

Q mongoDB Atlas에서 cluster만들고 다음에 Database User 를 생성하는건 무슨 의미야?

1. Cluster 생성:
Cluster 생성은 MongoDB 데이터베이스를 호스팅하는 서버 집합을 설정하는 과정입니다. 여기에는 데이터베이스 파일을 저장하고 클라이언트와 통신할 수 있는 서버가 포함됩니다. 클러스터는 여러 서버 인스턴스로 구성되어 데이터의 저장, 분산 처리, 고가용성을 제공하며 확장성을 갖습니다.

2. Database User 생성:
Database User 생성은 데이터베이스에 접근할 수 있는 사용자를 만드는 것을 의미합니다. 이 사용자는 데이터베이스를 읽고 쓸 권한을 가지며, 일반적으로 애플리케이션과 데이터베이스 사이의 연결에 필요한 인증 정보를 제공합니다. 이 사용자는 데이터베이스를 보호하고 접근을 제어하는 데 사용됩니다.

이러한 두 단계는 데이터베이스를 구성하고 관리하는 데 필수적입니다. 클러스터를 생성하여 데이터를 저장하고 처리하고, Database User를 생성하여 데이터베이스를 안전하게 접근 및 관리합니다. 이러한 단계는 MongoDB Atlas와 같은 관리형 서비스에서 상당한 편의성과 보안을 제공하여 데이터베이스 운영을 단순화하고 안전하게 만드는 데 도움이 됩니다.

Q Allow Access From All IP Addresses:
이 설정은 데이터베이스에 대한 접근을 모든 IP 주소로부터 허용하도록 만듭니다. 즉, 어떠한 인터넷 연결이나 IP 주소에서도 MongoDB 데이터베이스에 접근할 수 있게 됩니다. 이 설정은 보통 개발 및 테스트 목적으로 사용되며, 실제 프로덕션 환경에서는 보안을 강화하기 위해 IP 주소를 제한하는 것이 일반적입니다.

Q database name과 collection name은 무슨 차이?

간단히 말해, 데이터베이스는 컬렉션의 그룹화를 제공하며, 컬렉션은 문서를 저장하고 관리하는 방법입니다. 예를 들어, 온라인 상점 애플리케이션의 데이터베이스에는 "Products"라는 데이터베이스가 있을 수 있으며, 이 데이터베이스에는 "Shoes"라는 컬렉션과 "Clothing"이라는 컬렉션 등이 포함될 수 있습니다. "Shoes" 컬렉션에는 신발 제품에 관한 문서가 저장되고, "Clothing" 컬렉션에는 의류 제품에 관한 문서가 저장될 것입니다.

Q 그럼 cluster > database > collection이야?

1. Cluster (클러스터):
클러스터는 MongoDB 서버의 집합을 나타냅니다. 이 서버들은 데이터를 저장하고 처리하는 역할을 합니다. 클러스터는 데이터베이스의 최상위 단계로 생각할 수 있습니다.

2. Database (데이터베이스):
클러스터 내의 각 데이터베이스는 데이터의 논리적 그룹화를 나타냅니다. 데이터베이스는 컬렉션을 담는 컨테이너 역할을 합니다. 예를 들어, 여러 개의 데이터베이스를 가질 수 있으며 각 데이터베이스는 독립적으로 관리됩니다.

3. Collection (컬렉션):
데이터베이스 내의 컬렉션은 문서의 그룹을 나타냅니다. 각 컬렉션은 서로 다른 종류의 문서를 포함하고 있으며, 문서들은 MongoDB의 BSON 형식으로 저장됩니다. 컬렉션은 스키마를 강제하지 않으므로 문서 간에 구조가 다를 수 있습니다.

4. Document (문서):
컬렉션 내에 있는 각 문서는 실제 데이터를 포함하며, MongoDB의 문서 형식을 따릅니다. 문서는 필드와 값의 쌍으로 이루어져 있으며, 각 문서는 고유한 식별자인 ObjectID를 가집니다.

따라서 데이터베이스는 클러스터 내의 여러 데이터베이스 중 하나를 선택하는 논리적인 컨테이너이며, 데이터베이스 내에는 여러 컬렉션이 포함되어 있습니다. 각 컬렉션은 다양한 유형의 문서를 저장하고 있습니다. 이 계층 구조를 통해 MongoDB는 데이터를 구조적으로 구성하고 관리할 수 있습니다.
```
## Install and Set Up Mongoose
to set up a hosted database on MongoDB Atlas: https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/  

`mongoose@^5.11.15` has been added to your project’s `package.json` file. First, require mongoose as `mongoose` in `myApp.js`. Next, create a `.env` file and add a `MONGO_URI`variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the `=` in environment variables. For example, `MONGO_URI='VALUE'`.

Note: If you are using Replit, you cannot create a `.env` file. Instead, use the built-in SECRETS tab to add the variable. Do not surround the values with quotes when using the SECRETS tab.

When you are done, connect to the database by calling the `connect` method within your `myApp.js` file by using the following syntax:
```
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```
Mongoose라는 MongoDB와 상호 작용하기 위한 Node.js 라이브러리를 사용하는 것으로 가정하고 있습니다.
여기서 <Your URI> 부분은 MongoDB 데이터베이스에 연결하기 위한 URI(Uniform Resource Identifier) 또는 연결 문자열을 나타냅니다.  

그리고 두 번째 인자는 옵션 객체입니다. 여기서 두 가지 옵션을 설정하고 있습니다:

`useNewUrlParser: true`: 이 옵션은 MongoDB 드라이버의 새로운 URL 파서를 사용하도록 설정합니다. 이는 예전 버전의 MongoDB 연결 문자열 구문과의 호환성을 유지하기 위한 것입니다.  
`useUnifiedTopology: true`: 이 옵션은 MongoDB 드라이버의 업데이트된 토폴로지 엔진을 사용하도록 설정합니다. 이것은 MongoDB 서버와의 연결을 효율적으로 관리하고 오류 처리를 개선하는 데 도움이 됩니다.

이 코드를 실행하면 Node.js 애플리케이션이 지정된 URI로 MongoDB에 연결하고, 연결이 성공하면 데이터베이스와 상호 작용할 준비가 됩니다. Mongoose를 사용하여 MongoDB 데이터베이스와 모델을 정의하고 데이터를 조작할 수 있게 될 것입니다.

## Create a Model
CRUD Part I - CREATE

First of all, we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection. Schemas are building blocks for Models. They can be nested to create complex models, but in this case, we'll keep things simple. A model allows you to create instances of your objects, called documents.

Replit is a real server, and in real servers, the interactions with the database happen in handler functions. These functions are executed when some event happens (e.g. someone hits an endpoint on your API). We’ll follow the same approach in these exercises. The `done()` function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating, or deleting. It's following the Node convention, and should be called as `done(null, data)` on success, or `done(err)` on error.

Warning - When interacting with remote services, errors may occur!
```
/* Example */

const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
```
```
1. Schema (스키마): MongoDB는 NoSQL 데이터베이스로, 데이터가 컬렉션(Collection)에 저장됩니다. 스키마는 이 컬렉션 내의 문서(Document)의 구조를 정의합니다. 각 스키마는 문서 내의 필드와 그 데이터 형식을 지정하며, 이를 통해 컬렉션 내의 문서들이 어떻게 구성되어야 하는지를 정의합니다.

2. Model (모델): 스키마는 모델을 만들기 위한 기본 구성 요소입니다. 모델은 스키마를 기반으로 데이터베이스에서 문서를 생성, 검색, 업데이트 및 삭제하는 데 사용되는 인터페이스입니다. 모델을 사용하면 데이터베이스와 상호 작용하기 위한 메서드와 기능을 정의할 수 있습니다.

3. Handler Functions (핸들러 함수): Node.js 서버에서는 주로 핸들러 함수가 이벤트 또는 요청에 대한 응답으로 실행됩니다. 이러한 함수는 클라이언트 요청에 대한 처리를 담당하며, 데이터베이스와의 상호 작용 역시 핸들러 함수 내에서 수행될 수 있습니다.

4. done() 함수: Node.js에서 비동기 작업을 수행할 때, 작업이 완료되었음을 나타내는 콜백 함수입니다. 일반적으로 done(null, data)와 같이 사용되며, 작업이 성공적으로 완료되었을 때는 data로 결과 데이터를 전달하고, 에러가 발생한 경우 done(err)와 같이 사용하여 에러를 전달합니다.

5. Warning (경고): 이 부분은 개발자에게 데이터베이스와의 상호 작용에서 오류가 발생할 수 있음을 경고하고 있습니다. 원격 서비스와 상호 작용할 때, 네트워크 연결 문제, 권한 문제, 데이터베이스 오류 등 다양한 이유로 오류가 발생할 수 있습니다. 따라서 이러한 오류 상황에 대비하고 적절한 에러 처리를 수행하는 것이 중요합니다.
```
Create a person schema called `personSchema` with the following shape:

- A required `name` field of type `String`
- An `age` field of type `Number`
- A `favoriteFoods` field of type `[String]`
  
Use the Mongoose basic schema types. If you want you can also add more fields, use simple validators like required or unique, and set default values. See our Mongoose article.  
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

Now, create a model from the `personSchema` and assign it to the existing variable `Person`.
```
const personSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);
```
```
Q [String]와 String의 차이

1. String:
String은 몽구스 스키마에서 문자열 데이터 유형을 정의할 때 사용됩니다.
이것은 단일 문자열 값을 나타내며, 일반적으로 한 개의 문자열을 저장할 때 사용됩니다.

2. [String]:
[String]은 몽구스 스키마에서 문자열의 배열을 나타내는 데이터 유형을 정의할 때 사용됩니다.
이것은 여러 개의 문자열 값을 가지는 배열을 나타내며, 일반적으로 배열 형태로 여러 문자열을 저장해야 할 때 사용됩니다.

```

## Create and Save a Record of a Model
Within the `createAndSavePerson` function, create a document instance using the `Person` model constructor you built before. Pass to the constructor an object having the fields `name`, `age`, and `favoriteFoods`. Their types must conform to the ones in the `personSchema`. Then, call the method `document.save()` on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern; all the following CRUD methods take a callback function like this as the last argument.
```
/* Example */

// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```
스키마는 필드와 type, required같은 걸 지정하는 규칙  
모델은 그 규칙을 수용한 constructor(class느낌?), ex> Person  
모델에 obj 넣어서 document instance(record) 양성, ex> person
```
const createAndSavePerson = function(done) {
  let person = new Person({
    name: 'hanna seo',
    age: 28,
    favoriteFoods: ['koreanfood', 'fruits']
});

  person.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};
```
```
/** 1) Install & Set up mongoose */

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

/** 2) Create a 'Person' Model */
var personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

/** 3) Create and Save a Person */
var Person = mongoose.model('Person', personSchema);

var createAndSavePerson = function(done) {
  var janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};
```

## Create Many Records with model.create()
Sometimes you need to create many instances of your models, e.g. when seeding a database with initial data. `Model.create()` takes an array of objects like `[{name: 'John', ...}, {...}, ...]` as the first argument, and saves them all in the db.  

Modify the `createManyPeople` function to create many people using `Model.create()` with the argument `arrayOfPeople`.
```
let arrayOfPeople = [
  {name: 'jennie son', age: 25, favoriteFoods: ['sushi', 'fruits']}, 
  {name: 'arie kim', age: 22, favoriteFoods: ['pasta', 'fruits']}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};
```

## Use model.find() to Search Your Database
In its simplest usage, `Model.find()` accepts a query document (a JSON object) as the first argument, then a callback. It returns an array of matches. It supports an extremely wide range of search options. Read more in the docs.  

Modify the `findPeopleByName` function to find all the people having a given name, using `Model.find() -> [Person]`
Use the function argument `personName` as the search key.
```
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};
```

## Use model.findOne() to Return a Single Matching Document from Your Database
`Model.findOne()` behaves like `Model.find()`, but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique.  

Modify the `findOneByFood` function to find just one person which has a certain food in the person's favorites, using `Model.findOne() -> Person`. Use the function argument `food` as search key.
```
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, foodFound) {
    if(err) return console.log(err);
    done(null, foodFound)
  });
};
```

## Use model.findById() to Search Your Database By _id
When saving a document, MongoDB automatically adds the field `_id`, and set it to a unique alphanumeric key. Searching by `_id` is an extremely frequent operation, so Mongoose provides a dedicated method for it.  

Modify the `findPersonById` to find the only person having a given `_id`, using `Model.findById() -> Person`. Use the function argument `personId` as the search key.
```
const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, function (err, foodFound) {
    if(err) return console.log(err);
    done(null, foodFound)
  });
};
```

## Perform Classic Updates by Running Find, Edit, then Save
In the good old days, this was what you needed to do if you wanted to edit a document, and be able to use it somehow (e.g. sending it back in a server response). Mongoose has a dedicated updating method: `Model.update()`. It is bound to the low-level mongo driver. It can bulk-edit many documents matching certain criteria, but it doesn’t send back the updated document, only a 'status' message. Furthermore, it makes model validations difficult, because it just directly calls the mongo driver.
```
1. Model.update() 메서드:
Model.update() 메서드는 Mongoose 모델을 통해 MongoDB 문서를 업데이트하는 데 사용되는 메서드입니다.
이 메서드는 MongoDB의 내장 드라이버에 연결되어 있으며, 일반적으로 많은 문서를 한 번에 업데이트할 때 사용됩니다. 예를 들어, 특정 조건을 충족하는 모든 문서를 업데이트하는 데 유용합니다.
Model.update() 메서드는 주로 "status" 메시지를 반환하며, 실제로 업데이트된 문서의 내용을 반환하지 않습니다. 따라서 업데이트된 내용을 확인하려면 추가적인 작업이 필요할 수 있습니다.

2. 모델 validations:
문장에서 언급된 것처럼 Model.update() 메서드는 MongoDB의 내장 드라이버를 직접 호출하므로, Mongoose에서 정의한 모델 유효성 검사(Model validations)를 우회할 수 있습니다.
Mongoose는 데이터 모델에 대한 스키마를 정의하고, 스키마 내에서 필드 유형, 기본값, 필수 항목 등의 규칙을 설정할 수 있습니다. 이러한 규칙은 데이터의 일관성과 무결성을 보장하기 위해 사용됩니다.
Model.update() 메서드를 사용하면 이러한 모델 유효성 검사를 우회할 수 있으므로, 데이터베이스에 유효하지 않은 데이터가 입력될 수 있습니다.

따라서 Model.update() 메서드는 대량 업데이트 작업에 유용하지만, 업데이트된 내용을 확인하거나 모델 유효성 검사를 적용하기 어려울 수 있습니다. 반면에 Mongoose에서는 findOneAndUpdate() 및 findByIdAndUpdate()와 같은 메서드를 사용하여 문서를 업데이트하고 결과를 확인하며, 모델 유효성 검사를 유지할 수 있습니다. 선택한 방법은 애플리케이션의 요구 사항에 따라 다를 것이며, 각각의 장단점을 고려하여 선택해야 합니다.
```

Modify the `findEditThenSave` function to find a person by `_id` (use any of the above methods) with the parameter `personId` as search key. Add `"hamburger"` to the list of the person's `favoriteFoods` (you can use `Array.push()`). Then - inside the find callback - `save()` the updated `Person`.

Note: This may be tricky, if in your Schema, you declared `favoriteFoods` as an Array, without specifying the type (i.e. `[String]`). In that case, `favoriteFoods` defaults to Mixed type, and you have to manually mark it as edited using `document.markModified('edited-field')`. See our Mongoose article.
```
const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
    person.favoriteFoods.push(foodToAdd);

    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })
};

```
```
// 다른 코드
const findEditThenSave = async (personId, done) => {
  try {
    const foodToAdd = 'hamburger';

    // findById 메서드를 await 키워드와 함께 사용하여 비동기로 문서를 찾음
    const person = await Person.findById(personId);

    if (!person) {
      return done("사용자를 찾을 수 없음");
    }

    person.favoriteFoods.push(foodToAdd);

    // await를 사용하여 비동기로 수정한 내용을 저장
    const updatedPerson = await person.save();
    done(null, updatedPerson);
  } catch (err) {
    console.error(err);
    done(err);
  }
};
```

## Perform New Updates on a Document Using model.findOneAndUpdate()
Recent versions of Mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the classic method is still useful in many situations. `findByIdAndUpdate()` can be used when searching by id.  

Modify the `findAndUpdate` function to find a person by `Name` and set the person's age to `20`. Use the function parameter `personName` as the search key.

Note: You should return the updated document. To do that, you need to pass the options document `{ new: true }` as the 3rd argument to `findOneAndUpdate()`. By default, these methods return the unmodified object.
```
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, { new: true }, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  });
};
```

## Delete One Document Using model.findByIdAndRemove
`findByIdAndRemove` and `findOneAndRemove` are like the previous update methods. They pass the removed document to the db. As usual, use the function argument `personId` as the search key.  

Modify the `removeById` function to delete one person by the person's `_id`. You should use one of the methods `findByIdAndRemove()` or `findOneAndRemove()`.
```
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedDoc) => {
      if(err) return console.log(err);
      done(null, removedDoc);
    });
};
```

## Delete Many Documents with model.remove()
`Model.remove()` is useful to delete all the documents matching given criteria.  

Modify the `removeManyPeople` function to delete all the people whose name is within the variable `nameToRemove`, using `Model.remove()`. Pass it to a query document with the `name` field set, and a callback.

Note: The `Model.remove()` doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the `done()` callback, since we use it in tests.
```
Model.remove() 메서드는 MongoDB 컬렉션에서 조건을 만족하는 문서들을 삭제하는 데 사용됩니다. 그러나 이 메서드는 삭제된 문서 자체를 반환하지 않고, 삭제 작업의 결과와 영향을 받은 문서 수를 담은 JSON 객체를 반환합니다.

Person.remove({ name: 'John' }, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
    // result에는 삭제 작업 결과와 영향을 받은 문서 수가 포함됩니다.
  }
});

result 객체는 대략적으로 다음과 같은 형태일 것입니다:
{
  ok: 1,           // 작업이 성공했음을 나타내는 플래그 (1: 성공, 0: 실패)
  n: 3             // 영향을 받은 문서 수
}
위 예제에서는 "John"이라는 이름을 가진 사용자 문서를 삭제한 결과를 확인할 수 있습니다. 따라서 result 객체는 삭제 작업이 성공했음을 나타내는 ok 플래그와 삭제된 문서 수를 나타내는 n 값을 가집니다.
이를 테스트하는 경우, done() 콜백 함수에 result 객체를 전달하여 테스트에서 결과를 확인하거나 검증할 수 있습니다. 그래서 문장에서 "Don't forget to pass it to the done() callback, since we use it in tests."라고 언급하고 있는 것입니다. 테스트 코드에서 삭제 작업의 결과를 검사하고 테스트를 완료하기 위해 done() 콜백 함수에 전달하는 것이 중요합니다.
```
```
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, response) => {
    if(err) return console.log(err);
    done(null, response);
  });
};
```

## Chain Search Query Helpers to Narrow Search Results
If you don’t pass the callback as the last argument to `Model.find()` (or to the other search methods), the query is not executed. You can store the query in a variable for later use. This kind of object enables you to build up a query using chaining syntax. The actual db search is executed when you finally chain the method `.exec()`. You always need to pass your callback to this last method. There are many query helpers, here we'll use the most commonly used.  

Modify the `queryChain` function to find people who like the food specified by the variable named `foodToSearch`. Sort them by `name`, limit the results to two documents, and hide their age. Chain `.find()`, `.sort()`, `.limit()`, `.select()`, and then `.exec()`. Pass the `done(err, data)` callback to `exec()`.
```
"쿼리"는 데이터베이스에서 정보를 요청하거나 검색하는 작업

Mongoose에서는 쿼리를 빌드하고 조합할 수 있는 쿼리 빌더(Query builder) 객체를 사용할 수 있습니다. 이 객체를 사용하면 쿼리를 연결된(chainable) 방식으로 구성할 수 있습니다.
실제 데이터베이스 검색은 .exec() 메서드를 호출할 때 실행됩니다. .exec() 메서드를 호출하면 쿼리 빌더에서 설정한 조건이나 옵션에 따라 데이터베이스에서 검색이 수행됩니다.
.exec() 메서드를 사용하여 검색을 실행할 때, 항상 콜백 함수를 전달해야 합니다. 콜백 함수는 검색 결과나 오류를 처리하는 데 사용됩니다.

요약하면, Mongoose에서는 데이터베이스 쿼리를 조립하고 실행하는 과정이 조금 다릅니다. 쿼리 빌더를 사용하여 쿼리를 조립하고, .exec() 메서드를 호출하여 실제 데이터베이스에서 검색을 실행합니다. 이때 항상 결과를 처리하기 위한 콜백 함수를 전달해야 합니다. 또한, 쿼리 도우미를 활용하여 쿼리 작성을 단순화할 수 있습니다.
```
To create but not execute a find query
`Model.find({ name: "Leah" });`  

To store the find query into a variable for later use:
`var findQuery = YourModel.find({ name: "Leah" });`  

To sort an array:
`yourArray.sort({ age: 1 }); // Here: 1 for ascending	order and -1 for descending order.`  

To limit an array’s size:
`yourArray.limit(5); // return array which has 5 items in it.`  

To hide certain property from the result:
`yourArray.select({ name: 0, age: 1 }); // Here: 0 means false and thus hide name property; 1 means true so age property will show.`  

```
const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({favoriteFoods: foodToSearch})
    .sort({name: 1})
    .limit(2)
    .select({ age: 0 })
    .exec((err, response) => {
      if(err) return console.log(err);
      done(null, response);
    })
};
```

## Introduction to Mongoose for MongoDB
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
```
Q
'MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.'

1. 스키마 없는 (Schema-less) 데이터베이스: MongoDB는 스키마 없이 데이터를 저장할 수 있는 NoSQL 데이터베이스입니다. 스키마는 데이터베이스 테이블 또는 컬렉션의 구조를 정의하는 규칙 집합입니다. SQL 데이터베이스에서는 데이터가 정확한 스키마에 맞게 저장되어야 합니다. 반면 MongoDB는 스키마를 강제하지 않습니다. 이는 JSON 형식의 문서를 데이터베이스에 저장할 때 문서의 구조를 미리 정의하지 않아도 되며, 필요에 따라 동적으로 문서 구조를 변경할 수 있음을 의미합니다.
2. JSON 문서 저장: MongoDB는 JSON 형식과 유사한 BSON(Binary JSON) 형식을 사용하여 데이터를 저장합니다. 따라서 데이터는 키-값 쌍의 형태로 저장되며, JSON 형식과 비슷하게 읽고 쓸 수 있습니다. 이러한 문서는 컬렉션(Collection) 내에 저장되며, 각 문서는 고유한 ID를 가지고 있습니다.
3. 다양한 문서 구조: MongoDB에서는 데이터 문서의 구조가 SQL 데이터베이스처럼 미리 정의되지 않습니다. 이는 데이터베이스 사용자가 필요에 따라 다양한 유형의 문서를 저장할 수 있음을 의미합니다. 예를 들어, 동일한 컬렉션 내에 다른 구조의 문서를 함께 저장할 수 있습니다. 이것은 애플리케이션 개발을 빠르게 진행하고, 데이터 모델을 유연하게 변경할 수 있는 장점을 제공합니다.
4. 장점: 스키마 없는 NoSQL 데이터베이스의 이점 중 하나는 애플리케이션 개발을 가속화하고 배포의 복잡성을 줄일 수 있다는 것입니다. 애플리케이션의 요구 사항이 변경되거나 확장해야 할 때, 스키마를 변경하지 않고도 새로운 데이터 필드를 추가하거나 데이터 모델을 조정할 수 있습니다. 이는 개발자가 더 유연하게 작업할 수 있도록 도와줍니다.

요약하면, MongoDB는 스키마 없이 JSON 형식의 문서를 저장하고, 이러한 유연성은 애플리케이션 개발을 단순화하고 변화에 대응하기 쉽게 만듭니다. 이것은 특히 초기 단계에서 애플리케이션의 데이터 모델을 설계하고 변경해야 할 때 유용합니다.

Q 'While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.'

MongoDB에서는 일반적으로 관련된 데이터를 하나의 문서 안에 조합하는 경향이 있다는 것을 의미합니다. 예를 들어, 주문 데이터와 고객 정보를 SQL 데이터베이스에서는 별도의 테이블에 나누어 저장하는 것과 달리, MongoDB에서는 주문 문서 내에 관련된 고객 정보를 중첩하여 저장할 수 있습니다. 이러한 방식은 MongoDB의 유연성과 스키마 없는 특성을 반영하고 있습니다.

Q'Models are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database. '

MongoDB에서 모델은 스키마를 취하여 관계형 데이터베이스의 레코드와 유사한 문서 인스턴스를 생성하는 객체라는 것을 의미합니다. 이 모델을 사용하여 MongoDB 데이터베이스와 상호 작용하며, 컬렉션 내의 데이터를 조작할 수 있습니다.
```

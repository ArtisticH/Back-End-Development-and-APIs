# Basic Node and Express
Node.js is a JavaScript runtime that allows developers to write backend (server-side) programs in JavaScript. Node.js comes with a handful of built-in modules — small, independent programs — that help with this. Some of the core modules include HTTP, which acts like a server, and File System, a module to read and modify files.

In the last set of courses you learned to install and manage packages from npm, which are collections of smaller modules. These packages can help you build larger, more complex applications.

Express is a lightweight web application framework, and is one of the most popular packages on npm. Express makes it much easier to create a server and handle routing for your application, which handles things like directing people to the correct page when they visit a certain endpoint like /blog.

In this course, you'll learn the basics of Node and Express including how to create a server, serve different files, and handle different requests from the browser.

## Meet the Node console
Node is just a JavaScript environment. Like client side JavaScript, you can use the console to display useful debug information. On your local machine, you would see console output in a terminal. On Replit, a terminal is open in the right pane by default.

We recommend to keep the terminal open while working at these challenges. By reading the output in the terminal, you can see any errors that may occur.
```
// myApp.js
let express = require('express');
let app = express();

console.log("Hello World")
```

Express는 Node.js를 위한 웹 애플리케이션 프레임워크로서, 웹 및 API 개발을 더 쉽고 간편하게 만들어주는 도구입니다. 다양한 HTTP 요청과 응답을 처리하고, 라우팅, 미들웨어, 템플릿 엔진 등의 기능을 제공하여 웹 애플리케이션을 구축하는 과정을 단순화합니다.  

Express는 경량화되어 있어서 개발자들이 필요한 기능을 선택적으로 확장하거나 추가할 수 있으며, 다양한 미들웨어와 플러그인을 활용하여 기능을 확장시킬 수 있습니다. 이러한 특징들로 인해 Express는 Node.js 생태계에서 가장 널리 사용되는 웹 프레임워크 중 하나입니다.

## Start a Working Express Server
In the first two lines of the file `myApp.js`, you can see how easy it is to create an Express app object. This object has several methods, and you will learn many of them in these challenges. One fundamental method is `app.listen(port)`. It tells your server to listen on a given port, putting it in running state. For testing reasons, we need the app to be running in the background so we added this method in the `server.js` file for you.

Let’s serve our first string! In Express, routes takes the following structure: `app.METHOD(PATH, HANDLER)`. METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form `function(req, res) {...}`, where req is the request object, and res is the response object. For example, the handler
```
let express = require('express');
let app = express();
```
```
function(req, res) {
  res.send('Response String');
}
```
will serve the string 'Response String'.  

```
app.get('/', function(req, res) {
  res.send('Hello, World!');
});
```  
위 코드는 루트 경로로의 GET 요청에 대한 핸들러입니다. 이 핸들러는 요청이 들어오면 "Hello, World!"라는 문자열을 응답으로 보내게 됩니다.  
이 코드는 클라이언트가 서버로 GET 요청을 보낼 때 서버가 "Hello, World!"라는 응답을 보내는 기본적인 동작을 정의하고 있습니다. 클라이언트는 이 응답을 받아서 처리할 수 있으며, 일반적으로 웹 브라우저에서는 이 응답을 화면에 표시하게 될 것입니다.

Use the `app.get()` method to serve the string "Hello Express" to GET requests matching the `/` (root) path. Be sure that your code works by looking at the logs, then see the results in the preview if you are using Replit.
Note: All the code for these lessons should be added in between the few lines of code we have started you off with.
```
let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.send('Hello Express');
});
```

## Serve an HTML File
You can respond to requests with a file using the res.sendFile(path) method. You can put it inside the app.get('/', ...) route handler. Behind the scenes, this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. We recommend you to use the Node global variable __dirname to calculate the path like this:
```
absolutePath = __dirname + '/relativePath/file.ext'
```

Send the `/views/index.html` file as a response to GET requests to the `/` path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.

Note: You can edit the solution of the previous challenge or create a new one. If you create a new solution, keep in mind that Express evaluates routes from top to bottom, and executes the handler for the first match. You have to comment out the preceding solution, or the server will keep responding with a string.  

이것은 Express.js를 사용하여 웹 애플리케이션을 개발할 때 파일을 요청에 응답으로 보내는 방법을 설명하고 있습니다. `res.sendFile(path)` 메서드를 사용하여 이를 수행할 수 있습니다. 이 메서드는 요청에 대한 응답으로 파일을 보내는 역할을 합니다. 이때, 이 파일을 브라우저에서 어떻게 처리할지에 대한 지침을 설정하기 위해 적절한 헤더를 설정합니다. 이 메서드를 사용하려면 절대 파일 경로가 필요하며, 일반적으로 `__dirname`이라는 Node 전역 변수를 사용하여 경로를 계산하는 것이 좋습니다.
```
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html'

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});

```
Express는 라우트를 위에서부터 아래로 순서대로 평가하며, 처음으로 일치하는 라우트 핸들러를 실행합니다. 이전 도전 과제에서 작성한 코드를 주석 처리하거나 삭제하지 않으면 이전 해결책이 여전히 적용될 수 있으므로 주의해야 합니다.  


`__dirname`은 Node.js 환경에서 사용할 수 있는 특수한 전역 변수입니다. 이 변수는 현재 실행 중인 스크립트 파일의 디렉토리 경로를 나타냅니다. 따라서 `__dirname`을 사용하면 현재 스크립트 파일의 위치를 기준으로 다른 파일이나 디렉토리의 경로를 계산할 수 있습니다.  

`상대 경로 (Relative Path)`: 상대 경로는 현재 위치나 기준 경로를 기반으로 파일이나 디렉토리의 위치를 지정하는 방법입니다. 예를 들어, `"../folder/file.txt"`와 같이 사용되며, 현재 위치나 기준 경로에서 얼마나 떨어져 있는지를 상대적으로 표현합니다.

`절대 경로 (Absolute Path)`: 절대 경로는 파일이나 디렉토리의 위치를 루트 디렉토리부터의 전체 경로로 지정하는 방법입니다. 예를 들어, `"/home/user/documents/file.txt"`와 같이 사용됩니다. 절대 경로는 시스템 전체에서 고유하며, 어디에서나 동일하게 해석됩니다.

__dirname을 사용하면 현재 스크립트 파일의 위치를 알 수 있으므로, 상대 경로를 절대 경로로 변환하기 위해 사용됩니다. 예를 들어, 만약 현재 스크립트 파일이 "/home/user/myapp/server.js"에 있다고 가정하면, __dirname은 "/home/user/myapp"와 같은 현재 스크립트 파일의 디렉토리 경로를 나타냅니다. 그러므로 __dirname + '/views/index.html'을 사용하면 "/home/user/myapp/views/index.html"과 같은 절대 경로를 계산할 수 있게 됩니다.

## Serve Static Assets
An HTML server usually has one or more directories that are accessible by the user. You can place there the static assets needed by your application (stylesheets, scripts, images).

In Express, you can put in place this functionality using the middleware `express.static(path)`, where the `path` parameter is the absolute path of the folder containing the assets.

If you don’t know what middleware is... don’t worry, we will discuss in detail later. Basically, middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method `app.use(path, middlewareFunction)`. The first `path` argument is optional. If you don’t pass it, the middleware will be executed for all requests.  

Mount the `express.static()` middleware to the path `/public` with `app.use()`. The absolute path to the assets folder is `__dirname + /public`.

Now your app should be able to serve a CSS stylesheet. Note that the `/public/style.css` file is referenced in the `/views/index.html` in the project boilerplate. Your front-page should look a little better now!  
```
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html'

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'))
```
### 정적 자원
정적 자원 또는 정적 자산(static assets)은 웹 애플리케이션에서 동적으로 생성되거나 변경되지 않고 고정된 파일들을 가리킵니다. 이러한 정적 자원은 일반적으로 웹 페이지의 구성 요소로 사용되며, 웹 서버에서 직접 제공됩니다. 주요 정적 자원 유형은 다음과 같습니다:

이미지: 웹 페이지에 표시되는 그림 파일, 아이콘, 로고 등이 정적 이미지 자원의 예입니다.

스타일시트(CSS): 웹 페이지의 스타일과 레이아웃을 정의하는 CSS 파일은 정적 자산 중 하나입니다. 이 파일들은 웹 페이지의 디자인을 표현하는 데 사용됩니다.

스크립트 파일(JS): 클라이언트 측 또는 서버 측 JavaScript 파일은 정적 자원으로 간주됩니다. 이 파일들은 웹 페이지에 상호 작용성과 동적 기능을 추가하는 데 사용됩니다.

HTML 파일: 웹 페이지의 기본 구조를 정의하는 HTML 파일도 정적 자원입니다. 대개, 웹 서버는 이러한 HTML 파일을 클라이언트에게 제공하여 웹 페이지를 렌더링하도록 합니다.

정적 자원은 동적 컨텐츠와 달리 서버에서 변경되지 않고 고정된 상태를 유지합니다. 이로 인해 웹 서버는 이러한 자원을 매우 효율적으로 제공할 수 있으며, 브라우저에서 요청하는 클라이언트에게 신속하게 전송할 수 있습니다. 이것은 웹 페이지의 로딩 속도를 향상시키는 데 도움이 됩니다.

## Serve JSON on a Specific Route
While an HTML server serves HTML, an API serves data. A REST (REpresentational State Transfer) API allows data exchange in a simple way, without the need for clients to know any detail about the server. The client only needs to know where the resource is (the URL), and the action it wants to perform on it (the verb). The GET verb is used when you are fetching some information, without modifying anything. These days, the preferred data format for moving information around the web is JSON. Simply put, JSON is a convenient way to represent a JavaScript object as a string, so it can be easily transmitted.

Let's create a simple API by creating a route that responds with JSON at the path `/json`. You can do it as usual, with the `app.get()` method. Inside the route handler, use the method `res.json()`, passing in an object as an argument. This method closes the request-response loop, returning the data. Behind the scenes, it converts a valid JavaScript object into a string, then sets the appropriate headers to tell your browser that you are serving JSON, and sends the data back. A valid object has the usual structure `{key: data}`. `data` can be a number, a string, a nested object or an array. `data` can also be a variable or the result of a function call, in which case it will be evaluated before being converted into a string.  

Serve the object {"message": "Hello json"} as a response, in JSON format, to GET requests to the /json route. Then point your browser to your-app-url/json, you should see the message on the screen.
```
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html'

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'))

app.get('/json', function(req, res) {
  res.json({message: 'Hello json'})
});
```

## Use the .env File
The `.env` file is a hidden file that is used to pass environment variables to your application. This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.

The environment variables are accessible from the app as `process.env.VAR_NAME`. The `process.env` object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The `.env` is a shell file, so you don’t need to wrap names or values in quotes. It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. `VAR_NAME=value`. Usually, you will put each variable definition on a separate line.  

"Configuration options" 또는 "설정 옵션"은 소프트웨어 애플리케이션의 동작을 조정하거나 사용자가 원하는 방식으로 사용자 지정하는 데 사용되는 설정 값 또는 변수를 가리킵니다. 이러한 설정 옵션은 애플리케이션의 행동을 수정하거나 특정 기능을 활성화 또는 비활성화하는 데 사용됩니다.

일반적인 예로는 다음과 같은 것들이 있습니다:

- 서버 포트 번호: 웹 서버를 시작할 때 사용할 포트 번호. 이를 변경하면 서버가 다른 포트에서 실행됩니다.
- 로그 수준 (Log Level): 로깅 레벨을 설정하여 어떤 종류의 로그 메시지를 기록할지 결정할 수 있습니다. 로그 수준을 변경하면 로그 출력이 더 상세하거나 더 간단해질 수 있습니다.
- 데이터베이스 연결 정보: 데이터베이스 호스트, 포트, 사용자 이름, 암호 등과 같은 데이터베이스 연결 정보를 설정합니다.
- API 키: 외부 서비스와 통합할 때 사용하는 API 키나 비밀 토큰과 같은 인증 정보를 저장합니다.
- 애플리케이션 동작 옵션: 애플리케이션의 동작을 조정하는 여러 옵션, 예를 들어 사용자 인터페이스의 테마를 선택하거나 특정 모듈을 활성화 또는 비활성화하는 옵션.

이러한 설정 옵션은 애플리케이션의 설정 파일, 환경 변수, .env 파일 또는 명령행 매개변수를 통해 설정될 수 있습니다. 설정 옵션을 사용하면 애플리케이션의 동작을 수정하지 않고도 다양한 환경에서 유연하게 구성할 수 있습니다. 이것은 애플리케이션의 유지 보수 및 배포를 단순화하고, 다양한 사용 사례에 맞게 애플리케이션을 조정하는 데 도움이 됩니다.  

Create a `.env` file in the root of your project directory, and store the variable `MESSAGE_STYLE=uppercase` in it.

Then, in the `/json` GET route handler you created in the last challenge access `process.env.MESSAGE_STYLE` and transform the response object's `message` to uppercase if the variable equals `uppercase`. The response object should either be `{"message": "Hello json"}` or `{"message": "HELLO JSON"}`, depending on the `MESSAGE_STYLE` value. Note that you must read the value of `process.env.MESSAGE_STYLE` inside the route handler, not outside of it, due to the way our tests run.

Note: If you are using Replit, you cannot create a `.env` file. Instead, use the built-in SECRETS tab to add the variable.

If you are working locally, you will need the `dotenv` package. It loads environment variables from your `.env` file into `process.env`. The `dotenv` package has already been installed, and is in your project's `package.json` file. At the top of your `myApp.js` file, add `require('dotenv').config()` to load the environment variables.  
```
app.get('/json', function(req, res) {
let message= 'Hello json';
  if (process.env['MESSAGE_STYLE'] === 'uppercase') {
    res.json({ "message": message.toUpperCase() });
  } else {
    res.json({ "message": message });
  }
});
```

## Implement a Root-Level Request Logger Middleware
Earlier, you were introduced to the `express.static()` middleware function. Now it’s time to see what middleware is, in more detail. Middleware functions are functions that take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle. These functions execute some code that can have side effects on the app, and usually add information to the request or response objects. They can also end the cycle by sending a response when some condition is met. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, `next()`.  

Look at the following example:
```
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```
Let’s suppose you mounted this function on a route. When a request matches the route, it displays the string “I’m a middleware…”, then it executes the next function in the stack. In this exercise, you are going to build root-level middleware. As you have seen in challenge 4, to mount a middleware function at root level, you can use the `app.use(<mware-function>)` method. In this case, the function will be executed for all the requests, but you can also set more specific conditions. For example, if you want a function to be executed only for POST requests, you could use `app.post(<mware-function>)`. Analogous methods exist for all the HTTP verbs (GET, DELETE, PUT, …).  

Build a simple logger. For every request, it should log to the console a string taking the following format: `method path - ip`. An example would look like this: `GET /json - ::ffff:127.0.0.1`. Note that there is a space between `method` and `path` and that the dash separating `path` and `ip` is surrounded by a space on both sides. You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using `req.method`, `req.path` and `req.ip`. Remember to call `next()` when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.

Note: Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to work for all the routes, it should be mounted before them.  
```
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';
require('dotenv').config();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
let message= 'Hello json';
  if (process.env['MESSAGE_STYLE'] === 'uppercase') {
    res.json({ "message": message.toUpperCase() });
  } else {
    res.json({ "message": message });
  }
});
```
```
 npm run start

> fcc-learn-node-with-express@0.1.0 start
> node server.js

Node is listening on port 3000...
*
OPTIONS * - ::ffff:172.31.196.1
*
GET / - 125.178.158.101
*
GET /public/style.css - 125.178.158.101
https://www.freecodecamp.org
*
GET /json - 34.27.115.180
```

## Chain Middleware to Create a Time Server

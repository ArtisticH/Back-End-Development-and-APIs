# Basic Node and Express
Node.js is a JavaScript runtime that allows developers to write backend (server-side) programs in JavaScript. Node.js comes with a handful of built-in modules — small, independent programs — that help with this. Some of the core modules include HTTP, which acts like a server, and File System, a module to read and modify files.

In the last set of courses you learned to install and manage packages from npm, which are collections of smaller modules. These packages can help you build larger, more complex applications.

Express is a lightweight web application framework, and is one of the most popular packages on npm. Express makes it much easier to create a server and handle routing for your application, which handles things like directing people to the correct page when they visit a certain endpoint like /blog.

In this course, you'll learn the basics of Node and Express including how to create a server, serve different files, and handle different requests from the browser.  

```
Q 라우팅?

라우팅(Routing)은 웹 애플리케이션에서 클라이언트 요청(일반적으로 URL)을 해당 요청에 대한 응답으로 연결해주는 프로세스나 메커니즘을 가리킵니다. 즉, 어떤 URL 경로(엔드포인트)가 클라이언트 요청과 연관되며, 그에 따른 처리나 응답을 수행하는지를 정의하는 것입니다.

예를 들어, 웹 애플리케이션에서 블로그 페이지를 요청하려면 일반적으로 "/blog"라는 URL을 사용합니다. 이때 라우팅은 "/blog"로 들어오는 요청을 해당 페이지나 기능과 연결하는 역할을 합니다. 라우팅은 클라이언트 요청이 특정한 URL 경로와 일치하면 그에 따른 동작을 수행하도록 서버에게 지시합니다.

Express.js는 웹 서버 및 웹 애플리케이션 개발을 단순화하기 위한 Node.js 기반의 프레임워크 중 하나이며, 라우팅을 다루는데 매우 효과적입니다. Express.js를 사용하면 간단하게 URL 경로와 관련된 핸들러 함수를 정의할 수 있으며, 이러한 핸들러 함수는 해당 URL로 들어오는 요청에 대한 응답을 제어하고 실행할 수 있습니다. 이를 통해 웹 애플리케이션의 다양한 페이지나 엔드포인트에 대한 라우팅을 손쉽게 구현할 수 있습니다.

간단히 말하면, 라우팅은 클라이언트 요청과 서버 응답 간의 연결을 관리하며, Express.js와 같은 프레임워크를 사용하면 이 작업을 효율적으로 처리할 수 있습니다.

Q 프레임워크?

프레임워크는 마치 "만들기 쉬운 레고 세트"와 비슷합니다. 레고 세트는 작은 블록들로 구성되어 있고, 이 블록들을 서로 결합하여 집, 자동차, 비행기 등 다양한 것을 만들 수 있습니다. 이 블록들은 이미 만들어져 있고, 우리는 그 블록들을 조립해서 우리가 원하는 것을 만들 수 있습니다.

프레임워크도 비슷한 개념입니다. 프레임워크는 이미 만들어져 있는 코드 조각들의 모음집이라고 생각할 수 있습니다. 이 코드 조각들은 특정 작업을 하기 위해 필요한 기본 구조와 도구를 제공합니다. 아이들이 프레임워크를 사용하면 마치 레고 블록을 조립하듯이, 이미 준비된 코드를 사용하여 웹 사이트, 게임, 앱 또는 다른 소프트웨어를 만들 수 있습니다.

예를 들어, 웹 개발에서는 프레임워크인 "React"나 "Vue.js"를 사용할 수 있습니다. 이 프레임워크들은 웹 페이지를 만들기 위해 필요한 구조와 도구를 제공하며, 개발자는 이를 활용하여 웹 페이지를 만들고 디자인할 수 있습니다. 그러니 마치 레고 블록을 사용하여 건물을 만들듯이, 프레임워크를 사용하여 웹 페이지를 만들 수 있다고 생각하면 됩니다.

Q npm?

node package manager, 소트프웨어 공유, 설치, 관리하는 저장소.
node.js 설치 시에 설치된다.
npm init -y 와 동시에 package.json 파일이 만들어짐.
package.json에는 프로젝트의 모든 라이브러리에 대한 정보가 들어감. 
```

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

`let express = require('express');`: 이 줄은 Node.js에서 express 모듈을 가져오고, express 변수에 할당합니다. 이 모듈은 Express.js 웹 프레임워크를 사용하기 위해 필요한 핵심 기능을 제공합니다.

`let app = express();`: 이 줄은 Express 애플리케이션을 생성합니다. express() 함수를 호출하여 새로운 Express 애플리케이션 인스턴스를 만듭니다. 이 인스턴스(app 변수)를 통해 애플리케이션의 설정 및 라우팅을 정의하고 서버를 시작할 수 있습니다.

이 코드는 Express 애플리케이션을 설정하기 위한 기본적인 부분이며, 이후에 app 변수를 사용하여 라우팅을 정의하고 서버를 시작하는 등의 작업을 수행할 수 있습니다. Express를 사용하면 웹 애플리케이션을 빠르게 구축하고 웹 요청과 응답을 처리할 수 있습니다.

## Start a Working Express Server
In the first two lines of the file `myApp.js`, you can see how easy it is to create an Express app object. This object has several methods, and you will learn many of them in these challenges. One fundamental method is `app.listen(port)`. It tells your server to listen on a given port, putting it in running state. For testing reasons, we need the app to be running in the background so we added this method in the `server.js` file for you.

Let’s serve our first string! In Express, routes takes the following structure: `app.METHOD(PATH, HANDLER)`. METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form `function(req, res) {...}`, where req is the request object, and res is the response object. For example, the handler  

app.listen()을 호출하면 Express 애플리케이션이 지정된 포트에서 실행되며, 클라이언트의 HTTP 요청을 처리하게 됩니다. 이 메서드를 호출한 후에는 웹 서버가 실행 중이며, 클라이언트가 해당 포트로 요청을 보낼 수 있습니다.
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

- Q
```
그러니까 index.html파일 안애 <link>를 통해 css가 외부 로드 되어 있어. 
그리고 let absolutePath = __dirname + '/views/index.html'

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
}); 이런 요청이 올 때 express.js에서 정적 자산에 대한 설정을 안 해놨다면 css 로드에 실패하고, 해 놨다면 로드에 성공이라는 거지?
```
- A
```
맞습니다. index.html 파일 내에서 <link> 태그를 사용하여 외부 CSS 파일을 로드하려면 Express.js 애플리케이션에서 정적 자산 설정이 필요합니다.

여기에 간단한 요약을 제공합니다:

- 정적 자산 설정이 없는 경우: Express.js 애플리케이션에서 정적 자산에 대한 설정을 하지 않으면 클라이언트 측에서 index.html 파일에 포함된 외부 CSS 파일을 로드하는 데 실패할 수 있습니다. 브라우저는 CSS 파일을 찾지 못하고 404 오류를 반환할 것입니다.
- 정적 자산 설정이 있는 경우: Express.js 애플리케이션에서 정적 자산 설정을 추가하면 클라이언트가 index.html 파일에서 링크된 CSS 파일을 로드할 수 있습니다. Express는 해당 CSS 파일을 정적 자산 디렉토리에서 찾아 제공하며, 클라이언트 측에서 CSS 파일을 성공적으로 로드할 수 있게 됩니다.

따라서 정적 자산 설정을 추가하면 Express 애플리케이션은 클라이언트에게 정적 파일을 제공할 수 있어서, CSS 파일과 같은 정적 자산이 로드에 성공합니다.
```
```
Q 마운트?

미들웨어 함수를 마운트한다는 과정은 Express.js 애플리케이션에서 특정 경로나 라우트에 미들웨어 함수를 연결하는 것을 의미합니다. 이렇게 하면 해당 경로 또는 라우트로 들어오는 요청이 미들웨어를 거쳐가게 되며, 미들웨어가 요청을 가로채고 처리할 수 있습니다.

Q 정적 자산을 따로 설정하는 이유?

정적 자산을 따로 설정해야 하는 이유는 Express.js의 디자인 및 보안 관련 이슈와 웹 애플리케이션의 필요에 기인합니다. 아래에서 이유를 자세히 설명하겠습니다:
1. 디자인 관점: Express.js는 웹 애플리케이션 프레임워크로서 주로 서버 사이드 렌더링에 중점을 두고 설계되었습니다. 이러한 디자인 상, Express.js는 동적 컨텐츠를 생성하고 서비스하기 위한 것이 주 목적입니다. 정적 파일(예: HTML, CSS, 이미지)을 서비스하는 것은 보조 목적이므로 명시적으로 설정해야 합니다.
2. 보안 이슈: Express.js는 보안을 고려하여 디자인되었습니다. 정적 파일을 기본적으로 제공하지 않는 이유 중 하나는 보안입니다. 정적 파일을 공개적으로 노출하면 서버에 민감한 정보가 포함된 파일에 접근할 수 있는 보안 취약점을 만들 수 있습니다. 정적 자산 미들웨어를 사용하여 Express.js는 정적 파일에 대한 제어를 효과적으로 갖게 됩니다.
... 등등

Q 그럼 express.static()는 왜 app.static이 아니고 express야?

요약하면, express.static()과 같은 함수는 Express.js의 설계 원칙과 표준화를 준수하며 미들웨어를 효과적으로 사용하고 재사용하기 위해 express 객체에 속하는 것이 일반적입니다. 이로써 Express.js 개발자들은 일관된 스타일로 미들웨어를 추가하고 구성할 수 있으며, Express.js의 생태계와 호환성을 유지할 수 있습니다.

Q app 객체는 하나의 서버야?

네, Express.js에서 app 객체는 하나의 웹 서버를 나타냅니다. app 객체를 생성하고 구성하면 Express.js 웹 서버를 시작하게 됩니다. 이 웹 서버는 HTTP 요청을 수신하고 해당 요청을 처리하는 역할을 합니다.
일반적으로 하나의 Express.js 애플리케이션은 하나의 app 객체를 가지며, 이 객체는 웹 서버의 주요 설정과 라우팅을 관리합니다. 개발자는 이 app 객체를 사용하여 서버의 동작을 정의하고 구성할 수 있습니다.
const express = require('express');
const app = express();

// 라우팅 설정
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});

Q 근데 라우팅 설정 -> 서버 시작 순서여도 돼? 뭔가 상식적으론 서버가 시작되고 라우팅이 설정되야 할 것 같은데

라우팅 설정과 서버 시작 순서에는 엄격한 규칙이 없습니다. Express.js에서는 라우팅 설정과 서버 시작의 순서를 자유롭게 결정할 수 있습니다. 이는 Express.js의 특성 중 하나로, 서버 시작 이전에 라우팅을 설정해도 무방합니다.
Express.js에서는 라우팅 설정은 Express 애플리케이션 객체(app)에 대한 설정이며, 서버 시작은 실제로 HTTP 서버를 바인딩하고 대기시키는 작업입니다. 따라서 이 두 작업 간에 순서를 바꿔서도 문제가 없습니다.

```

## Serve JSON on a Specific Route
While an HTML server serves HTML, an API serves data. A REST (REpresentational State Transfer) API allows data exchange in a simple way, without the need for clients to know any detail about the server. The client only needs to know where the resource is (the URL), and the action it wants to perform on it (the verb). The GET verb is used when you are fetching some information, without modifying anything. These days, the preferred data format for moving information around the web is JSON. Simply put, JSON is a convenient way to represent a JavaScript object as a string, so it can be easily transmitted.

Let's create a simple API by creating a route that responds with JSON at the path `/json`. You can do it as usual, with the `app.get()` method. Inside the route handler, use the method `res.json()`, passing in an object as an argument. This method closes the request-response loop, returning the data. Behind the scenes, it converts a valid JavaScript object into a string, then sets the appropriate headers to tell your browser that you are serving JSON, and sends the data back. A valid object has the usual structure `{key: data}`. `data` can be a number, a string, a nested object or an array. `data` can also be a variable or the result of a function call, in which case it will be evaluated before being converted into a string.

1. API 생성: API는 애플리케이션 프로그래밍 인터페이스(API)의 약어로, 다른 소프트웨어와 상호 작용할 수 있는 엔드포인트 또는 경로를 제공하는 서버 측 소프트웨어입니다. 이 문장은 Express.js를 사용하여 이러한 API를 만들려고 합니다.
2. 라우트 생성: API의 경로를 /json으로 지정합니다. 이것은 클라이언트가 서버에 /json 경로로 HTTP GET 요청을 보낼 때 이 API에 액세스할 수 있게 해줍니다.
3. Express.js app.get() 메서드: app.get() 메서드는 Express.js 애플리케이션에서 GET 요청을 처리하기 위해 사용됩니다. /json 경로로 들어오는 GET 요청에 대한 처리기를 만들어야 합니다.
4. 응답 데이터: 요청을 처리하는 라우트 핸들러 내에서 res.json() 메서드를 사용하여 JSON 형식의 응답을 생성합니다. res.json() 메서드는 JavaScript 객체를 JSON 문자열로 변환하고, 적절한 헤더를 설정하여 브라우저에게 JSON 데이터를 반환한다고 설명됩니다.
5. JSON 데이터: 유효한 JSON 객체의 구조는 {key: data}로 되어 있으며, data는 숫자, 문자열, 중첩된 객체, 배열 또는 변수 또는 함수 호출 결과가 될 수 있다고 설명됩니다. 이것은 클라이언트가 /json 경로로 GET 요청을 보냈을 때 반환되는 JSON 데이터의 형식입니다.


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
```
DATABASE_URL=mongodb://localhost:27017/mydatabase
SECRET_KEY=mysecretkey123
DEBUG=true
```
주의: `.env` 파일에는 민감한 정보(예: 비밀번호)를 저장하거나, `.env` 파일 자체를 버전 관리 시스템에 커밋하는 것은 좋은 아이디어가 아닙니다. 중요한 정보는 보안을 고려하여 관리되어야 합니다. 일반적으로 `.env` 파일은 `.gitignore`와 같은 파일을 사용하여 버전 관리에서 제외시킵니다.

### Configuration options
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
`require('dotenv').config()`에서 `dotenv`는 Node.js 환경에서 `.env` 파일을 로드하고 그 내용을 현재 프로세스의 환경 변수에 추가하는 모듈입니다. `.config()`는 dotenv 모듈의 메서드(method)이며, 이 메서드를 호출하여 `.env` 파일의 내용을 현재 환경 변수에 로드합니다.

`.env` 파일에는 환경 변수의 키-값 쌍이 포함되어 있습니다. `dotenv` 모듈의 `.config()` 메서드를 호출하면 이러한 키-값 쌍이 현재 Node.js 프로세스의 환경 변수로 설정됩니다. 이렇게 함으로써 애플리케이션에서 `process.env` 객체를 통해 환경 변수에 액세스할 수 있게 됩니다.
```
DATABASE_URL=mongodb://localhost:27017/mydatabase
SECRET_KEY=mysecretkey123
DEBUG=true
```
그런 다음 `require('dotenv').config()`를 호출하면 이러한 환경 변수를 현재 프로세스에 로드합니다. 이후에 `process.env`를 사용하여 이러한 환경 변수에 액세스할 수 있습니다. 
```
const databaseUrl = process.env.DATABASE_URL;
const secretKey = process.env.SECRET_KEY;
const isDebug = process.env.DEBUG === 'true';
```
이렇게 하면 `.env` 파일의 설정이 프로그램에서 사용 가능해지며, 민감한 정보(예: 데이터베이스 URL, 비밀 키)를 환경 변수로 안전하게 관리할 수 있습니다.

## Implement a Root-Level Request Logger Middleware
Earlier, you were introduced to the `express.static()` middleware function. Now it’s time to see what middleware is, in more detail. Middleware functions are functions that take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle. These functions execute some code that can have side effects on the app, and usually add information to the request or response objects. They can also end the cycle by sending a response when some condition is met. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, `next()`.  

Look at the following example:
```
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```
```
Q 미들웨어에 대한 설명 중,  They can also end the cycle by sending a response when some condition is met.  구문은 요청-응답 파이프라인 중간에 위치하며 조건이 만족되면 여기서 응답을 보내고 실질적으로 라우팅 핸들러까지 갈 필요가 없다는거야?

네, 맞습니다. "They can also end the cycle by sending a response when some condition is met."라는 문구는 미들웨어 함수가 조건이 충족될 때 요청-응답 주기를 종료하고, 더 이상 다음 미들웨어나 라우팅 핸들러로 요청을 전달하지 않아도 된다는 것을 의미합니다. 미들웨어 함수는 요청을 처리하는 도중에 특정 조건을 확인하고, 그 조건이 만족되면 즉시 응답을 생성하고 보낼 수 있습니다. 이렇게 하면 추가적인 미들웨어 함수나 라우팅 핸들러로 요청을 전달할 필요가 없으며, 요청 처리 주기가 미들웨어 함수 내에서 종료됩니다. 예를 들어, 인증 미들웨어는 사용자의 인증 상태를 확인하고, 인증되지 않은 경우 즉시 로그인 페이지로 리다이렉션하거나 인증 오류 메시지를 보낼 수 있습니다. 이 경우 더 이상 요청이 다음 미들웨어나 라우팅 핸들러로 전달되지 않고, 요청-응답 주기가 인증 미들웨어에서 종료됩니다.

app.use(function(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/login'); // 인증되지 않은 경우 로그인 페이지로 리다이렉션
    } else {
        next(); // 인증된 경우 다음 미들웨어로 전달
    }
});

위의 예제에서, 만약 사용자가 인증되지 않았다면 미들웨어는 로그인 페이지로 리다이렉션하고 더 이상 요청을 다음 미들웨어로 전달하지 않습니다. 이것은 미들웨어 함수가 조건을 충족하면 요청-응답 주기를 종료할 수 있다는 예시입니다.

Q next()를 호출하면 보통 요청-응답 중간의 파이프라인에서 끝인 라우팅 핸들러로 이동해?

네, next()를 호출하면 Express.js의 요청-응답 파이프라인에서 라우팅 핸들러로 이동합니다. next()는 현재 미들웨어 함수에서 제어를 다음 미들웨어 함수 또는 라우팅 핸들러로 전달하는 역할을 합니다.
Express.js는 미들웨어 함수와 라우팅 핸들러를 순차적으로 실행하며, next()를 호출하면 다음 미들웨어 함수나 라우팅 핸들러로 제어를 넘겨서 요청 처리를 계속합니다. 만약 더 이상 다음 미들웨어 함수나 라우팅 핸들러가 없다면 요청-응답 주기가 종료되고 클라이언트에게 응답이 전송됩니다.

app.use(function(req, res, next) {
    console.log("Middleware 1");
    next(); // 다음 미들웨어 또는 라우팅 핸들러로 이동
});

app.use(function(req, res, next) {
    console.log("Middleware 2");
    next(); // 다음 미들웨어 또는 라우팅 핸들러로 이동
});

app.get('/', function(req, res) {
    console.log("Route Handler");
    res.send('Hello, World!');
});

위의 예제에서, / 경로로 들어오는 GET 요청은 두 개의 미들웨어 함수를 거쳐 가고, 각각의 미들웨어 함수에서 next()를 호출하여 다음 미들웨어 또는 라우팅 핸들러로 전달합니다. 따라서 요청은 "Middleware 1", "Middleware 2", "Route Handler"라는 순서대로 로그를 출력하며 처리됩니다.
next()를 호출하지 않으면 요청은 현재 미들웨어 함수에서 멈추게 되고, 다음 미들웨어 또는 라우팅 핸들러로 진행하지 않습니다.
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
Middleware can be mounted at a specific route using `app.METHOD(path, middlewareFunction)`. Middleware can also be chained within a route definition.
```
app.get('/user', function(req, res, next) {
  req.user = getTheUserSync();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.send(req.user);
});
```
This approach is useful to split the server operations into smaller units. That leads to a better app structure, and the possibility to reuse code in different places. This approach can also be used to perform some validation on the data. At each point of the middleware stack you can block the execution of the current chain and pass control to functions specifically designed to handle errors. Or you can pass control to the next matching route, to handle special cases. We will see how in the advanced Express section.
```
1. Middleware를 경로에 마운트하기:
app.METHOD(path, middlewareFunction) 형식을 사용하여 특정 경로(path)에 미들웨어 함수(middlewareFunction)를 마운트할 수 있습니다. 이렇게 하면 해당 경로에 대한 요청이 발생할 때 미들웨어 함수가 실행됩니다.

2. Middleware 체인(chain):
Express.js에서는 하나의 경로(route)에 대해 여러 개의 미들웨어 함수를 연속해서 정의할 수 있습니다. 이렇게 하면 요청이 해당 경로로 들어올 때, 정의된 순서대로 각 미들웨어 함수가 실행됩니다.
위의 코드 예제에서는 /user 경로에 대한 GET 요청에 대해 두 개의 미들웨어 함수가 연속해서 실행됩니다.
첫 번째 미들웨어 함수는 req.user에 동기적으로 사용자 정보를 가져오는 작업을 수행하고 next()를 호출하여 다음 미들웨어 함수로 제어를 전달합니다.
두 번째 미들웨어 함수는 req.user에 저장된 사용자 정보를 응답으로 클라이언트에게 보냅니다.

3. 모듈화와 코드 재사용:
이러한 접근 방식을 사용하면 서버 작업을 작은 단위로 분리할 수 있으므로 애플리케이션 구조가 더 명확해집니다. 각 미들웨어 함수는 특정 작업 또는 중간 단계 작업을 수행하므로 코드가 더 간결해지고 재사용 가능합니다.
예를 들어, 사용자 인증, 데이터 검증 또는 로깅과 같은 다양한 작업을 미들웨어 함수로 분리하여 사용할 수 있습니다.

4. 에러 처리와 특수 케이스 처리:
미들웨어 체인 내에서 에러를 처리하거나 특수한 경우를 다룰 수 있습니다. 특정 미들웨어 함수에서 에러가 발생하면 에러 핸들링 미들웨어로 제어를 전달하여 에러를 처리하거나, 다음 일치하는 경로로 제어를 전달하여 특별한 경우를 처리할 수 있습니다.
```
In the route `app.get('/now', ...)` chain a middleware function and the final handler. In the middleware function you should add the current time to the request object in the `req.time` key. You can use `new Date().toString()`. In the handler, respond with a JSON object, taking the structure `{time: req.time}`.

Note: The test will not pass if you don’t chain the middleware. If you mount the function somewhere else, the test will fail, even if the output result is correct.
```
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({"time": req.time});
});
```

## Get Route Parameter Input from the Client
When building an API, we have to allow users to communicate to us what they want to get from our service. For example, if the client is requesting information about a user stored in the database, they need a way to let us know which user they're interested in. One possible way to achieve this result is by using route parameters. Route parameters are named segments of the URL, delimited by slashes (/). Each segment captures the value of the part of the URL which matches its position. The captured values can be found in the `req.params` object.
```
route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754'
req.params: {userId: '546', bookId: '6754'}
```
```

이 문장은 Express.js에서 라우트 파라미터(Route Parameters)를 사용하여 API를 개발할 때 클라이언트가 원하는 정보를 서버에 전달하는 방법에 대한 설명입니다.

라우트 파라미터는 URL의 일부를 나타내며, URL 내에서 슬래시(/)로 구분된 이름 있는 세그먼트입니다. 각 세그먼트는 URL 내에서 해당 위치와 일치하는 부분의 값을 캡처합니다. 이렇게 캡처된 값은 req.params 객체에 저장되어 서버에서 사용할 수 있습니다.

예를 들어, 다음과 같은 라우트와 실제 요청 URL이 있다고 가정해 봅시다:

라우트 경로(route_path): '/user/:userId/book/:bookId'
실제 요청 URL(actual_request_URL): '/user/546/book/6754'
이 경우, :userId와 :bookId는 라우트 파라미터입니다. 클라이언트가 요청한 URL에서 /user/546/book/6754 부분은 userId와 bookId에 해당하며, 이 값들은 req.params 객체에 저장됩니다.
```
Build an echo server, mounted at the route `GET /:word/echo`. Respond with a JSON object, taking the structure `{echo: word}`. You can find the word to be repeated at `req.params.word`. You can test your route from your browser's address bar, visiting some matching routes, e.g. `your-app-rootpath/freecodecamp/echo`.  

```
app.get('/:word/echo', (req, res) => {
  res.json({"echo": req.params.word});
});
```

## Get Query Parameter Input from the Client
Another common way to get input from the client is by encoding the data after the route path, using a query string. The query string is delimited by a question mark (?), and includes field=value couples. Each couple is separated by an ampersand (&). Express can parse the data from the query string, and populate the object `req.query`. Some characters, like the percent (%), cannot be in URLs and have to be encoded in a different format before you can send them. If you use the API from JavaScript, you can use specific methods to encode/decode these characters.
```
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}
```
Build an API endpoint, mounted at `GET /name`. Respond with a JSON document, taking the structure `{ name: 'firstname lastname'}`. The first and last name parameters should be encoded in a query string e.g. `?first=firstname&last=lastname`.

Note: In the following exercise you are going to receive data from a POST request, at the same `/name` route path. If you want, you can use the method `app.route(path).get(handler).post(handler)`. This syntax allows you to chain different verb handlers on the same path route. You can save a bit of typing, and have cleaner code.
```
app.get('/name', (req, res) => {
  res.json({"name": `${req.query.first} ${req.query.last}`});
});
```
## Use body-parser to Parse POST Requests
Besides GET, there is another common HTTP verb, it is POST. POST is the default method used to send client data with HTML forms. In REST convention, POST is used to send data to create new items in the database (a new user, or a new blog post). You don’t have a database in this project, but you are going to learn how to handle POST requests anyway.

In these kind of requests, the data doesn’t appear in the URL, it is hidden in the request body. The body is a part of the HTTP request, also called the payload. Even though the data is not visible in the URL, this does not mean that it is private. To see why, look at the raw content of an HTTP POST request:
```
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20

name=John+Doe&age=25
```
As you can see, the body is encoded like the query string. This is the default format used by HTML forms. With Ajax, you can also use JSON to handle data having a more complex structure. There is also another type of encoding: multipart/form-data. This one is used to upload binary files. In this exercise, you will use a URL encoded body. To parse the data coming from POST requests, you must use the `body-parser` package. This package allows you to use a series of middleware, which can decode data in different formats.
```
1. POST 요청:
POST는 HTML 폼과 함께 클라이언트 데이터를 보내는 데 사용되는 기본 메서드입니다. POST 요청은 데이터를 URL에 표시하지 않고 요청 본문(Request Body)에 숨겨져 있습니다.
REST 규칙에 따르면 POST는 데이터를 데이터베이스에 새 항목을 만들기 위해 보내는 데 사용됩니다. 예를 들어, 새로운 사용자나 블로그 게시물을 생성할 때 사용됩니다.

2. 요청 본문:
요청 본문(Request Body)은 HTTP 요청의 일부이며, 데이터를 포함하는 부분입니다. 이 부분은 "페이로드"라고도 합니다. URL에 데이터가 표시되지 않더라도 데이터는 요청 본문에 포함됩니다.
요청 본문의 형식은 주로 HTML 폼에서 사용되는 기본 URL 인코딩 형식입니다. 데이터는 "name=value" 형식으로 인코딩되어 있습니다.

3. 요청 본문의 무결성:
POST 요청의 데이터는 URL에 표시되지 않지만, 이것은 데이터가 비공개인 것을 의미하지 않습니다. 요청은 여전히 네트워크를 통해 전송되므로 중요한 정보를 POST 요청으로 보내더라도, 요청이 가로채거나 볼 수 있는 가능성이 있습니다.

4. 데이터 인코딩:
요청 본문의 데이터는 기본적으로 URL 인코딩 형식으로 인코딩됩니다. 이는 HTML 폼에서 기본적으로 사용되는 형식입니다.
Ajax를 사용하면 더 복잡한 구조를 가진 데이터를 처리할 때 JSON을 사용할 수 있습니다. 또한 바이너리 파일을 업로드할 때는 multipart/form-data 인코딩을 사용할 수 있습니다.

5. body-parser 패키지:
POST 요청으로부터 데이터를 파싱하려면 body-parser 패키지를 사용해야 합니다. body-parser는 다양한 형식의 데이터를 해석하고 읽을 수 있는 미들웨어를 제공합니다. 이 미들웨어를 사용하면 Express.js 애플리케이션에서 POST 요청의 데이터를 추출하고 처리할 수 있습니다.
```
`body-parser` has already been installed and is in your project's `package.json` file. `require` it at the top of the `myApp.js` file and store it in a variable named `bodyParser`. The middleware to handle URL encoded data is returned by `bodyParser.urlencoded({extended: false})`. Pass the function returned by the previous method call to `app.use()`. As usual, the middleware must be mounted before all the routes that depend on it.

Note: `extended` is a configuration option that tells `body-parser` which parsing needs to be used. When `extended=false` it uses the classic encoding `querystring` library. When `extended=true` it uses `qs` library for parsing.

When using `extended=false`, values can be only strings or arrays. The object returned when using `querystring` does not prototypically inherit from the default JavaScript `Object`, which means functions like `hasOwnProperty`, `toString` will not be available. The extended version allows more data flexibility, but it is outmatched by JSON.
```
1. extended: true:

extended: true로 설정하면, URL 인코딩된 데이터를 다르게 해석합니다.
이 경우, key=value 형식의 데이터뿐만 아니라, 객체나 배열과 같은 복잡한 데이터 구조도 파싱할 수 있습니다.
예를 들어, name=John&age=30 형태의 데이터를 파싱할 때 { name: 'John', age: '30' }와 같이 객체로 파싱합니다.

2. extended: false:

extended: false로 설정하면, URL 인코딩된 데이터를 단순한 문자열로만 파싱합니다.
이 경우, key=value 형식의 데이터만 파싱하고 객체나 배열과 같은 복잡한 데이터 구조는 파싱하지 않습니다.
예를 들어, name=John&age=30 형태의 데이터를 파싱할 때 { 'name=John&age=30' }와 같이 문자열로 파싱합니다.

어떤 옵션을 선택하느냐는 데이터 형식에 따라 다릅니다. 만약 단순한 키-값 쌍의 데이터만 다루고 있다면 extended: false를 사용하여 더 간단하게 파싱할 수 있습니다. 그러나 복잡한 데이터 구조를 다루거나 중첩된 객체나 배열을 파싱해야 한다면 extended: true를 사용하여 더 다양한 형태의 데이터를 처리할 수 있습니다.
```

```
1. body-parser 패키지 설치:
이미 body-parser 패키지가 설치되어 있고 package.json 파일에 포함되어 있는 것으로 가정합니다.

2. body-parser 패키지 불러오기:

3. URL 인코딩 데이터를 처리하는 미들웨어 설정:
URL 인코딩된 데이터를 처리하기 위해 body-parser.urlencoded({ extended: false })를 사용하여 미들웨어를 설정하세요.
extended 옵션은 false로 설정되어 있으며, 이는 기본적인 쿼리스트링(querystring) 라이브러리를 사용하여 데이터를 해석하도록 body-parser에 지시합니다.
body-parser는 extended: false 설정일 때 데이터를 문자열 또는 배열 값으로 처리합니다.

4. 미들웨어 마운트:
app.use() 메서드를 사용하여 설정한 body-parser 미들웨어를 Express.js 애플리케이션에 마운트합니다. 이것은 모든 라우트(route)보다 앞에 위치해야 합니다.
마운트 순서는 중요합니다. 먼저 body-parser를 마운트한 후에 POST 요청을 처리하는 라우트를 정의해야 합니다.

1. extended 옵션:
extended 옵션은 body-parser에서 URL 인코딩된 데이터를 해석할 때 사용되며, 두 가지 값 중 하나를 가질 수 있습니다: true 또는 false.

2. extended: false:
이 옵션을 사용하면 body-parser는 URL 인코딩된 데이터를 단순한 형태로 해석합니다.
데이터는 문자열 또는 배열 값으로 해석됩니다. 이 때, 데이터 객체는 JavaScript의 기본 Object에서 상속받지 않으므로 해당 객체에는 일반 Object의 프로퍼티와 메서드(예: hasOwnProperty, toString)가 없습니다.

3. extended: true:
이 옵션을 사용하면 body-parser는 URL 인코딩된 데이터를 더 유연하게 처리할 수 있습니다.
데이터는 객체로 해석되며, 객체는 JavaScript의 기본 Object에서 상속한 프로토타입 메서드와 프로퍼티를 가질 수 있습니다.

4. JSON과 비교:
extended: true를 사용하면 객체 형태로 데이터를 처리할 수 있지만, JSON 형식도 객체를 사용하여 데이터를 표현할 수 있습니다.
JSON은 데이터를 더 간결하고 복잡한 구조로 표현하는 데 더 적합한 형식이며, JavaScript에서 기본적으로 지원됩니다.

요약하면, extended: false 옵션을 사용하면 URL 인코딩된 데이터를 단순한 형태로 해석하며, 데이터는 문자열 또는 배열로 처리됩니다. extended: true를 사용하면 더 복잡한 객체 형태로 데이터를 처리할 수 있지만, JSON 형식을 사용하는 것이 더 일반적이고 효율적입니다.
```
```
let express = require('express');
let app = express();
let bodyParser = require("body-parser");


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
```

## Get Data from POST Requests
Mount a POST handler at the path `/name`. It’s the same path as before. We have prepared a form in the html frontpage. It will submit the same data of exercise 10 (Query string). If the body-parser is configured correctly, you should find the parameters in the object `req.body`. Have a look at the usual library example:
```
route: POST '/library'
urlencoded_body: userId=546&bookId=6754
req.body: {userId: '546', bookId: '6754'}
```
Respond with the same JSON object as before: `{name: 'firstname lastname'}`. Test if your endpoint works using the html form we provided in the app frontpage.

Tip: There are several other http methods other than GET and POST. And by convention there is a correspondence between the http verb, and the operation you are going to execute on the server. The conventional mapping is:

POST (sometimes PUT) - Create a new resource using the information sent with the request,

GET - Read an existing resource without modifying it,

PUT or PATCH (sometimes POST) - Update a resource using the data sent,

DELETE => Delete a resource.

There are also a couple of other methods which are used to negotiate a connection with the server. Except from GET, all the other methods listed above can have a payload (i.e. the data into the request body). The body-parser middleware works with these methods as well.
```
app.post('/name', (req, res) => {
  res.json({"name": `${req.body.first} ${req.body.last}`});
});
```


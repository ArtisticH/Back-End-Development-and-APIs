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


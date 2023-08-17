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

Use the `app.get()` method to serve the string "Hello Express" to GET requests matching the `/` (root) path. Be sure that your code works by looking at the logs, then see the results in the preview if you are using Replit.
Note: All the code for these lessons should be added in between the few lines of code we have started you off with.
```
let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.send('Hello Express');
});
```

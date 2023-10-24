## API Project: Request Header Parser Microservice
```node.js
app.get('/api/whoami', (req, res) => {
  res.json({"ipaddress": req.ip, "language": req.get('Accept-Language'), "software": req.get('User-Agent')});
})
```

- Example Usage:
[base url]/api/whoami
- Example Output:
{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}


req.get('Accept-Language')와 req.get('User-Agent')는 Express.js를 사용하는 웹 애플리케이션에서 클라이언트 요청(request)의 헤더 정보를 얻는 데 사용되는 메서드입니다. 다음은 각각의 역할과 사용법에 대한 설명입니다:
1. **req.get('Accept-Language')**: 클라이언트가 지원하는 언어 및 언어 선호도 정보를 포함하는 "Accept-Language" HTTP 헤더를 얻기 위해 사용됩니다.
2. **req.get('User-Agent')**: 클라이언트의 사용자 에이전트(User-Agent) 정보를 얻기 위해 사용됩니다. 사용자 에이전트는 클라이언트가 사용하는 브라우저 또는 소프트웨어에 대한 정보를 포함합니다.

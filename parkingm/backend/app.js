const express = require('express');
const request = require('request');
const port = 3010;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/proxy2', (req, res) => {      

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json; charset=UTF-8');

  let openApiUrl = "http://openapi.seoul.go.kr:8088/4e4a5361776f626835356947637144/json/gangnamParingInfo/1/100/"

  request.get({
    uri: openApiUrl
  }, (error, response, body) => {
    res.send(body);
  });
});

app.listen(
  3010,
  () => {
    console.log(`${port}번 포트에서 서버 시작했슴!`);
  }
);
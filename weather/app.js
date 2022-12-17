const express = require('express');
const request = require('request');
const port = 5500; 
const app = express();

app.use(express.urlencoded({extended: true}));

  app.get('/proxy2', (req, res) => { 

    res.set('Access-Control-Allow-Origin', '*'); 
    res.set('Content-Type','application/json; charset=UTF-8');

    let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?" +
    "serviceKey=Zpt6QC54oC2MY5KKVFXESua95mlolWWbuWnbMb0e2qMk3jTtVY2jyTJTpWUnrv42%2BnV1qENjZCoea3fF%2BnY%2B6g%3D%3D" + 
    "&pageNo=1" + 
    "&numOfRows=1000" + 
    "&dataType=JSON" + 
    "&base_date=" + req.query.base_date + 
    "&base_time=0100" +
    "&nx=" + req.query.nx +  
    "&ny=" + req.query.ny;  

      request.get({
        uri: openApiUrl
      }, (error, response, body) => {
      res.send(body);
      });  
  });

// 웹서버 실행하기
app.listen(
  5500, //포트 번호 지정
  () => {
    console.log(`${port}번 포트에서 서버 시작했슴!`);
  } // 서버가 시작되었을 때 호출될 함수 = 리스너 = 이벤트 핸들러
);

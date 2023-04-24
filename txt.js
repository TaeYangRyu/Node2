// hconst http = require("http");

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { "content-tye": "text/html" });
//     response.end(`
//  <html>
//  <head>
//  <meta charset = 'UTF-8'>
//  <style></style>
//  <scritp></scritp>
//  </head>
//  <body></body>
//  </html>`);
//   })
//   .listen(8888, function () {
//     console.log("server run at 8888");
//   });
const http = require("http");
http
  .createServer(function (require, response) {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`<html>
  <head>
  <meta charset='UTF-8'>
  <styel></styel>
  </head>
  <body></body>
  </html>`);
  })
  .listen(8888, function () {
    console.log("sever run at 8888");
  });
//지역 변수 - 해당 폴더에서만 작동
//전역변수 - 전체 컴퓨터에서 사용 (환경변수)
//환경변수 등록
// 시스템 등록정보 - 환경변수 추가/제거
// git init 깃 만들기

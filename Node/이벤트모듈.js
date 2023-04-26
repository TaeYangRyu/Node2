const event = require("events");
exports.timer = new event(0);

setInterval(() => {
  exports.timer.emit("runTime");
}, 1000);

// const e = require("events");
// exports.timer = new event(0);
// setInterval(() => {
//   exports.timer.emit("events");
// }, 1000);
// const e = require("./이벤트모듈사용.js");
// e.timer.on("runTime", () => {
//   console.log(new Date());
// });
// const http = require("http");
// http
//   .createServer(function (require, response) {
//     response.writeHead(200, { "content-type": "text/html" });
//     response.end(`
//   <html>
//   <meta charset = UTF-8>
//   <head>
//   <style></style>
//   <scritp></scritp>
//   <body></body>
//   </head>
//   </html>`);
//   })
//   .listen(8888, function () {
//     console.log("server run at 8888");
//   });

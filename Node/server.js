const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`
      <html>
        <head>
          <meta charset='UTF-8'>
          <style>
            h1 {
              color: red;
            }
          </style>
          <script>
            alert('test');
          </script>
        <head>
        <body>
          <h1>다시</h1>
        </body>
      </html>
    `);
  })
  .listen(8888, function () {
    console.log("server run at 8888");
  });

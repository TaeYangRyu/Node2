const fs = require("fs");
let rs;
try {
  rs = fs.ReadStream("./os.js");
} catch (e) {
  console.log(e);
}
rs.on("open", function () {
  console.log("os.js open");
});
process.on("uncaughtException", function (e) {
  // console.log("에러 발생");
  console.log("하아아아아아아아");
});

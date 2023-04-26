const expo = require("./이벤트모듈.js");

expo.timer.on("runTime", () => {
  console.log(new Date());
});

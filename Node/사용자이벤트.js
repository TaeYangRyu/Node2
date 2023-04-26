const e = require("events");

//사용자 이벤트 생성
const my = new e();

my.on("hello", function () {
  console.log(new Date());
});

function timer() {
  my.emit("hello");
  setTimeout(timer, 1000);
}

timer();

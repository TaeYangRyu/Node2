function err() {
  console.log("한번만 봐줌");
  //이벤트 삭제
  process.removeListener("uncaughtException", err);
}

process.on("uncaughtException", err);

//setInertval 시간당 반복
// setTimeout - Inertval 처럼 사용
let one = 1000;
function test() {
  // 재귀 함수
  console.log("test");

  setTimeout(test, one);
  nothing(); // 에러
}
//setTimeout(test, one);
test();

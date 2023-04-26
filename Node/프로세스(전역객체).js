/*
process(System.exit(0))
process.exit(0) - 종료
process.argvs (배열) - 실행 인자(argument) 설정

 */
/*  console.log(process.argv);
// process.exit(0); //종료

// 예제
// node 파일이름 --exit 7000
[1,2].forEach*/
process.argv.forEach(function (item, index, arr) {
  console.log(item);
  if (item === "--eixt") {
    setTimeout(function () {
      process.exit(0);
    }, process.argv[index + 2]);
  }
});
// console.dir(procesar.argv);
// let arr = ["가", "나", "다"];
// arr.forEach(function (a, b, c) {
//   console.log(a + " : " + b + " : " + c);
// }); //콜백 함수- 문자 숫자 자기자신
// setTimeout : 일정 시간 동안 대기.
// setTimeout(function () {
//   console.log("s");
// }, 5000);

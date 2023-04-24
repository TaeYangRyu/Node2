/*
%s : 문자열
%d : 숫자
%j : json

clear() - 화면 지움
console.time() - 시간체크 타이머 생성
console.timeEnd() - 타이머 중지
*/
console.time("쉬관"); // 시간 측정 시작
console.log("문자 : %s", "문자열");
console.log("숫자 : %d", 19n);
console.log("JSON : %j", { key: "value" });
console.dir(console);
// console.clear();
let output = 1;
for (let i = 1; i < 100; i++) output *= i;
console.log(output);
console.timeEnd("쉬관"); // 시간 측정 끝

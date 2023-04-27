// console.log("hellow World!");
//cd node --> node frist.js

//비동기 이벤트 기반
/*객체.addEventListener(이벤트 이름, 이벤트 핸들러)

window.addEventListener('load',function(){
    구문
});
wiondw.onload = function(){

};

객체.on(이벤트 이름, 이벤트 핸들러);
*/
//일반 함수
// function add(a, b) {
//   //함수 정의할 때 인수 = parameter(매개변수)
//   return a + b;
// }
// //함수 표현식
// let add = function (a, b) {
//   return a + b;
// };
// //화살표 함수
// let add = (a, b) => a + b ;
//즉시 실행 함수
// (function (a, b) {
//   return a + b;
// })(7, 8);
//콜백 함수
// function add(a, b, func) {
//   let c = a + b;
//   func(c);
// }

// function myFunc(val) {
//   console.log(val);
// }
// add(7, 8, myFunc);

// console.log(add(7, 8)); //함수의 사용에서 쓰인 인수 ,인자 arguments

//object : 키와 값의 쌍으로 이루어진 그룹

//변수,함수
// 객체 = 변수들 + 함수들

console.log(",,,");
let obj1 = new Object();
let obj2 = {}; //이용 많이함 추천.

obj1.name = "하으윽";
obj1.age = 11;

obj2.name = "으으윽";
obj2.age = 12;

let obj3 = {
  name: "크으윽",
  age: 2,
  "address 1": "부산.....",
  "address 2": "마산......",
};
//{} 안에서 : 사용해야함
// name = 키 하으윽 = 값
obj1.name = "후으윽";
console.log(obj1.name);
console.log(obj1.age);
console.dir(obj1);
// js {    } 객체 [] 배열

let class1 = {
  student1: [obj1, obj2, obj3],
};
console.dir(class1);
console.log(class1.student1[0]);
console.log(class1.student1[0].age);
console.log(class1.student1[0].name);

delete obj1.name;
console.dir(obj1);

console.log(obj3);
console.log(obj3.name);
console.log(obj3["name"]);

console.log(obj3["address 1"]); //연관 배열

// let fruit = prompt("사용하고싶은 속성이름", "apple");
// let bag = {
//   [fruit + "computers"]: 5,
// };
// console.log(bag[fruit + "computers"]);

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user1 = makeUser("John", 30);
let user2 = makeUser("le", 34);
let user3 = makeUser("re", 25);
console.log(user1.name); // john
console.log(user2.name); // le
console.log(user3.name); // re

console.log(user1.__proto__);

for (let key in console) {
  console.log(key + ":" + console[key]);
}

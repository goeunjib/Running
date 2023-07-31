// Array.prototype.map() 배열의 각 요소를 대입한 함수의 호출 결과를 '새로운 배열로 반환'

const arr1 = [10, 20, 30, 40, 50];
arr1.map((item, idx) => {
  return console.log(idx, item);
});

const arr2 = [
  { id: 1, name: "html5" },
  { id: 2, name: "css3" },
  { id: 3, name: "js" },
  { id: 4, name: "react" },
];

arr2.map((elem, idx) => console.log(elem.id, elem.name));

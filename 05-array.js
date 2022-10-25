/* 05. 배열 */

let fruits = ['banana', 'apple', 'water melon'];

// 배열에서 주로 사용하는 배열 연산

// 접근
console.log(fruits[2]);

// 길이 구하기
console.log(fruits.length);

// 뒤에다가 더하기 (push)
fruits.push('water melon');
console.log(fruits);

// 맨 뒤에꺼 빼서 쓰기 (pop)
const lastFruit = fruits.pop();
console.log(fruits);
console.log('빼낸 과일: ' + lastFruit);

// 정렬
fruits.sort();
console.log(fruits);

fruits.sort((a, b) => a.length - b.length); // 화살표 함수식을 이용한 과일 길이별 정렬
fruits.sort((a, b) => b.length - a.length); // 화살표 함수식을 이용한 과일 길이별 역정렬
console.log(fruits);

// 정렬 (역순)
fruits.reverse();
console.log(fruits);

// 제거 (splice)
var removeFruits = fruits.splice(0, 2);
console.log(fruits, removeFruits);

/* 06. 함수 */

// 내 마음대로 부가적인 기능을 하는  단위 프로그램 만드는 방법
// Java 계열 언어와 차이점 (java 옛날꺼.. 1.8 버전 이전... 이후로는 람다식(화살표함수) 가능해서 부분적으로 해소)
// 자바스크립트에서는 함수는 **일급객체**
// 함수의 인자로 함수를 넘기는게 가능하다

function add(a, b) {
    return a + b;
}

console.log(add(10, 4));

let minus = function (a, b) {
    return a - b;
}

console.log(minus(10, 4));

let multiply = (a, b) => {
    console.log(a, b);
    return a * b;
}

console.log(multiply(2, 5));

let powByTwo = a => a ** 2;

console.log(powByTwo(11));

let array = [1,2,3,4];

let poweredArray = array.map(value => value ** 2);

console.log(poweredArray);

let poweredArray2 = [];
for (const value of array) {
    poweredArray2.push(value ** 2);
}
console.log(poweredArray2);

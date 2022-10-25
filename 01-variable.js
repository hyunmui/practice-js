console.log('Hello Js world');
console.log('세미콜론이 없어도 잘 됩니다')

// 주석 사용법
// 이건 한줄 주석입니다. 간단한 설명을 할때 사용합니다
/*
이건 여러줄 주석입니다
좀 더 긴 내용을 작성할 때 사용합니다.
*/

// 일단 이렇게 먼저 쓰고
// 가나다라
// 일이삼사


// 변수 : 리터럴
var x;      // 선언 : undefined

console.log(x);

x = 1000;
x = 3.1412;   // 

console.log(typeof x);

let myName = '선현민';
const PI = 3.1412;

console.log(myName, PI);

let isWoman = false;

console.log(isWoman);

let iAmNull = null;
console.log(typeof iAmNull);

const isEqualNullAndUndefined = (iAmNull == undefined);

console.log(isEqualNullAndUndefined);
console.log(1 == '1');

const isRealNotEqualNullAndUndefined = (iAmNull !== undefined);
console.log(isRealNotEqualNullAndUndefined);


// 변수 : 배열
let weekdays = ['Sun', 'Mon', 'Thue', 'Wed', 'Thur', 'Fri', 'Sat'];
let oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(oneToTen[5]);

let oneToFive = ['one', 2, 'three', 'four', 5];

console.log(oneToFive);

// 파이썬 처럼 [1..3] 이런 구문 안됨 ㅠ

oneToFive.push('6')
console.log(oneToFive);

let copyArray = oneToFive;
copyArray[0] = 1111;

console.log(oneToFive, copyArray);
// Deep Copy or Clone 함수들 쓰게 됨 


// 변수 : 객체
let k5 = {
    name: 'K5',
    manufacturer: 'KIA',
    hasSunroof: false,
    year: 2021,
    drive: function () {
        console.log(name + ' is driving...');
    }
};

console.log(k5);

k5.secondOwner = '선현민';

console.log(k5);

let cargo = [{
    name: 'K5',
    manufacturer: 'KIA',
    hasSunroof: false,
    year: 2021
},{
    name: 'Sonata',
    manufacturer: 'Hyundai',
    hasSunroof: true,
    year: 2022
},{
    name: '티볼리',
    manufacturer: 'Ssangyong',
    hasSunroof: false,
    year: 2019
}];

console.log(cargo);

console.log(JSON.stringify(cargo));

// [{"name":"K5","manufacturer":"KIA","hasSunroof":false,"year":2021},{"name":"Sonata","manufacturer":"Hyundai","hasSunroof":true,"year":2022},{"name":"티볼리","manufacturer":"Ssangyong","hasSunroof":false,"year":2019}]
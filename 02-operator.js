/* 02. 연산자 */

// 숫자연산

const x = 8, y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);        // 제곱

// 문자열 연산

const firstName = 'Martin';
const lastName = 'Seon';

console.log(firstName + ' ' + lastName + ' 님이 로그인 하셨습니다');
console.log(`${firstName} ${lastName} 님이 로그인 하셨습니다`);     // 보간법


// 대입 연산

let a = 10;
console.log(a += 20);   // a = a + 20;
console.log(a -= 20);
console.log(a *= 20);   // a = a * 20;
console.log(a /= 20);

// 증감 연산

let b = 20;
console.log(b++);       // 출력은 20
console.log(b);         // 이후에 21 저장

// 비교 연산

const smaller = 15, bigger = 25;

console.log(smaller > bigger);
console.log(smaller < bigger);
console.log(smaller != bigger);
console.log(smaller == bigger);

const string_smaller = '15';

console.log(smaller == string_smaller);     // 두개짜리는 타입을 비교하지 않고 값이 같으면 같다고 표시
console.log(smaller === string_smaller);    // 타입까지 비교해서 완벽하게 같을때
console.log(smaller !== string_smaller);

// 불린 연산

console.log(true && true);      // AND : 양쪽 다 참일 때만 참
console.log(true || false);     // OR : 한쪽만 참이어도 참
console.log(!true);     // NOT : 반대

let iAmWoman = false;

if (iAmWoman) {
    console.log('나는 여자입니다');
}
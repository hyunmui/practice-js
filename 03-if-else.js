/* 3. 비교문 */

const smaller = 15, bigger = 25;

if (smaller < bigger) {
    console.log(bigger + '가 더 큽니다');
} else {
    console.log(smaller + '가 더 큽니다');
}

let score = 72;

if (score >= 90 && score <= 100) {
    console.log('GRADE A');
} else if (score >= 80 && score < 90) {
    console.log('GRADE B');
} else if (score >= 70 && score < 80) {
    console.log('GRADE C');
} else {
    console.log('GRADE D');
}

const typeName = 'Bad';

switch (typeName) {
    case 'Awesome':
        console.log('A');
        break;

    case 'Bad':
        console.log('B');
        break;

    default:
        console.log('None');
        break;
}
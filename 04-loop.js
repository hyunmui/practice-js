/* 04. 반복문 */

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

for (let index = 0; index < cargo.length; index++) {
    const car = cargo[index];
    console.log(car.name);
}

console.log('------------------------------');

cargo.forEach(car => {
    console.log(car.manufacturer);
});

console.log('------------------------------');

for (const car of cargo) {
    console.log(car.year);
}

console.log('------------------------------');

// for-in 문은 객체(Object)의 값들을 순회할 때만 사용

let car_tiboli = {
    name: '티볼리',
    manufacturer: 'Ssangyong',
    hasSunroof: false,
    year: 2019
};

console.log(car_tiboli.name);

for (const key in car_tiboli) {
    if (Object.hasOwnProperty.call(car_tiboli, key)) {
        const value = car_tiboli[key];      // 객체는 . 과 배열표기의 대괄호를 통해서도 가져올 수 있다. 
                                        // (단 key는 문자열 - string 형이어야 한다)
        console.log(key, value);
    }
}
// 살짝 옆길: 변수 renaming - 단축키 F2
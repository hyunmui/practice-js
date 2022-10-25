/* 08. 클래스 */

class Wheel {
    constructor(position, sizeInch, tearRate) {
        this.position = position;
        this.sizeInch = sizeInch;
        this.tearRate = tearRate;
    }
}

class Car {
    speed = 0;
    // 생성자: 객체가 new 키워드를 통해 만들어질때 제일 먼저 호출됨
    constructor(ownerName, trunkType, wheels) {
        this.ownerName = ownerName;
        this.trunkType = trunkType;
        this.wheels = wheels;
        this.speed = 0;
        this.isPowerOn = false;
    }

    tabPowerButton() {
        console.log('시동이 걸렸습니다');
        this.isPowerOn = !this.isPowerOn;
    }

    accelerate(increaseSpeed) {
        this.speed += increaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    }

    break(decreaseSpeed) {
        this.speed -= decreaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    }
}

// 상속
class K5 extends Car { 
    // 여기에 k5만 가지고 있는 메서드나 성질을 넣을 수 있음
    manufacturer = 'KIA';
}

class Sonata extends Car {
    manufacturer = 'Hyundai';
    break(decreaseSpeed) {
        console.log('Nothing Anything');
        super.break(decreaseSpeed);     // 부모 클래스의 메서드에 접근하는 방법
    }
}

let k5 = new K5("Hyeonmin Seon", "hatchback", [
    new Wheel("front-right", 18, 0.02),
    new Wheel("front-left", 18, 0.04),
    new Wheel("back-right", 18, 0.6),
    new Wheel("back-left", 18, 0.7),
]);

console.log(k5);

k5.accelerate(10); // "시동이 꺼져있어 가속할 수 없습니다"
k5.tabPowerButton(); // "시동이 걸렸습니다"
k5.accelerate(5); // "현재 속도: 5km/h"
k5.accelerate(10); // "현재 속도: 15km/h"
k5.break(7); // "현재 속도: 8km/h"
k5.break(10); // "현재 속도: 0km/h"
k5.tabPowerButton(); // "시동이 꺼졌습니다"

console.log(k5);

let sonata = new Sonata("Hyeonmin Seon", "noraml", [
    new Wheel("front-right", 18, 0.02),
    new Wheel("front-left", 18, 0.04),
    new Wheel("back-right", 18, 0.6),
    new Wheel("back-left", 18, 0.7),
]);

sonata.break(10);

console.log(sonata);

/* 07. 객체 (object) */

var k5 = {
    ownerName: 'Hyeonmin Seon',
    trunkType: 'hatchback',
    wheels: [
        {
            position: 'front-right',    // 바퀴위치
            sizeInch: 18,               // 사이즈
            tearRate: 0.02              // 마모 비율
        },
        {
            position: 'front-left',
            sizeInch: 18,
            tearRate: 0.04
        },
        {
            position: 'back-right',
            sizeInch: 18,
            tearRate: 0.6
        },
        {
            position: 'back-left',
            sizeInch: 18,
            tearRate: 0.7
        }
    ],
    speed: 0,           // 속도
    isPowerOn: false,   // 전원 상태
    tabPowerButton: function () {
        console.log('시동이 걸렸습니다');
    },
    accelerate: function (increaseSpeed) {
        this.speed += increaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    },
    break (decreaseSpeed) {
        this.speed -= decreaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    }
};

k5.accelerate(10);      // "시동이 꺼져있어 가속할 수 없습니다"
k5.tabPowerButton();    // "시동이 걸렸습니다"
k5.accelerate(5);       // "현재 속도: 5km/h"
k5.accelerate(10);      // "현재 속도: 15km/h"
k5.break(7);            // "현재 속도: 8km/h"
k5.break(10);           // "현재 속도: 0km/h"
k5.tabPowerButton();    // "시동이 꺼졌습니다"

k5.companyName = 'KIA';

console.log(k5);

// 이런 형태는 재사용이 어렵다. 새차를 만들려면 또 똑같이 프로퍼티들을 다 입력해야됨
// 그래서 과거에는 재사용을 위해서 "prototype" 이라는 걸 써서 해결했지만
// 최근에는 class 가 생겨서 그냥 가능
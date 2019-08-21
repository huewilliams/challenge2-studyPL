/*
    Promise 는 약속으로 이해할 수 있다.

    Promise 는 3가지 상태를 가진다.
    1. Pending (미결) : 약속이 이행될지 안될지 모른다.
    2. Fulfilled (이행) : 약속이 이행되었다.
    3. Rejected (거절) : 약속이 거절되어 이행되지 않았다.
 */
// 예제에서는 어머니가 스마트 폰을 사주는 약속을 하고 만약 기분이 좋다면 이행한다고 가정합니다.
let isMomHappy = true;

// Promise 만들기
let GetNewPhone = new Promise(
    function (resolve, reject) {
        if(isMomHappy) {
            let phone = {
                brand: 'samsung',
                color: 'black'
            };
            resolve(phone); //fulfilled
        }
        else {
            let reason = new Error('mom is not happy');
            reject(reason); //reject
        }
    }
);

/* Promise 의 형태
    new Promise( function (resolve, reject) {...} )
 */

// Promise 호출
let askMom = function () {
    GetNewPhone
        .then(function (fulfilled) {
          console.log(fulfilled);
          // output : { brand : 'samsung', color : 'black' }
        })
        .catch(function (error) {
          console.log(error.message);
          // output : mom is not happy
        })
}();

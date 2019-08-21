/*
    지금까지의 코드를 ES6, Node v6 버전에 맞게 다시 작성
    화살표 함수, const, let 선언문 사용
 */

const isMomHappy = true;

// Promise
const GetNewPhone = new Promise((resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'samsung',
                color: 'black'
            };
            resolve(phone)
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);

const showOff = function (phone) {
    const message = `Hey friend I have a new ${phone.color} ${phone.brand} phone`;
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    GetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error));
};

askMom();

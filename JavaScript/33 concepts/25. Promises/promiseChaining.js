/*
    Promise 는 연계 가능(Chainable) 하다.
*/

// 새 스마트폰을 사면 친구들에게 보여주기로 약속(Promise) 했다고 가정.
// understandPromise.js 에서 어머니가 스마트폰을 사준다는 약속과 연계된다.

// 2nd Promise
let showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
            resolve(message);
        }
    )
};

// shorten it
showOff = function (phone) {
    let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;

    return Promise.resolve(message);
};

// 1st Promise (understandPromise.js)
let isMomHappy = true;

let GetNewPhone = new Promise(
    function (resolve, reject) {
        if(isMomHappy) {
            let phone = { color : 'black', brand : 'samsung' };
            resolve(phone);
        }
        else {
            let reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);

// Call our promise
// promise chain 을 통해 'GetNewPhone' Promise 를 수행한 이후에만, 'showOff' Promise 를 수행할 수 있다.
let askMom = function () {
    GetNewPhone
        .then(showOff) // promise chain
        .then(function (fulfilled) {
            console.log(fulfilled);
            // output : Hey friend, I have a new black samsung phone
        })
        .catch(function (error) {
            console.log(error.message);
            // output : mom is not happy
        })
}();

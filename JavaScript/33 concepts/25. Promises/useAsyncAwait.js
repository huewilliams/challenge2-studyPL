const isMomHappy = true;

// Promise
const GetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);

// 2nd Promise
async function showOff(phone) {
    return new Promise((resolve, reject) => {
        const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;

        resolve(message);
    })
}

// call our promise
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await GetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking Mom');
    } catch (error) {
        console.log(error.message);
    }
}

(async ()=> {
    await askMom();
})();

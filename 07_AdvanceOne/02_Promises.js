// created a promise
const promiseOne = new Promise((resolve, reject) => {
    // do an async task
    // DB call, cryptogaphy, network
    setTimeout(() => {
    console.log('--------------------------')
        console.log("Async task is completed");
        resolve();  //  call this to execute then
                    // if resolved - then executed
    }, 1000);
})

// consume a promise

promiseOne.then(() => {
    console.log("promise one consume");
    console.log('--------------------------')
})


// we can do all together without using variable
// 2) create & consume a Promises

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise two called');
        resolve(); // resolve and then is connected
    },1000)
}).then(() => {
    console.log('promise two consumed')
    console.log('--------------------------')
})

// get data from promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promised resolved with data');
        resolve({ username: 'DJ', email: 'dj@gmail.com' });
    },1000)
}).then((userdata) => {
    console.log(userdata);
    console.log('--------------------------')
})

// learn rejected - Error | then chaining & finally

new Promise((resolve,reject) => {
    setTimeout(() => {
        // let error = false;
        let error = true;

        if (!error) {
            resolve({ username: 'DJ123', password: 123 });
        }
        else {
            reject('Error : something went wrong !');
        }
    }, 1000);
}).then((userdata) => {
    console.log(userdata);
    return userdata.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log('Error while handling promise')
    console.log(error);
}).finally(() => {
    console.log('the promise is either resolved or rejected')
    console.log('-------------------')
})

// use a async & await to handle Promise

const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        // let error = true;
        let error = false;
        if (!error) {
            resolve({ user: 'js', password: 123 });
        }
        else {
            reject('Error: something wrong');
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        console.log('-------------------')
    }
}

consumePromiseFive();

// get data from url & show using fatch
// remeber fatch return promise
const requesturl = 'https://api.github.com/users/DJNAKUM07';
    
//1) using async & await
console.log('-------------------------');
console.log('using async & await');
async function getUserData() {
    try {
        const response = await fetch(requesturl);
        // now convert it into json which also take time so make it also await
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUserData();

// let do again with promise handle then & catch
fetch(requesturl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('-------------------------');
        console.log('promise handle with then & catch');
        console.log(data);
    })
    .catch((error) => console.log(error))
    .finally(() => {
        console.log('promise resolved | rejected');
        console.log('--------------')
    })
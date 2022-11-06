/**
 * ECMAScript 6 入门
 * 阮一峰
 * 
 * Promise 对象
 * https://es6.ruanyifeng.com/#docs/promise#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95
 * 
 * source map
 * es5 es6 es2015.... 等区别
 * jest
 * rush
 */

const promise = new Promise(function(resolve, reject) {
    // some code....
    if(true) {
        resolve("this is success msg");
    } else {
        reject("this is error msg");
    }
});

promise.then(function(value) {
    // success
    console.log("first callback value = " + value);
}, function(error) {
    // fail
    console.log("second callback error = " + error);
});


function timeout(ms) {
    return new Promise((resolve, reject) => {
        console.log("start setTimeout");
        setTimeout(resolve, ms, 'done');
        console.log("end setTimeout");
    });
}

timeout(1000).then((value) => {
    console.log(value);
});

function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();
        image.onload = function() {
            resolve(image);
        };
        image.onerror = function() {
            reject(new Error("Could not load image at " + url));
        }
        image.src = url;
    });
}


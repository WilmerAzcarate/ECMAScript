// @ts-check

const promise1 = new Promise((resolve, reject) => reject("rechasada"));
const promise2 = new Promise((resolve, reject) => resolve("cumplida"));
const promise3 = new Promise((resolve, reject) => resolve("cumplida"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
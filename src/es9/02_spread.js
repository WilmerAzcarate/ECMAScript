// @ts-check
const user = {username:"yo",age:34,country:"co"};

const {username,...values} = user;

console.log(username);
console.log(values);
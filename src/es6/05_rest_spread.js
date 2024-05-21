// @ts-check

// arrays destructuring
let fruits = ['apple','banana','orange'];

let [,,b]=fruits;

console.log(b);

// object destructuring

let user = {username:"oscar",age:30};

let {username} = user;

console.log(username);

// spread operator
let person = {name:"oscar",age:28};
let country = "co"
let data = {...person,country};
console.log(data);

// rest 
/**
 * 
 * @param {number} num 
 * @param  {...number} values 
 * @returns 
 */
function sum(num,...values){
    console.log(values);
    for (const value of values) {
        num += value;
    }
    return num;
}

let result = sum(2,3,5,6,4,7,7,8,6,6,8,7,8,7,78,7,87,5);
console.log(result);
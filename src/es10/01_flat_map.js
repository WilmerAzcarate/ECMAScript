// @ts-check

const array = [1,1,2,3,4,5,5,[1,5,4,6,4,[1,1,23,2]]];

console.table(array.flat(3));

const array2 = [1,2,3,4,5,6,7,7];
console.table(array2.flatMap(v=>[v,v*2]));
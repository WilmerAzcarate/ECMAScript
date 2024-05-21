// @ts-check

const array = [1,2,3,4,5];

/**
 * @type {Set<number>}
 */
const list = new Set(array);

list.add(2);
list.add(3);
list.add(6).add(7);

console.log(list);
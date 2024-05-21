// @ts-check

const regex = /\b(Apple)+\b/g;

const fruit = 'Apple,Banana,Kiwi,Apple';

for (const match of fruit.matchAll(regex)) {
    console.table(match);
}
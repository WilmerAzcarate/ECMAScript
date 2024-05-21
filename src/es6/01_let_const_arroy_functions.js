// @ts-check

var lastName="david";
lastName = "Oscar";
console.log(lastName);

let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

const ANIMAL = "Dog";
// ANIMAL = "Cat"; // da error
console.log(ANIMAL);

const fruits = () => {
    if (true) {
        var fruit1 = "apple";
        let fruit2 = "KIWI";
        const fruit3 = "Banana"
    }
    console.log(fruit1);
    // console.log(fruit2); // fuera del scope
    // console.log(fruit3); // fuera del scope
}

fruits();
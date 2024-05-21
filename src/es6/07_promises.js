// @ts-check

/**
 * 
 * @param {number} number 
 * @returns 
 */
const anotherFunction = (number = 0) => {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve("Hey!!");
        } else {
            reject("Esperaaa hay un error");
        }
    });
}

anotherFunction(2)
    .then(response => console.log(response))
    .catch(err => console.log(err));
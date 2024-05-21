// @ts-check

/**
 * 
 * @param {number} number 
 * @returns 
 */
const anotherFunction = (number = 0) => {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            setTimeout(()=>resolve("Hey!!"),2000);
        } else {
            reject("Esperaaa hay un error");
        }
    });
}

anotherFunction(2)
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=>console.log("Por fin terminoooo!!"));
// @ts-check

/**
 * @param {string[]} array 
 */
function* iterate(array){
    for (const value of array) {
        yield value;
    }
}

const it = iterate(["hola","mundo","querido","vuelve"]);
do {
    let result = it.next();
    console.log(result.value);
} while (!it.next().done);
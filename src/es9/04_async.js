// @ts-check

async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
}const other = anotherGenerator();
other.next().then(response=>console.log(response));
other.next().then(response=>console.log(response));

/**
 * @param {string[]} array
 */
async function arrayOfNames(array){
    for await (const value of array) {
        setTimeout(()=>console.log(value),5000);
    }
}

arrayOfNames(["Oscar","David","Ana"]); 
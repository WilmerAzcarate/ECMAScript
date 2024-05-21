// @ts-check

/**
 * 
 * @param {string} user 
 * @param {number} age 
 * @param {string} country 
 */
function newUser(user,age,country){
    return {
        user,
        age,
        country
    }
}

console.log(newUser("gndx",34,"co"));
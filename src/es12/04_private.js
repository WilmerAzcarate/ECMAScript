// @ts-check

class User {

    /**
     * @type {string}
     */
    _name;
    /**
     * @type {number}
     */
    _age;

    /**
     * @param {string} name  the username
     * @param {number} age  how old the user is
     */
    constructor(name="user",age=10){
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get age(){
        return this._age;
    }

    set age(age){
        this._age=age;
    }

    //metodos
    /**
     * @returns {string}
     */
    #speack(){
        return "Hello";
    }
    /**
     * @returns {string}
     */
    gretting(){
        return `${this.#speack()} ${this.name}`;
    }
}

const wil = new User("wilmer",20);
console.log(wil.age);
console.log(wil.gretting());

const user = new User();
console.log(user.age);
user.age = 20;
console.log(user.age);
console.log(user.gretting());
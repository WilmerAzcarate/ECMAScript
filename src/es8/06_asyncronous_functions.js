// @ts-check

const fnAsync = () => {
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(()=>resolve("Asiiiinc"),2000)
            : reject(new Error("errooor"));
    })
}

const anotherFn = async () =>{
    const something = await fnAsync();
    console.log(something);
    console.log("hola");
}

console.log("before");
anotherFn();
console.log("after");
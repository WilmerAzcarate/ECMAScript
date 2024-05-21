// @ts-check

const button = document.getElementById('btn');

button?.addEventListener("click",async ()=>{
    const module = await import('./07_module.js');
    console.log(module);
    module.hello();
});
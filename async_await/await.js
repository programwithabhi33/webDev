let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p resolved")
    }, 2000);
})
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p resolved")
    }, 4000);
})
let a = "a";

async function test(){
    let val = await p;
    let value1 = await p1;
    await a;

}
await a;
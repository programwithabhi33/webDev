let p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("10")
    }, 2000);
})
// let p1 = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("10")
//         }, 10000);
//     })
// }
// async function test() {
//     let val = await p;
//     console.log("value1", val)
//     let val2 = await p;
//     console.log("value2", val2)
// }
// test();

function test2(){
    console.log("testp")
}
async function test(){
    console.log("Hello World");
    let val1 = await p;
    console.log(val1);
}
test();
for (let index = 0; index <= 3000000000; index++) {
    if(index == 3000000000) console.log("if");
}
for (let index = 0; index <= 3000000000; index++) {
    if(index == 3000000000) console.log("second if");
}


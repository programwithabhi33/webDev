let p = new Promise((resolve, reject) => {
    reject("reject");
})
async function test() {
    return p.then(value => {

    }).catch(error => {
        console.log(error)
        return "a"
    });
}
let a = test();
console.log(a)
a.then(value => console.log(value))


let secondPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("second")
    }, 3000);
})
let firstPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("first")
    }, 3000);
})
setTimeout(() => {
    let a = Promise.any([secondPromise, firstPromise]);
    a.then(value => {
        console.log(value);
    }).catch(error => {
        console.log(error)
    })
}, 2000);
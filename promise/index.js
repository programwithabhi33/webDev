let promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({name: "sourabh"});
    }, 1000);
});
promise.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("error")
})
console.log("second")
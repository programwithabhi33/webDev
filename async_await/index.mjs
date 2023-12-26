function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(true)
        }, 2000);
    })
}
let data = await getData();
console.log(data)
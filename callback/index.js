function first (cb){
    //
    function anotherFunction(cb){
        console.log("anotherfunction");
        cb();
    }
    cb(anotherFunction);
}
function second(cb){
    console.log("callback function");
    function test(cb){
        console.log('console.log');
        cb();
    }
    cb(test);
}
first(second);


function calculate(firstNum, secondNum, operator){
    let randomNumber = Math.random();
    if(randomNumber < 0.1){
        if(operator == "+"){
            console.log(firstNum - secondNum)
        }
        else if(operator == "*"){
            console.log(firstNum + secondNum)
        }
        else if(operator == "-"){
            console.log(firstNum / secondNum)
        }
        else{
            console.log(firstNum ** secondNum)
        }
    }
    else{
        console.log(eval(`${firstNum} ${operator} ${secondNum}`))
    }
}
calculate(3, 5, "+");
// + --> -
// * --> +
// - --> /
// / --> **
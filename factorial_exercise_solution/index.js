// Using loop
let firstNumber = 6;
let factorialFromLoop = 1;
for (firstNumber; firstNumber >= 1; firstNumber--) {
    factorialFromLoop *= firstNumber;
}
console.log(factorialFromLoop)

// Using reduce function
function createArrayWithNumbers(n) {
    return Array.from({ length: n }, (_, index) => index + 1);
}
function reduceForCalculateFactorial(a, b){
    return a*b;
}
let secondNumber = 6;
let resultArray = createArrayWithNumbers(secondNumber);

let factorialFromReduce = resultArray.reduce(reduceForCalculateFactorial);
console.log(factorialFromReduce);


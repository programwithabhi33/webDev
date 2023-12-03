/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
let adjective1 = "Fire"; // string length = 4
let adjective2 = "Crazy"; // string length = 5
let adjective3 = "Amazing"; // string length = 7

let shopName1 = "Foods"; // string length = 5
let shopName2 = "Engine"; // string length = 6
let shopName3 = "Garments"; // string length = 8

let anotherWord1 = "Hub"; // string length = 3
let anotherWord2 = "Bros"; // string length = 4
let anotherWord3 = "Limited"; // string length = 7

function checkComparisonAndDecide(randomNumber, firstWord, secondWord, thirdWord){
    let returnWord;
    if(randomNumber >= firstWord.length && randomNumber < secondWord.length){
        returnWord = firstWord;
    }
    else if(randomNumber >= secondWord.length && randomNumber < thirdWord.length){
        returnWord = secondWord;
    }
    else{
        returnWord = thirdWord;
    }
    return returnWord;
}
function businessNameGenerator(adjective1, adjective2, adjective3, shopName1, shopName2, shopName3, anotherWord1, anotherWord2, anotherWord3){
    let randomNumberForadj = Math.floor(Math.random() * (adjective3.length - adjective1.length + 1)) + adjective1.length;
    let randomNumberForshopName = Math.floor(Math.random() * (shopName3.length - shopName1.length + 1)) + shopName1.length;
    let randomNumberForanotherWord = Math.floor(Math.random() * (anotherWord3.length - anotherWord1.length + 1)) + anotherWord1.length;
    
    let firstWord = checkComparisonAndDecide(randomNumberForadj, adjective1, adjective2, adjective3);
    let secondWord = checkComparisonAndDecide(randomNumberForshopName, shopName1, shopName2, shopName3);
    let thirdWord = checkComparisonAndDecide(randomNumberForanotherWord, anotherWord1, anotherWord2, anotherWord3);
    
    return `${firstWord} ${secondWord} ${thirdWord}`;
}
let randomBusinessName = businessNameGenerator(adjective1, adjective2, adjective3, shopName1, shopName2, shopName3, anotherWord1, anotherWord2, anotherWord3);

console.log("Random business name is: ",randomBusinessName);
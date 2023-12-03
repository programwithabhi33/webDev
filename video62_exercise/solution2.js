let adjective1 = "Fire";
let adjective2 = "Crazy";
let adjective3 = "Amazing";

let shopName1 = "Foods";
let shopName2 = "Engine";
let shopName3 = "Garments";

let anotherWord1 = "Hub";
let anotherWord2 = "Bros";
let anotherWord3 = "Limited";

function checkRandomNumberAndFixWord(word1, word2, word3){
    let randomNumber = Math.random();
    if(randomNumber < 0.33){
        return word1;
    }
    else if(randomNumber >= 0.33 && randomNumber < 0.66){
        return word2;
    }
    else{
        return word3;
    }
}
let firstWord = checkRandomNumberAndFixWord(adjective1, adjective2, adjective3);
let secondWord = checkRandomNumberAndFixWord(shopName1, shopName2, shopName3);
let thirdWord = checkRandomNumberAndFixWord(anotherWord1, anotherWord2, anotherWord3);

console.log(`Random business name is ${firstWord} ${secondWord} ${thirdWord}`);
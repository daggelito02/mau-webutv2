"use strict";

/* Dag Fredriksson och da281a */
/**
 * Uppgift 1
 * =========
 */

const max = function(number1 = 0, number2 = 0) {
    let result = number2;
    if (number1 >= number2) {
        result = number1;
    }
    return result;
};
const min = function(number1 = 0, number2 = 0) {
    let result = number2;
    if (number1 <= number2) {
        result = number1;
    } 
    return result;
};

/**
 * Uppgift 2
 * =========
 */
const range = function(n = null) {
    let rangeArray = [];
    for (let i = 0; i < n; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
} 

var testArray = range(10);
console.log(testArray);

/**
 * Uppgift 3
 * =========
 */
const sum = function(numbersArray = null) {
    let sumOfnumbersArray = 0;
    numbersArray.forEach( numbers => {
        sumOfnumbersArray += numbers;
    });
    return sumOfnumbersArray;
} 

//var numbers = [5, 10, 15, 20, 25];
//var numbers = [7, 10, 19, 20, 25];
var numbers = [5, -10, 15, 20, 25];
var sumOfNumbers = sum(numbers);
console.log('sumOfNumbers: ', sumOfNumbers);

/**
 * Uppgift 4
 * =========
 */
const countCharacter = function(characters = "", character = "") {
    let amountNumberOfCharacter = 0;
    for (var i = 0; i < characters.length; i++) {
        if(characters[i] == character) {
            amountNumberOfCharacter++;
        }
    }
    return amountNumberOfCharacter;
}

var testString1 = "Jane Doe";
var testString2 = "Abracadabra";
var testString3 = "Don Giorno";

console.log(countCharacter(testString1, "e")); // => 2
console.log(countCharacter(testString2, "a")); // => 4 (obs. litet "a")
console.log(countCharacter(testString3, "o")); 

/**
 * Uppgift 5
 * =========
 */
const palindrome = function(TextToTest = "") {
    var reversedText = TextToTest.split('').reverse().join('')
    if (reversedText == TextToTest) {
        return true;
    } else {
        return false;
    }
}
const palindrome2 = function(TextToTest = "") {
    var reversedText = TextToTest.split('').reverse().join('')
    if (reversedText == TextToTest) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("sirap - paris")); // skickar tillbaka "true"
console.log(palindrome2("lorem ipsum")); // skickar tillbaka "false"

/**
 * Uppgift 6
 * =========
 */

/**
 * Uppgift 7
 * =========
 */


/**
 * Uppgift 8
 * =========
 */


/**
 * Uppgift 9
 * =========
 */


/**
 * Uppgift 10
 * =========
 */
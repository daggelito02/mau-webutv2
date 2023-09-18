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


/**
 * Uppgift 5
 * =========
 */


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
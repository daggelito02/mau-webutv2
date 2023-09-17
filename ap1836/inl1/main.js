"use strict";
/* Dag Fredriksson, da281a */
/**
 * Uppgift 1
 * =========
 */
console.log("Uppgift 1.1: ", 5 * 2 <= 12);
console.log("Uppgift 1.2: ", 55 > 22);
console.log("Uppgift 1.3: ", 16 / 4 == 4);
console.log("Uppgift 1.4: ", 8 + 2 < 128);
console.log("Uppgift 1.5: ", 32 * 8 != 255);

/**
 * Uppgift 2
 * =========
 */

const tuesday = "Tisdag";
const hamburger = "Hamburgare";
const beBack = "I'll be back";
console.log("Uppgift 2.1: ", tuesday.substring(0, 3));
console.log("Uppgift 2.2: ", hamburger.substring(3));
console.log("Uppgift 2.3: ", beBack.substring(5));

/**
 * Uppgift 3
 * =========
 */

const learning = "It's Learning".substring(5).toUpperCase();
const goodParts = "JavaScript: The Good Parts".substring(16).toLowerCase();
console.log("Uppgift 3.1: ",learning);
console.log("Uppgift 3.2: ", goodParts);

/**
 * Uppgift 4
 * =========
 */

var numbers = [128, 256, 512, 1024, 2048];
let sumOfNumbers = 0;

numbers.forEach( num => {
    sumOfNumbers += num;
})

console.log("Uppgift 4.1: ", sumOfNumbers);

const avgNumber = sumOfNumbers / numbers.length;
console.log("Uppgift 4.2: ", avgNumber);

numbers.push(sumOfNumbers);
console.log("Uppgift 4.3: ", numbers);

/**
 * Uppgift 5
 * =========
 */

var countries = ["Sweden", "Denmark", "Finland", "Norway"];

console.log("Uppgift 5.1 ", countries[1].substring(0, 3));

var amountOfcountries = countries.length;
var amountOfcountryLetters = "";
countries.forEach( countryLetters => {
    amountOfcountryLetters += countryLetters;
});
console.log("Uppgift 5.2: ", amountOfcountryLetters.length / amountOfcountries);

/**
 * Uppgift 6
 * =========
 */

var values = [3, 5, "Jane", true, 144, false];
var reversedOrder = values.reverse();
console.log("Uppgift 6:", reversedOrder);

/**
 * Uppgift 7
 * =========
 */

var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];
var multipleArrays = [].concat(names, ages, hasPet);
console.log("Uppgift 7: ", multipleArrays);

/**
 * Uppgift 8
 * =========
 */

var actors = ["Sherlock", "Watson", "Bo"];

console.log("Uppgift 8: ", actors.join(' - '));

/**
 * Uppgift 9
 * =========
 */

//var amount = 49; // Less then 50!
var amount = "50"; // Optimal range for the amount!
//var amount = "65"; // Too much!

if (amount < 50) {
    console.log("Uppgift 9: Less then 50!")
} else if (amount >= 50 && amount < 65) {
    console.log("Uppgift 9: Optimal range for the amount!") 
} else {
    console.log("Uppgift 9: Too much!")
}

/**
 * Uppgift 10
 * =========
 */

const hash = '#';
let str = '';
console.log("Uppgift 10:");
for (let i = 0; i < 8; i++) {
  console.log(str += hash);
}
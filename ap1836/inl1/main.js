"use strict";
/* Dag Fredriksson och da281a */
/**
 * Uppgift 1
 * =========
 */
console.log("Uppgift 1.1 ", 5 * 2 <= 12);
console.log("Uppgift 1.2 ", 55 > 22);
console.log("Uppgift 1.3 ", 16 / 4 == 4);
console.log("Uppgift 1.4 ", 8 + 2 < 128);
console.log("Uppgift 1.5 ", 32 * 8 != 255);

/**
 * Uppgift 2
 * =========
 */

const tuesday = "Tisdag";
const hamburger = "Hamburgare";
const beBack = "I'll be back";
console.log("Uppgift 2.1 ", tuesday.substring(0, 3));
console.log("Uppgift 2.2 ", hamburger.substring(3));
console.log("Uppgift 2.3 ", beBack.substring(5));

/**
 * Uppgift 3
 * =========
 */

const learning = "It's Learning".substring(5).toUpperCase();
const goodParts = "JavaScript: The Good Parts".substring(16).toLowerCase();
console.log("Uppgift 3.1 ",learning);
console.log("Uppgift 3.1 ", goodParts);

/**
 * Uppgift 4
 * =========
 */

var numbers = [128, 256, 512, 1024, 2048];
let sumOfNumbers = 0;

numbers.forEach( num => {
    sumOfNumbers += num;
})

console.log("Uppgift 4.1 ", sumOfNumbers); //Uppgift 4.1
const avgNumber = sumOfNumbers / numbers.length;
console.log("Uppgift 4.2 ", avgNumber); //Uppgift 4.2

var numbers2 = [128, 256, 512, 1024, 2048, 32];
sumOfNumbers = 0;

numbers2.forEach( num => {
    sumOfNumbers += num;
})

console.log("Uppgift 4.3 ", sumOfNumbers); //Uppgift 4.3

/**
 * Uppgift 5
 * =========
 */

var countries = ["Sweden", "Denmark", "Finland", "Norway"];

console.log("Uppgift 5.1 ", countries[1].substring(0, 3)); //Uppgift 5.1

var amountOfcountries = countries.length;
var amountOfcountryLetters = "";
countries.forEach( letters => {
    amountOfcountryLetters += letters;
})
console.log("Uppgift 5.2 ", amountOfcountryLetters.length / amountOfcountries);

// Skriv ut de tre första bokstäverna av det andra elementet i konsollen
// Räkna ut och skriv ut medelvärdet för antal bokstäver för alla element i konsollen

/**
 * Uppgift 6
 * =========
 */

var values = [3, 5, "Jane", true, 144, false];

var reversedOrder = values.reverse();
sumOfNumbers = "";
reversedOrder.forEach( value => {
    //reversedValues += test;
    console.log(value);
    sumOfNumbers += value + " ";
})

console.log("Uppgift 6 ", sumOfNumbers);
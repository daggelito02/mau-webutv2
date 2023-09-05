"use strict";
// console.log = (...e) => {for(var i=0;i<e.length;i++)
//     {document.getElementById("log").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br />"}};
//     var customNameOfLog = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("log2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br />"}};

// customNameOfLog(5 * 2 <= 12);
// customNameOfLog(55 > 22);
// customNameOfLog(16 / 4 == 4);
// customNameOfLog(8 + 2 < 128);
// customNameOfLog(32 * 8 != 255);

/* Dag Fredriksson och da281a */
/**
 * Uppgift 1
 * =========
 */
console.log(5 * 2 <= 12);
console.log(55 > 22);
console.log(16 / 4 == 4);
console.log(8 + 2 < 128);
console.log(32 * 8 != 255);

/**
 * Uppgift 2
 * =========
 */

const tuesday = "Tisdag";
const hamburger = "Hamburgare";
const beBack = "I'll be back";
console.log(tuesday.substring(0, 3));
console.log(hamburger.substring(3));
console.log(beBack.substring(5));

/**
 * Uppgift 3
 * =========
 */

const learning = "It's Learning".substring(5).toUpperCase();
const goodParts = "JavaScript: The Good Parts".substring(16).toLowerCase();
console.log(learning);
console.log(goodParts);

/**
 * Uppgift 4
 * =========
 */

var numbers = [128, 256, 512, 1024, 2048];
let sumOfNumbers = 0;

numbers.forEach( num => {
    sumOfNumbers += num;
})

console.log(sumOfNumbers); //Uppgift 4.1
const avgNumber = sumOfNumbers / numbers.length;
console.log(avgNumber); //Uppgift 4.2

var numbers2 = [128, 256, 512, 1024, 2048, 32];
sumOfNumbers = 0;

numbers2.forEach( num => {
    sumOfNumbers += num;
})

console.log(sumOfNumbers); //Uppgift 4.3

/**
 * Uppgift 5
 * =========
 */
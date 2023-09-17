"use strict";

/* Dag Fredriksson och da281a */
/**
 * Uppgift 1
 * =========
 */

console.log = (...e) => {for(var i=0;i<e.length;i++)
{document.getElementById("log").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br />"}};
var customLogTask1_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask1_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask1_3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask1_4 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.4").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask1_5 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.5").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

customLogTask1_1(5 * 2 <= 12);
customLogTask1_2(55 > 22);
customLogTask1_3(16 / 4 == 4);
customLogTask1_4(8 + 2 < 128);
customLogTask1_5(32 * 8 != 255);

/**
 * Uppgift 2
 * =========
 */

var customLogTask2_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task2.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i])}};
var customLogTask2_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task2.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i])}};
var customLogTask2_3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task2.3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i])}};
const tuesday = "Tisdag";
const hamburger = "Hamburgare";
const beBack = "I'll be back";
customLogTask2_1(tuesday.substring(0, 3));
customLogTask2_2(hamburger.substring(3));
customLogTask2_3(beBack.substring(5));

/**
 * Uppgift 3
 * =========
 */

var customLogTask3_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task3.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br /><br />"}};
var customLogTask3_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task3.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br /><br />"}};
const learning = "It's Learning".substring(5).toUpperCase();
const goodParts = "JavaScript: The Good Parts".substring(16).toLowerCase();
customLogTask3_1(learning);
customLogTask3_2(goodParts);

/**
 * Uppgift 4
 * =========
 */

var customLogTask4_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task4.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask4_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task4.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask4_3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task4.3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var numbers = [128, 256, 512, 1024, 2048];
let sumOfNumbers = 0;

numbers.forEach( num => {
    sumOfNumbers += num;
})

customLogTask4_1(sumOfNumbers); 

const avgNumber = sumOfNumbers / numbers.length;
customLogTask4_2(avgNumber); 

numbers.push(sumOfNumbers);
customLogTask4_3(numbers); 

/**
 * Uppgift 5
 * =========
 */
var customLogTask5_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task5.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask5_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task5.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

var countries = ["Sweden", "Denmark", "Finland", "Norway"];
customLogTask5_1(countries[1].substring(0, 3)); 

var amountOfcountries = countries.length;
var amountOfcountryLetters = "";
countries.forEach( countryLetters => {
    amountOfcountryLetters += countryLetters;
});
customLogTask5_2(amountOfcountryLetters.length / amountOfcountries); 

/**
 * Uppgift 6
 * =========
 */
var customLogTask6_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task6.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

var values = [3, 5, "Jane", true, 144, false];
const reversedOrder = values.reverse();
customLogTask6_1(reversedOrder); 

/**
 * Uppgift 7
 * =========
 */
var customLogTask7_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task7.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];
var multipleArrays = [].concat(names, ages, hasPet);
customLogTask7_1(multipleArrays); 

/**
 * Uppgift 8
 * =========
 */
var customLogTask8_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task8.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

var actors = ["Sherlock", "Watson", "Bo"];

customLogTask8_1(actors.join(' - ')); 

/**
 * Uppgift 9
 * =========
 */
var customLogTask9_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task9.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask9_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task9.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask9_3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task9.3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

var amount = 49; // Less then 50!

if (amount < 50) {
    customLogTask9_1("Less then 50!")
} else if (amount >= 50 && amount < 65) {
    customLogTask9_1("Optimal range for the amount!") 
} else {
    customLogTask9_1("Too much!")
}

var amount = "50"; // Optimal range for the amount!

if (amount < 50) {
    customLogTask9_2("Less then 50!")
} else if (amount >= 50 && amount < 65) {
    customLogTask9_2("Optimal range for the amount!") 
} else {
    customLogTask9_2("Too much!")
}

var amount = "65"; // Too much!

if (amount < 50) {
    customLogTask9_3("Less then 50!")
} else if (amount >= 50 && amount < 65) {
    customLogTask9_3("Optimal range for the amount!") 
} else {
    customLogTask9_3("Too much!")
}

/**
 * Uppgift 10
 * =========
 */
var customLogTask10_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task10.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

const hash = '#';
let str = '';
for (let i = 0; i < 8; i++) {
    var increasesTheHash = (str += hash);
    customLogTask10_1(increasesTheHash + "<br>");
}
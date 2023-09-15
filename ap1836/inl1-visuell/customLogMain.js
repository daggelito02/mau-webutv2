"use strict";

/* Dag Fredriksson och da281a */
/**
 * Uppgift 1
 * =========
 */

console.log = (...e) => {for(var i=0;i<e.length;i++)
{document.getElementById("log").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br />"}};
var customLogTask1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br />"}};

customLogTask1(5 * 2 <= 12);
customLogTask1(55 > 22);
customLogTask1(16 / 4 == 4);
customLogTask1(8 + 2 < 128);
customLogTask1(32 * 8 != 255);

/**
 * Uppgift 2
 * =========
 */

var customLogTask2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br />"}};
const tuesday = "Tisdag";
const hamburger = "Hamburgare";
const beBack = "I'll be back";
customLogTask2(tuesday.substring(0, 3));
customLogTask2(hamburger.substring(3));
customLogTask2(beBack.substring(5));

/**
 * Uppgift 3
 * =========
 */

var customLogTask3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br /><br />"}};
const learning = "It's Learning".substring(5).toUpperCase();
const goodParts = "JavaScript: The Good Parts".substring(16).toLowerCase();
customLogTask3(learning);
customLogTask3(goodParts);

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

customLogTask4_1(sumOfNumbers); //Uppgift 4.1
const avgNumber = sumOfNumbers / numbers.length;
customLogTask4_2(avgNumber); //Uppgift 4.2

var numbers2 = [128, 256, 512, 1024, 2048, 32];
sumOfNumbers = 0;

numbers2.forEach( num => {
    sumOfNumbers += num;
})

customLogTask4_3(sumOfNumbers); //Uppgift 4.3

/**
 * Uppgift 5
 * =========
 */
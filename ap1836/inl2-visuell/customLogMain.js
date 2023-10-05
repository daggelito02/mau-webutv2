// "use strict";

// /* Dag Fredriksson och da281a */
// /**
//  * Uppgift 1
//  * =========
//  */

console.log = (...e) => {for(var i=0;i<e.length;i++)
{document.getElementById("log").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br />"}};
var customLogTask1_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask1_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask1_3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask1_4 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task1.4").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

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

customLogTask1_1(max(5, 10));
customLogTask1_2(max(7, 7));
customLogTask1_3(min(12, 25));
customLogTask1_4(min(30, 18));

// /**
//  * Uppgift 2
//  * =========
//  */

var customLogTask2_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task2.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i])}};

const range = function(n = null) {
    let rangeArray = [];
    for (let i = 0; i < n; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
} 
customLogTask2_1(range(10));

// /**
//  * Uppgift 3
//  * =========
//  */

var customLogTask3_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task3.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br /><br />"}};
var customLogTask3_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task3.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br /><br />"}};
var customLogTask3_3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task3.3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + "<br /><br />"}};

const sum = function(numbersArray = null) {
    let sumOfnumbersArray = 0;
    numbersArray.forEach( numbers => {
        sumOfnumbersArray += numbers;
    });
    return sumOfnumbersArray;
} 

var numbers = [5, 10, 15, 20, 25];
var numbers2 = [7, 10, 19, 20, 25];
var numbers3 = [5, -10, 15, 20, 25];
customLogTask3_1(sum(numbers));  
customLogTask3_2(sum(numbers2)); 
customLogTask3_3(sum(numbers3)); 

// /**
//  * Uppgift 4
//  * =========
//  */

var customLogTask4_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task4.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask4_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task4.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask4_3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task4.3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

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

customLogTask4_1(countCharacter(testString1, "e"));
customLogTask4_2(countCharacter(testString2, "a")); 

// /**
//  * Uppgift 5
//  * =========
//  */
var customLogTask5_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task5.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask5_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task5.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

const palindrome = function(TextToTest = "") {
    var reversedText = TextToTest.split('').reverse().join('')
    if (reversedText == TextToTest) {
        return true;
    } else {
        return false;
    }
}

customLogTask5_1(palindrome("sirap - paris"));
customLogTask5_2(palindrome("lorem ipsum")); 

// /**
//  * Uppgift 6
//  * =========
//  */
var customLogTask6_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task6.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

const person = {
    firstName: 'Carolin',
    lastName: 'Falk',
    age: 49,
    family: ['Mamma', 'Pappa', 'Barn']
};

customLogTask6_1(person); 

// /**
//  * Uppgift 7
//  * =========
//  */
var customLogTask7_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task7.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

const agent007 = {
    firstName: 'James',
    lastName: 'Bond',
    age: 42,
    family: ['M', 'Q', 'Miss Moneypenny']
};
function printPerson(personOject) {
    console.log(
    'Fullname:', personOject.firstName, personOject.lastName,
    'Age:', personOject.age,
    'Family:', personOject.family[0]+',', personOject.family[1]+',', personOject.family[2]);
}

customLogTask7_1(agent007); 

// /**
//  * Uppgift 8
//  * =========
//  */
var customLogTask8_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task8.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask8_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task8.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

function createBox(height = 0, width = 0) {
    var obj = {
        height:  height,
        width: width
    };
    return obj;
} 

var box = createBox(15, 20);

customLogTask8_1(box.height); 
customLogTask8_2(box.width); 

// /**
//  * Uppgift 9
//  * =========
//  */
var customLogTask9_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task9.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask9_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task9.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask9_3 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task9.3").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

function Triangle(height = 0, base = 0) {
    var obj = {
        height: height,
        width: base,
        area: function() {
            return this.height * this.width / 2;
          }
    };
    return obj;
} 

 var tri = Triangle(12, 14);

customLogTask9_1(tri.height);
customLogTask9_2(tri.width);
customLogTask9_3(tri.area());

// /**
//  * Uppgift 10
//  * =========
//  */
var customLogTask10_1 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task10.1").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};
var customLogTask10_2 = (...e) => {for(var i=0;i<e.length;i++){document.getElementById("task10.2").innerHTML += (typeof(e[i]) == "object" ? JSON.stringify(e[i]):e[i]) + ""}};

function attributes(objecAttr = null) {
    let arrayOfObjectAttributs = [];
    for (const attribute in objecAttr) {
        arrayOfObjectAttributs.push(attribute);
      }
    return arrayOfObjectAttributs;
} 

var testObject1 = {
    width: 15,
    height: 20
};

var attrsFromObject1 = attributes(testObject1);
customLogTask10_1(attrsFromObject1);

var testObject2 = {
    a: 1,
    b: 2,
    c: 3
};

var attrsFromObject2 = attributes(testObject2);
customLogTask10_2(attrsFromObject2);
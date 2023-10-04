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

console.log('Uppgift 1.1: max(5, 10) =', max(5, 10));
console.log('Uppgift 1.2: min(12, 24) =', min(12, 24))

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

//var testArray = range(10);
console.log('Uppgift 2: testArray(10) =', range(10));

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
console.log('Uppgift 3: numbers = [5, -10, 15, 20, 25], sum(numbers) =', sum(numbers));

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

console.log('Uppgift 4.1: countCharacter(Jane Doe, "e") =', countCharacter("Jane Doe", "e")); // => 2
console.log('Uppgift 4.2: countCharacter(Abracadabra, "a") =', countCharacter("Abracadabra", "a")); // => 4 (obs. litet "a")
console.log('Uppgift 4.3: countCharacter(Don Giorno, "o") =', countCharacter("Don Giorno", "o")); // => 3
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

console.log('Uppgift 5.1: palindrome("sirap - paris") =', palindrome("sirap - paris")); // skickar tillbaka "true"
console.log('Uppgift 5.2 palindrome("lorem ipsum") =', palindrome("lorem ipsum")); // skickar tillbaka "false"

/**
 * Uppgift 6
 * =========
 */
const person = {
    firstName: 'Carolin',
    lastName: 'Falk',
    age: 49,
    family: ['Mamma', 'Pappa', 'Barn']
};

console.log('Uppgift 6: the object person', person);

/**
 * Uppgift 7
 * =========
 */
const agent007 = {
    firstName: 'James',
    lastName: 'Bond',
    age: 42,
    family: ['M', 'Q', 'Miss Moneypenny']
};
function printPerson(personOject) {
    console.log('Uppgift 7: printPerson(agent007):\n\n',
    'Fullname:', personOject.firstName, personOject.lastName,'\n', 
    'Age:', personOject.age, '\n',
    'Family:', personOject.family[0]+',', personOject.family[1]+',', personOject.family[2]);
}
printPerson(agent007);

/**
 * Uppgift 8
 * =========
 */
function createBox(height = 0, width = 0) {
    var obj = {
        height:  height,
        width: width
    };
    return obj;
} 

var box = createBox(15, 20);
console.log('Uppgift 8.1: var box = createBox(15, 20) console.log(box.height) =', box.height); // skickar tillbaka 15
console.log('Uppgift 8.2: var box = createBox(15, 20) console.log(box.width) =', box.width); // skickar tillbaka 20

/**
 * Uppgift 9
 * =========
 */
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

console.log('Uppgift 9.1: var tri = Triangle(12, 14) console.log(tri.height) =', tri.height); // skickar tillbaka 12
console.log('Uppgift 9.2: var tri = Triangle(12, 14) console.log(tri.width) =', tri.width); // skickar tillbaka 14
console.log('Uppgift 9.3: var tri = Triangle(12, 14) console.log(tri.area()) =', tri.area()); // skickar tillbaka 84

/**
 * Uppgift 10
 * =========
 */
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
console.log('Uppgift 10.1: var attrsFromObject1 = attributes(testObject1) \n console.log(attrsFromObject1) =', attrsFromObject1); // skickar tillbaka ["width", "height"]

var testObject2 = {
    a: 1,
    b: 2,
    c: 3
};



var attrsFromObject2 = attributes(testObject2);
console.log('Uppgift 10.2: var attrsFromObject2 = attributes(testObject2) \n console.log(attrsFromObject1) =', attrsFromObject2); // skickar tillbaka ["a", "b", "c"]

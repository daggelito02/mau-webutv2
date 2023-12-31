// var people = [
//     { firstname: "Jane", lastname: "Doe" },
//     { firstname: "Peter", lastname: "Andrews" },
//     { firstname: "Kirsten", lastname: "Wiig" }
// ];

// till följande array:
// ["Jane Doe", "Peter Andrews", "Kirsten Wiig"]

// Vår funktion som bearbetar datan på det vis vi vill
function convertToNames(data) {
    // Vi skapar en tom array för att sedan fylla denna med namn
    var names = [];
    // Gå igenom alla objekt och lägg till namnen i vår tomma array
    for (var i = 0; i < data.length; i++) {
        names.push(data[i].firstname + " " + data[i].lastname);
    }
    // Skicka tillbaka alla namn
    return names;
}

var people = [
    { firstname: "Jane", lastname: "Doe" },
    { firstname: "Peter", lastname: "Andrews" },
    { firstname: "Kirsten", lastname: "Wiig" }
];

// Nu innehåller variabeln "result":
// ["Jane Doe", "Peter Andrews", "Kirsten Wiig"]
var result = convertToNames(people);
console.log('result: ', result);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Exempel 2
var numbers = [1, 2, 3, 4, 5];

// "map" tar emot en funktion, som i sin tur tar emot
// varje element från en array. Det som skickas tillbaka
// från denna funktionen är det som sparas i den nya arrayen
var doubled = numbers.map(function(number) {
    return number * 2;
});

// Detta innebär att vi kan avläsa ovanstående som:
// return 1 * 2; => 2
// return 2 * 2; => 4
// return 3 * 2; => 6
// ...

// doubled => [2, 4, 6, 8, 10]
console.log('doubled: ', doubled);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Exempel 3

var people = [
    { firstname: "Jane", lastname: "Doe" },
    { firstname: "Peter", lastname: "Andrews" },
    { firstname: "Kirsten", lastname: "Wiig" }
];

// Slå ihop attributen firstname och lastname till en sträng
var names = people.map(function(person) {
    return person.firstname + " " + person.lastname;
});

console.log('names: ', names);
// => ["Jane Doe", "Peter Andrews", "Kirsten Wiig"]

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Exempel 4

var animals = [
    { type: "Dog", age: 3 },
    { type: "Cat", age: 5 },
    { type: "Dog", age: 8 },
    { type: "Turtle", age: 12 },
    { type: "Dog", age: 2 }
];

// Vi kontrollerar om attributet "type" är lika med "Dog"
// Om så är fallet kommer vår funktion att returnera
// "true" och då sparas vårt resultat
var dogs = animals.filter(function(animal) {
    return animal.type == "Dog";
});

console.log('dogs: ', dogs);
// dogs =>
// [
//     { type: "Dog", age: 3 },
//     { type: "Dog", age: 8 },
//     { type: "Dog", age: 2 }
// ]

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Exempel 5

var people = [
    { firstname: "Jane", lastname: "Doe", age: 31 },
    { firstname: "Peter", lastname: "Andrews", age: 29 },
    { firstname: "Kirsten", lastname: "Wiig", age: 38 },
    { firstname: "Michael", lastname: "Higgins", age: 25 },
    { firstname: "Eliza", lastname: "Thomson", age: 41 }
];

var names = people
    .filter(function(person) {
        return person.age > 30;
    })
    .map(function(person) {
        return person.firstname + " " + person.lastname;
    });

console.log('names kombo: ', names);
// => ["Jane Doe", "Kirsten Wiig", "Eliza Thomson"]

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Övning 1

var names = [
    "Andrew",
    "Peter",
    "Eliza",
    "Kirsten",
    "Jeanette"
];


toUpper = function(bigLetters){ 
    return bigLetters.toUpperCase();
  };
  upperNames = names.map(toUpper);
  console.log('Övning 1: ', upperNames);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Övning 2

var triangles = [
    { width: 12, height: 22 },
    { width: 21, height: 12 },
    { width: 35, height: 49 },
    { width: 12, height: 50 },
    { width: 20, height: 35 }
];
console.log('triangles: ', triangles);

var trianglesResult = triangles
.map(function(triangles) {

    let areaResult= triangles.width * triangles.height;
    triangles.area = areaResult;
    let width = "width: " + triangles.width;
    let height = "height: " + triangles.height;
    let area = "area: " + triangles.area;
    
    return width + " " + height + " " + area;
})

 console.log('Övning 2: ', trianglesResult);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Övning 3

var movies = [
    { title: "Batman Begins", year: 2005 },
    { title: "Batman", year: 1989 },
    { title: "Batman Returns", year: 1992 },
    { title: "Batman Forever", year: 1995 },
    { title: "Batman & Robin", year: 1997 },
    { title: "Batman: Under the Red Hood", year: 2010 },
    { title: "Batman: The Dark Knight Returns, Part 1", year: 2012 },
    { title: "Batman: Mask of the Phantasm", year: 1993 },
    { title: "Batman: The Movie", year: 1966 },
    { title: "Batman: The Dark Knight Returns, Part 2", year: 2013 }
];

var movierFromThe90 = movies
    .filter(function(period) {
        return period.year > 1989 && period.year < 2000;
    })
    .map(function(period) {
        return period.title + " " + period.year;
    });

console.log('Övning 3: ', movierFromThe90);


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Övning 4

var movies = [
    { title: "Batman Begins", year: 2005 },
    { title: "Batman", year: 1989 },
    { title: "Batman Returns", year: 1992 },
    { title: "Batman Forever", year: 1995 },
    { title: "Batman & Robin", year: 1997 },
    { title: "Batman: Under the Red Hood", year: 2010 },
    { title: "Batman: The Dark Knight Returns, Part 1", year: 2012 },
    { title: "Batman: Mask of the Phantasm", year: 1993 },
    { title: "Batman: The Movie", year: 1966 },
    { title: "Batman: The Dark Knight Returns, Part 2", year: 2013 }
];

var movierReleased2000 = movies
    .filter(function(period) {
        return period.year >= 2000;
    })
    .map(function(period) {
        return period.title;
    });

console.log('Övning 4: ', movierReleased2000);


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Övning 5

// Filtrera och transformera resultatet till en array 
// innehållande endast alla id på de tasks som är avklarade och hade hög prioritet.

var data = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

var highId = data.tasks
    .filter(function(priorityFilter) {
        return priorityFilter.complete == true && priorityFilter.priority == "High"; 
    })
    .map(function(priorityFilter) {

        triangles.area = priorityFilter;
        return priorityFilter.id;
    });

console.log('Övning 5: ', highId);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Övning 6

// Filtrera och transformera resultatet till en array innehållande objekt med 
// attributet name vars innehåll är title + id (t.ex “Do something (101)”) - där ni 
// endast tar de tasks som inte är avklarade och inte har låg prioritet. 
// Det vill säga [{ name: "Do something (101)" }, ...]

var data = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

var nameData = data.tasks
    .filter(function(priorityFilter) {
        return priorityFilter.complete == false && priorityFilter.priority != "Low"; 
    })
    .map(function(priorityFilter) {

        priorityFilter.name = priorityFilter;
        let = theId = priorityFilter.id;
        let = theTitle = priorityFilter.title; 
        return "name: " + theTitle + "(" + theId + ")";
    });
    
console.log('Övning 6: ', nameData);

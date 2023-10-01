"use strict";

/* Dag Fredriksson och da281a */
/**
 * Uppgift 1
 * =========
 */
var success = document.getElementById("success");
var error = document.getElementById("error");
var info = document.getElementById("info");
var messageBox = document.getElementById("message-box");

success.addEventListener("click",setClass);
error.addEventListener("click",setClass);
info.addEventListener("click",setClass);

function setClass(element) { 
    let addClass = element.target.id; //element is the pointer event, target is the clicked element, id is the id-value of the clicked element
    messageBox.className = addClass;
}

/**
 * Uppgift 2
 * =========
 */
var addButton = document.getElementById("add-item");
addButton.addEventListener("click",addNewListText);

function addNewListText(theListElementName) {
    let addTextToListItem = prompt("Add a new text to the list");
    if (addTextToListItem) {
        let li = document.createElement("li");
        let theListName = theListElementName.target.dataset.list;
        let listItems = document.getElementById(theListName);
        li.appendChild(document.createTextNode(addTextToListItem));
        listItems.appendChild(li);
    }
}

/**
 * Uppgift 3
 * =========
 */
var addButton2 = document.getElementById("add-item2");
var listItems2 = document.getElementById("items2");
var removeButton = document.getElementById("remove-item");
addButton2.addEventListener("click",addNewListText);
removeButton.addEventListener("click",removeListText);

function removeListText() {
    if (listItems2.lastElementChild) {
        listItems2.removeChild(listItems2.lastElementChild);
    }
}

/**
 * Uppgift 4
 * =========
 */
// Hämta alla knappar
var buttons = document.getElementsByClassName("remove-list-item");
// Gå igenom alla knappar och lägg till ett klick-event
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const itemText = this.parentElement.innerText;
        if (confirm("Do you really want to remove " + itemText.substring(12).slice(0,-1))) {
            this.parentElement.remove();
        }
    });
}

/**
 * Uppgift 5, del 1 & del 2
 * =========
 */
var form = document.getElementById("apply-for-pet");

form.addEventListener("submit", function(event) {

    /**
     * Del 1 skriv ut formulärvärden i konsolen
     * =========
     */
    event.preventDefault(); 
    var formdata = [];
    for ( var i = 0; i < this.elements.length -1; i++) { 
        var e = this.elements[i];
        if (e.name != "pet")  
        {
            formdata.push(e.name + " = " + e.value);

        } else if (e.checked) {
            formdata.push(e.name + " = " + e.value);
        }
    }
    console.log(formdata.join("\n"));

    /**
     * Del 2 validera formulär
     * =========
     */
    // Förnamn - får endast innehålla 0 till 50 bokstäver
    // Efternamn - får endast innehålla 0 till 50 bokstäver
    // Ålder - måste vara en siffra (number) och vara mer än 0
    // Epost - får endast innehålla 0 till 50 bokstäver
    // Husdjur - ett husdjur måste vara valt
    let validateFeedback = "passed";
    if (this.elements.firstname.value.length > 50 ) {
        validateFeedback = "Firstname: \"" + this.elements.firstname.value + 
        "\" can only contain 0 to 50 characters!";
    } 
    else if (this.elements.lastname.value.length > 50) {
        validateFeedback = "Lastname: \"" + this.elements.lastname.value + 
        "\" can only contain 0 to 50 characters!";
    }
    else if (isNaN(this.elements.age.value)) {
        validateFeedback = "Age: \"" + this.elements.age.value + 
        "\" must be a number!";
    }
    else if (this.elements.age.value == 0) {
        validateFeedback = "Age: \"" + this.elements.age.value + 
        "\" must greater than 0!";
    } 
    else if (this.elements.email.value.length > 50) {
        validateFeedback = "Email: \"" + this.elements.email.value + 
        "\" can only contain 0 to 50 characters!";
    }
    else if (this.elements.pet.value.length == 0) {
        validateFeedback = "At least one pet needs to be selected!";
    } 
    else {
        // Ta bort commentaren
        event.target.submit();
    }

    if(validateFeedback != "passed") {
        alert(validateFeedback);
    }
});
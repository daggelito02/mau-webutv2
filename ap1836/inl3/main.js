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
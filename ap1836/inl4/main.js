"use strict";

/* Dag Fredriksson och da281a */
/**
 * Sök IMDB API
 * =========
 */
// Variabler
var myApiKey = "41059430";
var formElem = document.getElementById("search-form");
var query;
var baseUrl = "https://www.omdbapi.com/"
var result = document.getElementById("result");

formElem.addEventListener("submit", function(event) {
    event.preventDefault(); 
    query = formElem.query.value;
    console.log('movieTitle: ', query);
    if (query == null || query == "") {
        //requestNewMovies();
        result.innerHTML = "<div class='info'>Fyll i en titel</div>";
    } else {
        requestNewMovies();
    }

});

// Ajax-begäran av nya bilder
function requestNewMovies() {
	result.innerHTML = "<div class='loader'></div>";
	let request = new XMLHttpRequest(); // Object för Ajax-anropet
	request.open("GET",baseUrl + "?apikey=" + myApiKey + "&s=" + query + "&type=movie");
	request.send(null); // Skicka begäran till servern
	request.onreadystatechange = function () { // Funktion för att avläsa status i kommunikationen
		if (request.readyState == 4)
			if (request.status == 200) newMovie(request.responseText);
			else feedbakInformation.innerHTML = "Den begärda resursen finns inte.";
	};
} 

function newMovie(response) {
	response = JSON.parse(response);
    let HTMLcode = "";	
    //console.log('response: ', response.Response);
    //console.log('response: ', response.Error);

    if (response.Response == "True") {	
        HTMLcode += "<div class='movieGrid'>";
        for (let i = 0; i < response.Search.length; i++) {
            let movieTitle = response.Search[i].Title;
            let movieYear = response.Search[i].Year;
            let moviePoster = response.Search[i].Poster;
            if (moviePoster == "N/A") {
                moviePoster = "img_na.png";
            }
            console.log('movieTitle: ', movieTitle);

            HTMLcode += "<div class='movieContainer'>";
            HTMLcode += "<h4>" + movieTitle + "</h4>";
            HTMLcode += "<p>" + movieYear + "</p>";
            HTMLcode += "<img src=" + moviePoster + " class='poster'/>";
            HTMLcode += "</div>";
            
        }
        HTMLcode += "</div>";
        setTimeout(() => {
            result.innerHTML = HTMLcode;
        }, "500");

    } else if (response.Response == "False") {
        let errorMessage;
        switch(response.Error) {
            case "Movie not found!":
                errorMessage = "Ingen filmtitel hittades med filmtiteln \"" + query + "\"!"
              break;
            case "Too many results.":
                errorMessage = "För stort resultat, pröva att söka mer specifikt."
              break;
            default:
                errorMessage = response.Error;
          }
        result.innerHTML = "<div class='info info--error'>" + errorMessage + "</div>";
    }
} 
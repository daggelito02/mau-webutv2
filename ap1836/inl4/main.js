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
    if (query == null || query == "") {
        result.innerHTML = "<div class='info'>Fyll i en titel</div>";
    } else {
        requestNewMovies();
    }

});

function requestNewMovies() {
	result.innerHTML = "<div class='loader'></div>"; // Förutom loader indikator, ersätty listan.
	let request = new XMLHttpRequest();
	request.open("GET",baseUrl + "?apikey=" + myApiKey + "&s=" + query + "&type=movie");
	request.send(null); 
	request.onreadystatechange = function () { // Funktion för att avläsa status i kommunikationen
		if (request.readyState == 4)
			if (request.status == 200) newMovie(request.responseText);
			else feedbakInformation.innerHTML = "Den begärda resursen finns inte.";
	};
} 

function newMovie(response) {
	response = JSON.parse(response);
    let HTMLcode = ""; // Nollställ listans html.

    if (response.Response == "True") {	
        HTMLcode += "<div class='movieGrid'>";
        for (let i = 0; i < response.Search.length; i++) {
            let movieTitle = response.Search[i].Title;
            let movieYear = response.Search[i].Year;
            let moviePoster = response.Search[i].Poster;
            if (moviePoster == "N/A") {
                moviePoster = "img_na.png"; // Platshållare, om poster saknas.
            }

            HTMLcode += "<div class='movieContainer'>";
            HTMLcode += "<h4>" + movieTitle + "</h4>";
            HTMLcode += "<p>" + movieYear + "</p>";
            HTMLcode += "<img src=" + moviePoster + " class='poster'/>";
            HTMLcode += "</div>";
            
        }
        HTMLcode += "</div>";
        setTimeout(() => { // Visa laddaren i mins en halv sekund
            result.innerHTML = HTMLcode;
            window.scrollTo(0, 235); // Sätt lista i mer focus
        }, "500");

    } else if (response.Response == "False") { // Hantera response meddelanden
        let errorMessage;
        switch(response.Error) {
            case "Movie not found!":
                errorMessage = "Ingen filmtitel hittades med namnet \"" + query + "\"!"
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
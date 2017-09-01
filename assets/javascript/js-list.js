
// Grabs user input, checks if spelt correctly, post on list
$("#add-to-list").on("click", function() {
	event.preventDefault();
	var userPlanet = $("#list-adder").val().trim();

	userEntry = checkPlanet(userPlanet);
	console.log(userEntry);
	if ( userEntry == "wrong" ) {
		alert('You entered "' + userPlanet + '".\nHow about checking the spelling and try again.');     // Here
	}
	else if ( userEntry == "pluto" ) {
		alert("Sorry, Pluto is no longer considered a planet.");
	} else {
		$(".planet-list").append("<li>" + userEntry + "</li>");
	}
	
	$("#list-adder").val("");
});

// Removes list item user selects
$("#remove-from-list").on("click", function() {
	event.preventDefault();
	var item = $("#remove-item").val().trim();
	item = item - 1;

	$("li").eq(item).remove();

	$("#remove-item").val("");

});
	
// Checks user input and returns capitalized planet 
function checkPlanet(userSelect) {
	var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
	var correct = 0;
	for ( i=0 ; i<planets.length ; i++ ) {
		if ( userSelect.toLowerCase() == planets[i].toLowerCase() ) {
			if ( planets[i].toLowerCase().localeCompare(userSelect.toLowerCase()) == "0" ) {
				correct++;
				match = planets[i];
			}
		}
	}
	if ( correct == 1 ) {
		return match;
	}
	else if ( userSelect.toLowerCase() == "pluto" ) {
		return "pluto";
	} else {
		return "wrong";
	}	
};
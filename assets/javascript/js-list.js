
// Grabs user input, checks if spelt correctly, post on list
$("#add-to-list").on("click", function() {
	event.preventDefault();
	var userPlanet = $("#list-adder").val().trim();

	userEntry = checkPlanet(userPlanet);

	if ( userEntry == "wrong" ) {
		alert('You entered "' + userPlanet + '".\nYou should check the spelling and try again.');
	} else {
		$(".planet-list").append("<li>" + userEntry + "</li>");
	}
});

// Removes list item user selects
$("#remove-from-list").on("click", function() {
	event.preventDefault();
	var item = $("#remove-item").val().trim();
	item = item - 1;

	$("li").eq(item).remove();
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
	} else {
		return "wrong";
	}	
};
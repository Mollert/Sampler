
// At the click-capture the city and id and use it to get the weather via API
$(".weather-pulldown").change(function() {
	var city = $(this).find("option:selected").val();
	var cityID = $(this).find("option:selected").attr("id");

	var weatherKey = "76133c3040e5f58469882b342b5116eb";

	var search = "http://api.openweathermap.org/data/2.5/forecast?id="
				 + cityID + "&units=imperial&APPID=" + weatherKey;

	$.ajax({
		url: search,
		method: "GET"
		})
		.done(function(response) {
			var results = response.list[0];
			var temp = results.main.temp;
			var skies = results.weather[0].description;
			var icon = results.weather[0].icon;
			var windDirection = windDegree(results.wind.deg);
			var windSpeed = results.wind.speed;

			loadModal(city, icon, skies, temp, windDirection, windSpeed);
	});
});

// Translates dregrees into directions for the wind
function windDegree(degree) {
	switch (true) {
		case (degree >= 337.5 && degree < 22.5 ):
			direction = "East";
			break;
		case (degree >= 22.5 && degree < 67.5 ):
			direction = "North East";
			break;
		case (degree >= 67.5 && degree < 112.5 ):
			direction = "North";
			break;
		case (degree >= 112.5 && degree < 157.5 ):
			direction = "North West";
			break;
		case (degree >= 157.5 && degree < 202.5 ):
			direction = "West";
			break;
		case (degree >= 202.5 && degree < 247.5 ):
//			console.log("made it this far");
			direction = "South West";
			break;
		case (degree >= 247.5 && degree < 292.5 ):
			direction = "South";
			break;
		case (degree >= 292.5 && degree < 337.5 ):
			direction = "South East";
			break;
		default: direction = '"Unavailable"';															
	}
	return direction;
};

// Loads up the Modal with current attributes then shows the Modal
function loadModal(city, icon, skies, temp, windDirection, windSpeed) {
  $(".where").text(city);
  $("#looksLike").attr("src", "./assets/image/weather/" + icon + ".png");
  $(".pressSky").text(skies);
  $(".cityTemp").text(temp);
  $(".windDir").text(windDirection);
  $(".windSp").text(windSpeed);  
  $("#localWeather").modal('show');
};
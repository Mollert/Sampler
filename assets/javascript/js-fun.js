
// Makes the box taller
$("#make-taller").on("click", function() {
	var height = $("#box").height();
	height = height + 10;
	if (height > 150) {
		height = 90;
	}
	$("#box").height(height);
});

// Makes the box wider
$("#make-wider").on("click", function() {
	var width = $("#box").width();
	width = width + 10;
	if (width > 300) {
		width = 90;
	}
	$("#box").width(width);
});

// Changes the box color
$("#change-color").on("click", function() {
	var color = ["red", "green", "blue", "orange", "yellow", "cyan"];	
	var colorNum = Math.floor(Math.random() * 6);
	$("#box").css("background-color", color[colorNum]);
});

// The box fades out to almost way
$("#fade-out").on("click", function() {
	var opacity = $("#box").css("opacity");
	opacity = opacity - 0.1;
	if (opacity <= 0.1) {
		opacity = 1.0;
	}
	$("#box").css("opacity", opacity);
});

//  The box fades in to full bloom
$("#fade-in").on("click", function() {
	var opacity = $("#box").css("opacity");
	var op = parseFloat(opacity)
	if (op <= 1.0) {
		opacity = op + 0.1;
	}
	$("#box").css("opacity", opacity);
});

//  Box slides up
$("#slide-up").on("click", function() {
	$("#box").slideUp(1000);
});

//  Box slides down
$("#slide-down").on("click", function() {
	$("#box").slideDown("slow");
});

//  Button changes image and starts the audio associated to the image
$("#make-sound").on("click", function() {
	var existing = $("#sound-image").attr("src");
	var picSound = ["albumCover", "applause", "car", "dog", "elephant", "phoneRing"];	
	var whichOne = Math.floor(Math.random() * 6);
	while (existing == ("./assets/image/" + picSound[whichOne] + ".png")) {
		whichOne = Math.floor(Math.random() * 6);
	}
	$("#sound-image").attr("src", "./assets/image/" + picSound[whichOne] + ".png");
	$("#sound").attr("src", "./assets/audio/" + picSound[whichOne] + ".mp3");	
	$("#sound").get(0).play();
});
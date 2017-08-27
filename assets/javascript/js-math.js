
// This function makes sure the entry is a number
function checkNumber(num) {
	if (num % 1 != 0) {
		alert("You entered " + num + " as a number\nOnly enter whole numbers between 0 and 99");
		mathReset();
		return false;
	}
	return true;
};

// This function makes sure the entry is one of four operators
function checkOperator(oper) {
	if ((oper == "+") || (oper == "-") || (oper == "x") || (oper == "/")) {	
	}
	else {
		alert("You entered " + oper +  " as an operator\nOnly enter one of the four operators shown");
		mathReset();
		return false;
	}
	return true;
};

// This fuction preforms the calcualtion
function mathOperation(operator, oneNum, twoNum) {
	if (operator === "+") {
		oneN = parseInt(oneNum);
		twoN = parseInt(twoNum);
		return answer = oneN + twoN;
	}
	else if (operator === "-") {
		return answer = oneNum - twoNum;
	}
	else if (operator === "x") {
		return answer = oneNum * twoNum;
	}
	else if (operator === "/") {
		return answer = oneNum / twoNum;
	}
	else {
		alert("Something went wrong.  I'm going to reset.");
		mathReset();
	}	
};

// This function checks if you are trying to divide by 0
function checkCalculation(frstNum, oper, scndNum) {
	if ((frstNum == 0) || (scndNum == 0)) {
		if (oper == "/") {
			alert('You entered "/" as an operator\nThat will yield undefined as an answer\nEnter either a different whole number and/or a differnt operator');
			mathReset();
			return false;
		}
	}
	return true;
};

// Reset values for math calculation
function mathReset() {
	$("#number1").val("");
	$("#operator1").val("");
	$("#number2").val("");
	$("#operator2").val("");
	$("#number3").val("");
	$("#math-answer").html("Answer Here");
};

// Checks entered numbers and operators for continuity and then preforms opperation
$("#math-submit").on("click", function() {
	event.preventDefault();

	var firstNum = $("#number1").val().trim();
	var firstOp = $("#operator1").val().trim();
	var secondNum = $("#number2").val().trim();
	var secondOp = $("#operator2").val().trim();
	var thirdNum = $("#number3").val().trim();

	var checkNum1 = false;
	var checkOp1 = false;
	var checkNum2 = false;
	var checkOp2 =  false;
	var checkNum3 = false;

	var answer = 0;

	var checkCal1 = false;
	var checkCal2 = false;

// This checks if inputs were left blank.  If they were it calculates what it can
	if ((firstNum === "") || (firstOp === "")) {
		checkNum2 = checkNumber(secondNum);
		checkOp2 = checkOperator(secondOp);
		checkNum3 = checkNumber(thirdNum);

		checkCal2 = checkCalculation(secondNum, secondOp, thirdNum);
		answer = mathOperation(secondOp, secondNum, thirdNum);

		if ((checkNum2) && (checkOp2) && (checkNum3) && (checkCal2)) {
			alert("This will only figure the second calculation.\nYou left something out for the first calcualtion.");
			$("#math-answer").html(answer);
		}
	}
	else if ((secondOp === "") || (thirdNum === "")) {
		checkNum1 = checkNumber(firstNum);
		checkOp1 = checkOperator(firstOp);
		checkNum2 = checkNumber(secondNum);

		checkCal1 = checkCalculation(firstNum, firstOp, secondNum);
		answer = mathOperation(firstOp, firstNum, secondNum);

		if ((checkNum1) && (checkOp1) && (checkNum2) && (checkCal1)) {
			alert("This will only figure the first calculation.\nYou left something out for the second calcualtion.");
			$("#math-answer").html(answer);
		}
	}
	else {
		checkNum1 = checkNumber(firstNum);
		checkOp1 = checkOperator(firstOp);
		checkNum2 = checkNumber(secondNum);
		checkOp2 = checkOperator(secondOp);
		checkNum3 = checkNumber(thirdNum);

		checkCal1 = checkCalculation(firstNum, firstOp, secondNum);
		answer = mathOperation(firstOp, firstNum, secondNum);
		checkCal2 = checkCalculation(answer, secondOp, thirdNum);
		answer = mathOperation(secondOp, answer, thirdNum);

		if ((checkNum1) && (checkOp1) && (checkNum2) && (checkOp2) && (checkNum3) && (checkCal1) && (checkCal2)) {
			$("#math-answer").html(answer);
		}
	}
});

// Reset values for Reset button
$("#math-reset").on("click", function() {
	event.preventDefault();
	mathReset();
});
	



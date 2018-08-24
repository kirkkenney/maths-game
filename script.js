window.onload = function randomCascade() {
	var cascade = document.querySelectorAll('.cascade');
	var randomDiv = Math.floor(Math.random() * 101);
	var randomStyle = document.getElementsByClassName("cascade")[randomDiv];
	var accScore = document.getElementById('accScore');
	randomStyle.style.color = "green";
	var i = 0;
	for (i = 0; i < cascade.length; i++) {
		cascade[i].innerHTML = Math.floor(Math.random() * 100);	
	}
	accScore.innerHTML = (score + subtractionScore + multiplicationScore + divisionScore) + " / 40";
	setTimeout(randomCascade, 1000);
}


// ADDITION SCRIPT ADDITION SCRIPT ADDITION SCRIPT ADDITION SCRIPT

var additionSlides = document.getElementById('addition');
var numberOne = document.getElementsByClassName('numberOne')[0];
var numberTwo = document.getElementsByClassName('numberTwo')[0];
var randomOne;
var randomTwo;
var nextSlide = document.getElementsByClassName('nextSlide')[0];
var userInput = document.getElementsByClassName('input')[0];
var checkInput = document.getElementsByClassName('checkAnswer')[0];
var score = 0;
var addCount = 0;
var exitTest = document.getElementsByClassName('exit')[0];
var restart = document.getElementsByClassName('restart')[0];

// Assign random numbers to be calculated
function randomNumbers() {
	document.getElementsByClassName('messages')[0].innerHTML = " ";
	addCount++;
	if (addCount == 11) {
		document.getElementById('finalScore').style.display = "block";
		addCount = 0;
	}
	checkInput.style.display = "block";
	if (userInput.value == randomOne + randomTwo) {
		score++;
		document.getElementById('score').innerHTML = score + " / 10";
	} else {
		document.getElementById('score').innerHTML = score + " / 10";
	}
	randomOne = Math.floor(Math.random() * 101);
	randomTwo = Math.floor(Math.random() * 101);
	numberOne.innerHTML = randomOne;
	numberTwo.innerHTML = randomTwo;
	userInput.value = 0;
	userInput.disabled = false;
}

// Check user input and display a success/error message
function checkAnswer() {
	if (userInput.value == randomOne + randomTwo) {
		document.getElementsByClassName('messages')[0].innerHTML = "Well done!";
		document.getElementById('score').innerHTML = score + " / 10";
	} else {
		document.getElementsByClassName('messages')[0].innerHTML = "The correct answer is " + (randomOne + randomTwo);
		document.getElementById('score').innerHTML = score + " / 10";
	}
	userInput.disabled = true;
	checkInput.style.display = "none";
}

// Show addition test
function showAddition() {
	document.getElementById('additionTest').style.display = "block";
	randomNumbers();
}

// Hide addition test
function hideAddition() {
	document.getElementById('additionTest').style.display = "none";
}

// Restart the test
function additionRestart() {
	score = 0;
	randomNumbers();
	document.getElementById('finalScore').style.display = "none";
}
// Clear input on click event
function clearInput() {
	userInput.value = '';
}

nextSlide.addEventListener("click", randomNumbers);
checkInput.addEventListener("click", checkAnswer);
additionSlides.addEventListener("click", showAddition);
exitTest.addEventListener("click", hideAddition);
restart.addEventListener("click", additionRestart);
userInput.addEventListener("click", clearInput);


// SUBTRACTION SCRIPT SUBTRACTION SCRIPT SUBTRACTION SCRIPT SUBTRACTION SCRIPT

var subtractionSlides = document.getElementById('subtraction');
var subtractionNumberOne = document.getElementsByClassName('numberOne')[1];
var subtractionNumberTwo = document.getElementsByClassName('numberTwo')[1];
var subtractionRandomOne;
var subtractionRandomTwo;
var subtractionNextSlide = document.getElementsByClassName('nextSlide')[1];
var subtractionUserInput = document.getElementsByClassName('input')[1];
var subtractionCheckInput = document.getElementsByClassName('checkAnswer')[1];
var subtractionScore = 0;
var subtractionAddCount = 0;
var subtractionExitTest = document.getElementsByClassName('exit')[1];
var subtractionRestart = document.getElementsByClassName('restart')[1];

// Assign random numbers to be calculated
function subtractionRandomNumbers() {
	document.getElementsByClassName('messages')[1].innerHTML = " ";
	subtractionAddCount++;
	if (subtractionAddCount == 11) {
		document.getElementById('finalSubtractionScore').style.display = "block";
		subtractionAddCount = 0;
	}
	subtractionCheckInput.style.display = "block";
	if (subtractionUserInput.value == subtractionRandomOne - subtractionRandomTwo) {
		subtractionScore++;
		document.getElementById('subtractionScore').innerHTML = subtractionScore + " / 10";
	} else {
		document.getElementById('subtractionScore').innerHTML = subtractionScore + " / 10";
	}
	subtractionRandomOne = Math.floor(Math.random() * 101);
	subtractionRandomTwo = Math.floor(Math.random() * 101);
	subtractionNumberOne.innerHTML = subtractionRandomOne;
	subtractionNumberTwo.innerHTML = subtractionRandomTwo;
	subtractionUserInput.value = 0;
	subtractionUserInput.disabled = false;
}

// Check user input and display a success/error message
function subtractionCheckAnswer() {
	if (subtractionUserInput.value == subtractionRandomOne - subtractionRandomTwo) {
		document.getElementsByClassName('messages')[1].innerHTML = "Well done!";
		document.getElementById('subtractionScore').innerHTML = subtractionScore + " / 10";
	} else {
		document.getElementsByClassName('messages')[1].innerHTML = "The correct answer is " + (subtractionRandomOne - subtractionRandomTwo);
		document.getElementById('subtractionScore').innerHTML = subtractionScore + " / 10";
	}
	subtractionCheckInput.style.display = "none";
	subtractionUserInput.disabled = true;
}

// Show subtraction test
function showSubtraction() {
	document.getElementById('subtractionTest').style.display = "block";
	subtractionRandomNumbers();
}

// Hide subtraction test
function hideSubtraction() {
	document.getElementById('subtractionTest').style.display = "none";
}

// Restart the test
function restartSubtraction() {
	subtractionScore = 0;
	subtractionRandomNumbers();
	document.getElementById('finalSubtractionScore').style.display = "none";
}
// Clear input on click event
function clearSubtractionInput() {
	subtractionUserInput.value = '';
}

subtractionNextSlide.addEventListener("click", subtractionRandomNumbers);
subtractionCheckInput.addEventListener("click", subtractionCheckAnswer);
subtractionSlides.addEventListener("click", showSubtraction);
subtractionExitTest.addEventListener("click", hideSubtraction);
subtractionRestart.addEventListener("click", restartSubtraction);
subtractionUserInput.addEventListener("click", clearSubtractionInput);

// MULTIPLICATION SCRIPT MULTIPLICATION SCRIPT MULTIPLICATION SCRIPT MULTIPLICATION SCRIPT

var multiplySlides = document.getElementById('multiplication');
var multiplicationNumberOne = document.getElementsByClassName('numberOne')[2];
var multiplicationNumberTwo = document.getElementsByClassName('numberTwo')[2];
var multiplicationRandomOne;
var multiplicationRandomTwo;
var multiplicationNextSlide = document.getElementsByClassName('nextSlide')[2];
var multiplicationUserInput = document.getElementsByClassName('input')[2];
var multiplicationCheckInput = document.getElementsByClassName('checkAnswer')[2];
var multiplicationScore = 0;
var multiplicationAddCount = 0;
var multiplicationExitTest = document.getElementsByClassName('exit')[2];
var multiplicationRestart = document.getElementsByClassName('restart')[2];

// Assign random numbers to be calculated
function multiplicationRandomNumbers() {
	document.getElementsByClassName('messages')[2].innerHTML = " ";
	multiplicationAddCount++;
	if (multiplicationAddCount == 11) {
		document.getElementById('finalMultiplyScore').style.display = "block";
		multiplicationAddCount = 0;
	}
	multiplicationCheckInput.style.display = "block";
	if (multiplicationUserInput.value == multiplicationRandomOne * multiplicationRandomTwo) {
		multiplicationScore++;
			if (multiplicationScore >= 10) {
			multiplicationScore = 10;
		}
		document.getElementById('multiplyScore').innerHTML = multiplicationScore + " / 10";
	} else {
		document.getElementById('multiplyScore').innerHTML = multiplicationScore + " / 10";
	}
	multiplicationRandomOne = ((Math.floor(Math.random() * 10))+2)*2;
	multiplicationRandomTwo = ((Math.floor(Math.random() * 10))+3)*2;
	multiplicationNumberOne.innerHTML = multiplicationRandomOne;
	multiplicationNumberTwo.innerHTML = multiplicationRandomTwo;
	multiplicationUserInput.value = 0;	
	multiplicationUserInput.disabled = false;
}

// Check user input and display a success/error message
function multiplicationCheckAnswer() {
	if (multiplicationUserInput.value == multiplicationRandomOne * multiplicationRandomTwo) {
		document.getElementsByClassName('messages')[2].innerHTML = "Well done!";
		document.getElementById('multiplyScore').innerHTML = multiplicationScore + " / 10";
	} else {
		document.getElementsByClassName('messages')[2].innerHTML = "The correct answer is " + (multiplicationRandomOne * multiplicationRandomTwo);
		document.getElementById('multiplyScore').innerHTML = multiplicationScore + " / 10";
	}
	multiplicationCheckInput.style.display = "none";
	multiplicationUserInput.disabled = true;
}

// Show subtraction test
function showMultiplication() {
	document.getElementById('multiplyTest').style.display = "block";
	multiplicationRandomNumbers();
}

// Hide subtraction test
function hideMultiplication() {
	document.getElementById('multiplyTest').style.display = "none";
}

// Restart the test
function restartMultiplication() {
	multiplicationScore = 0;
	multiplicationRandomNumbers();
	document.getElementById('finalMultiplyScore').style.display = "none";
}
// Clear input on click event
function clearMultiplicationInput() {
	multiplicationUserInput.value = '';
}

multiplicationNextSlide.addEventListener("click", multiplicationRandomNumbers);
multiplicationCheckInput.addEventListener("click", multiplicationCheckAnswer);
multiplySlides.addEventListener("click", showMultiplication);
multiplicationExitTest.addEventListener("click", hideMultiplication);
multiplicationRestart.addEventListener("click", restartMultiplication);
multiplicationUserInput.addEventListener("click", clearMultiplicationInput);


// DIVISION SCRIPT DIVISION SCRIPT DIVISION SCRIPT DIVISION SCRIPT DIVISION SCRIPT

var divisionSlides = document.getElementById('division');
var divisionNumberOne = document.getElementsByClassName('numberOne')[3];
var divisionNumberTwo = document.getElementsByClassName('numberTwo')[3];
var divisionRandomOne;
var divisionRandomTwo;
var divisionNextSlide = document.getElementsByClassName('nextSlide')[3];
var divisionUserInput = document.getElementsByClassName('input')[3];
var divisionCheckInput = document.getElementsByClassName('checkAnswer')[3];
var divisionScore = 0;
var divisionAddCount = 0;
var divisionExitTest = document.getElementsByClassName('exit')[3];
var divisionRestart = document.getElementsByClassName('restart')[3];

// Assign random numbers to be calculated
function divisionRandomNumbers() {
	document.getElementsByClassName('messages')[3].innerHTML = " ";
	divisionAddCount++;
	if (divisionAddCount == 11) {
		document.getElementById('finalDivisionScore').style.display = "block";
		divisionAddCount = 0;
	}
	divisionCheckInput.style.display = "block";
	if (divisionUserInput.value == (divisionRandomOne / divisionRandomTwo).toFixed(2)) {
		divisionScore++;
			if (divisionScore >= 10) {
			divisionScore = 10;
		}
		document.getElementById('divisionScore').innerHTML = divisionScore + " / 10";
	} else {
		document.getElementById('divisionScore').innerHTML = divisionScore + " / 10";
	}
	divisionRandomOne = (Math.floor(Math.random() * 101));
	divisionRandomTwo = (Math.floor(Math.random() * 11));
	divisionNumberOne.innerHTML = divisionRandomOne;
	divisionNumberTwo.innerHTML = divisionRandomTwo;
	divisionUserInput.value = 0;
	divisionUserInput.disabled = false;	
}

// Check user input and display a success/error message
function divisionCheckAnswer() {
	if (divisionUserInput.value == (divisionRandomOne / divisionRandomTwo).toFixed(2) || (divisionRandomOne / divisionRandomTwo).toFixed(1) || (divisionRandomOne / divisionRandomTwo).toFixed(0)) {
		document.getElementsByClassName('messages')[3].innerHTML = "Well done!";
		document.getElementById('divisionScore').innerHTML = divisionScore + " / 10";
	} else {
		document.getElementsByClassName('messages')[3].innerHTML = "The correct answer is " + ((divisionRandomOne / divisionRandomTwo).toFixed(2));
		document.getElementById('divisionScore').innerHTML = divisionScore + " / 10";
	}
	divisionCheckInput.style.display = "none";
	divisionUserInput.disabled = true;
}

// Show subtraction test
function showDivision() {
	document.getElementById('divisionTest').style.display = "block";
	divisionRandomNumbers();
}

// Hide subtraction test
function hideDivision() {
	document.getElementById('divisionTest').style.display = "none";
}

// Restart the test
function restartDivision() {
	divisionScore = 0;
	divisionRandomNumbers();
	document.getElementById('finalDivisionScore').style.display = "none";
}
// Clear input on click event
function clearDivisionInput() {
	divisionUserInput.value = '';
}

divisionNextSlide.addEventListener("click", divisionRandomNumbers);
divisionCheckInput.addEventListener("click", divisionCheckAnswer);
divisionSlides.addEventListener("click", showDivision);
divisionExitTest.addEventListener("click", hideDivision);
divisionRestart.addEventListener("click", restartDivision);
divisionUserInput.addEventListener("click", clearDivisionInput);



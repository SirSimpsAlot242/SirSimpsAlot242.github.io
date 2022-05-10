var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");
var q10 = document.getElementById("q10");
var but = document.getElementById("buttun");
var score = document.getElementById("score");
var result = 0;

function calculate(){
	result = 0;
	if(q1.value == "Elephant"){
		result = result + 1;
	}
	if(q2.value == "Flat Bottom Girls"){
		result = result + 1;
	}
	if(q3.value == "Revenge of the Sith"){
		result = result + 1;
	}
	if(q4.value == "A lot"){
		result = result + 1;
	}
	if(q5.value == "Yo-yo"){
		result = result + 1
	}
	if(q6.value == "Joe Esposito"){
	result = result + 1;
	}
	if(q7.value == "All of the above"){
		result = result + 1;
	}
	if(q8.value == "Aint nothing but a heartache"){
		result = result + 1;
	}
	if(q9.value == "Charzard"){
		result = result + 1;
	}
	if(q10.value == "The Fairy Godmother"){
		result = result + 1;
	}
	score.innerHTML = result;
}

but.addEventListener("click",calculate);
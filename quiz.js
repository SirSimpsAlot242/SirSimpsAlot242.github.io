var q1 = document.getElementById("q1");
var q1r = document.getElementById("q1r").innerHTML 


function quizq1() {
	if (q1.value == "Elephant") {
			q1r.innerHTML = "Correct!";
		}

	else{
		q1r.innerHTML = "Wrong! Bad! UnCorrect";
	}

}
document.getElementById("buttun").addEventListener("click", quizq1)
var entPass;


function password() {
	entPass = document.getElementById("password").value
	if (entPass == "BonBon"){
	document.getElementById("password").style.backgroundColor = "Green"
		document.getElementById("acc").innerHTML = "Access Granted"
		window.location = "index.html"
	}
	else if (document.getElementById("password").value != "BonBon"){
		document.getElementById("password").style.backgroundColor = "Red"
		document.getElementById("acc").innerHTML = "The password " + entPass + " was wrong"
	}
	
}



document.getElementById("butt").addEventListener("click",password );

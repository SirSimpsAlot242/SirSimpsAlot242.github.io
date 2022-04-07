function password() {
	if (document.getElementById("password").value == "BonBon"){
	document.getElementById("password").style.backgroundColor = "Green"
		document.getElementById("password").value = "Acess Granted"
	}
	else if (document.getElementById("password").value != "BonBon"){
		document.getElementById("password").style.backgroundColor = "Red"
		document.getElementById("password").value = "Acess Denied"
	}
	
}



document.getElementById("butt").addEventListener("click",password );

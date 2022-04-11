function password() {
	if (document.getElementById("password").value == "BonBon"){
	document.getElementById("password").style.backgroundColor = "Green"
		document.getElementById("acc").innerHTML = "Access Granted"
		window.location = "index.html"
	}
	else if (document.getElementById("password").value != "BonBon"){
		document.getElementById("password").style.backgroundColor = "Red"
		document.getElementById("acc").innerHTML = "Access Denied"
	}
	
}



document.getElementById("butt").addEventListener("click",password );

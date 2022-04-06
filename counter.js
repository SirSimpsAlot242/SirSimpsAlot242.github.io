var  count = 0;

function minus() {
	count = count -1;
	document.getElementById("TotalNum").innerHTML = count;
}

function plus() {
	count = count +1;
	document.getElementById("TotalNum").innerHTML = count;
}

function ten() {
	count = count *10
	document.getElementById("TotalNum").innerHTML = count;
}

function five() {
	count = count +5
	document.getElementById("TotalNum").innerHTML = count;
}

function divid() {
	count = count /2
	document.getElementById("TotalNum").innerHTML = count;
}

function hundo(){
	count = count +100
	document.getElementById("TotalNum").innerHTML = count;
}
function triple(){
	count = count -5
	document.getElementById("TotalNum").innerHTML = count;
}

function reset(){
	count = count *0;
	document.getElementById("TotalNum").innerHTML = 0;
}





document.getElementById("Minus").addEventListener("click", minus);
document.getElementById("Plus").addEventListener("click", plus);
document.getElementById("Times").addEventListener("click", ten);
document.getElementById("Five").addEventListener("click", five);
document.getElementById("Half").addEventListener("click", divid);
document.getElementById("Hundo").addEventListener("click", hundo);
document.getElementById("Triple").addEventListener("click", triple);
document.getElementById("Reset").addEventListener("click", reset);

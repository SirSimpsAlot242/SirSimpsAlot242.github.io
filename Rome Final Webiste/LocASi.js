var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var b6 = document.getElementById("b6")


var image = document.getElementById("pic1")


function changeImage1(){
	image.src = "one.png";
}
function changeImage2(){
	image.src = "two.jpg";
}
function changeImage3(){
	image.src = "three.png";
}
function changeImage4(){
	image.src = "four.jpg";
}
function changeImage5(){
	image.src = "five.jpg";
}
function changeImage6(){
	image.src = "six.jpg";
}


b1.addEventListener("click", changeImage1)
b2.addEventListener("click", changeImage2)
b3.addEventListener("click", changeImage3)
b4.addEventListener("click", changeImage4)
b5.addEventListener("click", changeImage5)
b6.addEventListener("click", changeImage6)





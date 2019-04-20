// JavaScript Document


function myFunction() {
    document.getElementById("Dropdown").classList.toggle("display");
}
function myFunction2() {
    document.getElementById("Dropdown2").classList.toggle("display");
}


window.onclick = function(e) {
  if (!e.target.matches('.btn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('display')) {
        myDropdown.classList.remove('display');
      }
  }
}
function myFunction3() {
    document.body.style.backgroundColor = "#9B59B6";
}
	function myFunction4() {
    document.body.style.backgroundColor ="#F3E5AB";
}
	function myFunction5() {
    document.body.style.backgroundColor ="#95B9C7";
}
    function myFunction6() {
    document.getElementById("list").style.color = "black";
   
}
	 function myFunction7() {
    document.getElementById("list").style.color = "blue";
   
}
	 function myFunction8() {
    document.getElementById("list").style.color = "red";
   
}
var captionText = document.getElementById("caption");
function imageFunction(imgs) {
    var expandIm = document.getElementById("expande");
    expandIm.src = imgs.src;
	 
    expandIm.parentElement.style.display = "block";
	captionText.innerHTML = this.alt;
}
	window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

	

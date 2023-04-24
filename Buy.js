var what_img = document.getElementById("what_img");
var miles_img = document.getElementById("miles_img");

var cart = new Array();


//WHAT'S UP DANGER
var what_num = 0;
what_img.addEventListener("click", function() {
    what_num = 1;
    what.style.boxShadow = "none";
    document.getElementById("what_fig").style.display = "none";
    document.getElementById("what_num").style.display = "inline-block";
    document.getElementById("what_num").innerHTML = what_num + " purchase";
    document.getElementById("what_done").style.display = "inline-block";
    document.getElementById("next").style.display = "inline-block";
});
document.getElementById("what_num").addEventListener("click", function() {
	what_num += 1;
	document.getElementById("what_num").innerHTML = what_num + " purchases";
});
document.getElementById("what_done").addEventListener("click", function() {
	cart.push(document.getElementById("what_fig").innerHTML + "(X" + what_num + ")");
	document.getElementById("what_done").style.display = "none";
	document.getElementById("what_num").style.display = "none";
	what_img.style.display = "none";
});
//WHAT'S UP DANGER


//MILES ART
var miles_num = 0;
miles_img.addEventListener("click", function() {
	miles_num = 1;
	miles.style.boxShadow = "none";
	document.getElementById("miles_fig").style.display = "none";
	document.getElementById("miles_num").style.display = "inline-block";
	document.getElementById("miles_num").innerHTML = miles_num + " purchase";
	document.getElementById("miles_done").style.display = "inline-block";
	document.getElementById("next").style.display = "inline-block";
});
document.getElementById("miles_num").addEventListener("click", function() {
	miles_num += 1;
	document.getElementById("miles_num").innerHTML = miles_num + " purchases";
});
document.getElementById("miles_done").addEventListener("click", function() {
	cart.push(document.getElementById("miles_fig").innerHTML + "(X" + miles_num + ")");
	document.getElementById("miles_done").style.display = "none";
	document.getElementById("miles_num").style.display = "none";
	miles_img.style.display = "none";
});
//MILES ART



//NEXT
document.getElementById("next").addEventListener("click", function() {
    if (cart.length > 0) {
		document.getElementById("main").style.display = "none";
		document.getElementById("next").style.display = "none";
		document.getElementById("form").style.display = "block";
		document.getElementById("y_items").value = cart;
		document.body.style.width = "500px";
		document.body.style.background = "none";
		document.body.style.backgroundColor = "dodgerblue";
	}
})

var state = false;
document.getElementById("next").addEventListener("mouseenter", function() {
	if(cart.length < 1) {
		if(state) {
			document.getElementById("next").style.transition = "margin-left 0.5s";
			document.getElementById("next").style.marginLeft = "300px";

			state = false;
		}

		else {
			document.getElementById("next").style.transition = "margin-left 0.5s";
			document.getElementById("next").style.marginLeft = "0";

			state = true;
		}
	}
});


document.getElementById("sub").addEventListener("click", function() {
    document.getElementById("y_items").disabled = false;
})